'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Search, Users, ClipboardCheck, Rocket } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';

const STEPS = [
  {
    n: '01',
    icon: <Search size={22} />,
    title: 'Discovery',
    description:
      'We learn about the role and the work. Clinical, plant floor, or both. Then we set expectations together.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
  },
  {
    n: '02',
    icon: <Users size={22} />,
    title: 'Sourcing',
    description:
      'We tap our TWIC-adjacent pipeline and global network to find credentialed candidates across healthcare and industrial roles.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80',
  },
  {
    n: '03',
    icon: <ClipboardCheck size={22} />,
    title: 'Credentialing',
    description:
      'Background checks, compliance verification, and for healthcare roles, on-site board exams at our Pearson VUE center.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
  },
  {
    n: '04',
    icon: <Rocket size={22} />,
    title: 'Placement',
    description:
      'Vetted, certified, ready-to-work people show up at your facility. Faster than a traditional agency can deliver.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
  },
];

export function HowItWorks() {
  return (
    <Section tone="white">
      <Container className="py-20 sm:py-24 lg:py-32">
        <SectionHeader
          eyebrow="Our Process"
          title="From discovery to deployment"
          description="A simple four-step process that gets qualified, compliant workers to your facility faster than any traditional agency."
          align="center"
          className="!mx-auto !text-center"
        />

        <StaggerGroup className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {STEPS.map((s, i) => (
            <StaggerItem key={s.n}>
              <div className="group relative h-full">
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-14 left-[calc(100%+0.25rem)] w-[calc(100%-3rem)] h-px bg-gradient-to-r from-[var(--color-blue-300)] to-[var(--color-blue-100)] z-10" />
                )}
                <div className="h-full bg-white rounded-2xl border border-[var(--color-ink-200)] hover:border-[var(--color-blue-300)] hover:shadow-lg transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-950)]/40 to-transparent" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[var(--color-blue-600)] grid place-items-center text-white text-[13px] font-bold shadow-lg">
                      {s.n}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-blue-50)] border border-[var(--color-blue-100)] grid place-items-center text-[var(--color-blue-600)]">
                      {s.icon}
                    </div>
                    <h3 className="mt-4 text-[17px] sm:text-[18px] font-bold text-[var(--color-ink-900)]">{s.title}</h3>
                    <p className="mt-2.5 text-[13.5px] sm:text-[14px] leading-relaxed text-[var(--color-ink-600)]">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <div className="mt-12 sm:mt-14 text-center">
            <Link
              href="/process"
              className="group inline-flex items-center gap-2 text-[14.5px] sm:text-[15px] font-semibold text-[var(--color-blue-600)] hover:text-[var(--color-blue-700)] transition-colors"
            >
              See the full process in detail
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
