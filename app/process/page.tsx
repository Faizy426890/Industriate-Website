import type { Metadata } from 'next';
import { ClipboardList, Users, ShieldCheck, Scale, Truck } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';
import { CTASection } from '@/components/site/CTASection';

export const metadata: Metadata = {
  title: 'Process · The 5-Step Deployment Workflow',
  description:
    'From first contact to deployment. The INDUSTRITAS 5-step process: engagement, matching, compliance, immigration coordination, deployment.',
};

const STEPS = [
  {
    n: '01',
    icon: <ClipboardList size={18} />,
    title: 'Employer Engagement',
    short: 'Define workforce needs',
    description:
      'Define workforce needs, volume, timeline, and compliance requirements. Our team conducts a structured intake to map the full scope.',
    bullets: ['Volume and shift modeling', 'Compliance scope mapping', 'Timeline and ramp planning', 'Stakeholder alignment'],
  },
  {
    n: '02',
    icon: <Users size={18} />,
    title: 'Talent Matching',
    short: 'Local & global pipeline',
    description:
      'We tap local and global pipelines to find the best-fit candidates. Pre-screened, and lined up with your needs.',
    bullets: ['Pre-screened talent pools', 'Domestic + international pipelines', 'Spec-aligned candidate slates', 'Cultural and operational fit'],
  },
  {
    n: '03',
    icon: <ShieldCheck size={18} />,
    title: 'Compliance & Documentation',
    short: 'Certs, medical, background',
    description:
      'Certifications verified, medical checks completed, background verification processed. Every candidate arrives deployment-ready.',
    bullets: ['Trade and licensure verification', 'Medical and drug screening', 'Background and right-to-work', 'Industry-specific credentials (e.g., TWIC)'],
  },
  {
    n: '04',
    icon: <Scale size={18} />,
    title: 'Immigration Coordination',
    short: 'Attorneys handle legal work',
    description:
      'Licensed attorneys handle all legal work. INDUSTRITAS keeps the paperwork and timelines moving between everyone, in a non-legal role.',
    bullets: ['Attorney, employer, candidate coordination', 'Documents and timeline management', 'Process guidance (non-legal)', 'EB-2 NIW, EB-3, TN, EB-5 pathways'],
  },
  {
    n: '05',
    icon: <Truck size={18} />,
    title: 'Deployment',
    short: 'Worker placed and ready',
    description:
      'Worker is placed, onboarded, and ready. Ongoing support available through the platform ecosystem.',
    bullets: ['Onboarding and orientation', 'On-site readiness checks', 'Ongoing platform support', 'Continuity and replacement workflows'],
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="Five steps. One operational backbone."
        description="Here is exactly what to expect, from first contact to deployment. Clear steps, no run-around."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Process' }]}
      />

      <Section tone="white">
        <Container className="py-20 lg:py-28">
          <SectionHeader
            eyebrow="The Workflow"
            title="From request to deployment, all in one place."
            description="Every step lives inside the platform. Fewer delays, no vendor handoffs, and every placement compliant from day one."
          />

          <div className="mt-14 relative">
            <div
              aria-hidden
              className="absolute left-[19px] sm:left-[27px] top-3 bottom-3 w-px bg-gradient-to-b from-[var(--color-accent-300)] via-[var(--color-ink-200)] to-transparent"
            />
            <StaggerGroup className="space-y-5">
              {STEPS.map((s) => (
                <StaggerItem key={s.n}>
                  <article className="relative flex gap-5 sm:gap-7">
                    <div className="relative flex-none">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[var(--color-navy-900)] grid place-items-center text-white shadow-soft border-4 border-white">
                        <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.08em]">{s.n}</span>
                      </div>
                    </div>
                    <div className="flex-1 pt-1 pb-6 border-b border-[var(--color-ink-100)] last:border-b-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-2 text-[var(--color-accent-600)]">
                          {s.icon}
                          <span className="text-[11px] font-semibold tracking-[0.16em] uppercase">{s.short}</span>
                        </div>
                      </div>
                      <h3 className="mt-3 text-[22px] sm:text-[26px] font-semibold text-[var(--color-ink-900)] headline">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-ink-600)] max-w-2xl">
                        {s.description}
                      </p>
                      <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-2xl">
                        {s.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2.5 p-3 rounded-lg bg-[var(--color-ink-50)] border border-[var(--color-ink-200)] text-[13.5px] text-[var(--color-ink-700)]"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-500)] flex-none" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Container>
      </Section>

      <Section tone="soft">
        <Container className="py-16 lg:py-20">
          <Reveal>
            <p className="max-w-3xl mx-auto text-center text-[15.5px] sm:text-[17px] leading-relaxed text-[var(--color-ink-700)]">
              <span className="font-semibold text-[var(--color-ink-900)]">
                This end-to-end process is what separates INDUSTRITAS from traditional staffing agencies.
              </span>{' '}
              Every step lives inside the platform. Fewer delays, no vendor handoffs, and every
              placement compliant from day one.
            </p>
          </Reveal>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
