import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCw } from 'lucide-react';

export function IterativeModel() {
  const [currentIteration, setCurrentIteration] = useState(0);

  const iterations = [
    {
      number: 1,
      name: 'Basic Prototype',
      features: ['User login', 'Restaurant list', 'Basic UI'],
      outcome: 'Feedback: Need search & filters',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: 2,
      name: 'Enhanced Version',
      features: ['Search restaurants', 'Filter by cuisine', 'Improved UI'],
      outcome: 'Feedback: Add cart & checkout',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: 3,
      name: 'Complete MVP',
      features: ['Shopping cart', 'Payment integration', 'Order tracking'],
      outcome: 'Feedback: Add ratings & reviews',
      color: 'from-green-500 to-green-600'
    },
    {
      number: 4,
      name: 'Production Ready',
      features: ['Reviews system', 'Notifications', 'Analytics dashboard'],
      outcome: 'Ready for launch! 🚀',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const cyclePhases = [
    { name: 'Plan', icon: '📋', desc: 'Define iteration goals' },
    { name: 'Design', icon: '🎨', desc: 'Design new features' },
    { name: 'Develop', icon: '💻', desc: 'Build & code' },
    { name: 'Test', icon: '🧪', desc: 'Test & validate' },
    { name: 'Review', icon: '📊', desc: 'Get feedback' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIteration((prev) => (prev + 1) % iterations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
      <div className="mb-6">
        <h3 className="text-2xl font-bold dark:text-white mb-2">Iterative Model</h3>
        <p className="dark:text-gray-300 text-gray-700">
          Develop software through repeated cycles (iterations). Each iteration produces a working version 
          that is refined based on feedback. Start simple, improve continuously!
        </p>
      </div>

      {/* Cycle Visualization */}
      <div className="mb-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
        <div className="relative w-full max-w-md mx-auto">
          {/* Center circle showing current iteration */}
          <motion.div
            key={currentIteration}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${iterations[currentIteration].color} flex items-center justify-center text-white shadow-lg`}>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">#{iterations[currentIteration].number}</div>
                <div className="text-xs font-medium">{iterations[currentIteration].name}</div>
              </div>
            </div>
          </motion.div>

          {/* Circular phases */}
          <div className="relative w-80 h-80 mx-auto">
            {cyclePhases.map((phase, index) => {
              const angle = (index * 72 - 90) * (Math.PI / 180);
              const x = Math.cos(angle) * 140;
              const y = Math.sin(angle) * 140;
              
              return (
                <motion.div
                  key={phase.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                  }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.4
                    }}
                    className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-4 text-white shadow-lg w-24 text-center"
                  >
                    <div className="text-2xl mb-1">{phase.icon}</div>
                    <div className="text-xs font-bold">{phase.name}</div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Rotation indicator */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-dashed border-purple-300 dark:border-purple-700 rounded-full"
          />
        </div>
      </div>

      {/* Iteration Details */}
      <div className="mb-6">
        <h4 className="font-bold dark:text-white mb-4 flex items-center gap-2">
          <RefreshCw className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          QuickBite Development Iterations:
        </h4>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIteration}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-r ${iterations[currentIteration].color} rounded-xl p-6 text-white shadow-lg mb-4`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-xl">
                {iterations[currentIteration].number}
              </div>
              <h5 className="text-xl font-bold">{iterations[currentIteration].name}</h5>
            </div>
            <div className="mb-3">
              <p className="text-sm font-medium mb-2">Features Added:</p>
              <ul className="space-y-1">
                {iterations[currentIteration].features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-white/90">✓ {feature}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-sm font-medium mb-1">Outcome:</p>
              <p className="text-sm text-white/90">{iterations[currentIteration].outcome}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress indicator */}
        <div className="flex gap-2 justify-center">
          {iterations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIteration(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIteration 
                  ? 'bg-purple-600 dark:bg-purple-400 w-8' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Advantages & Disadvantages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="grid md:grid-cols-2 gap-4"
      >
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <h5 className="font-bold text-green-600 dark:text-green-400 mb-2">✅ Advantages</h5>
          <ul className="text-sm dark:text-gray-300 text-gray-700 space-y-1">
            <li>• Working software early and often</li>
            <li>• Easier to incorporate feedback</li>
            <li>• Risk reduced through iterations</li>
            <li>• Parallel development possible</li>
          </ul>
        </div>
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <h5 className="font-bold text-red-600 dark:text-red-400 mb-2">❌ Disadvantages</h5>
          <ul className="text-sm dark:text-gray-300 text-gray-700 space-y-1">
            <li>• Requires good planning</li>
            <li>• More management overhead</li>
            <li>• Architecture may need refactoring</li>
            <li>• Not suitable for small projects</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
