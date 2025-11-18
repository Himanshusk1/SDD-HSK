import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function SDLCFlowDiagram() {
  const phases = [
    { 
      num: '1', 
      name: 'Requirements', 
      icon: '📋', 
      color: 'from-blue-500 to-blue-600',
      output: 'SRS Document'
    },
    { 
      num: '2', 
      name: 'Design', 
      icon: '🎨', 
      color: 'from-purple-500 to-purple-600',
      output: 'HLD & LLD'
    },
    { 
      num: '3', 
      name: 'Implementation', 
      icon: '💻', 
      color: 'from-green-500 to-green-600',
      output: 'Source Code'
    },
    { 
      num: '4', 
      name: 'Testing', 
      icon: '🧪', 
      color: 'from-yellow-500 to-yellow-600',
      output: 'Test Reports'
    },
    { 
      num: '5', 
      name: 'Deployment', 
      icon: '🚀', 
      color: 'from-orange-500 to-orange-600',
      output: 'Live System'
    },
    { 
      num: '6', 
      name: 'Maintenance', 
      icon: '🔧', 
      color: 'from-red-500 to-red-600',
      output: 'Updates & Fixes'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
      <h4 className="text-xl font-bold dark:text-white mb-6 text-center">
        SDLC Flow Diagram
      </h4>
      
      {/* Desktop View - Horizontal Flow */}
      <div className="hidden md:flex items-center justify-center gap-2 mb-8">
        {phases.map((phase, index) => (
          <React.Fragment key={phase.num}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${phase.color} text-white shadow-lg flex flex-col items-center justify-center mb-2 transform hover:scale-110 transition-transform`}>
                <div className="text-3xl mb-1">{phase.icon}</div>
                <div className="text-xs font-bold text-center px-1">{phase.name}</div>
              </div>
              <div className="text-xs font-medium text-purple-600 dark:text-purple-400 text-center">
                {phase.output}
              </div>
            </motion.div>
            
            {index < phases.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 + 0.1 }}
              >
                <ArrowRight className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile View - Vertical Flow */}
      <div className="md:hidden space-y-3">
        {phases.map((phase, index) => (
          <React.Fragment key={phase.num}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="flex items-center gap-3"
            >
              <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${phase.color} text-white shadow-lg flex flex-col items-center justify-center flex-shrink-0`}>
                <div className="text-2xl mb-1">{phase.icon}</div>
                <div className="text-xs font-bold">{phase.num}</div>
              </div>
              <div className="flex-1">
                <div className="font-bold dark:text-white">{phase.name}</div>
                <div className="text-xs text-purple-600 dark:text-purple-400">{phase.output}</div>
              </div>
            </motion.div>
            
            {index < phases.length - 1 && (
              <div className="flex justify-center">
                <div className="w-0.5 h-6 bg-purple-400 dark:bg-purple-600"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Cycle Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-6 py-3">
          <div className="text-2xl">🔄</div>
          <div className="text-sm font-medium dark:text-white">
            After Deployment, feedback loops back to Requirements for updates
          </div>
        </div>
      </motion.div>

      {/* Quick Reference */}
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
          <div className="text-center mb-2">
            <span className="text-2xl">⏱️</span>
          </div>
          <p className="text-xs text-center dark:text-gray-300 text-gray-700">
            <strong>Sequential:</strong> Each phase must complete before next begins
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
          <div className="text-center mb-2">
            <span className="text-2xl">📄</span>
          </div>
          <p className="text-xs text-center dark:text-gray-300 text-gray-700">
            <strong>Documentation:</strong> Every phase produces important documents
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
          <div className="text-center mb-2">
            <span className="text-2xl">✅</span>
          </div>
          <p className="text-xs text-center dark:text-gray-300 text-gray-700">
            <strong>Quality:</strong> Testing ensures software meets requirements
          </p>
        </div>
      </div>
    </div>
  );
}
