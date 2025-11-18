import React from 'react';
import { motion } from 'motion/react';

export function ParetoChart() {
  const data = [
    { issue: 'Payment failures', count: 45, cumulative: 45 },
    { issue: 'App crashes', count: 32, cumulative: 77 },
    { issue: 'Slow loading', count: 18, cumulative: 95 },
    { issue: 'UI bugs', count: 12, cumulative: 107 },
    { issue: 'Login issues', count: 8, cumulative: 115 },
    { issue: 'Other', count: 5, cumulative: 120 }
  ];

  const total = 120;
  const maxHeight = 200;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
      <div className="mb-6">
        <p className="dark:text-gray-300 text-gray-700 text-center mb-4">
          QuickBite encountered 120 bugs during testing. Using Pareto analysis, the team identifies the "vital few":
        </p>
      </div>

      <div className="relative" style={{ height: `${maxHeight + 100}px` }}>
        {/* Y-axes labels */}
        <div className="absolute left-0 top-0 bottom-20 flex flex-col justify-between text-xs dark:text-gray-400 text-gray-600">
          {[120, 90, 60, 30, 0].map((val) => (
            <span key={val}>{val}</span>
          ))}
        </div>

        <div className="absolute right-0 top-0 bottom-20 flex flex-col justify-between text-xs dark:text-gray-400 text-gray-600">
          {[100, 75, 50, 25, 0].map((val) => (
            <span key={val}>{val}%</span>
          ))}
        </div>

        {/* Chart area */}
        <div className="absolute left-12 right-12 top-0 bottom-20">
          {/* Grid lines */}
          <div className="absolute inset-0">
            {[0, 25, 50, 75, 100].map((percent) => (
              <div
                key={percent}
                className="absolute left-0 right-0 border-t border-gray-200 dark:border-gray-700"
                style={{ bottom: `${percent}%` }}
              />
            ))}
          </div>

          {/* Bars and line */}
          <div className="relative h-full flex items-end justify-around">
            {data.map((item, index) => {
              const barHeight = (item.count / total) * 100;
              const cumulativePercent = (item.cumulative / total) * 100;

              return (
                <div key={item.issue} className="flex flex-col items-center flex-1 mx-1">
                  {/* Bar */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${barHeight}%` }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`w-full rounded-t ${
                      index < 2
                        ? 'bg-gradient-to-t from-red-500 to-red-600'
                        : 'bg-gradient-to-t from-gray-400 to-gray-500'
                    } relative group`}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold dark:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.count}
                    </div>
                  </motion.div>

                  {/* Cumulative line point */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="absolute w-3 h-3 rounded-full bg-blue-500 border-2 border-white dark:border-gray-800 z-10"
                    style={{ bottom: `${cumulativePercent}%` }}
                  />

                  {/* X-axis label */}
                  <p className="text-[10px] dark:text-gray-400 text-gray-600 text-center mt-3 leading-tight w-20">
                    {item.issue}
                  </p>
                </div>
              );
            })}

            {/* Cumulative line */}
            <svg className="absolute inset-0 pointer-events-none" style={{ height: '100%', width: '100%' }}>
              <motion.polyline
                points={data.map((item, index) => {
                  const x = ((index + 0.5) / data.length) * 100;
                  const y = 100 - (item.cumulative / total) * 100;
                  return `${x}%,${y}%`;
                }).join(' ')}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </svg>

            {/* 80% threshold line */}
            <div className="absolute left-0 right-0 border-t-2 border-dashed border-yellow-500" style={{ bottom: '80%' }}>
              <span className="absolute -top-6 right-0 text-xs font-bold text-yellow-600 dark:text-yellow-400 bg-white dark:bg-gray-800 px-2 py-1 rounded">
                80% line
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 flex items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-4 bg-gradient-to-r from-red-500 to-red-600 rounded"></div>
          <span className="dark:text-gray-300 text-gray-700">Vital Few (80%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-4 bg-gradient-to-r from-gray-400 to-gray-500 rounded"></div>
          <span className="dark:text-gray-300 text-gray-700">Trivial Many (20%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-blue-500"></div>
          <span className="dark:text-gray-300 text-gray-700">Cumulative %</span>
        </div>
      </div>

      {/* Insight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 dark:from-red-500/20 dark:to-orange-500/20 rounded-lg p-6 border border-red-500/20"
      >
        <h4 className="font-bold dark:text-white mb-2">💡 Key Insight:</h4>
        <p className="dark:text-gray-300 text-gray-700">
          Just <strong>2 issues</strong> (Payment failures and App crashes) account for <strong>64%</strong> of all bugs! 
          By fixing these first, the team eliminates most problems quickly. This is the 80/20 rule in action!
        </p>
      </motion.div>
    </div>
  );
}
