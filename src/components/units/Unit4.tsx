import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, GitBranch, TrendingUp } from 'lucide-react';
import { WBSTree } from '../visualizations/WBSTree';
import { GanttChart } from '../visualizations/GanttChart';
import { NetworkDiagram } from '../visualizations/NetworkDiagram';
import { PERTChart } from '../visualizations/PERTChart';

interface Unit4Props {
  onComplete?: () => void;
}

export function Unit4({ onComplete }: Unit4Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) {
        setTimeout(onComplete, 1000);
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          Unit IV: Project Scheduling Techniques
        </h1>
        <p className="text-xl dark:text-gray-300 text-gray-700 max-w-3xl mx-auto">
          How does Sarah keep QuickBite on track? Let's explore powerful scheduling techniques and critical path analysis!
        </p>
      </motion.div>

      {/* Story Continuation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 rounded-2xl p-8 border border-orange-500/20"
      >
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center text-3xl flex-shrink-0">
            📅
          </div>
          <div>
            <h3 className="text-2xl font-bold dark:text-white mb-2">Planning the Timeline</h3>
            <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
              "We have 6 months to launch," Sarah says. "Let's break down the work, estimate durations, and 
              identify dependencies. I'll use WBS, Gantt charts, and CPM to ensure we hit our deadline!"
            </p>
          </div>
        </div>
      </motion.div>

      {/* Work Breakdown Structure */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Work Breakdown Structure (WBS)</h2>
        <p className="dark:text-gray-300 text-gray-700 mb-6">
          Break down the entire project into manageable pieces. Each level gets more detailed:
        </p>
        <WBSTree />
        <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
          <h4 className="font-bold dark:text-white mb-2">💡 Why WBS Matters</h4>
          <ul className="space-y-2 text-sm dark:text-gray-300 text-gray-700">
            <li>✅ Nothing gets forgotten - every task is accounted for</li>
            <li>✅ Easy to assign responsibilities to team members</li>
            <li>✅ Helps estimate time and cost accurately</li>
            <li>✅ Foundation for all other scheduling techniques</li>
          </ul>
        </div>
      </div>

      {/* Activity Sequencing */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Activity Sequencing & Dependencies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold dark:text-white mb-4">Dependency Types</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-medium dark:text-white">Finish-to-Start (FS)</p>
                <p className="text-sm dark:text-gray-400 text-gray-600">Task B starts after Task A finishes</p>
                <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Example: Design UI → Implement UI</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-medium dark:text-white">Start-to-Start (SS)</p>
                <p className="text-sm dark:text-gray-400 text-gray-600">Task B starts when Task A starts</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">Example: Write docs || Code features</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-medium dark:text-white">Finish-to-Finish (FF)</p>
                <p className="text-sm dark:text-gray-400 text-gray-600">Task B finishes when Task A finishes</p>
                <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">Example: Testing ends with coding</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 rounded-xl p-6 border border-orange-500/20">
            <h3 className="text-xl font-bold dark:text-white mb-4">QuickBite Sequencing</h3>
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-3"
              >
                <p className="text-sm font-medium dark:text-white">1. Database Design</p>
                <p className="text-xs dark:text-gray-400 text-gray-600">Duration: 1 week</p>
              </motion.div>
              <div className="flex justify-center">
                <div className="w-0.5 h-6 bg-orange-500"></div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-3"
              >
                <p className="text-sm font-medium dark:text-white">2. API Development</p>
                <p className="text-xs dark:text-gray-400 text-gray-600">Duration: 3 weeks</p>
              </motion.div>
              <div className="flex justify-center">
                <div className="w-0.5 h-6 bg-orange-500"></div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-3"
              >
                <p className="text-sm font-medium dark:text-white">3. Frontend Integration</p>
                <p className="text-xs dark:text-gray-400 text-gray-600">Duration: 2 weeks</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Network Diagram */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Network Diagrams</h2>
        <p className="dark:text-gray-300 text-gray-700 mb-6">
          Visualize task dependencies and identify parallel work opportunities:
        </p>
        <NetworkDiagram />
      </div>

      {/* Gantt Chart */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Gantt Charts</h2>
        <p className="dark:text-gray-300 text-gray-700 mb-6">
          The classic timeline view showing when each task happens:
        </p>
        <GanttChart />
      </div>

      {/* Critical Path Method */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Critical Path Method (CPM)</h2>
        <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 dark:from-red-500/20 dark:to-pink-500/20 rounded-xl p-8 border border-red-500/20 mb-6">
          <div className="flex items-start gap-6">
            <div className="text-6xl">🎯</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold dark:text-white mb-4">What is Critical Path?</h3>
              <p className="dark:text-gray-300 text-gray-700 mb-4">
                The <strong>longest sequence of dependent tasks</strong> that determines the minimum project duration. 
                Any delay on the critical path delays the entire project!
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <p className="text-sm font-medium dark:text-white mb-2">Critical Path = Maximum time path from start to finish</p>
                <p className="text-xs dark:text-gray-400 text-gray-600">Tasks not on critical path have "slack time" (buffer)</p>
              </div>
            </div>
          </div>
        </div>

        <NetworkDiagram highlightCritical />
        
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
            <h4 className="font-bold text-red-600 dark:text-red-400 mb-3">🚨 Critical Tasks (Zero Slack)</h4>
            <ul className="space-y-2 text-sm dark:text-gray-300 text-gray-700">
              <li>✓ Database Design → API Development → Testing</li>
              <li>✓ Any delay here delays the project</li>
              <li>✓ These tasks need closest monitoring</li>
            </ul>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
            <h4 className="font-bold text-green-600 dark:text-green-400 mb-3">✅ Non-Critical Tasks (Have Slack)</h4>
            <ul className="space-y-2 text-sm dark:text-gray-300 text-gray-700">
              <li>✓ UI Design has 3 days slack</li>
              <li>✓ Can be delayed without impacting deadline</li>
              <li>✓ Can reassign resources if needed</li>
            </ul>
          </div>
        </div>
      </div>

      {/* PERT Chart */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">PERT Charts</h2>
        <p className="dark:text-gray-300 text-gray-700 mb-6">
          Program Evaluation and Review Technique - handles uncertainty in time estimates:
        </p>
        <PERTChart />
        
        <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
          <h4 className="font-bold dark:text-white mb-4">📊 PERT Formula for Expected Time</h4>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
            <p className="text-2xl font-bold dark:text-white mb-2">
              Expected Time = (O + 4M + P) / 6
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4 text-sm">
              <div>
                <p className="font-medium dark:text-white">O = Optimistic</p>
                <p className="text-xs dark:text-gray-400 text-gray-600">Best case scenario</p>
              </div>
              <div>
                <p className="font-medium dark:text-white">M = Most Likely</p>
                <p className="text-xs dark:text-gray-400 text-gray-600">Realistic estimate</p>
              </div>
              <div>
                <p className="font-medium dark:text-white">P = Pessimistic</p>
                <p className="text-xs dark:text-gray-400 text-gray-600">Worst case scenario</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slack Time */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Slack Time (Float)</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold dark:text-white mb-4">Total Slack</h3>
            <p className="dark:text-gray-300 text-gray-700 mb-4">
              Maximum time a task can be delayed without delaying the project
            </p>
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-4">
              <p className="font-mono text-sm dark:text-white">
                Total Slack = LS - ES = LF - EF
              </p>
              <p className="text-xs dark:text-gray-400 text-gray-600 mt-2">
                LS = Latest Start, ES = Earliest Start<br/>
                LF = Latest Finish, EF = Earliest Finish
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold dark:text-white mb-4">Free Slack</h3>
            <p className="dark:text-gray-300 text-gray-700 mb-4">
              Time a task can be delayed without delaying successor tasks
            </p>
            <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-lg p-4">
              <p className="font-mono text-sm dark:text-white">
                Free Slack = ES(successor) - EF
              </p>
              <p className="text-xs dark:text-gray-400 text-gray-600 mt-2">
                More conservative than total slack
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Control */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Schedule Control</h2>
        <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 rounded-xl p-8 border border-purple-500/20">
          <h3 className="text-xl font-bold dark:text-white mb-6">Sarah's Schedule Control Practices:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '📊', title: 'Progress Tracking', desc: 'Weekly status reports and burndown charts' },
              { icon: '🔍', title: 'Variance Analysis', desc: 'Compare actual vs planned progress' },
              { icon: '⚠️', title: 'Early Warning', desc: 'Flag delays before they become critical' },
              { icon: '🔄', title: 'Corrective Actions', desc: 'Adjust resources or scope when needed' },
              { icon: '📅', title: 'Milestone Reviews', desc: 'Major checkpoints every 2 weeks' },
              { icon: '💬', title: 'Stakeholder Updates', desc: 'Regular communication on timeline' }
            ].map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 bg-white dark:bg-gray-800 rounded-lg p-4"
              >
                <div className="text-3xl">{practice.icon}</div>
                <div>
                  <p className="font-medium dark:text-white">{practice.title}</p>
                  <p className="text-sm dark:text-gray-400 text-gray-600">{practice.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white"
      >
        <h3 className="text-2xl font-bold mb-4">🎯 Key Takeaways</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>WBS breaks projects into manageable pieces</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>Critical Path determines minimum project duration</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>Gantt charts provide clear timeline visualization</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>PERT handles uncertainty with three-point estimates</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
