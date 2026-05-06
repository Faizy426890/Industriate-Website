import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { StickyCTA } from '@/components/site/StickyCTA';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: 'INDUSTRITAS Staffing — A Workforce Infrastructure Platform',
    template: '%s · INDUSTRITAS Staffing',
  },
  description:
    'Not a staffing agency. A workforce infrastructure platform. Staffing, certification, compliance and immigration coordination — all in one platform.',
  keywords: [
    'workforce infrastructure',
    'staffing platform',
    'compliance staffing',
    'immigration coordination',
    'industrial staffing',
    'healthcare staffing',
    'TWIC certified workers',
    'EB-2 NIW',
    'EB-3',
    'TN visa',
  ],
  authors: [{ name: 'INDUSTRITAS Staffing, LLC' }],
  openGraph: {
    title: 'INDUSTRITAS Staffing — A Workforce Infrastructure Platform',
    description:
      'Staffing, certification, compliance and immigration coordination — all in one platform.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a1628',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-[var(--color-ink-900)] min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
