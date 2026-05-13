'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const POSTER =
  'https://res.cloudinary.com/daxjhteb5/video/upload/so_0,f_auto,q_auto:eco,w_1600,c_limit/v1778628706/Industritas_Hero_Video_1_vgvm1h.jpg';

// 720p for all screens — smooth, fast, looks great on any display
const VIDEO_WEBM =
  'https://res.cloudinary.com/daxjhteb5/video/upload/q_auto:eco,f_webm,vc_vp9,w_1280,c_limit/v1778628706/Industritas_Hero_Video_1_vgvm1h.webm';
const VIDEO_MP4 =
  'https://res.cloudinary.com/daxjhteb5/video/upload/q_auto:eco,f_mp4,vc_h264,w_1280,c_limit/v1778628706/Industritas_Hero_Video_1_vgvm1h.mp4';

export function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  const videoRef    = useRef<HTMLVideoElement>(null);
  const sectionRef  = useRef<HTMLDivElement>(null);
  const [mounted,    setMounted]    = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  // ── Step 1: mark client-side ready so we can render <video> ────────────────
  useEffect(() => { setMounted(true); }, []);

  // ── Step 2: pause/resume as the hero enters/leaves the viewport ────────────
  useEffect(() => {
    const section = sectionRef.current;
    const video   = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) video.play().catch(() => {});
        else                  video.pause();
      },
      { threshold: 0.1 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [mounted]); // re-attach once the video element exists

  const showVideo = mounted && !reduce;

  return (
    /*
      Outer wrapper — clips horizontal overflow ONLY (no vertical clip).
      This prevents sub-pixel right-edge bleed on mobile without cutting
      the absolutely-positioned background that must cover the full height.
    */
    <div style={{ overflowX: 'clip' }}>
      {/*
        The section grows with content (min-height, not fixed height).
        position: relative lets absolute children fill it correctly.
        We use 100dvh (dynamic viewport height) which accounts for the
        mobile browser address bar — gives the truest "full screen" feel.
      */}
      <section
        ref={sectionRef}
        className="relative flex flex-col"
        style={{ minHeight: '100dvh' }}
      >
        {/* ── BG image (poster) — always present, video fades over it ───────── */}
        {/*
          Because the section height can grow on short phones, we use a plain
          <div> wrapper with position:absolute/inset-0 carrying the bg image
          via the Next Image fill prop. The wrapper is intentionally NOT
          overflow:hidden so tall content does not clip the image.
        */}
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <Image
            src={POSTER}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center select-none pointer-events-none"
            draggable={false}
          />
        </div>

        {/* ── Video — rendered client-side, starts buffering immediately ──────── */}
        {showVideo && (
          <div className="absolute inset-0" style={{ zIndex: 1 }}>
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"          /* start buffering right away */
              poster={POSTER}
              onCanPlayThrough={() => setVideoReady(true)}
              style={{
                position:   'absolute',
                inset:      0,
                width:      '100%',
                height:     '100%',
                objectFit:  'cover',
                objectPosition: 'center',
                opacity:    videoReady ? 1 : 0,
                transition: 'opacity 800ms ease-in-out',
                pointerEvents: 'none',
              }}
            >
              {/* webm first — better compression where supported */}
              <source src={VIDEO_WEBM} type="video/webm" />
              <source src={VIDEO_MP4}  type="video/mp4"  />
            </video>
          </div>
        )}

        {/* ── Dark gradient overlays ──────────────────────────────────────────── */}
        <div
          aria-hidden
          style={{ zIndex: 2 }}
          className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#020617]/65 to-[#020617]/30 pointer-events-none"
        />
        <div
          aria-hidden
          style={{ zIndex: 2 }}
          className="absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-transparent to-[#020617]/20 pointer-events-none"
        />

        {/* ── Content ─────────────────────────────────────────────────────────── */}
        <div
          className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center flex-1"
          style={{ zIndex: 3, paddingTop: '6rem', paddingBottom: '6rem' }}
        >
          <div className="w-full max-w-3xl">

            {/* Badge */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-5 py-2"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-blue-400)] animate-pulse flex-shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-white/90">
                Workforce Infrastructure
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="headline mt-6 sm:mt-7 font-bold text-white"
              style={{ fontSize: 'clamp(28px, 7vw, 72px)', lineHeight: 1.07 }}
            >
              The Elite Staffing{' '}
              <span className="text-[var(--color-blue-400)]">Ecosystem.</span>
              <br />
              <span className="text-white/90">Healthcare &amp; Industrial.</span>
              <br />
              <span className="gradient-text">Built-In.</span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="mt-5 sm:mt-6 max-w-xl sm:max-w-2xl text-[14px] sm:text-[17px] lg:text-[18.5px] leading-relaxed text-white/80"
            >
              We connect great people with great employers. Hospitals find credentialed
              clinical staff. Plants and refineries find vetted operators, welders, and
              logistics crews. Hundreds of qualified candidates walk through our doors
              every day, and our on-site testing center keeps them ready to start.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="mt-8 sm:mt-9 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Link
                href="/contact?intent=workforce"
                className="group inline-flex items-center gap-2.5 bg-[var(--color-blue-600)] text-white text-[13.5px] sm:text-[15px] font-semibold px-5 sm:px-7 py-3 sm:py-4 rounded-lg hover:bg-[var(--color-blue-700)] shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300"
              >
                Hire workers
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact?intent=apply"
                className="group inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm text-white border border-white/25 text-[13.5px] sm:text-[15px] font-semibold px-5 sm:px-7 py-3 sm:py-4 rounded-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                <Play size={14} className="fill-white flex-shrink-0" />
                Apply for a job
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease }}
              className="mt-12 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 sm:gap-6"
              style={{ maxWidth: '520px' }}
            >
              <StatItem value="100+" label="Workers Daily" />
              <StatItem value="48h"  label="Deployment"    />
              <StatItem value="24/7" label="Support"       />
              <StatItem value="100%" label="Compliance"    />
            </motion.div>
          </div>
        </div>

        {/* ── Bottom fade ────────────────────────────────────────────────────── */}
        <div
          aria-hidden
          style={{ zIndex: 3 }}
          className="absolute bottom-0 inset-x-0 h-24 sm:h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"
        />
      </section>
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l-2 border-[var(--color-blue-400)]/50 pl-3 sm:pl-4">
      <div className="text-[22px] sm:text-[26px] lg:text-[28px] font-bold leading-none text-white headline">
        {value}
      </div>
      <div className="mt-1.5 text-[9.5px] sm:text-[10.5px] font-semibold tracking-[0.15em] uppercase text-white/65">
        {label}
      </div>
    </div>
  );
}