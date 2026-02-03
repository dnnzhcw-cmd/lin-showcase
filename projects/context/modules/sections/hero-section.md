# HeroSection 组件文档

## 版本信息
- **文档版本**: v1.0
- **创建日期**: 2025-02-03
- **最后更新**: 2025-02-03
- **状态**: ✅ 已完成
- **作者**: AI Assistant
- **组件文件**: `src/components/sections/HeroSection.tsx`
- **组件类型**: Section Component

## 概述
HeroSection 是 ClueBoard 的首页展示区域，作为页面的第一个视觉冲击点。采用深色渐变背景，搭配浮动便签动画，营造出现代、动态的视觉效果。核心传达产品的价值主张：为健忘星人打造线索墙式任务管理工具。

## 核心功能

### 1. 视觉设计
- 深色渐变背景（黑色到灰色）
- 浮动便签动画效果
- 阶梯式文本展示
- 底部渐变遮罩过渡

### 2. 动画效果
- 文本淡入上浮动画
- 背景便签无限循环浮动
- 按钮缩放动画
- 向下滚动指示器跳动动画

### 3. 交互功能
- 点击按钮平滑滚动到下一个章节
- 点击向下指示器平滑滚动
- 响应式布局适配

## 技术架构

### 依赖库
```json
{
  "framer-motion": "^12.30.0",  // 动画库
  "lucide-react": "^0.344.0"    // 图标库
}
```

### 浮动便签配置
```typescript
const floatingNotes = [
  { delay: 0, duration: 6, x: -20, y: 30, rotate: -5 },    // 左上
  { delay: 2, duration: 7, x: 20, y: -20, rotate: 5 },     // 右上
  { delay: 4, duration: 5, x: -30, y: -10, rotate: -3 },   // 左下
];
```

**参数说明**:
- `delay`: 动画延迟时间（秒）
- `duration`: 动画周期（秒）
- `x/y`: 浮动范围（像素）
- `rotate`: 旋转角度（度）

## 实现细节

### 1. 平滑滚动实现
```typescript
const scrollToNext = () => {
  const nextSection = document.getElementById('pitch');
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
```

**特点**:
- 使用原生 DOM API
- 平滑滚动效果
- 对齐到目标章节顶部

### 2. 背景浮动便签
```typescript
{floatingNotes.map((note, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0, 0.3, 0.3, 0],         // 透明度循环
      y: [0, note.y, -note.y, 0],         // 垂直移动循环
      x: [0, note.x, -note.x, 0],         // 水平移动循环
      rotate: [0, note.rotate, -note.rotate, 0],  // 旋转循环
    }}
    transition={{
      duration: note.duration,
      delay: note.delay,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
    }}
    className="absolute w-24 h-24 bg-[var(--note-bg)] rounded-lg shadow-lg"
    style={{
      left: `${10 + index * 20}%`,  // 水平位置
      top: `${20 + index * 15}%`,   // 垂直位置
    }}
  />
))}
```

**关键点**:
- 使用数组动画实现循环效果
- 延迟启动避免同步
- 低透明度不干扰前景内容
- 无限循环动画

### 3. 主内容区域
```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}     // 初始：透明、向下偏移
  animate={{ opacity: 1, y: 0 }}       // 动画：不透明、归位
  transition={{ duration: 0.8 }}       // 持续时间
>
  <p className="text-sm md:text-base text-gray-400 mb-6 tracking-wider uppercase">
    探索AI：学习、实践、展示
  </p>
  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
    总忘长期任务？
  </h1>
  <p className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-300 mb-8 leading-tight">
    不是你记性差，是工具太笨重
  </p>
  <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
    为健忘星人打造的「线索墙式」任务管理工具<br />
    让重要的事情，一眼就能看见
  </p>
</motion.div>
```

**响应式字体大小**:
- 移动端：`text-4xl` / `text-2xl` / `text-lg`
- 平板端：`md:text-6xl` / `md:text-4xl` / `md:text-xl`
- 桌面端：`lg:text-7xl` / `lg:text-5xl`

### 4. CTA 按钮
```typescript
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.3, duration: 0.5 }}
  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
>
  <button
    onClick={scrollToNext}
    className="px-8 py-4 bg-[var(--priority-high)] text-white rounded-lg font-semibold text-lg hover:bg-red-600 transition-colors shadow-lg btn-hover"
  >
    探索 ClueBoard
  </button>
</motion.div>
```

