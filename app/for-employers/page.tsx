import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, ShieldCheck, Users, Layers, Globe, ClipboardCheck } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { Container, Section, SectionHeader } from '@/components/site/Section';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/Reveal';
import { LeadForm } from '@/components/site/LeadForm';

export const metadata: Metadata = {
  title: 'For Employers',
  description:
    'Need to hire? Reach out and we send qualified, compliant workers to your facility, often within 48 hours.',
};

const VALUE = [
  {
    icon: <Zap size={18} />,
    title: '48-hour deployment',
    description: 'A ready talent pool and a tight coordination team get people to your door fast.',
  },
  {
    icon: <ClipboardCheck size={18} />,
    title: 'Pre-vetted, certified',
    description: 'Every worker arrives with credentials verified and paperwork in order.',
  },
  {
    icon: <ShieldCheck size={18} />,
    title: 'Less liability',
    description: 'Compliance is built into the process, not bolted on. That keeps risk down.',
  },
  {
    icon: <Users size={18} />,
    title: 'One partner, many industries',
    description: 'Industrial, healthcare, skilled trades, and logistics. All from one platform.',
  },
  {
    icon: <Layers size={18} />,
    title: 'Fewer vendors',
    description: 'Replace three to five vendors with one accountable partner.',
  },
  {
    icon: <Globe size={18} />,
    title: 'Global hiring support',
    description: 'Attorney-led visa pathways when you need international talent.',
  },
];

export default function ForEmployersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Employers"
        title="Need to hire? Reach out and we move fast."
        description="Stop juggling staffing agencies, certification vendors, compliance partners, and immigration counsel. Tell us the role and the timeline, and we deliver qualified people, often within 48 hours."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'For Employers' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact?intent=workforce"
            className="group inline-flex items-center gap-2 bg-[var(--color-blue-600)] text-white text-[14px] font-semibold px-5 sm:px-6 py-3.5 rounded-lg hover:bg-[var(--color-blue-700)] transition-all duration-300 shadow-lg shadow-blue-600/25"
          >
            Reach out to hire
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/why-us"
            className="inline-flex items-center gap-2 border border-white/20 text-white text-[14px] font-semibold px-5 sm:px-6 py-3.5 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            Why us
          </Link>
        </div>
      </PageHero>

      <Section tone="white">
        <Container className="py-16 sm:py-20 lg:py-28">
          <SectionHeader
            eyebrow="What you get"
            title="The things workforce teams actually care about."
          />
          <StaggerGroup className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {VALUE.map((v) => (
              <StaggerItem key={v.title}>
                <article className="h-full p-6 sm:p-7 rounded-2xl border border-[var(--color-ink-200)] bg-white hover:border-[var(--color-blue-200)] hover:shadow-lg transition-all duration-500 ease-out hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-blue-600)] grid place-items-center text-white">
                    {v.icon}
                  </div>
                  <h3 className="mt-5 text-[17px] sm:text-[18px] font-bold text-[var(--color-ink-900)]">{v.title}</h3>
                  <p className="mt-2.5 text-[14px] sm:text-[14.5px] leading-relaxed text-[var(--color-ink-600)]">{v.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <Section tone="soft">
        <Container className="py-16 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 items-start">
            <div className="lg:col-span-6">
              <SectionHeader
                eyebrow="Who we work with"
                title="Built for serious operators in regulated industries."
                description="Workforce, operations, HR, and compliance leaders running high-stakes placements where speed and paperwork both matter."
              />
              <Reveal delay={0.1}>
                <ul className="mt-8 space-y-3">
                  {[
                    'Plant and operations leaders in heavy industry',
                    'Workforce planners running multi-site mobilizations',
                    'Healthcare HR teams handling multi-state credentialing',
                    'Construction and trades GCs running shutdowns and turnarounds',
                    'Logistics leaders scaling distribution and freight crews',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 text-[14px] sm:text-[14.5px] text-[var(--color-ink-700)]">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-blue-500)] flex-none" />
                      {line}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal direction="left">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--color-ink-200)] shadow-card">
                  <Image
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
                    alt="Operations team meeting"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="py-16 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Reach out"
                title="Tell us what you need."
                description="A coordinator will reach out within 5 to 10 minutes during business hours."
              />
              <Reveal delay={0.1}>
                <div className="mt-6 sm:mt-8 rounded-xl border border-[var(--color-blue-100)] bg-[var(--color-blue-50)] p-5">
                  <p className="text-[13.5px] leading-relaxed text-[var(--color-ink-700)]">
                    Have a complex multi-site mobilization, a visa-track hire, or unusual
                    credentialing requirements? Drop it in the message field and we will route it to
                    the right coordinator.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <LeadForm defaultIntent="workforce" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
