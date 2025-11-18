import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Lightbulb, Hammer, Eye } from 'lucide-react';

export function PrototypeModel() {
  const [currentPhase, setCurrentPhase] = useState(0);

  const phases = [
    {
      name: 'Gather Requirements',
      icon: MessageSquare,
      color: 'from-blue-500 to-blue-600',
      desc: 'Meet with stakeholders to understand needs',
      example: 'Sarah interviews restaurant owners and customers',
      output: 'Basic requirements document'
    },
    {
      name: 'Quick Design',
      icon: Lightbulb,
      color: 'from-purple-500 to-purple-600',
      desc: 'Create rapid design focused on user interface',
      example: 'Sketch wireframes for food ordering flow',
      output: 'UI mockups and user flow'
    },
    {
      name: 'Build Prototype',
      icon: Hammer,
      color: 'from-green-500 to-green-600',
      desc: 'Develop working model with key features',
      example: 'Build clickable prototype with basic ordering',
      output: 'Interactive prototype'
    },
    {
      name: 'User Evaluation',
      icon: Eye,
      color: 'from-orange-500 to-orange-600',
      desc: 'Get feedback from users and stakeholders',
      example: 'Users test prototype, suggest improvements',
      output: 'Feedback and refinement list'
    }
  ];

  const prototypeTypes = [
    {
      type: 'Throwaway Prototype',
      icon: '🗑️',
      desc: 'Built for understanding, then discarded',
      use: 'Clarify uncertain requirements',
      example: 'Quick mockup to test payment flow idea'
    },
    {
      type: 'Evolutionary Prototype',
      icon: '🌱',
      desc: 'Built and continuously refined into final product',
      use: 'When requirements are well understood',
      example: 'MVP that evolves into production app'
    }
  ];

  const versions = [
    { version: 'v0.1', features: 'Basic UI, static menu', feedback: 'Need search functionality' },
    { version: 'v0.2', features: 'Added search, filters', feedback: 'Add cart feature' },
    { version: 'v0.3', features: 'Shopping cart working', feedback: 'Need checkout process' },
    { version: 'v0.4', features: 'Complete ordering flow', feedback: 'Ready for development!' }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
      <div className="mb-6">
        <h3 className="text-2xl font-bold dark:text-white mb-2">Prototype Model</h3>
        <p className="dark:text-gray-300 text-gray-700">
          Build a working model (prototype) early to understand requirements better. 
          Show it to users, get feedback, and refine until everyone is happy!
        </p>
      </div>

      {/* Circular Process */}
      <div className="mb-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
        <div className="relative w-full max-w-lg mx-auto">
          {/* Circular phases */}
          <div className="grid grid-cols-2 gap-8">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={phase.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setCurrentPhase(index)}
                  className={`cursor-pointer bg-gradient-to-br ${phase.color} rounded-xl p-6 text-white shadow-lg ${
                    currentPhase === index ? 'ring-4 ring-yellow-400' : ''
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-3">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold mb-2 text-sm">{phase.name}</h4>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Connecting arrows overlay */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-6xl"
            >
              🔄
            </motion.div>
          </div>
        </div>

        {/* Phase Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-purple-500"
          >
            <h5 className="font-bold dark:text-white mb-3">{phases[currentPhase].name}</h5>
            <p className="text-sm dark:text-gray-300 text-gray-700 mb-2">{phases[currentPhase].desc}</p>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mb-2">
              <p className="text-xs font-medium dark:text-white mb-1">📌 QuickBite Example:</p>
              <p className="text-xs dark:text-gray-300 text-gray-700">{phases[currentPhase].example}</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium dark:text-white">Output:</span>
              <span className="text-purple-600 dark:text-purple-400">{phases[currentPhase].output}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prototype Types */}
      <div className="mb-6">
        <h4 className="font-bold dark:text-white mb-4">Types of Prototypes:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {prototypeTypes.map((proto, index) => (
            <motion.div
              key={proto.type}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 border border-purple-500/30 rounded-xl p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{proto.icon}</span>
                <h5 className="font-bold dark:text-white">{proto.type}</h5>
              </div>
              <p className="text-sm dark:text-gray-300 text-gray-700 mb-2">{proto.desc}</p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 mb-2">
                <p className="text-xs font-medium dark:text-white mb-1">Best for:</p>
                <p className="text-xs dark:text-gray-400 text-gray-600">{proto.use}</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded p-2">
                <p className="text-xs dark:text-gray-300 text-gray-700">
                  <strong>Example:</strong> {proto.example}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Prototype Evolution */}
      <div className="mb-6">
        <h4 className="font-bold dark:text-white mb-4">🔄 Prototype Evolution (QuickBite):</h4>
        <div className="space-y-3">
          {versions.map((ver, index) => (
            <motion.div
              key={ver.version}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="flex items-center gap-4"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center font-bold shadow-lg">
                {ver.version}
              </div>
              <div className="flex-1 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 border border-purple-500/30 rounded-lg p-4">
                <p className="text-sm font-medium dark:text-white mb-1">Features: {ver.features}</p>
                <p className="text-xs dark:text-gray-400 text-gray-600">💬 {ver.feedback}</p>
              </div>
              {index < versions.length - 1 && (
                <div className="flex-shrink-0 text-2xl">→</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Advantages & Disadvantages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="grid md:grid-cols-2 gap-4"
      >
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <h5 className="font-bold text-green-600 dark:text-green-400 mb-2">✅ Advantages</h5>
          <ul className="text-sm dark:text-gray-300 text-gray-700 space-y-1">
            <li>• Better understanding of requirements</li>
            <li>• Early user feedback</li>
            <li>• Missing features identified early</li>
            <li>• Reduces implementation risk</li>
          </ul>
        </div>
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <h5 className="font-bold text-red-600 dark:text-red-400 mb-2">❌ Disadvantages</h5>
          <ul className="text-sm dark:text-gray-300 text-gray-700 space-y-1">
            <li>• Users may expect prototype as final</li>
            <li>• Can lead to incomplete documentation</li>
            <li>• Extra time for prototyping phase</li>
            <li>• May overlook better alternatives</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
