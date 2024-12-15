import React from 'react';
import { Clock, DollarSign, Calendar, Award } from 'lucide-react';

const benefits = {
  en: [
    {
      title: "Flexible Schedule",
      description: "Work at your own pace with our flexible time arrangements",
      icon: Clock
    },
    {
      title: "Competitive Pay",
      description: "$12/hour for quality work, with weekly payments",
      icon: DollarSign
    },
    {
      title: "Regular Income",
      description: "Weekly payments via Click, Humo, or other methods",
      icon: Calendar
    },
    {
      title: "Growth Opportunities",
      description: "Advance to QA roles and team leadership positions",
      icon: Award
    }
  ],
  uz: [
    {
      title: "Moslashuvchan Jadval",
      description: "O'zingizga qulay vaqtda ishlang",
      icon: Clock
    },
    {
      title: "Raqobatbardosh To'lov",
      description: "Sifatli ish uchun soatiga $12",
      icon: DollarSign
    },
    {
      title: "Muntazam Daromad",
      description: "Click, Humo orqali haftalik to'lovlar",
      icon: Calendar
    },
    {
      title: "O'sish Imkoniyatlari",
      description: "QA va jamoa rahbari lavozimlariga ko'tarilish",
      icon: Award
    }
  ],
  kz: [
    {
      title: "Икемді Кесте",
      description: "Өзіңізге ыңғайлы уақытта жұмыс істеңіз",
      icon: Clock
    },
    {
      title: "Бәсекеге Қабілетті Төлем",
      description: "Сапалы жұмыс үшін сағатына $12",
      icon: DollarSign
    },
    {
      title: "Тұрақты Табыс",
      description: "Click, Humo арқылы апта сайынғы төлемдер",
      icon: Calendar
    },
    {
      title: "Даму Мүмкіндіктері",
      description: "QA және топ жетекшісі позицияларына көтерілу",
      icon: Award
    }
  ],
  ru: [
    {
      title: "Гибкий График",
      description: "Работайте в удобное для вас время",
      icon: Clock
    },
    {
      title: "Конкурентная Оплата",
      description: "$12/час за качественную работу",
      icon: DollarSign
    },
    {
      title: "Регулярный Доход",
      description: "Еженедельные выплаты через Click, Humo",
      icon: Calendar
    },
    {
      title: "Возможности Роста",
      description: "Продвижение до позиций QA и руководителя команды",
      icon: Award
    }
  ]
};

export function Benefits({ language }) {
  const currentBenefits = benefits[language];

  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Benefits</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {currentBenefits.map((benefit, index) => (
              <div key={index} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <benefit.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {benefit.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{benefit.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}