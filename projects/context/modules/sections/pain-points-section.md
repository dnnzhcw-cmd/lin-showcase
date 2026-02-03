# PainPointsSection 组件文档

## 版本信息
- **文档版本**: v1.0
- **创建日期**: 2025-02-03
- **最后更新**: 2025-02-03
- **状态**: ✅ 已完成
- **作者**: AI Assistant
- **组件文件**: `src/components/sections/PainPointsSection.tsx`
- **组件类型**: Section Component

## 概述
PainPointsSection 是项目路演模块的第一部分，展示用户痛点问题和核心洞察。采用交互式便签卡片形式，让用户可以点击卡片切换状态，体验产品的三态标记功能。最终呈现核心洞察：我们需要的是"外化记忆"，让重要的事情一眼就能看见。

## 核心功能

### 1. 痛点展示
- 记不住事：不紧急但重要的长期任务容易被遗忘
- 工具太复杂：现有工具学习成本高，难以坚持使用
- 缺乏触达：记录后不直观，打开率低，形同虚设

### 2. 交互体验
- 点击便签卡片切换状态（未开始 → 进行中 → 已完成）
- 滚动视差入场动画
- 核心洞察卡片突出显示

### 3. 视觉设计
- 浅色渐变背景
- 跨列布局的洞察卡片
- 渐变色边框强调

## 技术架构

### 依赖组件
```json
{
  "NoteCard": "@/components/ui/NoteCard",
  "framer-motion": "^12.30.0"
}
```

### 数据结构
```typescript
interface PainPoint extends Omit<NoteCardProps, 'status' | 'onStatusChange'> {
  id: string;
  status: 'not-started' | 'in-progress' | 'completed';
}

const painPoints: PainPoint[] = [
  {
    id: 'pain-1',
    title: '记不住事',
    description: '不紧急但重要的长期任务，总在忙碌中遗忘，导致错过关键节点',
    status: 'not-started',
  },
  {
    id: 'pain-2',
    title: '工具太复杂',
    description: '现有工具规则复杂、学习成本高，难以坚持使用，最终放弃',
    status: 'not-started',
  },
  {
    id: 'pain-3',
    title: '缺乏触达',
    description: '记录后不直观，打开率低，形同自设，无法真正帮助记忆',
    status: 'not-started',
  },
  {
    id: 'insight',
    title: '💡 核心洞察',
    description: '我们需要的不是"调度大脑"，而是"外化记忆"——让看见变成记住',
    status: 'completed',
  },
];
```

## 实现细节

### 1. 状态管理
```typescript
const [notes, setNotes] = useState<PainPoint[]>(painPoints);

const handleStatusChange = (id: string, newStatus: 'not-started' | 'in-progress' | 'completed') => {
  setNotes(prev => prev.map(note =>
    note.id === id ? { ...note, status: newStatus } : note
  ));
};
```

**特点**:
- 使用不可变数据更新模式
- 只更新匹配 ID 的便签
- 保持其他便签状态不变

### 2. 标题区域
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-center mb-16"
>
  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
    你是否也有这些困扰？
  </h2>
  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
    点击便签卡片，看看 ClueBoard 如何解决这些问题
  </p>
</motion.div>
```

**关键点**:
- `viewport={{ once: true }}`: 只触发一次动画
- `whileInView`: 进入视口时触发动画
- 响应式字体大小

### 3. 便签画布布局
```typescript
<div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
  {/* 痛点便签 */}
  {notes.slice(0, 3).map((note, index) => (
    <motion.div
      key={note.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}  // 阶梯式延迟
    >
      <NoteCard {...note} status={note.status} onStatusChange={handleStatusChange} />
    </motion.div>
  ))}

  {/* 洞察便签 - 跨两列 */}
  <motion.div className="md:col-span-2">
    {/* ... */}
  </motion.div>
</div>
```

**布局特点**:
- 移动端：1 列布局
- 平板/桌面端：2 列布局
- 洞察卡片跨两列（`md:col-span-2`）
- 最大宽度限制（`max-w-5xl`）

### 4. 洞察卡片设计
```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.3 }}
  className="md:col-span-2"
