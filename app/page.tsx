import { Hero } from '@/components/home/Hero';
import { LogoCloud } from '@/components/home/LogoCloud';
import { Differentiators } from '@/components/home/Differentiators';
import { Problem } from '@/components/home/Problem';
import { Solution } from '@/components/home/Solution';
import { IndustriesPreview } from '@/components/home/IndustriesPreview';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Audiences } from '@/components/home/Audiences';
import { Testimonials } from '@/components/home/Testimonials';
import { CTASection } from '@/components/site/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Differentiators />
      <Problem />
      <Solution />
      <IndustriesPreview />
      <HowItWorks />
      <Audiences />
      <Testimonials />
      <CTASection />
    </>
  );
}
