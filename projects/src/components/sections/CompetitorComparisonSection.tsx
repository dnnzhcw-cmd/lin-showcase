'use client';

import { motion } from 'framer-motion';

interface ComparisonData {
  dimension: string;
  clueboard: string;
  competitor1: string;
  competitor2: string;
  highlight?: boolean;
}

const comparisonData: ComparisonData[] = [
  {
    dimension: '核心痛点',
    clueboard: '遗忘非紧急但重要的事项',
    competitor1: '多身份交织导致注意力分散',
    competitor2: '团队协作场景下的任务跟踪',
  },
  {
    dimension: '用户画像',
    clueboard: '自由创作者、学生、轻度任务管理者',
    competitor1: '高效能人士、多线程工作者',
    competitor2: '团队管理者、协作需求强的用户',
  },
  {
    dimension: '产品哲学',
    clueboard: '外化记忆："让我看见，我就不会忘"',
    competitor1: '卸载认知："让AI决定，我只执行"',
    competitor2: '流程化管理："按列表推进，不遗漏"',
  },
  {
    dimension: '交互范式',
    clueboard: '自由白板+便签（非线性探索）',
    competitor1: '四象限+角色槽（线性执行）',
    competitor2: '列表+看板（流程化协作）',
    highlight: true,
  },
  {
    dimension: '使用门槛',
    clueboard: '极低（无需注册，打开即用）',
    competitor1: '中（需学习角色配置、AI规则）',
    competitor2: '中（需学习列表管理、成员协作）',
    highlight: true,
  },
];

export default function CompetitorComparisonSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
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
            与其他工具的区别
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            不贬低竞品，精准定位，让每一款工具都能找到它的用户
          </p>
        </motion.div>

        {/* 对比表格 */}
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-4 font-bold text-gray-700 text-lg whitespace-nowrap">
                  对比维度
                </th>
                <th className="text-left py-4 px-4 font-bold text-[var(--card-border-green)] text-lg bg-green-50 whitespace-nowrap">
                  ClueBoard
                </th>
                <th className="text-left py-4 px-4 font-bold text-gray-700 text-lg whitespace-nowrap">
                  消灭Todo
                </th>
                <th className="text-left py-4 px-4 font-bold text-gray-700 text-lg whitespace-nowrap">
                  Trello
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={cn(
                    'border-b border-gray-200 transition-colors',
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  )}
                >
                  <td className="py-5 px-4 font-semibold text-gray-900 whitespace-nowrap">
                    {row.dimension}
                  </td>
                  <td className={cn(
                    'py-5 px-4 whitespace-nowrap',
                    row.highlight ? 'bg-green-50 font-semibold text-gray-900' : 'text-gray-700'
                  )}>
                    {row.clueboard}
                    {row.highlight && (
                      <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                        差异化优势
                      </span>
                    )}
                  </td>
                  <td className="py-5 px-4 text-gray-700 whitespace-nowrap">
                    {row.competitor1}
                  </td>
                  <td className="py-5 px-4 text-gray-700 whitespace-nowrap">
                    {row.competitor2}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 底部说明 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500">
            * 以上对比基于公开信息和产品定位，旨在帮助用户选择最适合自己的工具
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
