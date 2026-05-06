import Link from 'next/link';
import { ArrowRight, Briefcase, Users } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal } from '@/components/site/Reveal';

const EMPLOYER_BENEFITS = [
  '48-hour deployment capability',
  'Pre-vetted, certified, deployment-ready workers',
  'Reduced liability via compliance-first architecture',
  'Single-vendor integration — no fragmentation',
  'Scalable workforce across multiple industries',
  'Immigration coordination for global talent needs',
];

const CANDIDATE_BENEFITS = [
  'Access to roles across Industrial, Healthcare, Trades, and Logistics',
  'Certification and compliance support throughout the process',
  'Connections to U.S.-licensed immigration attorneys',
  'Visa pathway coordination — EB-2, EB-3, TN, EB-5',
  'Career growth opportunities with leading employers',
  'Transparent, compliant, professionally managed process',
];

export function Audiences() {
  return (
    <Section tone="soft">
      <Container className="py-20 lg:py-28">
        <SectionHeader
          eyebrow="Built for Two Audiences"
          title="One platform. Two journeys."
          description="Employers and candidates each get a focused path through the workforce ecosystem — separate messaging, separate flows, one shared compliance backbone."
          align="center"
          className="!mx-auto !text-center"
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-5">
          <Reveal direction="right">
            <article className="group h-full p-7 lg:p-9 rounded-2xl bg-[var(--color-navy-950)] text-white relative overflow-hidden">
              <div aria-hidden className="absolute inset-0 opacity-[0.06] bg-grid-soft" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-md bg-white/[0.06] border border-white/10 grid place-items-center text-[var(--color-accent-300)]">
                    <Briefcase size={18} />
                  </div>
                  <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-300)]">For Employers</span>
                </div>
                <h3 className="headline text-[24px] sm:text-[28px] font-semibold leading-tight">
                  Speed, compliance, and risk reduction at scale.
                </h3>
                <ul className="mt-7 space-y-3.5">
                  {EMPLOYER_BENEFITS.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[14px] text-white/75">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-400)] flex-none" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    href="/contact?intent=workforce"
                    className="group/btn inline-flex items-center gap-2 bg-white text-[var(--color-navy-900)] text-[14px] font-semibold px-5 py-3 rounded-md hover:bg-[var(--color-accent-100)] transition-all duration-300"
                  >
                    Request Workforce
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/for-employers"
                    className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-white/85 hover:text-white px-2 py-3 transition-colors"
                  >
                    Learn more <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal direction="left">
            <article className="group h-full p-7 lg:p-9 rounded-2xl bg-white border border-[var(--color-ink-200)] hover:shadow-card transition-shadow duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-md bg-[var(--color-ink-50)] border border-[var(--color-ink-200)] grid place-items-center text-[var(--color-accent-600)]">
                  <Users size={18} />
                </div>
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-600)]">For Candidates</span>
              </div>
              <h3 className="headline text-[24px] sm:text-[28px] font-semibold leading-tight text-[var(--color-ink-900)]">
                Job access, career growth, and structured visa pathways.
              </h3>
              <ul className="mt-7 space-y-3.5">
                {CANDIDATE_BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[14px] text-[var(--color-ink-700)]">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-500)] flex-none" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact?intent=apply"
                  className="group/btn inline-flex items-center gap-2 bg-[var(--color-navy-900)] text-white text-[14px] font-semibold px-5 py-3 rounded-md hover:bg-[var(--color-navy-700)] transition-all duration-300"
                >
                  Apply Now
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                </Link>
                <Link
                  href="/for-candidates"
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--color-ink-700)] hover:text-[var(--color-ink-900)] px-2 py-3 transition-colors"
                >
                  Learn more <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
