# NoteCard 组件文档

## 版本信息
- **文档版本**: v1.0
- **创建日期**: 2025-02-03
- **最后更新**: 2025-02-03
- **状态**: ✅ 已完成
- **作者**: AI Assistant
- **组件文件**: `src/components/ui/NoteCard.tsx`
- **组件类型**: UI Component

## 概述
NoteCard 是一个便签卡片组件，用于展示任务、笔记或信息卡片。支持状态指示（未开始、进行中、已完成），具有悬停动画和点击交互功能。

## 核心功能

### 1. 状态管理
- **未开始**（not-started）：灰色指示器
- **进行中**（in-progress）：黄色指示器
- **已完成**（completed）：绿色指示器
- 支持循环切换状态：未开始 → 进行中 → 已完成 → 未开始

### 2. 交互效果
- 悬停上浮动画（`y: -5`）
- 点击缩放效果（`scale: 0.98`）
- 状态指示器弹性动画
- 便签装饰角视觉效果

### 3. 内容展示
- 标题（必需）
- 描述（可选）
- 自定义内容插槽（`children`）

## 技术架构

### Props 接口
```typescript
export interface NoteCardProps {
  id: string;                                    // 卡片唯一标识
  title: string;                                 // 卡片标题
  description?: string;                          // 卡片描述
  status?: 'not-started' | 'in-progress' | 'completed';  // 卡片状态
  onStatusChange?: (                            // 状态变更回调
    id: string,
    newStatus: 'not-started' | 'in-progress' | 'completed'
  ) => void;
  onClick?: () => void;                         // 点击回调
  className?: string;                           // 自定义类名
  children?: React.ReactNode;                   // 子内容
}
```

### 状态颜色配置
```typescript
const statusColors = {
  'not-started': 'bg-gray-300',      // 未开始：灰色
  'in-progress': 'bg-yellow-400',    // 进行中：黄色
  'completed': 'bg-green-500',       // 已完成：绿色
};

const statusLabels = {
  'not-started': '未开始',
  'in-progress': '进行中',
  'completed': '已完成',
};
```

## 实现细节

### 1. 状态切换逻辑
```typescript
const handleCardClick = () => {
  if (onClick) {
    // 优先使用自定义点击回调
    onClick();
  } else if (onStatusChange) {
    // 默认行为：循环切换状态
    const nextStatusMap = {
      'not-started': 'in-progress' as const,
      'in-progress': 'completed' as const,
      'completed': 'not-started' as const,
    };
    onStatusChange(id, nextStatusMap[status]);
  }
};
```

**逻辑**:
- 优先检查是否有自定义 `onClick` 回调
- 如果没有，则自动循环切换状态
- 使用 `as const` 确保类型安全

### 2. 动画效果
```typescript
<motion.div
  whileHover={{ y: -5 }}              // 悬停上浮 5px
  whileTap={{ scale: 0.98 }}          // 点击缩小到 98%
  initial={{ opacity: 0, y: 20 }}     // 初始状态：透明、向下偏移
  animate={{ opacity: 1, y: 0 }}      // 动画状态：不透明、归位
>
```

### 3. 状态指示器
```typescript
<motion.div
  className={cn('w-3 h-3 rounded-full status-dot', statusColors[status])}
  whileHover={{ scale: 1.3 }}                  // 悬停放大 30%
  transition={{ type: 'spring', stiffness: 400, damping: 10 }}  // 弹性动画
/>
```

**参数说明**:
- `stiffness: 400`：弹簧硬度（越高越硬）
- `damping: 10`：阻尼系数（越低越弹）

### 4. 便签装饰角
```typescript
<div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-gray-300 rounded-br" />
```

**效果**：在右下角创建一个装饰性的折叠角，模拟真实便签的效果。

## 样式规范

### 基础样式
```css
bg-[var(--note-bg)]              /* 便签背景色（浅米色） */
border border-[var(--note-border)]  /* 便签边框（浅灰） */
shadow-[var(--note-shadow)]       /* 便签阴影 */
```

### 主题变量
```css
--note-bg: oklch(0.985 0.005 85);              /* 便签背景 */
--note-border: oklch(0.92 0 0);                /* 便签边框 */
--note-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);  /* 便签阴影 */
```

