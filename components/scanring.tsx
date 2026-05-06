"use client";

import { motion } from "framer-motion";
import type { ScanPhase } from "@/lib"

interface ScanRingProps {
  progress: number; // 0–100
  phase: ScanPhase;
  hasWarning: boolean;
}

const SIZE = 320;
const STROKE = 4;
const RADIUS = (SIZE - STROKE * 2) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ScanRing({ progress, phase, hasWarning }: ScanRingProps) {
  const dashOffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  const ringColor =
    phase === "complete"
      ? "#10b981" // emerald
      : hasWarning
      ? "#ef4444" // red
      : "#6366f1"; // indigo

  const glowColor =
    phase === "complete"
      ? "rgba(16,185,129,0.35)"
      : hasWarning
      ? "rgba(239,68,68,0.3)"
      : "rgba(99,102,241,0.3)";

  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      aria-hidden="true"
    >
      {/* Outer glow pulse */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: SIZE + 40,
          height: SIZE + 40,
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
        }}
        animate={{
          opacity: phase === "scanning" ? [0.4, 0.8, 0.4] : 0.6,
          scale: phase === "scanning" ? [0.97, 1.03, 0.97] : 1,
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* SVG ring */}
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        style={{ transform: "rotate(-90deg)" }}
      >
        {/* Track */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="rgba(148,163,184,0.15)"
          strokeWidth={STROKE}
        />

        {/* Progress arc */}
        <motion.circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke={ringColor}
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          animate={{ strokeDashoffset: dashOffset, stroke: ringColor }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ filter: `drop-shadow(0 0 6px ${ringColor})` }}
        />

        {/* Corner accent marks */}
        {[0, 90, 180, 270].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x = SIZE / 2 + (RADIUS + 12) * Math.cos(rad);
          const y = SIZE / 2 + (RADIUS + 12) * Math.sin(rad);
          return (
            <motion.circle
              key={angle}
              cx={x}
              cy={y}
              r={3}
              fill={ringColor}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: angle / 360,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>

      {/* Scanning line (sweeps inside ring) */}
      {phase === "scanning" && (
        <motion.div
          className="absolute rounded-full overflow-hidden"
          style={{ width: SIZE - STROKE * 4, height: SIZE - STROKE * 4 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: `conic-gradient(from 0deg, transparent 0%, ${ringColor}22 20%, transparent 21%)`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}

      {/* Corner bracket decorations */}
      <div
        className="absolute"
        style={{ width: SIZE + 8, height: SIZE + 8 }}
      >
        {[
          { top: 0, left: 0, rotate: 0 },
          { top: 0, right: 0, rotate: 90 },
          { bottom: 0, right: 0, rotate: 180 },
          { bottom: 0, left: 0, rotate: 270 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-5 h-5"
            style={{
              ...pos,
              borderColor: ringColor,
              borderStyle: "solid",
              borderWidth: 0,
              ...(pos.top !== undefined && pos.left !== undefined
                ? { borderTopWidth: 2, borderLeftWidth: 2 }
                : pos.top !== undefined
                ? { borderTopWidth: 2, borderRightWidth: 2 }
                : pos.left !== undefined
                ? { borderBottomWidth: 2, borderLeftWidth: 2 }
                : { borderBottomWidth: 2, borderRightWidth: 2 }),
              transform: `rotate(0deg)`,
            }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}