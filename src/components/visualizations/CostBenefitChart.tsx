import React from 'react';
import { motion } from 'motion/react';

export function CostBenefitChart() {
  const costs = [
    { item: 'Development Team', amount: 200000 },
    { item: 'Infrastructure', amount: 50000 },
    { item: 'Marketing', amount: 80000 },
    { item: 'Operations', amount: 70000 }
  ];

  const benefits = [
    { item: 'Year 1 Revenue', amount: 500000 },
    { item: 'Year 2 Revenue', amount: 1200000 },
    { item: 'Brand Value', amount: 300000 }
  ];

  const totalCost = costs.reduce((sum, c) => sum + c.amount, 0);
  const totalBenefit = benefits.reduce((sum, b) => sum + b.amount, 0);
  const roi = ((totalBenefit - totalCost) / totalCost * 100).toFixed(1);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <h4 className="font-bold dark:text-white mb-6 text-center">QuickBite Financial Analysis</h4>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Costs */}
        <div>
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-3">
            <h5 className="font-bold text-red-600 dark:text-red-400 mb-3">💸 Costs</h5>
            <div className="space-y-2">
              {costs.map((cost, index) => (
                <motion.div
                  key={cost.item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex justify-between text-sm"
                >
                  <span className="dark:text-gray-300 text-gray-700">{cost.item}</span>
                  <span className="font-medium dark:text-white">${cost.amount.toLocaleString()}</span>
                </motion.div>
              ))}
              <div className="pt-2 border-t border-red-500/30 flex justify-between font-bold">
                <span className="dark:text-white">Total</span>
                <span className="text-red-600 dark:text-red-400">${totalCost.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-3">
            <h5 className="font-bold text-green-600 dark:text-green-400 mb-3">💰 Benefits</h5>
            <div className="space-y-2">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex justify-between text-sm"
                >
                  <span className="dark:text-gray-300 text-gray-700">{benefit.item}</span>
                  <span className="font-medium dark:text-white">${benefit.amount.toLocaleString()}</span>
                </motion.div>
              ))}
              <div className="pt-2 border-t border-green-500/30 flex justify-between font-bold">
                <span className="dark:text-white">Total</span>
                <span className="text-green-600 dark:text-green-400">${totalBenefit.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROI */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-6 text-white text-center"
      >
        <p className="text-sm mb-2">Return on Investment (ROI)</p>
        <p className="text-4xl font-bold">{roi}%</p>
        <p className="text-sm mt-2 text-white/80">Project is financially viable! ✅</p>
      </motion.div>
    </div>
  );
}
