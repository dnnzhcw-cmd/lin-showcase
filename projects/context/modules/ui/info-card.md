# InfoCard 组件文档

## 版本信息
- **文档版本**: v1.0
- **创建日期**: 2025-02-03
- **最后更新**: 2025-02-03
- **状态**: ✅ 已完成
- **作者**: AI Assistant
- **组件文件**: `src/components/ui/InfoCard.tsx`
- **组件类型**: UI Component

## 概述
InfoCard 是一个信息展示卡片组件，用于展示结构化的信息内容。支持三种颜色变体（蓝色、黄色、绿色），可配置图标、标题、描述、自定义内容以及进度条。常用于技术栈展示、学习路径说明、未来规划等场景。

## 核心功能

### 1. 颜色变体
- **蓝色变体**：用于技术信息、API 文档
- **黄色变体**：用于学习笔记、心得体会
- **绿色变体**：用于已完成内容、成功状态

### 2. 内容展示
- 图标（可选）
- 标题（必需）
- 描述（可选）
- 自定义内容插槽（`children`）
- 进度条（可选）

### 3. 交互效果
- 悬停上浮动画
- 悬停阴影增强
- 点击缩放效果
- 进度条动画

## 技术架构

### Props 接口
```typescript
export interface InfoCardProps {
  title: string;                              // 卡片标题
  description?: string;                       // 卡片描述
  variant?: CardVariant;                      // 颜色变体
  icon?: React.ReactNode;                     // 图标组件
  children?: React.ReactNode;                 // 子内容
  className?: string;                         // 自定义类名
  progress?: number;                          // 进度百分比（0-100）
}

export type CardVariant = 'blue' | 'yellow' | 'green';
```

### 变体样式配置
```typescript
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
```

## 实现细节

### 1. 颜色变体系统
```typescript
const styles = variantStyles[variant];
```

**特点**:
- 使用 CSS 变量定义颜色（`--card-border-blue`、`--card-border-yellow`、`--card-border-green`）
- 左侧 4px 边框标识颜色
- 图标背景和文字颜色匹配变体

### 2. 悬停动画效果
```typescript
<motion.div
  whileHover={{ y: -5, boxShadow: '0 12px 24px rgba(0,0,0,0.15)' }}
  whileTap={{ scale: 0.98 }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
```

**参数说明**:
- `whileHover`: 悬停时上浮 5px，阴影增强
- `whileTap`: 点击时缩放到 98%
- `initial`: 初始状态（透明、向下偏移）
- `animate`: 动画状态（不透明、归位）

### 3. 进度条实现
```typescript
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
```

**特点**:
- 使用条件渲染，仅在提供 `progress` 时显示
- 进度条宽度从 0 动画到目标百分比
- 进度条颜色与卡片变体匹配
- 1 秒动画时间，缓动效果

### 4. 头部布局
```typescript
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
```

**布局特点**:
- 图标和文本并排
- 图标固定尺寸（6x6）
- 标题加粗，大字体
- 描述文本小字体，浅灰色

## 样式规范

### 基础样式
```css
relative p-6 rounded-lg bg-white shadow-md    /* 基础卡片样式 */
note-card-hover                               /* 悬停效果类 */
```

### 变体边框
```css
border-l-4                                    /* 左侧边框：4px */
border-[var(--card-border-blue)]             /* 蓝色变体 */
border-[var(--card-border-yellow)]           /* 黄色变体 */
border-[var(--card-border-green)]            /* 绿色变体 */
```

### 图标容器
```css
p-3 rounded-lg                               /* 内边距和圆角 */
bg-blue-50 / bg-yellow-50 / bg-green-50      /* 背景色 */
```

### 进度条
```css
w-full h-2 bg-gray-200 rounded-full          /* 容器 */
h-full rounded-full                           /* 进度条 */
```

## 使用示例

### 基础使用
```tsx
import InfoCard from '@/components/ui/InfoCard';

export default function Example() {
  return (
    <InfoCard
      title="技术实现"
      description="使用 Next.js 和 TypeScript 开发"
      variant="blue"
    />
  );
}
```

### 带图标
```tsx
import { Code } from 'lucide-react';
import InfoCard from '@/components/ui/InfoCard';

export default function Example() {
  return (
    <InfoCard
      title="技术实现"
      description="使用 Next.js 和 TypeScript 开发"
      variant="blue"
      icon={<Code />}
    />
  );
}
```

