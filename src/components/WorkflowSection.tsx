import React from 'react';
import { Download, PlayCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const content = {
  en: {
    title: "How It Works",
    subtitle: "Simple steps to get started",
    steps: [
      {
        title: "Setup",
        description: "Install required software and register on the platform",
        icon: Download
      },
      {
        title: "Training",
        description: "Complete training materials and practice tasks",
        icon: PlayCircle
      },
      {
        title: "Start Working",
        description: "Submit qualification task and begin earning",
        icon: CheckCircle2
      }
    ]
  },
  uz: {
    title: "Qanday Ishlaydi",
    subtitle: "Boshlash uchun oddiy qadamlar",
    steps: [
      {
        title: "O'rnatish",
        description: "Zarur dasturlarni o'rnating va platformada ro'yxatdan o'ting",
        icon: Download
      },
      {
        title: "O'qish",
        description: "O'quv materiallarini va amaliy vazifalarni bajaring",
        icon: PlayCircle
      },
      {
        title: "Ishlashni Boshlash",
        description: "Malaka vazifasini topshiring va pul ishlashni boshlang",
        icon: CheckCircle2
      }
    ]
  },
  kz: {
    title: "Қалай Жұмыс Істейді",
    subtitle: "Бастау үшін қарапайым қадамдар",
    steps: [
      {
        title: "Орнату",
        description: "Қажетті бағдарламаларды орнатып, платформада тіркеліңіз",
        icon: Download
      },
      {
        title: "Оқыту",
        description: "Оқу материалдарын және практикалық тапсырмаларды орындаңыз",
        icon: PlayCircle
      },
      {
        title: "Жұмысты Бастау",
        description: "Біліктілік тапсырмасын тапсырып, табыс таба бастаңыз",
        icon: CheckCircle2
      }
    ]
  },
  ru: {
    title: "Как Это Работает",
    subtitle: "Простые шаги для начала работы",
    steps: [
      {
        title: "Установка",
        description: "Установите необходимое ПО и зарегистрируйтесь на платформе",
        icon: Download
      },
      {
        title: "Обучение",
        description: "Изучите материалы и выполните практические задания",
        icon: PlayCircle
      },
      {
        title: "Начало Работы",
        description: "Сдайте квалификационное задание и начните зарабатывать",
        icon: CheckCircle2
      }
    ]
  }
};

export function WorkflowSection({ language }) {
  const t = content[language];

  return (
    <section id="workflow" className="py-24 bg-gray-50">
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
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {t.steps.map((step, index) => (
              <div key={index} className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  {step.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {step.description}
                </dd>
                {index < t.steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-8 top-4 h-6 w-6 text-gray-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}