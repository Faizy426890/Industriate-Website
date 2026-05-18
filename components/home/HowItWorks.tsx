'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Search, Users, ClipboardCheck, Rocket } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';
import { useLanguage } from '@/components/site/LanguageProvider';

const STEP_ICONS = [<Search size={22} key="s" />, <Users size={22} key="u" />, <ClipboardCheck size={22} key="c" />, <Rocket size={22} key="r" />];
const STEP_IMAGES = [
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
];

export function HowItWorks() {
  const { t } = useLanguage();
  const steps = t.howItWorks.steps;

  return (
    <Section tone="white">
      <Container className="py-20 sm:py-24 lg:py-32">
        <SectionHeader
          eyebrow={t.howItWorks.eyebrow}
          title={t.howItWorks.title}
          description={t.howItWorks.description}
          align="center"
          className="!mx-auto !text-center"
        />

        <StaggerGroup className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((s, i) => (
            <StaggerItem key={s.n}>
              <div className="group relative h-full">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 left-[calc(100%+0.25rem)] w-[calc(100%-3rem)] h-px bg-gradient-to-r from-[var(--color-blue-300)] to-[var(--color-blue-100)] z-10" />
                )}
                <div className="h-full bg-white rounded-2xl border border-[var(--color-ink-200)] hover:border-[var(--color-blue-300)] hover:shadow-lg transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={STEP_IMAGES[i]}
                      alt={s.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-950)]/40 to-transparent" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[var(--color-blue-600)] grid place-items-center text-white text-[13px] font-bold shadow-lg">
                      {s.n}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-blue-50)] border border-[var(--color-blue-100)] grid place-items-center text-[var(--color-blue-600)]">
                      {STEP_ICONS[i]}
                    </div>
                    <h3 className="mt-4 text-[17px] sm:text-[18px] font-bold text-[var(--color-ink-900)]">{s.title}</h3>
                    <p className="mt-2.5 text-[13.5px] sm:text-[14px] leading-relaxed text-[var(--color-ink-600)]">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <div className="mt-12 sm:mt-14 text-center">
            <Link
              href="/process"
              className="group inline-flex items-center gap-2 text-[14.5px] sm:text-[15px] font-semibold text-[var(--color-blue-600)] hover:text-[var(--color-blue-700)] transition-colors"
            >
              {t.howItWorks.fullProcess}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
