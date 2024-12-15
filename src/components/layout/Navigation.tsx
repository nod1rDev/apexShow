import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const navItems = [
  { key: 'home', path: '/' },
  { key: 'services', path: '/services' },
  { key: 'about', path: '/about' },
  { key: 'contact', path: '/contact' }
] as const;

export const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map(({ key, path }) => (
        <NavLink
          key={key}
          to={path}
          className={({ isActive }) =>
            `text-sm font-medium transition-colors ${
              isActive 
                ? 'text-blue-600' 
                : 'text-gray-600 hover:text-blue-600'
            }`
          }
        >
          {t(`nav.${key}`)}
        </NavLink>
      ))}
    </nav>
  );
}; 