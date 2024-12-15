import React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "./Link";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../shared/LanguageSelector";
import { FaTelegramPlane, FaYoutube, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <header className="bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        {/* Top Bar */}
        <div className="bg-gray-100 py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane className="text-gray-600 hover:text-gray-800" size={18} />
              </a>
              <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-gray-600 hover:text-gray-800" size={18} />
              </a>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-600 hover:text-gray-800" size={18} />
              </a>
              <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-gray-600 hover:text-gray-800" size={18} />
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-gray-600 hover:text-gray-800" size={18} />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-gray-600 hover:text-gray-800" size={18} />
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="mailto:apxeBart@ai.com" className="hover:underline">
                apxeBart@ai.com
              </a>
              <a href="tel:+998958014084" className="hover:underline">
                +998958014084
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/logo.svg"
                alt={t("site.name")}
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-gray-900">a</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about">{t("nav.about")}</Link>
              <Link href="/services">{t("nav.services")}</Link>
              <Link href="/projects">{t("nav.projects")}</Link>
              <LanguageSelector />
              <Link href="/contact" className="btn-primary">
                {t("nav.contact")}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <Link href="/about">{t("nav.about")}</Link>
                <Link href="/services">{t("nav.services")}</Link>
                <Link href="/projects">{t("nav.projects")}</Link>
                <LanguageSelector />
                <Link
                  href="/contact"
                  className="btn-primary inline-block text-center"
                >
                  {t("nav.contact")}
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
