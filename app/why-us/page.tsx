import type { Metadata } from 'next';
import { WhyUsContent } from './WhyUsContent';

export const metadata: Metadata = {
  title: 'Why Us · The 5 Competitive Moats',
  description:
    'Why INDUSTRITAS is hard to copy. Five real advantages built into the platform model.',
};

export default function WhyUsPage() {
  return <WhyUsContent />;
}
