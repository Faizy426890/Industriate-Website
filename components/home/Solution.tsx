'use client';

import { Users, ShieldCheck, Award, Wrench, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Container, Section } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';
import { useLanguage } from '@/components/site/LanguageProvider';

const PILLAR_ICONS = [<Users size={24} key="u" />, <Award size={24} key="a" />, <ShieldCheck size={24} key="s" />, <Wrench size={24} key="w" />];
const PILLAR_GRADIENTS = ['from-blue-500 to-blue-600', 'from-blue-600 to-blue-700', 'from-blue-700 to-indigo-700', 'from-indigo-600 to-blue-700'];

export function Solution() {
  const { t } = useLanguage();
  const pillars = t.solution.pillars;

  return (
    <Section tone="navy" className="overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.03] bg-grid-blue" />
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at center, rgba(37,99,235,0.12) 0%, transparent 60%)' }}
      />
      <Container className="relative py-20 sm:py-24 lg:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--color-blue-400)]">
              <span className="w-6 h-px bg-[var(--color-blue-400)]/60" />
              {t.solution.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="headline mt-4 text-[28px] sm:text-[40px] lg:text-[50px] leading-[1.06] font-bold text-white">
              {t.solution.title}{' '}
              <span className="text-[var(--color-blue-400)]">{t.solution.titleAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[15.5px] sm:text-[18px] leading-relaxed text-white/70 max-w-2xl mx-auto">
              {t.solution.body}
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {pillars.map((p, idx) => (
            <StaggerItem key={p.title}>
              <div className="group h-full p-6 sm:p-7 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 ease-out hover:-translate-y-2">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${PILLAR_GRADIENTS[idx]} grid place-items-center text-white shadow-lg`}>
                  {PILLAR_ICONS[idx]}
                </div>
                <h3 className="mt-5 sm:mt-6 text-[17px] sm:text-[18px] font-bold text-white">{p.title}</h3>
                <p className="mt-3 text-[14px] sm:text-[14.5px] leading-relaxed text-white/65">{p.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.15}>
          <div className="mt-12 sm:mt-14 text-center">
            <Link
              href="/contact?intent=workforce"
              className="group inline-flex items-center gap-2.5 bg-[var(--color-blue-600)] text-white text-[14.5px] sm:text-[15px] font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-lg hover:bg-[var(--color-blue-500)] shadow-lg shadow-blue-600/25 transition-all duration-300"
            >
              {t.shared.getStarted}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
