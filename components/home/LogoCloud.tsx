'use client';

import { Reveal } from '@/components/site/Reveal';
import { useLanguage } from '@/components/site/LanguageProvider';

export function LogoCloud() {
  const { t } = useLanguage();
  const partners = t.logoCloud.partners;

  return (
    <section className="bg-white border-b border-[var(--color-ink-100)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 sm:py-14">
        <Reveal>
          <p className="text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] uppercase text-[var(--color-ink-400)] text-center mb-7 sm:mb-8">
            {t.logoCloud.trusted}
          </p>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <div className="flex flex-col items-center gap-2 py-4 px-3 rounded-xl hover:bg-[var(--color-ink-50)] transition-colors duration-300 cursor-default">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[var(--color-blue-50)] border border-[var(--color-blue-100)] grid place-items-center">
                  <div className="text-[var(--color-blue-600)] font-bold text-[15px] sm:text-[16px]">
                    {p.name.charAt(0)}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[12.5px] sm:text-[13px] font-semibold text-[var(--color-ink-800)]">{p.name}</div>
                  <div className="text-[10.5px] sm:text-[11px] text-[var(--color-ink-500)]">{p.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
