'use client';

import { motion } from 'framer-motion';
import { VideoPlayer } from '@/components/ui/video-player';

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
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <VideoPlayer
                src="/videos/clueboard-demo.mp4"
                poster="/videos/img_prod_clueboard_ClueBoard应用界面.png"
                autoPlay={true}
                loop={true}
                muted={true}
              />
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
