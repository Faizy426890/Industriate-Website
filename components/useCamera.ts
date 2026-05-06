"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import type { UseCameraReturn, CameraError, CameraErrorCode } from "@/lib";
import { CAMERA_CONSTRAINTS, CAMERA_FALLBACK_CONSTRAINTS } from "@/lib/index2";

export function useCamera(): UseCameraReturn {
  // ✅ FIXED HERE
  const videoRef = useRef<HTMLVideoElement>(null);

  const streamRef = useRef<MediaStream | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<CameraError | null>(null);
  const mountedRef = useRef(true);
  const requestingRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      releaseStream(streamRef.current);
    };
  }, []);

  // Attach stream when available
  useEffect(() => {
    const video = videoRef.current;
    const mediaStream = streamRef.current;

    if (!video || !mediaStream || video.srcObject === mediaStream) return;

    video.srcObject = mediaStream;
    video.muted = true;
    video.playsInline = true;

    const doPlay = () => {
      if (!mountedRef.current) return;

      void video
        .play()
        .then(() => {
          if (mountedRef.current) setIsReady(true);
        })
        .catch(() => {
          if (mountedRef.current) setIsReady(true);
        });
    };

    if (video.readyState >= 3) {
      doPlay();
    } else {
      video.addEventListener("canplay", doPlay, { once: true });
    }
  }, [stream]);

  const attachStream = useCallback((mediaStream: MediaStream) => {
    if (!mountedRef.current) {
      releaseStream(mediaStream);
      return;
    }

    streamRef.current = mediaStream;
    setStream(mediaStream);

    const video = videoRef.current;

    if (video && video.srcObject !== mediaStream) {
      video.srcObject = mediaStream;
      video.muted = true;
      video.playsInline = true;

      const doPlay = () => {
        if (!mountedRef.current) return;

        void video
          .play()
          .then(() => {
            if (mountedRef.current) setIsReady(true);
          })
          .catch(() => {
            if (mountedRef.current) setIsReady(true);
          });
      };

      if (video.readyState >= 3) {
        doPlay();
      } else {
        video.addEventListener("canplay", doPlay, { once: true });
      }
    }

    // Handle camera interruption
    mediaStream.getTracks().forEach((track) => {
      track.addEventListener("ended", () => {
        if (mountedRef.current) {
          setIsReady(false);
          void attemptReconnect();
        }
      });
    });
  }, []);

  const attemptReconnect = useCallback(async () => {
    if (!mountedRef.current || requestingRef.current) return;
    await sleep(1500);
    if (mountedRef.current) await requestPermission();
  }, []);

  const requestPermission = useCallback(async () => {
    if (requestingRef.current) return;

    requestingRef.current = true;
    setError(null);
    setIsReady(false);

    releaseStream(streamRef.current);
    streamRef.current = null;
    setStream(null);

    if (!isBrowserSupported()) {
      setError({
        code: "BROWSER_UNSUPPORTED",
        message:
          "Your browser does not support camera access. Please use Chrome, Firefox, or Safari 14.1+.",
        recoverable: false,
      });
      requestingRef.current = false;
      return;
    }

    try {
      const mediaStream = await getUserMedia(CAMERA_CONSTRAINTS);
      attachStream(mediaStream);
      setError(null);
    } catch (primaryErr) {
      try {
        const mediaStream = await getUserMedia(
          CAMERA_FALLBACK_CONSTRAINTS
        );
        attachStream(mediaStream);
        setError(null);
      } catch (fallbackErr) {
        const cameraError = parseCameraError(
          fallbackErr ?? primaryErr
        );
        if (mountedRef.current) setError(cameraError);
      }
    }

    requestingRef.current = false;
  }, [attachStream]);

  const stop = useCallback(() => {
    releaseStream(streamRef.current);
    streamRef.current = null;
    setStream(null);
    setIsReady(false);

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }, []);

  const restart = useCallback(async () => {
    stop();
    await sleep(300);
    await requestPermission();
  }, [stop, requestPermission]);

  return {
    videoRef,
    stream,
    isReady,
    error,
    requestPermission,
    stop,
    restart,
  };
}

function releaseStream(stream: MediaStream | null) {
  if (!stream) return;
  stream.getTracks().forEach((t) => {
    try {
      t.stop();
    } catch {}
  });
}

function isBrowserSupported(): boolean {
  return (
    typeof navigator !== "undefined" &&
    typeof navigator.mediaDevices !== "undefined" &&
    typeof navigator.mediaDevices.getUserMedia === "function"
  );
}

async function getUserMedia(
  constraints: MediaStreamConstraints
): Promise<MediaStream> {
  return navigator.mediaDevices.getUserMedia(constraints);
}

function parseCameraError(err: unknown): CameraError {
  if (err instanceof DOMException) {
    switch (err.name) {
      case "NotAllowedError":
      case "PermissionDeniedError":
        return {
          code: "PERMISSION_DENIED",
          message:
            "Camera permission was denied. Please allow camera access in your browser settings.",
          recoverable: false,
        };
      case "NotFoundError":
      case "DevicesNotFoundError":
        return {
          code: "DEVICE_NOT_FOUND",
          message:
            "No camera found. Please connect a camera and try again.",
          recoverable: true,
        };
      case "OverconstrainedError":
        return {
          code: "OVERCONSTRAINED",
          message:
            "Camera does not meet requirements. Trying with lower settings.",
          recoverable: true,
        };
      default:
        return {
          code: "UNKNOWN",
          message: `Camera error: ${err.message}`,
          recoverable: true,
        };
    }
  }

  const code: CameraErrorCode = "UNKNOWN";

  return {
    code,
    message:
      "An unexpected camera error occurred. Please try again.",
    recoverable: true,
  };
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}