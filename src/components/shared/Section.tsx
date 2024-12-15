import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '',
  title
}) => {
  return (
    <section className={`py-12 ${className}`}>
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-6"
        >
          {title}
        </motion.h2>
      )}
      {children}
    </section>
  );
};