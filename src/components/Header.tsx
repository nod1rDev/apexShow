import { Globe, ChevronDown, Menu, X } from "lucide-react";
import {
  FaTelegramPlane,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const languages: any = {
  en: "English",
  uz: "O'zbekcha",
  kz: "Қазақша",
  ru: "Русский",
};

export function Header({
  language,
  setLanguage,
  mobileMenuOpen,
  setMobileMenuOpen,
}: any) {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      {/* Top Bar */}
      {/* <div className="bg-gray-900 py-4">
        <div className="container  mx-auto px-4 flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between md:items-center text-base text-white">
          <div className="flex items-center space-x-4">
            <a
              href="https://t.me/yourtelegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane
                className="text-blue-400 hover:text-blue-500 md:size-[32px] sm:size-[28px]"
              />
            </a>
            <a
              href="https://youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube
                className="text-red-500 hover:text-red-600 md:size-[32px] sm:size-[28px]"
              />
            </a>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="text-pink-500 hover:text-pink-600 md:size-[32px] sm:size-[28px]"
              />
            </a>
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                className="text-blue-600 hover:text-blue-700 md:size-[32px] sm:size-[28px]"
              />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                className="text-blue-400 hover:text-blue-500 md:size-[32px] sm:size-[28px]"
              />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="text-blue-700 hover:text-blue-800 md:size-[32px] sm:size-[28px]"
              />
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <a href="mailto:apxeBart@ai.com" className="hover:underline">
              <span className="text-white text-[14px] md:text-[16px]">apxeBart@ai.com</span>
            </a>
            <a href="tel:+998958014084" className="hover:underline">
              <span className="text-white text-[14px] md:text-[16px]">+998958014084</span>
            </a>
          </div>
        </div>
      </div> */}

      {/* Navigation */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-gray-900">
              ApexBart
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#overview" className="text-gray-700 hover:text-gray-900">
              Overview
            </a>
            <a href="#workflow" className="text-gray-700 hover:text-gray-900">
              Workflow
            </a>
            <a href="#resources" className="text-gray-700 hover:text-gray-900">
              Resources
            </a>
            <a href="#community" className="text-gray-700 hover:text-gray-900">
              Community
            </a>

            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
                onClick={() =>
                  document
                    .getElementById("language-menu")
                    ?.classList.toggle("hidden")
                }
              >
                <Globe className="h-4 w-4" />
                <span>{languages[language]}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              <div
                id="language-menu"
                className="hidden absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg"
              >
                {Object.entries(languages).map(([code, name]) => (
                  <button
                    key={code}
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setLanguage(code);
                      document
                        .getElementById("language-menu")
                        ?.classList.add("hidden");
                    }}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <a href="#overview" className="block py-2 text-gray-700">
              Overview
            </a>
            <a href="#workflow" className="block py-2 text-gray-700">
              Workflow
            </a>
            <a href="#resources" className="block py-2 text-gray-700">
              Resources
            </a>
            <a href="#community" className="block py-2 text-gray-700">
              Community
            </a>

            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="space-y-1">
                {Object.entries(languages).map(([code, name]) => (
                  <button
                    key={code}
                    className="block w-full py-2 text-left text-gray-700"
                    onClick={() => {
                      setLanguage(code);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
