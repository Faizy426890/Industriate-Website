import { Reveal } from '@/components/site/Reveal';

const SECTORS = [
  'Heavy Manufacturing',
  'Refineries & Ports',
  'Acute Healthcare',
  'Skilled Trades',
  'Distribution & Logistics',
  'Industrial Construction',
];

export function LogoCloud() {
  return (
    <section className="bg-[var(--color-ink-50)] border-y border-[var(--color-ink-200)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[var(--color-ink-500)] text-center">
            Trusted across regulated, high-stakes workforce environments
          </p>
        </Reveal>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {SECTORS.map((s, i) => (
            <Reveal key={s} delay={i * 0.04}>
              <div className="text-[13.5px] font-semibold tracking-[0.04em] text-[var(--color-ink-600)] hover:text-[var(--color-ink-900)] transition-colors">
                {s}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
