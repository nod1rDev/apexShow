import { motion } from 'framer-motion';

import { LoadingSpinner } from './LoadingSpinner';

export const PageLoading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-gray-50"
    >
      <div className="text-center">
        <LoadingSpinner size="lg" color="#2563eb" />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
}; 