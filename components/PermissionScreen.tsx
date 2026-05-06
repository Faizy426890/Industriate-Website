"use client";

import { motion } from "framer-motion";
import type { CameraError } from "@/lib";

interface PermissionScreenProps {
  error: CameraError | null;
  loading: boolean;
  onRequest: () => void;
  onRetry: () => void;
}

export function PermissionScreen({
  error,
  loading,
  onRequest,
  onRetry,
}: PermissionScreenProps) {
  const hasError = !!error;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center gap-6 text-center max-w-xs mx-auto"
    >
      {/* Icon */}
      <motion.div
        className="w-20 h-20 rounded-2xl flex items-center justify-center"
        style={{
          background: hasError
            ? "linear-gradient(135deg, #fee2e2, #fecaca)"
            : "linear-gradient(135deg, #e0e7ff, #c7d2fe)",
        }}
        animate={
          hasError
            ? { scale: [1, 1.03, 1] }
            : { scale: [1, 1.05, 1] }
        }
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-4xl" role="img" aria-label="Camera">
          {hasError && error?.code === "PERMISSION_DENIED" ? "🔒" : hasError ? "⚠️" : "📷"}
        </span>
      </motion.div>

      {/* Text */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-800 tracking-tight">
          {hasError
            ? error?.code === "PERMISSION_DENIED"
              ? "Camera Access Denied"
              : error?.code === "DEVICE_NOT_FOUND"
              ? "No Camera Found"
              : error?.code === "BROWSER_UNSUPPORTED"
              ? "Browser Not Supported"
              : "Camera Error"
            : "Camera Access Required"}
        </h2>
        <p className="text-[14px] text-slate-500 leading-relaxed">
          {hasError
            ? error?.message
            : "We need access to your camera to analyze your scalp condition in real time."}
        </p>
      </div>

      {/* Action */}
      {!hasError && (
        <motion.button
          onClick={onRequest}
          disabled={loading}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-3.5 rounded-xl font-semibold text-white text-[15px] transition-all"
          style={{
            background: loading
              ? "#a5b4fc"
              : "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
            boxShadow: loading
              ? "none"
              : "0 4px 20px rgba(99,102,241,0.4)",
          }}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <Spinner />
              Requesting...
            </span>
          ) : (
            "Allow Camera Access"
          )}
        </motion.button>
      )}

      {hasError && error?.recoverable && (
        <motion.button
          onClick={onRetry}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-3.5 rounded-xl font-semibold text-indigo-600 text-[15px] border-2 border-indigo-200 hover:border-indigo-400 transition-all"
        >
          Try Again
        </motion.button>
      )}

      {hasError && !error?.recoverable && (
        <p className="text-[13px] text-slate-400">
          Please check your browser settings and reload this page.
        </p>
      )}

      {/* Privacy note */}
      <p className="text-[12px] text-slate-400 flex items-center gap-1.5">
        <span className="inline-block w-3 h-3">🔐</span>
        Video is processed locally and never stored without permission
      </p>
    </motion.div>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}