import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { RATE_LIMIT_UPLOAD_RPM } from "@/lib/index2";

// ============================================================
// Rate limiting
// ============================================================

const uploadRateMap = new Map<string, { count: number; resetAt: number }>();

function checkUploadRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = uploadRateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    uploadRateMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }

  if (entry.count >= RATE_LIMIT_UPLOAD_RPM) return false;
  entry.count++;
  return true;
}

setInterval(() => {
  const now = Date.now();
  for (const [k, v] of uploadRateMap.entries()) {
    if (now > v.resetAt) uploadRateMap.delete(k);
  }
}, 5 * 60_000);

// ============================================================
// Schema
// ============================================================

const UploadChunkSchema = z.object({
  sessionId: z.string().uuid(),
  frameId: z.string().uuid(),
  stepIndex: z.number().int().min(0).max(20),
  timestamp: z.number().positive(),
  chunkIndex: z.number().int().min(0),
  totalChunks: z.number().int().min(1).max(50),
  data: z.string().min(1).max(400_000), // ~300KB base64 max per chunk
});

// ============================================================
// In-memory chunk store (replace with object storage in prod)
// ============================================================

interface ChunkBuffer {
  chunks: Map<number, string>;
  totalChunks: number;
  sessionId: string;
  stepIndex: number;
  timestamp: number;
  createdAt: number;
}

const chunkStore = new Map<string, ChunkBuffer>();

// Clean up abandoned uploads after 10 min
setInterval(() => {
  const cutoff = Date.now() - 10 * 60_000;
  for (const [k, v] of chunkStore.entries()) {
    if (v.createdAt < cutoff) chunkStore.delete(k);
  }
}, 5 * 60_000);

// ============================================================
// POST /api/upload
// ============================================================

export async function POST(request: NextRequest): Promise<NextResponse> {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  if (!checkUploadRateLimit(ip)) {
    return NextResponse.json(
      { success: false, error: "Rate limit exceeded" },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON" },
      { status: 400 }
    );
  }

  const parsed = UploadChunkSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { sessionId, frameId, stepIndex, timestamp, chunkIndex, totalChunks, data } =
    parsed.data;

  // Validate base64
  if (!/^[A-Za-z0-9+/=]+$/.test(data)) {
    return NextResponse.json(
      { success: false, error: "Invalid data encoding" },
      { status: 400 }
    );
  }

  // Get or create chunk buffer for this frame
  if (!chunkStore.has(frameId)) {
    chunkStore.set(frameId, {
      chunks: new Map(),
      totalChunks,
      sessionId,
      stepIndex,
      timestamp,
      createdAt: Date.now(),
    });
  }

  const buffer = chunkStore.get(frameId)!;

  // Security: session must match
  if (buffer.sessionId !== sessionId) {
    return NextResponse.json(
      { success: false, error: "Session mismatch" },
      { status: 403 }
    );
  }

  buffer.chunks.set(chunkIndex, data);

  // Check if all chunks received
  if (buffer.chunks.size === totalChunks) {
    // Reassemble
    const ordered: string[] = [];
    for (let i = 0; i < totalChunks; i++) {
      const chunk = buffer.chunks.get(i);
      if (!chunk) {
        return NextResponse.json(
          { success: false, error: "Missing chunk" },
          { status: 400 }
        );
      }
      ordered.push(chunk);
    }

    const fullBase64 = ordered.join("");

    // In production: decode base64 -> Uint8Array -> store in S3/GCS
    // Here we verify it's valid and acknowledge
    try {
      // Validate that it decodes
      const binaryStr = atob(fullBase64);
      const byteLength = binaryStr.length;

      // Sanity check: JPEG should start with FF D8
      const firstByte = binaryStr.charCodeAt(0);
      const secondByte = binaryStr.charCodeAt(1);
      if (firstByte !== 0xff || secondByte !== 0xd8) {
        throw new Error("Not a valid JPEG");
      }

      // TODO (prod): await storageService.saveFrame({ sessionId, frameId, stepIndex, byteLength, data: fullBase64 });

      void byteLength; // suppress unused warning
    } catch (err) {
      chunkStore.delete(frameId);
      return NextResponse.json(
        { success: false, error: "Invalid image data" },
        { status: 400 }
      );
    }

    chunkStore.delete(frameId);
  }

  return NextResponse.json(
    { success: true, frameId },
    {
      status: 200,
      headers: { "Cache-Control": "no-store" },
    }
  );
}