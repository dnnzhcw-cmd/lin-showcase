# 状态切换交互模式设计

## 目录
- [设计原则](#设计原则)
- [常见交互模式](#常见交互模式)
- [动画设计](#动画设计)
- [代码实现](#代码实现)
- [使用场景](#使用场景)
- [性能优化](#性能优化)

## 概览
状态切换是用户与界面交互的核心方式之一。良好的状态切换设计能让用户清晰感知到界面变化，提供流畅的操作体验。

## 设计原则

### 核心特性
- **清晰反馈**：用户明确知道发生了什么变化
- **流畅过渡**：动画平滑自然，避免突兀跳转
- **可预测性**：交互行为符合用户预期
- **性能优先**：动画不阻塞界面响应

### 基本原则
- 使用 CSS transform 和 opacity 进行动画（高性能）
- 避免频繁改变 width、height、top、left（触发重排）
- 合理设置动画时长（200-500ms 最佳）
- 提供跳过动画的选项（prefers-reduced-motion）

## 常见交互模式

### 1. Tab 切换

#### 基础实现
```css
.tab-container {
  position: relative;
}

.tab-header {
  display: flex;
  border-bottom: 2px solid #e0e0e0;
}

.tab-button {
  padding: 12px 24px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #666;
  position: relative;
  transition: color 0.3s ease;
}

.tab-button.active {
  color: #2563eb;
}

.tab-button::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #2563eb;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.tab-button.active::after {
  transform: scaleX(1);
}

.tab-content {
  position: relative;
  overflow: hidden;
}

.tab-panel {
  display: none;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.tab-panel.active {
  display: block;
  opacity: 1;
  transform: translateY(0);
}
```

#### 滑动指示器效果
```css
.tab-indicator {
  position: absolute;
  bottom: -2px;
  height: 2px;
  background-color: #2563eb;
  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 2. 折叠面板（Accordion）

#### 基础样式
```css
.accordion {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

.accordion-item {
  border-bottom: 1px solid #e0e0e0;
}

.accordion-item:last-child {
  border-bottom: none;
}

.accordion-header {
  padding: 16px 20px;
  background-color: #f5f5f5;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s ease;
}

.accordion-header:hover {
  background-color: #eeeeee;
}

.accordion-header .icon {
  transition: transform 0.3s ease;
}

.accordion-item.active .accordion-header .icon {
  transform: rotate(180deg);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.accordion-body {
  padding: 16px 20px;
}
```

#### JavaScript 控制
```javascript
function toggleAccordion(item) {
  const isActive = item.classList.contains('active');
  const content = item.querySelector('.accordion-content');

  // 关闭所有其他项目
  document.querySelectorAll('.accordion-item').forEach(i => {
    i.classList.remove('active');
    i.querySelector('.accordion-content').style.maxHeight = '0';
  });

  // 切换当前项目
  if (!isActive) {
    item.classList.add('active');
    content.style.maxHeight = content.scrollHeight + 'px';
  }
}
```

### 3. 模态框（Modal）

#### 基础实现
```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 1000;
}

.modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

.modal-content {
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  max-width: 500px;
  width: 90%;
  transform: scale(0.9) translateY(20px);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-overlay.active .modal-content {
  transform: scale(1) translateY(0);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  transition: color 0.2s;
}

.modal-close:hover {
  color: #333;
}
```

#### 带动画的关闭
```css
.modal-overlay.closing {
  opacity: 0;
  visibility: hidden;
}

.modal-overlay.closing .modal-content {
  transform: scale(0.9) translateY(20px);
}
```

### 4. 侧边栏抽屉（Drawer）

```css
.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 1000;
}

.drawer-overlay.active {
  opacity: 1;
  visibility: visible;
}

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  max-width: 85%;
  height: 100%;
  background-color: white;
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1001;
}

.drawer-overlay.active .drawer {
  transform: translateX(0);
}

.drawer-header {
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.drawer-body {
  padding: 20px;
  overflow-y: auto;
  height: calc(100% - 80px);
}
```

### 5. 工具提示（Tooltip）

```css
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip-content {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background-color: #333;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 0.875rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, transform 0.2s ease;
  pointer-events: none;
  z-index: 100;
}

.tooltip-content::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: #333;
}

.tooltip:hover .tooltip-content {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(-5px);
}
```

## 动画设计

### 缓动函数选择

#### 常用缓动曲线
```css
/* 线性 - 匀速运动 */
transition: transform 0.3s linear;

/* 缓入 - 快速开始，慢速结束 */
transition: transform 0.3s ease-in;

/* 缓出 - 慢速开始，快速结束 */
transition: transform 0.3s ease-out;

/* 缓入缓出 - 最常用，自然流畅 */
transition: transform 0.3s ease;

/* 自定义贝塞尔曲线 - 更精确控制 */
transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

#### 推荐缓动曲线
| 场景 | 缓动曲线 | 说明 |
|------|---------|------|
| 通用过渡 | cubic-bezier(0.4, 0, 0.2, 1) | Material Design 标准 |
| 弹性效果 | cubic-bezier(0.34, 1.56, 0.64, 1) | 带回弹的动画 |
| 快速响应 | cubic-bezier(0.25, 0.46, 0.45, 0.94) | 敏捷的交互 |

### 动画时长

```css
/* 快速交互 - 100-200ms */
.fast {
  transition: 0.15s ease;
}

/* 标准过渡 - 200-300ms */
.normal {
  transition: 0.25s ease;
}

/* 复杂动画 - 300-500ms */
.slow {
  transition: 0.4s ease;
}

/* 尊重用户偏好 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 交错动画（Staggered Animation）

```css
.item {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
}

.item:nth-child(1) { animation-delay: 0s; }
.item:nth-child(2) { animation-delay: 0.1s; }
.item:nth-child(3) { animation-delay: 0.2s; }
.item:nth-child(4) { animation-delay: 0.3s; }
.item:nth-child(5) { animation-delay: 0.4s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

#### JavaScript 动态设置
```javascript
function staggerAnimation(items, delay = 100) {
  items.forEach((item, index) => {
    item.style.animationDelay = `${index * delay}ms`;
  });
}
```

## 代码实现

### React + Framer Motion 示例

```jsx
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  { id: 'features', label: '功能特性', content: '...' },
  { id: 'pricing', label: '价格方案', content: '...' },
  { id: 'faq', label: '常见问题', content: '...' },
];

function TabComponent() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="tab-container">
      <div className="tab-header">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="tab-content"
        >
          {tabs.find(tab => tab.id === activeTab).content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
```

### Vue + Transition 示例

```vue
<template>
  <div class="tab-container">
    <div class="tab-header">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="['tab-button', { active: activeTab === tab.id }]"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <transition name="fade-slide" mode="out-in">
      <div :key="activeTab" class="tab-content">
        {{ tabs.find(t => t.id === activeTab).content }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'features',
      tabs: [
        { id: 'features', label: '功能特性', content: '...' },
        { id: 'pricing', label: '价格方案', content: '...' },
        { id: 'faq', label: '常见问题', content: '...' },
      ],
    };
  },
};
</script>

<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
```

## 使用场景

### AI 产品展示页适用模式

#### 1. 功能演示 vs 使用说明
```html
<!-- Tab 切换展示不同内容 -->
<div class="product-tabs">
  <button class="tab-button active" data-tab="demo">演示</button>
  <button class="tab-button" data-tab="guide">使用指南</button>
</div>

<div class="tab-panel active" id="demo">
  <!-- 产品交互演示 -->
</div>

<div class="tab-panel" id="guide">
  <!-- 详细使用说明 -->
</div>
```

#### 2. 新手引导 vs 高级模式
```html
<div class="mode-switch">
  <label>
    <input type="radio" name="mode" value="beginner" checked>
    新手模式
  </label>
  <label>
    <input type="radio" name="mode" value="advanced">
    高级模式
  </label>
</div>

<div class="content-mode content-beginner">
  <p>简单的入门说明...</p>
</div>

<div class="content-mode content-advanced" style="display: none;">
  <p>详细的配置选项...</p>
</div>
```

#### 3. 常见问题折叠面板
```html
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header">
      <span>如何开始使用？</span>
      <span class="icon">▼</span>
    </div>
    <div class="accordion-content">
      <div class="accordion-body">
        注册账号 → 创建项目 → 开始创作
      </div>
    </div>
  </div>
</div>
```

#### 4. 快速帮助工具提示
```html
<button class="help-icon tooltip">
  ?
  <span class="tooltip-content">
    点击这里可以获取实时帮助
  </span>
</button>
```

## 性能优化

### 1. 使用 GPU 加速

```css
/* ✅ 使用 transform 和 opacity */
.element {
  transform: translateX(100px);
  opacity: 0.5;
}

/* ❌ 避免使用会触发重排的属性 */
.element {
  left: 100px;
  width: 200px;
}
```

### 2. 批量更新 DOM

```javascript
// ❌ 错误：多次触发重排
element.style.left = '10px';
element.style.top = '20px';
element.style.width = '100px';

// ✅ 正确：使用 class 批量切换
element.classList.add('active');
```

### 3. 虚拟滚动（大量数据）

```javascript
function VirtualList(items, itemHeight = 50) {
  const containerHeight = 500;
  const visibleCount = Math.ceil(containerHeight / itemHeight);
  const scrollTop = 0;

  function getVisibleItems() {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = startIndex + visibleCount;
    return items.slice(startIndex, endIndex);
  }

  return {
    render: () => {
      const visibleItems = getVisibleItems();
      // 渲染可见项
    },
    onScroll: (e) => {
      scrollTop = e.target.scrollTop;
      // 更新可见项
    },
  };
}
```

### 4. 使用 Intersection Observer 实现懒加载

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      target.classList.add('visible');
      observer.unobserve(target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '50px',
});

document.querySelectorAll('.lazy-animate').forEach(el => {
  observer.observe(el);
});
```

## 注意事项

### 可访问性
- 为键盘用户提供焦点管理
- 添加 ARIA 属性（aria-expanded, aria-selected 等）
- 支持屏幕阅读器
- 提供 `prefers-reduced-motion` 媒体查询支持

### 移动端适配
- 触摸交互优化（增大点击区域）
- 避免使用 hover-only 的交互
- 确保动画在移动设备上流畅
- 考虑网络状况，减少动画复杂度

### 浏览器兼容性
```css
/* 降级方案 */
@supports not (transition: transform 0.3s) {
  .element {
    /* 提供静态替代方案 */
  }
}

/* 前缀（如需要） */
.element {
  -webkit-transform: translateX(100px);
  -ms-transform: translateX(100px);
  transform: translateX(100px);
}
```

---

**记住**：优秀的状态切换设计应该让用户几乎感觉不到动画的存在，但又能在需要时提供清晰的视觉反馈。克制、流畅、有意义是关键原则。
