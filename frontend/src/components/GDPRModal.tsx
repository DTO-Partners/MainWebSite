import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCookieBite, FaChevronDown, FaShieldAlt, FaChartLine, FaCog, FaBolt, FaEye } from "react-icons/fa";

export default function GDPRModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    performance: false,
    advertising: false,
  });

  const handleModalToggle = () => setIsModalOpen((prev) => !prev);

  const handleCategoryToggle = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handlePreferenceToggle = (category: keyof typeof preferences) => {
    if (category === 'necessary') return; // Necessary cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleSavePreferences = () => {
    console.log("User preferences saved:", preferences);
    setIsModalOpen(false);
  };

  const handleAcceptAll = () => {
    setPreferences({
      necessary: true,
      functional: true,
      analytics: true,
      performance: true,
      advertising: true,
    });
    console.log("All cookies accepted.");
    setIsModalOpen(false);
  };

  const handleRejectAll = () => {
    setPreferences({
      necessary: true,
      functional: false,
      analytics: false,
      performance: false,
      advertising: false,
    });
    console.log("Non-essential cookies rejected.");
    setIsModalOpen(false);
  };

  const cookieCategories = [
    {
      key: "necessary" as const,
      title: "Strictly Necessary",
      description: "These cookies are essential for the website to function properly. They ensure basic functionality and security features. They cannot be disabled.",
      icon: FaShieldAlt,
      color: "from-green-500 to-emerald-600",
      required: true,
    },
    {
      key: "functional" as const,
      title: "Functional",
      description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences, language settings, and providing live chat support.",
      icon: FaCog,
      color: "from-blue-500 to-cyan-600",
      required: false,
    },
    {
      key: "analytics" as const,
      title: "Analytics & Performance",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously to improve our services.",
      icon: FaChartLine,
      color: "from-purple-500 to-violet-600",
      required: false,
    },
    {
      key: "performance" as const,
      title: "Performance",
      description: "These cookies help ensure our website runs smoothly and efficiently by monitoring technical performance and optimizing loading times.",
      icon: FaBolt,
      color: "from-orange-500 to-amber-600",
      required: false,
    },
    {
      key: "advertising" as const,
      title: "Marketing & Advertising",
      description: "These cookies are used to deliver relevant advertisements and track the effectiveness of our marketing campaigns across different platforms.",
      icon: FaEye,
      color: "from-pink-500 to-rose-600",
      required: false,
    },
  ];

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={handleModalToggle}
        className="fixed z-50 bottom-6 left-6 bg-gradient-to-r from-[#1a1a2e] to-[#243046] text-white p-4 rounded-2xl shadow-2xl hover:shadow-[0_20px_40px_rgba(218,165,32,0.3)] transition-all duration-300 border border-[#daa520]/20 group"
        title="Manage Cookie Preferences"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 25px 50px rgba(218, 165, 32, 0.4)"
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
          <FaCookieBite className="text-xl text-[#daa520] group-hover:text-[#fff7d4] transition-colors duration-300" />
        </motion.div>
        
        {/* Notification dot */}
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-[#daa520] rounded-full shadow-lg"
          animate={{ 
            scale: [1, 1.3, 1],
            boxShadow: [
              "0 0 0 0 rgba(218, 165, 32, 0.4)",
              "0 0 0 6px rgba(218, 165, 32, 0)",
              "0 0 0 0 rgba(218, 165, 32, 0)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4"
            onClick={(e) => e.target === e.currentTarget && handleModalToggle()}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-gradient-to-br from-white via-[#fdf6e3]/30 to-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col relative overflow-hidden border-2 border-[#daa520]/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#daa520]/10 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#fff7d4]/20 to-transparent rounded-tr-full" />
              
              {/* Header */}
              <div className="relative flex items-center justify-between border-b border-[#daa520]/20 px-8 py-6 bg-gradient-to-r from-[#fff7d4]/20 to-transparent">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#daa520]/20 to-[#daa520]/10 border border-[#daa520]/30 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaCookieBite className="text-xl text-[#daa520]" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#1a1a2e] tracking-tight">
                      Cookie Preferences
                    </h2>
                    <p className="text-sm text-[#708090] font-medium">
                      Manage your privacy settings
                    </p>
                  </div>
                </div>
                <motion.button
                  onClick={handleModalToggle}
                  className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border-2 border-[#daa520]/30 shadow-lg hover:bg-[#daa520]/10 hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6L18 18" stroke="#daa520" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#1a1a2e] transition-colors duration-200"/>
                  </svg>
                </motion.button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto px-8 py-6 relative z-10 gdpr-modal-scroll">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <p className="text-base text-[#708090] mb-8 leading-relaxed">
                    We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic. 
                    <span className="text-[#1a1a2e] font-semibold"> Choose your preferences below</span> or accept all to continue with the optimal experience.
                  </p>

                  <div className="space-y-6">
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
                          className="bg-gradient-to-r from-white to-[#fdf6e3]/50 border-2 border-[#e5e5e5] hover:border-[#daa520]/40 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                        >
                          <div
                            className="flex justify-between items-center cursor-pointer p-6 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#fff7d4]/20 group-hover:to-transparent"
                            onClick={() => handleCategoryToggle(category.key)}
                          >
                            <div className="flex items-center gap-4 flex-1">
                              <motion.div
                                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-current flex items-center justify-center text-white`}
                                whileHover={{ scale: 1.1, rotate: 10 }}
                                transition={{ duration: 0.3 }}
                              >
                                <IconComponent className="text-lg" />
                              </motion.div>
                              
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                  <h3 className="text-lg font-bold text-[#1a1a2e] group-hover:text-[#daa520] transition-colors duration-300">
                                    {category.title}
                                  </h3>
                                  {category.required && (
                                    <span className="bg-[#daa520]/20 text-[#daa520] text-xs font-semibold px-2 py-1 rounded-full border border-[#daa520]/30">
                                      Required
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-[#708090] font-medium leading-relaxed">
                                  {category.description.slice(0, 80)}...
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-4">
                              {/* Toggle Switch */}
                              <motion.button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handlePreferenceToggle(category.key);
                                }}
                                className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
                                  isEnabled 
                                    ? 'bg-gradient-to-r from-[#daa520] to-[#b8860b] shadow-lg shadow-[#daa520]/30' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                                } ${category.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-lg'}`}
                                disabled={category.required}
                                whileHover={!category.required ? { scale: 1.05 } : {}}
                                whileTap={!category.required ? { scale: 0.95 } : {}}
                              >
                                <motion.div
                                  className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 ${
                                    isEnabled ? 'left-8' : 'left-1'
                                  }`}
                                  animate={{ 
                                    x: isEnabled ? 0 : 0,
                                    boxShadow: isEnabled 
                                      ? "0 2px 8px rgba(218, 165, 32, 0.3)" 
                                      : "0 2px 4px rgba(0, 0, 0, 0.1)"
                                  }}
                                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                />
                                {isEnabled && (
                                  <motion.div
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#daa520]/20 to-[#b8860b]/20"
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
                                className="text-[#daa520] group-hover:text-[#b8860b] transition-colors duration-300"
                              >
                                <FaChevronDown className="text-sm" />
                              </motion.div>
                            </div>
                          </div>
                          
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
                                <div className="px-6 pb-6">
                                  <div className="h-px bg-gradient-to-r from-transparent via-[#daa520]/30 to-transparent mb-4" />
                                  <motion.p 
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1, duration: 0.3 }}
                                    className="text-sm text-[#708090] leading-relaxed font-medium"
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
              <div className="relative border-t border-[#daa520]/20 px-8 py-6 bg-gradient-to-r from-[#fff7d4]/10 to-transparent">
                <motion.div 
                  className="flex flex-col sm:flex-row justify-between items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      onClick={handleRejectAll}
                      className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-[#1a1a2e] rounded-xl border-2 border-gray-300 hover:border-gray-400 font-semibold transition-all duration-300 hover:shadow-lg hover:from-gray-200 hover:to-gray-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Reject All
                    </motion.button>
                    
                    <motion.button
                      onClick={handleSavePreferences}
                      className="px-6 py-3 bg-gradient-to-r from-[#1a1a2e] to-[#243046] text-white rounded-xl border-2 border-[#1a1a2e] hover:border-[#daa520] font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#daa520]/20"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Save Preferences
                    </motion.button>
                  </div>
                  
                  <motion.button
                    onClick={handleAcceptAll}
                    className="px-8 py-3 bg-gradient-to-r from-[#daa520] to-[#b8860b] text-white rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#daa520]/30 hover:from-[#b8860b] hover:to-[#daa520] border-2 border-[#daa520] hover:border-[#fff7d4]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Accept All Cookies
                  </motion.button>
                </motion.div>
                
                <motion.p 
                  className="text-xs text-[#708090] mt-4 text-center font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  You can change these settings at any time by clicking the cookie icon.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
