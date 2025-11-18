import React, { useState } from 'react';
import { motion } from 'motion/react';

export function AgileManifesto() {
  const [flipped, setFlipped] = useState<number | null>(null);

  const values = [
    {
      front: 'Individuals and interactions',
      back: 'over processes and tools',
      icon: '👥',
      color: 'from-purple-500 to-purple-600'
    },
    {
      front: 'Working software',
      back: 'over comprehensive documentation',
      icon: '💻',
      color: 'from-blue-500 to-blue-600'
    },
    {
      front: 'Customer collaboration',
      back: 'over contract negotiation',
      icon: '🤝',
      color: 'from-green-500 to-green-600'
    },
    {
      front: 'Responding to change',
      back: 'over following a plan',
      icon: '🔄',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {values.map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2 }}
          className="relative h-64 cursor-pointer"
          style={{ perspective: '1000px' }}
          onClick={() => setFlipped(flipped === index ? null : index)}
        >
          <motion.div
            className="relative w-full h-full"
            animate={{ rotateY: flipped === index ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-xl p-6 flex flex-col items-center justify-center shadow-lg`}
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="text-6xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold text-white text-center leading-tight">
                {value.front}
              </h3>
              <p className="text-white/70 text-sm mt-4">Click to flip</p>
            </div>

            {/* Back */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-xl p-6 flex flex-col items-center justify-center shadow-lg`}
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <p className="text-white/80 text-lg text-center mb-4">
                {value.front}
              </p>
              <p className="text-2xl font-bold text-white text-center leading-tight">
                {value.back}
              </p>
              <p className="text-white/70 text-sm mt-4">Click to flip back</p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
