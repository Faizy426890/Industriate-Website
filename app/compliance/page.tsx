import type { Metadata } from 'next';
import { Scale, FileText, Lock, ShieldCheck, AlertOctagon, Building2 } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { Container, Section } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';
import { CTASection } from '@/components/site/CTASection';

export const metadata: Metadata = {
  title: 'Compliance & Disclaimer',
  description:
    'Legal & service disclaimer. INDUSTRITAS is not a law firm and does not provide legal advice. Immigration filings are handled exclusively by U.S.-licensed attorneys.',
};

const PRINCIPLES = [
  {
    icon: <Building2 size={18} />,
    title: 'Not a Law Firm',
    description: 'INDUSTRITAS does not provide legal advice or legal services of any kind.',
  },
  {
    icon: <Scale size={18} />,
    title: 'Attorneys Handle Legal Work',
    description:
      'All immigration matters are handled exclusively by independent, U.S.-licensed immigration attorneys.',
  },
  {
    icon: <ShieldCheck size={18} />,
    title: 'Coordination Only',
    description:
      'Our role is limited to staffing services and non-legal administrative coordination support.',
  },
  {
    icon: <FileText size={18} />,
    title: 'User Acknowledgment',
    description:
      'By using our services, users acknowledge that all legal advice is provided solely by licensed professionals.',
  },
];

export default function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance & Disclaimer"
        title="Legal & service disclaimer."
        description="This dedicated page is referenced from the footer of every page on the website. The language below protects INDUSTRITAS legally while maintaining credibility with both employer and candidate audiences."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Compliance & Disclaimer' }]}
      />

      <Section tone="white">
        <Container className="py-20 lg:py-28" size="narrow">
          <Reveal>
            <div className="rounded-2xl border-l-4 border-[var(--color-accent-500)] bg-[var(--color-ink-50)] p-6 lg:p-7 flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-none w-10 h-10 rounded-md bg-white border border-[var(--color-ink-200)] grid place-items-center text-[var(--color-accent-600)]">
                <AlertOctagon size={16} />
              </div>
              <div>
                <h3 className="text-[15.5px] font-semibold text-[var(--color-ink-900)]">Legal & Service Disclaimer</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-ink-700)]">
                  This section appears as a standalone page and is referenced in the footer of every page on
                  the website.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-10 space-y-6 text-[15.5px] leading-relaxed text-[var(--color-ink-700)]">
              <p className="border-l-4 border-[var(--color-accent-400)] pl-5 italic text-[var(--color-ink-800)]">
                We are not a law firm and do not provide legal advice or legal services. Any
                immigration-related matters are handled exclusively by independent, U.S.-licensed
                immigration attorneys, either through partnered immigration law firms or separately
                engaged counsel. Our role is limited to staffing services and non-legal administrative
                coordination support.
              </p>
              <p>
                Where immigration support is required, INDUSTRITAS facilitates access to qualified
                attorneys and assists with process coordination in a non-legal capacity. By using our
                services, you acknowledge that all legal advice and immigration filings are provided
                solely by licensed legal professionals engaged for that purpose.
              </p>
            </div>
          </Reveal>

          <StaggerGroup className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PRINCIPLES.map((p) => (
              <StaggerItem key={p.title}>
                <article className="h-full p-6 rounded-xl border border-[var(--color-ink-200)] bg-white">
                  <div className="w-10 h-10 rounded-md bg-[var(--color-ink-50)] border border-[var(--color-ink-200)] grid place-items-center text-[var(--color-accent-600)]">
                    {p.icon}
                  </div>
                  <h3 className="mt-5 text-[17px] font-semibold text-[var(--color-ink-900)]">{p.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-[var(--color-ink-600)]">{p.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <Section tone="soft" id="privacy">
        <Container size="narrow" className="py-20 lg:py-28">
          <Reveal>
            <h2 className="headline text-[26px] sm:text-[32px] font-semibold text-[var(--color-ink-900)]">
              Privacy
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[var(--color-ink-700)]">
              <p>
                INDUSTRITAS collects only the information necessary to coordinate placements and
                administrative processes between employers, candidates, and licensed counsel. We do not
                sell personal information.
              </p>
              <p>
                Sensitive documentation related to immigration matters is shared exclusively with the
                licensed attorneys engaged for that case. Candidates and employers retain control over
                what information is shared and with whom.
              </p>
              <p>
                For specific privacy inquiries or data requests, contact us through the official channels
                listed on the contact page.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="white" id="terms">
        <Container size="narrow" className="py-20 lg:py-28">
          <Reveal>
            <h2 className="headline text-[26px] sm:text-[32px] font-semibold text-[var(--color-ink-900)]">
              Terms of Service
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[var(--color-ink-700)]">
              <p>
                Use of the INDUSTRITAS platform is subject to engagement terms agreed between the parties.
                Coordination services are non-legal in nature, and any legal services are provided by
                independently engaged U.S.-licensed counsel.
              </p>
              <p>
                Candidates and employers are responsible for the accuracy of information provided through
                the platform. Coordination outcomes depend on independently verified credentials and
                attorney-led legal decisions.
              </p>
              <div className="flex items-start gap-3 mt-6 p-5 rounded-lg bg-[var(--color-ink-50)] border border-[var(--color-ink-200)]">
                <Lock size={16} className="mt-0.5 text-[var(--color-accent-600)] flex-none" />
                <p className="text-[13.5px] text-[var(--color-ink-700)]">
                  This page contains general information and is not intended as legal advice. For legal
                  advice, consult a licensed attorney.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
