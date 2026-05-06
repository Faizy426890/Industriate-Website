import type {
  ScanInstruction,
  HeadDetectionResult,
} from "@/lib";
import {
  HEAD_YAW_THRESHOLD_DEG,
  HEAD_PITCH_DOWN_DEG,
  HEAD_YAW_TOLERANCE_DEG,
  HEAD_PITCH_TOLERANCE_DEG,
} from "@/lib/index2";

// ============================================================
// Direction Validation for 4-pose scan
//
// NOTE: MediaPipe receives the raw (unmirrored) video stream.
// Landmark coordinates are anatomically correct.
// Positive yaw  = head turned to its RIGHT  (camera-left if mirrored).
// Negative yaw  = head turned to its LEFT   (camera-right if mirrored).
// Negative pitch = head pitched DOWN (chin toward chest).
// ============================================================

export interface DirectionValidationResult {
  passes: boolean;
  warningMessage: string | null;
}

export function validateDirection(
  instruction: ScanInstruction,
  head: HeadDetectionResult,
  isStable: boolean
): DirectionValidationResult {
  if (!head.detected) {
    return { passes: false, warningMessage: "No face detected — center your face" };
  }

  const { yaw, pitch } = head;

  switch (instruction) {
    // ── Step 1: Straight ──────────────────────────────────────────────────────
    case "hold_still": {
      if (!isStable) {
        return { passes: false, warningMessage: "Hold still" };
      }
      // Accept ±18° yaw and ±15° pitch as "straight"
      if (Math.abs(yaw) > HEAD_YAW_THRESHOLD_DEG) {
        return {
          passes: false,
          warningMessage: yaw > 0 ? "Turn slightly left" : "Turn slightly right",
        };
      }
      if (pitch < HEAD_PITCH_DOWN_DEG) {
        return { passes: false, warningMessage: "Lift your chin" };
      }
      if (pitch > 20) {
        return { passes: false, warningMessage: "Lower your chin slightly" };
      }
      return { passes: true, warningMessage: null };
    }

    // ── Step 2: Tilt Down ─────────────────────────────────────────────────────
    case "tilt_down": {
      // Need pitch < threshold (chin down) with yaw staying centered
      if (pitch > HEAD_PITCH_DOWN_DEG) {
        return { passes: false, warningMessage: "Tilt your head further down" };
      }
      if (Math.abs(yaw) > HEAD_YAW_TOLERANCE_DEG) {
        return {
          passes: false,
          warningMessage: yaw > 0 ? "Turn slightly left while tilting" : "Turn slightly right while tilting",
        };
      }
      if (!isStable) {
        return { passes: false, warningMessage: "Hold still" };
      }
      return { passes: true, warningMessage: null };
    }

    // ── Step 3: Turn Left ─────────────────────────────────────────────────────
    case "turn_left": {
      // Negative yaw = anatomical left turn
      if (yaw > -HEAD_YAW_THRESHOLD_DEG) {
        return {
          passes: false,
          warningMessage: yaw > 0 ? "Turn to your left" : "Turn a little further left",
        };
      }
      if (Math.abs(pitch) > HEAD_PITCH_TOLERANCE_DEG) {
        return { passes: false, warningMessage: "Keep your chin level" };
      }
      if (!isStable) {
        return { passes: false, warningMessage: "Hold still" };
      }
      return { passes: true, warningMessage: null };
    }

    // ── Step 4: Turn Right ────────────────────────────────────────────────────
    case "turn_right": {
      // Positive yaw = anatomical right turn
      if (yaw < HEAD_YAW_THRESHOLD_DEG) {
        return {
          passes: false,
          warningMessage: yaw < 0 ? "Turn to your right" : "Turn a little further right",
        };
      }
      if (Math.abs(pitch) > HEAD_PITCH_TOLERANCE_DEG) {
        return { passes: false, warningMessage: "Keep your chin level" };
      }
      if (!isStable) {
        return { passes: false, warningMessage: "Hold still" };
      }
      return { passes: true, warningMessage: null };
    }

    default:
      return { passes: true, warningMessage: null };
  }
}

export function getLightingMessage(state: string): string | null {
  switch (state) {
    case "too_dark":    return "Too dark — move to a brighter area";
    case "overexposed": return "Too bright — reduce direct light";
    default:            return null;
  }
}

export function getPositionMessage(head: HeadDetectionResult): string | null {
  if (!head.detected)                  return "Position your face in the frame";
  if (head.faceAreaRatio < 0.04)       return "Move closer to the camera";
  if (head.faceAreaRatio > 0.60)       return "Move back a little";
  return null;
}