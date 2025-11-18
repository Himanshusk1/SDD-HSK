import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, TrendingUp, Award, AlertTriangle, Users as UsersIcon } from 'lucide-react';
import { EVMDashboard } from '../visualizations/EVMDashboard';
import { ParetoChart } from '../visualizations/ParetoChart';
import { RiskMatrix } from '../visualizations/RiskMatrix';
import { DecisionTree } from '../visualizations/DecisionTree';
import { RAMMatrix } from '../visualizations/RAMMatrix';

interface Unit5Props {
  onComplete?: () => void;
}

export function Unit5({ onComplete }: Unit5Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) {
        setTimeout(onComplete, 1000);
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const qualityTools = [
    { name: 'Pareto Analysis', desc: '80/20 rule - focus on vital few issues', icon: '📊' },
    { name: 'Six Sigma', desc: 'Reduce defects to 3.4 per million', icon: '🎯' },
    { name: 'ISO Standards', desc: 'International quality standards', icon: '📜' },
    { name: 'CMM Levels', desc: 'Capability Maturity Model', icon: '📈' }
  ];

  const cmmLevels = [
    { level: 1, name: 'Initial', desc: 'Ad-hoc, chaotic processes', color: 'from-red-500 to-orange-500' },
    { level: 2, name: 'Managed', desc: 'Basic project management', color: 'from-orange-500 to-yellow-500' },
    { level: 3, name: 'Defined', desc: 'Documented standard processes', color: 'from-yellow-500 to-green-500' },
    { level: 4, name: 'Quantitatively Managed', desc: 'Measured and controlled', color: 'from-green-500 to-blue-500' },
    { level: 5, name: 'Optimizing', desc: 'Continuous improvement', color: 'from-blue-500 to-purple-500' }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
          Unit V: Quality & Risk Management
        </h1>
        <p className="text-xl dark:text-gray-300 text-gray-700 max-w-3xl mx-auto">
          Launch day approaches! QuickBite team ensures quality, manages risks, and prepares for continuous delivery with DevOps.
        </p>
      </motion.div>

      {/* Story Continuation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-2xl p-8 border border-purple-500/20"
      >
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-3xl flex-shrink-0">
            🛡️
          </div>
          <div>
            <h3 className="text-2xl font-bold dark:text-white mb-2">Quality First, Risk Managed</h3>
            <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
              "We can't afford bugs in production," Sarah emphasizes. "Let's implement rigorous quality processes, 
              identify risks early, and set up DevOps for smooth continuous deployment!"
            </p>
          </div>
        </div>
      </motion.div>

      {/* Cost Management */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Cost Budgeting & Control</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {[
            { title: 'Cost Budgeting', icon: '💰', desc: 'Allocate budget to work packages', value: '$500K total' },
            { title: 'Cost Baseline', icon: '📊', desc: 'Approved time-phased budget', value: 'Sprint budgets' },
            { title: 'Cost Control', icon: '🎯', desc: 'Monitor actual vs planned', value: 'Weekly reviews' }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm dark:text-gray-400 text-gray-600 mb-2">{item.desc}</p>
              <p className="text-xs font-semibold text-purple-600 dark:text-purple-400">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Earned Value Management */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Earned Value Management (EVM)</h2>
        <p className="dark:text-gray-300 text-gray-700 mb-6">
          Integrates scope, schedule, and cost to measure project performance:
        </p>
        <EVMDashboard />
      </div>

      {/* Quality Management */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Quality Management</h2>
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-xl p-8 border border-blue-500/20 mb-6">
          <h3 className="text-xl font-bold dark:text-white mb-6">Three Pillars of Quality:</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="font-bold dark:text-white mb-2">Quality Planning</h4>
              <p className="text-sm dark:text-gray-400 text-gray-600">Define quality standards and metrics</p>
              <ul className="mt-3 space-y-1 text-xs dark:text-gray-400 text-gray-600">
                <li>• 99.9% uptime target</li>
                <li>• &lt;2s page load time</li>
                <li>• Zero critical bugs</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h4 className="font-bold dark:text-white mb-2">Quality Assurance</h4>
              <p className="text-sm dark:text-gray-400 text-gray-600">Ensure processes are followed</p>
              <ul className="mt-3 space-y-1 text-xs dark:text-gray-400 text-gray-600">
                <li>• Code reviews</li>
                <li>• Process audits</li>
                <li>• Best practices</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h4 className="font-bold dark:text-white mb-2">Quality Control</h4>
              <p className="text-sm dark:text-gray-400 text-gray-600">Verify deliverables meet standards</p>
              <ul className="mt-3 space-y-1 text-xs dark:text-gray-400 text-gray-600">
                <li>• Testing (unit, integration)</li>
                <li>• Defect tracking</li>
                <li>• Performance monitoring</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {qualityTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{tool.icon}</span>
                <h3 className="font-bold dark:text-white">{tool.name}</h3>
              </div>
              <p className="text-sm dark:text-gray-400 text-gray-600">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pareto Analysis */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Pareto Analysis (80/20 Rule)</h2>
        <p className="dark:text-gray-300 text-gray-700 mb-6">
          80% of problems come from 20% of causes. Focus on the vital few!
        </p>
        <ParetoChart />
      </div>

      {/* Six Sigma & CMM */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Six Sigma & CMM</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 dark:from-green-500/20 dark:to-teal-500/20 rounded-xl p-6 border border-green-500/20">
            <h3 className="text-xl font-bold dark:text-white mb-4">🎯 Six Sigma</h3>
            <p className="dark:text-gray-300 text-gray-700 mb-4">
              Data-driven approach to eliminate defects. Goal: 3.4 defects per million opportunities (99.99966% perfect)
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <p className="font-bold dark:text-white mb-3">DMAIC Process:</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">D</span>
                  <span className="dark:text-gray-300 text-gray-700">Define the problem</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">M</span>
                  <span className="dark:text-gray-300 text-gray-700">Measure current performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xs">A</span>
                  <span className="dark:text-gray-300 text-gray-700">Analyze root causes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs">I</span>
                  <span className="dark:text-gray-300 text-gray-700">Improve the process</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs">C</span>
                  <span className="dark:text-gray-300 text-gray-700">Control for sustainability</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-bold dark:text-white mb-4">📈 Capability Maturity Model (CMM)</h3>
            <p className="dark:text-gray-300 text-gray-700 mb-4">
              Framework for improving software development processes:
            </p>
            <div className="space-y-2">
              {cmmLevels.map((level, index) => (
                <motion.div
                  key={level.level}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-gradient-to-r ${level.color} p-3 rounded-lg text-white`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold">Level {level.level}:</span>
                    <span className="font-medium">{level.name}</span>
                  </div>
                  <p className="text-xs text-white/90">{level.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
          <h4 className="font-bold dark:text-white mb-2">📜 ISO Standards</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium dark:text-white">ISO 9001</p>
              <p className="text-xs dark:text-gray-400 text-gray-600">Quality management systems</p>
            </div>
            <div>
              <p className="font-medium dark:text-white">ISO/IEC 25010</p>
              <p className="text-xs dark:text-gray-400 text-gray-600">Software quality model</p>
            </div>
          </div>
        </div>
      </div>

      {/* HR Management */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Human Resource Management</h2>
        <RAMMatrix />
      </div>

      {/* Risk Management */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Risk Management Planning</h2>
        <p className="dark:text-gray-300 text-gray-700 mb-6">
          Identify, assess, and mitigate risks before they become issues:
        </p>
        <RiskMatrix />
      </div>

      {/* Expected Monetary Value */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Expected Monetary Value (EMV)</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <p className="dark:text-gray-300 text-gray-700 mb-6">
            Calculate the average outcome when the future includes scenarios with probabilities:
          </p>
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-6 mb-6">
            <p className="text-center text-2xl font-bold dark:text-white mb-4">
              EMV = Probability × Impact
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <p className="font-medium dark:text-white mb-2">Risk Example:</p>
                <p className="text-sm dark:text-gray-400 text-gray-600 mb-3">
                  30% chance of server failure costing $50,000
                </p>
                <p className="text-lg font-bold text-red-600 dark:text-red-400">
                  EMV = 0.30 × $50,000 = $15,000
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <p className="font-medium dark:text-white mb-2">Opportunity Example:</p>
                <p className="text-sm dark:text-gray-400 text-gray-600 mb-3">
                  40% chance of early launch earning $100,000
                </p>
                <p className="text-lg font-bold text-green-600 dark:text-green-400">
                  EMV = 0.40 × $100,000 = $40,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Tree */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Decision Tree Analysis</h2>
        <p className="dark:text-gray-300 text-gray-700 mb-6">
          Visualize decisions and their potential outcomes:
        </p>
        <DecisionTree />
      </div>

      {/* Releases vs Versions */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Releases vs Versions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-xl p-6 border border-blue-500/20">
            <h3 className="text-xl font-bold dark:text-white mb-4">📦 Release</h3>
            <p className="dark:text-gray-300 text-gray-700 mb-4">
              A specific version deployed to users. Major releases have big features.
            </p>
            <div className="space-y-2 text-sm">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                <p className="font-medium dark:text-white">Release 1.0 (Launch)</p>
                <p className="text-xs dark:text-gray-400 text-gray-600">Core ordering features</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                <p className="font-medium dark:text-white">Release 2.0</p>
                <p className="text-xs dark:text-gray-400 text-gray-600">Loyalty program added</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 dark:from-green-500/20 dark:to-teal-500/20 rounded-xl p-6 border border-green-500/20">
            <h3 className="text-xl font-bold dark:text-white mb-4">🔢 Version</h3>
            <p className="dark:text-gray-300 text-gray-700 mb-4">
              Unique identifier for software state. Follows semantic versioning.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <p className="font-bold dark:text-white mb-3">Semantic Versioning:</p>
              <div className="text-center mb-4">
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">v2.4.7</p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-center">
                  <p className="font-bold dark:text-white">2 (Major)</p>
                  <p className="dark:text-gray-400 text-gray-600">Breaking changes</p>
                </div>
                <div className="text-center">
                  <p className="font-bold dark:text-white">4 (Minor)</p>
                  <p className="dark:text-gray-400 text-gray-600">New features</p>
                </div>
                <div className="text-center">
                  <p className="font-bold dark:text-white">7 (Patch)</p>
                  <p className="dark:text-gray-400 text-gray-600">Bug fixes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DevOps */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Introduction to DevOps & Continuous Practices</h2>
        <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 rounded-xl p-8 border border-purple-500/20 mb-6">
          <div className="flex items-start gap-6 mb-6">
            <div className="text-6xl">🚀</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold dark:text-white mb-3">DevOps: Development + Operations</h3>
              <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                Culture and practices that bring development and operations teams together to deliver software 
                faster, more reliably, and with higher quality through automation and continuous feedback.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <div className="text-4xl mb-3">🔄</div>
              <h4 className="font-bold dark:text-white mb-2">Continuous Integration (CI)</h4>
              <p className="text-sm dark:text-gray-400 text-gray-600">
                Automatically build and test code with every commit. Catch bugs early!
              </p>
              <div className="mt-3 text-xs dark:text-gray-400 text-gray-600">
                Tools: GitHub Actions, Jenkins
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <div className="text-4xl mb-3">📦</div>
              <h4 className="font-bold dark:text-white mb-2">Continuous Delivery (CD)</h4>
              <p className="text-sm dark:text-gray-400 text-gray-600">
                Automatically deploy to staging. Production deployment with one click.
              </p>
              <div className="mt-3 text-xs dark:text-gray-400 text-gray-600">
                Tools: Docker, Kubernetes
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="font-bold dark:text-white mb-2">Continuous Deployment</h4>
              <p className="text-sm dark:text-gray-400 text-gray-600">
                Every passed test automatically goes to production. Ultimate automation!
              </p>
              <div className="mt-3 text-xs dark:text-gray-400 text-gray-600">
                Tools: GitLab CI/CD, CircleCI
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-bold dark:text-white mb-6">QuickBite's DevOps Pipeline:</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              { step: '1. Code', icon: '💻', desc: 'Developer pushes code' },
              { step: '2. Build', icon: '🔨', desc: 'Automated compilation' },
              { step: '3. Test', icon: '✅', desc: 'Run all tests' },
              { step: '4. Deploy', icon: '🚀', desc: 'Push to production' },
              { step: '5. Monitor', icon: '📊', desc: 'Track performance' }
            ].map((stage, index) => (
              <React.Fragment key={stage.step}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-3xl mb-3">
                    {stage.icon}
                  </div>
                  <p className="font-bold dark:text-white text-sm">{stage.step}</p>
                  <p className="text-xs dark:text-gray-400 text-gray-600">{stage.desc}</p>
                </motion.div>
                {index < 4 && (
                  <div className="hidden md:block text-2xl dark:text-gray-600 text-gray-400">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Final Success Story */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-8 text-white"
      >
        <div className="flex items-start gap-6">
          <div className="text-6xl">🎉</div>
          <div>
            <h3 className="text-2xl font-bold mb-4">QuickBite Launches Successfully!</h3>
            <p className="text-white/90 mb-4 leading-relaxed">
              After 6 months of planning, designing, developing with Agile sprints, managing schedules, 
              ensuring quality, and mitigating risks - QuickBite is live! The team followed best practices 
              throughout, and now they're ready for continuous delivery with DevOps.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white/20 rounded-lg p-3">
                <p className="text-2xl font-bold">99.9%</p>
                <p className="text-sm">Uptime</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <p className="text-2xl font-bold">&lt;2s</p>
                <p className="text-sm">Load Time</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <p className="text-2xl font-bold">0</p>
                <p className="text-sm">Critical Bugs</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <p className="text-2xl font-bold">100+</p>
                <p className="text-sm">Daily Orders</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Key Takeaways */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white"
      >
        <h3 className="text-2xl font-bold mb-4">🎯 Key Takeaways</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>Quality management ensures deliverables meet standards</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>EVM integrates cost, schedule, and scope for performance measurement</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>Risk management proactively addresses threats and opportunities</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>DevOps enables continuous delivery and rapid feedback</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}