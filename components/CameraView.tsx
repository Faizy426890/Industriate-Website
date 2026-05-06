"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ScanState } from "@/lib";
import { ScanRing } from "@/components/scanring";

interface CameraViewProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isReady: boolean;
  scanState: ScanState;
  mediaPipeLoading: boolean;
}

// ============================================================
// Face Guide Oval — Face ID style
// ============================================================

function FaceGuideOval({
  hasWarning,
  isComplete,
  progressPercent,
}: {
  hasWarning: boolean;
  isComplete: boolean;
  progressPercent: number;
}) {
  const W = 300, H = 300;
  const cx = 150, cy = 148;
  const rx = 100, ry = 128;
  // Approximate circumference of ellipse
  const circ = 2 * Math.PI * Math.sqrt((rx * rx + ry * ry) / 2);
  const dashOffset = circ * (1 - progressPercent / 100);

  const trackColor = "rgba(255,255,255,0.25)";
  const activeColor = isComplete ? "#34c759" : hasWarning ? "#ff3b30" : "#007aff";

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 3 }}
    >
      <defs>
        <mask id="face-mask">
          <rect width={W} height={H} fill="white" />
          <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="black" />
        </mask>
        <filter id="face-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Dark vignette outside oval */}
      <rect
        width={W} height={H}
        fill="rgba(0,0,0,0.42)"
        mask="url(#face-mask)"
      />

      {/* Oval track */}
      <ellipse
        cx={cx} cy={cy} rx={rx} ry={ry}
        fill="none"
        stroke={trackColor}
        strokeWidth={2}
      />

      {/* Progress arc */}
      <ellipse
        cx={cx} cy={cy} rx={rx} ry={ry}
        fill="none"
        stroke={activeColor}
        strokeWidth={3}
        strokeDasharray={circ}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
        style={{
          transform: "rotate(-90deg)",
          transformOrigin: `${cx}px ${cy}px`,
          transition: "stroke-dashoffset 0.35s cubic-bezier(0.4,0,0.2,1), stroke 0.25s",
          filter: `drop-shadow(0 0 6px ${activeColor}88)`,
        }}
      />

      {/* Corner bracket marks — Face ID style */}
      {[
        { d: `M ${cx - rx + 16} ${cy - ry + 44} Q ${cx - rx - 2} ${cy - ry + 22} ${cx - rx + 22} ${cy - ry + 4}` },
        { d: `M ${cx + rx - 16} ${cy - ry + 44} Q ${cx + rx + 2} ${cy - ry + 22} ${cx + rx - 22} ${cy - ry + 4}` },
        { d: `M ${cx - rx + 16} ${cy + ry - 44} Q ${cx - rx - 2} ${cy + ry - 22} ${cx - rx + 22} ${cy + ry - 4}` },
        { d: `M ${cx + rx - 16} ${cy + ry - 44} Q ${cx + rx + 2} ${cy + ry - 22} ${cx + rx - 22} ${cy + ry - 4}` },
      ].map((b, i) => (
        <path
          key={i}
          d={b.d}
          stroke={activeColor}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity={0.9}
          style={{ transition: "stroke 0.25s" }}
        />
      ))}

      {/* Direction arrows */}
    </svg>
  );
}

// ============================================================
// Status Alert
// ============================================================

interface Alert {
  icon: string;
  text: string;
  type: "error" | "warning" | "success";
}

const ALERT_STYLES = {
  error:   { bg: "rgba(255,59,48,0.12)",  border: "rgba(255,59,48,0.3)",  text: "#ff3b30", dot: "#ff3b30" },
  warning: { bg: "rgba(255,149,0,0.12)",  border: "rgba(255,149,0,0.3)",  text: "#ff9500", dot: "#ff9500" },
  success: { bg: "rgba(52,199,89,0.12)",  border: "rgba(52,199,89,0.3)",  text: "#34c759", dot: "#34c759" },
};

