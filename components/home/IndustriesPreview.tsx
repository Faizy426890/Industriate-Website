'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, Wrench, Truck, Factory } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { StaggerGroup, StaggerItem } from '@/components/site/Reveal';
import { useLanguage } from '@/components/site/LanguageProvider';

const INDUSTRY_HREFS = ['/industries#healthcare', '/industries#industrial', '/industries#trades', '/industries#logistics'];
const INDUSTRY_IMAGES = [
  'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80',
];
const INDUSTRY_ICONS = [<Heart size={20} key="h" />, <Factory size={20} key="f" />, <Wrench size={20} key="w" />, <Truck size={20} key="t" />];

export function IndustriesPreview() {
  const { t } = useLanguage();
  const industries = t.industriesPreview.industries;

  return (
    <Section tone="soft">
      <Container className="py-20 sm:py-24 lg:py-32">
        <SectionHeader
          eyebrow={t.industriesPreview.eyebrow}
          title={t.industriesPreview.title}
          description={t.industriesPreview.description}
          align="center"
          className="!mx-auto !text-center"
        />

        <StaggerGroup className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {industries.map((ind, idx) => (
            <StaggerItem key={ind.name}>
              <Link
                href={INDUSTRY_HREFS[idx]}
                className="group block h-full rounded-2xl overflow-hidden bg-white border border-[var(--color-ink-200)] hover:border-[var(--color-blue-300)] hover:shadow-lg transition-all duration-500 ease-out hover:-translate-y-1"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={INDUSTRY_IMAGES[idx]}
                    alt={ind.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-950)]/60 via-[var(--color-navy-950)]/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 grid place-items-center text-white">
                      {INDUSTRY_ICONS[idx]}
                    </div>
                    <h3 className="text-[19px] sm:text-[20px] font-bold text-white">{ind.name}</h3>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-[var(--color-ink-600)]">
                    {ind.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--color-blue-600)] group-hover:text-[var(--color-blue-700)]">
                    {t.industriesPreview.learnMore}
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
