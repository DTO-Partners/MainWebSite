import logo from "@/assets/tab_logo.png";
import flagEN from "@/assets/flag-en.svg";
import flagPL from "@/assets/flag-pl.png";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === "en" ? "pl" : "en");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md text-white z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#Hero" className="flex items-center gap-2">
          <img
            src={logo}
            alt="DTO Partners Logo"
            className="w-18 h-18 object-contain"
          />
        </a>

        {/* Navigation */}
        <ul className="flex gap-6 text-base font-medium tracking-wide">
          <li>
            <a href="#Hero" className="hover:text-accent transition-colors">
              {t("nav.homepage")}
            </a>
          </li>
          <li>
            <a href="#Markets" className="hover:text-accent transition-colors">
              {t("nav.markets")}
            </a>
          </li>
          <li>
            <a href="#Candidates" className="hover:text-accent transition-colors">
              {t("nav.candidates")}
            </a>
          </li>
          <li>
            <a href="#Employees" className="hover:text-accent transition-colors">
              {t("nav.employees")}
            </a>
          </li>
          <li>
            <a href="#Contact" className="hover:text-accent transition-colors">
              {t("nav.contact")}
            </a>
          </li>
        </ul>

        {/* Language Switcher */}
        <button onClick={toggleLanguage} className="ml-6 focus:outline-none">
          <img
            src={currentLang === "en" ? flagPL : flagEN}
            alt="language switch"
            className="w-6 h-6 rounded-full"
          />
        </button>
      </div>
    </nav>
  );
}
