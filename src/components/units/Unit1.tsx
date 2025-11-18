import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Rocket, Users, DollarSign, Target, TrendingUp, CheckCircle2 } from 'lucide-react';
import { AnimatedCard } from '../visualizations/AnimatedCard';
import { Timeline } from '../visualizations/Timeline';
import { StakeholderChain } from '../visualizations/StakeholderChain';
import { CostBenefitChart } from '../visualizations/CostBenefitChart';
import { WaterfallModel } from '../visualizations/WaterfallModel';
import { SpiralModel } from '../visualizations/SpiralModel';
import { VModel } from '../visualizations/VModel';
import { IterativeModel } from '../visualizations/IterativeModel';
import { PrototypeModel } from '../visualizations/PrototypeModel';
import { AgileLifecycle } from '../visualizations/AgileLifecycle';
import { SDLCModel } from '../visualizations/SDLCModel';
import { SDLCFlowDiagram } from '../visualizations/SDLCFlowDiagram';

interface Unit1Props {
  onComplete?: () => void;
}

export function Unit1({ onComplete }: Unit1Props) {
  const [activeModel, setActiveModel] = useState<string | null>(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
      if (onComplete) {
        setTimeout(onComplete, 1000);
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const models = [
    {
      id: 'iterative',
      title: 'Iterative Model',
      description: 'Develop through repeated cycles, refining with each iteration',
      icon: '🔄',
      color: 'from-purple-500 to-pink-500',
      example: 'QuickBite team builds basic food ordering → adds restaurant search → refines UI'
    },
    {
      id: 'incremental',
      title: 'Incremental Model',
      description: 'Build and deliver software in pieces, adding functionality step by step',
      icon: '📦',
      color: 'from-blue-500 to-cyan-500',
      example: 'Release 1: User registration → Release 2: Restaurant listing → Release 3: Order placement'
    },
    {
      id: 'agile',
      title: 'Agile Practices',
      description: 'Flexible, collaborative approach with continuous delivery in sprints',
      icon: '⚡',
      color: 'from-green-500 to-teal-500',
      example: 'QuickBite runs 2-week sprints, daily standups, delivers working features regularly'
    }
  ];

  const characteristics = [
    { icon: Target, title: 'Project Attributes', desc: 'Size, complexity, technology stack' },
    { icon: TrendingUp, title: 'Project Constraints', desc: 'Budget, timeline, resources' },
    { icon: CheckCircle2, title: 'Project Baseline', desc: 'Initial approved plan and scope' },
    { icon: Rocket, title: 'Project Charter', desc: 'Formal authorization document' }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Unit I: Software Design Process Models
        </h1>
        <p className="text-xl dark:text-gray-300 text-gray-700 max-w-3xl mx-auto">
          Meet the QuickBite team! They're building a food delivery app from scratch. 
          Let's explore how they choose the right development approach.
        </p>
      </motion.div>

      {/* Story Introduction */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 rounded-2xl p-8 border border-purple-500/20"
      >
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-3xl flex-shrink-0">
            🍔
          </div>
          <div>
            <h3 className="text-2xl font-bold dark:text-white mb-2">The QuickBite Story Begins</h3>
            <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
              Sarah (Product Manager), Alex (Lead Developer), and their team have an idea: 
              create the fastest food delivery platform in the city. But before writing a single line of code,
              they need to choose the right software development approach. Let's see which model fits their needs!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Process Models */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Software Design Process Models</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {models.map((model, index) => (
            <AnimatedCard
              key={model.id}
              delay={index * 0.2}
              onClick={() => setActiveModel(activeModel === model.id ? null : model.id)}
            >
              <div className={`p-6 rounded-xl bg-gradient-to-br ${model.color} text-white cursor-pointer transform transition-all hover:scale-105`}>
                <div className="text-5xl mb-4">{model.icon}</div>
                <h3 className="text-xl font-bold mb-2">{model.title}</h3>
                <p className="text-white/90 text-sm mb-4">{model.description}</p>
                
                <motion.div
                  initial={false}
                  animate={{ height: activeModel === model.id ? 'auto' : 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-white/20 mt-4">
                    <p className="text-xs font-medium mb-2">QuickBite Example:</p>
                    <p className="text-sm text-white/90">{model.example}</p>
                  </div>
                </motion.div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* Timeline Visualization */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Development Process Timeline</h2>
        <Timeline />
      </div>

      {/* Project Characteristics */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Software Project Characteristics</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {characteristics.map((char, index) => (
            <motion.div
              key={char.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <char.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white">{char.title}</h4>
                  <p className="text-sm dark:text-gray-400 text-gray-600">{char.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stakeholders */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Project Stakeholders</h2>
        <p className="dark:text-gray-300 text-gray-700 mb-6">
          Every software project involves multiple stakeholders with different roles and interests:
        </p>
        <StakeholderChain />
      </div>

      {/* Feasibility Study */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">Feasibility Study & Cost-Benefit Analysis</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20 rounded-xl p-6 border border-green-500/20"
          >
            <h3 className="text-xl font-bold dark:text-white mb-4">Feasibility Study</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium dark:text-white">Technical Feasibility</p>
                  <p className="text-sm dark:text-gray-400 text-gray-600">Can we build it with available technology?</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium dark:text-white">Economic Feasibility</p>
                  <p className="text-sm dark:text-gray-400 text-gray-600">Will it be profitable? ROI analysis</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium dark:text-white">Operational Feasibility</p>
                  <p className="text-sm dark:text-gray-400 text-gray-600">Can users adopt and use it effectively?</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <div>
            <CostBenefitChart />
          </div>
        </div>
      </div>

      {/* Detailed SDLC Models */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white mb-6">📚 Complete SDLC Model Library</h2>
        <p className="dark:text-gray-300 text-gray-700 mb-8">
          Explore each software development lifecycle model in detail. Each has its strengths and is suited for different project types.
        </p>
        
        <div className="space-y-8">
          {/* Waterfall Model */}
          <WaterfallModel />
          
          {/* Spiral Model */}
          <SpiralModel />
          
          {/* V-Model */}
          <VModel />
          
          {/* Iterative Model */}
          <IterativeModel />
          
          {/* Prototype Model */}
          <PrototypeModel />
          
          {/* Agile Lifecycle */}
          <AgileLifecycle />
          
          {/* SDLC Model */}
          <SDLCModel />
          
          {/* SDLC Flow Diagram */}
          <SDLCFlowDiagram />
        </div>
      </div>

      {/* Key Takeaways */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white"
      >
        <h3 className="text-2xl font-bold mb-4">🎯 Key Takeaways</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            <span>Choose the right process model based on project needs</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            <span>Understand stakeholder roles and expectations</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            <span>Conduct thorough feasibility studies before starting</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            <span>Define clear project baselines and charters</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}