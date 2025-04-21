import logo from "@/assets/tab_logo.png";
import flagEN from "@/assets/flag-en.svg";
import flagPL from "@/assets/flag-pl.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === "en" ? "pl" : "en");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#Hero" className="flex items-center gap-3">
          <img
            src={logo}
            alt="DTO Partners Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-bold tracking-tight">DTO Partners</span>
        </a>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          {[
            { label: t("nav.aboutus"), id: "AboutUs" },
            { label: t("nav.markets"), id: "Markets" },
            { label: t("nav.candidates"), id: "Candidates" },
            { label: t("nav.employees"), id: "Employees" },
            { label: t("nav.contact"), id: "Contact" },
          ].map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                smooth={true}
                duration={800}
                className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full cursor-pointer"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="ml-6 w-8 h-8 rounded-full overflow-hidden border border-white/20 hover:ring-2 ring-accent transition"
          title="Toggle Language"
        >
          <img
            src={currentLang === "en" ? flagPL : flagEN}
            alt="language switch"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </nav>
  );
}
