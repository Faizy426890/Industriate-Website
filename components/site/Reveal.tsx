'use client';

import { motion, useReducedMotion, type Variants, type HTMLMotionProps } from 'framer-motion';
import { type ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
  amount?: number;
  once?: boolean;
} & Omit<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'whileInView' | 'viewport' | 'transition' | 'variants'>;

export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className,
  amount = 0.2,
  once = true,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();

  const offsets: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: 18 },
    down: { x: 0, y: -18 },
    left: { x: 18, y: 0 },
    right: { x: -18, y: 0 },
    none: { x: 0, y: 0 },
  };
  const offset = reduce ? { x: 0, y: 0 } : offsets[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    show: { opacity: 1, x: 0, y: 0, transition: { duration, delay, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: '0px 0px -60px 0px' }}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className,
  delayChildren = 0.05,
  staggerChildren = 0.08,
  amount = 0.15,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  amount?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: '0px 0px -40px 0px' }}
      variants={{
        hidden: {},
        show: { transition: { delayChildren, staggerChildren } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = 'up',
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
}) {
  const offsets: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: 16 },
    down: { x: 0, y: -16 },
    left: { x: 16, y: 0 },
    right: { x: -16, y: 0 },
    none: { x: 0, y: 0 },
  };
  const offset = offsets[direction];

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...offset },
        show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}
