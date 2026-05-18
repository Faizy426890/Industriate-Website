'use client';

import { ClipboardList, Users, ShieldCheck, Scale, Truck } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';
import { CTASection } from '@/components/site/CTASection';
import { useLanguage } from '@/components/site/LanguageProvider';

const STEP_ICONS = [
  <ClipboardList size={18} key="cl" />,
  <Users size={18} key="u" />,
  <ShieldCheck size={18} key="s" />,
  <Scale size={18} key="sc" />,
  <Truck size={18} key="t" />,
];

export function ProcessContent() {
  const { t } = useLanguage();
  const pg = t.process;

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
          <SectionHeader
            eyebrow={pg.workflowEyebrow}
            title={pg.workflowTitle}
            description={pg.workflowDesc}
          />

          <div className="mt-14 relative">
            <div
              aria-hidden
              className="absolute left-[19px] sm:left-[27px] top-3 bottom-3 w-px bg-gradient-to-b from-[var(--color-accent-300)] via-[var(--color-ink-200)] to-transparent"
            />
            <StaggerGroup className="space-y-5">
              {pg.steps.map((s, idx) => (
                <StaggerItem key={s.n}>
                  <article className="relative flex gap-5 sm:gap-7">
                    <div className="relative flex-none">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[var(--color-navy-900)] grid place-items-center text-white shadow-soft border-4 border-white">
                        <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.08em]">{s.n}</span>
                      </div>
                    </div>
                    <div className="flex-1 pt-1 pb-6 border-b border-[var(--color-ink-100)] last:border-b-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-2 text-[var(--color-accent-600)]">
                          {STEP_ICONS[idx]}
                          <span className="text-[11px] font-semibold tracking-[0.16em] uppercase">{s.short}</span>
                        </div>
                      </div>
                      <h3 className="mt-3 text-[22px] sm:text-[26px] font-semibold text-[var(--color-ink-900)] headline">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-ink-600)] max-w-2xl">
                        {s.description}
                      </p>
                      <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-2xl">
                        {s.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2.5 p-3 rounded-lg bg-[var(--color-ink-50)] border border-[var(--color-ink-200)] text-[13.5px] text-[var(--color-ink-700)]"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-500)] flex-none" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Container>
      </Section>

      <Section tone="soft">
        <Container className="py-16 lg:py-20">
          <Reveal>
            <p className="max-w-3xl mx-auto text-center text-[15.5px] sm:text-[17px] leading-relaxed text-[var(--color-ink-700)]">
              <span className="font-semibold text-[var(--color-ink-900)]">
                {pg.closingText}
              </span>{' '}
              {pg.closingBody}
            </p>
          </Reveal>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
