import { useState } from "react";
import { FaCookieBite, FaChevronDown } from "react-icons/fa";

export default function GDPRModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const handleModalToggle = () => setIsModalOpen((prev) => !prev);

  const handleCategoryToggle = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleSavePreferences = () => {
    console.log("User preferences saved.");
    setIsModalOpen(false);
  };

  const handleAcceptAll = () => {
    console.log("All cookies accepted.");
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={handleModalToggle}
        className="fixed z-50 bottom-5 left-5 bg-[#2c3e50] text-white p-4 rounded-full shadow-lg hover:bg-[#34495e] transition"
        title="Manage Cookie Preferences"
      >
        <FaCookieBite className="text-xl" />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl h-[80vh] flex flex-col relative overflow-hidden">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Cookie Preferences
              </h2>
              <button
                onClick={handleModalToggle}
                className="text-gray-500 hover:text-gray-800 text-lg"
                aria-label="Close modal"
              >
                ✖
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
              <p className="text-sm text-gray-600 mb-6">
                This website uses cookies to ensure you get the best experience. 
                Customize your preferences below or accept all to continue.
              </p>

              <div className="space-y-5">
                {[
                  {
                    key: "necessary",
                    title: "Necessary",
                    description:
                      "These cookies are essential for core functionality, such as security and accessibility. They are always enabled.",
                  },
                  {
                    key: "functional",
                    title: "Functional",
                    description:
                      "Used to remember your preferences and enable enhanced functionality like live chat or videos.",
                  },
                  {
                    key: "analytics",
                    title: "Analytics",
                    description:
                      "Allow us to analyze site usage so we can measure and improve performance.",
                  },
                  {
                    key: "performance",
                    title: "Performance",
                    description:
                      "Help ensure the site runs smoothly and efficiently by monitoring technical performance.",
                  },
                  {
                    key: "advertising",
                    title: "Advertising",
                    description:
                      "Used to show ads that are more relevant to you based on your browsing behavior.",
                  },
                ].map(({ key, title, description }) => (
                  <div key={key}>
                    <div
                      className="flex justify-between items-center cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-md transition"
                      onClick={() => handleCategoryToggle(key)}
                    >
                      <h3 className="text-base font-medium text-gray-800">
                        {title}
                      </h3>
                      <FaChevronDown
                        className={`text-gray-500 transition-transform duration-200 ${
                          expandedCategories.includes(key) ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {expandedCategories.includes(key) && (
                      <p className="text-sm text-gray-600 mt-2 px-3">
                        {description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end space-x-4 border-t px-6 py-4 bg-gray-50">
              <button
                onClick={handleSavePreferences}
                className="bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition"
              >
                Save Preferences
              </button>
              <button
                onClick={handleAcceptAll}
                className="bg-teal-600 text-white px-5 py-2 rounded-md hover:bg-teal-700 transition"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
