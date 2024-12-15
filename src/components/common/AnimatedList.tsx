import type { ReactNode } from 'react';

import { motion } from 'framer-motion';

interface AnimatedListProps {
  items: ReactNode[];
  staggerDelay?: number;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const AnimatedList = ({
  items,
  staggerDelay = 0.1,
  className = '',
}: AnimatedListProps) => {
  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
          transition={{ delay: index * staggerDelay }}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}; 