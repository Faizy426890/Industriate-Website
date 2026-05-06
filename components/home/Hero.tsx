'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronRight, ShieldCheck, Clock3 } from 'lucide-react';

export function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div aria-hidden className="absolute inset-0 opacity-[0.4] bg-grid-soft" />
      <div
        aria-hidden
        className="absolute -top-40 -right-32 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(196,151,89,0.10) 0%, rgba(196,151,89,0) 60%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-14 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-600)]"
            >
              <span aria-hidden className="w-7 h-px bg-[var(--color-accent-500)]/60" />
              INDUSTRITAS Staffing, LLC
            </motion.div>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease }}
              className="headline mt-5 text-[36px] sm:text-[52px] lg:text-[68px] leading-[1.02] font-semibold text-[var(--color-ink-900)]"
            >
              Workforce Infrastructure
              <span className="block text-[var(--color-ink-700)]">Built for Scale.</span>
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease }}
              className="mt-6 max-w-xl text-[16.5px] sm:text-[18px] leading-relaxed text-[var(--color-ink-600)]"
            >
              From sourcing to compliance to global talent coordination — all in one platform.
              <span className="text-[var(--color-ink-800)] font-medium"> Not a staffing agency. A workforce infrastructure platform.</span>
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact?intent=workforce"
                className="group inline-flex items-center gap-2 bg-[var(--color-navy-900)] text-white text-[14.5px] font-semibold px-5 py-3.5 rounded-md hover:bg-[var(--color-navy-700)] shadow-soft hover:shadow-elev transition-all duration-300"
              >
                Request Workforce
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact?intent=apply"
                className="group inline-flex items-center gap-2 bg-white text-[var(--color-ink-900)] border border-[var(--color-ink-300)] text-[14.5px] font-semibold px-5 py-3.5 rounded-md hover:border-[var(--color-ink-900)] hover:bg-[var(--color-ink-50)] transition-all duration-300"
              >
                Hire Talent
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--color-ink-700)] hover:text-[var(--color-ink-900)] px-2 py-2 transition-colors"
              >
                Explore solutions
                <ChevronRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 max-w-2xl"
            >
              <TrustItem value="48h" label="Deployment" />
              <TrustItem value="100%" label="Compliance-First" />
              <TrustItem value="4" label="Industries Served" />
              <TrustItem value="5–10m" label="Response Time" />
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.15, ease }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elev border border-[var(--color-ink-200)]">
                <Image
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80"
                  alt="Modern enterprise infrastructure"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-950)]/65 via-[var(--color-navy-950)]/10 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="rounded-xl border border-white/15 bg-white/[0.07] backdrop-blur-md p-4">
                    <div className="flex items-center gap-2 text-[10.5px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-300)]">
                      <ShieldCheck size={13} /> Compliance-First Platform
                    </div>
                    <p className="mt-2 text-[14px] leading-relaxed text-white">
                      Pre-vetted, certified, deployment-ready talent — across Industrial, Healthcare,
                      Skilled Trades, and Logistics.
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={reduce ? false : { opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.45, ease }}
                className="absolute -left-3 lg:-left-10 top-12 hidden sm:block"
              >
                <div className="rounded-xl border border-[var(--color-ink-200)] bg-white shadow-card p-4 w-[220px]">
                  <div className="flex items-center gap-2 text-[10.5px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-600)]">
                    <Clock3 size={13} /> 48-Hour Deploy
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-ink-700)]">
                    Request → Match → Compliance → Placement, in under 48 hours.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l border-[var(--color-ink-200)] pl-4">
      <div className="text-[24px] font-semibold leading-none text-[var(--color-ink-900)] headline">
        {value}
      </div>
      <div className="mt-1.5 text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--color-ink-500)]">
        {label}
      </div>
    </div>
  );
}
