import React from 'react';
import { motion } from 'motion/react';

export function RiskMatrix() {
  const risks = [
    { name: 'Data breach', probability: 'Low', impact: 'High', x: 0, y: 2, priority: 'High' },
    { name: 'Server downtime', probability: 'Medium', impact: 'High', x: 1, y: 2, priority: 'High' },
    { name: 'Payment gateway failure', probability: 'Medium', impact: 'Medium', x: 1, y: 1, priority: 'Medium' },
    { name: 'Developer turnover', probability: 'Low', impact: 'Medium', x: 0, y: 1, priority: 'Medium' },
    { name: 'Minor UI bugs', probability: 'High', impact: 'Low', x: 2, y: 0, priority: 'Medium' },
    { name: 'Documentation delay', probability: 'Medium', impact: 'Low', x: 1, y: 0, priority: 'Low' }
  ];

  const getColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getCellColor = (x: number, y: number) => {
    const score = x + y;
    if (score >= 4) return 'bg-red-500/20 border-red-500/40';
    if (score >= 2) return 'bg-yellow-500/20 border-yellow-500/40';
    return 'bg-green-500/20 border-green-500/40';
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
        <div className="flex items-start gap-6">
          {/* Y-axis label */}
          <div className="flex items-center justify-center" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            <span className="font-bold dark:text-white">Impact →</span>
          </div>

          {/* Matrix */}
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-2 mb-4">
              {/* Rows from High to Low impact */}
              {[2, 1, 0].map((impactIndex) => (
                <React.Fragment key={impactIndex}>
                  {[0, 1, 2].map((probIndex) => {
                    const risksInCell = risks.filter(r => r.x === probIndex && r.y === impactIndex);
                    return (
                      <motion.div
                        key={`${probIndex}-${impactIndex}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (impactIndex * 3 + probIndex) * 0.1 }}
                        className={`h-32 rounded-lg border-2 ${getCellColor(probIndex, impactIndex)} p-2 flex flex-col gap-1`}
                      >
                        {risksInCell.map((risk, index) => (
                          <motion.div
                            key={risk.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: (impactIndex * 3 + probIndex) * 0.1 + 0.3 + index * 0.1 }}
                            className={`${getColor(risk.priority)} text-white text-[10px] px-2 py-1 rounded shadow-sm leading-tight`}
                          >
                            {risk.name}
                          </motion.div>
                        ))}
                      </motion.div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>

            {/* X-axis labels */}
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center text-sm font-semibold dark:text-white">Low</div>
              <div className="text-center text-sm font-semibold dark:text-white">Medium</div>
              <div className="text-center text-sm font-semibold dark:text-white">High</div>
            </div>
            <div className="text-center font-bold dark:text-white mt-2">← Probability</div>
          </div>
        </div>

        {/* Impact labels */}
        <div className="mt-4 ml-12 space-y-1">
          <div className="text-xs dark:text-gray-400 text-gray-600">
            <span className="font-semibold">High Impact:</span> Major business disruption
          </div>
          <div className="text-xs dark:text-gray-400 text-gray-600">
            <span className="font-semibold">Medium Impact:</span> Moderate disruption
          </div>
          <div className="text-xs dark:text-gray-400 text-gray-600">
            <span className="font-semibold">Low Impact:</span> Minor inconvenience
          </div>
        </div>
      </div>

      {/* Risk Response Strategy */}
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-red-500/10 to-red-500/20 dark:from-red-500/20 dark:to-red-500/30 rounded-xl p-6 border border-red-500/30"
        >
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-3">🚨 High Priority</h4>
          <p className="text-sm dark:text-gray-300 text-gray-700 mb-3">
            Immediate action required
          </p>
          <ul className="text-xs space-y-1 dark:text-gray-400 text-gray-600">
            <li>• Data breach → Implement encryption</li>
            <li>• Server downtime → Set up redundancy</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/20 dark:from-yellow-500/20 dark:to-yellow-500/30 rounded-xl p-6 border border-yellow-500/30"
        >
          <h4 className="font-bold text-yellow-600 dark:text-yellow-400 mb-3">⚠️ Medium Priority</h4>
          <p className="text-sm dark:text-gray-300 text-gray-700 mb-3">
            Monitor and mitigate
          </p>
          <ul className="text-xs space-y-1 dark:text-gray-400 text-gray-600">
            <li>• Payment failures → Test thoroughly</li>
            <li>• Dev turnover → Knowledge transfer</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-br from-green-500/10 to-green-500/20 dark:from-green-500/20 dark:to-green-500/30 rounded-xl p-6 border border-green-500/30"
        >
          <h4 className="font-bold text-green-600 dark:text-green-400 mb-3">✅ Low Priority</h4>
          <p className="text-sm dark:text-gray-300 text-gray-700 mb-3">
            Accept or monitor
          </p>
          <ul className="text-xs space-y-1 dark:text-gray-400 text-gray-600">
            <li>• Documentation delay → Plan buffer</li>
            <li>• Minor bugs → Fix in maintenance</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
