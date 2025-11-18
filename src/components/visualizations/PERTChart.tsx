import React from 'react';
import { motion } from 'motion/react';

export function PERTChart() {
  const tasks = [
    {
      name: 'Database Design',
      optimistic: 3,
      mostLikely: 5,
      pessimistic: 9,
      expected: 5.3
    },
    {
      name: 'API Development',
      optimistic: 6,
      mostLikely: 8,
      pessimistic: 14,
      expected: 8.7
    },
    {
      name: 'Frontend Development',
      optimistic: 4,
      mostLikely: 6,
      pessimistic: 10,
      expected: 6.3
    },
    {
      name: 'Integration Testing',
      optimistic: 2,
      mostLikely: 4,
      pessimistic: 8,
      expected: 4.3
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg overflow-x-auto">
      <div className="min-w-max">
        {/* Header */}
        <div className="grid grid-cols-6 gap-4 mb-4 font-bold dark:text-white">
          <div className="col-span-2">Task</div>
          <div className="text-center">Optimistic (O)</div>
          <div className="text-center">Most Likely (M)</div>
          <div className="text-center">Pessimistic (P)</div>
          <div className="text-center">Expected Time</div>
        </div>

        {/* Tasks */}
        <div className="space-y-3">
          {tasks.map((task, index) => (
            <motion.div
              key={task.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-6 gap-4 items-center bg-gradient-to-r from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-lg p-4 shadow"
            >
              <div className="col-span-2 dark:text-white font-medium">{task.name}</div>
              
              <div className="text-center">
                <div className="inline-block bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full font-semibold">
                  {task.optimistic}d
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full font-semibold">
                  {task.mostLikely}d
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-block bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-3 py-1 rounded-full font-semibold">
                  {task.pessimistic}d
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full font-bold">
                  {task.expected}d
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-6 text-white"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-3">Calculation Example (API Development):</h4>
              <div className="bg-white/20 rounded-lg p-4 font-mono text-sm">
                <p>Expected = (O + 4M + P) / 6</p>
                <p>Expected = (6 + 4×8 + 14) / 6</p>
                <p>Expected = (6 + 32 + 14) / 6</p>
                <p className="text-lg font-bold mt-2">Expected = 8.7 days</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-3">Total Project Estimate:</h4>
              <div className="space-y-2">
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="text-sm">Sum of Expected Times</p>
                  <p className="text-2xl font-bold">{(5.3 + 8.7 + 6.3 + 4.3).toFixed(1)} days</p>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="text-sm">~3.5 weeks</p>
                  <p className="text-xs text-white/80">With 68% confidence level</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
