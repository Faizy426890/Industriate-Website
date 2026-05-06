'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import type { CapturedImages } from '@/app/page';

type CaptureAngle = 'front' | 'left' | 'right' | 'top';

interface Props {
  onComplete: (images: CapturedImages) => void;
  onBack: () => void;
}

const STEPS: {
  angle: CaptureAngle;
  title: string;
  subtitle: string;
  instruction: string;
  hint: string;
  guideType: 'front' | 'left' | 'right' | 'top';
}[] = [
  {
    angle: 'front',
    title: 'Look straight ahead',
    subtitle: 'Front View',
    instruction: 'Hold your phone at eye level and look directly into the camera. Keep your face centered in the oval guide.',
    hint: 'Relax — a natural expression is perfect',
    guideType: 'front',
  },
  {
    angle: 'left',
    title: 'Turn your head left',
    subtitle: 'Left Side',
    instruction: 'Slowly turn your head to the LEFT until your ear faces the camera. Keep your chin level — don\'t tilt.',
    hint: 'Imagine looking over your left shoulder',
    guideType: 'left',
  },
  {
    angle: 'right',
    title: 'Turn your head right',
    subtitle: 'Right Side',
    instruction: 'Now turn your head to the RIGHT until your other ear faces the camera. Chin stays level.',
    hint: 'Same as before, just the other direction',
    guideType: 'right',
  },
  {
    angle: 'top',
    title: 'Show the top of your head',
    subtitle: 'Scalp View',
    instruction: 'Lower your chin toward your chest so the camera looks down at the TOP of your head and scalp.',
    hint: 'Hold your phone above your head pointing down',
    guideType: 'top',
  },
];

// ─── Face Guide SVG ───────────────────────────────────────────────────────────

function FaceGuide({
  type,
  holdProgress,
  captured,
}: {
  type: string;
  holdProgress: number;
  captured: boolean;
}) {
  const active = holdProgress > 0 || captured;
  const strokeColor = captured ? '#4ade80' : active ? '#14b8a6' : 'rgba(255,255,255,0.55)';
  const rx = 130, ry = 168;
  const cx = 160, cy = 192;
  const circumference = 2 * Math.PI * Math.sqrt((rx * rx + ry * ry) / 2);

  return (
    <svg
      viewBox="0 0 320 400"
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Overlay darkening outside the oval */}
      <mask id="oval-mask">
        <rect width="320" height="400" fill="white" />
        <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="black" />
      </mask>
      <rect width="320" height="400" fill="rgba(0,0,0,0.45)" mask="url(#oval-mask)" />

      {/* Oval border */}
      <ellipse
        cx={cx} cy={cy} rx={rx} ry={ry}
        fill="none"
        stroke={strokeColor}
        strokeWidth={active ? 2.5 : 2}
        strokeDasharray={active ? 'none' : '14 6'}
        opacity={active ? 0.3 : 0.7}
      />

      {/* Progress ring */}
      {active && (
        <motion.ellipse
          cx={cx} cy={cy} rx={rx} ry={ry}
          fill="none"
          stroke={captured ? '#4ade80' : '#14b8a6'}
          strokeWidth="3.5"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - (captured ? 1 : holdProgress / 100))}
          strokeLinecap="round"
          style={{
            transform: `rotate(-90deg)`,
            transformOrigin: `${cx}px ${cy}px`,
            transition: 'stroke-dashoffset 0.05s linear',
            filter: 'url(#glow)',
          }}
        />
      )}

      {/* Corner bracket marks */}
      {[
        { d: `M ${cx - rx + 14} ${cy - ry + 38} Q ${cx - rx - 4} ${cy - ry + 18} ${cx - rx + 18} ${cy - ry + 2}` },
        { d: `M ${cx + rx - 14} ${cy - ry + 38} Q ${cx + rx + 4} ${cy - ry + 18} ${cx + rx - 18} ${cy - ry + 2}` },
        { d: `M ${cx - rx + 14} ${cy + ry - 38} Q ${cx - rx - 4} ${cy + ry - 18} ${cx - rx + 18} ${cy + ry - 2}` },
        { d: `M ${cx + rx - 14} ${cy + ry - 38} Q ${cx + rx + 4} ${cy + ry - 18} ${cx + rx - 18} ${cy + ry - 2}` },
      ].map((b, i) => (
        <path key={i} d={b.d} stroke={strokeColor} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.9" />
      ))}

      {/* Direction arrows */}
      {type === 'left' && !captured && (
        <motion.g animate={{ x: [-5, 3, -5] }} transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}>
          <line x1="22" y1={cy} x2="6" y2={cy} stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" />
          <polyline points="14,185 4,195 14,205" stroke="#14b8a6" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>
      )}
      {type === 'right' && !captured && (
        <motion.g animate={{ x: [5, -3, 5] }} transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}>
          <line x1="298" y1={cy} x2="314" y2={cy} stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" />
          <polyline points="306,185 316,195 306,205" stroke="#14b8a6" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>
      )}
      {type === 'top' && !captured && (
        <motion.g animate={{ y: [-4, 2, -4] }} transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}>
          <line x1={cx} y1="22" x2={cx} y2="6" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" />
          <polyline points="150,14 160,4 170,14" stroke="#14b8a6" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>
      )}
    </svg>
  );
}

