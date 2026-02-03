'use client';

import { motion } from 'framer-motion';
import InfoCard, { CardVariant } from '@/components/ui/InfoCard';
import { Code, Database, Zap, Rocket, User, Brain } from 'lucide-react';

export default function TechStackRoadmapSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
            技术栈与未来规划
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            极简但可靠，从工具到容器的进化之路
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 技术实现 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <InfoCard
              variant="blue"
              icon={<Code className="w-6 h-6" />}
              title="技术栈"
              description="极简但可靠"
              progress={100}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full" />
                  <span className="text-sm text-gray-700">Next.js App Router</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full" />
                  <span className="text-sm text-gray-700">IndexedDB 本地存储</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full" />
                  <span className="text-sm text-gray-700">shadcn/ui 组件库</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full" />
                  <span className="text-sm text-gray-700">Framer Motion 动画</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full" />
                  <span className="text-sm text-gray-700">纯前端设计（无需后端）</span>
                </div>
              </div>
            </InfoCard>
          </motion.div>

          {/* 未来路线图 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <InfoCard
              variant="yellow"
              icon={<Rocket className="w-6 h-6" />}
              title="未来路线图"
              description="从工具到容器"
              progress={30}
            >
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-[var(--card-border-green)] mt-1 font-bold">✓</span>
                  <div>
                    <span className="text-sm font-semibold text-gray-900">智能提醒</span>
                    <p className="text-xs text-gray-500">基于使用频率推送</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[var(--card-border-green)] mt-1 font-bold">✓</span>
                  <div>
                    <span className="text-sm font-semibold text-gray-900">多端同步</span>
                    <p className="text-xs text-gray-500">数据云端备份与协作</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-300 mt-1">○</span>
                  <div>
                    <span className="text-sm font-semibold text-gray-900">AI 智能归类</span>
                    <p className="text-xs text-gray-500">自动建议优先级</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-300 mt-1">○</span>
                  <div>
                    <span className="text-sm font-semibold text-gray-900">创意项目孵化</span>
                    <p className="text-xs text-gray-500">写作/旅行/学习规划</p>
                  </div>
                </div>
              </div>
            </InfoCard>
          </motion.div>

          {/* 作者心得 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <InfoCard
              variant="green"
              icon={<User className="w-6 h-6" />}
              title="作者心得"
              description="AI编程实践"
            >
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Brain className="w-4 h-4 text-[var(--card-border-green)] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700 leading-relaxed">
                    以"解决自身痛点"为起点，用 AI 辅助拆解需求、生成代码、优化交互
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-[var(--card-border-green)] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700 leading-relaxed">
                    快速落地极简产品，验证"低负担工具"的核心价值
                  </p>
                </div>
              </div>
            </InfoCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
