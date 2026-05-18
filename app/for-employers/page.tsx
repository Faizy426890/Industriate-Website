import type { Metadata } from 'next';
import { ForEmployersContent } from './ForEmployersContent';

export const metadata: Metadata = {
  title: 'For Employers',
  description:
    'Need to hire? Reach out and we send qualified, compliant workers to your facility, often within 48 hours.',
};

export default function ForEmployersPage() {
  return <ForEmployersContent />;
}
