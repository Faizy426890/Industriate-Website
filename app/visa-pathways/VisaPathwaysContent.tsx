'use client';

import Link from 'next/link';
import { Globe, Scale, FileCheck2, ArrowRight, Info } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';
import { CTASection } from '@/components/site/CTASection';
import { useLanguage } from '@/components/site/LanguageProvider';

export function VisaPathwaysContent() {
  const { t } = useLanguage();
  const pg = t.visaPathways;

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
            eyebrow={pg.pathwaysEyebrow}
            title={pg.pathwaysTitle}
            description={pg.pathwaysDesc}
          />

          <StaggerGroup className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            {pg.pathways.map((p) => (
              <StaggerItem key={p.code}>
                <article className="group h-full p-7 rounded-xl border border-[var(--color-ink-200)] bg-white hover:shadow-card transition-all duration-500 ease-out hover:-translate-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-600)] bg-[var(--color-accent-50)] border border-[var(--color-accent-200)] px-3 py-1.5 rounded-full">
                      {p.code}
                    </span>
                    <FileCheck2 size={16} className="text-[var(--color-ink-400)] group-hover:text-[var(--color-ink-700)] transition-colors" />
                  </div>
                  <h3 className="mt-5 text-[20px] font-semibold text-[var(--color-ink-900)]">{p.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--color-ink-600)]">{p.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.1}>
            <div className="mt-12 rounded-2xl border border-[var(--color-ink-200)] bg-[var(--color-ink-50)] p-6 lg:p-7 flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-none w-10 h-10 rounded-md bg-white border border-[var(--color-ink-200)] grid place-items-center text-[var(--color-accent-600)]">
                <Info size={16} />
              </div>
              <p className="text-[14.5px] leading-relaxed text-[var(--color-ink-700)]">
                <span className="font-semibold text-[var(--color-ink-900)]">{pg.roleNote}</span>{' '}
                {pg.roleBody}
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="soft">
        <Container className="py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow={pg.approvedEyebrow}
                title={pg.approvedTitle}
                description={pg.approvedDesc}
              />
              <Reveal delay={0.1}>
                <div className="mt-8 rounded-xl border border-[var(--color-ink-200)] bg-white p-6">
                  <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-600)]">
                    <Scale size={13} /> {pg.coordinationNote}
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-ink-700)]">
                    {pg.coordinationBody}
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pg.sayDo.map((row) => (
                  <StaggerItem key={row.value}>
                    <div
                      className={`h-full p-5 rounded-lg border ${
                        row.allowed
                          ? 'border-emerald-200 bg-emerald-50/50'
                          : 'border-[var(--color-ink-200)] bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-grid place-items-center w-6 h-6 rounded-full ${
                            row.allowed ? 'bg-emerald-100 text-emerald-700' : 'bg-[var(--color-ink-100)] text-[var(--color-ink-500)]'
                          }`}
                        >
                          {row.allowed ? <span className="text-[11px] font-bold">✓</span> : <span className="text-[11px] font-bold">×</span>}
                        </span>
                        <span className="text-[10.5px] font-semibold tracking-[0.16em] uppercase">
                          {row.allowed ? (
                            <span className="text-emerald-700">{pg.alwaysSay}</span>
                          ) : (
                            <span className="text-[var(--color-ink-500)]">{pg.neverSay}</span>
                          )}
                        </span>
                      </div>
                      <p
                        className={`mt-2.5 text-[14px] font-medium ${
                          row.allowed ? 'text-emerald-900' : 'text-[var(--color-ink-700)] line-through decoration-[var(--color-ink-300)]'
                        }`}
                      >
                        {row.value}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="py-20 lg:py-28">
          <Reveal>
            <div className="rounded-2xl border border-[var(--color-ink-200)] bg-[var(--color-ink-50)] p-8 lg:p-10">
              <div className="flex items-start gap-4">
                <div className="flex-none w-11 h-11 rounded-md bg-white border border-[var(--color-ink-200)] grid place-items-center text-[var(--color-accent-600)]">
                  <Globe size={18} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[22px] sm:text-[26px] font-semibold text-[var(--color-ink-900)] headline">
                    {pg.readyCta}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--color-ink-600)] max-w-2xl">
                    {pg.readyBody}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/contact?intent=workforce"
                      className="group inline-flex items-center gap-2 bg-[var(--color-navy-900)] text-white text-[14px] font-semibold px-5 py-3 rounded-md hover:bg-[var(--color-navy-700)] transition-colors"
                    >
                      {pg.coordinateBtn}
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                    <Link
                      href="/services/immigration"
                      className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--color-ink-800)] hover:text-[var(--color-ink-900)] px-2 py-3 transition-colors"
                    >
                      {pg.detailsLink} <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
