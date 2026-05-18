'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Briefcase, Users, CheckCircle2 } from 'lucide-react';
import { Container, Section } from '@/components/site/Section';
import { Reveal } from '@/components/site/Reveal';
import { useLanguage } from '@/components/site/LanguageProvider';

export function Audiences() {
  const { t } = useLanguage();
  const { employer, candidate } = t.audiences;

  return (
    <Section tone="white">
      <Container className="py-20 sm:py-24 lg:py-32">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--color-blue-600)]">
              <span className="w-6 h-px bg-[var(--color-blue-600)]" />
              {t.audiences.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="headline mt-4 text-[28px] sm:text-[40px] lg:text-[48px] leading-[1.06] font-bold text-[var(--color-ink-900)]">
              {t.audiences.title}{' '}
              <span className="text-[var(--color-blue-600)]">{t.audiences.titleAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[15.5px] sm:text-[17px] leading-relaxed text-[var(--color-ink-600)]">
              {t.audiences.body}
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 sm:gap-6">
          <Reveal direction="right">
            <article className="group h-full rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--color-blue-600)] to-[var(--color-blue-800)] text-white relative">
              <div className="absolute inset-0 opacity-10">
                <Image
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative p-7 sm:p-9 lg:p-10">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 grid place-items-center">
                    <Briefcase size={22} className="text-white" />
                  </div>
                  <span className="text-[12px] font-semibold tracking-[0.16em] uppercase text-blue-200">
                    {employer.tag}
                  </span>
                </div>
                <h3 className="headline text-[24px] sm:text-[30px] font-bold leading-tight">
                  {employer.title}
                </h3>
                <p className="mt-3 text-[14.5px] sm:text-[15px] leading-relaxed text-white/80">
                  {employer.body}
                </p>
                <ul className="mt-6 sm:mt-7 space-y-3.5">
                  {employer.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[14px] sm:text-[14.5px] text-white/85">
                      <CheckCircle2 size={16} className="text-blue-300 flex-none mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 sm:mt-9 flex flex-wrap gap-3">
                  <Link
                    href="/contact?intent=workforce"
                    className="group/btn inline-flex items-center gap-2 bg-white text-[var(--color-blue-700)] text-[14px] sm:text-[14.5px] font-semibold px-5 sm:px-6 py-3.5 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg"
                  >
                    {employer.cta}
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/for-employers"
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-white/90 hover:text-white px-2 sm:px-3 py-3.5 transition-colors"
                  >
                    {employer.learn} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal direction="left">
            <article className="group h-full p-7 sm:p-9 lg:p-10 rounded-2xl bg-white border-2 border-[var(--color-ink-200)] hover:border-[var(--color-blue-300)] hover:shadow-lg transition-all duration-500">
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-blue-50)] border border-[var(--color-blue-100)] grid place-items-center text-[var(--color-blue-600)]">
                  <Users size={22} />
                </div>
                <span className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--color-blue-600)]">
                  {candidate.tag}
                </span>
              </div>
              <h3 className="headline text-[24px] sm:text-[30px] font-bold leading-tight text-[var(--color-ink-900)]">
                {candidate.title}
              </h3>
              <p className="mt-3 text-[14.5px] sm:text-[15px] leading-relaxed text-[var(--color-ink-600)]">
                {candidate.body}
              </p>
              <ul className="mt-6 sm:mt-7 space-y-3.5">
                {candidate.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[14px] sm:text-[14.5px] text-[var(--color-ink-700)]">
                    <CheckCircle2 size={16} className="text-[var(--color-blue-500)] flex-none mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 sm:mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact?intent=apply"
                  className="group/btn inline-flex items-center gap-2 bg-[var(--color-blue-600)] text-white text-[14px] sm:text-[14.5px] font-semibold px-5 sm:px-6 py-3.5 rounded-lg hover:bg-[var(--color-blue-700)] transition-all duration-300 shadow-lg shadow-blue-600/20"
                >
                  {candidate.cta}
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                </Link>
                <Link
                  href="/for-candidates"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--color-ink-700)] hover:text-[var(--color-ink-900)] px-2 sm:px-3 py-3.5 transition-colors"
                >
                  {candidate.learn} <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
