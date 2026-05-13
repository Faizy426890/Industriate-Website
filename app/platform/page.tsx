import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Layers, ShieldCheck, ClipboardCheck, Globe, Zap, Users } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';
import { CTASection } from '@/components/site/CTASection';

export const metadata: Metadata = {
  title: 'Platform · How It Works',
  description:
    'INDUSTRITAS is a fully integrated workforce platform: staffing, certification, compliance, and immigration coordination, all in one place.',
};

const PILLARS = [
  {
    icon: <Users size={20} />,
    title: 'Staffing',
    description:
      'Industrial, healthcare, skilled-trades, and logistics talent. Sourced through local and global pipelines, screened against your needs.',
    points: ['Industrial workforce at scale', 'Credentialed healthcare staffing', 'Certified skilled trades', 'Logistics & distribution teams'],
  },
  {
    icon: <ClipboardCheck size={20} />,
    title: 'Certification',
    description:
      'Trade certifications, licensing checks, medical clearances, and background screening completed before any worker is placed.',
    points: ['Trade & licensure verification', 'Medical & drug screening', 'Background checks', 'TWIC and security credentials'],
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Compliance',
    description:
      'A compliance-first architecture that reduces employer liability rather than creating it. Every document is reviewed before deployment.',
    points: ['I-9 and right-to-work', 'OSHA-aligned safety records', 'Industry-specific certifications', 'Audit-ready documentation'],
  },
  {
    icon: <Globe size={20} />,
    title: 'Immigration Coordination',
    description:
      'Attorney-coordinated visa pathways. INDUSTRITAS facilitates communication and documentation while licensed counsel handles all legal work.',
    points: ['EB-2 NIW · EB-3 · TN · EB-5', 'Attorney-employer-candidate coordination', 'Document and timeline management', 'Strictly non-legal facilitation'],
  },
];

const PLATFORM_BENEFITS = [
  {
    icon: <Layers size={18} />,
    title: 'One contract',
    description: 'Replace three to five vendors with one accountable partner.',
  },
  {
    icon: <Zap size={18} />,
    title: '48-hour deployment',
    description: 'Pre-vetted talent pools and streamlined coordination compress placement timelines.',
  },
  {
    icon: <ShieldCheck size={18} />,
    title: 'Reduced liability',
    description: 'Compliance is built into placement, not added later. Every worker arrives audit-ready.',
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="One workforce ecosystem. Four operating pillars."
        description="INDUSTRITAS is a fully integrated platform built to replace the fragmented stack of staffing agencies, certification vendors, compliance providers, and immigration coordinators that enterprise workforce teams normally manage in parallel."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Platform' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact?intent=workforce"
            className="group inline-flex items-center gap-2 bg-white text-[var(--color-navy-900)] text-[14px] font-semibold px-5 py-3 rounded-md hover:bg-[var(--color-accent-100)] transition-all duration-300"
          >
            Hire workers
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/process"
            className="inline-flex items-center gap-2 border border-white/15 text-white text-[14px] font-semibold px-5 py-3 rounded-md hover:bg-white/[0.05] hover:border-white/25 transition-all duration-300"
          >
            See the 5-step process
          </Link>
        </div>
      </PageHero>

      <Section tone="white">
        <Container className="py-20 lg:py-28">
          <SectionHeader
            eyebrow="The Four Pillars"
            title="Built around the lifecycle of a compliant placement."
            description="Each pillar is a real operational job. Nothing is bolted on. They share data, paperwork, and accountability inside one platform."
            align="center"
            className="!mx-auto !text-center"
          />

          <StaggerGroup className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            {PILLARS.map((p) => (
              <StaggerItem key={p.title}>
                <article className="h-full p-7 rounded-xl border border-[var(--color-ink-200)] bg-white hover:shadow-card transition-all duration-500 ease-out hover:-translate-y-0.5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-md bg-[var(--color-navy-900)] grid place-items-center text-white">
                      {p.icon}
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
                eyebrow="Why one platform"
                title="A single operating system for compliant workforce delivery."
                description="When staffing, certification, compliance, and immigration share one source of truth, placements drop from weeks to days. And every worker arrives ready to start."
              />
              <StaggerGroup className="mt-9 space-y-3">
                {PLATFORM_BENEFITS.map((b) => (
                  <StaggerItem key={b.title}>
                    <div className="flex items-start gap-4 p-5 rounded-xl border border-[var(--color-ink-200)] bg-white">
                      <div className="flex-none w-10 h-10 rounded-md bg-[var(--color-ink-50)] border border-[var(--color-ink-200)] grid place-items-center text-[var(--color-accent-600)]">
                        {b.icon}
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
        eyebrow="Get on the platform"
        title="Ready to replace your fragmented vendor stack?"
        description="Tell us what you need. A coordinator replies within 5 to 10 minutes during business hours."
      />
    </>
  );
}
