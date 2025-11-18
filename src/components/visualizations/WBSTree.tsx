import React from 'react';
import { motion } from 'motion/react';

export function WBSTree() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg overflow-x-auto">
      <div className="min-w-max">
        {/* Level 0 - Project */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-6 text-white shadow-xl"
          >
            <p className="text-center font-bold text-xl">QuickBite App</p>
            <p className="text-center text-sm text-white/80 mt-1">Level 0: Project</p>
          </motion.div>
        </div>

        {/* Connectors Level 0 to 1 */}
        <div className="flex justify-center mb-4">
          <svg width="800" height="40">
            <line x1="400" y1="0" x2="200" y2="40" stroke="currentColor" strokeWidth="2" className="text-purple-500" />
            <line x1="400" y1="0" x2="400" y2="40" stroke="currentColor" strokeWidth="2" className="text-purple-500" />
            <line x1="400" y1="0" x2="600" y2="40" stroke="currentColor" strokeWidth="2" className="text-purple-500" />
          </svg>
        </div>

        {/* Level 1 - Major Deliverables */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          {[
            { title: 'Frontend', color: 'from-blue-500 to-cyan-500' },
            { title: 'Backend', color: 'from-green-500 to-teal-500' },
            { title: 'Infrastructure', color: 'from-orange-500 to-red-500' }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`bg-gradient-to-br ${item.color} rounded-lg p-4 text-white shadow-lg`}
            >
              <p className="text-center font-bold">{item.title}</p>
              <p className="text-center text-xs text-white/80 mt-1">Level 1</p>
            </motion.div>
          ))}
        </div>

        {/* Connectors Level 1 to 2 */}
        <div className="flex justify-around mb-4">
          {[0, 1, 2].map((col) => (
            <svg key={col} width="250" height="40">
              <line x1="125" y1="0" x2="60" y2="40" stroke="currentColor" strokeWidth="1.5" className="text-blue-400" />
              <line x1="125" y1="0" x2="125" y2="40" stroke="currentColor" strokeWidth="1.5" className="text-blue-400" />
              <line x1="125" y1="0" x2="190" y2="40" stroke="currentColor" strokeWidth="1.5" className="text-blue-400" />
            </svg>
          ))}
        </div>

        {/* Level 2 - Work Packages */}
        <div className="grid grid-cols-9 gap-3">
          {[
            { title: 'UI Design', parent: 0 },
            { title: 'React App', parent: 0 },
            { title: 'Mobile App', parent: 0 },
            { title: 'API Design', parent: 1 },
            { title: 'Database', parent: 1 },
            { title: 'Auth Service', parent: 1 },
            { title: 'AWS Setup', parent: 2 },
            { title: 'CI/CD', parent: 2 },
            { title: 'Monitoring', parent: 2 }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg p-3 shadow"
            >
              <p className="text-center text-xs font-medium dark:text-white">{item.title}</p>
              <p className="text-center text-[10px] text-gray-600 dark:text-gray-400 mt-1">Level 2</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