### 带进度条
```tsx
import InfoCard from '@/components/ui/InfoCard';

export default function Example() {
  return (
    <InfoCard
      title="学习进度"
      description="React Hooks 学习路线"
      variant="yellow"
      icon={<BookOpen />}
      progress={65}
    />
  );
}
```

### 带自定义内容
```tsx
import InfoCard from '@/components/ui/InfoCard';

export default function Example() {
  return (
    <InfoCard
      title="未来规划"
      variant="green"
      icon={<Rocket />}
    >
      <ul className="space-y-2 text-sm text-gray-700">
        <li>• 优化动画性能</li>
        <li>• 添加暗色模式</li>
        <li>• 支持多语言</li>
        <li>• 集成后端 API</li>
      </ul>
    </InfoCard>
  );
}
```

### 多个卡片组合
```tsx
import InfoCard from '@/components/ui/InfoCard';

export default function Example() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <InfoCard
        title="技术实现"
        variant="blue"
        icon={<Code />}
        description="Next.js + TypeScript"
      />
      <InfoCard
        title="学习心得"
        variant="yellow"
        icon={<Lightbulb />}
        description="理解 React Hooks"
      />
      <InfoCard
        title="未来规划"
        variant="green"
        icon={<Target />}
        progress={80}
      />
    </div>
  );
}
```

## 最佳实践

### 1. 选择合适的变体
- **蓝色**：技术文档、API 说明、代码示例
- **黄色**：学习笔记、心得体会、待办事项
- **绿色**：已完成内容、成功状态、积极信息

### 2. 图标选择
- 使用 lucide-react 图标库
- 图标尺寸固定为 6x6
- 确保图标颜色与变体匹配

### 3. 进度条使用
- 仅用于有明确进度的场景
- 数值范围：0-100
- 配合适当的变体颜色

### 4. 响应式布局
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <InfoCard {...props1} />
  <InfoCard {...props2} />
  <InfoCard {...props3} />
</div>
```

### 5. 无障碍性
- 提供清晰的标题和描述
- 进度条添加文字说明
- 使用语义化颜色

## 常见问题

### Q: 如何添加更多颜色变体？
A: 修改 `CardVariant` 类型和 `variantStyles` 配置：
```typescript
export type CardVariant = 'blue' | 'yellow' | 'green' | 'purple';

const variantStyles = {
  // ... 原有变体
  purple: {
    border: 'border-l-4 border-purple-500',
    iconBg: 'bg-purple-50',
    iconText: 'text-purple-600',
  },
};
```

### Q: 进度条动画如何调整？
A: 修改 `transition` 参数：
```typescript
transition={{ duration: 1.5, ease: 'easeInOut' }}  // 调整持续时间和缓动函数
```

### Q: 如何禁用悬停效果？
A: 移除动画类名：
```tsx
<InfoCard
  title="静态卡片"
  className="pointer-events-none"
/>
```

## 主题变量

### 颜色变量
```css
--card-border-blue: oklch(0.6 0.118 184.704);    /* 蓝色 */
--card-border-yellow: oklch(0.696 0.17 162.48);  /* 黄色 */
--card-border-green: oklch(0.646 0.222 41.116);  /* 绿色 */
```

### 使用场景
- 技术实现：蓝色
- 学习笔记：黄色
- 未来规划：绿色

## 性能优化

1. **动画优化**:
   - 使用 `framer-motion` 的 GPU 加速
   - 避免复杂的布局重排
   - 进度条动画仅执行一次

2. **条件渲染**:
   - 图标使用条件渲染
   - 进度条使用条件渲染
   - 子内容使用条件渲染

3. **响应式**:
   - 使用 Tailwind 断点
   - 移动端优先策略
   - 灵活的网格布局

## 未来扩展

- [ ] 支持更多颜色变体
- [ ] 支持自定义进度条颜色
- [ ] 添加折叠/展开功能
- [ ] 支持拖拽排序
- [ ] 添加标签/分类
- [ ] 支持编辑模式

## 相关文档

- [项目结构文档](../../arch/project-structure.md)
- [主题配置文档](../../styles/theme-configuration.md)
- [NoteCard 组件文档](../ui/note-card.md)
- [全局摘要](../../_global.md)

## 版本历史

### v1.0 (2025-02-03)
- ✅ 创建初始文档
- ✅ 完整记录组件实现
- ✅ 添加使用示例和最佳实践
