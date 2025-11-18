import React from 'react';
import { motion } from 'motion/react';

export function ClassDiagram() {
  const classes = [
    {
      name: 'User',
      attributes: ['- id: string', '- name: string', '- email: string', '- phone: string'],
      methods: ['+ login()', '+ logout()', '+ updateProfile()'],
      position: { x: 0, y: 0 },
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Restaurant',
      attributes: ['- id: string', '- name: string', '- cuisine: string', '- rating: number'],
      methods: ['+ getMenu()', '+ updateHours()', '+ acceptOrder()'],
      position: { x: 1, y: 0 },
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Order',
      attributes: ['- id: string', '- userId: string', '- items: Item[]', '- total: number'],
      methods: ['+ placeOrder()', '+ cancelOrder()', '+ trackStatus()'],
      position: { x: 0, y: 1 },
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Payment',
      attributes: ['- id: string', '- orderId: string', '- amount: number', '- method: string'],
      methods: ['+ processPayment()', '+ refund()', '+ getReceipt()'],
      position: { x: 1, y: 1 },
      color: 'from-orange-500 to-red-500'
    }
  ];

  const relationships = [
    { from: 0, to: 2, label: 'places', type: '1..*' },
    { from: 1, to: 2, label: 'fulfills', type: '1..*' },
    { from: 2, to: 3, label: 'has', type: '1' }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg overflow-x-auto">
      <div className="grid grid-cols-2 gap-8 min-w-max">
        {classes.map((cls, index) => (
          <motion.div
            key={cls.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            className={`bg-gradient-to-br ${cls.color} rounded-lg p-1`}
            style={{
              gridColumn: cls.position.x + 1,
              gridRow: cls.position.y + 1
            }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
              {/* Class name */}
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded px-3 py-2 mb-3">
                <h4 className="font-bold text-center dark:text-white">{cls.name}</h4>
              </div>

              {/* Attributes */}
              <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
                {cls.attributes.map((attr, i) => (
                  <p key={i} className="text-xs dark:text-gray-300 text-gray-700 font-mono">
                    {attr}
                  </p>
                ))}
              </div>

              {/* Methods */}
              <div>
                {cls.methods.map((method, i) => (
                  <p key={i} className="text-xs dark:text-gray-300 text-gray-700 font-mono">
                    {method}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
        <p className="text-sm dark:text-gray-300 text-gray-700">
          <strong>Relationships:</strong> User places Orders → Restaurant fulfills Orders → Order has Payment
        </p>
      </div>
    </div>
  );
}
