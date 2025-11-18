import React from 'react';
import { motion } from 'motion/react';

export function RAMMatrix() {
  const roles = [
    'Project Manager',
    'Tech Lead',
    'Frontend Dev',
    'Backend Dev',
    'QA Engineer'
  ];

  const activities = [
    'Requirements Analysis',
    'Architecture Design',
    'Code Development',
    'Testing & QA',
    'Deployment',
    'Documentation'
  ];

  // R = Responsible, A = Accountable, C = Consulted, I = Informed
  const matrix = [
    ['C', 'A', 'R', 'R', 'I'],
    ['C', 'A', 'R', 'R', 'I'],
    ['I', 'C', 'R', 'R', 'I'],
    ['I', 'C', 'I', 'I', 'A'],
    ['A', 'C', 'R', 'R', 'I'],
    ['R', 'R', 'C', 'C', 'I']
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'R': return 'bg-blue-500 text-white';
      case 'A': return 'bg-green-500 text-white';
      case 'C': return 'bg-yellow-500 text-white';
      case 'I': return 'bg-gray-400 text-white';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  const getRoleName = (role: string) => {
    switch (role) {
      case 'R': return 'Responsible';
      case 'A': return 'Accountable';
      case 'C': return 'Consulted';
      case 'I': return 'Informed';
      default: return '';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
      <p className="dark:text-gray-300 text-gray-700 mb-6">
        RACI Matrix defines who is Responsible, Accountable, Consulted, and Informed for each task:
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        {['R', 'A', 'C', 'I'].map((role) => (
          <div key={role} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg ${getRoleColor(role)} flex items-center justify-center font-bold text-sm`}>
              {role}
            </div>
            <span className="text-sm dark:text-gray-300 text-gray-700">{getRoleName(role)}</span>
          </div>
        ))}
      </div>

      {/* Matrix */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 dark:border-gray-600 p-3 bg-gradient-to-br from-purple-500 to-blue-500 text-white text-left">
                Activity / Role
              </th>
              {roles.map((role, index) => (
                <motion.th
                  key={role}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-300 dark:border-gray-600 p-3 bg-gradient-to-br from-purple-500 to-blue-500 text-white text-center text-sm"
                >
                  {role}
                </motion.th>
              ))}
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, activityIndex) => (
              <motion.tr
                key={activity}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: activityIndex * 0.1 }}
              >
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium dark:text-white bg-gray-50 dark:bg-gray-700">
                  {activity}
                </td>
                {matrix[activityIndex].map((role, roleIndex) => (
                  <motion.td
                    key={`${activityIndex}-${roleIndex}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (activityIndex * roles.length + roleIndex) * 0.05 }}
                    className="border border-gray-300 dark:border-gray-600 p-3 text-center"
                  >
                    <div className={`w-10 h-10 rounded-lg ${getRoleColor(role)} flex items-center justify-center font-bold mx-auto shadow-md`}>
                      {role}
                    </div>
                  </motion.td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
        <p className="text-sm dark:text-gray-300 text-gray-700">
          <strong>💡 Tip:</strong> Each task should have exactly one Accountable person (A) 
          who has final authority, but multiple people can be Responsible (R) for executing it.
        </p>
      </div>
    </div>
  );
}
