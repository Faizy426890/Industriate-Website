"use client";

import type {
  FrameAnalysis,
  HeadDetectionResult,
  HandDetectionResult,
  PoseDetectionResult,
  LandmarkPoint,
  HeadDirection,
  FrameValidationFailure,
} from "@/lib";
import {
  FACE_AREA_MAX_RATIO,
  FACE_AREA_MIN_RATIO,
  HEAD_YAW_THRESHOLD_DEG,
  HEAD_PITCH_DOWN_DEG,
  HEAD_YAW_TOLERANCE_DEG,
  HEAD_PITCH_TOLERANCE_DEG,
} from "@/lib/index2";
import { analyzeBrightness, analyzeMotion } from "@/components/index";

// ============================================================
// MediaPipe Dynamic Loader — FaceMesh only
//
// Loads FaceMesh SEQUENTIALLY to prevent CDN asset collision.
// Warms up WASM on a blank canvas before first real frame.
// ============================================================

type FaceMeshSolution = {
  setOptions: (opts: Record<string, unknown>) => void;
  onResults: (cb: (results: FaceMeshResults) => void) => void;
  send: (inputs: { image: HTMLVideoElement | HTMLCanvasElement }) => Promise<void>;
  close: () => void;
};

interface FaceMeshResults {
  multiFaceLandmarks?: LandmarkPoint[][];
}

let faceMesh: FaceMeshSolution | null = null;
let initialized = false;
let initializingPromise: Promise<void> | null = null;
let latestFaceResults: FaceMeshResults | null = null;

