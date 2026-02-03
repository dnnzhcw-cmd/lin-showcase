# TechStackRoadmapSection 组件文档

## 版本信息
- **文档版本**: v1.0
- **创建日期**: 2025-02-03
- **最后更新**: 2025-02-03
- **状态**: ✅ 已完成
- **作者**: AI Assistant
- **组件文件**: `src/components/sections/TechStackRoadmapSection.tsx`
- **组件类型**: Section Component

## 概述
TechStackRoadmapSection 是学习复盘模块的展示区块，用于展示 ClueBoard 的技术栈、未来路线图和作者心得。使用三个 InfoCard 组件展示不同维度的信息：技术实现（蓝色）、未来路线图（黄色）、作者心得（绿色）。采用阶梯式入场动画，卡片包含进度条和详细列表。

## 核心功能

### 1. 技术实现
- Next.js App Router
- IndexedDB 本地存储
- shadcn/ui 组件库
- Framer Motion 动画
- 纯前端设计（无需后端）

### 2. 未来路线图
- 智能提醒（已完成）
- 多端同步（已完成）
- AI 智能归类（规划中）
- 创意项目孵化（规划中）

### 3. 作者心得
- 以"解决自身痛点"为起点
- AI 辅助拆解需求、生成代码、优化交互
- 快速落地极简产品
- 验证"低负担工具"的核心价值

## 技术架构

### 依赖组件
```json
{
  "InfoCard": "@/components/ui/InfoCard",
  "framer-motion": "^12.30.0",
  "lucide-react": "^0.344.0"
}
```

### 卡片配置
```typescript
// 技术实现卡片
{
  variant: "blue",
  icon: <Code className="w-6 h-6" />,
  title: "技术栈",
  description: "极简但可靠",
  progress: 100
}

// 未来路线图卡片
{
  variant: "yellow",
  icon: <Rocket className="w-6 h-6" />,
  title: "未来路线图",
  description: "从工具到容器",
  progress: 30
}

// 作者心得卡片
{
  variant: "green",
  icon: <User className="w-6 h-6" />,
  title: "作者心得",
  description: "AI编程实践"
}
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
    技术栈与未来规划
  </h2>
  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
    极简但可靠，从工具到容器的进化之路
  </p>
</motion.div>
```

**关键点**:
- 中心对齐布局
- 响应式字体大小
- 进入视口时触发动画
- 只触发一次（`viewport={{ once: true }}`）

### 2. 卡片网格布局
```typescript
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* 技术实现 */}
  <motion.div {...}>...</motion.div>
  
  {/* 未来路线图 */}
  <motion.div {...}>...</motion.div>
  
  {/* 作者心得 */}
  <motion.div {...}>...</motion.div>
</div>
```

**布局特点**:
- 移动端：1 列布局
- 平板/桌面端：3 列布局
- 卡片间距（`gap-8`）
- 阶梯式延迟入场（0、0.1、0.2 秒）

### 3. 技术实现卡片
```typescript
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
```

**特点**:
- 蓝色变体（`variant="blue"`）
- 进度 100%（已完成）
- 5 个技术要点
- 灰色圆点标记

### 4. 未来路线图卡片
```typescript
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
```

**特点**:
- 黄色变体（`variant="yellow"`）
- 进度 30%（进行中）
- 4 个功能规划
- 已完成（✓）和规划中（○）标记
- 双行文本（标题 + 描述）

### 5. 作者心得卡片
```typescript
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
```

**特点**:
- 绿色变体（`variant="green"`）
- 无进度条
- 2 个心得要点
- 图标 + 文本布局
- 绿色图标（Brain、Zap）

## 样式规范

### 背景渐变
```css
bg-gradient-to-b from-gray-50 to-white
```

**颜色流向**：
- 顶部：`gray-50`（浅灰）
- 底部：`white`（白色）

### 卡片布局
```css
grid grid-cols-1 md:grid-cols-3 gap-8
```

### 技术要点样式
```css
w-2 h-2 bg-gray-400 rounded-full    /* 灰色圆点 */
space-y-3                           /* 垂直间距 */
```

### 路线图标记样式
```css
text-[var(--card-border-green)] font-bold   /* 已完成：绿色对勾 */
text-gray-300                             /* 规划中：灰色圆圈 */
```

### 心得图标样式
```css
w-4 h-4 text-[var(--card-border-green)]   /* 绿色图标 */
mt-0.5 flex-shrink-0                       /* 顶部对齐，不收缩 */
```

## 内容策略

### 技术栈
1. Next.js App Router（现代前端框架）
2. IndexedDB 本地存储（隐私保护）
3. shadcn/ui 组件库（快速开发）
4. Framer Motion 动画（流畅体验）
5. 纯前端设计（无需后端）

