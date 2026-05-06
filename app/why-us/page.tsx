import type { Metadata } from 'next';
import { ShieldCheck, Layers, Zap, Globe, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { PageHero } from '@/components/site/PageHero';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';
import { CTASection } from '@/components/site/CTASection';

export const metadata: Metadata = {
  title: 'Why Us — The 5 Competitive Moats',
  description:
    'Why INDUSTRITAS is structurally difficult to replicate — five defensible advantages built into the platform model.',
};

const MOATS = [
  {
    icon: <ShieldCheck size={18} />,
    badge: 'Sourcing',
    title: 'TWIC-Driven Talent Funnel',
    description:
      'Access to Transportation Worker Identification Credential holders creates a pre-qualified pipeline for high-security industrial environments — a rare and defensible sourcing advantage.',
  },
  {
    icon: <Layers size={18} />,
    badge: 'Integration',
    title: 'One-Stop Workforce Ecosystem',
    description:
      'Staffing, certification, compliance, and immigration coordination under one roof. No other provider offers this level of integration at scale.',
  },
  {
    icon: <CheckCircle2 size={18} />,
    badge: 'Risk',
    title: 'Compliance-First Model',
    description:
      'Built-in compliance architecture means every placement reduces employer liability rather than creating it. This is a structural risk-reduction tool, not just a service feature.',
  },
  {
    icon: <Zap size={18} />,
    badge: 'Speed',
    title: 'Speed-to-Lead System',
    description:
      '48-hour deployment capability backed by pre-vetted talent pools and streamlined coordination workflows. Speed is a moat when it’s systematic.',
  },
  {
    icon: <Building2 size={18} />,
    badge: 'Coverage',
    title: 'Multi-Industry Capability',
    description:
      'Industrial, Healthcare, Skilled Trades, and Logistics — diversified demand reduces concentration risk and expands total addressable market.',
  },
];

const COMPARE = [
  {
    label: 'Single integrated contract',
    legacy: false,
    industritas: true,
  },
  {
    label: 'Compliance bundled with placement',
    legacy: false,
    industritas: true,
  },
  {
    label: '48-hour deployment capability',
    legacy: false,
    industritas: true,
  },
  {
    label: 'Attorney-coordinated visa pathways',
    legacy: false,
    industritas: true,
  },
  {
    label: 'TWIC-credentialed industrial pipeline',
    legacy: false,
    industritas: true,
  },
  {
    label: 'Multi-industry coverage',
    legacy: false,
    industritas: true,
  },
];

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Us"
        title="Five competitive moats. One workforce platform."
        description="Why INDUSTRITAS is structurally difficult to replicate. These are not just features — they are defensible competitive advantages built into the operating model."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Why Us' }]}
      />

      <Section tone="white">
        <Container className="py-20 lg:py-28">
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MOATS.map((m, i) => (
              <StaggerItem key={m.title}>
                <article
                  className={`h-full p-7 rounded-xl border border-[var(--color-ink-200)] bg-white hover:shadow-card transition-all duration-500 ease-out hover:-translate-y-1 ${
                    i === 0 ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md bg-[var(--color-navy-900)] grid place-items-center text-white">
                        {m.icon}
                      </div>
                      <span className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-600)]">
                        {m.badge}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--color-ink-400)]">
                      Moat 0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-[20px] font-semibold text-[var(--color-ink-900)]">{m.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--color-ink-600)]">{m.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <Section tone="soft">
        <Container className="py-20 lg:py-28">
          <SectionHeader
            eyebrow="vs. Traditional Staffing Agencies"
            title="What replacing your fragmented vendor stack actually changes."
            description="Most agencies stop at sourcing. INDUSTRITAS owns the full workforce lifecycle — from intake to compliance to deployment to immigration coordination."
          />

          <Reveal delay={0.1}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--color-ink-200)] bg-white">
              <div className="grid grid-cols-3 bg-[var(--color-ink-50)] border-b border-[var(--color-ink-200)]">
                <div className="px-5 py-4 text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--color-ink-500)]">
                  Capability
                </div>
                <div className="px-5 py-4 text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--color-ink-500)] text-center">
                  Traditional Staffing
                </div>
                <div className="px-5 py-4 text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--color-accent-600)] text-center">
                  INDUSTRITAS
                </div>
              </div>
              {COMPARE.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-3 border-b border-[var(--color-ink-100)] last:border-b-0 hover:bg-[var(--color-ink-50)]/50 transition-colors"
                >
                  <div className="px-5 py-4 text-[14px] font-medium text-[var(--color-ink-900)]">{row.label}</div>
                  <div className="px-5 py-4 text-center">
                    {row.legacy ? <CheckIcon /> : <DashIcon />}
                  </div>
                  <div className="px-5 py-4 text-center">
                    {row.industritas ? <CheckIcon strong /> : <DashIcon />}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/contact?intent=workforce"
                className="group inline-flex items-center gap-2 bg-[var(--color-navy-900)] text-white text-[14px] font-semibold px-5 py-3 rounded-md hover:bg-[var(--color-navy-700)] transition-colors"
              >
                Request Workforce
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/process"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--color-ink-700)] hover:text-[var(--color-ink-900)] px-2 py-3 transition-colors"
              >
                See the full process <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}

function CheckIcon({ strong }: { strong?: boolean }) {
  return (
    <span
      className={`inline-grid place-items-center w-7 h-7 rounded-full ${
        strong
          ? 'bg-[var(--color-navy-900)] text-white'
          : 'bg-[var(--color-ink-100)] text-[var(--color-ink-700)]'
      }`}
    >
      <CheckCircle2 size={14} />
    </span>
  );
}

function DashIcon() {
  return (
    <span className="inline-grid place-items-center w-7 h-7 rounded-full bg-[var(--color-ink-100)] text-[var(--color-ink-400)]">
      <span className="block w-2.5 h-px bg-current" />
    </span>
  );
}
