import { Zap, ShieldCheck, Globe, Layers } from 'lucide-react';
import Image from 'next/image';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { StaggerGroup, StaggerItem, Reveal } from '@/components/site/Reveal';

const ITEMS = [
  {
    icon: <Zap size={18} />,
    title: '48-Hour Deployment',
    description: 'From request to placement in under 48 hours, backed by pre-vetted talent pools.',
  },
  {
    icon: <ShieldCheck size={18} />,
    title: 'Compliance-First',
    description: 'Every worker pre-vetted, certified, and deployment-ready — before day one.',
  },
  {
    icon: <Globe size={18} />,
    title: 'Global Talent Access',
    description: 'International pipeline via attorney-coordinated immigration pathways.',
  },
  {
    icon: <Layers size={18} />,
    title: 'Multi-Industry Coverage',
    description: 'Industrial, Healthcare, Skilled Trades, and Logistics — one platform.',
  },
];

export function Differentiators() {
  return (
    <Section tone="navy" className="overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.05] bg-grid-soft" />
      <Container className="relative py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Differentiators"
              title="Built for enterprise scale."
              description="Bold, structural advantages that make INDUSTRITAS difficult to replicate — and impossible to match with a traditional staffing agency."
              tone="dark"
            />
            <Reveal delay={0.1}>
              <div className="mt-8 relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
                  alt="Industrial workforce in operations"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-950)]/60 to-transparent" />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {ITEMS.map((it) => (
                <StaggerItem key={it.title}>
                  <div className="h-full p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-white/15 transition-all duration-500 ease-out hover:-translate-y-1">
                    <div className="w-10 h-10 rounded-md bg-white/[0.05] border border-white/10 grid place-items-center text-[var(--color-accent-300)]">
                      {it.icon}
                    </div>
                    <h3 className="mt-5 text-[17px] font-semibold text-white">{it.title}</h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-white/65">{it.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </Container>
    </Section>
  );
}
