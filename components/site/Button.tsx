import Link from 'next/link';
import { type ComponentProps, type ReactNode, forwardRef } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'light';

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-[var(--color-blue-600)] text-white hover:bg-[var(--color-blue-700)] shadow-lg shadow-blue-600/20 hover:shadow-xl',
  secondary:
    'bg-white text-[var(--color-ink-900)] border border-[var(--color-ink-300)] hover:border-[var(--color-blue-400)] hover:bg-[var(--color-blue-50)]',
  ghost:
    'text-[var(--color-ink-700)] hover:text-[var(--color-blue-600)] hover:bg-[var(--color-blue-50)]',
  light:
    'bg-white/10 text-white border border-white/15 hover:bg-white/15 hover:border-white/25 backdrop-blur-md',
};

const SIZES = {
  sm: 'text-[13px] px-3.5 py-2 rounded-md',
  md: 'text-[14px] px-4 py-2.5 rounded-lg',
  lg: 'text-[15px] px-6 py-3.5 rounded-lg',
};

type CommonProps = {
  variant?: Variant;
  size?: keyof typeof SIZES;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children: ReactNode;
  className?: string;
};

export const ButtonLink = forwardRef<HTMLAnchorElement, CommonProps & ComponentProps<typeof Link>>(
  function ButtonLink(
    { variant = 'primary', size = 'md', iconLeft, iconRight, children, className = '', ...rest },
    ref
  ) {
    return (
      <Link
        ref={ref}
        className={`group inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 ease-out ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
        {...rest}
      >
        {iconLeft && (
          <span className="transition-transform duration-300 group-hover:-translate-x-0.5">{iconLeft}</span>
        )}
        <span>{children}</span>
        {iconRight && (
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">{iconRight}</span>
        )}
      </Link>
    );
  }
);

export function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  children,
  className = '',
  ...rest
}: CommonProps & ComponentProps<'button'>) {
  return (
    <button
      className={`group inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 ease-out ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...rest}
    >
      {iconLeft && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">{iconLeft}</span>
      )}
      <span>{children}</span>
      {iconRight && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">{iconRight}</span>
      )}
    </button>
  );
}