### 未来路线图
1. 智能提醒（已完成）- 基于使用频率推送
2. 多端同步（已完成）- 数据云端备份与协作
3. AI 智能归类（规划中）- 自动建议优先级
4. 创意项目孵化（规划中）- 写作/旅行/学习规划

### 作者心得
1. 以"解决自身痛点"为起点
2. AI 辅助拆解需求、生成代码、优化交互
3. 快速落地极简产品
4. 验证"低负担工具"的核心价值

## 使用示例

### 基础使用
```tsx
import TechStackRoadmapSection from '@/components/sections/TechStackRoadmapSection';

export default function Page() {
  return (
    <>
      <section id="learning">学习复盘</section>
      <TechStackRoadmapSection />
    </>
  );
}
```

### 自定义技术栈
```typescript
<InfoCard variant="blue" title="技术栈" progress={100}>
  <div className="space-y-3">
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-gray-400 rounded-full" />
      <span className="text-sm text-gray-700">自定义技术栈</span>
    </div>
  </div>
</InfoCard>
```

### 自定义路线图
```typescript
<InfoCard variant="yellow" title="未来路线图" progress={50}>
  <div className="space-y-3">
    <div className="flex items-start gap-2">
      <span className="text-green-600 mt-1 font-bold">✓</span>
      <div>
        <span className="text-sm font-semibold text-gray-900">自定义功能</span>
        <p className="text-xs text-gray-500">功能描述</p>
      </div>
    </div>
  </div>
</InfoCard>
```

### 自定义作者心得
```typescript
<InfoCard variant="green" title="作者心得">
  <div className="space-y-3">
    <div className="flex items-start gap-2">
      <CustomIcon className="w-4 h-4 text-green-600 mt-0.5" />
      <p className="text-sm text-gray-700">自定义心得</p>
    </div>
  </div>
</InfoCard>
```

## 最佳实践

### 1. 技术栈展示
- 列出核心技术
- 突出核心优势
- 使用简洁描述
- 添加进度指示

### 2. 路线图规划
- 明确功能状态（已完成、规划中）
- 提供功能描述
- 设置合理进度
- 使用清晰的标记

### 3. 心得分享
- 真实表达经验
- 突出核心观点
- 使用图标增强可读性
- 保持简洁有力

### 4. 响应式布局
```typescript
// 移动端 1 列
grid grid-cols-1

// 桌面端 3 列
md:grid-cols-3
```

### 5. 无障碍性
- 使用语义化标签
- 提供清晰的文本描述
- 确保颜色对比度
- 支持键盘导航

## 常见问题

### Q: 如何添加更多技术栈项？
A: 在技术实现卡片中添加新的项：
```typescript
<div className="flex items-center gap-2">
  <div className="w-2 h-2 bg-gray-400 rounded-full" />
  <span className="text-sm text-gray-700">新技术栈</span>
</div>
```

### Q: 如何修改路线图进度？
A: 调整 `progress` 属性：
```typescript
<InfoCard progress={60} {...} />
```

### Q: 如何添加更多路线图项？
A: 在未来路线图卡片中添加新的项：
```typescript
<div className="flex items-start gap-2">
  <span className="text-gray-300 mt-1">○</span>
  <div>
    <span className="text-sm font-semibold text-gray-900">新功能</span>
    <p className="text-xs text-gray-500">功能描述</p>
  </div>
</div>
```

## 性能优化

1. **动画优化**:
   - 使用 `viewport={{ once: true }}` 只触发一次
   - 使用 `framer-motion` 的 GPU 加速
   - 阶梯式延迟减少同时渲染

2. **组件优化**:
   - 复用 InfoCard 组件
   - 使用 `key` 属性
   - 避免在渲染函数中创建新对象

3. **响应式**:
   - 使用 Tailwind 断点
   - 移动端优先策略
   - 灵活的网格布局

## 可访问性

1. **语义化标签**：使用 `<section>` 标签
2. **图标描述**：提供清晰的上下文
3. **颜色对比**：符合 WCAG AA 标准
4. **键盘导航**：支持键盘操作

## 未来扩展

- [ ] 添加技术栈详细信息
- [ ] 添加版本历史
- [ ] 支持多语言
- [ ] 添加技术博客链接
- [ ] 添加贡献指南
- [ ] 支持数据可视化

## 相关文档

- [项目结构文档](../../arch/project-structure.md)
- [主题配置文档](../../styles/theme-configuration.md)
- [InfoCard 组件文档](../ui/info-card.md)
- [LearningJourneySection 组件文档](../sections/learning-journey.md)
- [全局摘要](../../_global.md)

## 版本历史

### v1.0 (2025-02-03)
- ✅ 创建初始文档
- ✅ 完整记录组件实现
- ✅ 添加使用示例和最佳实践
