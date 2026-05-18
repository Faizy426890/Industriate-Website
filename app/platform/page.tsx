import type { Metadata } from 'next';
import { PlatformContent } from './PlatformContent';

export const metadata: Metadata = {
  title: 'Platform · How It Works',
  description:
    'INDUSTRITAS is a fully integrated workforce platform: staffing, certification, compliance, and immigration coordination, all in one place.',
};

export default function PlatformPage() {
  return <PlatformContent />;
}
