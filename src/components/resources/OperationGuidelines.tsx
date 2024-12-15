import React from 'react';
import { ListChecks } from 'lucide-react';

const guidelines = {
  en: {
    title: "Operation Guidelines",
    steps: [
      {
        title: "Account Setup",
        items: [
          "One account per device only",
          "Inform admins for new device access",
          "Download LiFTVoiceApp from the provided link"
        ]
      },
      {
        title: "Installation & Login",
        items: [
          "Double-click to open the application",
          "Select appropriate server and language (English/Chinese)",
          "Click 'Yes' on first login and input username"
        ]
      },
      {
        title: "Working Process",
        items: [
          "Select and confirm working batch",
          "Use template key for automatic task assignment",
          "Save work periodically to prevent data loss",
          "Submit completed batches for QC processing"
        ]
      },
      {
        title: "Quality Control",
        items: [
          "Report transcription errors immediately",
          "Flag non-target language audio",
          "Maintain required accuracy levels",
          "Follow annotation guidelines strictly"
        ]
      }
    ]
  },
  // Add other languages...
};

export function OperationGuidelines({ language }) {
  const t = guidelines[language] || guidelines.en;

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-6">
        <ListChecks className="h-5 w-5 text-indigo-600" />
        <h3 className="text-xl font-semibold">{t.title}</h3>
      </div>
      <div className="grid gap-6">
        {t.steps.map((step, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">{step.title}</h4>
            <ul className="space-y-2">
              {step.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}