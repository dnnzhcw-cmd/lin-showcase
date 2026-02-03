# 虚拟便签组件设计规范

## 目录
- [设计原则](#设计原则)
- [视觉设计](#视觉设计)
- [交互行为](#交互行为)
- [代码实现](#代码实现)
- [使用场景](#使用场景)
- [注意事项](#注意事项)

## 概览
虚拟便签是一种模拟真实便利贴的 UI 组件，用于在页面中展示补充信息、提示或轻量级内容。其特点是具有纸质质感、手写风格和灵活的定位方式。

## 设计原则

### 核心特性
- **纸质质感**：通过阴影、纹理、边角营造真实便签的触感
- **手写风格**：使用手写字体或自然手写效果，增强亲和力
- **灵活定位**：可贴附在页面不同位置，打破常规布局
- **轻量内容**：适合展示简短信息，避免长篇文字

### 避免事项
- 避免过度使用导致视觉混乱
- 避免便签内容与主内容冲突
- 避免在严肃商务场景使用

## 视觉设计

### 基础样式

#### 1. 颜色选择
**推荐颜色**：
- 黄色系：`#FFF59D`（明黄）、`#FFEB3B`（经典黄）
- 粉色系：`#F8BBD0`（浅粉）、`#F48FB1`（粉红）
- 蓝色系：`#BBDEFB`（浅蓝）、`#90CAF9`（天蓝）
- 绿色系：`#C8E6C9`（浅绿）、`#A5D6A7`（草绿）

**设计原则**：
- 选择柔和、自然的颜色，避免高饱和度
- 保持颜色与整体页面协调
- 多个便签使用不同颜色时，确保色彩和谐

#### 2. 纸质质感

**阴影效果**：
```css
/* 基础阴影 */
.sticky-note {
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.1),
    0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 3D 立体效果 */
.sticky-note {
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.05),
    0 10px 20px rgba(0, 0, 0, 0.15);
  transform: rotate(-2deg);
}
```

**纹理效果**：
```css
/* 噪点纹理 */
.sticky-note {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
}

/* 纸张纹理（可选） */
.sticky-note {
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'/%3E%3C/g%3E%3C/svg%3E");
}
```

#### 3. 边角处理
```css
/* 圆角（柔和） */
.sticky-note {
  border-radius: 4px;
}

/* 微微折角效果 */
.sticky-note::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.05) 50%);
  border-radius: 0 4px 0 0;
}
```

### 字体选择

#### 推荐手写字体
- Google Fonts：
  - `Patrick Hand` - 自然的笔触
  - `Indie Flower` - 粗犷的手写风格
  - `Kalam` - 平滑的手写体
  - `Caveat` - 快速书写的风格
  - `Gloria Hallelujah` - 明亮活泼

#### 替代方案
- 使用系统手写字体：
  ```css
  font-family: "Brush Script MT", "Comic Sans MS", cursive;
  ```

#### 字体大小与行高
```css
.sticky-note {
  font-family: 'Patrick Hand', cursive;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
}
```

## 交互行为

### 1. 悬停效果
```css
.sticky-note {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.sticky-note:hover {
  transform: rotate(0deg) translateY(-5px);
  box-shadow:
    0 5px 15px rgba(0, 0, 0, 0.15),
    0 10px 25px rgba(0, 0, 0, 0.1);
}
```

### 2. 拖拽功能（可选）
```javascript
// 简单的拖拽实现
const note = document.querySelector('.sticky-note');
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

note.addEventListener('mousedown', dragStart);
document.addEventListener('mouseup', dragEnd);
document.addEventListener('mousemove', drag);

function dragStart(e) {
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;
  if (e.target === note) {
    isDragging = true;
  }
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;
  isDragging = false;
}

function drag(e) {
  if (isDragging) {
    e.preventDefault();
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;
    xOffset = currentX;
    yOffset = currentY;
    setTranslate(currentX, currentY, note);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}
```

### 3. 折叠效果（高级）
```css
/* 折叠动画 */
.sticky-note.collapsed {
  max-height: 60px;
  overflow: hidden;
  cursor: pointer;
}

.sticky-note.collapsed::before {
  content: '点击展开';
  position: absolute;
  bottom: 5px;
  right: 10px;
  font-size: 0.8rem;
  opacity: 0.6;
}
```

## 代码实现

### HTML 结构
```html
<div class="sticky-note" style="background-color: #FFF59D;">
  <h3 class="note-title">提示</h3>
  <p class="note-content">这是一个虚拟便签示例，用于展示补充信息。</p>
  <div class="note-footer">
    <span class="note-date">2024-02-02</span>
    <button class="note-close">&times;</button>
  </div>
</div>
```

### CSS 完整实现
```css
.sticky-note {
  position: relative;
  width: 280px;
  min-height: 200px;
  padding: 20px;
  background-color: #FFF59D;
  border-radius: 4px;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.1),
    0 4px 8px rgba(0, 0, 0, 0.1);
  transform: rotate(-2deg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: 'Patrick Hand', cursive;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  cursor: default;
  z-index: 10;
}

.sticky-note::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.05) 50%);
  border-radius: 0 4px 0 0;
}

.sticky-note:hover {
  transform: rotate(0deg) translateY(-5px);
  box-shadow:
    0 5px 15px rgba(0, 0, 0, 0.15),
    0 10px 25px rgba(0, 0, 0, 0.1);
  z-index: 11;
}

.note-title {
  margin: 0 0 10px 0;
  font-size: 1.3rem;
  font-weight: bold;
  color: #222;
}

.note-content {
  margin: 0;
  white-space: pre-wrap;
}

.note-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px dashed rgba(0,0,0,0.15);
}

.note-date {
  font-size: 0.9rem;
  opacity: 0.7;
}

.note-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.2s;
}

.note-close:hover {
  opacity: 1;
}
```

### React 组件示例
```jsx
import React from 'react';
import './StickyNote.css';

const StickyNote = ({ title, content, color, onClose, onDrag }) => {
  const [isDragging, setIsDragging] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (onDrag) {
      setIsDragging(true);
      const startX = e.clientX - position.x;
      const startY = e.clientY - position.y;

      const handleMouseMove = (e) => {
        const newX = e.clientX - startX;
        const newY = e.clientY - startY;
        setPosition({ x: newX, y: newY });
      };

      const handleMouseUp = () => {
        setIsDragging(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  };

  return (
    <div
      className="sticky-note"
      style={{
        backgroundColor: color || '#FFF59D',
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
    >
      {title && <h3 className="note-title">{title}</h3>}
      <p className="note-content">{content}</p>
      {onClose && (
        <button className="note-close" onClick={onClose}>
          &times;
        </button>
      )}
    </div>
  );
};

export default StickyNote;
```

## 使用场景

### 1. 补充说明
在产品页面中添加补充信息，避免打断主内容的阅读流。

```html
<div class="product-section">
  <h2>核心功能</h2>
  <p>我们的 AI 助手可以帮助您...</p>
  <div class="sticky-note" style="margin-left: 20px; margin-top: -30px;">
    <h3>小贴士</h3>
    <p>首次使用前，建议先查看快速入门指南。</p>
  </div>
</div>
```

### 2. 用户评价
展示用户反馈，增加真实感。

```html
<div class="testimonials">
  <div class="sticky-note" style="background-color: #F8BBD0; transform: rotate(-3deg);">
    <p>"这个工具完全改变了我的工作流程！"</p>
    <div class="note-footer">
      <span class="note-date">- 张三，设计师</span>
    </div>
  </div>
</div>
```

### 3. 快速提示
在操作界面中提供即时帮助。

```html
<div class="editor">
  <textarea placeholder="开始输入..."></textarea>
  <div class="sticky-note" style="background-color: #BBDEFB; position: absolute; right: -300px; top: 0;">
    <h3>快捷键</h3>
    <p>Ctrl+S：保存</p>
    <p>Ctrl+K：快速命令</p>
  </div>
</div>
```

### 4. 版本更新公告
临时性通知，可随时移除。

```html
<div class="sticky-note" style="background-color: #C8E6C9; position: fixed; top: 20px; right: 20px; z-index: 100;">
  <h3>🎉 新功能</h3>
  <p>现在支持导出 PDF 格式！</p>
  <button class="note-close" onclick="this.parentElement.remove()">&times;</button>
</div>
```

## 注意事项

### 性能考虑
- 避免在单个页面中使用超过 5 个便签
- 复杂的纹理效果可能影响渲染性能，建议使用简单的阴影和颜色
- 如果需要大量便签，考虑使用 CSS 动画而非 JavaScript

### 可访问性
- 确保文字对比度足够（WCAG AA 标准）
- 为拖拽功能提供键盘替代方案
- 便签内容应简洁明了，避免屏幕阅读器冗长

### 响应式设计
- 在移动端隐藏或简化便签
- 考虑在小屏幕上自动折叠便签
- 避免便签遮挡重要内容

### 品牌一致性
- 便签颜色应与品牌色协调
- 字体选择应与整体设计语言一致
- 避免过度装饰影响品牌识别

## 最佳实践示例

```html
<!-- 多个便签的和谐布局 -->
<div class="notes-container">
  <div class="sticky-note" style="background-color: #FFF59D; transform: rotate(-2deg); z-index: 1;">
    <h3>设计原则</h3>
    <p>简洁、清晰、一致</p>
  </div>

  <div class="sticky-note" style="background-color: #F8BBD0; transform: rotate(3deg); z-index: 2; margin-left: -80px; margin-top: 20px;">
    <h3>配色方案</h3>
    <p>主色：蓝色</p>
    <p>点缀：橙色</p>
  </div>

  <div class="sticky-note" style="background-color: #BBDEFB; transform: rotate(-1deg); z-index: 3; margin-left: 60px; margin-top: -30px;">
    <h3>技术栈</h3>
    <p>React + Tailwind CSS</p>
  </div>
</div>

<style>
.notes-container {
  position: relative;
  padding: 100px 50px;
}
</style>
```

---

**记住**：虚拟便签是增强用户界面趣味性和信息传达的工具，但不应过度使用。保持克制，确保每个便签都有明确的用途和价值。
