import React from 'react';
import { ArrowRight } from 'lucide-react';

const content = {
  en: {
    welcome: "Welcome to our Annotation Project!",
    subtitle: "Join us in advancing AI technology through high-quality language annotation",
    cta: "Join Now"
  },
  uz: {
    welcome: "Assalomu alaykum! Annotatsiya loyihamizga xush kelibsiz!",
    subtitle: "AI texnologiyalarini rivojlantirishda ishtirok eting!",
    cta: "Hozir Boshlang"
  },
  kz: {
    welcome: "Сәлеметсіз бе! Біздің аннотация жобамызға қош келдіңіз!",
    subtitle: "AI технологиясын дамытуға өз үлесіңізді қосыңыз!",
    cta: "Қазір Бастау"
  },
  ru: {
    welcome: "Добро пожаловать на наш проект по аннотации!",
    subtitle: "Примите участие в развитии AI технологий!",
    cta: "Начать Сейчас"
  }
};

export function Hero({ language }) {
  const t = content[language];

  return (
    <div className="relative isolate pt-14">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {t.welcome}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t.subtitle}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#overview"
                className="group rounded-full px-6 py-3 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-all duration-200 ease-in-out"
              >
                <span className="flex items-center gap-2">
                  {t.cta}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}