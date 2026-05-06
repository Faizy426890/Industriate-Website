import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { StaggerGroup, StaggerItem, Reveal } from '@/components/site/Reveal';

const INDUSTRIES = [
  {
    name: 'Industrial',
    image:
      'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80',
    description: 'Heavy manufacturing, refineries, ports, and plant operations. TWIC-certified, safety-trained.',
    href: '/industries#industrial',
  },
  {
    name: 'Healthcare',
    image:
      'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1200&q=80',
    description: 'Credentialed nurses, allied health, and support staff with full licensing verification.',
    href: '/industries#healthcare',
  },
  {
    name: 'Skilled Trades',
    image:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80',
    description: 'Certified welders, electricians, pipefitters, and construction professionals — verified before placement.',
    href: '/industries#trades',
  },
  {
    name: 'Logistics',
    image:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80',
    description: 'Warehouse, freight, supply chain, and distribution-center workforce solutions at scale.',
    href: '/industries#logistics',
  },
];

export function IndustriesPreview() {
  return (
    <Section tone="white">
      <Container className="py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Industries Served"
              title="Four verticals. One compliance-first operating model."
              description="Each vertical brings unique certification standards and risk profiles — all managed inside the platform ecosystem."
            />
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <Reveal direction="left">
              <Link
                href="/industries"
                className="group inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--color-ink-900)] border-b border-[var(--color-ink-300)] hover:border-[var(--color-ink-900)] pb-1 transition-colors"
              >
                Explore all industries
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>

        <StaggerGroup className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((i) => (
            <StaggerItem key={i.name}>
              <Link
                href={i.href}
                className="group block h-full rounded-xl overflow-hidden border border-[var(--color-ink-200)] bg-white hover:shadow-card transition-all duration-500 ease-out hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={i.image}
                    alt={i.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-950)]/40 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[17px] font-semibold text-[var(--color-ink-900)]">{i.name}</h3>
                    <ArrowUpRight
                      size={15}
                      className="text-[var(--color-ink-400)] transition-all duration-300 group-hover:text-[var(--color-ink-900)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--color-ink-600)]">
                    {i.description}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
