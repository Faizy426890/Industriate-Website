'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Briefcase, ClipboardCheck, Globe, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';
import { LeadForm } from '@/components/site/LeadForm';
import { useLanguage } from '@/components/site/LanguageProvider';

const PILLAR_ICONS = [
  <Briefcase size={18} key="b" />,
  <ClipboardCheck size={18} key="c" />,
  <Globe size={18} key="g" />,
  <GraduationCap size={18} key="gr" />,
  <ShieldCheck size={18} key="s" />,
  <Sparkles size={18} key="sp" />,
];

export function ForCandidatesContent() {
  const { t } = useLanguage();
  const pg = t.forCandidates;

  return (
    <>
      <PageHero
        eyebrow={pg.eyebrow}
        title={pg.title}
        description={pg.description}
        crumbs={[{ label: t.shared.home, href: '/' }, { label: pg.crumb }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact?intent=apply"
            className="group inline-flex items-center gap-2 bg-white text-[var(--color-navy-900)] text-[14px] font-semibold px-5 py-3 rounded-md hover:bg-[var(--color-accent-100)] transition-all duration-300"
          >
            {pg.applyJob}
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/visa-pathways"
            className="inline-flex items-center gap-2 border border-white/15 text-white text-[14px] font-semibold px-5 py-3 rounded-md hover:bg-white/[0.05] hover:border-white/25 transition-all duration-300"
          >
            {pg.visaPathways}
          </Link>
        </div>
      </PageHero>

      <Section tone="white">
        <Container className="py-16 sm:py-20 lg:py-28">
          <SectionHeader
            eyebrow={pg.whyEyebrow}
            title={pg.whyTitle}
            description={pg.whyDesc}
          />
          <StaggerGroup className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pg.pillars.map((p, idx) => (
              <StaggerItem key={p.title}>
                <article className="h-full p-5 sm:p-6 rounded-xl border border-[var(--color-ink-200)] bg-white hover:shadow-card hover:border-[var(--color-blue-200)] transition-all duration-500 ease-out hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-md bg-[var(--color-ink-50)] border border-[var(--color-ink-200)] grid place-items-center text-[var(--color-accent-600)]">
                    {PILLAR_ICONS[idx]}
                  </div>
                  <h3 className="mt-4 sm:mt-5 text-[16.5px] sm:text-[17px] font-semibold text-[var(--color-ink-900)]">{p.title}</h3>
                  <p className="mt-2.5 text-[13.5px] sm:text-[14px] leading-relaxed text-[var(--color-ink-600)]">{p.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <Section tone="soft">
        <Container className="py-16 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionHeader eyebrow={pg.journeyEyebrow} title={pg.journeyTitle} />
              <Reveal delay={0.1}>
                <div className="mt-6 sm:mt-8 relative aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--color-ink-200)]">
                  <Image
                    src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=1200&q=80"
                    alt="Candidate consultation"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <StaggerGroup className="space-y-3.5">
                {pg.steps.map((s) => (
                  <StaggerItem key={s.n}>
                    <article className="p-5 sm:p-6 rounded-xl border border-[var(--color-ink-200)] bg-white">
                      <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--color-accent-600)]">
                        {pg.stepLabel} {s.n}
                      </span>
                      <h3 className="mt-3 text-[16.5px] sm:text-[17px] font-semibold text-[var(--color-ink-900)]">{s.title}</h3>
                      <p className="mt-2 text-[13.5px] sm:text-[14px] leading-relaxed text-[var(--color-ink-600)]">{s.body}</p>
                    </article>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="py-16 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow={pg.applyNow}
                title={pg.applyNowTitle}
                description={pg.applyNowDesc}
              />
              <Reveal delay={0.1}>
                <div className="mt-6 sm:mt-8 rounded-xl border border-[var(--color-ink-200)] bg-[var(--color-ink-50)] p-5">
                  <p className="text-[13.5px] leading-relaxed text-[var(--color-ink-700)]">
                    {pg.applyNowNote}
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <LeadForm defaultIntent="apply" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
