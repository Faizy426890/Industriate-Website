import Link from 'next/link';
import { ArrowRight, Clock3 } from 'lucide-react';
import { Container, Section } from './Section';
import { Reveal } from './Reveal';

export function CTASection({
  eyebrow = 'Ready when you are',
  title = 'Build your workforce faster, safer, and smarter.',
  description = 'From sourcing to compliance to global talent coordination — all in one platform. We respond within 5–10 minutes.',
  primary = { label: 'Request Workforce', href: '/contact?intent=workforce' },
  secondary = { label: 'Apply as Candidate', href: '/contact?intent=apply' },
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <Section tone="navy" className="overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.06] bg-grid-soft" />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full"
        style={{
          background:
            'radial-gradient(circle at center, rgba(196,151,89,0.18) 0%, rgba(196,151,89,0) 60%)',
        }}
      />
      <Container className="relative py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-300)]">
                <span aria-hidden className="w-7 h-px bg-[var(--color-accent-300)]/60" />
                {eyebrow}
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="headline mt-4 text-[30px] sm:text-[40px] lg:text-[48px] leading-[1.06] font-semibold text-white">
                {title}
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-[16px] sm:text-[17px] leading-relaxed text-white/70 max-w-xl">
                {description}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal direction="left" delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 lg:p-7">
                <div className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--color-accent-300)]">
                  <Clock3 size={13} />
                  Response Promise
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-white/80">
                  We respond to inbound workforce requests within{' '}
                  <span className="text-white font-semibold">5–10 minutes</span> during business hours.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-2.5">
                  <Link
                    href={primary.href}
                    className="group inline-flex items-center justify-between gap-3 bg-white text-[var(--color-navy-900)] text-[14.5px] font-semibold px-5 py-3.5 rounded-md hover:bg-[var(--color-accent-100)] transition-all duration-400"
                  >
                    {primary.label}
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href={secondary.href}
                    className="group inline-flex items-center justify-between gap-3 border border-white/15 text-white text-[14.5px] font-semibold px-5 py-3.5 rounded-md hover:bg-white/[0.05] hover:border-white/25 transition-all duration-400"
                  >
                    {secondary.label}
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
