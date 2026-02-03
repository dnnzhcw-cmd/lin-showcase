'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  {
    color: 'bg-green-500',
    icon: '🟢',
    title: '自由白板',
    description: '无网格限制，拖拽排列，还原线索墙体验',
  },
  {
    color: 'bg-blue-400',
    icon: '🔵',
    title: '三态标记',
    description: '点击切换"未开始/进行中/已完成"，无需移动卡片',
  },
  {
    color: 'bg-red-500',
    icon: '🔴',
    title: '优先级颜色',
    description: '红黄绿边框，一眼识别重要事项',
  },
  {
    color: 'bg-gray-800',
    icon: '⚡',
    title: '极简操作',
    description: '无需注册，打开即用，支持快捷键',
  },
];

export default function MVPDemoSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            眼见为实
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ClueBoard 核心功能演示
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MVP 演示区 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-100 aspect-video">
              {/* 模拟演示界面 */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">ClueBoard Demo</h3>
                    <div className="text-sm text-gray-500">按 N 添加新卡片</div>
                  </div>

                  {/* 模拟便签区域 */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { title: '完成项目文档', status: 'completed', color: 'bg-green-500' },
                      { title: '准备路演材料', status: 'in-progress', color: 'bg-yellow-400' },
                      { title: '联系投资人', status: 'not-started', color: 'bg-gray-300' },
                      { title: '优化产品功能', status: 'not-started', color: 'bg-gray-300' },
                      { title: '学习新技术', status: 'completed', color: 'bg-green-500' },
                      { title: '整理学习笔记', status: 'in-progress', color: 'bg-yellow-400' },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="bg-[var(--note-bg)] rounded-lg p-4 shadow-md border border-gray-200"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <div className="flex items-start gap-2">
                          <div className={`w-2 h-2 rounded-full mt-1.5 ${item.color}`} />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{item.title}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* 添加按钮 */}
                  <div className="mt-6 flex justify-center">
                    <button className="px-6 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                      + 添加新卡片
                    </button>
                  </div>
                </div>
              </div>

              {/* 播放按钮覆盖层 */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl cursor-pointer"
                >
                  <div className="w-0 h-0 border-l-[30px] border-l-gray-900 border-y-[18px] border-y-transparent ml-2" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* 功能要点 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className={`w-8 h-8 rounded-full ${feature.color} flex items-center justify-center text-white text-sm flex-shrink-0`}>
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
