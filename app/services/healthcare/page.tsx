import type { Metadata } from 'next';
import { ServicePage } from '@/components/services/ServicePage';

export const metadata: Metadata = {
  title: 'Healthcare Staffing',
  description:
    'Credentialed nurses, allied health, and support staff. Multi-state licensure verification and full compliance documentation included.',
};

export default function HealthcarePage() {
  return (
    <ServicePage
      serviceKey="healthcare"
      heroImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
