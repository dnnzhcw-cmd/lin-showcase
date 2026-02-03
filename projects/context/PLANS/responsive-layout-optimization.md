# 响应式布局优化计划

## 当前状态（更新于 2025-02-03）
- ✅ **阶段 1 已完成**：快速修复 - 移动端导航栏遮挡问题已解决
- ✅ **阶段 3 已完成**：系统级安全区域 - iOS 刘海屏适配已实现
- ⏳ **阶段 2 待执行**：动态适配 - 可选的动态导航栏高度计算

## 背景
ClueBoard 展示页 HeroSection 组件在移动端存在导航栏遮挡问题，需要完善响应式适配。

## 现状分析

### 导航栏高度（NavigationBar.tsx）
- **移动端**：
  - 固定定位：`fixed top-0 left-0 right-0 z-50`
  - 内层高度：`py-3`（上下各 12px）+ `text-lg`（18px）≈ 42px
  - 背景模糊：`bg-white/80 backdrop-blur-md`
  - 边框：`border-b border-gray-200`（可能占用 1px）
  - 阴影：`shadow-sm`（不影响布局但影响视觉）
  - **实际可见高度约 43-45px**

- **桌面端**：
  - 固定定位：`fixed left-4 top-4 z-40`
  - 高度：`py-6`（上下各 24px）+ 图标 ≈ 72px

### HeroSection 当前布局
```tsx
<section className="relative w-screen flex flex-col" style={{ minHeight: '100dvh' }}>
  {/* 移动端顶部安全区域（避开固定导航栏） */}
  <div className="lg:hidden h-[60px] flex-shrink-0" />

  {/* 顶部标题区域 */}
  <HeroHeader />  {/* h-[12vh] md:h-[15vh] lg:h-[16vh] */}

  {/* 背景区域 */}
  <div className="flex-1 relative overflow-hidden">...</div>
</section>
```

### 问题诊断
1. **导航栏遮挡 HeroHeader**：当前 60px 安全区域可能不够（导航栏约 43-45px，但需要额外间距）
2. **HeroHeader 高度响应式不够精确**：使用 `12vh` 在不同设备上差异较大
3. **缺少系统级安全区域适配**：未考虑 iOS 刘海屏等系统安全区域

## 优化方案

### 方案 1：增加安全区域高度（快速修复）
**目标**：确保 HeroHeader 不被导航栏遮挡

**实施步骤**：
1. 将移动端安全区域从 `h-[60px]` 增加到 `h-[72px]`（18px × 4）
2. 为 HeroHeader 添加顶部间距 `pt-4`（移动端）
3. 验证不同设备（iPhone SE, iPhone 14 Pro, Android）的显示效果

**代码修改**：
```tsx
// HeroSection.tsx
<div className="lg:hidden h-[72px] flex-shrink-0" />

// HeroHeader.tsx
<div className="h-[12vh] pt-4 md:pt-0 bg-slate-50 ...">
```

**优点**：简单快速，风险低
**缺点**：不够精确，可能在某些设备上留白过多

---

### 方案 2：动态计算导航栏高度（推荐）
**目标**：精确适配不同设备的导航栏高度

**实施步骤**：
1. 创建 `useNavbarHeight` Hook 动态计算导航栏实际高度
2. 将安全区域高度设置为动态值
3. 添加防抖处理避免频繁计算

**代码实现**：
```tsx
// hooks/useNavbarHeight.ts
import { useState, useEffect } from 'react';

export function useNavbarHeight() {
  const [height, setHeight] = useState(64); // 默认值

  useEffect(() => {
    const calculateHeight = () => {
      const navbar = document.querySelector('[data-mobile-navbar]');
      if (navbar) {
        setHeight(navbar.getBoundingClientRect().height + 16); // +16px 额外间距
      }
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    return () => window.removeEventListener('resize', calculateHeight);
  }, []);

  return height;
}

// HeroSection.tsx
const navbarHeight = useNavbarHeight();

<div
  className="lg:hidden flex-shrink-0 transition-all duration-300"
  style={{ height: `${navbarHeight}px` }}
/>
```

**NavigationBar.tsx 修改**：
```tsx
<div
  className="lg:hidden fixed top-0 left-0 right-0 z-50 ..."
  data-mobile-navbar
>
```

**优点**：精确适配，自动响应设备变化
**缺点**：需要额外代码，增加复杂度

---

### 方案 3：使用 CSS 变量 + 系统安全区域（最佳实践）
**目标**：结合 CSS 变量、环境变量和动态计算

**实施步骤**：
1. 在 `globals.css` 中定义导航栏高度 CSS 变量
2. 使用 `env(safe-area-inset-top)` 适配 iOS 刘海屏
3. 结合动态计算更新 CSS 变量

