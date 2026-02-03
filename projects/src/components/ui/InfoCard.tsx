'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type CardVariant = 'blue' | 'yellow' | 'green';

export interface InfoCardProps {
  title: string;
  description?: string;
  variant?: CardVariant;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  progress?: number; // 进度百分比 0-100
}

const variantStyles = {
  blue: {
    border: 'border-l-4 border-[var(--card-border-blue)]',
    iconBg: 'bg-blue-50',
    iconText: 'text-blue-600',
  },
  yellow: {
    border: 'border-l-4 border-[var(--card-border-yellow)]',
    iconBg: 'bg-yellow-50',
    iconText: 'text-yellow-600',
  },
  green: {
    border: 'border-l-4 border-[var(--card-border-green)]',
    iconBg: 'bg-green-50',
    iconText: 'text-green-600',
  },
};

export default function InfoCard({
  title,
  description,
  variant = 'blue',
  icon,
  children,
  className,
  progress,
}: InfoCardProps) {
  const styles = variantStyles[variant];

  return (
    <motion.div
      className={cn(
        'relative p-6 rounded-lg bg-white shadow-md',
        'note-card-hover',
        styles.border,
        className
      )}
      whileHover={{ y: -5, boxShadow: '0 12px 24px rgba(0,0,0,0.15)' }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* 头部 */}
      <div className="flex items-start gap-4 mb-4">
        {icon && (
          <div className={cn('p-3 rounded-lg', styles.iconBg)}>
            <div className={cn('w-6 h-6', styles.iconText)}>{icon}</div>
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          {description && (
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
          )}
        </div>
      </div>

      {/* 内容区域 */}
      {children && <div className="space-y-3">{children}</div>}

      {/* 进度条 */}
      {progress !== undefined && (
        <div className="mt-6">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>进度</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className={cn('h-full rounded-full', {
                'bg-[var(--card-border-blue)]': variant === 'blue',
                'bg-[var(--card-border-yellow)]': variant === 'yellow',
                'bg-[var(--card-border-green)]': variant === 'green',
              })}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}
