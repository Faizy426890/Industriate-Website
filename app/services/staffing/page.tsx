import type { Metadata } from 'next';
import { ServicePage } from '@/components/services/ServicePage';

export const metadata: Metadata = {
  title: 'Staffing Solutions',
  description:
    'Industrial workforce, skilled trades, healthcare staffing, and logistics. Pre-vetted, certified, ready to deploy.',
};

export default function StaffingPage() {
  return (
    <ServicePage
      serviceKey="staffing"
      heroImage="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
