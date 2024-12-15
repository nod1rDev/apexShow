import React from 'react';
import { Keyboard } from 'lucide-react';

const shortcuts = [
  { keys: "Tab", action: "Play audio" },
  { keys: "Alt + Backspace", action: "Merge segment" },
  { keys: "Ctrl + Shift + F12", action: "Open labeling dictionary" },
  { keys: "Alt + < >", action: "Navigate to previous/next segment" },
  { keys: "Ctrl + Shift + 9", action: "View character count in segment" },
  { keys: "Ctrl + Shift + S", action: "Save work" }
];

const content = {
  en: {
    title: "Shortcut Keys",
    subtitle: "Speed up your workflow with these keyboard shortcuts"
  },
  uz: {
    title: "Tezkor Tugmalar",
    subtitle: "Ish jarayonini tezlashtirish uchun klaviatura tugmalari"
  },
  // Add other languages...
};

export function ShortcutKeys({ language }) {
  const t = content[language] || content.en;

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <Keyboard className="h-5 w-5 text-indigo-600" />
        <h3 className="text-xl font-semibold">{t.title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{t.subtitle}</p>
      <div className="grid gap-2">
        {shortcuts.map((shortcut, index) => (
          <div key={index} className="flex justify-between p-3 bg-gray-50 rounded-lg">
            <kbd className="px-2 py-1 bg-white border border-gray-200 rounded shadow-sm font-mono text-sm">
              {shortcut.keys}
            </kbd>
            <span className="text-gray-600">{shortcut.action}</span>
          </div>
        ))}
      </div>
    </div>
  );
}