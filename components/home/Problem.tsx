import { AlertTriangle, Layers, Clock3, Scale } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';

const PAIN_POINTS = [
  {
    icon: <Layers size={18} />,
    title: 'Fragmented vendor stack',
    description:
      'Hiring a single compliant worker often requires juggling 3–5 vendors — staffing, certification, background, immigration counsel.',
  },
  {
    icon: <Clock3 size={18} />,
    title: 'Slow time-to-deploy',
    description:
      'Manual coordination across stakeholders adds days or weeks to every placement, especially for credentialed and visa-track talent.',
  },
  {
    icon: <Scale size={18} />,
    title: 'Compliance liability',
    description:
      'Documentation gaps, lapsed certifications, and inconsistent vetting expose employers to regulatory and operational risk.',
  },
];

export function Problem() {
  return (
    <Section tone="white">
      <Container className="py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="The Problem"
              title="Hiring one compliant worker shouldn't require five vendors."
              description="Most enterprises stitch together fragmented providers for staffing, certification, background, and immigration. The result: delays, gaps, and risk exposure that scale with every hire."
            />
            <Reveal delay={0.1}>
              <div className="mt-8 inline-flex items-center gap-2 text-[12.5px] font-semibold text-[var(--color-accent-700)]">
                <AlertTriangle size={14} />
                Vendor fragmentation is the silent tax on workforce velocity.
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <StaggerGroup className="grid sm:grid-cols-1 gap-3.5">
              {PAIN_POINTS.map((p) => (
                <StaggerItem key={p.title} direction="up">
                  <article className="group p-6 rounded-xl border border-[var(--color-ink-200)] bg-white hover:border-[var(--color-ink-300)] hover:shadow-card transition-all duration-500 ease-out hover:-translate-y-0.5">
                    <div className="flex items-start gap-4">
                      <div className="flex-none w-10 h-10 rounded-md bg-[var(--color-ink-50)] border border-[var(--color-ink-200)] grid place-items-center text-[var(--color-ink-700)]">
                        {p.icon}
                      </div>
                      <div>
                        <h3 className="text-[16.5px] font-semibold text-[var(--color-ink-900)]">{p.title}</h3>
                        <p className="mt-1.5 text-[14px] leading-relaxed text-[var(--color-ink-600)]">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </Container>
    </Section>
  );
}
