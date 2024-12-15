import type { Variants } from 'framer-motion';

export const createStaggeredAnimation = (
  staggerChildren = 0.1,
  delayChildren = 0
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const createFadeInUpAnimation = (
  y = 20,
  duration = 0.5
): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration },
  },
});

export const createScaleAnimation = (
  scale = 0.95,
  duration = 0.2
): Variants => ({
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale },
  transition: { duration },
}); 