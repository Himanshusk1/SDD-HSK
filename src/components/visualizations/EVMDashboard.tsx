import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export function EVMDashboard() {
  const metrics = {
    pv: 400000, // Planned Value
    ev: 420000, // Earned Value
    ac: 380000, // Actual Cost
    bac: 500000 // Budget at Completion
  };

  const cv = metrics.ev - metrics.ac; // Cost Variance
  const sv = metrics.ev - metrics.pv; // Schedule Variance
  const cpi = metrics.ev / metrics.ac; // Cost Performance Index
  const spi = metrics.ev / metrics.pv; // Schedule Performance Index
  const etc = (metrics.bac - metrics.ev) / cpi; // Estimate to Complete
  const eac = metrics.ac + etc; // Estimate at Completion

  return (
    <div className="space-y-6">
      {/* Main Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-500/10 to-blue-500/20 dark:from-blue-500/20 dark:to-blue-500/30 rounded-xl p-6 border border-blue-500/30"
        >
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">Planned Value (PV)</p>
          <p className="text-3xl font-bold dark:text-white">${(metrics.pv / 1000).toFixed(0)}K</p>
          <p className="text-xs dark:text-gray-400 text-gray-600 mt-1">What we planned to spend</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-green-500/10 to-green-500/20 dark:from-green-500/20 dark:to-green-500/30 rounded-xl p-6 border border-green-500/30"
        >
          <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">Earned Value (EV)</p>
          <p className="text-3xl font-bold dark:text-white">${(metrics.ev / 1000).toFixed(0)}K</p>
          <p className="text-xs dark:text-gray-400 text-gray-600 mt-1">Value of work completed</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-purple-500/10 to-purple-500/20 dark:from-purple-500/20 dark:to-purple-500/30 rounded-xl p-6 border border-purple-500/30"
        >
          <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">Actual Cost (AC)</p>
          <p className="text-3xl font-bold dark:text-white">${(metrics.ac / 1000).toFixed(0)}K</p>
          <p className="text-xs dark:text-gray-400 text-gray-600 mt-1">What we actually spent</p>
        </motion.div>
      </div>

      {/* Performance Indicators */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Cost Variance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className={`rounded-xl p-6 shadow-lg ${
            cv > 0
              ? 'bg-gradient-to-br from-green-500 to-green-600'
              : 'bg-gradient-to-br from-red-500 to-red-600'
          } text-white`}
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold">Cost Variance</p>
            {cv > 0 ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
          </div>
          <p className="text-3xl font-bold">${(cv / 1000).toFixed(0)}K</p>
          <p className="text-xs text-white/80 mt-1">
            {cv > 0 ? 'Under budget ✓' : 'Over budget ✗'}
          </p>
        </motion.div>

        {/* Schedule Variance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className={`rounded-xl p-6 shadow-lg ${
            sv > 0
              ? 'bg-gradient-to-br from-blue-500 to-blue-600'
              : 'bg-gradient-to-br from-orange-500 to-orange-600'
          } text-white`}
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold">Schedule Variance</p>
            {sv > 0 ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
          </div>
          <p className="text-3xl font-bold">${(sv / 1000).toFixed(0)}K</p>
          <p className="text-xs text-white/80 mt-1">
            {sv > 0 ? 'Ahead of schedule ✓' : 'Behind schedule ✗'}
          </p>
        </motion.div>

        {/* CPI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl p-6 shadow-lg text-white"
        >
          <p className="text-sm font-semibold mb-2">Cost Performance Index</p>
          <p className="text-3xl font-bold">{cpi.toFixed(2)}</p>
          <p className="text-xs text-white/80 mt-1">
            ${cpi.toFixed(2)} earned per $1 spent
          </p>
        </motion.div>

        {/* SPI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 shadow-lg text-white"
        >
          <p className="text-sm font-semibold mb-2">Schedule Performance Index</p>
          <p className="text-3xl font-bold">{spi.toFixed(2)}</p>
          <p className="text-xs text-white/80 mt-1">
            {(spi * 100).toFixed(0)}% of planned work done
          </p>
        </motion.div>
      </div>

      {/* Forecast */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
      >
        <h3 className="font-bold dark:text-white mb-4">Project Forecast</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-lg p-4">
            <p className="text-sm font-semibold dark:text-gray-300 text-gray-700 mb-1">Budget at Completion</p>
            <p className="text-2xl font-bold dark:text-white">${(metrics.bac / 1000).toFixed(0)}K</p>
            <p className="text-xs dark:text-gray-400 text-gray-600 mt-1">Original budget</p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg p-4 border border-blue-500/20">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">Estimate at Completion</p>
            <p className="text-2xl font-bold dark:text-white">${(eac / 1000).toFixed(0)}K</p>
            <p className="text-xs dark:text-gray-400 text-gray-600 mt-1">Expected final cost</p>
          </div>

          <div className={`rounded-lg p-4 ${
            eac < metrics.bac
              ? 'bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 border border-green-500/20'
              : 'bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 border border-red-500/20'
          }`}>
            <p className={`text-sm font-semibold mb-1 ${
              eac < metrics.bac ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            }`}>
              Variance at Completion
            </p>
            <p className="text-2xl font-bold dark:text-white">
              ${((metrics.bac - eac) / 1000).toFixed(0)}K
            </p>
            <p className="text-xs dark:text-gray-400 text-gray-600 mt-1">
              {eac < metrics.bac ? 'Under budget ✓' : 'Over budget ✗'}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 text-white"
      >
        <h4 className="font-bold text-lg mb-2">📊 Project Health: Excellent!</h4>
        <p className="text-white/90">
          QuickBite is performing well! CPI of {cpi.toFixed(2)} means we're getting more value per dollar spent. 
          SPI of {spi.toFixed(2)} shows we're ahead of schedule. Expected to finish ${((metrics.bac - eac) / 1000).toFixed(0)}K under budget!
        </p>
      </motion.div>
    </div>
  );
}
