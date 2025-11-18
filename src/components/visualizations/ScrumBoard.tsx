import React, { useState } from 'react';
import { motion } from 'motion/react';

export function ScrumBoard() {
  const [tasks, setTasks] = useState({
    todo: [
      { id: 1, title: 'Design checkout flow', points: 5 },
      { id: 2, title: 'Add payment gateway', points: 8 }
    ],
    inProgress: [
      { id: 3, title: 'Restaurant search API', points: 3 },
      { id: 4, title: 'User authentication', points: 5 }
    ],
    testing: [
      { id: 5, title: 'Order tracking UI', points: 3 }
    ],
    done: [
      { id: 6, title: 'Homepage design', points: 2 },
      { id: 7, title: 'Database schema', points: 5 }
    ]
  });

  const columns = [
    { id: 'todo', title: 'To Do', color: 'from-red-500 to-red-600', emoji: '📋' },
    { id: 'inProgress', title: 'In Progress', color: 'from-yellow-500 to-yellow-600', emoji: '🔄' },
    { id: 'testing', title: 'Testing', color: 'from-blue-500 to-blue-600', emoji: '🧪' },
    { id: 'done', title: 'Done', color: 'from-green-500 to-green-600', emoji: '✅' }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {columns.map((column, colIndex) => (
          <motion.div
            key={column.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: colIndex * 0.1 }}
            className="flex flex-col"
          >
            {/* Column Header */}
            <div className={`bg-gradient-to-r ${column.color} rounded-lg p-3 mb-3 shadow`}>
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{column.emoji}</span>
                  <h3 className="font-bold">{column.title}</h3>
                </div>
                <span className="bg-white/30 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  {tasks[column.id as keyof typeof tasks].length}
                </span>
              </div>
            </div>

            {/* Cards */}
            <div className="flex-1 space-y-3 bg-white/50 dark:bg-gray-800/50 rounded-lg p-3 min-h-[200px]">
              {tasks[column.id as keyof typeof tasks].map((task, taskIndex) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: colIndex * 0.1 + taskIndex * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow hover:shadow-lg transition-shadow cursor-move"
                >
                  <p className="font-medium dark:text-white text-sm mb-2">
                    {task.title}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded">
                      {task.points} pts
                    </span>
                    <div className="flex gap-1">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
        <p className="text-sm dark:text-gray-300 text-gray-700">
          <strong>Sprint Progress:</strong> 7 completed, 5 in progress, 2 remaining • Total: 36 story points
        </p>
      </div>
    </div>
  );
}
