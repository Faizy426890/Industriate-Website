'use client';

import Image from 'next/image';
import { Users, ShieldAlert, DollarSign } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';

const PAIN_POINTS = [
  {
    icon: <Users size={22} />,
    title: 'Talent is hard to find',
    description:
      'Skilled clinical staff and certified industrial workers are harder to hire, and harder to keep, than ever before.',
    color: 'bg-red-50 text-red-600 border-red-100',
  },
  {
    icon: <ShieldAlert size={22} />,
    title: 'Compliance risk',
    description:
      'Bad paperwork puts your facility or plant at real risk. Regulators, lawsuits, safety incidents. None of it is worth the savings.',
    color: 'bg-amber-50 text-amber-600 border-amber-100',
  },
  {
    icon: <DollarSign size={22} />,
    title: 'Costs that keep growing',
    description:
      'Travel nurses and short-term contractors are useful, until they become your only option. Budgets break long before the problem does.',
    color: 'bg-orange-50 text-orange-600 border-orange-100',
  },
];

export function Problem() {
  return (
    <Section tone="soft">
      <Container className="py-20 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionHeader
              eyebrow="The Challenge"
              title="Workforce gaps cost more than most teams expect"
              description="Whether you run a hospital or a refinery, the workforce crunch hits the same way: delayed operations, compliance exposure, and rising costs from short-term fixes that never get permanent."
            />

            <StaggerGroup className="mt-10 space-y-4">
              {PAIN_POINTS.map((p) => (
                <StaggerItem key={p.title} direction="up">
                  <article className="group flex items-start gap-5 p-5 sm:p-6 rounded-2xl bg-white border border-[var(--color-ink-200)] hover:border-[var(--color-blue-200)] hover:shadow-card transition-all duration-500 ease-out hover:-translate-y-0.5">
                    <div className={`flex-none w-12 h-12 rounded-xl border grid place-items-center ${p.color}`}>
                      {p.icon}
                    </div>
                    <div>
                      <h3 className="text-[17px] sm:text-[18px] font-semibold text-[var(--color-ink-900)]">{p.title}</h3>
                      <p className="mt-2 text-[14px] sm:text-[14.5px] leading-relaxed text-[var(--color-ink-600)]">
                        {p.description}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          <Reveal direction="left">
            {/*
              Outer wrapper carries the bottom + left padding so the
              absolutely-positioned stat card is never clipped.
              pb-8 pl-6 give it exactly the room it needs on all screens.
            */}
            <div className="relative pb-8 pl-6">
              {/* Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elev">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
                  alt="Workforce challenges in industrial setting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-950)]/50 via-transparent to-transparent" />
              </div>

              {/*
                Stat card — uses positive bottom/left offsets inside the
                padded wrapper instead of negative offsets that escape it.
                This way nothing gets clipped regardless of screen size.
              */}
              <div className="absolute bottom-0 left-0 bg-white rounded-2xl p-5 shadow-elev border border-[var(--color-ink-200)] max-w-[240px]">
                <div className="text-[34px] sm:text-[36px] font-bold text-[var(--color-blue-600)] headline">73%</div>
                <p className="mt-1 text-[13px] text-[var(--color-ink-600)] leading-relaxed">
                  of healthcare facilities report critical staffing shortages
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}