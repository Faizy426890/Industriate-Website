import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Briefcase, ClipboardCheck, Globe, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';
import { LeadForm } from '@/components/site/LeadForm';

export const metadata: Metadata = {
  title: 'For Candidates',
  description:
    'Apply to real jobs in healthcare, industrial, skilled trades, and logistics. Visa support available for international candidates.',
};

const PILLARS = [
  {
    icon: <Briefcase size={18} />,
    title: 'Real jobs with real employers',
    description: 'Open roles in industrial, healthcare, skilled trades, and logistics.',
  },
  {
    icon: <ClipboardCheck size={18} />,
    title: 'We help with certifications',
    description: 'Support through licensing, medical checks, and background processes.',
  },
  {
    icon: <Globe size={18} />,
    title: 'Visa-path support',
    description: 'EB-2 NIW, EB-3, TN, and EB-5 pathways coordinated with licensed attorneys.',
  },
  {
    icon: <GraduationCap size={18} />,
    title: 'Career growth',
    description: 'Move up the ladder with serious employers in high-stakes industries.',
  },
  {
    icon: <ShieldCheck size={18} />,
    title: 'No run-around',
    description: 'A clear, compliant, professionally managed process at every step.',
  },
  {
    icon: <Sparkles size={18} />,
    title: 'No upfront fees',
    description: 'Standard placements are paid by the employer. Legal services are billed by counsel.',
  },
];

const STEPS = [
  {
    n: '01',
    title: 'Send your application',
    body: 'Tell us about your role, experience, certifications, and work authorization.',
  },
  {
    n: '02',
    title: 'Match with open roles',
    body: 'We surface roles that fit your skills, certifications, and target locations.',
  },
  {
    n: '03',
    title: 'Compliance and paperwork',
    body: 'Certifications, medical checks, and background screening, all handled inside the platform.',
  },
  {
    n: '04',
    title: 'Visa support (if you need it)',
    body: 'We connect you with licensed attorneys who handle every legal part of your case.',
  },
  {
    n: '05',
    title: 'Start the job',
    body: 'You onboard with the employer and get to work, with our support along the way.',
  },
];

export default function ForCandidatesPage() {
  return (
    <>
      <PageHero
        eyebrow="For Candidates"
        title="Looking for a job? Apply in a few minutes."
        description="If you have skills in industrial, healthcare, skilled trades, or logistics, we connect you to serious employers, help with certifications, and coordinate visa pathways through licensed attorneys when needed."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'For Candidates' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact?intent=apply"
            className="group inline-flex items-center gap-2 bg-white text-[var(--color-navy-900)] text-[14px] font-semibold px-5 py-3 rounded-md hover:bg-[var(--color-accent-100)] transition-all duration-300"
          >
            Apply for a job
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/visa-pathways"
            className="inline-flex items-center gap-2 border border-white/15 text-white text-[14px] font-semibold px-5 py-3 rounded-md hover:bg-white/[0.05] hover:border-white/25 transition-all duration-300"
          >
            Visa pathways
          </Link>
        </div>
      </PageHero>

      <Section tone="white">
        <Container className="py-16 sm:py-20 lg:py-28">
          <SectionHeader
            eyebrow="Why candidates pick us"
            title="A simple, clear path to your next job."
            description="Most platforms talk in vague terms. We tell you exactly what we do, what we do not, and what to expect."
          />
          <StaggerGroup className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PILLARS.map((p) => (
              <StaggerItem key={p.title}>
                <article className="h-full p-5 sm:p-6 rounded-xl border border-[var(--color-ink-200)] bg-white hover:shadow-card hover:border-[var(--color-blue-200)] transition-all duration-500 ease-out hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-md bg-[var(--color-ink-50)] border border-[var(--color-ink-200)] grid place-items-center text-[var(--color-accent-600)]">
                    {p.icon}
                  </div>
                  <h3 className="mt-4 sm:mt-5 text-[16.5px] sm:text-[17px] font-semibold text-[var(--color-ink-900)]">{p.title}</h3>
                  <p className="mt-2.5 text-[13.5px] sm:text-[14px] leading-relaxed text-[var(--color-ink-600)]">{p.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <Section tone="soft">
        <Container className="py-16 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Your Journey"
                title="Five simple steps from hello to your first day."
              />
              <Reveal delay={0.1}>
                <div className="mt-6 sm:mt-8 relative aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--color-ink-200)]">
                  <Image
                    src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=1200&q=80"
                    alt="Candidate consultation"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <StaggerGroup className="space-y-3.5">
                {STEPS.map((s) => (
                  <StaggerItem key={s.n}>
                    <article className="p-5 sm:p-6 rounded-xl border border-[var(--color-ink-200)] bg-white">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--color-accent-600)]">Step {s.n}</span>
                      </div>
                      <h3 className="mt-3 text-[16.5px] sm:text-[17px] font-semibold text-[var(--color-ink-900)]">{s.title}</h3>
                      <p className="mt-2 text-[13.5px] sm:text-[14px] leading-relaxed text-[var(--color-ink-600)]">{s.body}</p>
                    </article>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="py-16 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Apply now"
                title="Send your application."
                description="Tell us about your skills, certifications, and target roles. If you are exploring visa pathways, mention it in the message field."
              />
              <Reveal delay={0.1}>
                <div className="mt-6 sm:mt-8 rounded-xl border border-[var(--color-ink-200)] bg-[var(--color-ink-50)] p-5">
                  <p className="text-[13.5px] leading-relaxed text-[var(--color-ink-700)]">
                    INDUSTRITAS does not provide immigration legal advice. If your application
                    involves a visa pathway, we connect you with a U.S.-licensed immigration attorney
                    who handles every legal part of your case.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <LeadForm defaultIntent="apply" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
