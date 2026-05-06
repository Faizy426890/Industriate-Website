import { Hero } from '@/components/home/Hero';
import { LogoCloud } from '@/components/home/LogoCloud';
import { Problem } from '@/components/home/Problem';
import { Solution } from '@/components/home/Solution';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Differentiators } from '@/components/home/Differentiators';
import { IndustriesPreview } from '@/components/home/IndustriesPreview';
import { Audiences } from '@/components/home/Audiences';
import { Testimonials } from '@/components/home/Testimonials';
import { CTASection } from '@/components/site/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Problem />
      <Solution />
      <HowItWorks />
      <Differentiators />
      <IndustriesPreview />
      <Audiences />
      <Testimonials />
      <CTASection />
    </>
  );
}
