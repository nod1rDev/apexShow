import { useState } from 'react';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

// Form validation schema
const signUpSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  surname: z.string().min(2, 'Surname must be at least 2 characters'),
  birthday: z.string().refine((date) => {
    const age = new Date().getFullYear() - new Date(date).getFullYear();
    return age >= 18;
  }, 'You must be at least 18 years old'),
  location: z.string().min(2, 'Location is required'),
  nationality: z.string().min(2, 'Nationality is required'),
  email: z.string().email('Invalid email address'),
  telegram: z.string().optional(),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

export const SignUp = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    setStatus('loading');
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form data:', data);
      setStatus('success');
      reset();
    } catch (error) {
      setStatus('error');
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto"
      >
        <h1 className="text-3xl font-bold text-center mb-8">
          {t('signup.title')}
        </h1>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-green-100 text-green-700 p-4 rounded-lg text-center"
          >
            {t('signup.success')}
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="label" htmlFor="name">
                {t('signup.name')}
              </label>
              <input
                id="name"
                type="text"
                className={`input ${errors.name ? 'border-red-500' : ''}`}
                {...register('name')}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="label" htmlFor="surname">
                {t('signup.surname')}
              </label>
              <input
                id="surname"
                type="text"
                className={`input ${errors.surname ? 'border-red-500' : ''}`}
                {...register('surname')}
              />
              {errors.surname && (
                <p className="mt-1 text-sm text-red-600">{errors.surname.message}</p>
              )}
            </div>

            <div>
              <label className="label" htmlFor="birthday">
                {t('signup.birthday')}
              </label>
              <input
                id="birthday"
                type="date"
                className={`input ${errors.birthday ? 'border-red-500' : ''}`}
                {...register('birthday')}
              />
              {errors.birthday && (
                <p className="mt-1 text-sm text-red-600">{errors.birthday.message}</p>
              )}
            </div>

            <div>
              <label className="label" htmlFor="location">
                {t('signup.location')}
              </label>
              <input
                id="location"
                type="text"
                className={`input ${errors.location ? 'border-red-500' : ''}`}
                {...register('location')}
              />
              {errors.location && (
                <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
              )}
            </div>

            <div>
              <label className="label" htmlFor="nationality">
                {t('signup.nationality')}
              </label>
              <input
                id="nationality"
                type="text"
                className={`input ${errors.nationality ? 'border-red-500' : ''}`}
                {...register('nationality')}
              />
              {errors.nationality && (
                <p className="mt-1 text-sm text-red-600">{errors.nationality.message}</p>
              )}
            </div>

            <div>
              <label className="label" htmlFor="email">
                {t('signup.email')}
              </label>
              <input
                id="email"
                type="email"
                className={`input ${errors.email ? 'border-red-500' : ''}`}
                {...register('email')}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="label" htmlFor="telegram">
                {t('signup.telegram')}
              </label>
              <input
                id="telegram"
                type="text"
                className="input"
                {...register('telegram')}
              />
            </div>

            <motion.button
              type="submit"
              className="btn-primary w-full"
              disabled={status === 'loading'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === 'loading' ? (
                <span className="inline-flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t('signup.submit')}
                </span>
              ) : (
                t('signup.submit')
              )}
            </motion.button>

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-center"
              >
                An error occurred. Please try again.
              </motion.div>
            )}
          </form>
        )}
      </motion.div>
    </div>
  );
}; 