'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface NoteCardProps {
  id: string;
  title: string;
  description?: string;
  status?: 'not-started' | 'in-progress' | 'completed';
  onStatusChange?: (id: string, newStatus: 'not-started' | 'in-progress' | 'completed') => void;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const statusColors = {
  'not-started': 'bg-gray-300',
  'in-progress': 'bg-yellow-400',
  'completed': 'bg-green-500',
};

const statusLabels = {
  'not-started': '未开始',
  'in-progress': '进行中',
  'completed': '已完成',
};

export default function NoteCard({
  id,
  title,
  description,
  status = 'not-started',
  onStatusChange,
  onClick,
  className,
  children,
}: NoteCardProps) {
  const handleCardClick = () => {
    if (onClick) {
      onClick();
    } else if (onStatusChange) {
      // 循环切换状态
      const nextStatusMap = {
        'not-started': 'in-progress' as const,
        'in-progress': 'completed' as const,
        'completed': 'not-started' as const,
      };
      onStatusChange(id, nextStatusMap[status]);
    }
  };

  return (
    <motion.div
      onClick={handleCardClick}
      className={cn(
        'note-card-hover relative p-6 rounded-lg cursor-pointer',
        'bg-[var(--note-bg)] border border-[var(--note-border)]',
        'shadow-[var(--note-shadow)]',
        'transition-all duration-300',
        className
      )}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* 状态指示器 */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <motion.div
          className={cn('w-3 h-3 rounded-full status-dot', statusColors[status])}
          whileHover={{ scale: 1.3 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        />
        <span className="text-xs text-gray-500">{statusLabels[status]}</span>
      </div>

      {/* 内容 */}
      <div className="pr-12">
        <h3 className="font-semibold text-gray-900 mb-2 text-lg">{title}</h3>
        {description && (
          <p className="text-sm md:text-base text-gray-600 leading-relaxed whitespace-pre-line">{description}</p>
        )}
        {children && <div className="mt-4">{children}</div>}
      </div>

      {/* 便签装饰角 */}
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-gray-300 rounded-br" />
    </motion.div>
  );
}
