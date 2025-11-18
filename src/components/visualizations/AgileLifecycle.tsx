import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

export function AgileLifecycle() {
  const [activePhase, setActivePhase] = useState(0);

  const agilePhases = [
    {
      name: 'Concept',
      icon: '💡',
      color: 'from-yellow-500 to-yellow-600',
      desc: 'Identify project vision and scope',
      activities: ['Define product vision', 'Identify stakeholders', 'Estimate resources'],
      output: 'Product vision document'
    },
    {
      name: 'Inception',
      icon: '🎯',
      color: 'from-blue-500 to-blue-600',
      desc: 'Form team and prepare for development',
      activities: ['Build team', 'Set up environment', 'Create initial backlog'],
      output: 'Ready-to-sprint team'
    },
    {
      name: 'Iteration/Sprint',
      icon: '🔄',
      color: 'from-purple-500 to-purple-600',
      desc: 'Develop working software in short cycles',
      activities: ['Sprint planning', 'Daily standups', 'Development', 'Testing', 'Sprint review'],
      output: 'Working software increment'
    },
    {
      name: 'Release',
      icon: '🚀',
      color: 'from-green-500 to-green-600',
      desc: 'Deploy software to production',
      activities: ['Final testing', 'Documentation', 'Training', 'Deploy to production'],
      output: 'Production release'
    },
    {
      name: 'Production',
      icon: '⚙️',
      color: 'from-orange-500 to-orange-600',
      desc: 'Monitor and support live system',
      activities: ['Monitor performance', 'User support', 'Gather feedback'],
      output: 'Stable production system'
    },
    {
      name: 'Retirement',
      icon: '📦',
      color: 'from-red-500 to-red-600',
      desc: 'End-of-life activities',
      activities: ['Migrate users', 'Archive data', 'Remove from production'],
      output: 'System decommissioned'
    }
  ];

  const agileValues = [
    { value: 'Individuals and interactions', over: 'processes and tools', icon: '👥' },
    { value: 'Working software', over: 'comprehensive documentation', icon: '💻' },
    { value: 'Customer collaboration', over: 'contract negotiation', icon: '🤝' },
    { value: 'Responding to change', over: 'following a plan', icon: '🔄' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % agilePhases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
      <div className="mb-6">
        <h3 className="text-2xl font-bold dark:text-white mb-2 flex items-center gap-2">
          <Zap className="w-8 h-8 text-yellow-500" />
          Agile Software Development Lifecycle
        </h3>
        <p className="dark:text-gray-300 text-gray-700">
          Iterative approach that delivers working software frequently, welcomes changing requirements, 
          and emphasizes collaboration between self-organizing teams.
        </p>
      </div>

      {/* Agile Values */}
      <div className="mb-8 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 dark:from-yellow-500/20 dark:to-orange-500/20 border border-yellow-500/30 rounded-xl p-6">
        <h4 className="font-bold dark:text-white mb-4">🎯 Agile Manifesto - Core Values:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {agileValues.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-4"
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">{item.icon}</span>
                <div className="flex-1">
                  <p className="font-bold text-purple-600 dark:text-purple-400">{item.value}</p>
                  <p className="text-sm dark:text-gray-400 text-gray-600">over {item.over}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lifecycle Phases */}
      <div className="mb-8">
        <h4 className="font-bold dark:text-white mb-4">Agile Project Lifecycle Phases:</h4>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          {agilePhases.map((phase, index) => (
            <motion.div
              key={phase.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: activePhase === index ? 1.1 : 1,
                y: activePhase === index ? -10 : 0
              }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActivePhase(index)}
              className={`cursor-pointer bg-gradient-to-br ${phase.color} rounded-xl p-4 text-white shadow-lg text-center ${
                activePhase === index ? 'ring-4 ring-yellow-400' : ''
              }`}
            >
              <div className="text-4xl mb-2">{phase.icon}</div>
              <div className="font-bold text-sm mb-1">{phase.name}</div>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold mx-auto">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Phase Details */}
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className={`bg-gradient-to-r ${agilePhases[activePhase].color} rounded-xl p-6 text-white shadow-lg`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">{agilePhases[activePhase].icon}</span>
            <div>
              <h5 className="text-2xl font-bold">{agilePhases[activePhase].name}</h5>
              <p className="text-white/90">{agilePhases[activePhase].desc}</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/20 rounded-lg p-4">
              <p className="font-bold mb-2">Key Activities:</p>
              <ul className="space-y-1 text-sm">
                {agilePhases[activePhase].activities.map((activity, idx) => (
                  <li key={idx}>• {activity}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <p className="font-bold mb-2">Output:</p>
              <p className="text-sm">{agilePhases[activePhase].output}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* QuickBite Agile Example */}
      <div className="mb-6">
        <h4 className="font-bold dark:text-white mb-4">🍔 QuickBite Agile Journey:</h4>
        <div className="space-y-3">
          {[
            { phase: 'Concept', example: 'Vision: "Fast, reliable food delivery app for busy professionals"' },
            { phase: 'Inception', example: 'Form team: Sarah (PM), Mike (Dev), Lisa (Designer), Tom (QA)' },
            { phase: 'Sprint 1-6', example: 'Build MVP in 2-week sprints: Auth → Menu → Cart → Checkout → Tracking' },
            { phase: 'Release 1.0', example: 'Deploy to App Store with core ordering features' },
            { phase: 'Production', example: 'Monitor metrics, fix bugs, gather user feedback for v2.0' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 border border-purple-500/30 rounded-lg p-4"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="font-bold dark:text-white text-sm">{item.phase}</p>
                <p className="text-xs dark:text-gray-400 text-gray-600">{item.example}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Agile Principles Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-green-500/10 to-teal-500/10 dark:from-green-500/20 dark:to-teal-500/20 border border-green-500/30 rounded-xl p-6"
      >
        <h5 className="font-bold dark:text-white mb-3">⚡ Key Agile Principles:</h5>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span>
            <p className="dark:text-gray-300 text-gray-700">Deliver working software frequently (weeks not months)</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span>
            <p className="dark:text-gray-300 text-gray-700">Welcome changing requirements, even late in development</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span>
            <p className="dark:text-gray-300 text-gray-700">Face-to-face conversation is most efficient communication</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span>
            <p className="dark:text-gray-300 text-gray-700">Build projects around motivated individuals</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span>
            <p className="dark:text-gray-300 text-gray-700">Self-organizing teams produce best architectures</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400">✓</span>
            <p className="dark:text-gray-300 text-gray-700">Regular reflection and adjustment for effectiveness</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
