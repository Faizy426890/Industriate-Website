import type { Metadata } from 'next';
import { Globe, Scale, FileCheck2, ArrowRight, Info } from 'lucide-react';
import Link from 'next/link';
import { PageHero } from '@/components/site/PageHero';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';
import { CTASection } from '@/components/site/CTASection';

export const metadata: Metadata = {
  title: 'Visa Pathways · EB-2 NIW, EB-3, TN, EB-5',
  description:
    'INDUSTRITAS coordinates employment-based visa pathways with U.S.-licensed immigration attorneys. We facilitate; counsel handles all legal work.',
};

const PATHWAYS = [
  {
    code: 'EB-2 NIW',
    title: 'National Interest Waiver',
    description:
      'For professionals with advanced degrees or exceptional ability whose work benefits the U.S. national interest. INDUSTRITAS facilitates the coordination between candidate and attorney.',
  },
  {
    code: 'EB-3',
    title: 'Skilled Workers & Professionals',
    description:
      'For skilled workers, professionals, and other workers. INDUSTRITAS supports the process coordination while attorneys manage all legal filings.',
  },
  {
    code: 'TN',
    title: 'NAFTA / USMCA Professional',
    description:
      'For Canadian and Mexican citizens in qualifying professional occupations. We coordinate documentation and employer-attorney communication.',
  },
  {
    code: 'EB-5',
    title: 'Immigrant Investor Program',
    description:
      'For investors seeking permanent residency through qualifying capital investment. We facilitate access to qualified attorneys and assist with process coordination in a non-legal capacity.',
  },
];

const SAY_DO = [
  { allowed: true, value: 'We connect…' },
  { allowed: true, value: 'We coordinate…' },
  { allowed: true, value: 'We facilitate…' },
  { allowed: true, value: 'We support the process…' },
  { allowed: true, value: 'We assist with coordination…' },
  { allowed: false, value: 'We file petitions' },
  { allowed: false, value: 'Our experts handle your case' },
  { allowed: false, value: 'We provide immigration advice' },
  { allowed: false, value: 'We handle your immigration' },
  { allowed: false, value: 'We manage your case' },
];

export default function VisaPathwaysPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Talent, Visa Pathways"
        title="Attorney-coordinated immigration support for employers and skilled professionals."
        description="We connect employers and skilled professionals with trusted, U.S.-licensed immigration attorneys to support employment-based visa pathways in a structured and compliant manner. All legal strategy and petition handling are carried out exclusively by licensed counsel."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Visa Pathways' }]}
      />

      <Section tone="white">
        <Container className="py-20 lg:py-28">
          <SectionHeader
            eyebrow="Pathways We Coordinate"
            title="Four employment-based pathways. One coordination layer."
            description="Each pathway has unique documentation, timeline, and procedural requirements. INDUSTRITAS keeps everything aligned between candidate, employer, and attorney."
          />

          <StaggerGroup className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            {PATHWAYS.map((p) => (
              <StaggerItem key={p.code}>
                <article className="group h-full p-7 rounded-xl border border-[var(--color-ink-200)] bg-white hover:shadow-card transition-all duration-500 ease-out hover:-translate-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-600)] bg-[var(--color-accent-50)] border border-[var(--color-accent-200)] px-3 py-1.5 rounded-full">
                      {p.code}
                    </span>
                    <FileCheck2 size={16} className="text-[var(--color-ink-400)] group-hover:text-[var(--color-ink-700)] transition-colors" />
                  </div>
                  <h3 className="mt-5 text-[20px] font-semibold text-[var(--color-ink-900)]">{p.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--color-ink-600)]">{p.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.1}>
            <div className="mt-12 rounded-2xl border border-[var(--color-ink-200)] bg-[var(--color-ink-50)] p-6 lg:p-7 flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-none w-10 h-10 rounded-md bg-white border border-[var(--color-ink-200)] grid place-items-center text-[var(--color-accent-600)]">
                <Info size={16} />
              </div>
              <p className="text-[14.5px] leading-relaxed text-[var(--color-ink-700)]">
                <span className="font-semibold text-[var(--color-ink-900)]">Our role across all visa pathways:</span>{' '}
                We help streamline coordination between all parties, ensuring documentation and procedural
                requirements are managed efficiently. All legal filings, strategies, and case decisions are handled
                exclusively by qualified immigration counsel.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="soft">
        <Container className="py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Approved Verbiage"
                title="The language that defines our role."
                description="Wording that keeps our role clear: we coordinate. We are not a legal services provider. Used across every immigration conversation."
              />
              <Reveal delay={0.1}>
                <div className="mt-8 rounded-xl border border-[var(--color-ink-200)] bg-white p-6">
                  <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-600)]">
                    <Scale size={13} /> Coordination, not counsel
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-ink-700)]">
                    Legal strategy and petition handling are carried out exclusively by licensed immigration
                    attorneys. INDUSTRITAS assists with administrative coordination, document preparation
                    support, and general process guidance.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SAY_DO.map((row) => (
                  <StaggerItem key={row.value}>
                    <div
                      className={`h-full p-5 rounded-lg border ${
                        row.allowed
                          ? 'border-emerald-200 bg-emerald-50/50'
                          : 'border-[var(--color-ink-200)] bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-grid place-items-center w-6 h-6 rounded-full ${
                            row.allowed ? 'bg-emerald-100 text-emerald-700' : 'bg-[var(--color-ink-100)] text-[var(--color-ink-500)]'
                          }`}
                        >
                          {row.allowed ? <span className="text-[11px] font-bold">✓</span> : <span className="text-[11px] font-bold">×</span>}
                        </span>
                        <span className="text-[10.5px] font-semibold tracking-[0.16em] uppercase">
                          {row.allowed ? (
                            <span className="text-emerald-700">Always say</span>
                          ) : (
                            <span className="text-[var(--color-ink-500)]">Never say</span>
                          )}
                        </span>
                      </div>
                      <p
                        className={`mt-2.5 text-[14px] font-medium ${
                          row.allowed ? 'text-emerald-900' : 'text-[var(--color-ink-700)] line-through decoration-[var(--color-ink-300)]'
                        }`}
                      >
                        {row.value}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="py-20 lg:py-28">
          <Reveal>
            <div className="rounded-2xl border border-[var(--color-ink-200)] bg-[var(--color-ink-50)] p-8 lg:p-10">
              <div className="flex items-start gap-4">
                <div className="flex-none w-11 h-11 rounded-md bg-white border border-[var(--color-ink-200)] grid place-items-center text-[var(--color-accent-600)]">
                  <Globe size={18} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[22px] sm:text-[26px] font-semibold text-[var(--color-ink-900)] headline">
                    Ready to coordinate a visa-track placement?
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--color-ink-600)] max-w-2xl">
                    Tell us about the candidate, the role, and the target pathway. We connect
                    employer, candidate, and licensed counsel, and keep paperwork and timelines on track.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/contact?intent=workforce"
                      className="group inline-flex items-center gap-2 bg-[var(--color-navy-900)] text-white text-[14px] font-semibold px-5 py-3 rounded-md hover:bg-[var(--color-navy-700)] transition-colors"
                    >
                      Coordinate Visa Pathway
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                    <Link
                      href="/services/immigration"
                      className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--color-ink-800)] hover:text-[var(--color-ink-900)] px-2 py-3 transition-colors"
                    >
                      Immigration coordination details <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
