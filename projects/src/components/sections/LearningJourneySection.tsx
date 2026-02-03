'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Insight {
  title: string;
  content: string;
  icon: string;
}

interface LearningPath {
  step: number;
  title: string;
  description: string;
  details: string[];
}

const insights: Insight[] = [
  {
    icon: '🧠',
    title: '认知的跃迁',
    content: '从"编程是技术活"到"编程是表达工具"的转变。AI 让我意识到，更重要的是理解问题和表达需求，而非记忆语法细节。',
  },
  {
    icon: '⚡',
    title: '能力的沉淀',
    content: '掌握了"快速原型验证"的思维方式：用最小成本实现核心功能，快速迭代，让想法落地而非停留在纸面。',
  },
  {
    icon: '🎯',
    title: '方向的明确',
    content: '从泛泛而学到聚焦实战：选择解决真实痛点，让学习过程本身创造价值，而非单纯积累技能点。',
  },
];

const learningPath: LearningPath[] = [
  {
    step: 1,
    title: '需求发现',
    description: '从自身痛点出发',
    details: [
      '记录日常任务管理中的困惑',
      '梳理现有工具的不足',
      '明确"低负担工具"的价值定位',
    ],
  },
  {
    step: 2,
    title: '技术选型',
    description: '选择最适合的技术栈',
    details: [
      'Next.js + shadcn/ui 快速搭建',
      'IndexedDB 本地存储保证隐私',
      '纯前端实现降低部署门槛',
    ],
  },
  {
    step: 3,
    title: 'MVP 开发',
    description: '最小可行产品快速验证',
    details: [
      '聚焦核心功能：三态标记',
      '简化交互设计：拖拽 + 点击',
      '保留扩展空间：未来可增功能',
    ],
  },
  {
    step: 4,
    title: '迭代优化',
    description: '根据反馈持续改进',
    details: [
      '收集真实用户使用反馈',
      '优化动画和交互细节',
      '规划未来功能路线图',
    ],
  },
];

export default function LearningJourneySection() {
  const [expandedPath, setExpandedPath] = useState<number | null>(null);

  return (
    <section id="learning" className="py-24 bg-white">
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
            AI 编程学习复盘
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            从点子到产品，我的学习心得与成长路径
          </p>
        </motion.div>

        {/* 心得与收获 */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">心得与收获</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{insight.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {insight.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {insight.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 学习路径 */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">学习路径模型</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {learningPath.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setExpandedPath(expandedPath === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedPath === index ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: expandedPath === index ? 'auto' : 0, opacity: expandedPath === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 pl-20">
                    <ul className="space-y-2">
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-[var(--card-border-green)] mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
