import { Quote } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { StaggerGroup, StaggerItem } from '@/components/site/Reveal';

const QUOTES = [
  {
    quote:
      'INDUSTRITAS replaced four vendors with one platform. Compliance documentation that used to take weeks now arrives the day before deployment.',
    name: 'VP of Operations',
    role: 'Gulf Coast Refinery Operator',
  },
  {
    quote:
      'The 48-hour deployment promise is real. We staffed a planned turnaround on short notice with TWIC-certified crews — no surprises, no compliance gaps.',
    name: 'Director, Workforce Planning',
    role: 'Industrial Construction',
  },
  {
    quote:
      'Their immigration coordination is the best operational layer we’ve worked with. Counsel handles all legal work; INDUSTRITAS keeps everything on schedule.',
    name: 'Chief People Officer',
    role: 'Multi-State Healthcare System',
  },
];

export function Testimonials() {
  return (
    <Section tone="white">
      <Container className="py-20 lg:py-28">
        <SectionHeader
          eyebrow="Operator Voices"
          title="Trusted by enterprise operators across regulated industries."
          description="What clients say after replacing fragmented vendor stacks with a single workforce infrastructure platform."
          align="center"
          className="!mx-auto !text-center"
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {QUOTES.map((q, i) => (
            <StaggerItem key={i}>
              <article className="h-full flex flex-col p-7 rounded-xl border border-[var(--color-ink-200)] bg-white hover:shadow-card transition-all duration-500 ease-out hover:-translate-y-0.5">
                <Quote size={22} className="text-[var(--color-accent-500)]" />
                <blockquote className="mt-5 text-[15px] leading-relaxed text-[var(--color-ink-800)]">
                  “{q.quote}”
                </blockquote>
                <div className="mt-7 pt-5 border-t border-[var(--color-ink-100)]">
                  <div className="text-[13.5px] font-semibold text-[var(--color-ink-900)]">{q.name}</div>
                  <div className="text-[12.5px] text-[var(--color-ink-500)]">{q.role}</div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
