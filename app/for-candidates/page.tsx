import type { Metadata } from 'next';
import { ForCandidatesContent } from './ForCandidatesContent';

export const metadata: Metadata = {
  title: 'For Candidates',
  description:
    'Apply to real jobs in healthcare, industrial, skilled trades, and logistics. Visa support available for international candidates.',
};

export default function ForCandidatesPage() {
  return <ForCandidatesContent />;
}
