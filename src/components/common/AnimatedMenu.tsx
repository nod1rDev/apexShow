import type { ReactNode } from 'react';

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AnimatedMenuProps {
  label: string;
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export const AnimatedMenu = ({
  label,
  children,
  isOpen,
  onToggle,
  className = '',
}: AnimatedMenuProps) => {
  const shouldReduceMotion = useReducedMotion();

  const menuVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: shouldReduceMotion ? 0 : 0.2,
        ease: 'easeOut',
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.2,
        ease: 'easeIn',
      },
    },
  };

  return (
    <div className={className}>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-lg bg-white px-4 py-2 text-left 
                 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring 
                 focus-visible:ring-blue-500 focus-visible:ring-opacity-50 dark:bg-gray-800 
                 dark:text-gray-200 dark:hover:bg-gray-700"
      >
        <span>{label}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="overflow-hidden"
          >
            <div className="px-4 py-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 