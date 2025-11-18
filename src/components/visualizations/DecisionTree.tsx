import React from 'react';
import { motion } from 'motion/react';

export function DecisionTree() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg overflow-x-auto">
      <div className="min-w-max">
        <p className="dark:text-gray-300 text-gray-700 mb-6 text-center max-w-3xl mx-auto">
          Should QuickBite invest $50K in a mobile app or focus on web first?
        </p>

        {/* Root Decision */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-4 text-white shadow-xl"
          >
            <p className="font-bold text-center">Build Mobile App?</p>
            <p className="text-xs text-center text-white/80 mt-1">Decision Point</p>
          </motion.div>
        </div>

        {/* Branches */}
        <div className="relative">
          <svg className="absolute top-0 left-0 w-full h-40">
            <line x1="50%" y1="0" x2="25%" y2="100%" stroke="#8b5cf6" strokeWidth="2" />
            <line x1="50%" y1="0" x2="75%" y2="100%" stroke="#8b5cf6" strokeWidth="2" />
          </svg>

          <div className="grid grid-cols-2 gap-32 pt-40 pb-8">
            {/* Option 1: Build App */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg p-4 text-white text-center shadow-lg"
              >
                <p className="font-bold">YES - Build App</p>
                <p className="text-xs mt-1">Cost: $50K</p>
              </motion.div>

              {/* Outcomes */}
              <div className="space-y-4 ml-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-green-500/20 border-2 border-green-500 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold dark:text-white text-sm">Success (60%)</p>
                    <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">+$150K</span>
                  </div>
                  <p className="text-xs dark:text-gray-300 text-gray-700">High user adoption</p>
                  <p className="text-xs font-bold text-green-600 dark:text-green-400 mt-2">
                    EMV: 0.6 × $150K = $90K
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-red-500/20 border-2 border-red-500 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold dark:text-white text-sm">Failure (40%)</p>
                    <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">-$30K</span>
                  </div>
                  <p className="text-xs dark:text-gray-300 text-gray-700">Low adoption, wasted effort</p>
                  <p className="text-xs font-bold text-red-600 dark:text-red-400 mt-2">
                    EMV: 0.4 × (-$30K) = -$12K
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-4 text-white"
                >
                  <p className="text-xs mb-1">Total Expected Value:</p>
                  <p className="text-2xl font-bold">$78K</p>
                </motion.div>
              </div>
            </div>

            {/* Option 2: Web Only */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-orange-500 to-red-500 rounded-lg p-4 text-white text-center shadow-lg"
              >
                <p className="font-bold">NO - Web Only</p>
                <p className="text-xs mt-1">Cost: $0</p>
              </motion.div>

              {/* Outcomes */}
              <div className="space-y-4 ml-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-blue-500/20 border-2 border-blue-500 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold dark:text-white text-sm">Moderate Growth (70%)</p>
                    <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">+$80K</span>
                  </div>
                  <p className="text-xs dark:text-gray-300 text-gray-700">Steady web users</p>
                  <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-2">
                    EMV: 0.7 × $80K = $56K
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-yellow-500/20 border-2 border-yellow-500 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold dark:text-white text-sm">Slow Growth (30%)</p>
                    <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded">+$30K</span>
                  </div>
                  <p className="text-xs dark:text-gray-300 text-gray-700">Limited reach</p>
                  <p className="text-xs font-bold text-yellow-600 dark:text-yellow-400 mt-2">
                    EMV: 0.3 × $30K = $9K
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-4 text-white"
                >
                  <p className="text-xs mb-1">Total Expected Value:</p>
                  <p className="text-2xl font-bold">$65K</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Decision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 text-white text-center"
        >
          <p className="text-lg font-bold mb-2">✅ Recommended Decision: Build Mobile App</p>
          <p className="text-sm text-white/90">
            EMV of $78K &gt; $65K. Despite higher risk, the mobile app offers better expected return.
          </p>
        </motion.div>
      </div>
    </div>
  );
}