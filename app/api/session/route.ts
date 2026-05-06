import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { SESSION_TTL_MS, RATE_LIMIT_SESSION_RPM } from "@/lib/index2";

// ============================================================
// Simple in-memory rate limiter (for production, use Redis)
// ============================================================

const rateMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string, limit: number): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }

  if (entry.count >= limit) return false;
  entry.count++;
  return true;
}

// Cleanup old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, val] of rateMap.entries()) {
    if (now > val.resetAt) rateMap.delete(key);
  }
}, 5 * 60_000);

// ============================================================
// Request Schema
// ============================================================

const SessionRequestSchema = z.object({
  clientId: z.string().uuid(),
});

// ============================================================
// POST /api/session
// ============================================================

export async function POST(request: NextRequest): Promise<NextResponse> {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  if (!checkRateLimit(ip, RATE_LIMIT_SESSION_RPM)) {
    return NextResponse.json(
      { error: "Too many requests", retryAfter: 60 },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const parsed = SessionRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid request", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const sessionId = uuidv4();
  const expiresAt = Date.now() + SESSION_TTL_MS;

  return NextResponse.json(
    { sessionId, expiresAt },
    {
      status: 201,
      headers: {
        "Cache-Control": "no-store",
        "X-Session-Id": sessionId,
      },
    }
  );
}