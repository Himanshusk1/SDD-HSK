import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function WaterfallModel() {
  const phases = [
    {
      name: 'Requirements',
      icon: '📋',
      description: 'Gather and document all requirements',
      example: 'Define QuickBite features, user needs',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Design',
      icon: '🎨',
      description: 'Create system architecture and UI/UX',
      example: 'Database schema, wireframes, API design',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Implementation',
      icon: '💻',
      description: 'Write code based on design specs',
      example: 'Build frontend, backend, integrate systems',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Testing',
      icon: '🧪',
      description: 'Verify software meets requirements',
      example: 'Unit tests, integration tests, UAT',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      name: 'Deployment',
      icon: '🚀',
      description: 'Release to production environment',
      example: 'Launch QuickBite to app stores',
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Maintenance',
      icon: '🔧',
      description: 'Fix bugs, add updates, provide support',
      example: 'Bug fixes, feature updates, user support',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
      <div className="mb-6">
        <h3 className="text-2xl font-bold dark:text-white mb-2">Waterfall Model</h3>
        <p className="dark:text-gray-300 text-gray-700">
          Sequential phases where each phase must be completed before the next begins. 
          Like water flowing down - you can't go back up!
        </p>
      </div>

      <div className="space-y-4">
        {phases.map((phase, index) => (
          <React.Fragment key={phase.name}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative"
            >
              <div className={`bg-gradient-to-r ${phase.color} rounded-xl p-6 text-white shadow-lg`}>
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{phase.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      <h4 className="text-xl font-bold">{phase.name}</h4>
                    </div>
                    <p className="text-white/90 mb-2">{phase.description}</p>
                    <p className="text-sm text-white/80 italic">
                      📌 Example: {phase.example}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {index < phases.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.3 }}
                className="flex justify-center"
              >
                <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-500" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: phases.length * 0.2 + 0.5 }}
        className="mt-8 grid md:grid-cols-2 gap-4"
      >
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <h5 className="font-bold text-green-600 dark:text-green-400 mb-2">✅ Advantages</h5>
          <ul className="text-sm dark:text-gray-300 text-gray-700 space-y-1">
            <li>• Simple and easy to understand</li>
            <li>• Well-documented phases</li>
            <li>• Works well for stable requirements</li>
            <li>• Clear milestones and deliverables</li>
          </ul>
        </div>
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <h5 className="font-bold text-red-600 dark:text-red-400 mb-2">❌ Disadvantages</h5>
          <ul className="text-sm dark:text-gray-300 text-gray-700 space-y-1">
            <li>• Difficult to accommodate changes</li>
            <li>• No working software until late</li>
            <li>• High risk for complex projects</li>
            <li>• Customer sees product only at end</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