**特点**:
- 延迟 0.3 秒显示
- 缩放入场动画
- 使用主题变量颜色（`--priority-high` 红色）
- 响应式布局（移动端垂直，桌面端水平）

### 5. 向下滚动指示器
```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1, duration: 0.5 }}
  className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
  onClick={scrollToNext}
>
  <span className="text-sm text-gray-400 mb-2">向下滚动探索</span>
  <motion.div
    animate={{ y: [0, 10, 0] }}                    // 垂直跳动
    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    className="p-3 bg-white/10 backdrop-blur-sm rounded-full"
  >
    <ChevronDown className="w-6 h-6 text-white" />
  </motion.div>
</motion.div>
```

**特点**:
- 延迟 1 秒显示
- 垂直跳动动画（周期 1.5 秒）
- 毛玻璃背景效果（`backdrop-blur-sm`）
- 居中定位

### 6. 底部渐变遮罩
```typescript
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
```

**作用**:
- 从黑色渐变到白色
- 平滑过渡到下一个章节
- 视觉上连接深色和浅色区域

## 样式规范

### 背景渐变
```css
bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
```

**颜色流向**：
- 左上：`gray-900`（黑色）
- 中间：`gray-800`（深灰）
- 右下：`gray-900`（黑色）

### 文本颜色
```css
text-white           /* 主标题：白色 */
text-gray-300        /* 副标题：浅灰 */
text-gray-400        /* 描述文本：中灰 */
```

### 按钮样式
```css
bg-[var(--priority-high)]   /* 主色：红色 */
text-white                  /* 文字：白色 */
rounded-lg                  /* 圆角：lg */
shadow-lg                   /* 阴影：lg */
```

### 响应式断点
- 移动端：< 640px（无断点前缀）
- 平板端：>= 640px（`sm:`）
- 桌面端：>= 768px（`md:`）
- 大屏：>= 1024px（`lg:`）

## 内容策略

### 标题层级
1. **副标题**："探索AI：学习、实践、展示"
2. **主标题**："总忘长期任务？"
3. **副标题**："不是你记性差，是工具太笨重"
4. **描述**："为健忘星人打造的「线索墙式」任务管理工具"

### 情感引导
- **痛点**：忘记长期任务
- **共情**：不是记性差
- **解决方案**：线索墙式工具
- **价值主张**：一眼就能看见

### 行动号召
- 主按钮："探索 ClueBoard"
- 指示器："向下滚动探索"

## 使用示例

### 基础使用
```tsx
import HeroSection from '@/components/sections/HeroSection';

export default function Page() {
  return (
    <>
      <HeroSection />
      <section id="pitch">下一个章节</section>
    </>
  );
}
```

### 自定义内容
```typescript
// 修改 src/components/sections/HeroSection.tsx
export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center">
      <h1>自定义标题</h1>
    </section>
  );
}
```

### 自定义动画参数
```typescript
const floatingNotes = [
  { delay: 0, duration: 6, x: -20, y: 30, rotate: -5 },
  { delay: 2, duration: 7, x: 20, y: -20, rotate: 5 },
  { delay: 4, duration: 5, x: -30, y: -10, rotate: -3 },
  // 添加更多便签
  { delay: 6, duration: 8, x: 15, y: 25, rotate: 4 },
];
```

## 性能优化

1. **动画优化**:
   - 使用 `framer-motion` 的 GPU 加速
   - 避免复杂的布局重排
   - 低透明度减少渲染负担

2. **响应式图片**:
   - 背景使用 CSS 渐变（无图片）
   - 便签使用 CSS 样式（无图片）

3. **事件监听**:
   - 使用原生 DOM API
   - 无持续监听（点击触发）

## 可访问性

1. **语义化标签**：使用 `<section>` 标签
2. **颜色对比**：文本与背景对比度符合 WCAG AA 标准
3. **键盘导航**：按钮支持键盘聚焦
4. **屏幕阅读器**：文本内容清晰可读

## 未来扩展

- [ ] 添加视频背景
- [ ] 支持多个 CTA 按钮
- [ ] 添加社交分享按钮
- [ ] 支持自定义背景
- [ ] 添加粒子效果
- [ ] 支持多语言

## 相关文档

- [项目结构文档](../../arch/project-structure.md)
- [主题配置文档](../../styles/theme-configuration.md)
- [NavigationBar 组件文档](../layout/navigation-bar.md)
- [全局摘要](../../_global.md)

## 版本历史

### v1.0 (2025-02-03)
- ✅ 创建初始文档
- ✅ 完整记录组件实现
- ✅ 添加使用示例和最佳实践
