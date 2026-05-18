'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, ShieldCheck, Users, Layers, Globe, ClipboardCheck } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';
import { LeadForm } from '@/components/site/LeadForm';
import { useLanguage } from '@/components/site/LanguageProvider';

const VALUE_ICONS = [
  <Zap size={18} key="z" />,
  <ClipboardCheck size={18} key="c" />,
  <ShieldCheck size={18} key="s" />,
  <Users size={18} key="u" />,
  <Layers size={18} key="l" />,
  <Globe size={18} key="g" />,
];

export function ForEmployersContent() {
  const { t } = useLanguage();
  const pg = t.forEmployers;

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
            className="group inline-flex items-center gap-2 bg-[var(--color-blue-600)] text-white text-[14px] font-semibold px-5 sm:px-6 py-3.5 rounded-lg hover:bg-[var(--color-blue-700)] transition-all duration-300 shadow-lg shadow-blue-600/25"
          >
            {pg.reachOutToHire}
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/why-us"
            className="inline-flex items-center gap-2 border border-white/20 text-white text-[14px] font-semibold px-5 sm:px-6 py-3.5 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            {pg.whyUs}
          </Link>
        </div>
      </PageHero>

      <Section tone="white">
        <Container className="py-16 sm:py-20 lg:py-28">
          <SectionHeader eyebrow={pg.whatYouGet} title={pg.whatYouGetTitle} />
          <StaggerGroup className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {pg.value.map((v, idx) => (
              <StaggerItem key={v.title}>
                <article className="h-full p-6 sm:p-7 rounded-2xl border border-[var(--color-ink-200)] bg-white hover:border-[var(--color-blue-200)] hover:shadow-lg transition-all duration-500 ease-out hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-blue-600)] grid place-items-center text-white">
                    {VALUE_ICONS[idx]}
                  </div>
                  <h3 className="mt-5 text-[17px] sm:text-[18px] font-bold text-[var(--color-ink-900)]">{v.title}</h3>
                  <p className="mt-2.5 text-[14px] sm:text-[14.5px] leading-relaxed text-[var(--color-ink-600)]">{v.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <Section tone="soft">
        <Container className="py-16 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 items-start">
            <div className="lg:col-span-6">
              <SectionHeader
                eyebrow={pg.whoWeWork}
                title={pg.whoWeWorkTitle}
                description={pg.whoWeWorkDesc}
              />
              <Reveal delay={0.1}>
                <ul className="mt-8 space-y-3">
                  {pg.whoList.map((line) => (
                    <li key={line} className="flex items-start gap-3 text-[14px] sm:text-[14.5px] text-[var(--color-ink-700)]">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-blue-500)] flex-none" />
                      {line}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal direction="left">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--color-ink-200)] shadow-card">
                  <Image
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
                    alt="Operations team meeting"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="py-16 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow={pg.reachOut}
                title={pg.reachOutTitle}
                description={pg.reachOutDesc}
              />
              <Reveal delay={0.1}>
                <div className="mt-6 sm:mt-8 rounded-xl border border-[var(--color-blue-100)] bg-[var(--color-blue-50)] p-5">
                  <p className="text-[13.5px] leading-relaxed text-[var(--color-ink-700)]">
                    {pg.reachOutNote}
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <LeadForm defaultIntent="workforce" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
