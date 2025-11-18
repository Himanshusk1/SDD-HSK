import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Zap, Users, RefreshCw, Target, Calendar } from 'lucide-react';
import { AgileManifesto } from '../visualizations/AgileManifesto';
import { ScrumBoard } from '../visualizations/ScrumBoard';
import { BurndownChart } from '../visualizations/BurndownChart';
import { UserStoryCards } from '../visualizations/UserStoryCards';
import { SprintCycle } from '../visualizations/SprintCycle';

interface Unit3Props {
  onComplete?: () => void;
}

export function Unit3({ onComplete }: Unit3Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) {
        setTimeout(onComplete, 1000);
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const problemsSolved = [
    {
      problem: 'Long wait for features',
      solution: 'Deliver working software every 2 weeks',
      icon: '⚡'
    },
    {
      problem: 'Rigid requirements',
      solution: 'Welcome changing requirements anytime',
      icon: '🔄'
    },
    {
      problem: 'Miscommunication',
      solution: 'Daily standups and close collaboration',
      icon: '💬'
    },
    {
      problem: 'Late bug discovery',
      solution: 'Continuous testing and integration',
      icon: '🐛'
    }
  ];

  const scrumVsKanban = [
    { aspect: 'Iterations', scrum: 'Fixed 2-4 week sprints', kanban: 'Continuous flow' },
    { aspect: 'Roles', scrum: 'Scrum Master, PO, Team', kanban: 'Flexible roles' },
    { aspect: 'Changes', scrum: 'No changes mid-sprint', kanban: 'Changes anytime' },
    { aspect: 'Best For', scrum: 'Defined releases', kanban: 'Ongoing support' }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
          Unit III: Agile & Scrum Framework
        </h1>
        <p className="text-xl dark:text-gray-300 text-gray-700 max-w-3xl mx-auto">
          QuickBite team embraces Agile! Let's see how they run sprints, manage backlogs, and deliver value continuously.
        </p>
      </motion.div>

      {/* Story Continuation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-green-500/10 to-teal-500/10 dark:from-green-500/20 dark:to-teal-500/20 rounded-2xl p-8 border border-green-500/20"
      >
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center text-3xl flex-shrink-0">
            🏃‍♂️
          </div>
          <div>
            <h3 className="text-2xl font-bold dark:text-white mb-2">Going Agile!</h3>
            <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
              "Traditional waterfall is too slow," Sarah announces. "We're going Agile! We'll work in 2-week sprints, 
              hold daily standups, and ship working features every sprint. Let's embrace change and deliver value fast!"
            </p>
          </div>
        </div>
      </motion.div>

      {/* Genesis of Agile */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Genesis of Agile</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="dark:text-gray-300 text-gray-700 leading-relaxed mb-4">
                In 2001, 17 software developers met at a ski resort in Utah. They were frustrated with 
                heavyweight, document-driven processes that slowed down software delivery.
              </p>
              <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                Together, they created the <strong>Agile Manifesto</strong> - a revolutionary approach 
                that prioritizes people, working software, collaboration, and flexibility.
              </p>
            </div>
            <div className="text-6xl">📜</div>
          </div>
        </div>
      </div>

      {/* Agile Manifesto */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">The Agile Manifesto</h2>
        <AgileManifesto />
      </div>

      {/* Problems Agile Solves */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Problems Agile Solves</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {problemsSolved.map((item, index) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{item.icon}</div>
                <div className="flex-1">
                  <div className="mb-3 pb-3 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-xs font-semibold text-red-600 dark:text-red-400 mb-1">❌ Problem</p>
                    <p className="dark:text-gray-300 text-gray-700">{item.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">✅ Agile Solution</p>
                    <p className="dark:text-gray-300 text-gray-700">{item.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lean Software */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Lean Software Development</h2>
        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 rounded-xl p-8 border border-orange-500/20">
          <p className="dark:text-gray-300 text-gray-700 mb-6">
            Inspired by Toyota's manufacturing, Lean focuses on eliminating waste and maximizing value:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Eliminate Waste', desc: 'Remove unnecessary features and processes' },
              { title: 'Amplify Learning', desc: 'Quick feedback loops and iterations' },
              { title: 'Deliver Fast', desc: 'Ship features as soon as ready' },
              { title: 'Empower Team', desc: 'Let developers make decisions' },
              { title: 'Build Quality In', desc: 'Test from day one' },
              { title: 'See the Whole', desc: 'Optimize the entire system' }
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4"
              >
                <h4 className="font-bold dark:text-white mb-2">{principle.title}</h4>
                <p className="text-sm dark:text-gray-400 text-gray-600">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scrum Introduction */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Introduction to Scrum</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-6">
          <div className="flex items-start gap-6">
            <div className="text-6xl">🏉</div>
            <div className="flex-1">
              <p className="dark:text-gray-300 text-gray-700 leading-relaxed mb-4">
                <strong>Scrum</strong> is an Agile framework that organizes work into fixed-length iterations called <strong>sprints</strong>.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                  <p className="font-bold dark:text-white mb-2">👤 Product Owner</p>
                  <p className="text-sm dark:text-gray-400 text-gray-600">Defines features and priorities</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                  <p className="font-bold dark:text-white mb-2">🎯 Scrum Master</p>
                  <p className="text-sm dark:text-gray-400 text-gray-600">Removes blockers, facilitates</p>
                </div>
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                  <p className="font-bold dark:text-white mb-2">👥 Development Team</p>
                  <p className="text-sm dark:text-gray-400 text-gray-600">Builds the product</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SprintCycle />
      </div>

      {/* Product & Sprint Backlog */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Backlogs & User Stories</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-bold dark:text-white mb-4">📋 Product Backlog</h3>
            <p className="dark:text-gray-300 text-gray-700 mb-4">
              Master list of all features, prioritized by value. Sarah maintains this constantly.
            </p>
            <ul className="space-y-2 text-sm dark:text-gray-400 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs">1</span>
                User authentication & signup
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs">2</span>
                Restaurant search & filters
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xs">3</span>
                Order placement flow
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-xl p-6 border border-blue-500/20">
            <h3 className="text-xl font-bold dark:text-white mb-4">🎯 Sprint Backlog</h3>
            <p className="dark:text-gray-300 text-gray-700 mb-4">
              Subset of Product Backlog committed for this sprint. Team pulls from Product Backlog.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">Sprint 1 (2 weeks)</p>
              <ul className="space-y-1 text-sm dark:text-gray-400 text-gray-600">
                <li>✅ User registration page</li>
                <li>🔄 Email verification</li>
                <li>⏳ Password reset flow</li>
              </ul>
            </div>
          </div>
        </div>

        <UserStoryCards />
      </div>

      {/* Scrum Board */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Scrum Board in Action</h2>
        <ScrumBoard />
      </div>

      {/* Scrum vs Kanban */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Scrum vs Kanban</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <tr>
                <th className="p-4 text-left">Aspect</th>
                <th className="p-4 text-left">🏉 Scrum</th>
                <th className="p-4 text-left">📊 Kanban</th>
              </tr>
            </thead>
            <tbody>
              {scrumVsKanban.map((row, index) => (
                <motion.tr
                  key={row.aspect}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <td className="p-4 font-medium dark:text-white">{row.aspect}</td>
                  <td className="p-4 dark:text-gray-300 text-gray-700">{row.scrum}</td>
                  <td className="p-4 dark:text-gray-300 text-gray-700">{row.kanban}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Burndown Chart */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Sprint Burndown Chart</h2>
        <p className="dark:text-gray-300 text-gray-700 mb-6">
          Track remaining work over time. If the line goes below ideal, you're ahead of schedule!
        </p>
        <BurndownChart />
      </div>

      {/* Key Takeaways */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white"
      >
        <h3 className="text-2xl font-bold mb-4">🎯 Key Takeaways</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>Agile values people and collaboration over rigid processes</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>Scrum organizes work into sprints with clear roles</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>User stories capture requirements from user perspective</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>Burndown charts visualize progress throughout the sprint</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
