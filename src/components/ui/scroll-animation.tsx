'use client';

import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

type ScrollAnimationProps = {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
};

export function ScrollAnimation({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getInitialStyles = () => {
    switch (direction) {
      case 'up':
        return { y: 50 };
      case 'down':
        return { y: -50 };
      case 'left':
        return { x: 50 };
      case 'right':
        return { x: -50 };
      default:
        return {};
    }
  };

  const initialStyles = getInitialStyles();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initialStyles }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : 'x' in initialStyles ? initialStyles.x : 0,
        y: isInView ? 0 : 'y' in initialStyles ? initialStyles.y : 0,
      }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
