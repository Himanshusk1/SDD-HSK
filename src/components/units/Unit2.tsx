import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Code, Layers, GitBranch, Users, Zap, FileText } from 'lucide-react';
import { ClassDiagram } from '../visualizations/ClassDiagram';
import { SequenceDiagram } from '../visualizations/SequenceDiagram';
import { SDLCWheel } from '../visualizations/SDLCWheel';
import { W5HHPrinciple } from '../visualizations/W5HHPrinciple';

interface Unit2Props {
  onComplete?: () => void;
}

export function Unit2({ onComplete }: Unit2Props) {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) {
        setTimeout(onComplete, 1000);
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const designPrinciples = [
    {
      title: 'Modularity',
      icon: '🧩',
      good: 'Separate components for User, Restaurant, Order',
      bad: 'Everything in one giant file',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Abstraction',
      icon: '🎭',
      good: 'Hide complex payment logic behind simple API',
      bad: 'Expose all payment gateway details everywhere',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Encapsulation',
      icon: '📦',
      good: 'Keep user password logic private in User class',
      bad: 'Access password fields directly from anywhere',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Low Coupling',
      icon: '🔗',
      good: 'Restaurant module works independently',
      bad: 'Every module depends on every other module',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Unit II: Software Design & Development
        </h1>
        <p className="text-xl dark:text-gray-300 text-gray-700 max-w-3xl mx-auto">
          Now that QuickBite team chose Agile, let's design the system architecture and understand the development lifecycle!
        </p>
      </motion.div>

      {/* Story Continuation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-2xl p-8 border border-blue-500/20"
      >
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-3xl flex-shrink-0">
            🏗️
          </div>
          <div>
            <h3 className="text-2xl font-bold dark:text-white mb-2">Designing QuickBite's Architecture</h3>
            <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
              Alex begins designing the system. "We need clean architecture," he says. "Let's create UML diagrams 
              to visualize our classes, their relationships, and how they interact. Good design now saves us months later!"
            </p>
          </div>
        </div>
      </motion.div>

      {/* Importance of Software Design */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Why Software Design Matters</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: 'Faster Development', desc: 'Clear structure speeds up coding' },
            { icon: Users, title: 'Better Collaboration', desc: 'Team understands the system easily' },
            { icon: GitBranch, title: 'Easy Maintenance', desc: 'Changes are simple and safe' }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm dark:text-gray-400 text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SDLC */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Software Development Life Cycle (SDLC)</h2>
        <p className="dark:text-gray-300 text-gray-700 mb-6">
          The complete journey from idea to deployment and maintenance:
        </p>
        <SDLCWheel />
      </div>

      {/* Design Principles */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Principles of Good Design</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {designPrinciples.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 + 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${principle.color} flex items-center justify-center text-2xl`}>
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold dark:text-white">{principle.title}</h3>
              </div>
              
              <div className="space-y-3">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                  <p className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">✅ Good Practice</p>
                  <p className="text-sm dark:text-gray-300 text-gray-700">{principle.good}</p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                  <p className="text-xs font-semibold text-red-600 dark:text-red-400 mb-1">❌ Bad Practice</p>
                  <p className="text-sm dark:text-gray-300 text-gray-700">{principle.bad}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Structural View - Class Diagram */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Structural View: Class Diagrams</h2>
        <p className="dark:text-gray-300 text-gray-700 mb-6">
          Alex creates class diagrams to show QuickBite's main entities and their relationships:
        </p>
        <ClassDiagram />
      </div>

      {/* Dynamic View - Sequence Diagram */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Dynamic Behavioral View: Sequence Diagrams</h2>
        <p className="dark:text-gray-300 text-gray-700 mb-6">
          How do components interact when a user places an order? Let's trace the flow:
        </p>
        <SequenceDiagram />
      </div>

      {/* Project Management */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Role of Project Manager</h2>
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-xl p-8 border border-purple-500/20">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-4xl flex-shrink-0">
              👩‍💼
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold dark:text-white mb-4">Sarah's Responsibilities as PM:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <span className="text-2xl">📋</span>
                  <div>
                    <p className="font-medium dark:text-white">Planning & Scheduling</p>
                    <p className="text-sm dark:text-gray-400 text-gray-600">Define timeline and milestones</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">👥</span>
                  <div>
                    <p className="font-medium dark:text-white">Team Coordination</p>
                    <p className="text-sm dark:text-gray-400 text-gray-600">Facilitate communication</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <p className="font-medium dark:text-white">Risk Management</p>
                    <p className="text-sm dark:text-gray-400 text-gray-600">Identify and mitigate risks</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">📊</span>
                  <div>
                    <p className="font-medium dark:text-white">Progress Tracking</p>
                    <p className="text-sm dark:text-gray-400 text-gray-600">Monitor deliverables and quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barry Boehm's W5HH */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Barry Boehm's W5HH Principle</h2>
        <p className="dark:text-gray-300 text-gray-700 mb-6">
          Before starting any project, Sarah asks these critical questions:
        </p>
        <W5HHPrinciple />
      </div>

      {/* Key Takeaways */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white"
      >
        <h3 className="text-2xl font-bold mb-4">🎯 Key Takeaways</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>Good design principles lead to maintainable code</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>UML diagrams help visualize system structure and behavior</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>SDLC provides a structured approach to development</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>Project managers orchestrate all aspects of delivery</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
