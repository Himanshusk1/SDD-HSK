import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function SequenceDiagram() {
  const [activeStep, setActiveStep] = useState(0);

  const actors = ['User', 'Frontend', 'API', 'Database', 'Payment'];
  const steps = [
    { from: 0, to: 1, message: '1. Click "Place Order"' },
    { from: 1, to: 2, message: '2. POST /orders' },
    { from: 2, to: 3, message: '3. Save order' },
    { from: 3, to: 2, message: '4. Order ID' },
    { from: 2, to: 4, message: '5. Process payment' },
    { from: 4, to: 2, message: '6. Payment confirmed' },
    { from: 2, to: 1, message: '7. Success response' },
    { from: 1, to: 0, message: '8. Show confirmation' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg overflow-x-auto">
      <div className="min-w-max">
        {/* Actors */}
        <div className="flex justify-around mb-8">
          {actors.map((actor, index) => (
            <div key={actor} className="flex flex-col items-center w-32">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-3xl mb-2 shadow-lg"
              >
                {index === 0 ? '👤' : index === 1 ? '💻' : index === 2 ? '⚙️' : index === 3 ? '🗄️' : '💳'}
              </motion.div>
              <p className="font-bold dark:text-white text-sm text-center">{actor}</p>
              {/* Lifeline */}
              <div className="w-0.5 h-96 bg-gradient-to-b from-purple-500 to-blue-500 mt-4"></div>
            </div>
          ))}
        </div>

        {/* Messages */}
        <div className="relative" style={{ height: '400px' }}>
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <AnimatePresence mode="wait">
              {steps.slice(0, activeStep + 1).map((step, index) => {
                const fromX = step.from * 160 + 64;
                const toX = step.to * 160 + 64;
                const y = index * 50 + 20;
                const isReturn = step.from > step.to;

                return (
                  <g key={index}>
                    {/* Arrow line */}
                    <motion.line
                      x1={fromX}
                      y1={y}
                      x2={toX}
                      y2={y}
                      stroke={isReturn ? '#10b981' : '#8b5cf6'}
                      strokeWidth="2"
                      strokeDasharray={isReturn ? '5,5' : '0'}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                    {/* Arrow head */}
                    <polygon
                      points={`${toX},${y} ${toX - (isReturn ? -6 : 6)},${y - 4} ${toX - (isReturn ? -6 : 6)},${y + 4}`}
                      fill={isReturn ? '#10b981' : '#8b5cf6'}
                    />
                  </g>
                );
              })}
            </AnimatePresence>
          </svg>
          
          {/* Message labels */}
          <AnimatePresence mode="wait">
            {steps.slice(0, activeStep + 1).map((step, index) => {
              const fromX = step.from * 160 + 64;
              const toX = step.to * 160 + 64;
              const y = index * 50 + 20;

              return (
                <motion.div
                  key={`label-${index}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bg-white dark:bg-gray-700 border-2 border-purple-500 rounded px-2 py-1"
                  style={{
                    left: `${Math.min(fromX, toX) + Math.abs(toX - fromX) / 2 - 60}px`,
                    top: `${y - 25}px`,
                    fontSize: '10px'
                  }}
                >
                  <p className="dark:text-white whitespace-nowrap">{step.message}</p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm dark:text-gray-400 text-gray-600">
          Step {activeStep + 1} of {steps.length}
        </p>
      </div>
    </div>
  );
}