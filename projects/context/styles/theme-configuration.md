# 主题配置文档

## 版本信息
- **文档版本**: v1.0
- **创建日期**: 2025-02-03
- **最后更新**: 2025-02-03
- **状态**: ✅ 已完成
- **作者**: AI Assistant
- **相关文件**: `src/app/globals.css`

## 概述
ClueBoard 使用 Tailwind CSS 4 的内联主题配置方式，通过 CSS 自定义属性（CSS Variables）定义完整的主题系统。支持明暗主题切换，并提供了一套优先级颜色系统和自定义动画。

## 配置文件
**主配置文件**: `src/app/globals.css`

## 技术细节

### 1. 主题配置方式
```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  /* ... */
}
```

**特点**:
- 使用 Tailwind CSS 4 的 `@theme inline` 语法
- 所有颜色都通过 CSS 变量定义
- 支持 CSS 自定义属性覆盖

### 2. 字体系统

#### 默认字体栈
```css
--font-sans:
  'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', ui-sans-serif,
  system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
  'Helvetica Neue', Arial, sans-serif;
```

#### 等宽字体
```css
--font-mono:
  ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
  'Courier New', monospace;
```

#### 衬线字体
```css
--font-serif:
  'Noto Serif SC', 'Songti SC', 'SimSun', ui-serif, Georgia, Cambria,
  'Times New Roman', Times, serif;
```

**字体优先级**:
1. 中文字体：PingFang SC → Hiragino Sans GB → Microsoft YaHei
2. 系统字体：ui-sans-serif → system-ui
3. 平台字体：-apple-system → BlinkMacSystemFont
4. 英文字体：Segoe UI → Roboto → Helvetica Neue → Arial → sans-serif

### 3. 圆角系统

基础圆角：`0.625rem`（10px）

```css
--radius-sm: calc(var(--radius) - 4px);    /* 6px */
--radius-md: calc(var(--radius) - 2px);    /* 8px */
--radius-lg: var(--radius);                 /* 10px */
--radius-xl: calc(var(--radius) + 4px);    /* 14px */
--radius-2xl: calc(var(--radius) + 8px);   /* 18px */
--radius-3xl: calc(var(--radius) + 12px);  /* 22px */
--radius-4xl: calc(var(--radius) + 16px);  /* 26px */
```

### 4. 颜色系统

#### 4.1 基础颜色（浅色主题）
```css
--background: oklch(1 0 0);                    /* 白色背景 */
--foreground: oklch(0.145 0 0);                /* 深灰前景 */
--card: oklch(1 0 0);                          /* 卡片背景 */
--primary: oklch(0.205 0 0);                   /* 主色调：深灰 */
--secondary: oklch(0.97 0 0);                  /* 次要色：浅灰 */
--muted: oklch(0.97 0 0);                      /* 静音色：浅灰 */
--muted-foreground: oklch(0.556 0 0);          /* 静音前景：中灰 */
--accent: oklch(0.97 0 0);                     /* 强调色：浅灰 */
--destructive: oklch(0.577 0.245 27.325);      /* 危险色：红色 */
--border: oklch(0.922 0 0);                    /* 边框色：浅灰 */
--input: oklch(0.922 0 0);                     /* 输入框边框 */
--ring: oklch(0.708 0 0);                      /* 焦点环：中灰 */
```

#### 4.2 图表颜色（浅色主题）
```css
--chart-1: oklch(0.646 0.222 41.116);    /* 橙色 */
--chart-2: oklch(0.6 0.118 184.704);     /* 青色 */
--chart-3: oklch(0.398 0.07 227.392);    /* 蓝色 */
--chart-4: oklch(0.828 0.189 84.429);    /* 黄色 */
--chart-5: oklch(0.769 0.188 70.08);     /* 绿色 */
```

#### 4.3 深色主题
深色主题通过 `.dark` 类定义，使用相同的变量名但不同的颜色值。

