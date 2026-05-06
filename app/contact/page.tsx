import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Mail, Phone, MapPin, Clock3 } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { Container, Section } from '@/components/site/Section';
import { Reveal } from '@/components/site/Reveal';
import { ContactClient } from './ContactClient';
import { COMPANY } from '@/lib/nav';

export const metadata: Metadata = {
  title: 'Contact · Lead Capture',
  description:
    'Talk to INDUSTRITAS. We respond within 5–10 minutes during business hours. Request workforce, apply, or send a general message.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact · Lead Capture"
        title="Talk to a coordination team member — within minutes."
        description="Whether you need to mobilize a multi-site workforce, apply as a candidate, or coordinate a visa pathway, this is the front door."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      >
        <div className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-[var(--color-accent-300)] bg-white/[0.05] border border-white/10 px-3.5 py-2 rounded-full">
          <Clock3 size={13} />
          We respond within 5–10 minutes during business hours.
        </div>
      </PageHero>

      <Section tone="white">
        <Container className="py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="space-y-3.5">
                  <ContactBlock
                    icon={<Mail size={16} />}
                    label="Email"
                    value={COMPANY.email}
                    href={`mailto:${COMPANY.email}`}
                  />
                  <ContactBlock
                    icon={<Phone size={16} />}
                    label="Phone"
                    value={COMPANY.phone}
                    href={`tel:${COMPANY.phone.replace(/\s|\(|\)|-/g, '')}`}
                  />
                  <ContactBlock icon={<MapPin size={16} />} label="Office" value={COMPANY.address} />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-8 rounded-xl border border-[var(--color-ink-200)] bg-[var(--color-ink-50)] p-6">
                  <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-600)]">
                    What happens next
                  </div>
                  <ol className="mt-4 space-y-3 text-[13.5px] text-[var(--color-ink-700)] list-decimal pl-5 marker:text-[var(--color-accent-500)] marker:font-semibold">
                    <li>Your request is routed to the right coordinator.</li>
                    <li>We respond within 5–10 minutes during business hours.</li>
                    <li>Structured intake, scope, and timeline confirmation.</li>
                    <li>Talent matching and compliance documentation begins.</li>
                  </ol>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="mt-8 text-[12.5px] leading-relaxed text-[var(--color-ink-500)]">
                  INDUSTRITAS is not a law firm and does not provide legal advice. Immigration filings are
                  handled exclusively by U.S.-licensed attorneys.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Suspense fallback={<div className="h-[600px] rounded-2xl border border-[var(--color-ink-200)] bg-white shadow-card animate-pulse" />}>
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
    <div className="flex items-start gap-4 p-5 rounded-xl border border-[var(--color-ink-200)] bg-white hover:shadow-card transition-shadow duration-500">
      <div className="flex-none w-10 h-10 rounded-md bg-[var(--color-ink-50)] border border-[var(--color-ink-200)] grid place-items-center text-[var(--color-accent-600)]">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-[var(--color-ink-500)]">
          {label}
        </div>
        <div className="mt-1 text-[14.5px] font-medium text-[var(--color-ink-900)] truncate">{value}</div>
      </div>
    </div>
  );
  if (href) return <a href={href}>{inner}</a>;
  return inner;
}
