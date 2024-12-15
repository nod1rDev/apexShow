import React from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

const content = {
  en: {
    title: "Quality Requirements",
    requirements: [
      {
        title: "Data Accuracy",
        description: "≥ 96% accuracy for text, labels, and field boundaries",
        icon: CheckCircle2
      },
      {
        title: "Number Accuracy",
        description: "≥ 95% sentence accuracy required",
        icon: CheckCircle2
      },
      {
        title: "Data Restrictions",
        description: "Synthetic sound data is strictly prohibited",
        icon: AlertTriangle
      }
    ]
  },
  uz: {
    title: "Sifat Talablari",
    requirements: [
      {
        title: "Ma'lumotlar Aniqligi",
        description: "Matn, belgilar va maydon chegaralari uchun ≥ 96% aniqlik",
        icon: CheckCircle2
      },
      {
        title: "Raqamlar Aniqligi",
        description: "Gaplar aniqligi ≥ 95% bo'lishi kerak",
        icon: CheckCircle2
      },
      {
        title: "Ma'lumotlar Cheklovlari",
        description: "Sintetik ovoz ma'lumotlari qat'iyan taqiqlanadi",
        icon: AlertTriangle
      }
    ]
  },
  // Add other languages...
};

export function QualityRequirements({ language }) {
  const t = content[language] || content.en;

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">{t.title}</h3>
      <div className="grid gap-4">
        {t.requirements.map((req, index) => (
          <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
            <req.icon className="h-5 w-5 text-indigo-600 mt-1" />
            <div>
              <h4 className="font-medium">{req.title}</h4>
              <p className="text-gray-600">{req.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}