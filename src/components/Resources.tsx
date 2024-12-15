import {
  FileText,
  Video,
  HelpCircle,
  Download,
  ExternalLink,
} from "lucide-react";
import { QualityRequirements } from "./resources/QualityRequirements";
import { ShortcutKeys } from "./resources/ShortcutKeys";
import { OperationGuidelines } from "./resources/OperationGuidelines";

export function Resources({ language }: any) {
  const fullUrl = window.location.href;
  const content: any = {
    en: {
      title: "Resources & Guidelines",
      subtitle: "Everything you need to excel in your annotation work",
      resources: [
        {
          title: "Training Videos",
          description: "Watch comprehensive training materials and tutorials",
          icon: Video,
          action: "Watch Now",
          download: false,
          link: "/videos",
        },
        {
          title: "LiFTVoiceApp",
          description: "Download the required annotation software",
          icon: Download,
          action: "Download",
          download: true,
          link: "/liftApp.zip",
        },
        {
          title: "Documentation",
          description:
            "Access detailed annotation guidelines and best practices",
          icon: FileText,
          download: true,
          action: "View Docs",
          link: "/apexBart.pdf",
        },
        {
          title: "Support Portal",
          description: "Get help from our technical support team",
          icon: HelpCircle,
          download: false,
          action: "Get Help",
          link: "https://t.me/appen_voice",
        },
      ],
    },
    // Add other languages...
  };
  console.log(fullUrl);

  const t = content[language] || content.en;

  return (
    <section id="resources" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">{t.subtitle}</p>
        </div>

        {/* Main Resources */}
        <div className="mx-auto mt-16 max-w-2xl lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
            {t.resources.map((resource: any, index: any) => (
              <div key={index} className="flex flex-col">
                <div className="rounded-lg bg-gray-50 p-2 ring-1 ring-gray-200/50 w-fit">
                  <resource.icon className="h-6 w-6 text-gray-600" />
                </div>
                <dt className="mt-4 font-semibold text-gray-900">
                  {resource.title}
                </dt>
                <dd className="mt-2 leading-7 text-gray-600">
                  {resource.description}
                </dd>
                <a
                  href={resource.link}
                  target="_blank"
                  download={resource.download}
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  {resource.action}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Guidelines */}
        <div className="mt-16 lg:mt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <QualityRequirements language={language} />
              <ShortcutKeys language={language} />
            </div>
            <div>
              <OperationGuidelines language={language} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
