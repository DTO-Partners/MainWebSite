import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface NavItem {
  label: string;
  id: string;
  href?: string;
  isExternal?: boolean;
}

export interface UseNavbarReturn {
  isScrolled: boolean;
  scrollDirection: 'up' | 'down';
  isMobileMenuOpen: boolean;
  currentLang: string;
  navItems: NavItem[];
  isVisible: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleLanguage: () => void;
  scrollToTop: () => void;
}

export function useNavbar(): UseNavbarReturn {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const navItems: NavItem[] = [
    { label: t("nav.aboutus"), id: "AboutUs" },
    { label: t("nav.markets"), id: "Markets" },
    { label: t("nav.Candidates&Employers"), id: "Candidates & Employers" },
    { label: t("nav.contact"), id: "Contact" },
  ];

  useEffect(() => {
    let ticking = false;
    let previousScrollY = lastScrollY;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const scrollDifference = scrollPosition - previousScrollY;
          const scrollDifferenceAbs = Math.abs(scrollDifference);
          
          // Only update if scroll difference is significant to prevent jitter
          if (scrollDifferenceAbs < 3) {
            ticking = false;
            return;
          }
          
          // Background visibility - simpler logic
          setIsScrolled(scrollPosition > 50);
          
          // Navbar visibility logic - cleaner and more predictable
          if (scrollPosition <= 100) {
            // Always show at top of page
            setIsVisible(true);
            setScrollDirection('up');
          } else if (scrollDifference > 0 && scrollDifferenceAbs > 8 && scrollPosition > 200) {
            // Scrolling down - hide navbar only if not in mobile menu mode
            setScrollDirection('down');
            if (!isMobileMenuOpen) {
              setIsVisible(false);
            }
          } else if (scrollDifference < 0 && scrollDifferenceAbs > 3) {
            // Scrolling up - show navbar
            setScrollDirection('up');
            setIsVisible(true);
          }
          
          // Update previous scroll position
          previousScrollY = scrollPosition;
          setLastScrollY(scrollPosition);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]); // Remove lastScrollY dependency to prevent infinite re-renders

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => {
      const newState = !prev;
      // Always show navbar when mobile menu is open
      if (newState) {
        setIsVisible(true);
      }
      return newState;
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === "en" ? "pl" : "en");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    isScrolled,
    scrollDirection,
    isMobileMenuOpen,
    currentLang,
    navItems,
    isVisible,
    toggleMobileMenu,
    closeMobileMenu,
    toggleLanguage,
    scrollToTop
  };
}
