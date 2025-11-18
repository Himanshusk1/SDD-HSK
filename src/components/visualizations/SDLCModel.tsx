import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, FileText, Layers, Code, TestTube, Rocket, Wrench, CheckCircle } from 'lucide-react';
import { SDLCFlowDiagram } from './SDLCFlowDiagram';

export function SDLCModel() {
  const [activePhase, setActivePhase] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const phases = [
    {
      number: 1,
      name: 'Requirement Gathering & Analysis',
      icon: FileText,
      color: 'from-blue-500 to-blue-600',
      whatHappens: [
        'Understand what the customer wants',
        'Identify functional & non-functional requirements',
        'Check feasibility (technical, financial, operational)'
      ],
      documents: [
        'SRS (Software Requirements Specification)',
        'Feasibility Study Report',
        'Requirement Traceability Matrix'
      ],
      example: {
        title: 'Client Requirements for QuickBite:',
        items: [
          '✓ Users should sign up/login',
          '✓ Browse restaurants list',
          '✓ Add items to cart',
          '✓ Online payment integration',
          '✓ Real-time delivery tracking',
          '✓ Rating & reviews system'
        ]
      }
    },
    {
      number: 2,
      name: 'System Design',
      subtitle: '(High-Level & Low-Level Design)',
      icon: Layers,
      color: 'from-purple-500 to-purple-600',
      whatHappens: [
        'Decide how the system will work',
        'Define architecture, database, UI/UX, modules',
        'Create UML diagrams: Class, Sequence, Use Case'
      ],
      hld: [
        'Overall architecture (frontend-backend-database)',
        'Technology selection',
        'System components & interactions',
        'Network architecture'
      ],
      lld: [
        'Class-level details & relationships',
        'Database schema & tables',
        'API design & endpoints',
        'Algorithm design for core features'
      ],
      example: {
        title: 'QuickBite System Design:',
        items: [
          '🎨 Frontend: React.js with Tailwind CSS',
          '⚙️ Backend: Node.js + Express.js',
          '🗄️ Database: MySQL (relational data)',
          '📦 Modules: User, Restaurant, Orders, Delivery, Payments',
          '🔗 APIs: REST API for all operations',
          '📊 Draw class diagram of "Order" entity'
        ]
      }
    },
    {
      number: 3,
      name: 'Implementation / Coding',
      icon: Code,
      color: 'from-green-500 to-green-600',
      whatHappens: [
        'Developers write actual code',
        'Follow coding standards & best practices',
        'Use version control (Git)',
        'Each module coded according to design',
        'Code reviews & pair programming'
      ],
      documents: [
        'Source code files',
        'Git commits & branches',
        'Code documentation',
        'Unit test files'
      ],
      example: {
        title: 'Developer creates files:',
        items: [
          '📄 auth/login.js - User authentication',
          '📄 restaurants/restaurantController.js - Restaurant listings',
          '📄 orders/orderController.js - Order management',
          '📄 payments/paymentGateway.js - Payment processing',
          '📄 tracking/deliveryTracker.js - Real-time tracking',
          '📄 reviews/reviewService.js - Rating system'
        ]
      }
    },
    {
      number: 4,
      name: 'Testing',
      icon: TestTube,
      color: 'from-yellow-500 to-yellow-600',
      whatHappens: [
        'Test the software to find bugs',
        'Verify it matches the SRS',
        'Execute different types of testing',
        'Log defects & track fixes'
      ],
      testTypes: [
        {
          type: 'Unit Testing',
          desc: 'Test individual components/functions',
          example: 'Test login function with valid/invalid credentials'
        },
        {
          type: 'Integration Testing',
          desc: 'Test how modules work together',
          example: 'Test if cart integrates with payment gateway'
        },
        {
          type: 'System Testing',
          desc: 'Test the complete system',
          example: 'Complete order flow from browse to delivery'
        },
        {
          type: 'Acceptance Testing (UAT)',
          desc: 'Client validates the software',
          example: 'Restaurant owners test the admin panel'
        }
      ],
      example: {
        title: 'Test Cases for QuickBite:',
        items: [
          '✓ Login works with correct credentials',
          '✓ Payment fails gracefully with error message',
          '✓ Incorrect OTP shows proper error',
          '✓ Real-time tracking updates location',
          '✓ Cart calculates total correctly',
          '✓ Restaurant filters work properly'
        ]
      }
    },
    {
      number: 5,
      name: 'Deployment',
      icon: Rocket,
      color: 'from-orange-500 to-orange-600',
      whatHappens: [
        'Install the system on client/server',
        'Release software to users',
        'Can be done in phases (beta, pilot, full release)',
        'Configure production environment',
        'Data migration if needed'
      ],
      deploymentTypes: [
        'Beta Release - Limited users for testing',
        'Pilot Release - Specific region/group',
        'Phased Release - Gradual rollout',
        'Full Release - All users at once'
      ],
      example: {
        title: 'QuickBite Deployment:',
        items: [
          '📱 Play Store - Android app published',
          '🍎 App Store - iOS app published',
          '🌐 Website - Hosted on AWS/Azure',
          '🖥️ Admin Panel - Internal server deployment',
          '📊 Analytics - Set up monitoring tools',
          '🔔 Push Notifications - Firebase setup'
        ]
      }
    },
    {
      number: 6,
      name: 'Maintenance',
      icon: Wrench,
      color: 'from-red-500 to-red-600',
      whatHappens: [
        'Fix bugs after release',
        'Add new features based on feedback',
        'Regular updates & patches',
        'Performance optimization',
        'Security updates'
      ],
      maintenanceTypes: [
        {
          type: 'Corrective',
          desc: 'Fix bugs and errors',
          example: 'Fix crash on checkout page'
        },
        {
          type: 'Adaptive',
          desc: 'Adapt to new environment',
          example: 'Update for new Android version'
        },
        {
          type: 'Perfective',
          desc: 'Improve performance & features',
          example: 'Make app load faster'
        },
        {
          type: 'Preventive',
          desc: 'Prevent future problems',
          example: 'Code refactoring, security patches'
        }
      ],
      example: {
        title: 'QuickBite Maintenance Updates:',
        items: [
          '🎁 Add "Offers & Coupons" feature',
          '💬 Add "Live chat with delivery partner"',
          '🐛 Fix lag issues in tracking',
          '⭐ Improve rating system UI',
          '🔒 Security patch for payment gateway',
          '📈 Optimize database queries for speed'
        ]
      }
    }
  ];

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setActivePhase((prev) => (prev + 1) % phases.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [autoPlay]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
      <div className="mb-6">
        <h3 className="text-2xl font-bold dark:text-white mb-2">SDLC - Software Development Life Cycle</h3>
        <p className="dark:text-gray-300 text-gray-700">
          A systematic process for building software that ensures quality and correctness. 
          Follow these 6 phases sequentially to deliver successful software projects.
        </p>
      </div>

      {/* Phase Navigation */}
      <div className="mb-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {phases.map((phase, index) => {
          const Icon = phase.icon;
          return (
            <motion.button
              key={phase.number}
              onClick={() => {
                setActivePhase(index);
                setAutoPlay(false);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-xl text-center transition-all ${
                activePhase === index
                  ? `bg-gradient-to-br ${phase.color} text-white shadow-lg ring-4 ring-yellow-400`
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              <Icon className={`w-8 h-8 mx-auto mb-2 ${activePhase === index ? 'text-white' : ''}`} />
              <div className="text-xs font-bold mb-1">Phase {phase.number}</div>
              <div className="text-xs leading-tight">{phase.name.split(' ')[0]}</div>
            </motion.button>
          );
        })}
      </div>

      {/* Auto-play toggle */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setAutoPlay(!autoPlay)}
          className="px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium transition-colors"
        >
          {autoPlay ? '⏸️ Pause Auto-play' : '▶️ Resume Auto-play'}
        </button>
      </div>

      {/* Active Phase Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
        >
          {(() => {
            const phase = phases[activePhase];
            const Icon = phase.icon;
            
            return (
              <div className={`bg-gradient-to-r ${phase.color} rounded-xl p-8 text-white shadow-xl`}>
                {/* Phase Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-sm font-medium opacity-90">Phase {phase.number} of 6</div>
                    <h4 className="text-3xl font-bold">{phase.name}</h4>
                    {phase.subtitle && <p className="text-lg opacity-90">{phase.subtitle}</p>}
                  </div>
                </div>

                {/* What Happens */}
                <div className="bg-white/10 rounded-lg p-6 mb-4">
                  <h5 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    What Happens:
                  </h5>
                  <ul className="space-y-2">
                    {phase.whatHappens.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-yellow-300 mt-1">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Phase-specific content */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {/* Documents or HLD/LLD */}
                  {phase.documents && (
                    <div className="bg-white/10 rounded-lg p-4">
                      <h5 className="font-bold mb-2 flex items-center gap-2">
                        📋 Documents Created:
                      </h5>
                      <ul className="space-y-1 text-sm">
                        {phase.documents.map((doc, idx) => (
                          <li key={idx}>• {doc}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {phase.hld && (
                    <>
                      <div className="bg-white/10 rounded-lg p-4">
                        <h5 className="font-bold mb-2">🏗️ High-Level Design (HLD):</h5>
                        <ul className="space-y-1 text-sm">
                          {phase.hld.map((item, idx) => (
                            <li key={idx}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <h5 className="font-bold mb-2">🔍 Low-Level Design (LLD):</h5>
                        <ul className="space-y-1 text-sm">
                          {phase.lld.map((item, idx) => (
                            <li key={idx}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {/* Test Types */}
                  {phase.testTypes && (
                    <div className="md:col-span-2 bg-white/10 rounded-lg p-4">
                      <h5 className="font-bold mb-3">🧪 Types of Testing:</h5>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.testTypes.map((test, idx) => (
                          <div key={idx} className="bg-white/10 rounded p-3">
                            <p className="font-bold text-sm mb-1">{test.type}</p>
                            <p className="text-xs opacity-90 mb-1">{test.desc}</p>
                            <p className="text-xs italic text-yellow-200">Example: {test.example}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Deployment Types */}
                  {phase.deploymentTypes && (
                    <div className="md:col-span-2 bg-white/10 rounded-lg p-4">
                      <h5 className="font-bold mb-2">🚀 Deployment Strategies:</h5>
                      <div className="grid md:grid-cols-2 gap-2">
                        {phase.deploymentTypes.map((type, idx) => (
                          <div key={idx} className="text-sm">• {type}</div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Maintenance Types */}
                  {phase.maintenanceTypes && (
                    <div className="md:col-span-2 bg-white/10 rounded-lg p-4">
                      <h5 className="font-bold mb-3">🔧 Types of Maintenance:</h5>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.maintenanceTypes.map((maint, idx) => (
                          <div key={idx} className="bg-white/10 rounded p-3">
                            <p className="font-bold text-sm mb-1">{maint.type}</p>
                            <p className="text-xs opacity-90 mb-1">{maint.desc}</p>
                            <p className="text-xs italic text-yellow-200">Example: {maint.example}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Example */}
                <div className="bg-yellow-400/20 border-2 border-yellow-400/50 rounded-lg p-6">
                  <h5 className="text-xl font-bold mb-3 flex items-center gap-2">
                    🍔 {phase.example.title}
                  </h5>
                  <div className="grid md:grid-cols-2 gap-2">
                    {phase.example.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <span className="mt-0.5">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </motion.div>
      </AnimatePresence>

      {/* Flow Arrows */}
      <div className="mt-8 flex justify-center">
        <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
          {phases.map((phase, idx) => (
            <React.Fragment key={idx}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                idx <= activePhase 
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
              }`}>
                {phase.number}
              </div>
              {idx < phases.length - 1 && (
                <ChevronDown className={`w-5 h-5 rotate-[-90deg] ${
                  idx < activePhase ? 'text-purple-600 dark:text-purple-400' : 'text-gray-400'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Key Points */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/30 rounded-xl p-6"
      >
        <h5 className="font-bold dark:text-white mb-3">💡 SDLC Key Points:</h5>
        <div className="grid md:grid-cols-2 gap-3 text-sm dark:text-gray-300 text-gray-700">
          <div>✓ Each phase must be completed before moving to next</div>
          <div>✓ Proper documentation is essential at every phase</div>
          <div>✓ Testing catches bugs early, saving time and money</div>
          <div>✓ Maintenance is ongoing, not a one-time activity</div>
          <div>✓ Requirements must be clear to avoid rework</div>
          <div>✓ Good design prevents implementation problems</div>
        </div>
      </motion.div>
    </div>
  );
}