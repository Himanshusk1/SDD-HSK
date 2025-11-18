import React from 'react';
import { motion } from 'motion/react';

export function SprintCycle() {
  const phases = [
    { name: 'Sprint Planning', duration: '4 hours', desc: 'Team selects stories from backlog', icon: '📋', color: 'from-purple-500 to-purple-600' },
    { name: 'Daily Standup', duration: '15 min/day', desc: 'What I did, will do, blockers', icon: '☀️', color: 'from-yellow-500 to-yellow-600' },
    { name: 'Development', duration: '2 weeks', desc: 'Team builds features', icon: '💻', color: 'from-blue-500 to-blue-600' },
    { name: 'Sprint Review', duration: '2 hours', desc: 'Demo to stakeholders', icon: '🎭', color: 'from-green-500 to-green-600' },
    { name: 'Sprint Retrospective', duration: '1 hour', desc: 'What went well, improve', icon: '🔄', color: 'from-orange-500 to-orange-600' }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
      <div className="relative">
        {/* Central sprint duration */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-2xl px-8 py-4 shadow-xl"
          >
            <p className="text-sm font-semibold mb-1">Sprint Duration</p>
            <p className="text-4xl font-bold">2 Weeks</p>
          </motion.div>
        </div>

        {/* Phases */}
        <div className="space-y-6">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className={`bg-gradient-to-r ${phase.color} rounded-xl p-1 shadow-lg`}>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
                  <div className="flex items-center gap-6">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center text-4xl shadow-lg flex-shrink-0`}>
                      {phase.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold dark:text-white">{phase.name}</h4>
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="dark:text-gray-400 text-gray-600">{phase.desc}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector arrow */}
              {index < phases.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="flex justify-center my-3"
                >
                  <div className="text-3xl text-gray-400 dark:text-gray-600">↓</div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Cycle arrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-6 flex items-center justify-center gap-3 text-purple-600 dark:text-purple-400"
        >
          <div className="h-0.5 w-32 bg-gradient-to-r from-transparent to-purple-600 dark:to-purple-400"></div>
          <span className="text-2xl">🔄</span>
          <span className="font-semibold">Repeat Every 2 Weeks</span>
          <div className="h-0.5 w-32 bg-gradient-to-l from-transparent to-purple-600 dark:to-purple-400"></div>
        </motion.div>
      </div>
    </div>
  );
}
