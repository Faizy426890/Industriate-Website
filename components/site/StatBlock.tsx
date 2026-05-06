import { type ReactNode } from 'react';

export function StatBlock({
  value,
  label,
  description,
  tone = 'light',
}: {
  value: string;
  label: string;
  description?: string;
  tone?: 'light' | 'dark';
}) {
  const isDark = tone === 'dark';
  return (
    <div
      className={`p-6 rounded-xl border transition-all duration-500 ease-out hover:-translate-y-0.5 ${
        isDark
          ? 'border-white/10 bg-white/[0.03] hover:bg-white/[0.05]'
          : 'border-[var(--color-ink-200)] bg-white hover:shadow-card'
      }`}
    >
      <div
        className={`headline text-[36px] sm:text-[44px] font-semibold leading-none ${
          isDark ? 'text-white' : 'text-[var(--color-ink-900)]'
        }`}
      >
        {value}
      </div>
      <div
        className={`mt-3 text-[12.5px] font-semibold tracking-[0.14em] uppercase ${
          isDark ? 'text-[var(--color-accent-300)]' : 'text-[var(--color-accent-600)]'
        }`}
      >
        {label}
      </div>
      {description && (
        <p className={`mt-2.5 text-[13.5px] leading-relaxed ${isDark ? 'text-white/65' : 'text-[var(--color-ink-600)]'}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export function ValueCard({
  icon,
  title,
  description,
  tone = 'light',
}: {
  icon: ReactNode;
  title: string;
  description: string;
  tone?: 'light' | 'dark';
}) {
  const isDark = tone === 'dark';
  return (
    <div
      className={`group h-full p-6 rounded-xl border transition-all duration-500 ease-out hover:-translate-y-0.5 ${
        isDark
          ? 'border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-white/15'
          : 'border-[var(--color-ink-200)] bg-white hover:border-[var(--color-ink-300)] hover:shadow-card'
      }`}
    >
      <div
        className={`w-10 h-10 rounded-md grid place-items-center transition-transform duration-500 group-hover:-translate-y-0.5 ${
          isDark
            ? 'bg-white/[0.04] border border-white/10 text-[var(--color-accent-300)]'
            : 'bg-[var(--color-ink-50)] border border-[var(--color-ink-200)] text-[var(--color-accent-600)]'
        }`}
      >
        {icon}
      </div>
      <h3
        className={`mt-5 text-[17px] font-semibold ${
          isDark ? 'text-white' : 'text-[var(--color-ink-900)]'
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-2.5 text-[14px] leading-relaxed ${
          isDark ? 'text-white/65' : 'text-[var(--color-ink-600)]'
        }`}
      >
        {description}
      </p>
    </div>
  );
}
