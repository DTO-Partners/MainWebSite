import logo from "@/assets/tab_logo.png";
import flagEN from "@/assets/flag-en.svg";
import flagPL from "@/assets/flag-pl.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 750);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === "en" ? "pl" : "en");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1a1a2e]/95 border-[#3e5c76] text-white"
          : "bg-transparent text-white border-transparent"
      } backdrop-blur-md border-b`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and Company Name */}
        <a href="#Hero" className="flex items-center gap-4">
          <img
            src={logo}
            alt="DTO Partners Logo"
            className="w-16 h-16 object-contain" 
          />
          <span className="text-2xl font-extrabold tracking-tight text-accent">
            DTO Partners
          </span>
        </a>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          {[
            { label: t("nav.aboutus"), id: "AboutUs" },
            { label: t("nav.markets"), id: "Markets" },
            { label: t("nav.candidates"), id: "Candidates" },
            { label: t("nav.employers"), id: "Employers" },
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
          className="ml-6 w-10 h-10 rounded-full overflow-hidden border border-white/20 hover:ring-2 ring-accent transition"
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