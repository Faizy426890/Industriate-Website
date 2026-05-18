'use client';

import Image from 'next/image';
import { Users, ShieldAlert, DollarSign } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';
import { useLanguage } from '@/components/site/LanguageProvider';

const ICONS = [<Users size={22} key="u" />, <ShieldAlert size={22} key="s" />, <DollarSign size={22} key="d" />];
const COLORS = ['bg-red-50 text-red-600 border-red-100', 'bg-amber-50 text-amber-600 border-amber-100', 'bg-orange-50 text-orange-600 border-orange-100'];

export function Problem() {
  const { t } = useLanguage();
  const painPoints = t.problem.painPoints;

  return (
    <Section tone="soft">
      <Container className="py-20 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionHeader
              eyebrow={t.problem.eyebrow}
              title={t.problem.title}
              description={t.problem.description}
            />

            <StaggerGroup className="mt-10 space-y-4">
              {painPoints.map((p, idx) => (
                <StaggerItem key={p.title} direction="up">
                  <article className="group flex items-start gap-5 p-5 sm:p-6 rounded-2xl bg-white border border-[var(--color-ink-200)] hover:border-[var(--color-blue-200)] hover:shadow-card transition-all duration-500 ease-out hover:-translate-y-0.5">
                    <div className={`flex-none w-12 h-12 rounded-xl border grid place-items-center ${COLORS[idx]}`}>
                      {ICONS[idx]}
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
            <div className="relative pb-8 pl-6">
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

              <div className="absolute bottom-0 left-0 bg-white rounded-2xl p-5 shadow-elev border border-[var(--color-ink-200)] max-w-[240px]">
                <div className="text-[34px] sm:text-[36px] font-bold text-[var(--color-blue-600)] headline">73%</div>
                <p className="mt-1 text-[13px] text-[var(--color-ink-600)] leading-relaxed">
                  {t.problem.statLabel}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
