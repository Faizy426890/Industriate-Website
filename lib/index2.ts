import type { ScanInstruction, ScanStep } from "@/lib";

// ============================================================
// Scan Configuration — 20 second total, 4 poses × 5s each
// ============================================================

export const SCAN_TOTAL_SECONDS = 20;
export const FRAME_CAPTURE_INTERVAL_MS = 350;   // capture every 350ms
export const FRAME_SAMPLE_THROTTLE_MS  = 100;   // analyze every 100ms
export const MAX_STORED_FRAMES = 30;
export const MAX_UPLOAD_RETRIES = 3;
export const UPLOAD_TIMEOUT_MS = 15_000;
export const CHUNK_SIZE_BYTES = 256 * 1024;     // 256 KB

// ============================================================
// Camera Constraints
// ============================================================

export const CAMERA_CONSTRAINTS: MediaStreamConstraints = {
  video: {
    facingMode: "user",
    width:  { ideal: 1280, min: 640 },
    height: { ideal: 720,  min: 480 },
    frameRate: { ideal: 30, min: 15 },
    aspectRatio: { ideal: 16 / 9 },
  },
  audio: false,
};

export const CAMERA_FALLBACK_CONSTRAINTS: MediaStreamConstraints = {
  video: {
    facingMode: "user",
    width:  { ideal: 640 },
    height: { ideal: 480 },
  },
  audio: false,
};

// ============================================================
// Brightness Thresholds
// ============================================================

export const BRIGHTNESS_TOO_DARK    = 35;
export const BRIGHTNESS_OVEREXPOSED = 235;

// ============================================================
// Head Detection Thresholds
// ============================================================

/** Yaw degrees to qualify as "turned left/right" */
export const HEAD_YAW_THRESHOLD_DEG   = 18;
/** Pitch degrees to qualify as "tilted down" */
export const HEAD_PITCH_DOWN_DEG      = -15;
/** Max allowed yaw while doing pitch-only move */
export const HEAD_YAW_TOLERANCE_DEG   = 25;
/** Max allowed pitch while doing yaw-only move */
export const HEAD_PITCH_TOLERANCE_DEG = 20;
/** Face bounding-box area ratios */
export const FACE_AREA_MIN_RATIO      = 0.04;
export const FACE_AREA_MAX_RATIO      = 0.60;
export const HEAD_CENTER_TOLERANCE    = 0.18;

// ============================================================
// Motion Stability
// ============================================================

export const MOTION_STABILITY_THRESHOLD = 15;

// ============================================================
// Scan Steps — 4 poses × 5s each = 20s total valid-pose time
// ============================================================

export const DEFAULT_SCAN_STEPS: ScanStep[] = [
  {
    instruction: "hold_still",
    label:       "Straight",
    completed:   false,
    timeRequired: 5000,   // 5s of stable face-forward
    startedAt:   null,
    capturedImage: null,
  },
  {
    instruction: "tilt_down",
    label:       "Tilt Down",
    completed:   false,
    timeRequired: 5000,
    startedAt:   null,
    capturedImage: null,
  },
  {
    instruction: "turn_left",
    label:       "Turn Left",
    completed:   false,
    timeRequired: 5000,
    startedAt:   null,
    capturedImage: null,
  },
  {
    instruction: "turn_right",
    label:       "Turn Right",
    completed:   false,
    timeRequired: 5000,
    startedAt:   null,
    capturedImage: null,
  },
];

// ============================================================
// Instruction Display Labels
// ============================================================

export const INSTRUCTION_LABELS: Record<ScanInstruction, string> = {
  hold_still: "Look straight ahead",
  tilt_down:  "Tilt your head down",
  turn_left:  "Turn your head left",
  turn_right: "Turn your head right",
};

export const INSTRUCTION_HINT: Record<ScanInstruction, string> = {
  hold_still: "Keep your face centered and hold still",
  tilt_down:  "Lower your chin toward your chest",
  turn_left:  "Rotate left until your ear faces the camera",
  turn_right: "Rotate right until your ear faces the camera",
};

export const INSTRUCTION_SHORT: Record<ScanInstruction, string> = {
  hold_still: "Straight",
  tilt_down:  "Tilt Down",
  turn_left:  "Turn Left",
  turn_right: "Turn Right",
};

// ============================================================
// MediaPipe CDN
// ============================================================

export const MEDIAPIPE_BASE_URL = "https://cdn.jsdelivr.net/npm/@mediapipe";

// ============================================================
// Rate Limiting (API)
// ============================================================

export const RATE_LIMIT_UPLOAD_RPM  = 120;
export const RATE_LIMIT_SESSION_RPM = 10;
export const SESSION_TTL_MS         = 30 * 60 * 1000;