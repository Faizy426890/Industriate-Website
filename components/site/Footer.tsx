'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY } from '@/lib/nav';
import { useLanguage } from './LanguageProvider';

export function Footer() {
  const { t } = useLanguage();

  const footerNav = [
    {
      title: t.footer.colPlatform,
      links: [
        { label: t.footer.howItWorks, href: '/platform' },
        { label: t.footer.process, href: '/process' },
        { label: t.footer.whyUs, href: '/why-us' },
        { label: t.footer.industries, href: '/industries' },
      ],
    },
    {
      title: t.footer.colServices,
      links: [
        { label: t.footer.staffing, href: '/services/staffing' },
        { label: t.footer.immigration, href: '/services/immigration' },
        { label: t.footer.certification, href: '/services/certification' },
        { label: t.footer.healthcare, href: '/services/healthcare' },
      ],
    },
    {
      title: t.footer.colAudience,
      links: [
        { label: t.footer.forEmployers, href: '/for-employers' },
        { label: t.footer.forCandidates, href: '/for-candidates' },
        { label: t.footer.visaPathways, href: '/visa-pathways' },
        { label: t.footer.contact, href: '/contact' },
      ],
    },
    {
      title: t.footer.colLegal,
      links: [
        { label: t.footer.compliance, href: '/compliance' },
        { label: t.footer.privacy, href: '/compliance#privacy' },
        { label: t.footer.terms, href: '/compliance#terms' },
      ],
    },
  ];

  return (
    <footer className="bg-[var(--color-navy-950)] text-white relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.06] bg-grid-soft" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 text-[14px] sm:text-[14.5px] leading-relaxed text-white/70 max-w-sm">
              {COMPANY.positioning}
            </p>
            <p className="mt-3 text-[13px] sm:text-[13.5px] leading-relaxed text-white/55 max-w-sm">
              {t.footer.tagline}
            </p>

            <div className="mt-7 sm:mt-8 space-y-3 text-[13.5px]">
              <FooterContact icon={<Mail size={14} />} label={t.footer.email} value={COMPANY.email} href={`mailto:${COMPANY.email}`} />
              <FooterContact icon={<Phone size={14} />} label={t.footer.phone} value={COMPANY.phone} href={`tel:${COMPANY.phone.replace(/\s|\(|\)|-/g, '')}`} />
              <FooterContact icon={<MapPin size={14} />} label={t.footer.office} value={COMPANY.address} />
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {footerNav.map((column) => (
              <div key={column.title}>
                <h4 className="text-[11.5px] font-semibold tracking-[0.18em] uppercase text-white/50 mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-block text-[13.5px] sm:text-[14px] text-white/75 hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-14 pt-8 border-t border-white/10">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 lg:p-6 flex flex-col md:flex-row md:items-start gap-4">
            <div className="flex-none w-9 h-9 rounded-md bg-white/10 grid place-items-center text-[var(--color-blue-400)]">
              <ShieldCheck size={16} />
            </div>
            <div className="flex-1">
              <h5 className="text-[13.5px] font-semibold text-white">{t.footer.disclaimerTitle}</h5>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/65">
                {t.footer.disclaimerBody}{' '}
                <Link href="/compliance" className="text-white/80 underline-offset-4 hover:underline">
                  {t.shared.readDisclaimer}
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
          <p className="text-[12.5px] text-white/50">
            © {new Date().getFullYear()} {COMPANY.name}. {t.footer.allRights}
          </p>
          <p className="text-[11px] tracking-[0.16em] uppercase text-white/40">
            {t.footer.taglineFooter}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterContact({
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
  const content = (
    <span className="flex items-start gap-3">
      <span className="mt-0.5 w-7 h-7 rounded-md bg-white/[0.04] border border-white/10 grid place-items-center text-white/70 flex-none">
        {icon}
      </span>
      <span className="flex flex-col min-w-0">
        <span className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-white/45">{label}</span>
        <span className="text-white/85 break-words">{value}</span>
      </span>
    </span>
  );

  if (href) {
    return (
      <a href={href} className="block hover:text-white transition-colors">
        {content}
      </a>
    );
  }
  return <div>{content}</div>;
}
