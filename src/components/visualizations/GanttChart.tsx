import React from 'react';
import { motion } from 'motion/react';

export function GanttChart() {
  const tasks = [
    { name: 'Requirements', start: 0, duration: 2, color: 'bg-purple-500', team: 'PM' },
    { name: 'UI Design', start: 2, duration: 3, color: 'bg-blue-500', team: 'Design' },
    { name: 'Database Design', start: 2, duration: 2, color: 'bg-green-500', team: 'Backend' },
    { name: 'API Development', start: 4, duration: 4, color: 'bg-cyan-500', team: 'Backend' },
    { name: 'Frontend Development', start: 5, duration: 4, color: 'bg-orange-500', team: 'Frontend' },
    { name: 'Integration', start: 9, duration: 2, color: 'bg-pink-500', team: 'Full Stack' },
    { name: 'Testing', start: 11, duration: 3, color: 'bg-yellow-500', team: 'QA' },
    { name: 'Deployment', start: 14, duration: 1, color: 'bg-red-500', team: 'DevOps' }
  ];

  const weeks = Array.from({ length: 16 }, (_, i) => `W${i + 1}`);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg overflow-x-auto">
      <div className="min-w-max">
        {/* Header */}
        <div className="flex mb-4">
          <div className="w-48 font-bold dark:text-white">Task</div>
          <div className="w-32 font-bold dark:text-white">Team</div>
          <div className="flex-1 flex">
            {weeks.map((week) => (
              <div key={week} className="flex-1 text-center text-xs font-semibold dark:text-gray-400 text-gray-600 min-w-[40px]">
                {week}
              </div>
            ))}
          </div>
        </div>

        {/* Tasks */}
        <div className="space-y-3">
          {tasks.map((task, index) => (
            <motion.div
              key={task.name}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center"
            >
              <div className="w-48 dark:text-white text-sm">{task.name}</div>
              <div className="w-32 text-xs dark:text-gray-400 text-gray-600">{task.team}</div>
              <div className="flex-1 flex items-center relative h-10 bg-gray-100 dark:bg-gray-700 rounded">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(task.duration / 16) * 100}%` }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  className={`absolute ${task.color} h-8 rounded shadow-lg flex items-center justify-center text-white text-xs font-semibold`}
                  style={{
                    left: `${(task.start / 16) * 100}%`
                  }}
                >
                  {task.duration}w
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Today indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="relative mt-4"
        >
          <div className="flex">
            <div className="w-48"></div>
            <div className="w-32"></div>
            <div className="flex-1 relative">
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-red-500"
                style={{ left: '50%' }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  Today (Week 8)
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
        <p className="text-sm dark:text-gray-300 text-gray-700">
          <strong>Project Duration:</strong> 15 weeks (3.75 months) • <strong>Status:</strong> Week 8 - On track!
        </p>
      </div>
    </div>
  );
}
