'use client';

import Image from 'next/image';
import { MapPin, Award, Globe } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal } from '@/components/site/Reveal';

const DIFFERENTIATORS = [
  {
    icon: <MapPin size={24} />,
    title: 'A built-in flow of talent',
    description:
      'Our office sits next to a busy TWIC center, so roughly a hundred credentialed workers walk by every day. Nurses, port operators, plant technicians, welders. That is a steady, dual-sector pipeline that other agencies simply cannot copy.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: <Award size={24} />,
    title: 'We test and certify on-site',
    description:
      "We don't just recruit, we certify. As an authorized Pearson VUE testing center, we host NCLEX and other board exams right inside our doors. Your new healthcare hire arrives compliant and ready to start, faster than any agency can promise.",
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: <Globe size={24} />,
    title: 'A global hiring lane',
    description:
      'We specialize in EB-2 NIW and TN visa placements for healthcare professionals. We handle the moving parts so you gain long-term clinical talent without the administrative drag.',
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
  },
];

export function Differentiators() {
  return (
    <Section tone="white">
      <Container className="py-12 sm:py-24 lg:py-32">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Why employers pick Industritas first"
          description="Three things no other staffing firm can match, and won't be able to copy any time soon."
          align="center"
          className="!mx-auto !text-center"
        />

        <div className="mt-16 sm:mt-20 space-y-20 lg:space-y-28">
          {DIFFERENTIATORS.map((d, i) => (
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
                      src={d.image}
                      alt={d.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-950)]/30 to-transparent" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[var(--color-blue-600)] grid place-items-center text-white shadow-lg shadow-blue-600/30">
                    {d.icon}
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
