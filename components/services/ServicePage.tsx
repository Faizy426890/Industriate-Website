'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Scale } from 'lucide-react';
import {
  Factory, Wrench, Stethoscope, Truck, Users, Layers,
  Globe, MessagesSquare, FileCheck2, Calendar, ShieldCheck,
  ClipboardCheck, HeartPulse, Lock,
} from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';
import { CTASection } from '@/components/site/CTASection';
import { useLanguage } from '@/components/site/LanguageProvider';

export type ServiceKey = 'staffing' | 'immigration' | 'healthcare' | 'certification';

const CAPABILITY_ICONS: Record<ServiceKey, React.ReactNode[]> = {
  staffing: [
    <Factory size={18} key="f" />,
    <Wrench size={18} key="w" />,
    <Stethoscope size={18} key="st" />,
    <Truck size={18} key="tr" />,
    <Users size={18} key="u" />,
    <Layers size={18} key="l" />,
  ],
  immigration: [
    <Globe size={18} key="g" />,
    <MessagesSquare size={18} key="m" />,
    <FileCheck2 size={18} key="fc" />,
    <Calendar size={18} key="ca" />,
    <ShieldCheck size={18} key="sh" />,
    <Scale size={18} key="sc" />,
  ],
  healthcare: [
    <Stethoscope size={18} key="st" />,
    <HeartPulse size={18} key="hp" />,
    <ClipboardCheck size={18} key="cc" />,
    <ShieldCheck size={18} key="sh" />,
    <Globe size={18} key="g" />,
    <Calendar size={18} key="ca" />,
  ],
  certification: [
    <ClipboardCheck size={18} key="cc" />,
    <Stethoscope size={18} key="st" />,
    <ShieldCheck size={18} key="sh" />,
    <Lock size={18} key="lk" />,
    <Wrench size={18} key="w" />,
    <FileCheck2 size={18} key="fc" />,
  ],
};

type Props = {
  serviceKey: ServiceKey;
  heroImage: string;
};

export function ServicePage({ serviceKey, heroImage }: Props) {
  const { t } = useLanguage();
  const svc = t.services[serviceKey];
  const icons = CAPABILITY_ICONS[serviceKey];
  const immigSvc = serviceKey === 'immigration' ? t.services.immigration : null;

  return (
    <>
      <PageHero
        eyebrow={svc.eyebrow}
        title={svc.title}
        description={svc.description}
        crumbs={[
          { label: t.shared.home, href: '/' },
          { label: t.shared.services },
          { label: svc.pageName },
        ]}
      >
        <Link
          href="/contact?intent=workforce"
          className="group inline-flex items-center gap-2 bg-white text-[var(--color-navy-900)] text-[14px] font-semibold px-5 py-3 rounded-md hover:bg-[var(--color-accent-100)] transition-all duration-300"
        >
          {svc.ctaLabel}
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </PageHero>

      <Section tone="white">
        <Container className="py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--color-ink-200)] shadow-card">
                  <Image
                    src={heroImage}
                    alt={svc.pageName}
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
                eyebrow={t.serviceOverview}
                title={t.serviceWhat.replace('{name}', svc.pageName.toLowerCase())}
              />
              <Reveal delay={0.05}>
                <div className="mt-6 text-[15.5px] leading-relaxed text-[var(--color-ink-700)] space-y-4">
                  <p>{svc.introP1}</p>
                  <p>{svc.introP2}</p>
                </div>
              </Reveal>
              {immigSvc && (
                <Reveal delay={0.1}>
                  <div className="mt-8 rounded-xl border border-[var(--color-ink-200)] bg-[var(--color-ink-50)] p-5">
                    <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--color-accent-600)]">
                      <Scale size={13} /> {immigSvc.calloutImportant}
                    </div>
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-[var(--color-ink-700)]">
                      {immigSvc.calloutBody}{' '}
                      <Link href="/compliance" className="underline underline-offset-4 hover:text-[var(--color-ink-900)]">
                        {t.shared.readDisclaimer}
                      </Link>
                      .
                    </p>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="soft">
        <Container className="py-20 lg:py-28">
          <SectionHeader
            eyebrow={t.capabilities}
            title={t.capabilitiesTitle}
            description={t.capabilitiesDesc}
            align="center"
            className="!mx-auto !text-center"
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {svc.capabilities.map((c, idx) => (
              <StaggerItem key={c.title}>
                <article className="h-full p-6 rounded-xl border border-[var(--color-ink-200)] bg-white hover:shadow-card transition-all duration-500 ease-out hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-md bg-[var(--color-ink-50)] border border-[var(--color-ink-200)] grid place-items-center text-[var(--color-accent-600)]">
                    {icons[idx]}
                  </div>
                  <h3 className="mt-5 text-[17px] font-semibold text-[var(--color-ink-900)]">{c.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-[var(--color-ink-600)]">{c.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow={t.outcomes}
                title={t.outcomesTitle}
                description={t.outcomesDesc}
              />
            </div>
            <div className="lg:col-span-7">
              <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {svc.outcomes.map((o) => (
                  <StaggerItem key={o}>
                    <div className="p-5 rounded-lg border border-[var(--color-ink-200)] bg-[var(--color-ink-50)] flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-500)] flex-none" />
                      <span className="text-[14px] text-[var(--color-ink-700)]">{o}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
