"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ScanState, CapturedScanImage } from "@/lib";

interface SuccessScreenProps {
  scanState: ScanState;
  onReset: () => void;
}

// Labels for the 8-image grid (primary + background per step)
const ANGLE_LABELS: Record<string, string> = {
  hold_still: "Straight",
  tilt_down:  "Tilt Down",
  turn_left:  "Turn Left",
  turn_right: "Turn Right",
};

export function SuccessScreen({ scanState, onReset }: SuccessScreenProps) {
  const { capturedImages, backgroundImages = [], capturedFrameCount, steps } = scanState;
  const [showResults, setShowResults] = useState(false);

  // Build the combined 8-image array: pair each step's primary + bg together
  const allImages: (CapturedScanImage & { shotLabel: string })[] = [];
  capturedImages.forEach((img, i) => {
    const bgImg = backgroundImages[i];
    allImages.push({ ...img, shotLabel: "Shot 1", isBestFrame: true });
    if (bgImg) allImages.push({ ...bgImg, shotLabel: "Shot 2", isBestFrame: false });
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center gap-5 w-full"
    >
      {/* Success icon */}
      <div className="relative">
        <motion.div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #d1fae5, #a7f3d0)" }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.span
            className="text-4xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 280 }}
          >
            ✓
          </motion.span>
        </motion.div>
        {[1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-2"
            style={{ borderColor: "#34c759" }}
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 1 + i * 0.4, opacity: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.5, ease: "easeOut" }}
          />
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-[22px] font-bold text-slate-800 tracking-tight">Scan Complete</h2>
        <p className="text-[14px] text-slate-500 mt-1">
          {capturedImages.length} angles captured · {capturedFrameCount} frames analyzed
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 w-full">
        {[
          { label: "Angles",  value: capturedImages.length.toString(), color: "#007aff" },
          { label: "Frames",  value: capturedFrameCount.toString(),    color: "#34c759" },
          { label: "Duration", value: "20s",                           color: "#ff9500" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl p-3 text-center"
            style={{ background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.06)" }}
          >
            <p className="text-[22px] font-bold" style={{ color: s.color }}>{s.value}</p>
            <p className="text-[10px] text-slate-400 font-medium mt-0.5 tracking-wide uppercase">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Step completion summary */}
      <div className="w-full flex gap-2">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col items-center gap-1 py-2 rounded-xl"
            style={{
              background: step.completed ? "rgba(52,199,89,0.08)" : "rgba(0,0,0,0.03)",
              border: step.completed ? "1px solid rgba(52,199,89,0.25)" : "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <span className="text-sm">{step.completed ? "✓" : "○"}</span>
            <span
              className="text-[9px] font-semibold uppercase tracking-wide"
              style={{ color: step.completed ? "#34c759" : "#aeaeb2" }}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>

      {/* ── Show Results Button ─────────────────────────────────────────────── */}
      {!showResults && (
        <motion.button
          onClick={() => setShowResults(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-4 rounded-2xl font-bold text-white text-[15px] tracking-tight"
          style={{
            background: "linear-gradient(135deg, #007aff 0%, #0051d5 100%)",
            boxShadow: "0 8px 24px rgba(0,122,255,0.35)",
          }}
        >
          Show Results
        </motion.button>
      )}

      {/* ── 8-Image Grid (revealed after button tap) ────────────────────────── */}
      <AnimatePresence>
        {showResults && (
          <motion.div
            key="results-grid"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full"
          >
            <p className="text-[12px] font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Scan Results — 8 Captures
            </p>

            {/* Group by angle: 2 columns per angle row */}
            <div className="flex flex-col gap-4">
              {capturedImages.map((primary, i) => {
                const bg = backgroundImages[i];
                const angleLabel = ANGLE_LABELS[primary.instruction] ?? primary.label;
                return (
                  <div key={i}>
                    {/* Angle header */}
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                        style={{ background: "#007aff" }}
                      >
                        {i + 1}
                      </div>
                      <span className="text-[12px] font-semibold text-slate-600 uppercase tracking-wide">
                        {angleLabel}
                      </span>
                    </div>

                    {/* Two side-by-side images */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {[primary, bg].map((img, j) => {
                        if (!img) return null;
                        return (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 + j * 0.05 }}
                            className="relative rounded-2xl overflow-hidden"
                            style={{
                              aspectRatio: "4/3",
                              background: "#f2f2f7",
                              border: j === 0
                                ? "2px solid #007aff"
                                : "1px solid rgba(0,0,0,0.08)",
                              boxShadow: j === 0
                                ? "0 0 0 3px rgba(0,122,255,0.12)"
                                : "none",
                            }}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={img.dataUrl}
                              alt={`${angleLabel} shot ${j + 1}`}
                              className="w-full h-full object-cover"
                            />
                            {/* Shot label */}
                            <div
                              className="absolute bottom-0 inset-x-0 py-1.5 text-center"
                              style={{ background: "rgba(0,0,0,0.55)" }}
                            >
                              <span className="text-white text-[10px] font-bold uppercase tracking-wider">
                                Shot {j + 1}
                              </span>
                            </div>
                            {/* Best badge */}
                            {j === 0 && (
                              <div
                                className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wide"
                                style={{ background: "#007aff", color: "#fff" }}
                              >
                                Best
                              </div>
                            )}
                            {/* Checkmark */}
                            <div
                              className="absolute top-2 left-2 w-5 h-5 rounded-full flex items-center justify-center"
                              style={{ background: "#34c759" }}
                            >
                              <span className="text-white text-[10px] font-bold">✓</span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Summary */}
            <div
              className="mt-4 px-4 py-3 rounded-2xl flex items-center gap-2.5"
              style={{ background: "rgba(0,122,255,0.06)", border: "1px solid rgba(0,122,255,0.15)" }}
            >
              <span className="text-lg">📸</span>
              <p className="text-[12px] text-slate-500 leading-relaxed">
                <span className="font-semibold text-slate-700">{allImages.length} images</span> captured across{" "}
                <span className="font-semibold text-slate-700">4 angles</span>. Ready for AI analysis.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={onReset}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="w-full py-4 rounded-2xl font-semibold text-[15px] tracking-tight"
        style={{
          background: "rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.1)",
          color: "#007aff",
        }}
      >
        Scan Again
      </motion.button>
    </motion.div>
  );
}