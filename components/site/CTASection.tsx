'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Mail, Clock3 } from 'lucide-react';
import { Reveal } from './Reveal';
import { useLanguage } from './LanguageProvider';

export function CTASection({
  eyebrow,
  title,
  description,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  const { t } = useLanguage();

  const resolvedEyebrow = eyebrow ?? t.cta.defaultEyebrow;
  const resolvedTitle = title ?? t.cta.defaultTitle;
  const resolvedDesc = description ?? t.cta.defaultDescription;
  const resolvedPrimary = primary ?? { label: t.cta.defaultPrimary, href: '/contact?intent=workforce' };
  const resolvedSecondary = secondary ?? { label: t.cta.defaultSecondary, href: '/contact?intent=apply' };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-blue-900)]/95 via-[var(--color-blue-800)]/90 to-[var(--color-blue-700)]/85" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.18em] uppercase text-blue-300">
                <span className="w-8 h-px bg-blue-300/60" />
                {resolvedEyebrow}
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="headline mt-5 text-[28px] sm:text-[42px] lg:text-[52px] leading-[1.06] font-bold text-white">
                {resolvedTitle}
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-[15.5px] sm:text-[18px] leading-relaxed text-white/80 max-w-xl">
                {resolvedDesc}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
                <Link
                  href={resolvedPrimary.href}
                  className="group inline-flex items-center gap-2.5 bg-white text-[var(--color-blue-700)] text-[14.5px] sm:text-[15px] font-semibold px-6 sm:px-7 py-3.5 sm:py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg"
                >
                  {resolvedPrimary.label}
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href={resolvedSecondary.href}
                  className="group inline-flex items-center gap-2.5 border-2 border-white/30 text-white text-[14.5px] sm:text-[15px] font-semibold px-6 sm:px-7 py-3.5 sm:py-4 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  {resolvedSecondary.label}
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal direction="left" delay={0.1}>
              <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm p-6 sm:p-7 lg:p-8">
                <div className="flex items-center gap-2 text-[12px] sm:text-[13px] font-semibold tracking-[0.16em] uppercase text-blue-300 mb-5 sm:mb-6">
                  <Clock3 size={14} />
                  {t.cta.responsePromise}
                </div>
                <p className="text-[15px] sm:text-[16px] leading-relaxed text-white/85">
                  {t.cta.replyBody}{' '}
                  <span className="text-white font-bold text-[17px] sm:text-[18px]">{t.cta.replyBold}</span>{' '}
                  {t.cta.replySuffix}
                </p>
                <div className="mt-6 space-y-3 pt-5 sm:pt-6 border-t border-white/15">
                  <div className="flex items-center gap-3 text-[13.5px] sm:text-[14px] text-white/80">
                    <Phone size={15} className="text-blue-300" />
                    <span>{t.cta.callDirect}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[13.5px] sm:text-[14px] text-white/80">
                    <Mail size={15} className="text-blue-300" />
                    <span>{t.cta.sendMessage}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