function getAlert(scanState: ScanState): Alert | null {
  if (scanState.phase !== "scanning") return null;
  const warn  = scanState.warningMessage;
  const light = scanState.lightingMessage;

  if (warn?.includes("No face") || warn?.includes("Position")) {
    return { icon: "👤", text: warn, type: "error" };
  }
  if (warn) return { icon: "⚠️", text: warn, type: "warning" };
  if (light) return { icon: "💡", text: light, type: "warning" };
  return { icon: "✓", text: "Good — hold still", type: "success" };
}

// ============================================================
// Main CameraView
// ============================================================

export function CameraView({
  videoRef,
  isReady,
  scanState,
  mediaPipeLoading,
}: CameraViewProps) {
  const hasWarning = !!scanState.warningMessage || !!scanState.lightingMessage;
  const isScanning = scanState.phase === "scanning";
  const isComplete = scanState.phase === "complete";
  const alert      = getAlert(scanState);

  return (
    <div className="flex flex-col items-center gap-3 w-full">

      {/* Status pill */}
      <div style={{ minHeight: 38, width: "100%" }}>
        <AnimatePresence mode="wait">
          {alert && isScanning && (
            <motion.div
              key={alert.text}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="flex items-center gap-2.5 px-4 py-2 rounded-2xl w-full"
              style={{
                background: ALERT_STYLES[alert.type].bg,
                border: `1px solid ${ALERT_STYLES[alert.type].border}`,
              }}
            >
              <span className="text-sm flex-shrink-0">{alert.icon}</span>
              <span
                className="text-[13px] font-semibold flex-1 leading-tight"
                style={{ color: ALERT_STYLES[alert.type].text }}
              >
                {alert.text}
              </span>
              <motion.span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: ALERT_STYLES[alert.type].dot }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Camera — full-width rectangle with oval overlay (Face ID style) */}
      <div
        className="relative w-full overflow-hidden rounded-3xl"
        style={{
          aspectRatio: "3/4",
          maxHeight: 340,
          background: "#1c1c1e",
          boxShadow: isComplete
            ? "0 0 0 3px #34c759, 0 20px 50px rgba(0,0,0,0.25)"
            : hasWarning
            ? "0 0 0 2px rgba(255,59,48,0.6), 0 20px 50px rgba(0,0,0,0.25)"
            : "0 0 0 2px rgba(0,122,255,0.4), 0 20px 50px rgba(0,0,0,0.25)",
          transition: "box-shadow 0.35s ease",
        }}
      >
        {/* Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "scaleX(-1)",
            display: "block",
          }}
          aria-label="Camera preview"
        />

        {/* Face guide oval */}
        {isReady && (
          <FaceGuideOval
            hasWarning={hasWarning}
            isComplete={isComplete}
            progressPercent={scanState.progressPercent}
          />
        )}

        {/* Scan sweep line */}
        {isScanning && isReady && (
          <div
            className="absolute left-[14%] right-[14%] h-[2px] pointer-events-none"
            style={{
              background: hasWarning
                ? "linear-gradient(90deg, transparent, rgba(255,59,48,0.6), transparent)"
                : "linear-gradient(90deg, transparent, rgba(0,122,255,0.6), transparent)",
              animation: "scanline 2.5s ease-in-out infinite",
              zIndex: 4,
            }}
          />
        )}

        {/* Loading overlay */}
        {(!isReady || mediaPipeLoading) && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
            style={{ background: "rgba(28,28,30,0.9)", zIndex: 10 }}
          >
            <div
              className="w-9 h-9 rounded-full border-2"
              style={{
                borderColor: "rgba(0,122,255,0.2)",
                borderTopColor: "#007aff",
                animation: "spin 0.8s linear infinite",
              }}
            />
            <p className="text-[12px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
              {mediaPipeLoading ? "Loading AI model…" : "Starting camera…"}
            </p>
          </div>
        )}

        {/* Complete success overlay */}
        {isComplete && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: "rgba(52,199,89,0.15)", zIndex: 8 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background: "#34c759" }}
            >
              <span className="text-3xl text-white font-bold">✓</span>
            </motion.div>
          </motion.div>
        )}
      </div>

      <style>{`
        @keyframes spin     { to { transform: rotate(360deg); } }
        @keyframes scanline { 0%{top:12%} 50%{top:85%} 100%{top:12%} }
      `}</style>
    </div>
  );
}