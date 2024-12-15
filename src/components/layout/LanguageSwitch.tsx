import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'uz', name: 'O\'zbekcha' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
        <Globe className="w-5 h-5" />
        <span>{languages.find(lang => lang.code === i18n.language)?.name}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible 
                    group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="py-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => i18n.changeLanguage(lang.code)}
              className={`block w-full text-left px-4 py-2 text-sm ${
                i18n.language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              } hover:bg-blue-50 hover:text-blue-600`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}; 