async function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
    const script = document.createElement("script");
    script.src = src;
    script.crossOrigin = "anonymous";
    script.onload  = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load: ${src}`));
    document.head.appendChild(script);
  });
}

export async function initializeMediaPipe(): Promise<void> {
  if (initialized) return;
  if (initializingPromise) return initializingPromise;

  initializingPromise = (async () => {
    const base = "https://cdn.jsdelivr.net/npm/@mediapipe";
    await loadScript(`${base}/face_mesh@0.4/face_mesh.js`);

    const w = window as unknown as Record<string, unknown>;
    const FaceMesh = w["FaceMesh"] as new (opts: Record<string, unknown>) => FaceMeshSolution;

    faceMesh = new FaceMesh({
      locateFile: (file: string) => `${base}/face_mesh@0.4/${file}`,
    });

    faceMesh.setOptions({
      maxNumFaces: 1,
      refineLandmarks: false,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    faceMesh.onResults((results) => {
      latestFaceResults = results;
    });

    // Warmup — forces WASM to load now instead of stalling first real frame
    const warmup = document.createElement("canvas");
    warmup.width = 1; warmup.height = 1;
    try { await faceMesh.send({ image: warmup }); } catch { /* expected */ }

    initialized = true;
  })();

  return initializingPromise;
}

export function destroyMediaPipe(): void {
  faceMesh?.close();
  faceMesh = null;
  initialized = false;
  initializingPromise = null;
  latestFaceResults = null;
}

// ============================================================
// Head Pose Estimation from 468 landmarks
//
// Uses ear-midpoint method for yaw, forehead-chin for pitch.
// Positive yaw  → head turned RIGHT anatomically.
// Negative pitch → head pitched DOWN (chin toward chest).
// ============================================================

function computeHeadAnalysis(
  landmarks: LandmarkPoint[],
  videoWidth: number,
  videoHeight: number
): HeadDetectionResult {
  // Key landmark indices (MediaPipe FaceMesh 468-point)
  const noseTip   = landmarks[1];
  const leftEar   = landmarks[234];
  const rightEar  = landmarks[454];
  const forehead  = landmarks[10];
  const chin      = landmarks[152];
  const leftEye   = landmarks[33];
  const rightEye  = landmarks[263];

  if (!noseTip || !leftEar || !rightEar || !forehead || !chin) {
    return { detected: false, direction: "center", yaw: 0, pitch: 0, boundingBox: null, centerX: 0.5, centerY: 0.5, faceAreaRatio: 0 };
  }

  // ── Yaw (left/right rotation) ────────────────────────────────────────────
  // Inter-ear distance is the reference; nose offset from ear midpoint gives yaw
  const earMidX = (leftEar.x + rightEar.x) / 2;
  const earWidth = Math.abs(rightEar.x - leftEar.x) + 1e-6;
  // Raw: positive = nose right of ears center = head turned right
  const yawRaw = ((noseTip.x - earMidX) / earWidth) * 90;
  // Mirror compensation: MediaPipe uses non-mirrored frame so no flip needed
  const yaw = yawRaw;

  // ── Pitch (up/down tilt) ─────────────────────────────────────────────────
  // Nose position relative to forehead-chin axis
  const faceHeight = Math.abs(chin.y - forehead.y) + 1e-6;
  const nosePctFromTop = (noseTip.y - forehead.y) / faceHeight;
  // nosePctFromTop ~0.38 when face is level; higher when tilted down
  // Positive pitch = nose high (tilted up); Negative pitch = nose low (tilted down)
  const pitch = (0.42 - nosePctFromTop) * 100;

  // ── Bounding box ──────────────────────────────────────────────────────────
  const xs = landmarks.map((l) => l.x);
  const ys = landmarks.map((l) => l.y);
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  const bbW  = (maxX - minX) * videoWidth;
  const bbH  = (maxY - minY) * videoHeight;
  const faceAreaRatio = (bbW * bbH) / (videoWidth * videoHeight);
  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2;

  // ── Direction classification ──────────────────────────────────────────────
  let direction: HeadDirection = "center";
  const absYaw   = Math.abs(yaw);
  const absPitch = Math.abs(pitch);

  if (absYaw > HEAD_YAW_THRESHOLD_DEG && absYaw >= absPitch * 0.7) {
    direction = yaw > 0 ? "right" : "left";
  } else if (pitch < HEAD_PITCH_DOWN_DEG) {
    direction = "down";
  } else if (pitch > 15) {
    direction = "up";
  }

  return {
    detected: true,
    direction,
    yaw,
    pitch,
    boundingBox: { x: minX * videoWidth, y: minY * videoHeight, width: bbW, height: bbH },
    centerX,
    centerY,
    faceAreaRatio,
  };
}

// ============================================================
// Full Frame Analysis
// ============================================================

export async function analyzeFrame(video: HTMLVideoElement): Promise<FrameAnalysis | null> {
  if (!initialized || !faceMesh) return null;
  if (video.readyState < 2 || video.videoWidth === 0) return null;

  const timestamp = performance.now();

  try { await faceMesh.send({ image: video }); } catch { return null; }

  const multiFace = latestFaceResults?.multiFaceLandmarks ?? [];

  let head: HeadDetectionResult;
  if (multiFace.length > 0 && multiFace[0]) {
    head = computeHeadAnalysis(multiFace[0], video.videoWidth, video.videoHeight);
  } else {
    head = { detected: false, direction: "center", yaw: 0, pitch: 0, boundingBox: null, centerX: 0.5, centerY: 0.5, faceAreaRatio: 0 };
  }

  const handDetection: HandDetectionResult = { detected: false, count: 0 };
  const poseDetection: PoseDetectionResult = {
    detected: head.detected,
    shoulderAreaRatio: 0,
    multiPersonDetected: multiFace.length > 1,
  };

  const brightness = analyzeBrightness(video);
  const motion     = analyzeMotion(video);

  const failures: FrameValidationFailure[] = [];
  if (!head.detected) failures.push("no_head_detected");
  if (head.detected) {
    if (head.faceAreaRatio < FACE_AREA_MIN_RATIO) failures.push("too_far");
    if (head.faceAreaRatio > FACE_AREA_MAX_RATIO) failures.push("too_close");
    if (multiFace.length > 1) failures.push("multiple_people");
  }
  if (brightness.state === "too_dark")    failures.push("lighting_dark");
  if (brightness.state === "overexposed") failures.push("lighting_bright");
  if (!motion.stable) failures.push("unstable");

  return {
    timestamp,
    head,
    hands: handDetection,
    pose: poseDetection,
    brightness,
    motion,
    valid: failures.length === 0,
    failures,
  };
}

export function isMediaPipeReady(): boolean { return initialized; }