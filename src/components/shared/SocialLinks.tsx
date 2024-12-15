import React from 'react';
import { Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    icon: <Facebook className="w-5 h-5" />,
    url: 'https://facebook.com/apexbart'
  },
  {
    name: 'Instagram',
    icon: <Instagram className="w-5 h-5" />,
    url: 'https://instagram.com/apexbart'
  },
  {
    name: 'Twitter',
    icon: <Twitter className="w-5 h-5" />,
    url: 'https://twitter.com/ApexBart'
  },
  {
    name: 'Telegram',
    icon: <MessageCircle className="w-5 h-5" />,
    url: 'https://t.me/apexbart_fr'
  }
];

export const SocialLinks: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
          title={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};