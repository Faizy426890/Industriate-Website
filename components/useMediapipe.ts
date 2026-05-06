"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import type { UseMediaPipeReturn, FrameAnalysis } from "@/lib";
import {
  initializeMediaPipe,
  analyzeFrame,
  destroyMediaPipe,
  isMediaPipeReady,
} from "@/components/dynamic-loader";

export function useMediaPipe(): UseMediaPipeReturn {
  const [initialized, setInitialized] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mountedRef = useRef(true);
  const analyzingRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const initialize = useCallback(async () => {
    if (isMediaPipeReady()) {
      setInitialized(true);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await initializeMediaPipe();
      if (mountedRef.current) {
        setInitialized(true);
        setLoading(false);
      }
    } catch (err) {
      if (mountedRef.current) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load detection models"
        );
        setLoading(false);
      }
    }
  }, []);

  // Auto-initialize on mount
  useEffect(() => {
    void initialize();
  }, [initialize]);

  const analyze = useCallback(
    async (video: HTMLVideoElement): Promise<FrameAnalysis | null> => {
      if (!initialized || analyzingRef.current) return null;
      analyzingRef.current = true;
      try {
        return await analyzeFrame(video);
      } catch {
        return null;
      } finally {
        analyzingRef.current = false;
      }
    },
    [initialized]
  );

  const destroy = useCallback(() => {
    destroyMediaPipe();
    setInitialized(false);
  }, []);

  return {
    initialized,
    loading,
    error,
    analyzeFrame: analyze,
    destroy,
  };
}