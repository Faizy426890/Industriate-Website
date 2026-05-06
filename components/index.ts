import type { BrightnessResult, MotionResult } from "@/lib";
import { MOTION_STABILITY_THRESHOLD } from "@/lib/index2";

// ============================================================
// Brightness Analysis — EMA-smoothed, 2 states only
// ============================================================

const BRIGHTNESS_TOO_DARK    = 35;
const BRIGHTNESS_OVEREXPOSED = 235;

let _emaMean = -1;
const EMA_ALPHA = 0.25;

let _brightnessCanvas: OffscreenCanvas | null = null;
let _brightnessCtx: OffscreenCanvasRenderingContext2D | null = null;

function getBrightnessCanvas() {
  if (!_brightnessCanvas) {
    _brightnessCanvas = new OffscreenCanvas(80, 45);
    _brightnessCtx = _brightnessCanvas.getContext("2d") as OffscreenCanvasRenderingContext2D;
  }
  return { ctx: _brightnessCtx!, w: 80, h: 45 };
}

export function analyzeBrightness(video: HTMLVideoElement): BrightnessResult {
  const { ctx, w, h } = getBrightnessCanvas();
  try {
    ctx.drawImage(video, 0, 0, w, h);
    const data = ctx.getImageData(0, 0, w, h).data;
    const totalPixels = w * h;
    let sum = 0;
    for (let i = 0; i < data.length; i += 4) {
      sum += 0.2126 * (data[i] ?? 0) + 0.7152 * (data[i + 1] ?? 0) + 0.0722 * (data[i + 2] ?? 0);
    }
    const rawMean = sum / totalPixels;
    _emaMean = _emaMean < 0 ? rawMean : EMA_ALPHA * rawMean + (1 - EMA_ALPHA) * _emaMean;
    const mean = _emaMean;

    let sumSq = 0;
    for (let i = 0; i < data.length; i += 4) {
      const luma = 0.2126 * (data[i] ?? 0) + 0.7152 * (data[i + 1] ?? 0) + 0.0722 * (data[i + 2] ?? 0);
      sumSq += (luma - rawMean) ** 2;
    }

    let state: BrightnessResult["state"];
    if (mean < BRIGHTNESS_TOO_DARK) state = "too_dark";
    else if (mean > BRIGHTNESS_OVEREXPOSED) state = "overexposed";
    else state = "perfect";

    return { mean, variance: sumSq / totalPixels, state };
  } catch {
    return { mean: 128, variance: 0, state: "perfect" };
  }
}

// ============================================================
// Motion Stability
// ============================================================

const MOTION_BUFFER_SIZE = 3;
const _motionFrames: Uint8Array[] = [];
const MOTION_SAMPLE_SIZE = 64;
let _motionCanvas: OffscreenCanvas | null = null;
let _motionCtx: OffscreenCanvasRenderingContext2D | null = null;

function getMotionCanvas() {
  if (!_motionCanvas) {
    _motionCanvas = new OffscreenCanvas(MOTION_SAMPLE_SIZE, MOTION_SAMPLE_SIZE);
    _motionCtx = _motionCanvas.getContext("2d") as OffscreenCanvasRenderingContext2D;
  }
  return { ctx: _motionCtx! };
}

export function analyzeMotion(video: HTMLVideoElement): MotionResult {
  const { ctx } = getMotionCanvas();
  const size = MOTION_SAMPLE_SIZE;
  try {
    ctx.drawImage(video, 0, 0, size, size);
    const data = ctx.getImageData(0, 0, size, size).data;
    const gray = new Uint8Array(size * size);
    for (let i = 0; i < size * size; i++) {
      gray[i] = Math.round(0.299 * (data[i * 4] ?? 0) + 0.587 * (data[i * 4 + 1] ?? 0) + 0.114 * (data[i * 4 + 2] ?? 0));
    }
    let motionScore = 0;
    if (_motionFrames.length > 0) {
      const prev = _motionFrames[_motionFrames.length - 1]!;
      let diff = 0;
      for (let i = 0; i < gray.length; i++) diff += Math.abs((gray[i] ?? 0) - (prev[i] ?? 0));
      motionScore = diff / gray.length;
    }
    _motionFrames.push(gray);
    if (_motionFrames.length > MOTION_BUFFER_SIZE) _motionFrames.shift();
    return { stable: motionScore < MOTION_STABILITY_THRESHOLD, motionScore };
  } catch {
    return { stable: true, motionScore: 0 };
  }
}

export function resetMotionBuffer(): void { _motionFrames.length = 0; }

// ============================================================
// Frame capture to blob (full resolution, mirrored like display)
// ============================================================

export async function captureFrameBlob(
  video: HTMLVideoElement,
  quality = 0.82
): Promise<Blob | null> {
  const w = video.videoWidth, h = video.videoHeight;
  if (!w || !h) return null;
  const canvas = new OffscreenCanvas(w, h);
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  try {
    // Mirror horizontally to match the visual preview
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(video, -w, 0, w, h);
    ctx.restore();
    return await canvas.convertToBlob({ type: "image/jpeg", quality });
  } catch {
    return null;
  }
}

// ============================================================
// Capture frame as data URL (for result display)
// ============================================================

export function captureFrameDataUrl(
  video: HTMLVideoElement,
  quality = 0.82
): string | null {
  const w = video.videoWidth, h = video.videoHeight;
  if (!w || !h) return null;
  try {
    const canvas = document.createElement("canvas");
    canvas.width = w; canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(video, -w, 0, w, h);
    ctx.restore();
    return canvas.toDataURL("image/jpeg", quality);
  } catch {
    return null;
  }
}