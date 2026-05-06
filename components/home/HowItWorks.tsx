import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';

const STEPS = [
  {
    n: '01',
    title: 'Workforce Request',
    description:
      'Define needs, volume, timeline, and compliance requirements through a structured intake.',
  },
  {
    n: '02',
    title: 'Candidate Matching',
    description:
      'Best-fit candidates surfaced from local and global pipelines, pre-screened to your spec.',
  },
  {
    n: '03',
    title: 'Compliance & Docs',
    description:
      'Certifications, medical, and background verifications completed before deployment.',
  },
  {
    n: '04',
    title: 'Deployment',
    description:
      'Worker placed, onboarded, and ready — with optional immigration coordination by counsel.',
  },
];

export function HowItWorks() {
  return (
    <Section tone="white">
      <Container className="py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="How It Works"
              title="A four-step path from request to deployment."
              description="Every step is managed inside a single ecosystem — reducing delays, eliminating vendor fragmentation, and ensuring every placement is compliant from day one."
            />
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <Reveal direction="left">
              <Link
                href="/process"
                className="group inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--color-ink-900)] border-b border-[var(--color-ink-300)] hover:border-[var(--color-ink-900)] pb-1 transition-colors"
              >
                See the full 5-step process
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>

        <StaggerGroup className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-ink-200)] rounded-xl overflow-hidden border border-[var(--color-ink-200)]">
          {STEPS.map((s) => (
            <StaggerItem key={s.n}>
              <div className="h-full bg-white p-6 lg:p-7 transition-colors duration-500 hover:bg-[var(--color-ink-50)]">
                <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-600)]">
                  Step {s.n}
                </div>
                <h3 className="mt-3 text-[18px] font-semibold text-[var(--color-ink-900)]">{s.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-[var(--color-ink-600)]">{s.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
