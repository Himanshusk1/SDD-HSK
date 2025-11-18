import React from 'react';
import { motion } from 'motion/react';

export function SDLCWheel() {
  const phases = [
    { name: 'Planning', icon: '📋', desc: 'Define scope & objectives', color: 'from-purple-500 to-purple-600', angle: 0 },
    { name: 'Analysis', icon: '🔍', desc: 'Gather requirements', color: 'from-blue-500 to-blue-600', angle: 60 },
    { name: 'Design', icon: '🎨', desc: 'Architecture & UI/UX', color: 'from-cyan-500 to-cyan-600', angle: 120 },
    { name: 'Implementation', icon: '💻', desc: 'Write code', color: 'from-green-500 to-green-600', angle: 180 },
    { name: 'Testing', icon: '🧪', desc: 'QA & bug fixes', color: 'from-yellow-500 to-yellow-600', angle: 240 },
    { name: 'Deployment', icon: '🚀', desc: 'Release to production', color: 'from-orange-500 to-orange-600', angle: 300 }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
      <div className="relative w-full max-w-2xl mx-auto aspect-square flex items-center justify-center">
        {/* Center circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center z-10 shadow-2xl"
        >
          <div className="text-center text-white">
            <p className="font-bold text-lg">SDLC</p>
            <p className="text-xs">Lifecycle</p>
          </div>
        </motion.div>

        {/* Phase circles */}
        {phases.map((phase, index) => {
          const radius = 180;
          const angleRad = (phase.angle * Math.PI) / 180;
          const x = Math.cos(angleRad) * radius;
          const y = Math.sin(angleRad) * radius;

          return (
            <motion.div
              key={phase.name}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
              }}
            >
              <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${phase.color} p-1 shadow-xl`}>
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-2">
                  <div className="text-3xl mb-1">{phase.icon}</div>
                  <p className="font-bold text-xs dark:text-white text-center leading-tight">{phase.name}</p>
                  <p className="text-[8px] dark:text-gray-400 text-gray-600 text-center leading-tight mt-1">
                    {phase.desc}
                  </p>
                </div>
              </div>

              {/* Connection line */}
              <svg className="absolute top-1/2 left-1/2 pointer-events-none" style={{ zIndex: -1 }}>
                <motion.line
                  x1="0"
                  y1="0"
                  x2={-x}
                  y2={-y}
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          );
        })}

        {/* Circular arrow */}
        <motion.svg
          className="absolute w-full h-full"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <circle
            cx="50%"
            cy="50%"
            r="140"
            fill="none"
            stroke="url(#circleGradient)"
            strokeWidth="2"
            strokeDasharray="10,5"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="circleGradient">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
    </div>
  );
}