### 状态颜色
- 未开始：`bg-gray-300`（OKLCH: oklch(0.922 0 0)）
- 进行中：`bg-yellow-400`（OKLCH: oklch(0.696 0.17 162.48)）
- 已完成：`bg-green-500`（OKLCH: oklch(0.646 0.222 41.116)）

## 使用示例

### 基础使用
```tsx
import NoteCard from '@/components/ui/NoteCard';

export default function Example() {
  return (
    <NoteCard
      id="task-1"
      title="完成项目文档"
      description="编写项目的技术文档和用户手册"
      status="in-progress"
    />
  );
}
```

### 带状态管理
```tsx
import { useState } from 'react';
import NoteCard from '@/components/ui/NoteCard';

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: '1', title: '任务一', status: 'not-started' },
    { id: '2', title: '任务二', status: 'in-progress' },
    { id: '3', title: '任务三', status: 'completed' },
  ]);

  const handleStatusChange = (id: string, newStatus: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: newStatus } : task
    ));
  };

  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <NoteCard
          key={task.id}
          id={task.id}
          title={task.title}
          status={task.status as any}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
}
```

### 自定义点击行为
```tsx
<NoteCard
  id="card-1"
  title="点击查看详情"
  description="点击卡片查看完整内容"
  onClick={() => console.log('卡片被点击')}
/>
```

### 带自定义内容
```tsx
<NoteCard
  id="card-2"
  title="学习笔记"
  description="React Hooks 学习心得"
  status="completed"
>
  <div className="mt-4 p-3 bg-blue-50 rounded">
    <p className="text-sm text-blue-800">
      学习要点：
      <br />• useState 状态管理
      <br />• useEffect 副作用处理
      <br />• useContext 上下文共享
    </p>
  </div>
</NoteCard>
```

### 自定义样式
```tsx
<NoteCard
  id="card-3"
  title="自定义样式"
  className="border-blue-500 bg-blue-50"
  status="in-progress"
/>
```

## 最佳实践

### 1. 状态管理
- 使用 `useState` 管理任务列表
- 保持 ID 唯一性
- 使用回调函数更新状态

### 2. 无障碍性
- 卡片支持键盘聚焦和交互
- 状态指示器有清晰的视觉反馈
- 使用语义化颜色（绿=完成，黄=进行中）

### 3. 性能优化
- 列表渲染时使用 `key` 属性
- 避免在渲染函数中创建新对象
- 使用 `useCallback` 优化回调函数

### 4. 响应式布局
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {tasks.map(task => (
    <NoteCard key={task.id} {...task} />
  ))}
</div>
```

## 动画参数调优

### 悬停动画
```typescript
whileHover={{ y: -5 }}  // 值越大，上浮幅度越大
```

### 点击动画
```typescript
whileTap={{ scale: 0.98 }}  // 值越小，缩放效果越明显
```

### 入场动画
```typescript
initial={{ opacity: 0, y: 20 }}  // 初始透明度和偏移
animate={{ opacity: 1, y: 0 }}    // 动画目标状态
```

### 状态指示器
```typescript
transition={{
  type: 'spring',     // 弹簧动画
  stiffness: 400,     // 硬度：200-1000
  damping: 10         // 阻尼：5-50
}}
```

## 常见问题

### Q: 如何禁用状态自动切换？
A: 提供 `onClick` 回调即可：
```tsx
<NoteCard
  id="card-1"
  title="卡片"
  onClick={() => /* 自定义逻辑 */}
/>
```

### Q: 如何添加更多状态？
A: 修改 `status` 类型和配置：
```typescript
type NoteStatus = 'not-started' | 'in-progress' | 'completed' | 'blocked';

const statusColors = {
  // ... 原有状态
  'blocked': 'bg-red-500',
};
```

### Q: 如何让卡片不可点击？
A: 移除交互类名：
```tsx
<NoteCard
  id="card-1"
  title="卡片"
  className="pointer-events-none"
/>
```

## 未来扩展

- [ ] 支持拖拽排序
- [ ] 支持标签/分类
- [ ] 支持编辑功能
- [ ] 支持附件上传
- [ ] 支持子任务列表
- [ ] 支持截止日期提醒

## 相关文档

- [项目结构文档](../../arch/project-structure.md)
- [主题配置文档](../../styles/theme-configuration.md)
- [全局摘要](../../_global.md)

## 版本历史

### v1.0 (2025-02-03)
- ✅ 创建初始文档
- ✅ 完整记录组件实现
- ✅ 添加使用示例和最佳实践
