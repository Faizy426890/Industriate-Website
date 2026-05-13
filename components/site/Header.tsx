'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ChevronRight, ArrowRight, Clock3 } from 'lucide-react';
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
    if (open) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ease-out ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-[var(--color-ink-200)]/70 shadow-[0_1px_0_rgba(15,23,42,0.04)]'
            : 'bg-white/95 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px] gap-3">
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
                className="group inline-flex items-center gap-2 bg-[var(--color-blue-600)] text-white text-[14px] font-medium px-4 py-2.5 rounded-lg hover:bg-[var(--color-blue-700)] transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-xl"
              >
                Hire workers
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="lg:hidden inline-flex items-center gap-2 h-11 px-3.5 rounded-xl bg-[var(--color-ink-900)] text-white shadow-md hover:bg-[var(--color-ink-800)] active:scale-[0.97] transition-all"
            >
              <Menu size={18} />
              <span className="text-[13px] font-semibold tracking-wide">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sidebar rendered outside header so it truly overlays everything */}
      <MobileSidebar open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </>
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

  // Reset open groups when sidebar closes
  useEffect(() => {
    if (!open) setOpenGroup(null);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop — must use inline styles for z-index to guarantee it works */}
          <motion.div
            key="backdrop"
            style={{ position: 'fixed', inset: 0, zIndex: 9998 }}
            className="bg-black/60 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Sidebar panel */}
          <motion.aside
            key="sidebar"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            style={{ position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 9999, width: '85%', maxWidth: '380px' }}
            className="bg-white shadow-2xl lg:hidden flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header row */}
            <div className="flex items-center justify-between px-5 border-b border-[var(--color-ink-100)]" style={{ height: '64px', minHeight: '64px' }}>
              <Logo />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="grid place-items-center w-9 h-9 rounded-lg bg-[var(--color-ink-100)] text-[var(--color-ink-700)] hover:bg-[var(--color-ink-200)] active:scale-95 transition-all"
              >
                <X size={17} />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto overscroll-contain" style={{ WebkitOverflowScrolling: 'touch' }}>
              <div className="px-5 pt-6 pb-8">

                {/* Section label */}
                <p className="text-[10.5px] font-bold tracking-[0.2em] text-[var(--color-ink-400)] uppercase mb-2">
                  Navigate
                </p>

                {/* Nav groups */}
                <nav className="flex flex-col divide-y divide-[var(--color-ink-100)]" aria-label="Mobile primary">
                  {PRIMARY_NAV.map((group, i) => {
                    const isOpen = openGroup === group.label;
                    const isCurrentPage = group.href ? pathname.startsWith(group.href) : group.links?.some((l) => pathname === l.href);

                    return (
                      <motion.div
                        key={group.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: 0.05 + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="flex items-center justify-between min-h-[52px]">
                          {group.href ? (
                            <Link
                              href={group.href}
                              onClick={onClose}
                              className={`flex-1 py-3.5 text-[15px] font-semibold transition-colors ${
                                isCurrentPage
                                  ? 'text-[var(--color-blue-600)]'
                                  : 'text-[var(--color-ink-800)]'
                              }`}
                            >
                              {group.label}
                            </Link>
                          ) : (
                            <button
                              type="button"
                              onClick={() => setOpenGroup(isOpen ? null : group.label)}
                              className={`flex-1 py-3.5 text-left text-[15px] font-semibold transition-colors ${
                                isCurrentPage
                                  ? 'text-[var(--color-blue-600)]'
                                  : 'text-[var(--color-ink-800)]'
                              }`}
                              aria-expanded={isOpen}
                            >
                              {group.label}
                            </button>
                          )}

                          {/* Toggle chevron only for groups with sub-links */}
                          {!group.href && group.links?.length > 0 && (
                            <button
                              type="button"
                              onClick={() => setOpenGroup(isOpen ? null : group.label)}
                              aria-label={`Toggle ${group.label}`}
                              className="grid place-items-center w-9 h-9 rounded-lg hover:bg-[var(--color-ink-50)] transition-colors text-[var(--color-ink-400)]"
                            >
                              <ChevronRight
                                size={15}
                                className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                              />
                            </button>
                          )}
                        </div>

                        {/* Sub-links accordion */}
                        <AnimatePresence initial={false}>
                          {isOpen && group.links?.length > 0 && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pb-3 flex flex-col gap-0.5">
                                {group.links.map((link) => {
                                  const isLinkActive = pathname === link.href;
                                  return (
                                    <Link
                                      key={link.href}
                                      href={link.href}
                                      onClick={onClose}
                                      className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-[13.5px] font-medium transition-all ${
                                        isLinkActive
                                          ? 'bg-[var(--color-blue-50)] text-[var(--color-blue-700)]'
                                          : 'text-[var(--color-ink-600)] hover:bg-[var(--color-ink-50)] hover:text-[var(--color-ink-900)]'
                                      }`}
                                    >
                                      <span>{link.label}</span>
                                      <ChevronRight size={13} className="text-[var(--color-ink-300)]" />
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* CTA buttons */}
                <motion.div
                  className="mt-7 pt-6 border-t border-[var(--color-ink-100)] flex flex-col gap-2.5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href="/contact?intent=workforce"
                    onClick={onClose}
                    className="flex items-center justify-center gap-2 w-full bg-[var(--color-blue-600)] text-white text-[14px] font-semibold px-4 py-3.5 rounded-xl hover:bg-[var(--color-blue-700)] active:scale-[0.98] transition-all shadow-md shadow-blue-600/25"
                  >
                    Hire workers <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/contact?intent=apply"
                    onClick={onClose}
                    className="flex items-center justify-center gap-2 w-full bg-[var(--color-ink-900)] text-white text-[14px] font-semibold px-4 py-3.5 rounded-xl hover:bg-[var(--color-ink-800)] active:scale-[0.98] transition-all"
                  >
                    Apply for a job <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="flex items-center justify-center gap-2 w-full border border-[var(--color-ink-200)] text-[var(--color-ink-700)] text-[14px] font-semibold px-4 py-3 rounded-xl hover:bg-[var(--color-ink-50)] active:scale-[0.98] transition-all"
                  >
                    Contact us
                  </Link>
                </motion.div>

                {/* Response promise card */}
                <motion.div
                  className="mt-5 rounded-xl p-4"
                  style={{ background: 'var(--color-blue-50)', border: '1px solid var(--color-blue-100)' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <Clock3 size={11} className="text-[var(--color-blue-600)]" />
                    <span className="text-[10.5px] font-bold tracking-[0.18em] text-[var(--color-blue-700)] uppercase">
                      Response Promise
                    </span>
                  </div>
                  <p className="text-[13px] text-[var(--color-ink-700)] leading-relaxed">
                    We reply to new requests within{' '}
                    <span className="font-semibold text-[var(--color-ink-900)]">5–10 minutes</span>{' '}
                    during business hours.
                  </p>
                </motion.div>

              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}