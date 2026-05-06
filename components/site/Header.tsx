'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ChevronRight, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { PRIMARY_NAV } from '@/lib/nav';

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-[var(--color-ink-200)]/70 shadow-[0_1px_0_rgba(15,23,42,0.04)]'
          : 'bg-white/95 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {PRIMARY_NAV.map((group) => (
              <DesktopNavItem
                key={group.label}
                group={group}
                pathname={pathname}
                active={activeMenu === group.label}
                onEnter={() => setActiveMenu(group.label)}
                onLeave={() => setActiveMenu(null)}
              />
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center text-[14px] font-medium text-[var(--color-ink-700)] hover:text-[var(--color-ink-900)] transition-colors px-3 py-2"
            >
              Contact
            </Link>
            <Link
              href="/contact?intent=workforce"
              className="group inline-flex items-center gap-2 bg-[var(--color-navy-900)] text-white text-[14px] font-medium px-4 py-2.5 rounded-md hover:bg-[var(--color-navy-700)] transition-all duration-300 shadow-soft hover:shadow-elev"
            >
              Request Workforce
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="lg:hidden grid place-items-center w-10 h-10 rounded-md border border-[var(--color-ink-200)] text-[var(--color-ink-800)] hover:bg-[var(--color-ink-50)] transition-colors"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      <MobileSidebar open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </header>
  );
}

function DesktopNavItem({
  group,
  pathname,
  active,
  onEnter,
  onLeave,
}: {
  group: (typeof PRIMARY_NAV)[number];
  pathname: string;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const isActive = group.href ? pathname.startsWith(group.href) : group.links.some((l) => pathname === l.href);

  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {group.href ? (
        <Link
          href={group.href}
          className={`inline-flex items-center gap-1 px-3.5 py-2 text-[14px] font-medium rounded-md transition-colors ${
            isActive ? 'text-[var(--color-ink-900)]' : 'text-[var(--color-ink-600)] hover:text-[var(--color-ink-900)]'
          }`}
        >
          {group.label}
        </Link>
      ) : (
        <button
          type="button"
          className={`inline-flex items-center gap-1 px-3.5 py-2 text-[14px] font-medium rounded-md transition-colors ${
            isActive ? 'text-[var(--color-ink-900)]' : 'text-[var(--color-ink-600)] hover:text-[var(--color-ink-900)]'
          }`}
          aria-haspopup="menu"
          aria-expanded={active}
        >
          {group.label}
        </button>
      )}

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[340px]"
            role="menu"
          >
            <div className="rounded-xl border border-[var(--color-ink-200)] bg-white shadow-elev overflow-hidden">
              <div className="p-2">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-[var(--color-ink-50)] transition-colors group"
                  >
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-400)] flex-none transition-transform group-hover:scale-125" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[14px] font-semibold text-[var(--color-ink-900)]">{link.label}</div>
                      {link.description && (
                        <div className="text-[12.5px] text-[var(--color-ink-500)] mt-0.5">{link.description}</div>
                      )}
                    </div>
                    <ChevronRight
                      size={14}
                      className="mt-1.5 text-[var(--color-ink-400)] flex-none transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-[var(--color-ink-700)]"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileSidebar({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-[var(--color-navy-950)]/50 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />
          <motion.aside
            key="sidebar"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed top-0 right-0 bottom-0 z-50 w-[88%] max-w-[420px] bg-white shadow-2xl lg:hidden flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between h-16 px-5 border-b border-[var(--color-ink-200)]">
              <Logo />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="grid place-items-center w-10 h-10 rounded-md border border-[var(--color-ink-200)] text-[var(--color-ink-800)] hover:bg-[var(--color-ink-50)] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[var(--color-ink-400)] uppercase mb-3">
                Navigate
              </p>
              <nav className="flex flex-col" aria-label="Mobile primary">
                {PRIMARY_NAV.map((group, i) => {
                  const isOpen = openGroup === group.label;
                  return (
                    <motion.div
                      key={group.label}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: 0.05 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                      className="border-b border-[var(--color-ink-100)] last:border-b-0"
                    >
                      <div className="flex items-center justify-between">
                        {group.href ? (
                          <Link
                            href={group.href}
                            className={`flex-1 py-3.5 text-[15px] font-semibold ${
                              pathname === group.href
                                ? 'text-[var(--color-ink-900)]'
                                : 'text-[var(--color-ink-800)]'
                            }`}
                          >
                            {group.label}
                          </Link>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setOpenGroup(isOpen ? null : group.label)}
                            className="flex-1 py-3.5 text-left text-[15px] font-semibold text-[var(--color-ink-800)]"
                            aria-expanded={isOpen}
                          >
                            {group.label}
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => setOpenGroup(isOpen ? null : group.label)}
                          aria-label={`Toggle ${group.label}`}
                          className="grid place-items-center w-9 h-9 text-[var(--color-ink-500)]"
                        >
                          <ChevronRight
                            size={16}
                            className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                          />
                        </button>
                      </div>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pb-3 pl-1 flex flex-col gap-0.5">
                              {group.links.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className={`flex items-center justify-between rounded-md px-3 py-2.5 text-[14px] transition-colors ${
                                    pathname === link.href
                                      ? 'bg-[var(--color-ink-50)] text-[var(--color-ink-900)] font-medium'
                                      : 'text-[var(--color-ink-600)] hover:bg-[var(--color-ink-50)] hover:text-[var(--color-ink-900)]'
                                  }`}
                                >
                                  <span>{link.label}</span>
                                  <ChevronRight size={14} className="text-[var(--color-ink-400)]" />
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-8 pt-6 border-t border-[var(--color-ink-100)] space-y-3">
                <Link
                  href="/contact?intent=workforce"
                  className="flex items-center justify-center gap-2 w-full bg-[var(--color-navy-900)] text-white text-[14px] font-semibold px-4 py-3 rounded-md hover:bg-[var(--color-navy-700)] transition-colors"
                >
                  Request Workforce <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact?intent=apply"
                  className="flex items-center justify-center gap-2 w-full border border-[var(--color-ink-300)] text-[var(--color-ink-800)] text-[14px] font-semibold px-4 py-3 rounded-md hover:bg-[var(--color-ink-50)] transition-colors"
                >
                  Apply Now
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full text-[14px] font-medium text-[var(--color-ink-600)] py-2"
                >
                  Contact us
                </Link>
              </div>

              <div className="mt-8 rounded-lg bg-[var(--color-ink-50)] border border-[var(--color-ink-200)] p-4">
                <div className="text-[11px] font-semibold tracking-[0.16em] text-[var(--color-accent-600)] uppercase mb-1.5">
                  Response Promise
                </div>
                <p className="text-[13.5px] text-[var(--color-ink-700)] leading-relaxed">
                  We respond to inbound workforce requests within <span className="font-semibold text-[var(--color-ink-900)]">5–10 minutes</span>.
                </p>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
