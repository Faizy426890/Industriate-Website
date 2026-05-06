"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCamera } from "./useCamera";
import { useMediaPipe } from "./useMediapipe";
import { useFrameCapture } from "./useFrameCapture";
import { useScanOrchestrator } from "./useScanor";
import { CameraView } from "./CameraView";
import { InstructionPanel } from "./InstructionPanel";
import { PermissionScreen } from "./PermissionScreen";
import { SuccessScreen } from "./ResultScreen";
import type { FrameAnalysis } from "@/lib";

function ScannerInner() {
  const {
    videoRef,
    isReady: cameraReady,
    error: cameraError,
    requestPermission,
    restart: restartCamera,
  } = useCamera();

  const {
    initialized: mediaPipeReady,
    loading: mediaPipeLoading,
    error: mediaPipeError,
    analyzeFrame,
  } = useMediaPipe();

  const [sessionId, setSessionId] = useState<string | null>(null);
  const sessionIdRef = useRef<string | null>(null);

  const { capture } = useFrameCapture(sessionId);
  const captureRef  = useRef(capture);
  useEffect(() => { captureRef.current = capture; }, [capture]);

  const stableCapture = useCallback(
    (video: HTMLVideoElement, analysis: FrameAnalysis, stepIndex: number) => {
      captureRef.current(video, analysis, stepIndex);
    },
    []
  );

  const { scanState, start, stop, reset } = useScanOrchestrator(
    analyzeFrame,
    videoRef,
    stableCapture
  );

  useEffect(() => {
    if (scanState.sessionId && scanState.sessionId !== sessionIdRef.current) {
      sessionIdRef.current = scanState.sessionId;
      setSessionId(scanState.sessionId);
    }
  }, [scanState.sessionId]);

  // Pause when tab hidden
  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden && scanState.phase === "scanning") stop();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [scanState.phase, stop]);

  // Restart camera on orientation change
  useEffect(() => {
    const onOrientation = () => {
      if (scanState.phase === "scanning") {
        stop();
        setTimeout(() => void restartCamera(), 800);
      }
    };
    window.addEventListener("orientationchange", onOrientation);
    return () => window.removeEventListener("orientationchange", onOrientation);
  }, [scanState.phase, stop, restartCamera]);

  const isReady       = cameraReady && mediaPipeReady;
  const showPermission = !cameraReady;
  const showSuccess   = scanState.phase === "complete";

  const handleStart = useCallback(() => void start(), [start]);
  const handleReset = useCallback(() => { stop(); reset(); }, [stop, reset]);

  return (
    /**
     * ─── Face ID–style Light Theme ────────────────────────────────────────────
     * Clean white card on light grey background, iOS system feel.
     */
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4"
      style={{ background: "#f2f2f7" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-sm relative"
        style={{
          background: "#ffffff",
          borderRadius: 32,
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 24px 64px rgba(0,0,0,0.10)",
          padding: "24px 20px 28px",
        }}
      >
        {/* ── Header ────────────────────────────────────────────────────────── */}
        <div className="text-center mb-5">
          <div className="flex items-center justify-center gap-2 mb-1">
            <div
              className="w-7 h-7 rounded-xl flex items-center justify-center text-sm"
              style={{ background: "#007aff", boxShadow: "0 4px 12px rgba(0,122,255,0.35)" }}
            >
              <span style={{ filter: "brightness(10)" }}>🔬</span>
            </div>
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-slate-400">
              Scalp Analysis
            </span>
          </div>
          <p className="text-[12px] text-slate-400">
            {showSuccess
              ? "Review your captured images below"
              : scanState.phase === "scanning"
              ? "Follow the on-screen guidance"
              : "Face your camera to begin"}
          </p>
        </div>

        {/* ── MediaPipe error banner ─────────────────────────────────────────── */}
        <AnimatePresence>
          {mediaPipeError && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4 px-4 py-3 rounded-2xl text-center"
              style={{ background: "rgba(255,149,0,0.1)", border: "1px solid rgba(255,149,0,0.25)" }}
            >
              <p className="text-[12px] font-semibold text-orange-500">
                ⚠ AI model failed — please reload
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/*
          ✅ CameraView stays in DOM (hidden via CSS) so videoRef is always set
          when the stream arrives — prevents race conditions.
        */}
        <div
          className="flex-col items-center gap-4"
          style={{ display: showPermission || showSuccess ? "none" : "flex" }}
        >
          <CameraView
            videoRef={videoRef}
            isReady={isReady}
            scanState={scanState}
            mediaPipeLoading={mediaPipeLoading}
          />

          <InstructionPanel scanState={scanState} />

          {/* Start / Cancel button */}
          <AnimatePresence>
            {scanState.phase !== "scanning" && isReady && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="w-full"
              >
                <motion.button
                  onClick={handleStart}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 rounded-2xl font-bold text-white text-[15px] tracking-tight"
                  style={{
                    background: "linear-gradient(135deg, #007aff 0%, #0051d5 100%)",
                    boxShadow: "0 8px 24px rgba(0,122,255,0.35)",
                  }}
                >
                  {scanState.phase === "idle" ? "Begin Scan" : "Retry Scan"}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {scanState.phase === "scanning" && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={stop}
              className="text-[13px] font-medium text-slate-400 hover:text-slate-600 transition-colors"
            >
              Cancel scan
            </motion.button>
          )}
        </div>

        {/* Permission screen */}
        {showPermission && (
          <PermissionScreen
            error={cameraError}
            loading={false}
            onRequest={requestPermission}
            onRetry={restartCamera}
          />
        )}

        {/* Success screen */}
        {showSuccess && (
          <SuccessScreen
            scanState={scanState}
            onReset={handleReset}
          />
        )}

        {/* ── Footer ────────────────────────────────────────────────────────── */}
        <div className="mt-5 flex items-center justify-center gap-1.5">
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-green-400"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <p className="text-[10px] font-medium tracking-wider uppercase text-slate-300">
            Processed locally · End-to-end encrypted
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function ScannerPage() {
  return <ScannerInner />;
}