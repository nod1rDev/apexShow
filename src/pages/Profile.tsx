import { useState } from 'react';

import { motion } from 'framer-motion';
import {
  Camera,
  Mail,
  MapPin,
  Phone,
  User,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { AnimatedButton } from '@/components/common/AnimatedButton';
import { Card3D } from '@/components/common/Card3D';
import { useAuth } from '@/contexts/AuthContext';

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
}

export const Profile = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+1 234 567 890',
    location: 'New York, USA',
    bio: 'Software Engineer passionate about building great products.',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement profile update
    setIsEditing(false);
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
              {t('profile.title')}
            </h2>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <AnimatedButton
              onClick={() => setIsEditing(!isEditing)}
              variant={isEditing ? 'secondary' : 'primary'}
            >
              {isEditing ? t('common.cancel') : t('common.edit')}
            </AnimatedButton>
          </div>
        </motion.div>

        <div className="mt-6">
          <Card3D>
            <div className="shadow sm:rounded-md">
              <div className="px-4 py-5 bg-white dark:bg-gray-800 space-y-6 sm:p-6">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
                      <img
                        src={`https://api.dicebear.com/6.x/initials/svg?seed=${user?.name}`}
                        alt={user?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {isEditing && (
                      <label
                        htmlFor="photo-upload"
                        className="absolute bottom-0 right-0 p-1.5 rounded-full 
                                 bg-blue-600 text-white cursor-pointer hover:bg-blue-700"
                      >
                        <Camera className="w-4 h-4" />
                        <input
                          id="photo-upload"
                          name="photo"
                          type="file"
                          className="sr-only"
                          accept="image/*"
                        />
                      </label>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {profileData.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {profileData.email}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t('profile.name')}
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          disabled={!isEditing}
                          value={profileData.name}
                          onChange={(e) =>
                            setProfileData({ ...profileData, name: e.target.value })
                          }
                          className="input pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t('profile.email')}
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          disabled={!isEditing}
                          value={profileData.email}
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              email: e.target.value,
                            })
                          }
                          className="input pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t('profile.phone')}
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          disabled={!isEditing}
                          value={profileData.phone}
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              phone: e.target.value,
                            })
                          }
                          className="input pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t('profile.location')}
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          disabled={!isEditing}
                          value={profileData.location}
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              location: e.target.value,
                            })
                          }
                          className="input pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {t('profile.bio')}
                    </label>
                    <div className="mt-1">
                      <textarea
                        rows={4}
                        disabled={!isEditing}
                        value={profileData.bio}
                        onChange={(e) =>
                          setProfileData({ ...profileData, bio: e.target.value })
                        }
                        className="input resize-none"
                      />
                    </div>
                  </div>

                  {isEditing && (
                    <div className="flex justify-end space-x-3">
                      <AnimatedButton type="submit" variant="primary">
                        {t('common.save')}
                      </AnimatedButton>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </Card3D>
        </div>
      </div>
    </div>
  );
};

export default Profile; 