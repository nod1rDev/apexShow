import type { ReactNode } from 'react';

import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion';

interface HoverCardProps {
  children: ReactNode;
  className?: string;
}

export const HoverCard = ({ children, className = '' }: HoverCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 ${className}`}
      onMouseMove={handleMouseMove}
      style={{
        background: useMotionTemplate`
          radial-gradient(
            circle at ${mouseX}px ${mouseY}px,
            rgba(var(--color-primary-500), 0.1),
            transparent 80%
          )
        `,
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              circle at ${mouseX}px ${mouseY}px,
              rgba(var(--color-primary-500), 0.15),
              transparent 80%
            )
          `,
        }}
        whileHover={{ opacity: 1 }}
      />
      {children}
    </motion.div>
  );
}; 