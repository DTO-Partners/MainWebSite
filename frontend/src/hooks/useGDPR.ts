import { useState, useEffect } from 'react';
import { CookieManager, CookiePreferences } from '@/lib/cookieManager';

export interface UseGDPRReturn {
  isVisible: boolean;
  preferences: CookiePreferences;
  hasConsented: boolean;
  updatePreference: (key: keyof CookiePreferences, value: boolean) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: () => void;
  showModal: () => void;
  hideModal: () => void;
  resetConsent: () => void;
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  performance: false,
  advertising: false,
};

export function useGDPR(): UseGDPRReturn {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [hasConsented, setHasConsented] = useState(false);

  // Initialize on mount
  useEffect(() => {
    const savedPreferences = CookieManager.getPreferences();
    const userHasConsented = CookieManager.hasConsent();
    
    if (savedPreferences) {
      setPreferences(savedPreferences);
    }
    
    setHasConsented(userHasConsented);
    
    // Show modal automatically if no consent given and not during development
    if (!userHasConsented) {
      // Delay to let page load first
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === 'necessary') return; // Necessary cookies cannot be disabled
    
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      performance: true,
      advertising: true,
    };
    
    setPreferences(allAccepted);
    CookieManager.savePreferences(allAccepted);
    setHasConsented(true);
    setIsVisible(false);
    
    // Trigger analytics event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cookie_consent', {
        event_category: 'engagement',
        event_label: 'accept_all'
      });
    }
  };

  const rejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      functional: false,
      analytics: false,
      performance: false,
      advertising: false,
    };
    
    setPreferences(onlyNecessary);
    CookieManager.savePreferences(onlyNecessary);
    setHasConsented(true);
    setIsVisible(false);
  };

  const savePreferences = () => {
    CookieManager.savePreferences(preferences);
    setHasConsented(true);
    setIsVisible(false);
    
    // Trigger analytics event if analytics are enabled
    if (preferences.analytics && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cookie_consent', {
        event_category: 'engagement',
        event_label: 'custom_preferences'
      });
    }
  };

  const showModal = () => {
    setIsVisible(true);
  };

  const hideModal = () => {
    setIsVisible(false);
  };

  const resetConsent = () => {
    CookieManager.clearPreferences();
    setPreferences(defaultPreferences);
    setHasConsented(false);
    setIsVisible(true);
  };

  return {
    isVisible,
    preferences,
    hasConsented,
    updatePreference,
    acceptAll,
    rejectAll,
    savePreferences,
    showModal,
    hideModal,
    resetConsent,
  };
}
