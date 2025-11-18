import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronDown, ChevronRight, CheckCircle, Circle } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  quiz?: boolean;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  sections: Section[];
  currentSection: number;
  setCurrentSection: (index: number) => void;
}

export function Sidebar({ isOpen, onClose, sections, currentSection, setCurrentSection }: SidebarProps) {
  const [expandedUnits, setExpandedUnits] = useState<number[]>([0, 1, 2, 3, 4]);

  const toggleUnit = (index: number) => {
    if (expandedUnits.includes(index)) {
      setExpandedUnits(expandedUnits.filter(i => i !== index));
    } else {
      setExpandedUnits([...expandedUnits, index]);
    }
  };

  const handleSectionClick = (index: number) => {
    setCurrentSection(index);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed left-0 top-0 bottom-0 w-80 bg-white dark:bg-gray-800 z-50 shadow-2xl overflow-y-auto"
          >
            <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Course Contents</h2>
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="p-4 space-y-2">
              {sections.map((section, index) => (
                <div key={section.id}>
                  <button
                    onClick={() => toggleUnit(index)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                      currentSection === index
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {currentSection > index ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : currentSection === index ? (
                        <Circle className="w-5 h-5 fill-current" />
                      ) : (
                        <Circle className="w-5 h-5" />
                      )}
                      <span className="text-sm font-medium text-left">{section.title}</span>
                    </div>
                    {expandedUnits.includes(index) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedUnits.includes(index) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="ml-8 mt-2 space-y-1 overflow-hidden"
                      >
                        <button
                          onClick={() => handleSectionClick(index)}
                          className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                            currentSection === index
                              ? 'text-blue-600 dark:text-blue-400 font-medium'
                              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                          }`}
                        >
                          📚 Main Content
                        </button>
                        {section.quiz && (
                          <button
                            className="w-full text-left px-3 py-2 rounded text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                          >
                            ✅ Quiz
                          </button>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 p-4 rounded-lg">
                <p className="text-sm font-medium dark:text-white mb-2">🚀 Your Progress</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  {currentSection + 1} of {sections.length} units completed
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
