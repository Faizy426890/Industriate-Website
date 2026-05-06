"use client";

import { useReducer, useRef, useCallback, useEffect } from "react";
import type {
  ScanState,
  UseScanOrchestratorReturn,
  FrameAnalysis,
  ScanInstruction,
  CapturedScanImage,
} from "@/lib";
import {
  DEFAULT_SCAN_STEPS,
  INSTRUCTION_LABELS,
  SCAN_TOTAL_SECONDS,
  FRAME_SAMPLE_THROTTLE_MS,
} from "@/lib/index2";
import {
  validateDirection,
  getLightingMessage,
  getPositionMessage,
} from "@/components/direction";
import { captureFrameDataUrl, captureFrameBlob } from "@/components/index";
import { v4 as uuidv4 } from "uuid";
import { createSession } from "@/components/uploadService";

// ============================================================
// State Machine
// ============================================================

type Action =
  | { type: "START"; sessionId: string }
  | { type: "STOP" }
  | { type: "RESET" }
  | {
      type: "FRAME_RESULT";
      analysis: FrameAnalysis;
      warningMessage: string | null;
      lightingMessage: string | null;
      countdownPaused: boolean;
    }
  | { type: "TICK_COUNTDOWN"; delta: number }
  | {
      type: "STEP_COMPLETE";
      capturedImage: CapturedScanImage;
      /** Second background-captured image for this step (hidden from user) */
      bgImage: CapturedScanImage;
    }
  | { type: "SCAN_COMPLETE" };

function buildInitialState(): ScanState {
  return {
    phase: "idle",
    currentStepIndex: 0,
    steps: DEFAULT_SCAN_STEPS.map((s) => ({ ...s })),
    countdownSeconds: SCAN_TOTAL_SECONDS,
    progressPercent: 0,
    currentInstruction: INSTRUCTION_LABELS["hold_still"],
    warningMessage: null,
    lightingMessage: null,
    capturedFrameCount: 0,
    capturedImages: [],       // shown to user (4 images — 1 per step)
    backgroundImages: [],     // hidden (4 images — 1 extra per step, shown on "Show Results")
    bestFrameIndex: 0,
    sessionId: null,
  };
}

function reducer(state: ScanState, action: Action): ScanState {
  switch (action.type) {
    case "START":
      return {
        ...buildInitialState(),
        phase: "scanning",
        sessionId: action.sessionId,
        currentInstruction: INSTRUCTION_LABELS[DEFAULT_SCAN_STEPS[0]?.instruction ?? "hold_still"],
      };

    case "STOP":
      return { ...state, phase: "idle" };

    case "RESET":
      return buildInitialState();

    case "FRAME_RESULT": {
      if (state.phase !== "scanning") return state;
      return {
        ...state,
        warningMessage: action.warningMessage,
        lightingMessage: action.lightingMessage,
        capturedFrameCount: action.analysis.valid
          ? state.capturedFrameCount + 1
          : state.capturedFrameCount,
      };
    }

    case "TICK_COUNTDOWN": {
      if (state.phase !== "scanning") return state;
      const next = Math.max(0, state.countdownSeconds - action.delta);
      if (next <= 0) {
        return { ...state, countdownSeconds: 0, phase: "complete", progressPercent: 100 };
      }
      return { ...state, countdownSeconds: next };
    }

    case "STEP_COMPLETE": {
      const nextIndex = state.currentStepIndex + 1;
      const newSteps = state.steps.map((s, i) =>
        i === state.currentStepIndex
          ? { ...s, completed: true, capturedImage: action.capturedImage }
          : s
      );
      const completedCount = newSteps.filter((s) => s.completed).length;
      const progressPercent = Math.round((completedCount / newSteps.length) * 100);

      // capturedImages = primary images per step (shown after result reveal)
      const newImages = [...state.capturedImages, action.capturedImage];
      // backgroundImages = second silent capture per step
      const newBgImages = [...(state.backgroundImages ?? []), action.bgImage];

      if (nextIndex >= newSteps.length) {
        return {
          ...state,
          steps: newSteps,
          currentStepIndex: nextIndex,
          progressPercent: 100,
          countdownSeconds: 0,
          currentInstruction: "Scan complete!",
          warningMessage: null,
          capturedImages: newImages,
          backgroundImages: newBgImages,
          bestFrameIndex: newImages.length - 1,
          phase: "complete",
        };
      }

      const nextInstruction: ScanInstruction =
        newSteps[nextIndex]?.instruction ?? "hold_still";

      return {
        ...state,
        steps: newSteps,
        currentStepIndex: nextIndex,
        progressPercent,
        currentInstruction: INSTRUCTION_LABELS[nextInstruction],
        warningMessage: null,
        capturedImages: newImages,
        backgroundImages: newBgImages,
        bestFrameIndex: newImages.length - 1,
      };
    }

    case "SCAN_COMPLETE":
      return { ...state, phase: "complete", progressPercent: 100, countdownSeconds: 0 };

    default:
      return state;
  }
}

