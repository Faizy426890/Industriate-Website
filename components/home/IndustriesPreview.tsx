'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, Wrench, Truck, Factory } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { StaggerGroup, StaggerItem } from '@/components/site/Reveal';

const INDUSTRIES = [
  {
    name: 'Healthcare',
    icon: <Heart size={20} />,
    image:
      'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1200&q=80',
    description:
      'Credentialed nurses, allied health pros, and clinical support staff. Full licensing verification and Pearson VUE testing on site.',
    href: '/industries#healthcare',
  },
  {
    name: 'Industrial',
    icon: <Factory size={20} />,
    image:
      'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80',
    description:
      'Heavy manufacturing, refineries, ports, and plants. TWIC-certified and safety-trained, ready to start.',
    href: '/industries#industrial',
  },
  {
    name: 'Skilled Trades',
    icon: <Wrench size={20} />,
    image:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80',
    description:
      'Certified welders, electricians, pipefitters, and construction pros. Verified and ready to deploy.',
    href: '/industries#trades',
  },
  {
    name: 'Logistics',
    icon: <Truck size={20} />,
    image:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80',
    description:
      'Warehouse, freight, supply chain, and distribution-center crews at scale.',
    href: '/industries#logistics',
  },
];

export function IndustriesPreview() {
  return (
    <Section tone="soft">
      <Container className="py-20 sm:py-24 lg:py-32">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Built for the sectors that keep America running"
          description="From hospital floors to plant floors. We deliver compliant, credentialed workers to the industries that matter most."
          align="center"
          className="!mx-auto !text-center"
        />

        <StaggerGroup className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {INDUSTRIES.map((ind) => (
            <StaggerItem key={ind.name}>
              <Link
                href={ind.href}
                className="group block h-full rounded-2xl overflow-hidden bg-white border border-[var(--color-ink-200)] hover:border-[var(--color-blue-300)] hover:shadow-lg transition-all duration-500 ease-out hover:-translate-y-1"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-950)]/60 via-[var(--color-navy-950)]/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 grid place-items-center text-white">
                      {ind.icon}
                    </div>
                    <h3 className="text-[19px] sm:text-[20px] font-bold text-white">{ind.name}</h3>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-[var(--color-ink-600)]">
                    {ind.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--color-blue-600)] group-hover:text-[var(--color-blue-700)]">
                    Learn more
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
