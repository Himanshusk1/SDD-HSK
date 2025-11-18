import React from 'react';
import { motion } from 'motion/react';

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="fixed top-16 left-0 right-0 z-40">
      <motion.div
        className="h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
