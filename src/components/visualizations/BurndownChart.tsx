import React from 'react';
import { motion } from 'motion/react';

export function BurndownChart() {
  const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10'];
  const idealBurndown = [40, 36, 32, 28, 24, 20, 16, 12, 8, 4, 0];
  const actualBurndown = [40, 38, 34, 34, 28, 24, 20, 16, 10, 4, 0];

  const maxValue = 40;
  const chartHeight = 300;

  const getY = (value: number) => {
    return chartHeight - (value / maxValue) * chartHeight;
  };

  const idealPath = idealBurndown.map((value, index) => {
    const x = (index / 10) * 600;
    const y = getY(value);
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  const actualPath = actualBurndown.map((value, index) => {
    const x = (index / 10) * 600;
    const y = getY(value);
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
      <div className="mb-6 flex items-center justify-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-1 bg-blue-500 rounded"></div>
          <span className="text-sm dark:text-gray-300 text-gray-700">Ideal Burndown</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-1 bg-green-500 rounded"></div>
          <span className="text-sm dark:text-gray-300 text-gray-700">Actual Progress</span>
        </div>
      </div>

      <div className="relative w-full overflow-x-auto">
        <svg viewBox="0 0 650 350" className="w-full">
          {/* Grid lines */}
          {[0, 10, 20, 30, 40].map((value) => (
            <g key={value}>
              <line
                x1="40"
                y1={getY(value) + 25}
                x2="640"
                y2={getY(value) + 25}
                stroke="currentColor"
                strokeWidth="1"
                className="text-gray-300 dark:text-gray-700"
                strokeDasharray="4"
              />
              <text
                x="10"
                y={getY(value) + 30}
                className="text-xs fill-current dark:text-gray-400 text-gray-600"
              >
                {value}
              </text>
            </g>
          ))}

          {/* X-axis labels */}
          {days.map((day, index) => (
            <text
              key={day}
              x={40 + (index / 10) * 600}
              y="340"
              className="text-xs fill-current dark:text-gray-400 text-gray-600"
              textAnchor="middle"
            >
              {day}
            </text>
          ))}

          {/* Ideal burndown line */}
          <motion.path
            d={idealPath}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeDasharray="6,6"
            transform="translate(40, 25)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />

          {/* Actual burndown line */}
          <motion.path
            d={actualPath}
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            transform="translate(40, 25)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
          />

          {/* Actual progress points */}
          {actualBurndown.map((value, index) => (
            <motion.circle
              key={index}
              cx={40 + (index / 10) * 600}
              cy={getY(value) + 25}
              r="5"
              fill="#10b981"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            />
          ))}
        </svg>
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/20 rounded-lg p-4 border border-blue-500/30">
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">Total Story Points</p>
          <p className="text-2xl font-bold dark:text-white">40</p>
        </div>
        <div className="bg-gradient-to-r from-green-500/10 to-green-500/20 rounded-lg p-4 border border-green-500/30">
          <p className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">Completed</p>
          <p className="text-2xl font-bold dark:text-white">36</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500/10 to-purple-500/20 rounded-lg p-4 border border-purple-500/30">
          <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-1">Remaining</p>
          <p className="text-2xl font-bold dark:text-white">4</p>
        </div>
      </div>

      <div className="mt-4 bg-green-500/10 border border-green-500/20 rounded-lg p-4">
        <p className="text-sm dark:text-gray-300 text-gray-700">
          ✅ <strong>Great progress!</strong> Team is ahead of schedule. Actual burndown is below the ideal line.
        </p>
      </div>
    </div>
  );
}
