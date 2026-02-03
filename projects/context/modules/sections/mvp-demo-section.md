# MVPDemoSection 组件文档

## 版本信息
- **文档版本**: v1.0
- **创建日期**: 2025-02-03
- **最后更新**: 2025-02-03
- **状态**: ✅ 已完成
- **作者**: AI Assistant
- **组件文件**: `src/components/sections/MVPDemoSection.tsx`
- **组件类型**: Section Component

## 概述
MVPDemoSection 是项目路演模块的核心演示区块，用于展示 ClueBoard 的核心功能和用户体验。包含一个模拟的演示界面和功能要点列表，通过视觉化的方式让用户快速了解产品的核心价值。演示界面展示了一个虚拟的 ClueBoard 工作区，包含便签卡片、状态标记和操作按钮。

## 核心功能

### 1. 模拟演示界面
- 虚拟 ClueBoard 工作区
- 便签卡片展示（6 个卡片）
- 状态标记（未开始、进行中、已完成）
- 添加新卡片按钮
- 播放按钮覆盖层（模拟视频演示）

### 2. 功能要点展示
- 自由白板
- 三态标记
- 优先级颜色
- 极简操作

### 3. 视觉设计
- 2/3 演示区 + 1/3 功能点布局
- 阶梯式入场动画
- 悬停交互效果
- 毛玻璃效果覆盖层

## 技术架构

### 功能要点数据
```typescript
const features = [
  {
    color: 'bg-green-500',
    icon: '🟢',
    title: '自由白板',
    description: '无网格限制，拖拽排列，还原线索墙体验',
  },
  {
    color: 'bg-yellow-400',
    icon: '🟡',
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
```

### 模拟便签数据
```typescript
const mockNotes = [
  { title: '完成项目文档', status: 'completed', color: 'bg-green-500' },
  { title: '准备路演材料', status: 'in-progress', color: 'bg-yellow-400' },
  { title: '联系投资人', status: 'not-started', color: 'bg-gray-300' },
  { title: '优化产品功能', status: 'not-started', color: 'bg-gray-300' },
  { title: '学习新技术', status: 'completed', color: 'bg-green-500' },
  { title: '整理学习笔记', status: 'in-progress', color: 'bg-yellow-400' },
];
```

## 实现细节

### 1. 标题区域
```typescript
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
```

**关键点**:
- 中心对齐布局
- 响应式字体大小
- 进入视口时触发动画
- 只触发一次（`viewport={{ once: true }}`）

### 2. 演示界面容器
```typescript
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  {/* MVP 演示区 */}
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="lg:col-span-2"
  >
    <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-100 aspect-video">
      {/* 模拟演示界面 */}
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
    {/* 功能要点列表 */}
  </motion.div>
</div>
```

**布局特点**:
- 移动端：单列布局
- 桌面端：3 列网格布局
- 演示区占 2 列（`lg:col-span-2`）
- 功能点占 1 列
- 入场动画方向相反（左侧、右侧）

### 3. 模拟演示界面
```typescript
<div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 p-8">
  <div className="bg-white rounded-lg shadow-lg p-6 h-full">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-xl font-bold text-gray-900">ClueBoard Demo</h3>
      <div className="text-sm text-gray-500">按 N 添加新卡片</div>
    </div>

    {/* 模拟便签区域 */}
    <div className="grid grid-cols-3 gap-4">
      {mockNotes.map((item, i) => (
        <motion.div
          key={i}
          className="bg-[var(--note-bg)] rounded-lg p-4 shadow-md border border-gray-200"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <div className="flex items-start gap-2">
            <div className={`w-2 h-2 rounded-full mt-1.5 ${item.color}`} />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{item.title}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* 添加按钮 */}
    <div className="mt-6 flex justify-center">
      <button className="px-6 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
        + 添加新卡片
      </button>
    </div>
  </div>
</div>
```

**设计特点**:
- 16:9 视频比例（`aspect-video`）
- 渐变背景（灰色到浅灰）
- 3 列网格布局显示便签
- 悬停放大效果（`scale: 1.05`）
- 弹性动画过渡

### 4. 播放按钮覆盖层
```typescript
<div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl cursor-pointer"
  >
    <div className="w-0 h-0 border-l-[30px] border-l-gray-900 border-y-[18px] border-y-transparent ml-2" />
  </motion.div>
</div>
```