// ─── Thumbnail strip ──────────────────────────────────────────────────────────

function ThumbnailStrip({ captured, currentStep }: { captured: CapturedImages; currentStep: number }) {
  return (
    <div className="flex gap-2.5 justify-center">
      {STEPS.map((s, i) => (
        <div key={s.angle} className="flex flex-col items-center gap-1">
          <div className={`relative w-[52px] h-[52px] rounded-xl overflow-hidden border-2 transition-all duration-300 ${
            captured[s.angle]
              ? 'border-green-400 shadow-[0_0_10px_rgba(74,222,128,0.35)]'
              : i === currentStep
              ? 'border-aurora-400 border-dashed'
              : 'border-white/10'
          }`}>
            {captured[s.angle] ? (
              <>
                <img src={captured[s.angle]!} className="w-full h-full object-cover" alt={s.subtitle} />
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
              </>
            ) : (
              <div className={`w-full h-full flex items-center justify-center ${
                i === currentStep ? 'bg-aurora-500/10' : 'bg-white/[0.03]'
              }`}>
                <span className="text-lg">{i === currentStep ? '📸' : '·'}</span>
              </div>
            )}
          </div>
          <span className={`text-[9px] font-mono tracking-wide transition-colors ${
            captured[s.angle] ? 'text-green-400' : i === currentStep ? 'text-aurora-400' : 'text-white/20'
          }`}>
            {s.subtitle.split(' ')[0].toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function CameraScreen({ onComplete, onBack }: Props) {
  const videoRef  = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [currentStep, setCurrentStep]             = useState(0);
  const [captured, setCaptured]                   = useState<CapturedImages>({ front: null, left: null, right: null, top: null });
  const [holdProgress, setHoldProgress]           = useState(0);
  const [justCaptured, setJustCaptured]           = useState(false);
  const [cameraReady, setCameraReady]             = useState(false);
  const [cameraError, setCameraError]             = useState<string | null>(null);
  const [positionConfirmed, setPositionConfirmed] = useState(false);
  const [lightTooLow, setLightTooLow]             = useState(false);

  const holdIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const holdStartRef    = useRef<number>(0);
  const HOLD_MS         = 2000;
  const step            = STEPS[currentStep];

  // ─── Camera init ────────────────────────────────────────────────────────────
  useEffect(() => {
    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: false,
        });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
        setCameraReady(true);
      } catch {
        setCameraError('Camera access denied.\nPlease tap Allow when your browser asks, then reload this page.');
      }
    })();
    return () => {
      streamRef.current?.getTracks().forEach(t => t.stop());
      if (holdIntervalRef.current) clearInterval(holdIntervalRef.current);
    };
  }, []);

  // ─── Low-light detection ────────────────────────────────────────────────────
  useEffect(() => {
    if (!cameraReady) return;

    const SAMPLE_W = 64, SAMPLE_H = 36;   // tiny thumbnail — cheap to read
    const BRIGHTNESS_THRESHOLD = 40;       // Rec.709 luminance, 0–255; tune as needed

    const offscreen = document.createElement('canvas');
    offscreen.width  = SAMPLE_W;
    offscreen.height = SAMPLE_H;
    const ctx = offscreen.getContext('2d', { willReadFrequently: true })!;

    const check = () => {
      if (!videoRef.current || videoRef.current.readyState < 2) return;
      ctx.drawImage(videoRef.current, 0, 0, SAMPLE_W, SAMPLE_H);
      const { data } = ctx.getImageData(0, 0, SAMPLE_W, SAMPLE_H);
      let total = 0;
      for (let i = 0; i < data.length; i += 4) {
        // Rec. 709 luminance weights
        total += data[i] * 0.2126 + data[i + 1] * 0.7152 + data[i + 2] * 0.0722;
      }
      const avg = total / (SAMPLE_W * SAMPLE_H);
      setLightTooLow(avg < BRIGHTNESS_THRESHOLD);
    };

    const id = setInterval(check, 500); // sample twice per second
    return () => clearInterval(id);
  }, [cameraReady]);

  // ─── Reset position confirmed when step changes ──────────────────────────────
  useEffect(() => {
    setPositionConfirmed(false);
    setHoldProgress(0);
  }, [currentStep]);

  // ─── Capture ────────────────────────────────────────────────────────────────
  const doCapture = useCallback(() => {
    if (!videoRef.current || !canvasRef.current || justCaptured || lightTooLow) return;
    const video = videoRef.current, canvas = canvasRef.current;
    canvas.width  = video.videoWidth  || 1280;
    canvas.height = video.videoHeight || 720;
    const ctx = canvas.getContext('2d')!;
    ctx.save(); ctx.scale(-1, 1);
    ctx.drawImage(video, -canvas.width, 0, canvas.width, canvas.height);
    ctx.restore();
    const dataUrl = canvas.toDataURL('image/jpeg', 0.88);
    const newCaptured = { ...captured, [step.angle]: dataUrl };
    setCaptured(newCaptured);
    setJustCaptured(true);
    setHoldProgress(100);
    setTimeout(() => {
      if (currentStep < STEPS.length - 1) {
        setCurrentStep(s => s + 1);
        setJustCaptured(false);
        setHoldProgress(0);
      } else {
        onComplete(newCaptured);
      }
    }, 1400);
  }, [justCaptured, lightTooLow, step, captured, currentStep, onComplete]);

  // ─── Hold start / end ────────────────────────────────────────────────────────
  const startHold = useCallback(() => {
    if (justCaptured || !cameraReady || lightTooLow) return;
    holdStartRef.current = Date.now();
    holdIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - holdStartRef.current;
      const pct = Math.min(100, (elapsed / HOLD_MS) * 100);
      setHoldProgress(pct);
      if (elapsed >= HOLD_MS) {
        clearInterval(holdIntervalRef.current!);
        doCapture();
      }
    }, 30);
  }, [justCaptured, cameraReady, lightTooLow, doCapture]);

  const stopHold = useCallback(() => {
    if (justCaptured) return;
    if (holdIntervalRef.current) clearInterval(holdIntervalRef.current);
    if (holdProgress < 100) setHoldProgress(0);
  }, [justCaptured, holdProgress]);

  // ─── Render ──────────────────────────────────────────────────────────────────
  return (
    <div className="h-screen w-screen flex flex-col bg-black overflow-hidden select-none">

      {/* Top navigation bar */}
      <div className="absolute top-0 inset-x-0 z-30 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/70 to-transparent">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-black/50 backdrop-blur-sm text-white/70 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <div className="flex gap-1.5 items-center px-3 py-2 rounded-xl bg-black/50 backdrop-blur-sm">
          {STEPS.map((_, i) => (
            <div key={i} className={`rounded-full transition-all duration-300 ${
              i < currentStep   ? 'w-2 h-2 bg-green-400' :
              i === currentStep ? 'w-5 h-2 bg-aurora-400' :
              'w-2 h-2 bg-white/20'
            }`} />
          ))}
        </div>
      </div>

      {/* Camera + overlay */}
      <div className="relative flex-1">
        {cameraError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-void gap-5 px-8 text-center">
            <div className="text-6xl">📷</div>
            <p className="text-white/80 text-base leading-relaxed whitespace-pre-line">{cameraError}</p>
          </div>
        ) : (
          <>
            <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover camera-mirror" playsInline muted />
            <canvas ref={canvasRef} className="hidden" />

            {/* Face guide */}
            <FaceGuide type={step.guideType} holdProgress={holdProgress} captured={justCaptured} />

            {/* Top gradient */}
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

            {/* Capture flash */}
            <AnimatePresence>
              {justCaptured && (
                <motion.div
                  className="absolute inset-0 bg-white pointer-events-none z-20"
                  initial={{ opacity: 0.85 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                />
              )}
            </AnimatePresence>

            {/* Success badge */}
            <AnimatePresence>
              {justCaptured && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.15, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-24 h-24 rounded-full bg-green-500/20 border-2 border-green-400 flex items-center justify-center shadow-[0_0_50px_rgba(74,222,128,0.45)]">
                      <CheckCircle className="w-12 h-12 text-green-400" />
                    </div>
                    <span className="bg-black/60 backdrop-blur-sm px-5 py-2 rounded-full text-white font-bold text-base">
                      {currentStep < STEPS.length - 1 ? 'Perfect! ✨' : 'All done! 🎉'}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Low-light warning banner */}
            <AnimatePresence>
              {lightTooLow && !justCaptured && (
                <motion.div
                  className="absolute bottom-[268px] inset-x-0 z-30 flex justify-center pointer-events-none"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.22 }}
                >
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-amber-500/90 backdrop-blur-sm">
                    <span className="text-base">☀️</span>
                    <p className="text-amber-950 font-semibold text-sm">Too dark — move to better lighting</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>

      {/* Bottom panel */}
      <div className="relative z-20 bg-gradient-to-t from-black via-black/95 to-transparent px-5 pb-8 pt-3">

        {/* Thumbnails */}
        <div className="mb-4">
          <ThumbnailStrip captured={captured} currentStep={currentStep} />
        </div>

        {/* Instruction text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${currentStep}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28 }}
            className="mb-4"
          >
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-mono text-aurora-400 tracking-[0.2em] uppercase">{step.subtitle}</span>
              <span className="text-[10px] text-white/25">· {currentStep + 1} / {STEPS.length}</span>
            </div>
            <h2 className="text-white text-lg font-bold leading-snug mb-1">{step.title}</h2>
            <p className="text-white/55 text-[13px] leading-relaxed">{step.instruction}</p>
            <p className="text-aurora-400/65 text-[12px] mt-1.5">💡 {step.hint}</p>
          </motion.div>
        </AnimatePresence>

        {/* Action area */}
        <AnimatePresence mode="wait">
          {!cameraReady ? (
            <motion.div key="loading" className="w-full py-4 rounded-2xl bg-white/5 text-white/30 text-center text-sm">
              Starting camera…
            </motion.div>

          ) : justCaptured ? (
            <motion.div key="captured-msg" className="text-center text-white/40 text-sm py-4">
              {currentStep < STEPS.length - 1 ? 'Moving to next angle…' : 'Sending for analysis…'}
            </motion.div>

          ) : !positionConfirmed ? (
            // Step 1: Confirm position
            <motion.div
              key={`confirm-${currentStep}`}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-2"
            >
              <p className="text-center text-white/35 text-xs mb-0.5">Get into position, then tap when ready</p>
              <motion.button
                onClick={() => setPositionConfirmed(true)}
                whileTap={{ scale: 0.97 }}
                className="w-full py-[14px] rounded-2xl bg-aurora-500 text-void font-bold text-[15px] shadow-[0_4px_20px_rgba(20,184,166,0.35)] active:scale-[0.98] transition-transform"
              >
                I'm in position →
              </motion.button>
            </motion.div>

          ) : (
            // Step 2: Hold to capture
            <motion.div
              key={`capture-${currentStep}`}
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3"
            >
              <p className="text-white/45 text-[12px]">Hold the shutter button until the ring completes</p>

              {/* Shutter button with ring */}
              <div className="relative w-[80px] h-[80px] flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="4" />
                  <circle
                    cx="40" cy="40" r="36"
                    fill="none"
                    stroke={lightTooLow ? 'rgba(255,255,255,0.15)' : '#14b8a6'}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 36}`}
                    strokeDashoffset={`${2 * Math.PI * 36 * (1 - holdProgress / 100)}`}
                    style={{ transition: 'stroke-dashoffset 0.04s linear' }}
                  />
                </svg>
                <button
                  onMouseDown={startHold}
                  onMouseUp={stopHold}
                  onMouseLeave={stopHold}
                  onTouchStart={(e) => { e.preventDefault(); startHold(); }}
                  onTouchEnd={stopHold}
                  disabled={lightTooLow}
                  className={`w-[62px] h-[62px] rounded-full border-[3.5px] border-white bg-white/10 backdrop-blur transition-all flex items-center justify-center
                    ${lightTooLow ? 'opacity-30 cursor-not-allowed' : 'active:scale-95'}`}
                >
                  <div
                    className="w-[46px] h-[46px] rounded-full bg-white transition-all duration-75"
                    style={{ transform: `scale(${holdProgress > 0 ? 0.82 : 1})` }}
                  />
                </button>
              </div>

              <button
                onClick={doCapture}
                disabled={lightTooLow}
                className={`text-[12px] underline underline-offset-2 transition-colors
                  ${lightTooLow ? 'text-white/15 cursor-not-allowed no-underline' : 'text-white/35 hover:text-white/60'}`}
              >
                Or tap here to capture instantly
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}