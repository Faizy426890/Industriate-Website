'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Briefcase, Users, CheckCircle2 } from 'lucide-react';
import { Container, Section } from '@/components/site/Section';
import { Reveal } from '@/components/site/Reveal';

const EMPLOYER_BENEFITS = [
  'Workers on site in as little as 48 hours',
  'Pre-vetted, certified, ready to start',
  'Compliance handled, so liability stays low',
  'One single partner instead of three or four vendors',
  'Scales across healthcare and industrial roles',
  'Global hiring support when you need it',
];

const CANDIDATE_BENEFITS = [
  'Real jobs in healthcare, industrial, trades, and logistics',
  'Help with certifications and background paperwork',
  'Connections to U.S.-licensed immigration attorneys',
  'Visa-path support for EB-2, EB-3, TN, and EB-5',
  'Real career growth with serious employers',
  'A clear process, no run-around',
];

export function Audiences() {
  return (
    <Section tone="white">
      <Container className="py-20 sm:py-24 lg:py-32">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--color-blue-600)]">
              <span className="w-6 h-px bg-[var(--color-blue-600)]" />
              Built for both sides
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="headline mt-4 text-[28px] sm:text-[40px] lg:text-[48px] leading-[1.06] font-bold text-[var(--color-ink-900)]">
              One platform.{' '}
              <span className="text-[var(--color-blue-600)]">Two journeys.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[15.5px] sm:text-[17px] leading-relaxed text-[var(--color-ink-600)]">
              Hiring? Reach out and we will bring the right people. Job hunting? Apply, and we will
              walk you through the steps.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 sm:gap-6">
          <Reveal direction="right">
            <article className="group h-full rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--color-blue-600)] to-[var(--color-blue-800)] text-white relative">
              <div className="absolute inset-0 opacity-10">
                <Image
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative p-7 sm:p-9 lg:p-10">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 grid place-items-center">
                    <Briefcase size={22} className="text-white" />
                  </div>
                  <span className="text-[12px] font-semibold tracking-[0.16em] uppercase text-blue-200">
                    For Employers
                  </span>
                </div>
                <h3 className="headline text-[24px] sm:text-[30px] font-bold leading-tight">
                  Need to hire? Reach out and we move fast.
                </h3>
                <p className="mt-3 text-[14.5px] sm:text-[15px] leading-relaxed text-white/80">
                  Tell us the role and the timeline. We bring qualified, compliant people to your
                  door, often within 48 hours.
                </p>
                <ul className="mt-6 sm:mt-7 space-y-3.5">
                  {EMPLOYER_BENEFITS.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[14px] sm:text-[14.5px] text-white/85">
                      <CheckCircle2 size={16} className="text-blue-300 flex-none mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 sm:mt-9 flex flex-wrap gap-3">
                  <Link
                    href="/contact?intent=workforce"
                    className="group/btn inline-flex items-center gap-2 bg-white text-[var(--color-blue-700)] text-[14px] sm:text-[14.5px] font-semibold px-5 sm:px-6 py-3.5 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg"
                  >
                    Reach out to hire
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/for-employers"
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-white/90 hover:text-white px-2 sm:px-3 py-3.5 transition-colors"
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal direction="left">
            <article className="group h-full p-7 sm:p-9 lg:p-10 rounded-2xl bg-white border-2 border-[var(--color-ink-200)] hover:border-[var(--color-blue-300)] hover:shadow-lg transition-all duration-500">
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-blue-50)] border border-[var(--color-blue-100)] grid place-items-center text-[var(--color-blue-600)]">
                  <Users size={22} />
                </div>
                <span className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--color-blue-600)]">
                  For Candidates
                </span>
              </div>
              <h3 className="headline text-[24px] sm:text-[30px] font-bold leading-tight text-[var(--color-ink-900)]">
                Looking for a job? Apply in a few minutes.
              </h3>
              <p className="mt-3 text-[14.5px] sm:text-[15px] leading-relaxed text-[var(--color-ink-600)]">
                Tell us what kind of work you want and the certifications you have. We share open
                roles and walk you through every step.
              </p>
              <ul className="mt-6 sm:mt-7 space-y-3.5">
                {CANDIDATE_BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[14px] sm:text-[14.5px] text-[var(--color-ink-700)]">
                    <CheckCircle2 size={16} className="text-[var(--color-blue-500)] flex-none mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 sm:mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact?intent=apply"
                  className="group/btn inline-flex items-center gap-2 bg-[var(--color-blue-600)] text-white text-[14px] sm:text-[14.5px] font-semibold px-5 sm:px-6 py-3.5 rounded-lg hover:bg-[var(--color-blue-700)] transition-all duration-300 shadow-lg shadow-blue-600/20"
                >
                  Apply for a job
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                </Link>
                <Link
                  href="/for-candidates"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--color-ink-700)] hover:text-[var(--color-ink-900)] px-2 sm:px-3 py-3.5 transition-colors"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
