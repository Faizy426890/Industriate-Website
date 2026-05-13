'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { StaggerGroup, StaggerItem } from '@/components/site/Reveal';

const QUOTES = [
  {
    quote:
      'INDUSTRITAS replaced four vendors with one platform. Compliance paperwork that used to take weeks now arrives the day before deployment.',
    name: 'VP of Operations',
    role: 'Gulf Coast Refinery Operator',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'The 48-hour deployment promise is real. We staffed a turnaround on short notice with TWIC-certified crews. No surprises. No compliance gaps.',
    name: 'Director, Workforce Planning',
    role: 'Industrial Construction',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      "Their immigration coordination is the best we've worked with. Counsel handles all legal work. INDUSTRITAS keeps everything on schedule.",
    name: 'Chief People Officer',
    role: 'Multi-State Healthcare System',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
];

export function Testimonials() {
  return (
    <Section tone="white">
      <Container className="py-20 sm:py-24 lg:py-32">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by industry leaders across America"
          description="Don't take our word for it. Hear from the operators and healthcare systems that work with us every day."
          align="center"
          className="!mx-auto !text-center"
        />

        <StaggerGroup className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {QUOTES.map((q, i) => (
            <StaggerItem key={i}>
              <article className="h-full flex flex-col p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[var(--color-ink-50)] to-white border border-[var(--color-ink-200)] hover:border-[var(--color-blue-200)] hover:shadow-lg transition-all duration-500 ease-out hover:-translate-y-1">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-[var(--color-blue-500)] text-[var(--color-blue-500)]" />
                  ))}
                </div>
                <blockquote className="flex-1 text-[15px] sm:text-[15.5px] leading-relaxed text-[var(--color-ink-800)]">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <div className="mt-6 sm:mt-7 pt-5 sm:pt-6 border-t border-[var(--color-ink-200)] flex items-center gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[var(--color-blue-100)] flex-none">
                    <Image
                      src={q.image}
                      alt={q.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="text-[13.5px] sm:text-[14px] font-bold text-[var(--color-ink-900)]">{q.name}</div>
                    <div className="text-[12px] sm:text-[12.5px] text-[var(--color-ink-500)]">{q.role}</div>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
