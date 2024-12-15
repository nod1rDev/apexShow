import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { key: 'home', path: '/' },
  { key: 'services', path: '/services' },
  { key: 'about', path: '/about' },
  { key: 'contact', path: '/contact' }
] as const;

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          />

          {/* Navigation menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 bottom-0 w-3/4 bg-white shadow-xl z-50 md:hidden"
          >
            <nav className="flex flex-col p-6">
              {navItems.map(({ key, path }) => (
                <NavLink
                  key={key}
                  to={path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `py-3 px-4 text-lg font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`
                  }
                >
                  {t(`nav.${key}`)}
                </NavLink>
              ))}
              <NavLink
                to="/signup"
                onClick={onClose}
                className="mt-4 btn-primary text-center"
              >
                {t('nav.signup')}
              </NavLink>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}; 