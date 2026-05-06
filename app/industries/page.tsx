import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Factory, Stethoscope, Wrench, Truck } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';
import { CTASection } from '@/components/site/CTASection';

export const metadata: Metadata = {
  title: 'Industries Served',
  description:
    'INDUSTRITAS deploys workforce solutions across Industrial, Healthcare, Skilled Trades, and Logistics — all managed inside the platform ecosystem.',
};

const INDUSTRIES = [
  {
    id: 'industrial',
    icon: <Factory size={20} />,
    name: 'Industrial',
    description:
      'Heavy manufacturing, refineries, ports, and plant operations. TWIC-certified workers, safety-trained, and deployment-ready for high-security environments.',
    image:
      'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1600&q=80',
    capabilities: [
      'TWIC-credentialed industrial pipeline',
      'Safety-trained crews for refineries & ports',
      'Plant operations and turnaround staffing',
      'OSHA-aligned documentation',
    ],
  },
  {
    id: 'healthcare',
    icon: <Stethoscope size={20} />,
    name: 'Healthcare',
    description:
      'Credentialed nurses, allied health professionals, and support staff. Full compliance documentation and licensing verification included.',
    image:
      'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1600&q=80',
    capabilities: [
      'Credentialed RNs, LPNs, and allied health',
      'Multi-state licensure verification',
      'Background, medical, and immunization checks',
      'Per diem, contract, and travel placements',
    ],
  },
  {
    id: 'trades',
    icon: <Wrench size={20} />,
    name: 'Skilled Trades',
    description:
      'Certified welders, electricians, pipefitters, and construction professionals. Trade certifications verified before placement.',
    image:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80',
    capabilities: [
      'Welders, electricians, pipefitters, riggers',
      'Industrial construction and shutdown crews',
      'Trade certification verification',
      'Mobilization for multi-site projects',
    ],
  },
  {
    id: 'logistics',
    icon: <Truck size={20} />,
    name: 'Logistics',
    description:
      'Warehouse operations, freight handling, supply chain staffing, and distribution center workforce solutions at scale.',
    image:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=80',
    capabilities: [
      'Warehouse and distribution-center staffing',
      'Freight handling and yard operations',
      'Peak-season volume scaling',
      'Multi-shift coverage and continuity planning',
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries Served"
        title="Four verticals. One compliance-first operating model."
        description="INDUSTRITAS deploys workforce solutions across four core industries. Each vertical has unique compliance requirements, certification standards, and talent profiles — all managed within the platform ecosystem."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Industries' }]}
      />

      {INDUSTRIES.map((industry, idx) => (
        <Section key={industry.id} id={industry.id} tone={idx % 2 === 0 ? 'white' : 'soft'}>
          <Container className="py-20 lg:py-28">
            <div className={`grid lg:grid-cols-12 gap-12 items-center ${idx % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div className="lg:col-span-6">
                <Reveal direction={idx % 2 === 0 ? 'right' : 'left'}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--color-ink-200)] shadow-card">
                    <Image
                      src={industry.image}
                      alt={`${industry.name} workforce environment`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-6">
                <Reveal direction={idx % 2 === 0 ? 'left' : 'right'}>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-md bg-[var(--color-navy-900)] grid place-items-center text-white">
                      {industry.icon}
                    </div>
                    <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-600)]">
                      Vertical · 0{idx + 1}
                    </span>
                  </div>
                  <h2 className="headline mt-5 text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.06] font-semibold text-[var(--color-ink-900)]">
                    {industry.name}
                  </h2>
                  <p className="mt-5 text-[15.5px] leading-relaxed text-[var(--color-ink-600)] max-w-xl">
                    {industry.description}
                  </p>
                </Reveal>
                <StaggerGroup className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {industry.capabilities.map((c) => (
                    <StaggerItem key={c}>
                      <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-white border border-[var(--color-ink-200)]">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-500)] flex-none" />
                        <span className="text-[13.5px] text-[var(--color-ink-700)]">{c}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
                <Reveal delay={0.15}>
                  <Link
                    href="/contact?intent=workforce"
                    className="group mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--color-ink-900)] border-b border-[var(--color-ink-300)] hover:border-[var(--color-ink-900)] pb-1 transition-colors"
                  >
                    Request {industry.name.toLowerCase()} workforce
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </Reveal>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      <CTASection />
    </>
  );
}
