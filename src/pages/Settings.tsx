import { useState } from 'react';

import { motion } from 'framer-motion';
import {
  Bell,
  Globe,
  Lock,
  Moon,
  Shield,
  User,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { AnimatedButton } from '@/components/common/AnimatedButton';
import { Card3D } from '@/components/common/Card3D';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';

interface SettingsSection {
  id: string;
  icon: typeof User;
  title: string;
  description: string;
}

const sections: SettingsSection[] = [
  {
    id: 'appearance',
    icon: Moon,
    title: 'settings.appearance.title',
    description: 'settings.appearance.description',
  },
  {
    id: 'language',
    icon: Globe,
    title: 'settings.language.title',
    description: 'settings.language.description',
  },
  {
    id: 'notifications',
    icon: Bell,
    title: 'settings.notifications.title',
    description: 'settings.notifications.description',
  },
  {
    id: 'security',
    icon: Shield,
    title: 'settings.security.title',
    description: 'settings.security.description',
  },
];

export const Settings = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState('appearance');
  const [securitySettings, setSecuritySettings] = useState({
    twoFactor: false,
    loginAlerts: true,
    deviceHistory: true,
  });
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    push: true,
    marketing: false,
  });

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'appearance':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {t('settings.appearance.theme')}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t('settings.appearance.themeDescription')}
                </p>
              </div>
              <button
                onClick={toggleTheme}
                className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full 
                         border-2 border-transparent transition-colors duration-200 ease-in-out 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                         bg-gray-200 dark:bg-gray-700"
              >
                <span
                  className={`${
                    theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
                  } pointer-events-none relative inline-block h-5 w-5 transform rounded-full 
                  bg-white shadow ring-0 transition duration-200 ease-in-out`}
                >
                  <span
                    className={`${
                      theme === 'dark'
                        ? 'opacity-0 duration-100 ease-out'
                        : 'opacity-100 duration-200 ease-in'
                    } absolute inset-0 flex h-full w-full items-center justify-center transition-opacity`}
                  >
                    <Moon className="h-3 w-3 text-gray-400" />
                  </span>
                </span>
              </button>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            {Object.entries(notificationSettings).map(([key, enabled]) => (
              <div key={key} className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {t(`settings.notifications.${key}.title`)}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t(`settings.notifications.${key}.description`)}
                  </p>
                </div>
                <button
                  onClick={() =>
                    setNotificationSettings({
                      ...notificationSettings,
                      [key]: !enabled,
                    })
                  }
                  className={`${
                    enabled
                      ? 'bg-blue-600'
                      : 'bg-gray-200 dark:bg-gray-700'
                  } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full 
                  border-2 border-transparent transition-colors duration-200 ease-in-out 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                >
                  <span
                    className={`${
                      enabled ? 'translate-x-5' : 'translate-x-0'
                    } pointer-events-none relative inline-block h-5 w-5 transform rounded-full 
                    bg-white shadow ring-0 transition duration-200 ease-in-out`}
                  />
                </button>
              </div>
            ))}
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            {Object.entries(securitySettings).map(([key, enabled]) => (
              <div key={key} className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {t(`settings.security.${key}.title`)}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t(`settings.security.${key}.description`)}
                  </p>
                </div>
                <button
                  onClick={() =>
                    setSecuritySettings({
                      ...securitySettings,
                      [key]: !enabled,
                    })
                  }
                  className={`${
                    enabled
                      ? 'bg-blue-600'
                      : 'bg-gray-200 dark:bg-gray-700'
                  } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full 
                  border-2 border-transparent transition-colors duration-200 ease-in-out 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                >
                  <span
                    className={`${
                      enabled ? 'translate-x-5' : 'translate-x-0'
                    } pointer-events-none relative inline-block h-5 w-5 transform rounded-full 
                    bg-white shadow ring-0 transition duration-200 ease-in-out`}
                  />
                </button>
              </div>
            ))}

            <div className="pt-6">
              <AnimatedButton
                variant="outline"
                className="w-full"
                onClick={() => {
                  // TODO: Implement password change
                }}
              >
                <Lock className="w-4 h-4 mr-2" />
                {t('settings.security.changePassword')}
              </AnimatedButton>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:flex md:items-center md:justify-between"
        >
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl sm:truncate">
              {t('settings.title')}
            </h2>
          </div>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Settings Navigation */}
          <Card3D className="lg:col-span-1">
            <nav className="space-y-1">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`${
                      activeSection === section.id
                        ? 'bg-blue-50 border-blue-500 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800'
                    } flex items-center px-3 py-2 text-sm font-medium border-l-4 w-full`}
                  >
                    <Icon
                      className={`${
                        activeSection === section.id
                          ? 'text-blue-500 dark:text-blue-400'
                          : 'text-gray-400'
                      } flex-shrink-0 -ml-1 mr-3 h-6 w-6`}
                    />
                    <span className="truncate">{t(section.title)}</span>
                  </button>
                );
              })}
            </nav>
          </Card3D>

          {/* Settings Content */}
          <Card3D className="lg:col-span-2">
            <div className="px-4 py-5 sm:p-6">{renderSectionContent()}</div>
          </Card3D>
        </div>
      </div>
    </div>
  );
};

export default Settings; 