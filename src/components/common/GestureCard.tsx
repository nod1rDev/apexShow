import type { ReactNode } from 'react';

import {
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';

interface GestureCardProps {
  children: ReactNode;
  onSwipe?: (direction: 'left' | 'right') => void;
  className?: string;
}

export const GestureCard = ({
  children,
  onSwipe,
  className = '',
}: GestureCardProps) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-30, 30]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (
    _: any,
    { offset }: { offset: { x: number } }
  ) => {
    if (Math.abs(offset.x) > 100) {
      onSwipe?.(offset.x > 0 ? 'right' : 'left');
    }
  };

  return (
    <motion.div
      style={{ x, rotate, opacity }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      whileTap={{ scale: 1.05 }}
      className={`cursor-grab active:cursor-grabbing ${className}`}
    >
      {children}
    </motion.div>
  );
}; 