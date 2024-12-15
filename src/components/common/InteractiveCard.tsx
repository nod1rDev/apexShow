import type { ReactNode } from 'react';

import { motion } from 'framer-motion';

interface InteractiveCardProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  hoverScale?: number;
}

export const InteractiveCard = ({
  children,
  onClick,
  className = '',
  hoverScale = 1.02,
}: InteractiveCardProps) => {
  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md 
                 transition-shadow ${className}`}
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}; 