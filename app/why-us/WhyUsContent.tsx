'use client';

import Link from 'next/link';
import { ArrowRight, ShieldCheck, Layers, Zap, Building2, CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';
import { CTASection } from '@/components/site/CTASection';
import { useLanguage } from '@/components/site/LanguageProvider';

const MOAT_ICONS = [
  <ShieldCheck size={18} key="s" />,
  <Layers size={18} key="l" />,
  <CheckCircle2 size={18} key="c" />,
  <Zap size={18} key="z" />,
  <Building2 size={18} key="b" />,
];

export function WhyUsContent() {
  const { t } = useLanguage();
  const pg = t.whyUs;

  return (
    <>
      <PageHero
        eyebrow={pg.eyebrow}
        title={pg.title}
        description={pg.description}
        crumbs={[{ label: t.shared.home, href: '/' }, { label: pg.crumb }]}
      />

      <Section tone="white">
        <Container className="py-20 lg:py-28">
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pg.moats.map((m, i) => (
              <StaggerItem key={m.title}>
                <article
                  className={`h-full p-7 rounded-xl border border-[var(--color-ink-200)] bg-white hover:shadow-card transition-all duration-500 ease-out hover:-translate-y-1 ${
                    i === 0 ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md bg-[var(--color-navy-900)] grid place-items-center text-white">
                        {MOAT_ICONS[i]}
                      </div>
                      <span className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-600)]">
                        {m.badge}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--color-ink-400)]">
                      {pg.moatLabel} 0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-[20px] font-semibold text-[var(--color-ink-900)]">{m.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--color-ink-600)]">{m.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <Section tone="soft">
        <Container className="py-20 lg:py-28">
          <SectionHeader
            eyebrow={pg.vsEyebrow}
            title={pg.vsTitle}
            description={pg.vsDesc}
          />

          <Reveal delay={0.1}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--color-ink-200)] bg-white">
              <div className="grid grid-cols-3 bg-[var(--color-ink-50)] border-b border-[var(--color-ink-200)]">
                <div className="px-5 py-4 text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--color-ink-500)]">
                  {pg.capabilityLabel}
                </div>
                <div className="px-5 py-4 text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--color-ink-500)] text-center">
                  {pg.traditionalLabel}
                </div>
                <div className="px-5 py-4 text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--color-accent-600)] text-center">
                  {pg.industriatasLabel}
                </div>
              </div>
              {pg.compare.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-3 border-b border-[var(--color-ink-100)] last:border-b-0 hover:bg-[var(--color-ink-50)]/50 transition-colors"
                >
                  <div className="px-5 py-4 text-[14px] font-medium text-[var(--color-ink-900)]">{row.label}</div>
                  <div className="px-5 py-4 text-center">
                    <DashIcon />
                  </div>
                  <div className="px-5 py-4 text-center">
                    <CheckIcon strong />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/contact?intent=workforce"
                className="group inline-flex items-center gap-2 bg-[var(--color-navy-900)] text-white text-[14px] font-semibold px-5 py-3 rounded-md hover:bg-[var(--color-navy-700)] transition-colors"
              >
                {pg.hireWorkers}
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/process"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--color-ink-700)] hover:text-[var(--color-ink-900)] px-2 py-3 transition-colors"
              >
                {pg.seeProcess} <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}

function CheckIcon({ strong }: { strong?: boolean }) {
  return (
    <span
      className={`inline-grid place-items-center w-7 h-7 rounded-full ${
        strong
          ? 'bg-[var(--color-navy-900)] text-white'
          : 'bg-[var(--color-ink-100)] text-[var(--color-ink-700)]'
      }`}
    >
      <CheckCircle2 size={14} />
    </span>
  );
}

function DashIcon() {
  return (
    <span className="inline-grid place-items-center w-7 h-7 rounded-full bg-[var(--color-ink-100)] text-[var(--color-ink-400)]">
      <span className="block w-2.5 h-px bg-current" />
    </span>
  );
}