>
  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-[var(--priority-low)] rounded-lg p-8 shadow-md">
    <div className="flex items-start gap-4">
      <div className="text-4xl">💡</div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          核心洞察
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          我们需要的不是"调度大脑"，而是"外化记忆"<br />
          让重要的事情，一眼就能看见
        </p>
      </div>
    </div>
  </div>
</motion.div>
```

**设计特点**:
- 渐变背景（绿色到翡翠绿）
- 左侧绿色边框（4px）
- 大号表情符号（💡）
- 响应式文字大小

### 5. 底部提示
```typescript
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.5 }}
  className="text-center mt-12"
>
  <p className="text-sm text-gray-500">
    💡 点击便签可切换状态，体验 ClueBoard 的三态标记功能
  </p>
</motion.div>
```

**作用**:
- 提供交互提示
- 强调产品核心功能（三态标记）
- 延迟显示，不抢占注意力

## 样式规范

### 背景渐变
```css
bg-gradient-to-b from-gray-50 to-white
```

**颜色流向**：
- 顶部：`gray-50`（浅灰）
- 底部：`white`（白色）

### 洞察卡片
```css
bg-gradient-to-r from-green-50 to-emerald-50    /* 背景渐变 */
border-l-4 border-[var(--priority-low)]        /* 左侧绿色边框 */
rounded-lg                                      /* 圆角：lg */
shadow-md                                       /* 阴影：md */
```

### 文本颜色
```css
text-gray-900    /* 标题：黑色 */
text-gray-700    /* 描述：深灰 */
text-gray-600    /* 副标题：中灰 */
text-gray-500    /* 提示：浅灰 */
```

### 响应式断点
- 移动端：< 768px（无断点前缀）
- 平板/桌面端：>= 768px（`md:`）

## 内容策略

### 痛点分析
1. **记不住事**
   - 场景：长期任务被遗忘
   - 后果：错过关键节点
   - 解决方案：线索墙式展示

2. **工具太复杂**
   - 场景：学习成本高
   - 后果：难以坚持使用
   - 解决方案：简单直观的界面

3. **缺乏触达**
   - 场景：记录后不直观
   - 后果：打开率低
   - 解决方案：视觉化展示

### 核心洞察
**问题本质**：不是"调度大脑"，而是"外化记忆"

**解决方案**：让重要的事情，一眼就能看见

**产品定位**：线索墙式任务管理工具

### 交互设计
- 点击卡片切换状态
- 三态标记（未开始、进行中、已完成）
- 阶梯式入场动画
- 延迟显示提示信息

## 使用示例

### 基础使用
```tsx
import PainPointsSection from '@/components/sections/PainPointsSection';

export default function Page() {
  return (
    <>
      <section id="hero">首页</section>
      <PainPointsSection />
    </>
  );
}
```

### 自定义痛点内容
```typescript
const customPainPoints: PainPoint[] = [
  {
    id: 'pain-1',
    title: '自定义痛点一',
    description: '自定义描述内容',
    status: 'not-started',
  },
  {
    id: 'pain-2',
    title: '自定义痛点二',
    description: '自定义描述内容',
    status: 'not-started',
  },
];
```

### 修改核心洞察
```typescript
<div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500">
  <h3>自定义洞察标题</h3>
  <p>自定义洞察内容</p>
</div>
```

## 性能优化

1. **动画优化**:
   - `viewport={{ once: true }}`: 只触发一次
   - 使用 CSS `transform`（GPU 加速）
   - 阶梯式延迟减少同时渲染

2. **状态管理**:
   - 不可变数据更新
   - 精准更新（只更新匹配的 ID）
   - 避免不必要的重渲染

3. **响应式**:
   - 使用 Tailwind 断点
   - 移动端优先策略
   - 图片/图标使用 SVG

## 可访问性

1. **语义化标签**：使用 `<section>` 标签
2. **键盘导航**：便签卡片支持键盘操作
3. **颜色对比**：符合 WCAG AA 标准
4. **屏幕阅读器**：描述文本清晰可读

## 未来扩展

- [ ] 支持自定义痛点数量
- [ ] 添加痛点图标
- [ ] 支持痛点分类
- [ ] 添加数据统计
- [ ] 支持多语言
- [ ] 添加痛点动画效果

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
