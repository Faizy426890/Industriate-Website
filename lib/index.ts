// ============================================================
// Core Detection & Validation Types
// ============================================================

export type HeadDirection = "left" | "right" | "up" | "down" | "center";
export type LightingState = "too_dark" | "overexposed" | "uneven" | "perfect";

// 4-step scan sequence: straight → tilt_down → turn_left → turn_right
export type ScanInstruction =
  | "hold_still"
  | "tilt_down"
  | "turn_left"
  | "turn_right";

export type FrameValidationFailure =
  | "hands_visible"
  | "face_dominates"
  | "shoulders_dominate"
  | "too_far"
  | "too_close"
  | "multiple_people"
  | "no_head_detected"
  | "unstable"
  | "wrong_direction"
  | "lighting_dark"
  | "lighting_bright"
  | "lighting_uneven";

export type ScanPhase =
  | "idle"
  | "permission_request"
  | "permission_denied"
  | "camera_error"
  | "browser_unsupported"
  | "initializing"
  | "scanning"
  | "complete"
  | "upload_error";

// ============================================================
// Detection Result Types
// ============================================================

export interface LandmarkPoint {
  x: number;
  y: number;
  z: number;
}

export interface HeadDetectionResult {
  detected: boolean;
  direction: HeadDirection;
  yaw: number;   // degrees, positive = right
  pitch: number; // degrees, positive = up
  boundingBox: BoundingBox | null;
  centerX: number;
  centerY: number;
  faceAreaRatio: number;
}

export interface HandDetectionResult {
  detected: boolean;
  count: number;
}

export interface PoseDetectionResult {
  detected: boolean;
  shoulderAreaRatio: number;
  multiPersonDetected: boolean;
}

export interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface BrightnessResult {
  mean: number;
  variance: number;
  state: LightingState;
}

export interface MotionResult {
  stable: boolean;
  motionScore: number;
}

export interface FrameAnalysis {
  timestamp: number;
  head: HeadDetectionResult;
  hands: HandDetectionResult;
  pose: PoseDetectionResult;
  brightness: BrightnessResult;
  motion: MotionResult;
  valid: boolean;
  failures: FrameValidationFailure[];
}

// ============================================================
// Captured Image per scan step
// ============================================================

export interface CapturedScanImage {
  instruction: ScanInstruction;
  label: string;
  dataUrl: string;        // JPEG data URL
  blob: Blob;
  timestamp: number;
  frameAnalysis: FrameAnalysis;
  isBestFrame: boolean;   // highest-quality frame auto-selected
}

// ============================================================
// Scan State — 10s countdown, 4 steps, captured images
// ============================================================

export interface ScanStep {
  instruction: ScanInstruction;
  label: string;           // short display label
  completed: boolean;
  timeRequired: number;    // ms of valid pose required
  startedAt: number | null;
  capturedImage: CapturedScanImage | null;
}

export interface ScanState {
  phase: ScanPhase;
  currentStepIndex: number;
  steps: ScanStep[];
  /** Countdown in seconds (10 → 0). Pauses when pose is wrong. */
  countdownSeconds: number;
  progressPercent: number;
  currentInstruction: string;
  warningMessage: string | null;
  lightingMessage: string | null;
  capturedFrameCount: number;
  capturedImages: CapturedScanImage[];
  /** Second silent capture per step — 8 total, revealed on "Show Results" */
  backgroundImages: CapturedScanImage[];
  bestFrameIndex: number;   // index into capturedImages with highest quality
  sessionId: string | null;
}

// ============================================================
// Upload Types
// ============================================================

export interface CapturedFrame {
  id: string;
  blob: Blob;
  timestamp: number;
  stepIndex: number;
  frameAnalysis: FrameAnalysis;
  uploadStatus: "pending" | "uploading" | "success" | "failed";
  retries: number;
}

export interface UploadChunkRequest {
  sessionId: string;
  frameId: string;
  stepIndex: number;
  timestamp: number;
  chunkIndex: number;
  totalChunks: number;
  data: string; // base64
}

export interface UploadResponse {
  success: boolean;
  frameId: string;
  error?: string;
}

export interface SessionCreateResponse {
  sessionId: string;
  expiresAt: number;
}

// ============================================================
// API Types
// ============================================================

export interface ApiError {
  code: string;
  message: string;
  retryAfter?: number;
}

// ============================================================
// MediaPipe Types
// ============================================================

export interface FaceMeshResults {
  multiFaceLandmarks: LandmarkPoint[][];
}

// ============================================================
// Hook Return Types
// ============================================================

export interface UseCameraReturn {
  videoRef: React.RefObject<HTMLVideoElement>; // ✅ FIXED
  stream: MediaStream | null;
  isReady: boolean;
  error: CameraError | null;
  requestPermission: () => Promise<void>;
  stop: () => void;
  restart: () => Promise<void>;
}

export type CameraErrorCode =
  | "PERMISSION_DENIED"
  | "DEVICE_NOT_FOUND"
  | "BROWSER_UNSUPPORTED"
  | "OVERCONSTRAINED"
  | "UNKNOWN";

export interface CameraError {
  code: CameraErrorCode;
  message: string;
  recoverable: boolean;
}

export interface UseMediaPipeReturn {
  initialized: boolean;
  loading: boolean;
  error: string | null;
  analyzeFrame: (video: HTMLVideoElement) => Promise<FrameAnalysis | null>;
  destroy: () => void;
}

export interface UseScanOrchestratorReturn {
  scanState: ScanState;
  start: () => void;
  stop: () => void;
  reset: () => void;
}

export interface UseFrameCaptureReturn {
  capture: (
    video: HTMLVideoElement,
    analysis: FrameAnalysis,
    stepIndex: number
  ) => void;
  pendingCount: number;
  flush: () => Promise<void>;
}