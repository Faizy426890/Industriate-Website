'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export function StickyCTA() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState(false);

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
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 120 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed',
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)',
            zIndex: 9996,
          }}
        >
          <Link
            href="/contact?intent=workforce"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              padding: '20px 14px',
              borderRadius: '12px 0 0 12px',
              background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
              color: '#fff',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: hovered
                ? '-6px 0 32px rgba(99,102,241,0.45), -2px 0 12px rgba(0,0,0,0.4)'
                : '-4px 0 24px rgba(0,0,0,0.35), -1px 0 6px rgba(0,0,0,0.2)',
              borderLeft: '1px solid rgba(255,255,255,0.08)',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              transition: 'box-shadow 0.3s ease, transform 0.3s ease',
              transform: hovered ? 'translateX(-4px)' : 'translateX(0)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Shimmer line */}
            <span
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '1px',
                height: '100%',
                background: 'linear-gradient(180deg, transparent 0%, rgba(129,140,248,0.6) 50%, transparent 100%)',
                opacity: hovered ? 1 : 0,
                transition: 'opacity 0.3s ease',
              }}
            />

            {/* Pulse dot */}
            <span style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <motion.span
                animate={{ scale: [1, 1.6, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: 'rgba(129,140,248,0.5)',
                }}
              />
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#818cf8',
                  position: 'relative',
                  zIndex: 1,
                  flexShrink: 0,
                }}
              />
            </span>

            {/* Label */}
            <span style={{ color: 'rgba(255,255,255,0.92)', flexShrink: 0 }}>
              {t.stickyCta.label}
            </span>

            {/* Arrow */}
            <motion.span
              animate={hovered ? { y: [0, -3, 0] } : { y: 0 }}
              transition={{ duration: 0.6, repeat: hovered ? Infinity : 0 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#818cf8',
                flexShrink: 0,
                rotate: '-90deg',
              }}
            >
              <ArrowRight size={13} />
            </motion.span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