// ============================================================
// useScanOrchestrator
// ============================================================

export function useScanOrchestrator(
  analyzeFrame: (video: HTMLVideoElement) => Promise<FrameAnalysis | null>,
  videoRef: React.RefObject<HTMLVideoElement | null>,
  captureFrame: (video: HTMLVideoElement, analysis: FrameAnalysis, stepIndex: number) => void
): UseScanOrchestratorReturn {
  const [scanState, dispatch] = useReducer(reducer, buildInitialState());

  const rafRef             = useRef<number | null>(null);
  const lastAnalysisRef    = useRef<number>(0);
  const lastTickRef        = useRef<number>(0);
  const stepValidTimeRef   = useRef<number>(0);
  const scanStateRef       = useRef(scanState);
  const mountedRef         = useRef(true);
  const countdownPausedRef = useRef(false);

  // Track primary capture per step (fired early in the 5s window)
  const stepPrimaryCapturedRef  = useRef<Set<number>>(new Set());
  // Track secondary (bg) capture per step (fired ~2.5s into valid time)
  const stepSecondaryCapturedRef = useRef<Set<number>>(new Set());

  useEffect(() => { scanStateRef.current = scanState; }, [scanState]);
  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; cancelLoop(); };
  }, []);

  function cancelLoop() {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }

  const runLoop = useCallback((ts: number) => {
    if (!mountedRef.current) return;
    const state = scanStateRef.current;
    if (state.phase !== "scanning") { rafRef.current = null; return; }

    rafRef.current = requestAnimationFrame(runLoop);

    // ── Countdown tick ────────────────────────────────────────────────────
    if (lastTickRef.current === 0) lastTickRef.current = ts;
    const tickDelta = (ts - lastTickRef.current) / 1000;
    lastTickRef.current = ts;

    if (!countdownPausedRef.current && tickDelta > 0 && tickDelta < 0.5) {
      dispatch({ type: "TICK_COUNTDOWN", delta: tickDelta });
    }

    // ── Analysis throttle ─────────────────────────────────────────────────
    if (ts - lastAnalysisRef.current < FRAME_SAMPLE_THROTTLE_MS) return;
    lastAnalysisRef.current = ts;

    const video = videoRef.current;
    if (!video || video.readyState < 2) return;

    const currentStep = state.steps[state.currentStepIndex];
    if (!currentStep) return;
    const instruction = currentStep.instruction;

    void (async () => {
      const analysis = await analyzeFrame(video);
      if (!analysis || !mountedRef.current) return;
      if (scanStateRef.current.phase !== "scanning") return;

      // Background upload (for server)
      if (analysis.valid) captureFrame(video, analysis, state.currentStepIndex);

      // Direction validation
      const { passes, warningMessage } = validateDirection(
        instruction,
        analysis.head,
        analysis.motion.stable
      );

      const lightingMsg = analysis.brightness.state !== "perfect"
        ? getLightingMessage(analysis.brightness.state)
        : null;

      const positionMsg  = getPositionMessage(analysis.head);
      const finalWarning = positionMsg ?? warningMessage;
      const shouldPause  = !passes || !!positionMsg || !!lightingMsg;
      countdownPausedRef.current = shouldPause;

      dispatch({
        type: "FRAME_RESULT",
        analysis,
        warningMessage: finalWarning,
        lightingMessage: lightingMsg,
        countdownPaused: shouldPause,
      });

      if (passes && analysis.valid && !positionMsg) {
        stepValidTimeRef.current += FRAME_SAMPLE_THROTTLE_MS;

        const stepIdx      = scanStateRef.current.currentStepIndex;
        const timeRequired = scanStateRef.current.steps[stepIdx]?.timeRequired ?? 5000;

        // ── Primary capture — fires at ~1.5s valid time ───────────────────
        const PRIMARY_THRESHOLD = 1500;
        if (
          stepValidTimeRef.current >= PRIMARY_THRESHOLD &&
          !stepPrimaryCapturedRef.current.has(stepIdx)
        ) {
          stepPrimaryCapturedRef.current.add(stepIdx);
          // Capture silently in background
          const dataUrl1 = captureFrameDataUrl(video, 0.88);
          const blob1    = await captureFrameBlob(video, 0.88);

          if (dataUrl1 && blob1 && mountedRef.current) {
            // Store in a ref so secondary can reference it
            (stepPrimaryImageRef.current as Record<number, CapturedScanImage>)[stepIdx] = {
              instruction,
              label: currentStep.label,
              dataUrl: dataUrl1,
              blob: blob1,
              timestamp: Date.now(),
              frameAnalysis: analysis,
              isBestFrame: true,
            };
          }
        }

        // ── Secondary (bg) capture — fires at ~3.5s valid time ───────────
        const SECONDARY_THRESHOLD = 3500;
        if (
          stepValidTimeRef.current >= SECONDARY_THRESHOLD &&
          !stepSecondaryCapturedRef.current.has(stepIdx)
        ) {
          stepSecondaryCapturedRef.current.add(stepIdx);
          const dataUrl2 = captureFrameDataUrl(video, 0.88);
          const blob2    = await captureFrameBlob(video, 0.88);

          if (dataUrl2 && blob2 && mountedRef.current) {
            (stepSecondaryImageRef.current as Record<number, CapturedScanImage>)[stepIdx] = {
              instruction,
              label: currentStep.label,
              dataUrl: dataUrl2,
              blob: blob2,
              timestamp: Date.now(),
              frameAnalysis: analysis,
              isBestFrame: false,
            };
          }
        }

        // ── Step complete — fires when full timeRequired elapsed ──────────
        if (stepValidTimeRef.current >= timeRequired) {
          const primary   = (stepPrimaryImageRef.current as Record<number, CapturedScanImage>)[stepIdx];
          const secondary = (stepSecondaryImageRef.current as Record<number, CapturedScanImage>)[stepIdx];

          // Fallback: if captures haven't completed yet, take them now
          if (!primary) {
            const du = captureFrameDataUrl(video, 0.88);
            const bl = await captureFrameBlob(video, 0.88);
            if (du && bl && mountedRef.current) {
              (stepPrimaryImageRef.current as Record<number, CapturedScanImage>)[stepIdx] = {
                instruction, label: currentStep.label,
                dataUrl: du, blob: bl, timestamp: Date.now(),
                frameAnalysis: analysis, isBestFrame: true,
              };
            }
          }
          if (!secondary) {
            const du2 = captureFrameDataUrl(video, 0.85);
            const bl2 = await captureFrameBlob(video, 0.85);
            if (du2 && bl2 && mountedRef.current) {
              (stepSecondaryImageRef.current as Record<number, CapturedScanImage>)[stepIdx] = {
                instruction, label: currentStep.label,
                dataUrl: du2, blob: bl2, timestamp: Date.now(),
                frameAnalysis: analysis, isBestFrame: false,
              };
            }
          }

          const finalPrimary   = (stepPrimaryImageRef.current as Record<number, CapturedScanImage>)[stepIdx];
          const finalSecondary = (stepSecondaryImageRef.current as Record<number, CapturedScanImage>)[stepIdx];

          if (finalPrimary && finalSecondary && mountedRef.current) {
            stepValidTimeRef.current = 0;
            dispatch({
              type: "STEP_COMPLETE",
              capturedImage: finalPrimary,
              bgImage: finalSecondary,
            });
          }
        }
      } else {
        // Decay on bad pose
        stepValidTimeRef.current = Math.max(0, stepValidTimeRef.current - FRAME_SAMPLE_THROTTLE_MS * 0.5);
        if (stepValidTimeRef.current === 0) {
          const stepIdx = state.currentStepIndex;
          stepPrimaryCapturedRef.current.delete(stepIdx);
          stepSecondaryCapturedRef.current.delete(stepIdx);
        }
      }
    })();
  }, [analyzeFrame, videoRef, captureFrame]);

  // Refs to hold captured images between async calls within the loop
  const stepPrimaryImageRef   = useRef<Record<number, CapturedScanImage>>({});
  const stepSecondaryImageRef = useRef<Record<number, CapturedScanImage>>({});

  const start = useCallback(async () => {
    cancelLoop();
    stepValidTimeRef.current  = 0;
    lastTickRef.current       = 0;
    countdownPausedRef.current = true;
    stepPrimaryCapturedRef.current.clear();
    stepSecondaryCapturedRef.current.clear();
    stepPrimaryImageRef.current   = {};
    stepSecondaryImageRef.current = {};

    let sessionId: string;
    try { sessionId = await createSession(); }
    catch { sessionId = uuidv4(); }

    dispatch({ type: "START", sessionId });

    setTimeout(() => {
      if (mountedRef.current) {
        lastTickRef.current = 0;
        rafRef.current = requestAnimationFrame(runLoop);
      }
    }, 150);
  }, [runLoop]);

  const stop = useCallback(() => {
    cancelLoop();
    countdownPausedRef.current = true;
    dispatch({ type: "STOP" });
  }, []);

  const reset = useCallback(() => {
    cancelLoop();
    stepValidTimeRef.current  = 0;
    lastTickRef.current       = 0;
    countdownPausedRef.current = true;
    stepPrimaryCapturedRef.current.clear();
    stepSecondaryCapturedRef.current.clear();
    stepPrimaryImageRef.current   = {};
    stepSecondaryImageRef.current = {};
    dispatch({ type: "RESET" });
  }, []);

  return { scanState, start, stop, reset };
}