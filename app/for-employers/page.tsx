import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, ShieldCheck, Users, Layers, Globe, ClipboardCheck } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';
import { LeadForm } from '@/components/site/LeadForm';

export const metadata: Metadata = {
  title: 'For Employers',
  description:
    'Speed, compliance, and risk reduction at scale. Replace fragmented vendors with a single workforce infrastructure platform.',
};

const VALUE = [
  {
    icon: <Zap size={18} />,
    title: '48-hour deployment',
    description: 'Pre-vetted talent pools and streamlined coordination compress placement timelines.',
  },
  {
    icon: <ClipboardCheck size={18} />,
    title: 'Pre-vetted, certified talent',
    description: 'Every worker arrives with documentation complete and credentials verified.',
  },
  {
    icon: <ShieldCheck size={18} />,
    title: 'Reduced liability',
    description: 'Compliance-first architecture lowers regulatory and operational risk on every placement.',
  },
  {
    icon: <Users size={18} />,
    title: 'Scalable across industries',
    description: 'Industrial, Healthcare, Skilled Trades, and Logistics — one platform.',
  },
  {
    icon: <Layers size={18} />,
    title: 'Single-vendor integration',
    description: 'Replace 3–5 fragmented vendors with one accountable platform partner.',
  },
  {
    icon: <Globe size={18} />,
    title: 'Global talent coordination',
    description: 'Attorney-coordinated visa pathways for international workforce needs.',
  },
];

export default function ForEmployersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Employers"
        title="Speed, compliance, and risk reduction — at enterprise scale."
        description="Stop juggling staffing agencies, certification vendors, compliance partners, and immigration counsel. INDUSTRITAS replaces the fragmented stack with one platform built for enterprise workforce delivery."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'For Employers' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact?intent=workforce"
            className="group inline-flex items-center gap-2 bg-white text-[var(--color-navy-900)] text-[14px] font-semibold px-5 py-3 rounded-md hover:bg-[var(--color-accent-100)] transition-all duration-300"
          >
            Request Workforce
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/why-us"
            className="inline-flex items-center gap-2 border border-white/15 text-white text-[14px] font-semibold px-5 py-3 rounded-md hover:bg-white/[0.05] hover:border-white/25 transition-all duration-300"
          >
            Why us
          </Link>
        </div>
      </PageHero>

      <Section tone="white">
        <Container className="py-20 lg:py-28">
          <SectionHeader
            eyebrow="Employer Value"
            title="The metrics enterprise workforce teams actually optimize for."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VALUE.map((v) => (
              <StaggerItem key={v.title}>
                <article className="h-full p-6 rounded-xl border border-[var(--color-ink-200)] bg-white hover:shadow-card transition-all duration-500 ease-out hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-md bg-[var(--color-navy-900)] grid place-items-center text-white">
                    {v.icon}
                  </div>
                  <h3 className="mt-5 text-[17px] font-semibold text-[var(--color-ink-900)]">{v.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-[var(--color-ink-600)]">{v.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <Section tone="soft">
        <Container className="py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <SectionHeader
                eyebrow="Who we work with"
                title="Built for enterprise operators in regulated industries."
                description="Workforce, operations, HR, and compliance leaders responsible for high-stakes placements where speed and documentation both matter."
              />
              <Reveal delay={0.1}>
                <ul className="mt-8 space-y-3">
                  {[
                    'Operations and plant leadership in heavy industry',
                    'Workforce planning teams managing multi-site mobilization',
                    'Healthcare HR navigating multi-state credentialing',
                    'Construction and trades GCs running shutdowns and turnarounds',
                    'Logistics leaders scaling distribution and freight operations',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 text-[14.5px] text-[var(--color-ink-700)]">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-500)] flex-none" />
                      {line}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal direction="left">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--color-ink-200)] shadow-card">
                  <Image
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
                    alt="Enterprise operations team"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Request Workforce"
                title="Tell us what you need."
                description="A coordination team member will respond within 5–10 minutes during business hours."
              />
              <Reveal delay={0.1}>
                <div className="mt-8 rounded-xl border border-[var(--color-ink-200)] bg-[var(--color-ink-50)] p-5">
                  <p className="text-[13.5px] leading-relaxed text-[var(--color-ink-700)]">
                    Need to discuss complex multi-site mobilization, visa-track placements, or specific
                    credentialing requirements? Note it in the message field — we’ll route to the right
                    coordinator.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <LeadForm defaultIntent="workforce" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
