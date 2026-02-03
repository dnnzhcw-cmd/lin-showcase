# ClueBoard 展示页 - 全局摘要 ⭐

## 📋 项目概述

ClueBoard 是一个展示 AI 编程学习成果的展示页网站，旨在展示从点子到产品的完整开发过程。

**核心定位**：个人作品展示 + 学习复盘 + 项目路演

**主要模块**：
1. **项目路演**：展示痛点场景、MVP产品、竞品对比
2. **学习复盘**：分享AI编程心得、收获、学习路径

---

## 🎯 核心功能

### 项目路演模块
- ✅ 痛点场景展示（虚拟便签交互）
- ✅ MVP 产品演示（模拟界面）
- ✅ 竞品对比矩阵
- ✅ 从点子到产品的挖掘思路

### 学习复盘模块
- ✅ AI 编程心得与收获（三大洞察）
- ✅ 可视化学习路径（四步模型）
- ✅ 技术栈与未来路线图
- ✅ 作者实践总结

### 交互功能
- ✅ 虚拟便签状态切换（未开始/进行中/已完成）
- ✅ 锚点导航与平滑滚动
- ✅ 响应式布局（桌面/移动端）
- ✅ 丰富的动画效果

---

## 🛠️ 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 16.1.1 | React 框架（App Router） |
| React | 19.2.3 | UI 框架 |
| TypeScript | 5.9.3 | 类型安全 |
| shadcn/ui | - | UI 组件库 |
| Tailwind CSS | 4.1.18 | 样式框架 |
| Framer Motion | 12.30.0 | 动画库 |
| pnpm | - | 包管理器 |

---

## 🏗️ 架构规范

### 目录组织
```
src/
├── app/                          # Next.js App Router
│   ├── globals.css              # 全局样式（主题、动画）
│   ├── layout.tsx               # 根布局
│   ├── page.tsx                 # 首页
│   ├── robots.ts                # SEO配置
│   └── favicon.ico              # 网站图标
├── components/
│   ├── layout/                  # 布局组件（2个）
│   │   ├── NavigationBar.tsx    # 左侧导航栏
│   │   └── Footer.tsx           # 底部信息栏
│   ├── sections/                # 页面区块组件（7个）
│   │   ├── HeroSection.tsx      # 首屏区域
│   │   ├── PainPointsSection.tsx  # 痛点模块
│   │   ├── MVPDemoSection.tsx     # MVP演示
│   │   ├── CompetitorComparisonSection.tsx  # 竞品对比
│   │   ├── LearningJourneySection.tsx      # 学习复盘
│   │   ├── TechStackRoadmapSection.tsx     # 技术栈路线图
│   │   └── CallToActionSection.tsx        # 行动召唤
│   ├── ui/                      # UI组件（55个）
│   │   ├── NoteCard.tsx         # 虚拟便签（自定义）
│   │   ├── InfoCard.tsx         # 信息卡片（自定义）
│   │   └── [shadcn/ui组件]      # 53个 shadcn/ui 组件
│   └── hooks/                   # 自定义 Hooks（1个）
│       └── use-mobile.ts        # 移动端检测
├── lib/
│   └── utils.ts                 # 工具函数（cn、等）
├── data/                        # 内容数据（预留）
└── types/                       # 类型定义（预留）

context/                         # 上下文管理目录
├── _global.md                   # 全局摘要（本文档）
├── DOCUMENT_INDEX.md            # 文档索引
├── routes.json                  # 路由映射表
├── arch/                        # 架构文档
│   ├── project-structure.md     # 项目结构
│   └── tech-stack.md            # 技术栈
├── modules/                     # 模块文档
│   ├── layout/                  # 布局组件文档
│   ├── sections/                # 页面区块文档
│   └── ui/                      # UI组件文档
├── styles/                      # 样式文档
├── utils/                       # 工具文档
├── types/                       # 类型文档
├── hooks/                       # Hook文档
└── PLANS/                       # 计划文档
```

