import React from 'react';
import { motion } from 'motion/react';

export function W5HHPrinciple() {
  const questions = [
    {
      question: 'Why',
      full: 'Why is the system being developed?',
      answer: 'To revolutionize food delivery with 10-minute guarantees',
      color: 'from-purple-500 to-purple-600',
      icon: '❓'
    },
    {
      question: 'What',
      full: 'What will be done?',
      answer: 'Mobile app + web platform with real-time tracking',
      color: 'from-blue-500 to-blue-600',
      icon: '📱'
    },
    {
      question: 'When',
      full: 'When will it be done?',
      answer: '6-month timeline, launch by Q3 2024',
      color: 'from-cyan-500 to-cyan-600',
      icon: '📅'
    },
    {
      question: 'Where',
      full: 'Where will resources come from?',
      answer: 'In-house team + cloud infrastructure (AWS)',
      color: 'from-green-500 to-green-600',
      icon: '🌍'
    },
    {
      question: 'Who',
      full: 'Who is responsible?',
      answer: 'Sarah (PM), Alex (Tech Lead), 8-person dev team',
      color: 'from-yellow-500 to-yellow-600',
      icon: '👥'
    },
    {
      question: 'How (technical)',
      full: 'How will it be done technically?',
      answer: 'React Native + Node.js + PostgreSQL + Redis',
      color: 'from-orange-500 to-orange-600',
      icon: '⚙️'
    },
    {
      question: 'How much',
      full: 'How much will it cost?',
      answer: '$500K budget (dev + infra + marketing)',
      color: 'from-red-500 to-red-600',
      icon: '💰'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {questions.map((item, index) => (
        <motion.div
          key={item.question}
          initial={{ opacity: 0, rotateY: -90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
        >
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl mb-4 shadow`}>
            {item.icon}
          </div>
          <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
            {item.question}
          </h3>
          <p className="text-sm dark:text-gray-400 text-gray-600 mb-3 italic">
            {item.full}
          </p>
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-lg p-3">
            <p className="text-sm dark:text-gray-200 text-gray-800 font-medium">
              {item.answer}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
