import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import {
  AlertCircle,
  CheckCircle,
  Info,
  X,
  XCircle,
} from 'lucide-react';

interface NotificationProps {
  type?: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message: string;
  isVisible: boolean;
  onClose: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const icons = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
  info: Info,
};

const colors = {
  success: 'text-green-400 dark:text-green-500',
  error: 'text-red-400 dark:text-red-500',
  warning: 'text-yellow-400 dark:text-yellow-500',
  info: 'text-blue-400 dark:text-blue-500',
};

export const Notification = ({
  type = 'info',
  title,
  message,
  isVisible,
  onClose,
  action,
}: NotificationProps) => {
  const Icon = icons[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed right-4 top-4 z-50 w-full max-w-sm overflow-hidden rounded-lg 
                   bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800"
        >
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Icon className={`h-6 w-6 ${colors[type]}`} />
              </div>
              <div className="ml-3 w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {title}
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {message}
                </p>
                {action && (
                  <div className="mt-3">
                    <button
                      onClick={action.onClick}
                      className="text-sm font-medium text-blue-600 hover:text-blue-500 
                               dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {action.label}
                    </button>
                  </div>
                )}
              </div>
              <div className="ml-4 flex flex-shrink-0">
                <button
                  onClick={onClose}
                  className="inline-flex rounded-md text-gray-400 hover:text-gray-500 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 