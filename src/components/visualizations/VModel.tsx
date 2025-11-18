import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function VModel() {
  const leftPhases = [
    { name: 'Requirements', test: 'Acceptance Testing', icon: '📋', color: 'from-blue-500 to-blue-600', desc: 'Define what to build', testDesc: 'Does it meet requirements?' },
    { name: 'System Design', test: 'System Testing', icon: '🏗️', color: 'from-purple-500 to-purple-600', desc: 'High-level architecture', testDesc: 'Does system work together?' },
    { name: 'Detailed Design', test: 'Integration Testing', icon: '🎨', color: 'from-pink-500 to-pink-600', desc: 'Component specifications', testDesc: 'Do modules integrate?' },
    { name: 'Implementation', test: 'Unit Testing', icon: '💻', color: 'from-green-500 to-green-600', desc: 'Write the code', testDesc: 'Does each unit work?' }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
      <div className="mb-6">
        <h3 className="text-2xl font-bold dark:text-white mb-2">V-Model (Validation & Verification)</h3>
        <p className="dark:text-gray-300 text-gray-700">
          Extension of Waterfall where each development phase has a corresponding testing phase. 
          Forms a "V" shape showing the relationship between development and testing.
        </p>
      </div>

      <div className="mb-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
        <div className="relative">
          {/* Left side - Development phases */}
          <div className="grid grid-cols-1 gap-4 mb-8">
            {leftPhases.map((phase, index) => (
              <motion.div
                key={`left-${index}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="grid md:grid-cols-2 gap-4 items-center"
              >
                {/* Left Phase */}
                <div className={`bg-gradient-to-r ${phase.color} rounded-xl p-4 text-white shadow-lg`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{phase.icon}</span>
                    <h4 className="font-bold">{phase.name}</h4>
                  </div>
                  <p className="text-sm text-white/90">{phase.desc}</p>
                </div>

                {/* Right Phase - Testing */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className={`bg-gradient-to-l ${phase.color} rounded-xl p-4 text-white shadow-lg border-4 border-yellow-400`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">🧪</span>
                    <h4 className="font-bold">{phase.test}</h4>
                  </div>
                  <p className="text-sm text-white/90">{phase.testDesc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Connecting arrows */}
          <div className="flex justify-center my-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-center"
            >
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <ArrowRight className="w-6 h-6" />
                <span className="font-bold">Coding Phase</span>
                <ArrowRight className="w-6 h-6" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* QuickBite Example */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/30 rounded-xl p-6 mb-6"
      >
        <h4 className="font-bold dark:text-white mb-4">🍔 QuickBite V-Model Example:</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium text-purple-600 dark:text-purple-400 mb-2">Development Side:</p>
            <ul className="space-y-1 dark:text-gray-300 text-gray-700">
              <li>1. Requirements: "Users must order food"</li>
              <li>2. System Design: Architecture, database</li>
              <li>3. Detailed Design: API endpoints, UI components</li>
              <li>4. Implementation: Write React + Node.js code</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-yellow-600 dark:text-yellow-400 mb-2">Testing Side:</p>
            <ul className="space-y-1 dark:text-gray-300 text-gray-700">
              <li>4. Unit Tests: Test individual functions</li>
              <li>3. Integration Tests: Test API + Frontend</li>
              <li>2. System Tests: Test complete workflow</li>
              <li>1. UAT: Real users test ordering flow</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Advantages & Disadvantages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="grid md:grid-cols-2 gap-4"
      >
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <h5 className="font-bold text-green-600 dark:text-green-400 mb-2">✅ Advantages</h5>
          <ul className="text-sm dark:text-gray-300 text-gray-700 space-y-1">
            <li>• Testing planned early in lifecycle</li>
            <li>• Defects found at early stages</li>
            <li>• Works well for small projects</li>
            <li>• Clear verification activities</li>
          </ul>
        </div>
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <h5 className="font-bold text-red-600 dark:text-red-400 mb-2">❌ Disadvantages</h5>
          <ul className="text-sm dark:text-gray-300 text-gray-700 space-y-1">
            <li>• Inflexible like Waterfall</li>
            <li>• No early prototypes</li>
            <li>• Difficult to change requirements</li>
            <li>• Not good for complex projects</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
