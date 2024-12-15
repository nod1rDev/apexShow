import type { ReactNode } from 'react';

import { motion } from 'framer-motion';

interface AnimationProps {
  children: ReactNode;
  delay?: number;
}

export const FadeIn = ({ children, delay = 0 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

export const SlideIn = ({ children, delay = 0 }: AnimationProps) => (
  <motion.div
    initial={{ x: -20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, delay = 0 }: AnimationProps) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

export const PopIn = ({ children, delay = 0 }: AnimationProps) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay,
    }}
  >
    {children}
  </motion.div>
); 