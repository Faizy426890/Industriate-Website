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

  if (pathname === '/contact') return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40"
        >
          <Link
            href="/contact?intent=workforce"
            className="group inline-flex items-center gap-2 sm:gap-2.5 bg-[var(--color-blue-600)] text-white text-[13px] sm:text-[13.5px] font-semibold px-4 sm:px-5 py-3 sm:py-3.5 rounded-full shadow-lg shadow-blue-600/30 hover:shadow-xl hover:bg-[var(--color-blue-700)] transition-all duration-400"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
            Hire workers
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
