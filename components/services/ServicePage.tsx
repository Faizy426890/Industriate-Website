import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { type ReactNode } from 'react';
import { PageHero } from '@/components/site/PageHero';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';
import { CTASection } from '@/components/site/CTASection';

export type Capability = {
  icon: ReactNode;
  title: string;
  description: string;
};

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
  intro: ReactNode;
  capabilities: Capability[];
  outcomes: string[];
  ctaLabel?: string;
  ctaHref?: string;
  callout?: ReactNode;
  pageName: string;
};

export function ServicePage({
  eyebrow,
  title,
  description,
  heroImage,
  intro,
  capabilities,
  outcomes,
  ctaLabel = 'Hire workers',
  ctaHref = '/contact?intent=workforce',
  callout,
  pageName,
}: Props) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
          { label: pageName },
        ]}
      >
        <Link
          href={ctaHref}
          className="group inline-flex items-center gap-2 bg-white text-[var(--color-navy-900)] text-[14px] font-semibold px-5 py-3 rounded-md hover:bg-[var(--color-accent-100)] transition-all duration-300"
        >
          {ctaLabel}
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </PageHero>

      <Section tone="white">
        <Container className="py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--color-ink-200)] shadow-card">
                  <Image
                    src={heroImage}
                    alt={pageName}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <SectionHeader eyebrow="Service Overview" title={`What ${pageName.toLowerCase()} delivers`} />
              <Reveal delay={0.05}>
                <div className="mt-6 text-[15.5px] leading-relaxed text-[var(--color-ink-700)] space-y-4">
                  {intro}
                </div>
              </Reveal>
              {callout && (
                <Reveal delay={0.1}>
                  <div className="mt-8">{callout}</div>
                </Reveal>
              )}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="soft">
        <Container className="py-20 lg:py-28">
          <SectionHeader
            eyebrow="Capabilities"
            title="Inside this service line."
            description="Real deliverables. What we coordinate, verify, and stand behind."
            align="center"
            className="!mx-auto !text-center"
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((c) => (
              <StaggerItem key={c.title}>
                <article className="h-full p-6 rounded-xl border border-[var(--color-ink-200)] bg-white hover:shadow-card transition-all duration-500 ease-out hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-md bg-[var(--color-ink-50)] border border-[var(--color-ink-200)] grid place-items-center text-[var(--color-accent-600)]">
                    {c.icon}
                  </div>
                  <h3 className="mt-5 text-[17px] font-semibold text-[var(--color-ink-900)]">{c.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-[var(--color-ink-600)]">{c.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Outcomes"
                title="What success looks like."
                description="Measurable, repeatable outcomes that translate directly to enterprise workforce metrics."
              />
            </div>
            <div className="lg:col-span-7">
              <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {outcomes.map((o) => (
                  <StaggerItem key={o}>
                    <div className="p-5 rounded-lg border border-[var(--color-ink-200)] bg-[var(--color-ink-50)] flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-500)] flex-none" />
                      <span className="text-[14px] text-[var(--color-ink-700)]">{o}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