### 组件开发原则
1. **模块化**：每个组件独立文件，职责单一
2. **可复用**：通用组件放在 `components/ui/`
3. **类型安全**：使用 TypeScript 定义 Props 接口
4. **响应式**：所有组件支持移动端适配
5. **组件统计**：
   - 布局组件：2个（NavigationBar、Footer）
   - 页面区块：7个（Hero → CallToAction）
   - UI组件：55个（53个 shadcn/ui + 2个自定义）
   - Hooks：1个（use-mobile）

### 样式规范
1. **主题色系统**：
   - 优先级色：红（高优）、黄（中优）、绿（低优/已完成）
   - 便签色：背景、边框、阴影
   - 信息卡片：蓝、黄、绿边框

2. **响应式断点**：
   - 移动端：640px 以下
   - 平板：640px - 1024px
   - 桌面：1024px 以上

3. **动画规范**：
   - 进入动画：fade-in-up
   - 悬停效果：scale + translateY
   - 状态切换：缩放 + 颜色渐变

---

## 🎨 设计规范

### 视觉系统
- **字体**：Inter 无衬线字体
- **主色**：白色/浅灰色背景，深灰色文字
- **强调色**：红/黄/绿优先级色
- **留白**：充足的页面间距

### 交互规范
- **动画时长**：300-600ms
- **缓动函数**：easeInOut
- **悬停反馈**：轻微上浮（5px）
- **点击反馈**：缩放（0.95-0.98）

---

## 📚 重点文档列表

### 必载文档（每次任务加载）
- ⭐ `context/_global.md` - 本文档
- ⭐ `context/DOCUMENT_INDEX.md` - 文档索引
- 🗂️ `context/routes.json` - 路由映射表

### 设计文档
- ⭐ `context/wireframes/project-layout-wireframe.md` - 项目布局线框图

### 核心功能文档
- ⭐ `context/styles/theme-configuration.md` - 主题配置
- ⭐ `context/arch/project-structure.md` - 项目结构
- ⭐ `context/modules/layout/navigation-bar.md` - 导航栏
- ⭐ `context/modules/ui/note-card.md` - 虚拟便签
- ⭐ `context/modules/sections/hero-section.md` - 首屏
- ⭐ `context/modules/sections/pain-points-section.md` - 痛点模块

### 扩展功能文档
- `context/modules/sections/learning-journey.md` - 学习复盘
- `context/modules/sections/mvp-demo-section.md` - MVP演示
- `context/modules/sections/competitor-comparison.md` - 竞品对比
- `context/modules/sections/tech-stack-roadmap.md` - 技术栈路线图
- `context/modules/sections/call-to-action.md` - 行动召唤

### shadcn/ui 组件文档
- ⭐ `context/modules/ui/shadcn-basic-components.md` - shadcn/ui 基础组件（11个）
- ⭐ `context/modules/ui/shadcn-form-components.md` - shadcn/ui 表单组件（10个）
- ⭐ `context/modules/ui/shadcn-data-display-components.md` - shadcn/ui 数据展示组件（9个）
- ⭐ `context/modules/ui/shadcn-feedback-navigation-components.md` - shadcn/ui 反馈与导航组件（10个）
- ⭐ `context/modules/ui/shadcn-dialog-checkbox-components.md` - shadcn/ui 对话与复选组件（12个）
- ⭐ `context/modules/ui/shadcn-additional-components.md` - shadcn/ui 补充组件（额外发现的Sidebar）

### 工具与类型文档
- `context/utils/utility-functions.md` - cn 函数（类名合并）
- `context/types/component-props.md` - 组件 Props 类型定义

### 计划文档
- 📝 `context/PLANS/feature-enhancements.md` - 功能增强计划
- 📝 `context/PLANS/optimization-tasks.md` - 优化任务清单

---

## 🚀 快速导航

