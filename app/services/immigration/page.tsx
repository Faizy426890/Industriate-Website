import type { Metadata } from 'next';
import { ServicePage } from '@/components/services/ServicePage';

export const metadata: Metadata = {
  title: 'Immigration Coordination',
  description:
    'Attorney-coordinated visa pathways. INDUSTRITAS facilitates communication and documentation; licensed counsel handles all legal work.',
};

export default function ImmigrationPage() {
  return (
    <ServicePage
      serviceKey="immigration"
      heroImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
