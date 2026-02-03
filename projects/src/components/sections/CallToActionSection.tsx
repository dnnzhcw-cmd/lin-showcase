'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';

export default function CallToActionSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            告别遗忘焦虑
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            让每一件重要的事都被看见
          </p>
          <p className="text-lg text-gray-500">
            ClueBoard — 个人创意与生活任务的可视化容器
          </p>
        </motion.div>

        {/* 行动按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="https://6ft57jc58c.coze.site"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-[var(--priority-high)] text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-red-600 transition-all btn-hover flex items-center gap-2"
          >
            立即体验 ClueBoard
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="https://github.com/dnnzhcw-cmd/waytoAGI-demo-1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg border-2 border-gray-300 hover:border-gray-900 transition-all btn-hover flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            查看源代码
          </motion.a>
        </motion.div>

        {/* 底部提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-sm text-gray-500"
        >
          <p>无需注册 · 打开即用 · 数据本地存储</p>
        </motion.div>
      </div>
    </section>
  );
}
