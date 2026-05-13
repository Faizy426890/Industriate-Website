'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const POSTER =
  'https://res.cloudinary.com/daxjhteb5/video/upload/so_0,f_auto,q_auto:eco,w_1600,c_limit/v1778628706/Industritas_Hero_Video_1_vgvm1h.jpg';

const VIDEO_MP4 =
  'https://res.cloudinary.com/daxjhteb5/video/upload/q_auto:eco,f_mp4,vc_h264,w_1600,c_limit/v1778628706/Industritas_Hero_Video_1_vgvm1h.mp4';

const VIDEO_WEBM =
  'https://res.cloudinary.com/daxjhteb5/video/upload/q_auto:eco,f_webm,vc_vp9,w_1600,c_limit/v1778628706/Industritas_Hero_Video_1_vgvm1h.webm';

export function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  const [canPlayVideo, setCanPlayVideo] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (reduce) return;

    const mq = window.matchMedia('(min-width: 768px)');
    const slowConn =
      // @ts-expect-error – non-standard, present in Chromium
      (navigator?.connection?.saveData ?? false) ||
      // @ts-expect-error – non-standard
      ['slow-2g', '2g'].includes(navigator?.connection?.effectiveType);

    const idle = (cb: () => void) => {
      const w = window as Window & { requestIdleCallback?: (c: () => void) => number };
      (w.requestIdleCallback || ((c: () => void) => window.setTimeout(c, 600)))(cb);
    };

    const apply = () => {
      if (mq.matches && !slowConn) {
        idle(() => setCanPlayVideo(true));
      } else {
        setCanPlayVideo(false);
      }
    };

    apply();
    mq.addEventListener?.('change', apply);
    return () => mq.removeEventListener?.('change', apply);
  }, [reduce]);

  return (
    <section className="relative isolate overflow-hidden min-h-[100vh] flex items-center">
      <Image
        src={POSTER}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {canPlayVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={POSTER}
          className="absolute inset-0 w-full h-full object-cover motion-safe:animate-[fade-in_700ms_ease-out_both]"
        >
          <source src={VIDEO_WEBM} type="video/webm" />
          <source src={VIDEO_MP4} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#020617]/70 to-[#020617]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-transparent to-[#020617]/30" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-28 sm:py-32 lg:py-40 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-blue-400)] animate-pulse-soft" />
            <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.16em] uppercase text-white/90">
              Workforce Infrastructure
            </span>
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="headline mt-7 sm:mt-8 text-[34px] sm:text-[52px] lg:text-[72px] leading-[1.04] font-bold text-white"
          >
            The Elite Staffing{' '}
            <span className="text-[var(--color-blue-400)]">Ecosystem.</span>
            <br />
            <span className="text-white/90">Healthcare & Industrial.</span>
            <br />
            <span className="gradient-text">Built-In.</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-6 sm:mt-7 max-w-2xl text-[15.5px] sm:text-[19px] leading-relaxed text-white/80"
          >
            We connect great people with great employers. Hospitals find credentialed
            clinical staff. Plants and refineries find vetted operators, welders, and
            logistics crews. Hundreds of qualified candidates walk through our doors
            every day, and our on-site testing center keeps them ready to start.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-9 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <Link
              href="/contact?intent=workforce"
              className="group inline-flex items-center gap-2.5 bg-[var(--color-blue-600)] text-white text-[14.5px] sm:text-[15px] font-semibold px-6 sm:px-7 py-3.5 sm:py-4 rounded-lg hover:bg-[var(--color-blue-700)] shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300"
            >
              Hire workers
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact?intent=apply"
              className="group inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm text-white border border-white/25 text-[14.5px] sm:text-[15px] font-semibold px-6 sm:px-7 py-3.5 sm:py-4 rounded-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            >
              <Play size={16} className="fill-white" />
              Apply for a job
            </Link>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease }}
            className="mt-14 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 max-w-2xl"
          >
            <StatItem value="100+" label="Workers Daily" />
            <StatItem value="48h" label="Deployment" />
            <StatItem value="24/7" label="Support" />
            <StatItem value="100%" label="Compliance" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l-2 border-[var(--color-blue-400)]/50 pl-3 sm:pl-4">
      <div className="text-[24px] sm:text-[28px] font-bold leading-none text-white headline">{value}</div>
      <div className="mt-1.5 sm:mt-2 text-[10.5px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-white/65">
        {label}
      </div>
    </div>
  );
}