### 按功能查找
- **整体布局** → `context/wireframes/project-layout-wireframe.md`
- **导航相关** → `context/modules/layout/navigation-bar.md`
- **便签卡片** → `context/modules/ui/note-card.md`
- **首屏设计** → `context/modules/sections/hero-section.md`
- **痛点展示** → `context/modules/sections/pain-points-section.md`
- **主题样式** → `context/styles/theme-configuration.md`
- **项目结构** → `context/arch/project-structure.md`

### 按类型查找
- **布局组件** → `context/modules/layout/`
- **页面区块** → `context/modules/sections/`
- **UI组件** → `context/modules/ui/`
- **架构文档** → `context/arch/`
- **计划文档** → `context/PLANS/`

---

## 💡 使用指南

### 智能体上下文加载策略
1. **第一步**：加载 `_global.md`（本文档）
2. **第二步**：根据关键词匹配 `routes.json`
3. **第三步**：递归加载依赖文档

### 关键词快速映射
| 关键词 | 对应文档 |
|--------|----------|
| 导航、菜单、锚点 | `navigation-bar.md` |
| 底部、页脚、联系 | `footer.md` |
| 便签、卡片、状态 | `note-card.md` |
| 信息卡片、变体、进度 | `info-card.md` |
| 首屏、Hero、开场 | `hero-section.md` |
| 痛点、场景、洞察 | `pain-points-section.md` |
| 演示、MVP、功能 | `mvp-demo-section.md` |
| 对比、竞品、矩阵 | `competitor-comparison.md` |
| 学习、复盘、心得 | `learning-journey.md` |
| 技术、路线图、栈 | `tech-stack-roadmap.md` |
| 按钮、CTA、召唤 | `call-to-action.md` |
| 主题、颜色、样式 | `theme-configuration.md` |
| 工具、函数、cn | `utility-functions.md` |
| 类型、接口、Props | `component-props.md` |

---

## ⚠️ 重要提示

### 开发注意事项
1. **类型安全**：所有组件必须定义 Props 接口
2. **响应式**：所有组件必须支持移动端
3. **动画性能**：使用 Framer Motion 而非 CSS 动画
4. **代码分割**：大型组件考虑懒加载

### 上下文加载规范
1. **避免冗余**：仅加载任务直接相关的文档
2. **优先级控制**：优先加载 ⭐ 标识文档
3. **依赖补充**：自动补充依赖文档
4. **更新及时**：代码修改时同步更新文档

---

## 📈 项目状态

- **开发状态**：✅ 已完成
- **测试状态**：✅ 通过
- **部署状态**：✅ 运行中（端口5000）
- **文档状态**：✅ 阶段一至八完成（28个文档，全部完成）
- **组件总数**：✅ 55个（布局2 + 区块7 + UI 2 + shadcn/ui 53 + Hook 1）
- **文档总数**：✅ 28个文档（完成度 100%）

### 文档建设进度
- ✅ 阶段一（基础文档）：6/6 完成
- ✅ 阶段二（核心模块）：5/5 完成
- ✅ 阶段三（扩展模块）：4/4 完成
- ✅ 阶段四（补充文档）：5/6 完成（hooks/use-scroll-sync.md 不存在）
- ✅ 阶段五（计划文档）：2/2 完成
- ✅ 阶段六（验证与优化）：自动完成（已验证索引文件）
- ✅ 阶段七（shadcn/ui 基础组件）：1/1 完成（11个组件）
- ✅ 阶段八（shadcn/ui 表单组件）：1/1 完成（10个组件）
- ✅ 阶段九（shadcn/ui 数据展示组件）：1/1 完成（9个组件）
- ✅ 阶段十（shadcn/ui 反馈与导航组件）：1/1 完成（10个组件）
- ✅ 阶段十一（shadcn/ui 对话与复选组件）：1/1 完成（12个组件）

---

**最后更新**：2026-02-03
**文档版本**：v1.8
**维护者**：Vibe Coding 前端专家

---

> **核心原则**：以 `_global.md` 为起点，通过 `routes.json` 精准定位文档，确保上下文信息的精准性和最小化。
