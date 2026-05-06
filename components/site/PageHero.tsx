'use client';

import Link from 'next/link';
import { type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
}) {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-navy-950)] text-white">
      <div aria-hidden className="absolute inset-0 opacity-[0.06] bg-grid-soft" />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full"
        style={{
          background:
            'radial-gradient(circle at center, rgba(196,151,89,0.18) 0%, rgba(196,151,89,0) 60%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        {crumbs && crumbs.length > 0 && (
          <motion.nav
            aria-label="Breadcrumb"
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-8 flex items-center gap-1.5 text-[12.5px] text-white/50"
          >
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="hover:text-white/85 transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/85">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight size={12} className="text-white/30" />}
              </span>
            ))}
          </motion.nav>
        )}

        {eyebrow && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-300)]"
          >
            <span aria-hidden className="w-7 h-px bg-[var(--color-accent-300)]/60" />
            {eyebrow}
          </motion.div>
        )}

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05, ease }}
          className="headline mt-5 text-[34px] sm:text-[44px] lg:text-[58px] leading-[1.04] font-semibold max-w-4xl"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease }}
            className="mt-6 max-w-2xl text-[16px] sm:text-[17.5px] leading-relaxed text-white/70"
          >
            {description}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease }}
            className="mt-9"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
