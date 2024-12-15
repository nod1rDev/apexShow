import { motion } from 'framer-motion';
import {
  Activity,
  BarChart3,
  Calendar,
  Users,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Card3D } from '@/components/common/Card3D';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { useAuth } from '@/contexts/AuthContext';

const stats = [
  {
    id: 1,
    name: 'Total Users',
    value: '10.5k',
    icon: Users,
    change: '+12%',
    changeType: 'positive',
  },
  {
    id: 2,
    name: 'Active Projects',
    value: '45',
    icon: Activity,
    change: '+8%',
    changeType: 'positive',
  },
  {
    id: 3,
    name: 'Revenue',
    value: '$50.2k',
    icon: BarChart3,
    change: '+23%',
    changeType: 'positive',
  },
  {
    id: 4,
    name: 'Scheduled Tasks',
    value: '120',
    icon: Calendar,
    change: '-5%',
    changeType: 'negative',
  },
];

export const Dashboard = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          {t('dashboard.welcome', { name: user?.name })}
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <ScrollReveal
                key={stat.id}
                delay={index * 0.1}
              >
                <Card3D className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <stat.icon
                          className="h-6 w-6 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            {stat.name}
                          </dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900 dark:text-white">
                              {stat.value}
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 px-5 py-3">
                    <div className="text-sm">
                      <span
                        className={`font-medium ${
                          stat.changeType === 'positive'
                            ? 'text-green-600 dark:text-green-400'
                            : 'text-red-600 dark:text-red-400'
                        }`}
                      >
                        {stat.change}
                      </span>
                      <span className="text-gray-500 dark:text-gray-300">
                        {' vs last month'}
                      </span>
                    </div>
                  </div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 