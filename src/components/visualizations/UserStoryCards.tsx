import React from 'react';
import { motion } from 'motion/react';
import { User, Target, CheckCircle } from 'lucide-react';

export function UserStoryCards() {
  const stories = [
    {
      as: 'Customer',
      want: 'search for nearby restaurants',
      so: 'I can find food options quickly',
      acceptanceCriteria: [
        'Search by cuisine type',
        'Filter by rating and distance',
        'See results in under 2 seconds'
      ],
      points: 5,
      priority: 'High'
    },
    {
      as: 'Restaurant Owner',
      want: 'update my menu in real-time',
      so: 'customers see accurate offerings',
      acceptanceCriteria: [
        'Add/remove menu items',
        'Update prices instantly',
        'Mark items as out of stock'
      ],
      points: 8,
      priority: 'Medium'
    },
    {
      as: 'Delivery Driver',
      want: 'see optimal route to destination',
      so: 'I can deliver orders faster',
      acceptanceCriteria: [
        'GPS navigation integration',
        'Traffic-aware routing',
        'Multiple stop optimization'
      ],
      points: 13,
      priority: 'High'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 rounded-xl p-6 border border-purple-500/20">
        <h3 className="font-bold dark:text-white mb-3">📝 User Story Format:</h3>
        <p className="dark:text-gray-300 text-gray-700 font-medium">
          As a <span className="text-purple-600 dark:text-purple-400">[role]</span>, 
          I want <span className="text-blue-600 dark:text-blue-400">[feature]</span> 
          so that <span className="text-green-600 dark:text-green-400">[benefit]</span>
        </p>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
          >
            {/* Header */}
            <div className={`p-4 ${story.priority === 'High' ? 'bg-gradient-to-r from-red-500 to-orange-500' : 'bg-gradient-to-r from-yellow-500 to-orange-500'} text-white`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold bg-white/30 px-2 py-1 rounded">
                  {story.priority} Priority
                </span>
                <span className="text-xs font-semibold bg-white/30 px-2 py-1 rounded">
                  {story.points} pts
                </span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium text-sm">{story.as}</span>
              </div>
            </div>

            {/* Story */}
            <div className="p-4">
              <div className="mb-4">
                <p className="text-sm dark:text-gray-300 text-gray-700">
                  <span className="font-semibold">As a</span> <span className="text-purple-600 dark:text-purple-400">{story.as}</span>,
                </p>
                <p className="text-sm dark:text-gray-300 text-gray-700">
                  <span className="font-semibold">I want</span> <span className="text-blue-600 dark:text-blue-400">{story.want}</span>
                </p>
                <p className="text-sm dark:text-gray-300 text-gray-700">
                  <span className="font-semibold">So that</span> <span className="text-green-600 dark:text-green-400">{story.so}</span>
                </p>
              </div>

              {/* Acceptance Criteria */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <h4 className="text-xs font-semibold dark:text-white">Acceptance Criteria:</h4>
                </div>
                <ul className="space-y-1">
                  {story.acceptanceCriteria.map((criteria, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs dark:text-gray-400 text-gray-600">
                      <CheckCircle className="w-3 h-3 mt-0.5 text-green-500 flex-shrink-0" />
                      <span>{criteria}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
