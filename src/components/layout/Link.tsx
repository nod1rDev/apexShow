import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ href, children, className = '' }) => {
  const baseClasses = 'text-gray-700 hover:text-gray-900 transition-colors duration-200';
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  // Use external link if it starts with http or https
  if (href.startsWith('http')) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  // Use RouterLink for internal navigation
  return (
    <RouterLink to={href} className={combinedClasses}>
      {children}
    </RouterLink>
  );
};