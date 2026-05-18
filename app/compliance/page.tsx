import type { Metadata } from 'next';
import { ComplianceContent } from './ComplianceContent';

export const metadata: Metadata = {
  title: 'Compliance & Disclaimer',
  description:
    'Legal & service disclaimer. INDUSTRITAS is not a law firm and does not provide legal advice. Immigration filings are handled exclusively by U.S.-licensed attorneys.',
};

export default function CompliancePage() {
  return <ComplianceContent />;
}
