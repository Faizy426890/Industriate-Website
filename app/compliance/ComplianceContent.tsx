'use client';

import { Scale, FileText, Lock, ShieldCheck, AlertOctagon, Building2 } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { Container, Section } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';
import { CTASection } from '@/components/site/CTASection';
import { useLanguage } from '@/components/site/LanguageProvider';

const PRINCIPLE_ICONS = [
  <Building2 size={18} key="b" />,
  <Scale size={18} key="sc" />,
  <ShieldCheck size={18} key="s" />,
  <FileText size={18} key="f" />,
];

export function ComplianceContent() {
  const { t } = useLanguage();
  const pg = t.compliance;

  return (
    <>
      <PageHero
        eyebrow={pg.eyebrow}
        title={pg.title}
        description={pg.description}
        crumbs={[{ label: t.shared.home, href: '/' }, { label: pg.crumb }]}
      />

      <Section tone="white">
        <Container className="py-20 lg:py-28" size="narrow">
          <Reveal>
            <div className="rounded-2xl border-l-4 border-[var(--color-accent-500)] bg-[var(--color-ink-50)] p-6 lg:p-7 flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-none w-10 h-10 rounded-md bg-white border border-[var(--color-ink-200)] grid place-items-center text-[var(--color-accent-600)]">
                <AlertOctagon size={16} />
              </div>
              <div>
                <h3 className="text-[15.5px] font-semibold text-[var(--color-ink-900)]">{pg.disclaimerTitle}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-ink-700)]">
                  {pg.disclaimerSub}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-10 space-y-6 text-[15.5px] leading-relaxed text-[var(--color-ink-700)]">
              <p className="border-l-4 border-[var(--color-accent-400)] pl-5 italic text-[var(--color-ink-800)]">
                {pg.quote}
              </p>
              <p>{pg.para2}</p>
            </div>
          </Reveal>

          <StaggerGroup className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pg.principles.map((p, idx) => (
              <StaggerItem key={p.title}>
                <article className="h-full p-6 rounded-xl border border-[var(--color-ink-200)] bg-white">
                  <div className="w-10 h-10 rounded-md bg-[var(--color-ink-50)] border border-[var(--color-ink-200)] grid place-items-center text-[var(--color-accent-600)]">
                    {PRINCIPLE_ICONS[idx]}
                  </div>
                  <h3 className="mt-5 text-[17px] font-semibold text-[var(--color-ink-900)]">{p.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-[var(--color-ink-600)]">{p.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <Section tone="soft" id="privacy">
        <Container size="narrow" className="py-20 lg:py-28">
          <Reveal>
            <h2 className="headline text-[26px] sm:text-[32px] font-semibold text-[var(--color-ink-900)]">
              {pg.privacyTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[var(--color-ink-700)]">
              <p>{pg.privacyP1}</p>
              <p>{pg.privacyP2}</p>
              <p>{pg.privacyP3}</p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="white" id="terms">
        <Container size="narrow" className="py-20 lg:py-28">
          <Reveal>
            <h2 className="headline text-[26px] sm:text-[32px] font-semibold text-[var(--color-ink-900)]">
              {pg.termsTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[var(--color-ink-700)]">
              <p>{pg.termsP1}</p>
              <p>{pg.termsP2}</p>
              <div className="flex items-start gap-3 mt-6 p-5 rounded-lg bg-[var(--color-ink-50)] border border-[var(--color-ink-200)]">
                <Lock size={16} className="mt-0.5 text-[var(--color-accent-600)] flex-none" />
                <p className="text-[13.5px] text-[var(--color-ink-700)]">
                  {pg.termsNote}
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
