import { Users, ShieldCheck, ClipboardCheck, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';

const PILLARS = [
  {
    icon: <Users size={18} />,
    title: 'Staffing',
    description:
      'Industrial, Healthcare, Skilled Trades, and Logistics talent — sourced, screened, and deployment-ready.',
    href: '/services/staffing',
  },
  {
    icon: <ClipboardCheck size={18} />,
    title: 'Certification',
    description:
      'Trade certifications, licensing checks, medical and background — verified before placement.',
    href: '/services/certification',
  },
  {
    icon: <ShieldCheck size={18} />,
    title: 'Compliance',
    description:
      'Compliance-first architecture reduces employer liability on every placement, day one.',
    href: '/services/certification',
  },
  {
    icon: <Globe size={18} />,
    title: 'Immigration Coordination',
    description:
      'Attorney-coordinated visa pathways — EB-2 NIW, EB-3, TN, EB-5 — fully non-legal facilitation.',
    href: '/services/immigration',
  },
];

export function Solution() {
  return (
    <Section tone="soft">
      <Container className="py-20 lg:py-28">
        <SectionHeader
          eyebrow="The Solution"
          title="One integrated workforce ecosystem. Four operating pillars."
          description="Staffing, Certification, Compliance, and Immigration Coordination under one platform — eliminating vendor fragmentation and accelerating compliant placements."
          align="center"
          className="!mx-auto !text-center"
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map((p) => (
            <StaggerItem key={p.title}>
              <Link
                href={p.href}
                className="group block h-full p-6 rounded-xl border border-[var(--color-ink-200)] bg-white hover:border-[var(--color-ink-300)] hover:shadow-card transition-all duration-500 ease-out hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-md bg-[var(--color-navy-900)] grid place-items-center text-white transition-transform duration-500 group-hover:-translate-y-0.5">
                  {p.icon}
                </div>
                <h3 className="mt-5 text-[18px] font-semibold text-[var(--color-ink-900)]">{p.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-[var(--color-ink-600)]">
                  {p.description}
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[var(--color-ink-800)]">
                  Learn more
                  <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <div className="mt-12 mx-auto max-w-3xl text-center">
            <p className="text-[14.5px] text-[var(--color-ink-600)] leading-relaxed">
              <span className="font-semibold text-[var(--color-ink-900)]">One platform. One contract. One accountable partner.</span>{' '}
              Replace fragmented vendor relationships with a single operational backbone.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
