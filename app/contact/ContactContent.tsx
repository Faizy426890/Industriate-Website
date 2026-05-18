'use client';

import { Suspense } from 'react';
import { Mail, Phone, MapPin, Clock3 } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { Container, Section } from '@/components/site/Section';
import { Reveal } from '@/components/site/Reveal';
import { ContactClient } from './ContactClient';
import { COMPANY } from '@/lib/nav';
import { useLanguage } from '@/components/site/LanguageProvider';

export function ContactContent() {
  const { t } = useLanguage();
  const pg = t.contact;

  return (
    <>
      <PageHero
        eyebrow={pg.eyebrow}
        title={pg.title}
        description={pg.description}
        crumbs={[{ label: t.shared.home, href: '/' }, { label: pg.crumb }]}
      >
        <div className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-[var(--color-accent-300)] bg-white/[0.05] border border-white/10 px-3.5 py-2 rounded-full">
          <Clock3 size={13} />
          {pg.responseLabel}
        </div>
      </PageHero>

      <Section tone="white">
        <Container className="py-14 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Reveal>
                <div className="space-y-3.5">
                  <ContactBlock
                    icon={<Mail size={16} />}
                    label={pg.email}
                    value={COMPANY.email}
                    href={`mailto:${COMPANY.email}`}
                  />
                  <ContactBlock
                    icon={<Phone size={16} />}
                    label={pg.phone}
                    value={COMPANY.phone}
                    href={`tel:${COMPANY.phone.replace(/\s|\(|\)|-/g, '')}`}
                  />
                  <ContactBlock icon={<MapPin size={16} />} label={pg.office} value={COMPANY.address} />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-8 rounded-2xl border border-[var(--color-ink-200)] bg-[var(--color-ink-50)] p-5 sm:p-6">
                  <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-600)]">
                    {pg.whatHappens}
                  </div>
                  <ol className="mt-4 space-y-3 text-[13.5px] sm:text-[14px] text-[var(--color-ink-700)] leading-relaxed list-decimal pl-5 marker:text-[var(--color-accent-500)] marker:font-semibold">
                    {pg.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="mt-8 text-[12.5px] leading-relaxed text-[var(--color-ink-500)]">
                  {pg.disclaimer}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <Suspense
                fallback={
                  <div className="h-[560px] rounded-2xl border border-[var(--color-ink-200)] bg-white shadow-card animate-pulse" />
                }
              >
                <ContactClient />
              </Suspense>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function ContactBlock({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-[var(--color-ink-200)] bg-white hover:shadow-card hover:border-[var(--color-blue-200)] transition-all duration-500">
      <div className="flex-none w-10 h-10 rounded-md bg-[var(--color-ink-50)] border border-[var(--color-ink-200)] grid place-items-center text-[var(--color-accent-600)]">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-[var(--color-ink-500)]">
          {label}
        </div>
        <div className="mt-1 text-[14px] sm:text-[14.5px] font-medium text-[var(--color-ink-900)] break-words">
          {value}
        </div>
      </div>
    </div>
  );
  if (href) return <a href={href} className="block">{inner}</a>;
  return inner;
}
