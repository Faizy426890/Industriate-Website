import type { Metadata } from 'next';
import { ServicePage } from '@/components/services/ServicePage';

export const metadata: Metadata = {
  title: 'Certification & Compliance',
  description:
    'Pre-vetted, certified, and deployment-ready talent. Compliance-first architecture that reduces employer liability on every placement.',
};

export default function CertificationPage() {
  return (
    <ServicePage
      serviceKey="certification"
      heroImage="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
