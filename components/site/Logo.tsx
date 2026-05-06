import Link from 'next/link';

type Props = {
  variant?: 'light' | 'dark';
  className?: string;
};

export function Logo({ variant = 'dark', className = '' }: Props) {
  const tone = variant === 'light' ? 'text-white' : 'text-[var(--color-ink-900)]';
  const accent = variant === 'light' ? 'text-[var(--color-accent-300)]' : 'text-[var(--color-accent-500)]';

  return (
    <Link
      href="/"
      aria-label="INDUSTRITAS — Home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span
        aria-hidden
        className={`grid place-items-center w-8 h-8 rounded-md border ${
          variant === 'light'
            ? 'border-white/20 bg-white/5'
            : 'border-[var(--color-ink-200)] bg-[var(--color-ink-50)]'
        } transition-all duration-300 group-hover:border-[var(--color-accent-400)]`}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 12L7 2L12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={accent} />
          <path d="M4.5 8H9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className={tone} />
        </svg>
      </span>
      <span className={`flex flex-col leading-none ${tone}`}>
        <span className="text-[15px] font-bold tracking-[0.16em]">INDUSTRITAS</span>
        <span className={`text-[10px] mt-0.5 tracking-[0.22em] uppercase ${variant === 'light' ? 'text-white/60' : 'text-[var(--color-ink-500)]'}`}>
          Staffing, LLC
        </span>
      </span>
    </Link>
  );
}
