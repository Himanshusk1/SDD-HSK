import React from 'react';
import { motion } from 'motion/react';

interface NetworkDiagramProps {
  highlightCritical?: boolean;
}

export function NetworkDiagram({ highlightCritical = false }: NetworkDiagramProps) {
  const nodes = [
    { id: 'A', name: 'Start', duration: 0, es: 0, ef: 0, ls: 0, lf: 0, x: 0, y: 1 },
    { id: 'B', name: 'DB Design', duration: 5, es: 0, ef: 5, ls: 0, lf: 5, x: 1, y: 0 },
    { id: 'C', name: 'UI Design', duration: 4, es: 0, ef: 4, ls: 3, lf: 7, x: 1, y: 2 },
    { id: 'D', name: 'API Dev', duration: 8, es: 5, ef: 13, ls: 5, lf: 13, x: 2, y: 0 },
    { id: 'E', name: 'Frontend', duration: 6, es: 7, ef: 13, ls: 7, lf: 13, x: 2, y: 2 },
    { id: 'F', name: 'Testing', duration: 4, es: 13, ef: 17, ls: 13, lf: 17, x: 3, y: 1 },
    { id: 'G', name: 'End', duration: 0, es: 17, ef: 17, ls: 17, lf: 17, x: 4, y: 1 }
  ];

  const edges = [
    { from: 'A', to: 'B', isCritical: true },
    { from: 'A', to: 'C', isCritical: false },
    { from: 'B', to: 'D', isCritical: true },
    { from: 'C', to: 'E', isCritical: false },
    { from: 'D', to: 'F', isCritical: true },
    { from: 'E', to: 'F', isCritical: false },
    { from: 'F', to: 'G', isCritical: true }
  ];

  const getNodePosition = (x: number, y: number) => ({
    left: `${x * 22 + 5}%`,
    top: `${y * 35 + 10}%`
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
      <div className="relative h-96">
        {/* Edges */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {edges.map((edge, index) => {
            const fromNode = nodes.find(n => n.id === edge.from)!;
            const toNode = nodes.find(n => n.id === edge.to)!;
            const fromPos = getNodePosition(fromNode.x, fromNode.y);
            const toPos = getNodePosition(toNode.x, toNode.y);
            
            const x1 = parseFloat(fromPos.left) + 4;
            const y1 = parseFloat(fromPos.top) + 3;
            const x2 = parseFloat(toPos.left) + 4;
            const y2 = parseFloat(toPos.top) + 3;

            const isCritical = highlightCritical && edge.isCritical;

            return (
              <motion.g
                key={`${edge.from}-${edge.to}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <line
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke={isCritical ? '#ef4444' : '#94a3b8'}
                  strokeWidth={isCritical ? '3' : '2'}
                  markerEnd="url(#arrowhead)"
                />
              </motion.g>
            );
          })}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#94a3b8" />
            </marker>
          </defs>
        </svg>

        {/* Nodes */}
        {nodes.map((node, index) => {
          const slack = node.lf - node.ef;
          const isCritical = highlightCritical && slack === 0;
          
          return (
            <motion.div
              key={node.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.15 }}
              className="absolute"
              style={getNodePosition(node.x, node.y)}
            >
              <div className={`relative ${isCritical ? 'ring-4 ring-red-500' : ''} rounded-lg`}>
                <div className={`w-24 h-24 rounded-lg shadow-xl flex flex-col items-center justify-center text-white ${
                  node.id === 'A' || node.id === 'G'
                    ? 'bg-gradient-to-br from-purple-600 to-blue-600'
                    : isCritical
                    ? 'bg-gradient-to-br from-red-500 to-red-600'
                    : 'bg-gradient-to-br from-gray-500 to-gray-600'
                }`}>
                  <p className="font-bold text-lg">{node.id}</p>
                  <p className="text-[10px] leading-tight text-center px-1">{node.name}</p>
                  {node.duration > 0 && (
                    <p className="text-xs mt-1">{node.duration}d</p>
                  )}
                </div>

                {/* ES, EF, LS, LF info */}
                {node.id !== 'A' && node.id !== 'G' && (
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-700 rounded px-2 py-1 shadow text-[10px] whitespace-nowrap">
                    <div className="grid grid-cols-2 gap-x-2 dark:text-gray-300 text-gray-700">
                      <span>ES:{node.es}</span>
                      <span>EF:{node.ef}</span>
                      <span>LS:{node.ls}</span>
                      <span>LF:{node.lf}</span>
                    </div>
                    {highlightCritical && (
                      <div className={`text-center font-bold mt-1 ${slack === 0 ? 'text-red-600' : 'text-green-600'}`}>
                        Slack: {slack}d
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {highlightCritical && (
        <div className="mt-16 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-red-500"></div>
              <span className="text-sm dark:text-gray-300 text-gray-700">Critical Path</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gray-500"></div>
              <span className="text-sm dark:text-gray-300 text-gray-700">Non-Critical Path</span>
            </div>
          </div>
          <p className="text-center text-sm dark:text-gray-400 text-gray-600 mt-3">
            <strong>Critical Path:</strong> A → B → D → F → G (17 days minimum)
          </p>
        </div>
      )}
    </div>
  );
}
