'use client';

import Image from 'next/image';
import { MapPin, Award, Globe } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal } from '@/components/site/Reveal';
import { useLanguage } from '@/components/site/LanguageProvider';

const IMAGES = [
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
];
const ICONS = [<MapPin size={24} key="m" />, <Award size={24} key="a" />, <Globe size={24} key="g" />];

export function Differentiators() {
  const { t } = useLanguage();
  const items = t.differentiators.items;

  return (
    <Section tone="white">
      <Container className="py-12 sm:py-24 lg:py-32">
        <SectionHeader
          eyebrow={t.differentiators.eyebrow}
          title={t.differentiators.title}
          description={t.differentiators.description}
          align="center"
          className="!mx-auto !text-center"
        />

        <div className="mt-16 sm:mt-20 space-y-20 lg:space-y-28">
          {items.map((d, i) => (
            <div
              key={d.title}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? 'lg:[direction:rtl] lg:*:[direction:ltr]' : ''
              }`}
            >
              <Reveal direction={i % 2 === 0 ? 'right' : 'left'}>
                <div className="relative">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elev">
                    <Image
                      src={IMAGES[i]}
                      alt={d.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-950)]/30 to-transparent" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[var(--color-blue-600)] grid place-items-center text-white shadow-lg shadow-blue-600/30">
                    {ICONS[i]}
                  </div>
                </div>
              </Reveal>

              <Reveal direction={i % 2 === 0 ? 'left' : 'right'} delay={0.1}>
                <div>
                  <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--color-blue-600)] mb-4">
                    <span className="w-8 h-px bg-[var(--color-blue-600)]" />
                    0{i + 1}
                  </div>
                  <h3 className="headline text-[26px] sm:text-[34px] font-bold text-[var(--color-ink-900)] leading-tight">
                    {d.title}
                  </h3>
                  <p className="mt-5 text-[15.5px] sm:text-[16px] leading-relaxed text-[var(--color-ink-600)]">
                    {d.description}
                  </p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