```css
.dark {
  --background: oklch(0.145 0 0);           /* 深灰背景 */
  --foreground: oklch(0.985 0 0);           /* 浅灰前景 */
  --card: oklch(0.205 0 0);                 /* 深灰卡片 */
  /* ... */
}
```

#### 4.4 ClueBoard 自定义颜色

##### 优先级颜色系统
```css
--priority-high: oklch(0.577 0.245 27.325);   /* 红色 - 高优先级 */
--priority-medium: oklch(0.696 0.17 162.48);  /* 黄色 - 中优先级 */
--priority-low: oklch(0.646 0.222 41.116);    /* 绿色 - 低优先级/已完成 */
```

**用途**:
- 高优先级：紧急任务、重要提示
- 中优先级：普通任务、待处理事项
- 低优先级：已完成任务、次要信息

##### 便签卡片颜色
```css
--note-bg: oklch(0.985 0.005 85);              /* 便签背景：浅米色 */
--note-border: oklch(0.92 0 0);                /* 便签边框：浅灰 */
--note-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);  /* 便签阴影 */
```

##### 信息卡片边框颜色
```css
--card-border-blue: oklch(0.6 0.118 184.704);    /* 蓝色边框 */
--card-border-yellow: oklch(0.696 0.17 162.48);  /* 黄色边框 */
--card-border-green: oklch(0.646 0.222 41.116);  /* 绿色边框 */
```

**用途**:
- 蓝色：技术信息、API 文档
- 黄色：学习笔记、心得体会
- 绿色：已完成内容、成功状态

### 5. 响应式断点

```css
--breakpoint-mobile: 640px;    /* 移动设备 */
--breakpoint-tablet: 768px;    /* 平板设备 */
--breakpoint-desktop: 1024px;  /* 桌面设备 */
```

**注**：这些断点作为 CSS 变量定义，但实际使用时仍需配合 Tailwind 的响应式类名：
- `mobile` → `sm:`
- `tablet` → `md:`
- `desktop` → `lg:`

### 6. 自定义动画

#### 全局动画类
```css
/* 淡入动画 */
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

/* 从下往上淡入动画 */
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

/* 从左往右滑入动画 */
.animate-slide-in-left {
  animation: slideInLeft 0.5s ease-out;
}
```

#### 平滑滚动
```css
html {
  scroll-behavior: smooth;
}
```

#### 自定义滚动条
```css
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--muted);
}

::-webkit-scrollbar-thumb {
  background: var(--muted-foreground);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--foreground);
}
```

## 使用指南

### 1. 使用主题颜色
```tsx
<div className="bg-background text-primary">
  <button className="bg-primary text-primary-foreground">
    点击按钮
  </button>
</div>
```

### 2. 使用自定义颜色
```tsx
<div
  style={{
    backgroundColor: 'var(--priority-high)',
    borderColor: 'var(--note-border)'
  }}
>
  高优先级任务
</div>
```

### 3. 使用动画
```tsx
<div className="animate-fade-in-up">
  从下往上淡入的内容
</div>
```

### 4. 切换主题
```tsx
<button onClick={() => document.documentElement.classList.toggle('dark')}>
  切换主题
</button>
```

## 颜色对比度

所有颜色均使用 OKLCH 颜色空间定义，确保：
- 更好的感知均匀性
- 更准确的色彩匹配
- 更好的可访问性

## 性能优化

1. **内联主题**: 减少主题加载时间
2. **CSS 变量**: 便于主题切换和动态更新
3. **OKLCH 颜色空间**: 更高效的色彩计算

## 未来扩展

- [ ] 添加更多预设主题（蓝色主题、绿色主题等）
- [ ] 支持用户自定义主题
- [ ] 添加更多动画效果
- [ ] 支持主题预览功能

## 相关文档

- [项目结构文档](../arch/project-structure.md)
- [技术栈文档](../arch/tech-stack.md)
- [全局摘要](../_global.md)

## 版本历史

### v1.0 (2025-02-03)
- ✅ 创建初始文档
- ✅ 完整记录主题配置
- ✅ 添加使用指南
