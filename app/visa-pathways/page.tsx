import type { Metadata } from 'next';
import { VisaPathwaysContent } from './VisaPathwaysContent';

export const metadata: Metadata = {
  title: 'Visa Pathways · EB-2 NIW, EB-3, TN, EB-5',
  description:
    'INDUSTRITAS coordinates employment-based visa pathways with U.S.-licensed immigration attorneys. We facilitate; counsel handles all legal work.',
};

export default function VisaPathwaysPage() {
  return <VisaPathwaysContent />;
}
