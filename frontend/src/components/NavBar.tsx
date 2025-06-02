import logo from "@/assets/tab_logo.png";
import flagEN from "@/assets/flag-en.svg";
import flagPL from "@/assets/flag-pl.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#1a1a2e]/95 border-[#3e5c76]/50 text-white shadow-xl shadow-black/20"
          : "bg-transparent text-white border-transparent"
      } backdrop-blur-xl border-b`}
    >
      {/* Enhanced background pattern for scrolled state */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/95 via-[#243046]/90 to-[#1a1a2e]/95" />
      )}
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-10">
        {/* Enhanced Logo and Company Name */}
        <motion.a 
          href="#Hero" 
          className="flex items-center gap-4 group"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative"
          >
            <img
              src={logo}
              alt="DTO Partners Logo"
              className="w-16 h-16 object-contain transition-all duration-300 group-hover:drop-shadow-lg" 
            />
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-2xl font-light tracking-tight text-accent transition-all duration-300 group-hover:text-[#daa520] leading-tight">
              DTO Partners
            </span>
            <div className={`h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#daa520] to-[#fff7d4] transition-all duration-500 rounded-full ${
              isScrolled ? 'mt-1' : 'mt-0.5'
            }`} />
          </div>
        </motion.a>

        {/* Enhanced Navigation */}
        <ul className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          {[
            { label: t("nav.aboutus"), id: "AboutUs" },
            { label: t("nav.markets"), id: "Markets" },
            {label: t("nav.Candidates&Employers"), id: "Candidates & Employers"},
            { label: t("nav.contact"), id: "Contact" },
          ].map((link, index) => (
            <motion.li 
              key={link.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={link.id}
                smooth={true}
                duration={800}
                className="relative group px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/5 cursor-pointer"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#daa520]">
                  {link.label}
                </span>
                {/* Enhanced underline effect */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-[2px] bg-gradient-to-r from-[#daa520] to-[#fff7d4] transition-all duration-300 rounded-full" />
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#daa520]/10 to-[#fff7d4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Enhanced Language Toggle */}
        <motion.button
          onClick={toggleLanguage}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="ml-6 relative group"
          title={`Switch to ${currentLang === "en" ? "Polish" : "English"}`}
        >
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-[#daa520]/60 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-[#daa520]/20 backdrop-blur-sm">
            <img
              src={currentLang === "en" ? flagEN : flagPL}
              alt={`Current language: ${currentLang === "en" ? "English" : "Polish"}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          {/* Elegant glow effect */}
          <div className="absolute inset-0 bg-[#daa520]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Language indicator badge */}
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-[#daa520] to-[#b8860b] rounded-full flex items-center justify-center shadow-lg">
            <span className="text-xs font-semibold text-white">
              {currentLang.toUpperCase()}
            </span>
          </div>
        </motion.button>
      </div>
    </motion.nav>
  );
}