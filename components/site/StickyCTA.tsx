'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';

export function StickyCTA() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Hide on contact page (form already there)
  if (pathname === '/contact') return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 right-5 z-40 hidden md:block"
        >
          <Link
            href="/contact?intent=workforce"
            className="group inline-flex items-center gap-2.5 bg-[var(--color-navy-900)] text-white text-[13.5px] font-semibold px-5 py-3.5 rounded-full shadow-elev hover:shadow-[0_18px_44px_-16px_rgba(15,23,42,0.55)] hover:bg-[var(--color-navy-700)] transition-all duration-400"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-400)] animate-pulse" />
            Request Workforce
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
