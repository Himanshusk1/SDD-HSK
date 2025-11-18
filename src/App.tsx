import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, Menu, X, ChevronRight, ChevronLeft, Play } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { ProgressBar } from './components/ProgressBar';
import { Unit1 } from './components/units/Unit1';
import { Unit2 } from './components/units/Unit2';
import { Unit3 } from './components/units/Unit3';
import { Unit4 } from './components/units/Unit4';
import { Unit5 } from './components/units/Unit5';
import { Quiz } from './components/Quiz';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [autoNext, setAutoNext] = useState(false);

  const sections = [
    { id: 'unit1', title: 'Unit I: Software Design Process Models', component: Unit1, quiz: true },
    { id: 'unit2', title: 'Unit II: Software Design & Development', component: Unit2, quiz: true },
    { id: 'unit3', title: 'Unit III: Agile & Scrum Framework', component: Unit3, quiz: true },
    { id: 'unit4', title: 'Unit IV: Project Scheduling', component: Unit4, quiz: true },
    { id: 'unit5', title: 'Unit V: Quality & Risk Management', component: Unit5, quiz: true },
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection]);

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const CurrentComponent = sections[currentSection].component;
  const progress = ((currentSection + 1) / sections.length) * 100;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        setSidebarOpen={setSidebarOpen}
      />
      
      <ProgressBar progress={progress} />

      <Sidebar 
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />

      <main className="pt-20 pb-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <CurrentComponent onComplete={autoNext ? handleNext : undefined} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.div 
            className="flex justify-between items-center mt-12 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={handlePrevious}
              disabled={currentSection === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                currentSection === 0
                  ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:scale-105'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm dark:text-gray-300">
                <input
                  type="checkbox"
                  checked={autoNext}
                  onChange={(e) => setAutoNext(e.target.checked)}
                  className="w-4 h-4"
                />
                Auto Next
              </label>
            </div>

            <button
              onClick={handleNext}
              disabled={currentSection === sections.length - 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                currentSection === sections.length - 1
                  ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:scale-105'
              }`}
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Progress Indicator */}
          <div className="mt-8 text-center">
            <p className="text-sm dark:text-gray-400 text-gray-600">
              Section {currentSection + 1} of {sections.length}
            </p>
            <div className="flex justify-center gap-2 mt-3">
              {sections.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-12 rounded-full transition-all ${
                    index === currentSection
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600'
                      : index < currentSection
                      ? 'bg-green-500'
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
