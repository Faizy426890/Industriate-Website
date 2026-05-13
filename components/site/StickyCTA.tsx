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
          /*
            Animate in from the right (x: 80) rather than from below (y: 20).
            This guarantees the button is fully off-screen on its first paint
            frame — it never touches the edge visibly before sliding into place.
          */
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 80 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '16px',
            zIndex: 40,
          }}
        >
          <Link
            href="/contact?intent=workforce"
            className="group inline-flex items-center gap-2 sm:gap-2.5 bg-[var(--color-blue-600)] text-white text-[13px] sm:text-[13.5px] font-semibold px-4 sm:px-5 py-3 sm:py-3.5 rounded-full shadow-lg shadow-blue-600/30 hover:shadow-xl hover:bg-[var(--color-blue-700)] transition-all duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse flex-shrink-0" />
            Hire workers
            <ArrowUpRight size={14} className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}