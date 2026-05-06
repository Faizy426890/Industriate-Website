import type { Metadata } from 'next';
import { Stethoscope, HeartPulse, ClipboardCheck, ShieldCheck, Globe, Calendar } from 'lucide-react';
import { ServicePage } from '@/components/services/ServicePage';

export const metadata: Metadata = {
  title: 'Healthcare Staffing',
  description:
    'Credentialed nurses, allied health, and support staff. Multi-state licensure verification and full compliance documentation included.',
};

export default function HealthcarePage() {
  return (
    <ServicePage
      eyebrow="Services · Healthcare Staffing"
      pageName="Healthcare Staffing"
      title="Credentialed healthcare talent — placed with compliance documentation in hand."
      description="Credentialed nurses, allied health professionals, and support staff. Full compliance documentation and licensing verification included on every placement."
      heroImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80"
      ctaLabel="Request Healthcare Staffing"
      intro={
        <>
          <p>
            Healthcare staffing requires the same compliance-first architecture as industrial work — but
            with denser credentialing, multi-state licensure considerations, and tighter deployment windows.
          </p>
          <p>
            INDUSTRITAS handles the credentialing layer end-to-end: licenses, immunizations, background
            checks, and onboarding documentation are completed before placement. Visa-track placements are
            coordinated with U.S.-licensed immigration attorneys.
          </p>
        </>
      }
      capabilities={[
        {
          icon: <Stethoscope size={18} />,
          title: 'RNs, LPNs & Allied Health',
          description:
            'Registered nurses, licensed practical nurses, and allied health professionals across specialties.',
        },
        {
          icon: <HeartPulse size={18} />,
          title: 'Per Diem · Contract · Travel',
          description:
            'Flexible engagement models for short-term, long-term, and travel placements.',
        },
        {
          icon: <ClipboardCheck size={18} />,
          title: 'Multi-State Licensure',
          description:
            'Verification across compact and non-compact states — including endorsement coordination.',
        },
        {
          icon: <ShieldCheck size={18} />,
          title: 'Immunization & Medical',
          description:
            'Immunization records, fit-testing, drug screening, and medical clearances.',
        },
        {
          icon: <Globe size={18} />,
          title: 'International Pipelines',
          description:
            'Visa-track placements coordinated with attorneys via EB-2, EB-3, and TN pathways where applicable.',
        },
        {
          icon: <Calendar size={18} />,
          title: 'Coverage & Continuity',
          description:
            'Shift coverage, continuity planning, and replacement workflows built into the platform.',
        },
      ]}
      outcomes={[
        'Faster credentialing-to-placement timelines',
        'Reduced compliance lift for hospital HR teams',
        'Multi-state licensure verified before placement',
        'Visa-track coordination handled end-to-end',
        'Continuity coverage for census surges',
        'Audit-ready credentialing records',
      ]}
    />
  );
}
