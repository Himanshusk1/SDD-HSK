import React from 'react';
import { motion } from 'motion/react';

export function Timeline() {
  const phases = [
    { name: 'Planning', icon: '📋', duration: '2 weeks', color: 'from-purple-500 to-purple-600' },
    { name: 'Design', icon: '🎨', duration: '3 weeks', color: 'from-blue-500 to-blue-600' },
    { name: 'Development', icon: '💻', duration: '12 weeks', color: 'from-green-500 to-green-600' },
    { name: 'Testing', icon: '🧪', duration: '4 weeks', color: 'from-yellow-500 to-yellow-600' },
    { name: 'Deployment', icon: '🚀', duration: '1 week', color: 'from-red-500 to-red-600' },
    { name: 'Maintenance', icon: '🔧', duration: 'Ongoing', color: 'from-pink-500 to-pink-600' }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500"></div>

        {/* Timeline items */}
        <div className="space-y-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.name}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative flex items-center gap-6"
            >
              {/* Node */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center text-3xl shadow-lg z-10`}>
                {phase.icon}
              </div>

              {/* Content */}
              <div className="flex-1 bg-gradient-to-r from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-lg p-4 shadow">
                <h4 className="font-bold dark:text-white text-lg">{phase.name}</h4>
                <p className="text-sm dark:text-gray-400 text-gray-600">Duration: {phase.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
