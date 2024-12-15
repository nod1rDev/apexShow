import React from 'react';
import { Clock, DollarSign, Headphones, Laptop } from 'lucide-react';

const content = {
  en: {
    title: "Project Overview",
    subtitle: "Essential information about our annotation project",
    requirements: [
      {
        title: "Duration",
        description: "2 months project timeline",
        icon: Clock
      },
      {
        title: "Payment",
        description: "$12/hour for quality work",
        icon: DollarSign
      },
      {
        title: "Equipment",
        description: "Noise-canceling headphones required",
        icon: Headphones
      },
      {
        title: "System",
        description: "Windows 10 or Mac OS",
        icon: Laptop
      }
    ]
  },
  uz: {
    title: "Loyiha Haqida",
    subtitle: "Annotatsiya loyihasi haqida muhim ma'lumotlar",
    requirements: [
      {
        title: "Davomiyligi",
        description: "2 oylik loyiha muddati",
        icon: Clock
      },
      {
        title: "To'lov",
        description: "Sifatli ish uchun soatiga $12",
        icon: DollarSign
      },
      {
        title: "Jihozlar",
        description: "Shovqinni yo'qotuvchi quloqchinlar talab etiladi",
        icon: Headphones
      },
      {
        title: "Tizim",
        description: "Windows 10 yoki Mac OS",
        icon: Laptop
      }
    ]
  },
  kz: {
    title: "Жоба Туралы",
    subtitle: "Аннотация жобасы туралы маңызды ақпарат",
    requirements: [
      {
        title: "Ұзақтығы",
        description: "2 айлық жоба мерзімі",
        icon: Clock
      },
      {
        title: "Төлем",
        description: "Сапалы жұмыс үшін сағатына $12",
        icon: DollarSign
      },
      {
        title: "Жабдықтар",
        description: "Шуды басатын құлаққаптар қажет",
        icon: Headphones
      },
      {
        title: "Жүйе",
        description: "Windows 10 немесе Mac OS",
        icon: Laptop
      }
    ]
  },
  ru: {
    title: "Обзор Проекта",
    subtitle: "Важная информация о проекте аннотации",
    requirements: [
      {
        title: "Длительность",
        description: "Срок проекта 2 месяца",
        icon: Clock
      },
      {
        title: "Оплата",
        description: "$12/час за качественную работу",
        icon: DollarSign
      },
      {
        title: "Оборудование",
        description: "Требуются шумоподавляющие наушники",
        icon: Headphones
      },
      {
        title: "Система",
        description: "Windows 10 или Mac OS",
        icon: Laptop
      }
    ]
  }
};

export function ProjectOverview({ language }) {
  const t = content[language];

  return (
    <section id="overview" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {t.subtitle}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {t.requirements.map((item, index) => (
              <div key={index} className="flex flex-col items-start">
                <div className="rounded-lg bg-gray-50 p-2 ring-1 ring-gray-200/50">
                  <item.icon className="h-6 w-6 text-gray-600" />
                </div>
                <dt className="mt-4 font-semibold text-gray-900">{item.title}</dt>
                <dd className="mt-2 leading-7 text-gray-600">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}