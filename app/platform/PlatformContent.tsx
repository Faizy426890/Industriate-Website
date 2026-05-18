'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Layers, ShieldCheck, ClipboardCheck, Globe, Zap, Users } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';
import { CTASection } from '@/components/site/CTASection';
import { useLanguage } from '@/components/site/LanguageProvider';

const PILLAR_ICONS = [<Users size={20} key="u" />, <ClipboardCheck size={20} key="c" />, <ShieldCheck size={20} key="s" />, <Globe size={20} key="g" />];
const BENEFIT_ICONS = [<Layers size={18} key="l" />, <Zap size={18} key="z" />, <ShieldCheck size={18} key="s" />];

export function PlatformContent() {
  const { t } = useLanguage();
  const pg = t.platform;

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
            href="/contact?intent=workforce"
            className="group inline-flex items-center gap-2 bg-white text-[var(--color-navy-900)] text-[14px] font-semibold px-5 py-3 rounded-md hover:bg-[var(--color-accent-100)] transition-all duration-300"
          >
            {pg.hireWorkers}
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/process"
            className="inline-flex items-center gap-2 border border-white/15 text-white text-[14px] font-semibold px-5 py-3 rounded-md hover:bg-white/[0.05] hover:border-white/25 transition-all duration-300"
          >
            {pg.seeProcess}
          </Link>
        </div>
      </PageHero>

      <Section tone="white">
        <Container className="py-20 lg:py-28">
          <SectionHeader
            eyebrow={pg.pillarsEyebrow}
            title={pg.pillarsTitle}
            description={pg.pillarsDesc}
            align="center"
            className="!mx-auto !text-center"
          />

          <StaggerGroup className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            {pg.pillars.map((p, idx) => (
              <StaggerItem key={p.title}>
                <article className="h-full p-7 rounded-xl border border-[var(--color-ink-200)] bg-white hover:shadow-card transition-all duration-500 ease-out hover:-translate-y-0.5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-md bg-[var(--color-navy-900)] grid place-items-center text-white">
                      {PILLAR_ICONS[idx]}
                    </div>
                    <h3 className="text-[20px] font-semibold text-[var(--color-ink-900)]">{p.title}</h3>
                  </div>
                  <p className="mt-5 text-[14.5px] leading-relaxed text-[var(--color-ink-600)]">
                    {p.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-[13.5px] text-[var(--color-ink-700)]">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[var(--color-accent-500)] flex-none" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <Section tone="soft">
        <Container className="py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--color-ink-200)] shadow-card">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80"
                    alt="Workforce coordination operations"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <SectionHeader
                eyebrow={pg.whyEyebrow}
                title={pg.whyTitle}
                description={pg.whyDesc}
              />
              <StaggerGroup className="mt-9 space-y-3">
                {pg.benefits.map((b, idx) => (
                  <StaggerItem key={b.title}>
                    <div className="flex items-start gap-4 p-5 rounded-xl border border-[var(--color-ink-200)] bg-white">
                      <div className="flex-none w-10 h-10 rounded-md bg-[var(--color-ink-50)] border border-[var(--color-ink-200)] grid place-items-center text-[var(--color-accent-600)]">
                        {BENEFIT_ICONS[idx]}
                      </div>
                      <div>
                        <h4 className="text-[15.5px] font-semibold text-[var(--color-ink-900)]">{b.title}</h4>
                        <p className="mt-1 text-[13.5px] leading-relaxed text-[var(--color-ink-600)]">{b.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow={pg.ctaEyebrow}
        title={pg.ctaTitle}
        description={pg.ctaDesc}
      />
    </>
  );
}
