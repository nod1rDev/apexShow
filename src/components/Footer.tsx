import React from 'react';

const content = {
  en: {
    copyright: "© 2024 ApexBart Solutions. All rights reserved.",
    contact: {
      title: "Contact",
      support: "Technical Support",
      payments: "Payment Issues",
      business: "Business Inquiries"
    }
  },
  uz: {
    copyright: "© 2024 ApexBart Solutions. Barcha huquqlar himoyalangan.",
    contact: {
      title: "Aloqa",
      support: "Texnik Yordam",
      payments: "To'lov Masalalari",
      business: "Biznes Takliflar"
    }
  },
  kz: {
    copyright: "© 2024 ApexBart Solutions. Барлық құқықтар қорғалған.",
    contact: {
      title: "Байланыс",
      support: "Техникалық Қолдау",
      payments: "Төлем Мәселелері",
      business: "Бизнес Сұраулар"
    }
  },
  ru: {
    copyright: "© 2024 ApexBart Solutions. Все права защищены.",
    contact: {
      title: "Контакты",
      support: "Техническая Поддержка",
      payments: "Вопросы Оплаты",
      business: "Деловые Запросы"
    }
  }
};

export function Footer({ language }) {
  const t = content[language];

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="border-t border-gray-900/10 pt-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900">
                {t.contact.title}
              </h3>
              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href="https://t.me/appen_voice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {t.contact.support}: @appen_voice
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/apexbart_admin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {t.contact.payments}: @apexbart_admin
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/whynotbart"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {t.contact.business}: @whynotbart
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-500">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}