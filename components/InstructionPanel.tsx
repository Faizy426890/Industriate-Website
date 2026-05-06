"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ScanState } from "@/lib";
import { INSTRUCTION_HINT, INSTRUCTION_SHORT } from "@/lib/index2";

interface InstructionPanelProps {
  scanState: ScanState;
}

// Step icons for Face ID feel
const STEP_ICONS: Record<string, string> = {
  hold_still: "⬆",
  tilt_down:  "⬇",
  turn_left:  "←",
  turn_right: "→",
};

export function InstructionPanel({ scanState }: InstructionPanelProps) {
  const {
    phase,
    currentInstruction,
    steps,
    currentStepIndex,
    countdownSeconds,
    progressPercent,
  } = scanState;

  const isScanning = phase === "scanning";
  const isComplete = phase === "complete";
  const currentStep = steps[currentStepIndex];

  // Format countdown — show 1 decimal while < 3s for polish
  const countdownDisplay =
    countdownSeconds < 3 && isScanning
      ? countdownSeconds.toFixed(1)
      : Math.ceil(countdownSeconds).toString();

  // Color shifts as timer runs low
  const timerColor =
    countdownSeconds <= 3 ? "#ff3b30" :
    countdownSeconds <= 6 ? "#ff9500" :
    "#1d1d1f";

  return (
    <div className="flex flex-col items-center gap-3 w-full">

      {/* Main instruction */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentInstruction}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="text-center"
        >
          <p className="text-[17px] font-semibold text-slate-800 tracking-tight leading-snug">
            {isComplete ? "Scan complete" : currentInstruction}
          </p>
          {isScanning && currentStep && (
            <p className="text-[13px] text-slate-400 mt-0.5 font-normal">
              {INSTRUCTION_HINT[currentStep.instruction]}
            </p>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Countdown + step progress (scanning only) */}
      {isScanning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center gap-2.5 w-full"
        >
          {/* Big countdown number */}
          <motion.div
            className="flex items-end gap-1"
            key={Math.ceil(countdownSeconds)}
          >
            <motion.span
              className="font-bold tabular-nums"
              style={{
                fontSize: 52,
                lineHeight: 1,
                color: timerColor,
                transition: "color 0.4s ease",
                fontVariantNumeric: "tabular-nums",
              }}
              animate={countdownSeconds <= 3 ? { scale: [1, 1.08, 1] } : {}}
              transition={{ duration: 0.4 }}
            >
              {countdownDisplay}
            </motion.span>
            <span className="text-slate-400 text-[13px] font-medium mb-2">s</span>
          </motion.div>

          {/* Thin progress bar */}
          <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: countdownSeconds <= 3 ? "#ff3b30" : "#007aff",
                transition: "background 0.4s ease",
              }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>

          {/* Step pills */}
          <div className="flex gap-2 w-full">
            {steps.map((step, i) => {
              const isDone    = step.completed;
              const isActive  = i === currentStepIndex && !isDone;
              const isPending = !isDone && !isActive;
              return (
                <motion.div
                  key={i}
                  className="flex-1 flex flex-col items-center gap-1 py-2 rounded-xl"
                  style={{
                    background: isDone
                      ? "rgba(52,199,89,0.08)"
                      : isActive
                      ? "rgba(0,122,255,0.08)"
                      : "rgba(0,0,0,0.03)",
                    border: isDone
                      ? "1px solid rgba(52,199,89,0.25)"
                      : isActive
                      ? "1px solid rgba(0,122,255,0.25)"
                      : "1px solid rgba(0,0,0,0.06)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <span className="text-base">
                    {isDone ? "✓" : STEP_ICONS[step.instruction] ?? "·"}
                  </span>
                  <span
                    className="text-[10px] font-semibold tracking-wide"
                    style={{
                      color: isDone ? "#34c759" : isActive ? "#007aff" : "#aeaeb2",
                      transition: "color 0.3s",
                    }}
                  >
                    {INSTRUCTION_SHORT[step.instruction]}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Complete badge */}
      {isComplete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center gap-2.5 px-5 py-3 rounded-2xl"
          style={{
            background: "rgba(52,199,89,0.08)",
            border: "1px solid rgba(52,199,89,0.25)",
          }}
        >
          <motion.span
            className="text-xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            🎉
          </motion.span>
          <div>
            <p className="text-[14px] font-semibold" style={{ color: "#1a7f47" }}>
              All 4 angles captured
            </p>
            <p className="text-[12px]" style={{ color: "#57c675" }}>
              Processing your scan…
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}