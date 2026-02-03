'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import NoteCard, { NoteCardProps } from '@/components/ui/NoteCard';

interface PainPoint extends Omit<NoteCardProps, 'status' | 'onStatusChange'> {
  id: string;
  status: 'not-started' | 'in-progress' | 'completed';
}

const painPoints: PainPoint[] = [
  {
    id: 'pain-1',
    title: '记不住事',
    description: '我跟踪的长期任务，一旦被眼前临近的紧急任务占满头脑，很快便会发生遗忘\n不紧急但重要的长期任务，总在忙碌中遗忘，导致错过关键节点',
    status: 'not-started',
  },
  {
    id: 'pain-2',
    title: '工具太复杂',
    description: '现有工具规则复杂、学习成本高，难以坚持使用，最终放弃',
    status: 'not-started',
  },
  {
    id: 'pain-3',
    title: '缺乏触达',
    description: '记录后不直观，打开率低，形同虚设，无法真正帮助记忆',
    status: 'not-started',
  },
  {
    id: 'insight',
    title: '💡 核心洞察',
    description: '我们需要的不是"调度大脑"，而是"外化记忆"——让看见变成记住',
    status: 'completed',
  },
];

export default function PainPointsSection() {
  const [notes, setNotes] = useState<PainPoint[]>(painPoints);

  const handleStatusChange = (id: string, newStatus: 'not-started' | 'in-progress' | 'completed') => {
    setNotes(prev => prev.map(note =>
      note.id === id ? { ...note, status: newStatus } : note
    ));
  };

  return (
    <section id="pitch" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            你是否也有类似的困扰？
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-3">
            我自己也是 "长期任务遗忘患者"。
          </p>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            试过备忘录，但不够好用，学习待办工具，却被复杂操作劝退，才挖出了下面的核心痛点
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            点击便签卡片，来看看 ClueBoard 是如何表现的吧
          </p>
        </motion.div>

        {/* 便签画布 */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* 痛点便签 */}
          {notes.slice(0, 3).map((note, index) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <NoteCard
                {...note}
                status={note.status}
                onStatusChange={handleStatusChange}
              />
            </motion.div>
          ))}

          {/* 洞察便签 - 跨两列 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2"
          >
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-[var(--priority-low)] rounded-lg p-8 shadow-md">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💡</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    核心洞察
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    我们需要的不是"调度大脑"，而是"外化记忆"<br />
                    让重要的事情，一眼就能看见
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 底部提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-500">
            💡 点击便签可切换状态，体验 ClueBoard 的三态标记功能
          </p>
        </motion.div>
      </div>
    </section>
  );
}
