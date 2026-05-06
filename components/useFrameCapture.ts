"use client";

import { useRef, useCallback, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import type { UseFrameCaptureReturn, FrameAnalysis, CapturedFrame } from "@/lib"
import { captureFrameBlob } from ".";
import { uploadQueue } from "./uploadService";
import { MAX_STORED_FRAMES, FRAME_CAPTURE_INTERVAL_MS } from "@/lib/index2";

export function useFrameCapture(sessionId: string | null): UseFrameCaptureReturn {
  const lastCaptureRef = useRef<number>(0);
  const pendingCountRef = useRef(0);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    if (sessionId) {
      uploadQueue.setSessionId(sessionId);
    }
    return () => {
      mountedRef.current = false;
    };
  }, [sessionId]);

  useEffect(() => {
    if (sessionId) {
      uploadQueue.setSessionId(sessionId);
    }
  }, [sessionId]);

  const capture = useCallback(
    (
      video: HTMLVideoElement,
      analysis: FrameAnalysis,
      stepIndex: number
    ) => {
      if (!mountedRef.current) return;

      const now = performance.now();
      if (now - lastCaptureRef.current < FRAME_CAPTURE_INTERVAL_MS) return;
      if (!analysis.valid) return;
      if (pendingCountRef.current >= MAX_STORED_FRAMES) return;

      lastCaptureRef.current = now;
      pendingCountRef.current++;

      // Capture async without blocking animation loop
      void captureFrameBlob(video, 0.75).then((blob) => {
        if (!blob || !mountedRef.current) {
          pendingCountRef.current = Math.max(0, pendingCountRef.current - 1);
          return;
        }

        const frame: CapturedFrame = {
          id: uuidv4(),
          blob,
          timestamp: Date.now(),
          stepIndex,
          frameAnalysis: analysis,
          uploadStatus: "pending",
          retries: 0,
        };

        uploadQueue.enqueue(frame);
        pendingCountRef.current = Math.max(0, pendingCountRef.current - 1);
      });
    },
    []
  );

  const flush = useCallback(async () => {
    await uploadQueue.flush();
  }, []);

  return {
    capture,
    pendingCount: pendingCountRef.current,
    flush,
  };
}