import type { ReactNode } from 'react';

import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

const variants = {
  up: {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  down: {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  left: {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  right: {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
};

export const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: ScrollRevealProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      variants={variants[direction]}
      className={className}
    >
      {children}
    </motion.div>
  );
}; 