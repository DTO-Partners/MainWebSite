// GDPR Cookie Management Modal with meaningful functionality
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCookieBite, FaChevronDown, FaShieldAlt, FaChartLine, FaCog, FaBolt, FaEye, FaTimes } from "react-icons/fa";
import { useGDPR } from "@/hooks/useGDPR";
import { useTranslation } from "react-i18next";

export default function GDPRModal() {
  const { t, i18n } = useTranslation();
  const {
    isVisible,
    preferences,
    hasConsented,
    updatePreference,
    acceptAll,
    rejectAll,
    savePreferences,
    showModal,
    hideModal
  } = useGDPR();

  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  // Don't show the floating button if user hasn't consented yet (modal will auto-show)
  const showFloatingButton = hasConsented;

  const handleCategoryToggle = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  // Get stats about current preferences
  const enabledCount = Object.values(preferences).filter(Boolean).length;
  const totalCount = Object.keys(preferences).length;

  // Get localized status text
  const getStatusText = () => {
    if (i18n.language === 'pl') {
      return `${enabledCount} z ${totalCount} kategorii włączonych`;
    }
    return `${enabledCount} of ${totalCount} categories enabled`;
  };

  const cookieCategories = [
    {
      key: "necessary" as const,
      title: t("gdpr.categories.necessary.title"),
      description: t("gdpr.categories.necessary.description"),
      fullDescription: t("gdpr.categories.necessary.fullDescription"),
      icon: FaShieldAlt,
      color: "from-green-500 to-emerald-600",
      required: true,
      examples: t("gdpr.categories.necessary.examples", { returnObjects: true }) as string[]
    },
    {
      key: "functional" as const,
      title: t("gdpr.categories.functional.title"),
      description: t("gdpr.categories.functional.description"),
      fullDescription: t("gdpr.categories.functional.fullDescription"),
      icon: FaCog,
      color: "from-blue-500 to-cyan-600",
      required: false,
      examples: t("gdpr.categories.functional.examples", { returnObjects: true }) as string[]
    },
    {
      key: "analytics" as const,
      title: t("gdpr.categories.analytics.title"),
      description: t("gdpr.categories.analytics.description"),
      fullDescription: t("gdpr.categories.analytics.fullDescription"),
      icon: FaChartLine,
      color: "from-purple-500 to-violet-600",
      required: false,
      examples: t("gdpr.categories.analytics.examples", { returnObjects: true }) as string[]
    },
    {
      key: "performance" as const,
      title: t("gdpr.categories.performance.title"),
      description: t("gdpr.categories.performance.description"),
      fullDescription: t("gdpr.categories.performance.fullDescription"),
      icon: FaBolt,
      color: "from-orange-500 to-amber-600",
      required: false,
      examples: t("gdpr.categories.performance.examples", { returnObjects: true }) as string[]
    },
    {
      key: "advertising" as const,
      title: t("gdpr.categories.advertising.title"),
      description: t("gdpr.categories.advertising.description"),
      fullDescription: t("gdpr.categories.advertising.fullDescription"),
      icon: FaEye,
      color: "from-pink-500 to-rose-600",
      required: false,
      examples: t("gdpr.categories.advertising.examples", { returnObjects: true }) as string[]
    },
  ];

  // Get status indicator color based on enabled count
  const getStatusColor = () => {
    if (enabledCount === totalCount) return 'bg-green-500';
    if (enabledCount === 1) return 'bg-red-500';
    return 'bg-yellow-500';
  };

  return (
    <>
      {/* Floating Action Button - Only show if user has consented */}
      {showFloatingButton && (
        <motion.button
          onClick={showModal}
          className="fixed z-50 bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white text-gray-700 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-300 border border-gray-200 group"
          title={t("gdpr.floatingButton.title")}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5, type: "spring" }}
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <FaCookieBite className="text-lg sm:text-xl text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
          </motion.div>
          
          {/* Status indicator */}
          <motion.div
            className={`absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-lg flex items-center justify-center text-xs font-bold text-white ${getStatusColor()}`}
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {enabledCount}
          </motion.div>
        </motion.button>
      )}

      {/* Banner for first-time visitors */}
      {!hasConsented && !isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl p-4 sm:p-6"
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3 sm:gap-4 w-full lg:w-auto">
              <FaCookieBite className="text-xl sm:text-2xl text-gray-600 flex-shrink-0" />
              <div className="flex-1 lg:flex-none">
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{t("gdpr.banner.title")}</h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {t("gdpr.banner.description")}
                </p>
              </div>
            </div>
            <div className="flex gap-2 sm:gap-3 w-full lg:w-auto">
              <motion.button
                onClick={showModal}
                className="flex-1 lg:flex-none px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("gdpr.banner.buttons.customize")}
              </motion.button>
              <motion.button
                onClick={acceptAll}
                className="flex-1 lg:flex-none px-4 sm:px-6 py-2 text-sm sm:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("gdpr.banner.buttons.acceptAll")}
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Modal */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-2 sm:p-4"
            onClick={(e) => e.target === e.currentTarget && hideModal()}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] flex flex-col relative overflow-hidden border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative flex items-center justify-between border-b border-gray-200 px-4 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-gray-50/20 to-transparent">
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaCookieBite className="text-lg sm:text-xl text-blue-600" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-900 tracking-tight truncate">
                      {t("gdpr.modal.title")}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium truncate">
                      {getStatusText()}
                    </p>
                  </div>
                </div>
                <motion.button
                  onClick={hideModal}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-sm border-2 border-gray-300 shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-200 flex items-center justify-center group flex-shrink-0 ml-2"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={t("gdpr.modal.closeModal")}
                >
                  <FaTimes className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-colors duration-200" />
                </motion.button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-4 sm:py-6 relative z-10 gdpr-modal-scroll">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                    {t("gdpr.modal.description")}
                  </p>

                  <div className="space-y-4 sm:space-y-6">
                    {cookieCategories.map((category, index) => {
                      const IconComponent = category.icon;
                      const isExpanded = expandedCategories.includes(category.key);
                      const isEnabled = preferences[category.key];
                      
                      return (
                        <motion.div 
                          key={category.key}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                          className="bg-gradient-to-r from-white to-gray-50/50 border-2 border-gray-200 hover:border-gray-400 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                        >
                          <button
                            className="flex justify-between items-center cursor-pointer p-4 sm:p-6 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-100/20 group-hover:to-transparent w-full text-left"
                            onClick={() => handleCategoryToggle(category.key)}
                            aria-label={`Toggle ${category.title} details`}
                          >
                            <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                              <motion.div
                                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-current flex items-center justify-center text-white flex-shrink-0`}
                                whileHover={{ scale: 1.1, rotate: 10 }}
                                transition={{ duration: 0.3 }}
                              >
                                <IconComponent className="text-base sm:text-lg" />
                              </motion.div>
                              
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 sm:gap-3 mb-1 flex-wrap">
                                  <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300 truncate">
                                    {category.title}
                                  </h3>
                                  {category.required && (
                                    <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full border border-gray-300 flex-shrink-0">
                                      {t("gdpr.labels.required")}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                                  {category.description.slice(0, 80)}...
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 ml-2">
                              {/* Toggle Switch */}
                              <motion.button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  updatePreference(category.key, !isEnabled);
                                }}
                                className={`relative w-12 h-6 sm:w-14 sm:h-7 rounded-full transition-all duration-300 ${
                                  isEnabled 
                                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                                } ${category.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-lg'}`}
                                disabled={category.required}
                                whileHover={!category.required ? { scale: 1.05 } : {}}
                                whileTap={!category.required ? { scale: 0.95 } : {}}
                              >
                                <motion.div
                                  className={`absolute top-0.5 sm:top-1 w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full shadow-md transition-all duration-300 ${
                                    isEnabled ? 'left-7 sm:left-8' : 'left-1'
                                  }`}
                                  animate={{ 
                                    boxShadow: isEnabled 
                                      ? "0 2px 8px rgba(59, 130, 246, 0.3)" 
                                      : "0 2px 4px rgba(0, 0, 0, 0.1)"
                                  }}
                                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                />
                                {isEnabled && (
                                  <motion.div
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                  />
                                )}
                              </motion.button>
                              
                              {/* Expand Arrow */}
                              <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
                              >
                                <FaChevronDown className="text-xs sm:text-sm" />
                              </motion.div>
                            </div>
                          </button>
                          
                          {/* Expanded Content */}
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                                  <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-3 sm:mb-4" />
                                  <motion.p 
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1, duration: 0.3 }}
                                    className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium"
                                  >
                                    {category.description}
                                  </motion.p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              {/* Footer */}
              <div className="relative border-t border-gray-200 px-4 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-gray-50/10 to-transparent">
                <motion.div 
                  className="flex flex-col gap-3 sm:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <motion.button
                      onClick={rejectAll}
                      className="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 rounded-lg sm:rounded-xl border-2 border-gray-300 hover:border-gray-400 font-semibold transition-all duration-300 hover:shadow-lg hover:from-gray-200 hover:to-gray-300 text-sm sm:text-base"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t("gdpr.modal.buttons.rejectAll")}
                    </motion.button>
                    
                    <motion.button
                      onClick={savePreferences}
                      className="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg sm:rounded-xl border-2 border-gray-700 hover:border-gray-600 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/20 text-sm sm:text-base"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t("gdpr.modal.buttons.savePreferences")}
                    </motion.button>
                  </div>
                  
                  <motion.button
                    onClick={acceptAll}
                    className="w-full px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg sm:rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:from-blue-600 hover:to-blue-700 border-2 border-blue-500 hover:border-blue-400 text-sm sm:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t("gdpr.modal.buttons.acceptAll")}
                  </motion.button>
                </motion.div>
                
                <motion.p 
                  className="text-xs text-gray-500 mt-3 sm:mt-4 text-center font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  {t("gdpr.modal.footerNote")}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
