import type { Metadata } from 'next';
import { IndustriesContent } from './IndustriesContent';

export const metadata: Metadata = {
  title: 'Industries Served',
  description:
    'INDUSTRITAS deploys workforce solutions across Industrial, Healthcare, Skilled Trades, and Logistics, all from one platform.',
};

export default function IndustriesPage() {
  return <IndustriesContent />;
}
