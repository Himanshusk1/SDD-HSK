import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function SpiralModel() {
  const [activeQuadrant, setActiveQuadrant] = useState(0);

  const spiralCycles = [
    { cycle: 1, name: 'Initial Prototype', risk: 'Low', features: 'Basic UI mockup' },
    { cycle: 2, name: 'Enhanced Prototype', risk: 'Medium', features: 'Core ordering flow' },
    { cycle: 3, name: 'Beta Version', risk: 'Medium-High', features: 'Payment integration' },
    { cycle: 4, name: 'Production Release', risk: 'Managed', features: 'Full feature set' }
  ];

  const quadrants = [
    { name: '1. Planning', icon: '📋', color: 'from-blue-500 to-blue-600', desc: 'Identify objectives, alternatives, constraints' },
    { name: '2. Risk Analysis', icon: '⚠️', color: 'from-red-500 to-red-600', desc: 'Evaluate alternatives, identify and resolve risks' },
    { name: '3. Engineering', icon: '⚙️', color: 'from-green-500 to-green-600', desc: 'Develop and test the product' },
    { name: '4. Evaluation', icon: '✅', color: 'from-purple-500 to-purple-600', desc: 'Review with stakeholders, plan next iteration' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuadrant((prev) => (prev + 1) % quadrants.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
      <div className="mb-6">
        <h3 className="text-2xl font-bold dark:text-white mb-2">Spiral Model</h3>
        <p className="dark:text-gray-300 text-gray-700">
          Risk-driven process model that combines iterative development with systematic risk management. 
          Each spiral loop represents a phase with risk analysis at its core.
        </p>
      </div>

      {/* Spiral Visualization */}
      <div className="mb-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
        <div className="relative w-full max-w-2xl mx-auto">
          {/* Center risk analysis circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white z-10 shadow-lg"
          >
            <div className="text-center">
              <div className="text-2xl">⚠️</div>
              <div className="text-xs font-bold">Risk Analysis</div>
            </div>
          </motion.div>

          {/* Four Quadrants */}
          <div className="grid grid-cols-2 gap-4 aspect-square">
            {quadrants.map((quadrant, index) => (
              <motion.div
                key={quadrant.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: activeQuadrant === index ? 1.05 : 1,
                  y: activeQuadrant === index ? -5 : 0
                }}
                transition={{ delay: index * 0.2, duration: 0.3 }}
                className={`bg-gradient-to-br ${quadrant.color} rounded-xl p-6 text-white shadow-lg relative overflow-hidden`}
              >
                {activeQuadrant === index && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute inset-0 bg-white/30 rounded-xl"
                  />
                )}
                <div className="relative z-10">
                  <div className="text-4xl mb-2">{quadrant.icon}</div>
                  <h4 className="font-bold mb-2 text-sm">{quadrant.name}</h4>
                  <p className="text-xs text-white/90">{quadrant.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Spiral Cycles */}
      <div className="mb-6">
        <h4 className="font-bold dark:text-white mb-4">Spiral Cycles (QuickBite Example):</h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {spiralCycles.map((cycle, index) => (
            <motion.div
              key={cycle.cycle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 border border-purple-500/30 rounded-lg p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center font-bold text-sm">
                  {cycle.cycle}
                </div>
                <h5 className="font-bold dark:text-white text-sm">{cycle.name}</h5>
              </div>
              <p className="text-xs dark:text-gray-400 text-gray-600 mb-1">
                <strong>Risk:</strong> {cycle.risk}
              </p>
              <p className="text-xs dark:text-gray-400 text-gray-600">
                <strong>Output:</strong> {cycle.features}
              </p>
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
            <li>• Strong risk management focus</li>
            <li>• Flexible to accommodate changes</li>
            <li>• Early identification of issues</li>
            <li>• Good for large, complex projects</li>
          </ul>
        </div>
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <h5 className="font-bold text-red-600 dark:text-red-400 mb-2">❌ Disadvantages</h5>
          <ul className="text-sm dark:text-gray-300 text-gray-700 space-y-1">
            <li>• Complex and expensive</li>
            <li>• Requires risk assessment expertise</li>
            <li>• Not suitable for small projects</li>
            <li>• Time-consuming process</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
