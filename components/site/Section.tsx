import { type ReactNode } from 'react';

type Tone = 'white' | 'soft' | 'navy' | 'paper';

const TONES: Record<Tone, string> = {
  white: 'bg-white text-[var(--color-ink-900)]',
  soft: 'bg-[var(--color-ink-50)] text-[var(--color-ink-900)]',
  paper: 'bg-[#fbfaf7] text-[var(--color-ink-900)]',
  navy: 'bg-[var(--color-navy-950)] text-white',
};

export function Section({
  children,
  tone = 'white',
  className = '',
  id,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative ${TONES[tone]} ${className}`}>
      {children}
    </section>
  );
}

export function Container({
  children,
  className = '',
  size = 'default',
}: {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}) {
  const w =
    size === 'narrow' ? 'max-w-4xl' : size === 'wide' ? 'max-w-[88rem]' : 'max-w-7xl';
  return <div className={`mx-auto ${w} px-5 lg:px-8 ${className}`}>{children}</div>;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  className = '',
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
}) {
  const isDark = tone === 'dark';
  return (
    <div
      className={`${align === 'center' ? 'text-center mx-auto' : ''} max-w-3xl ${
        align === 'center' ? '' : ''
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase ${
            isDark ? 'text-[var(--color-accent-300)]' : 'text-[var(--color-accent-600)]'
          }`}
        >
          <span aria-hidden className={`w-6 h-px ${isDark ? 'bg-[var(--color-accent-300)]/60' : 'bg-[var(--color-accent-500)]/60'}`} />
          {eyebrow}
        </div>
      )}
      <h2
        className={`headline mt-4 text-[28px] sm:text-[34px] lg:text-[42px] leading-[1.08] font-semibold ${
          isDark ? 'text-white' : 'text-[var(--color-ink-900)]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[15.5px] sm:text-[16.5px] leading-relaxed ${
            isDark ? 'text-white/70' : 'text-[var(--color-ink-600)]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
