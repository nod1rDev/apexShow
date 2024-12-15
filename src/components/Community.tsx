import React from 'react';
import { Users, MessageCircle } from 'lucide-react';

const content = {
  en: {
    title: "Join Our Community",
    subtitle: "Connect with fellow annotators and get support",
    channels: [
      {
        title: "Annotation Team Group",
        description: "Join our active community of annotators",
        icon: Users,
        link: "https://t.me/apexbart_annotation"
      },
      {
        title: "Support Channel",
        description: "Get help and updates from our team",
        icon: MessageCircle,
        link: "https://t.me/appen_voice"
      }
    ]
  },
  uz: {
    title: "Jamoamizga Qo'shiling",
    subtitle: "Boshqa annotatorlar bilan bog'laning va yordam oling",
    channels: [
      {
        title: "Annotatsiya Jamoasi Guruhi",
        description: "Faol annotatorlar jamoasiga qo'shiling",
        icon: Users,
        link: "https://t.me/apexbart_annotation"
      },
      {
        title: "Yordam Kanali",
        description: "Jamoamizdan yordam va yangilanishlar oling",
        icon: MessageCircle,
        link: "https://t.me/appen_voice"
      }
    ]
  },
  kz: {
    title: "Қауымдастығымызға Қосылыңыз",
    subtitle: "Басқа аннотаторлармен байланысып, қолдау алыңыз",
    channels: [
      {
        title: "Аннотация Тобының Чаты",
        description: "Белсенді аннотаторлар қауымдастығына қосылыңыз",
        icon: Users,
        link: "https://t.me/apexbart_annotation"
      },
      {
        title: "Қолдау Арнасы",
        description: "Топтан көмек және жаңартулар алыңыз",
        icon: MessageCircle,
        link: "https://t.me/appen_voice"
      }
    ]
  },
  ru: {
    title: "Присоединяйтесь к Сообществу",
    subtitle: "Общайтесь с другими аннотаторами и получайте поддержку",
    channels: [
      {
        title: "Группа Команды Аннотаторов",
        description: "Присоединяйтесь к активному сообществу аннотаторов",
        icon: Users,
        link: "https://t.me/apexbart_annotation"
      },
      {
        title: "Канал Поддержки",
        description: "Получайте помощь и обновления от нашей команды",
        icon: MessageCircle,
        link: "https://t.me/appen_voice"
      }
    ]
  }
};

export function Community({ language }) {
  const t = content[language];

  return (
    <section id="community" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {t.subtitle}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {t.channels.map((channel, index) => (
              <a
                key={index}
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-white transition-all duration-200"
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-gray-200">
                  <channel.icon className="h-6 w-6 text-gray-600 group-hover:text-gray-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {channel.title}
                  </div>
                  <p className="mt-1 text-gray-600">
                    {channel.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}