**代码实现**：
```css
/* globals.css */
:root {
  --mobile-navbar-height: 64px;
  --mobile-safe-area-top: env(safe-area-inset-top, 0px);
}

@media (max-width: 1023px) {
  body {
    padding-top: calc(var(--mobile-navbar-height) + var(--mobile-safe-area-top));
  }
}
```

**HeroSection.tsx 修改**：
```tsx
<div
  className="lg:hidden flex-shrink-0"
  style={{
    height: `calc(var(--mobile-navbar-height) + var(--mobile-safe-area-top) + 16px)`
  }}
/>
```

**NavigationBar.tsx 修改**：
```tsx
// 更新 CSS 变量
useEffect(() => {
  const navbar = document.querySelector('[data-mobile-navbar]');
  if (navbar) {
    const height = navbar.getBoundingClientRect().height;
    document.documentElement.style.setProperty('--mobile-navbar-height', `${height}px`);
  }
}, []);
```

**优点**：最佳实践，支持系统级安全区域，易于维护
**缺点**：实现最复杂

---

## 实施计划

### 阶段 1：快速修复（已完成 ✅）
- [x] 将移动端安全区域从 `h-[60px]` 增加到 `h-[72px]`
- [x] 为 HeroHeader 添加 `pt-4` 移动端顶部间距
- [x] 添加 iOS 刘海屏支持（使用 `env(safe-area-inset-top)`）
- [x] 在 `globals.css` 中定义移动端安全区域 CSS 变量
- [x] 优化浮动元素 z-index（从 20 降低到 5）并添加 pointer-events-none
- [ ] 验证移动端显示效果（待测试）

### 阶段 2：动态适配（后续优化）
- [ ] 创建 `useNavbarHeight` Hook
- [ ] 为 NavigationBar 添加 `data-mobile-navbar` 标记
- [ ] 将安全区域改为动态高度
- [ ] 添加防抖处理

### 阶段 3：系统级安全区域（已完成 ✅）
- [x] 在 `globals.css` 中定义 CSS 变量
- [x] 使用 `env(safe-area-inset-top)` 适配 iOS 刘海屏
- [x] 更新 HeroSection 使用 CSS 变量
- [ ] 更新 NavigationBar 动态更新 CSS 变量（可选）

## 测试设备清单
- iPhone SE（小屏）
- iPhone 14 Pro（刘海屏）
- iPhone 15 Pro Max（灵动岛）
- iPad Mini
- Android 中端设备
- Android 高端设备

## 成功标准
1. 移动端 HeroHeader 完全不被导航栏遮挡
2. 各设备上顶部间距保持一致
3. 不影响桌面端布局
4. 不影响其他 Section 的滚动定位

## 风险评估
- **方案 1**：低风险，但不精确
- **方案 2**：中等风险，需要充分测试
- **方案 3**：高风险，需要全面测试各设备

## 备注
- 优先使用方案 1 快速修复问题 ✅
- 方案 2 和 3 可作为后续优化逐步实施
- 所有方案都应先在本地测试，确认无问题后再部署

## 修改记录

### 2025-02-03 - 快速修复与 iOS 刘海屏适配

**文件修改清单**：
1. `src/components/sections/HeroSection.tsx`
   - 将移动端安全区域从 `h-[60px]` 改为使用 CSS 变量 `calc(var(--mobile-navbar-height) + var(--mobile-safe-area-top))`
   - 将浮动元素 z-index 从 20 降低到 5
   - 为浮动元素添加 `pointer-events-none` 避免阻挡交互

2. `src/components/sections/HeroHeader.tsx`
   - 添加 `pt-4` 移动端顶部间距（md:pt-0 仅在移动端生效）

3. `src/app/globals.css`
   - 添加 CSS 变量：
     - `--mobile-navbar-height: 72px`
     - `--mobile-safe-area-top: env(safe-area-inset-top, 0px)`
     - `--hero-accent-orange: #ea580c`

**技术要点**：
- 使用 `env(safe-area-inset-top)` 支持 iOS 刘海屏和灵动岛
- 使用 CSS 变量管理导航栏高度，便于后续动态调整
- 浮动元素降低 z-index 并添加 `pointer-events-none` 确保不阻挡核心内容交互

**验证清单**：
- [ ] iPhone SE（小屏）显示正常
- [ ] iPhone 14 Pro（刘海屏）显示正常，顶部不被刘海遮挡
- [ ] iPhone 15 Pro Max（灵动岛）显示正常
- [ ] Android 设备显示正常
- [ ] 桌面端布局不受影响

**待测试**：
需要在真实设备上测试以下场景：
1. 移动端 HeroHeader 是否完全不被导航栏遮挡
2. iOS 刘海屏设备上顶部是否留有足够的安全区域
3. 核心文案卡片是否在所有设备上都能正常显示
4. 浮动元素是否不阻挡交互

### 原始计划（保留参考）
