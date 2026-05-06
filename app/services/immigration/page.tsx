import type { Metadata } from 'next';
import { Globe, FileCheck2, MessagesSquare, Calendar, Scale, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { ServicePage } from '@/components/services/ServicePage';

export const metadata: Metadata = {
  title: 'Immigration Coordination',
  description:
    'Attorney-coordinated visa pathways. INDUSTRITAS facilitates communication and documentation; licensed counsel handles all legal work.',
};

export default function ImmigrationPage() {
  return (
    <ServicePage
      eyebrow="Services · Immigration Coordination"
      pageName="Immigration Coordination"
      title="Coordination, not counsel — attorney-led visa pathway support."
      description="We connect employers and skilled professionals with trusted, U.S.-licensed immigration attorneys to support employment-based visa pathways in a structured and compliant manner."
      heroImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
      ctaLabel="Coordinate Visa Pathway"
      intro={
        <>
          <p>
            INDUSTRITAS facilitates the overall process by coordinating between candidates, employers, and
            legal counsel — ensuring timelines, documentation, and communication remain efficient and aligned.
          </p>
          <p>
            Legal strategy and petition handling are carried out exclusively by licensed immigration
            attorneys. We assist with administrative coordination, document preparation support, and
            general process guidance — strictly in a non-legal capacity.
          </p>
        </>
      }
      callout={
        <div className="rounded-xl border border-[var(--color-ink-200)] bg-[var(--color-ink-50)] p-5">
          <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--color-accent-600)]">
            <Scale size={13} /> Important
          </div>
          <p className="mt-2.5 text-[13.5px] leading-relaxed text-[var(--color-ink-700)]">
            INDUSTRITAS is not a law firm and does not provide legal advice or legal services. All
            immigration filings are handled exclusively by independent, U.S.-licensed immigration attorneys.{' '}
            <Link href="/compliance" className="underline underline-offset-4 hover:text-[var(--color-ink-900)]">
              Read full disclaimer
            </Link>
            .
          </p>
        </div>
      }
      capabilities={[
        {
          icon: <Globe size={18} />,
          title: 'Pathway Coordination',
          description:
            'EB-2 NIW, EB-3, TN, and EB-5 pathways. We coordinate between candidate, employer, and licensed counsel.',
        },
        {
          icon: <MessagesSquare size={18} />,
          title: 'Tri-Party Communication',
          description:
            'Single point of contact aligning candidate, employer, and attorney — without ever practicing law.',
        },
        {
          icon: <FileCheck2 size={18} />,
          title: 'Documentation Support',
          description:
            'We help organize, track, and route documentation supporting attorney-led filings.',
        },
        {
          icon: <Calendar size={18} />,
          title: 'Timeline Management',
          description:
            'Milestones, deadlines, and dependencies tracked transparently across all stakeholders.',
        },
        {
          icon: <ShieldCheck size={18} />,
          title: 'Compliant Process Guidance',
          description:
            'General process guidance only — never legal advice. Counsel handles every legal decision.',
        },
        {
          icon: <Scale size={18} />,
          title: 'Attorney Network Access',
          description:
            'Access to qualified, U.S.-licensed immigration attorneys for employment-based pathways.',
        },
      ]}
      outcomes={[
        'Aligned candidate, employer, and counsel from day one',
        'Faster, more predictable immigration timelines',
        'Lower documentation rework and missed deadlines',
        'Clear separation of legal vs. coordination responsibilities',
        'Audit-ready coordination records',
        'Scalable visa-track placements without internal legal lift',
      ]}
    />
  );
}
