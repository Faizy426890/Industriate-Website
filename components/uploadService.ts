import { v4 as uuidv4 } from "uuid";
import type { CapturedFrame, UploadChunkRequest, UploadResponse } from "@/lib";
import {
  CHUNK_SIZE_BYTES,
  MAX_UPLOAD_RETRIES,
  UPLOAD_TIMEOUT_MS,
} from "@/lib/index2";

// ============================================================
// Upload Queue — singleton per tab
// ============================================================

class UploadQueue {
  private queue: CapturedFrame[] = [];
  private processing = false;
  private sessionId: string | null = null;

  setSessionId(id: string) {
    this.sessionId = id;
  }

  enqueue(frame: CapturedFrame) {
    this.queue.push(frame);
    if (!this.processing) {
      void this.drain();
    }
  }

  private async drain() {
    if (this.processing || this.queue.length === 0) return;
    this.processing = true;

    while (this.queue.length > 0) {
      const frame = this.queue[0];
      if (!frame) { this.queue.shift(); continue; }

      if (!this.sessionId) {
        await sleep(500);
        continue;
      }

      try {
        frame.uploadStatus = "uploading";
        await uploadFrameWithRetry(frame, this.sessionId);
        frame.uploadStatus = "success";
      } catch {
        frame.uploadStatus = "failed";
      }

      this.queue.shift();
    }

    this.processing = false;
  }

  pendingCount(): number {
    return this.queue.filter(
      (f) => f.uploadStatus === "pending" || f.uploadStatus === "uploading"
    ).length;
  }

  async flush(): Promise<void> {
    while (this.pendingCount() > 0) {
      await sleep(200);
    }
  }

  clear() {
    this.queue = [];
    this.processing = false;
  }
}

export const uploadQueue = new UploadQueue();

// ============================================================
// Core Upload Logic
// ============================================================

async function uploadFrameWithRetry(
  frame: CapturedFrame,
  sessionId: string
): Promise<void> {
  let attempt = 0;

  while (attempt < MAX_UPLOAD_RETRIES) {
    try {
      await uploadFrame(frame, sessionId);
      return;
    } catch (err) {
      attempt++;
      if (attempt >= MAX_UPLOAD_RETRIES) throw err;
      await sleep(Math.pow(2, attempt) * 500); // exponential backoff
    }
  }
}

async function uploadFrame(
  frame: CapturedFrame,
  sessionId: string
): Promise<void> {
  const arrayBuffer = await frame.blob.arrayBuffer();
  const bytes = new Uint8Array(arrayBuffer);
  const totalChunks = Math.ceil(bytes.length / CHUNK_SIZE_BYTES);

  for (let i = 0; i < totalChunks; i++) {
    const start = i * CHUNK_SIZE_BYTES;
    const end = Math.min(start + CHUNK_SIZE_BYTES, bytes.length);
    const chunk = bytes.slice(start, end);

    const base64 = uint8ToBase64(chunk);

    const payload: UploadChunkRequest = {
      sessionId,
      frameId: frame.id,
      stepIndex: frame.stepIndex,
      timestamp: frame.timestamp,
      chunkIndex: i,
      totalChunks,
      data: base64,
    };

    const controller = new AbortController();
    const timeout = setTimeout(
      () => controller.abort(),
      UPLOAD_TIMEOUT_MS
    );

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) {
        const body = (await response.json()) as { error?: string };
        throw new Error(body.error ?? `HTTP ${response.status}`);
      }

      const result = (await response.json()) as UploadResponse;
      if (!result.success) {
        throw new Error(result.error ?? "Upload failed");
      }
    } catch (err) {
      clearTimeout(timeout);
      throw err;
    }
  }
}

// ============================================================
// Session Management
// ============================================================

export async function createSession(): Promise<string> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    const response = await fetch("/api/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clientId: uuidv4() }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`Session creation failed: HTTP ${response.status}`);
    }

    const data = (await response.json()) as { sessionId: string };
    return data.sessionId;
  } catch (err) {
    clearTimeout(timeout);
    throw err;
  }
}

// ============================================================
// Helpers
// ============================================================

function uint8ToBase64(bytes: Uint8Array): string {
  let binary = "";
  const chunkSize = 8192;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode(...chunk);
  }
  return btoa(binary);
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}