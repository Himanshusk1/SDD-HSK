import React from 'react';
import { motion } from 'motion/react';
import { Users, Code, Briefcase, DollarSign, TrendingUp } from 'lucide-react';

export function StakeholderChain() {
  const stakeholders = [
    { icon: Users, name: 'Customers', role: 'Use the product', color: 'from-blue-500 to-cyan-500', emoji: '👥' },
    { icon: DollarSign, name: 'Investors', role: 'Fund the project', color: 'from-green-500 to-teal-500', emoji: '💰' },
    { icon: Briefcase, name: 'Product Manager', role: 'Define requirements', color: 'from-purple-500 to-pink-500', emoji: '👩‍💼' },
    { icon: Code, name: 'Developers', role: 'Build the software', color: 'from-orange-500 to-red-500', emoji: '👨‍💻' },
    { icon: TrendingUp, name: 'Management', role: 'Strategic decisions', color: 'from-indigo-500 to-purple-500', emoji: '📊' }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg overflow-x-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 min-w-max md:min-w-0">
        {stakeholders.map((stakeholder, index) => (
          <React.Fragment key={stakeholder.name}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${stakeholder.color} flex items-center justify-center text-4xl shadow-lg mb-3`}>
                {stakeholder.emoji}
              </div>
              <h4 className="font-bold dark:text-white text-center">{stakeholder.name}</h4>
              <p className="text-sm dark:text-gray-400 text-gray-600 text-center">{stakeholder.role}</p>
            </motion.div>
            
            {index < stakeholders.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: index * 0.2 + 0.3 }}
                className="hidden md:block"
              >
                <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600"></div>
                  <span className="text-2xl">→</span>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600"></div>
                </div>
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
