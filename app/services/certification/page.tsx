import type { Metadata } from 'next';
import { ClipboardCheck, ShieldCheck, FileCheck2, Stethoscope, Wrench, Lock } from 'lucide-react';
import { ServicePage } from '@/components/services/ServicePage';

export const metadata: Metadata = {
  title: 'Certification & Compliance',
  description:
    'Pre-vetted, certified, and deployment-ready talent. Compliance-first architecture that reduces employer liability on every placement.',
};

export default function CertificationPage() {
  return (
    <ServicePage
      eyebrow="Services, Certification & Compliance"
      pageName="Certification & Compliance"
      title="Compliance built into placement, not bolted on after."
      description="Every worker is pre-vetted, certified, and deployment-ready. INDUSTRITAS reduces employer liability through built-in compliance architecture, not optional add-ons."
      heroImage="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80"
      intro={
        <>
          <p>
            Certification and compliance are not separate purchases on the INDUSTRITAS platform. They are
            built into every placement. Paperwork is gathered, verified, and stored before a worker is
            offered a role.
          </p>
          <p>
            For employers, this means audit-ready records, lower liability exposure, and zero day-one surprises.
            For candidates, it means a transparent process that translates directly into faster placement.
          </p>
        </>
      }
      capabilities={[
        {
          icon: <ClipboardCheck size={18} />,
          title: 'Trade & Licensure Verification',
          description:
            'Verification of trade certifications, professional licenses, and renewal status across jurisdictions.',
        },
        {
          icon: <Stethoscope size={18} />,
          title: 'Medical & Drug Screening',
          description:
            'Industry-aligned medical clearances, drug screening, and immunization records management.',
        },
        {
          icon: <ShieldCheck size={18} />,
          title: 'Background Checks',
          description:
            'Right-to-work, criminal, employment, and education verification, adapted to industry needs.',
        },
        {
          icon: <Lock size={18} />,
          title: 'TWIC & Security Credentials',
          description:
            'Coordination of TWIC and other security credentials for high-security industrial environments.',
        },
        {
          icon: <Wrench size={18} />,
          title: 'OSHA & Safety Records',
          description:
            'Safety training documentation aligned to OSHA and site-specific environmental requirements.',
        },
        {
          icon: <FileCheck2 size={18} />,
          title: 'Audit-Ready Documentation',
          description:
            'Centralized, retrievable, audit-ready records for every placement on the platform.',
        },
      ]}
      outcomes={[
        'Liability reduced through structural compliance',
        'Day-one deployment without document chasing',
        'Audit-ready records for every placement',
        'Industry-specific credentialing handled in-house',
        'Lower turnover from clearer documentation',
        'Zero gap between sourcing and compliance',
      ]}
    />
  );
}