**效果**:
- 黑色半透明背景（`bg-black/20`）
- 轻微毛玻璃效果（`backdrop-blur-[2px]`）
- 白色圆形播放按钮
- CSS 三角形播放图标
- 悬停放大，点击缩小

### 5. 功能要点列表
```typescript
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
```

**特点**:
- 阶梯式延迟入场（`delay: index * 0.1`）
- 图标圆形容器
- 悬停背景变色
- 标题和描述文本

## 样式规范

### 演示界面
```css
aspect-video                  /* 16:9 视频比例 */
rounded-xl                    /* 大圆角 */
overflow-hidden               /* 隐藏溢出内容 */
shadow-2xl                    /* 超大阴影 */
```

### 便签卡片
```css
bg-[var(--note-bg)]          /* 便签背景色 */
rounded-lg                    /* 圆角 */
shadow-md                     /* 中等阴影 */
border border-gray-200        /* 浅灰边框 */
```

### 播放按钮
```css
w-20 h-20                     /* 尺寸 */
bg-white/90                   /* 90% 不透明白色 */
rounded-full                  /* 圆形 */
shadow-xl                     /* 超大阴影 */
```

### 功能要点
```css
bg-gray-50                    /* 浅灰背景 */
rounded-lg                    /* 圆角 */
hover:bg-gray-100            /* 悬停变色 */
```

## 内容策略

### 标题层级
1. **主标题**："眼见为实"
2. **副标题**："ClueBoard 核心功能演示"

### 核心功能要点
1. **自由白板**：无网格限制，拖拽排列
2. **三态标记**：点击切换状态
3. **优先级颜色**：红黄绿边框
4. **极简操作**：无需注册，打开即用

### 模拟数据
- 便签数量：6 个
- 状态分布：2 已完成、2 进行中、2 未开始
- 功能要点：4 个

## 使用示例

### 基础使用
```tsx
import MVPDemoSection from '@/components/sections/MVPDemoSection';

export default function Page() {
  return (
    <>
      <section id="pitch">痛点区块</section>
      <MVPDemoSection />
    </>
  );
}
```

### 自定义功能要点
```typescript
const customFeatures = [
  {
    color: 'bg-purple-500',
    icon: '🎨',
    title: '自定义主题',
    description: '支持多种主题色，个性化你的工作空间',
  },
  {
    color: 'bg-blue-500',
    icon: '📤',
    title: '导出功能',
    description: '支持导出为 PDF、PNG 等多种格式',
  },
];
```

### 自定义模拟数据
```typescript
const customNotes = [
  { title: '自定义任务一', status: 'completed', color: 'bg-green-500' },
  { title: '自定义任务二', status: 'in-progress', color: 'bg-yellow-400' },
  { title: '自定义任务三', status: 'not-started', color: 'bg-gray-300' },
];
```

## 性能优化

1. **动画优化**:
   - 使用 `viewport={{ once: true }}` 只触发一次
   - 使用 `framer-motion` 的 GPU 加速
   - 避免复杂的布局重排

2. **条件渲染**:
   - 列表渲染使用 `key` 属性
   - 避免在渲染函数中创建新对象

3. **响应式**:
   - 使用 Tailwind 断点
   - 移动端优先策略
   - 灵活的网格布局

## 可访问性

1. **语义化标签**：使用 `<section>` 标签
2. **颜色对比**：文本与背景对比度符合 WCAG AA 标准
3. **键盘导航**：播放按钮支持键盘操作
4. **屏幕阅读器**：文本内容清晰可读

## 未来扩展

- [ ] 集成真实视频演示
- [ ] 添加交互式演示
- [ ] 支持自定义主题
- [ ] 添加更多功能要点
- [ ] 支持多语言
- [ ] 添加用户评价

## 相关文档

- [项目结构文档](../../arch/project-structure.md)
- [主题配置文档](../../styles/theme-configuration.md)
- [NoteCard 组件文档](../ui/note-card.md)
- [PainPointsSection 组件文档](../sections/pain-points-section.md)
- [全局摘要](../../_global.md)

## 版本历史

### v1.0 (2025-02-03)
- ✅ 创建初始文档
- ✅ 完整记录组件实现
- ✅ 添加使用示例和最佳实践
