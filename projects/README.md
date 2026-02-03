# ClueBoard 展示页

一个展示 AI 编程学习成果的展示页网站，旨在展示从点子到产品的完整开发过程。

**核心定位**：个人作品展示 + 学习复盘 + 项目路演

**主要模块**：
- **项目路演**：展示痛点场景、MVP 产品、竞品对比
- **学习复盘**：分享 AI 编程心得、收获、学习路径

---

## 快速开始

### 启动开发服务器

```bash
coze dev
```

启动后，在浏览器中打开 [http://localhost:5000](http://localhost:5000) 查看应用。

开发服务器支持热更新，修改代码后页面会自动刷新。

### 构建生产版本

```bash
coze build
```

### 启动生产服务器

```bash
coze start
```

---

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 16.1.1 | React 框架（App Router） |
| React | 19.2.3 | UI 框架 |
| TypeScript | 5.9.3 | 类型安全 |
| shadcn/ui | - | UI 组件库（基于 Radix UI） |
| Tailwind CSS | 4.1.18 | 样式框架 |
| Framer Motion | 12.30.0 | 动画库 |
| pnpm | - | 包管理器 |

---

## 项目结构

```
src/
├── app/                          # Next.js App Router 目录
│   ├── layout.tsx               # 根布局组件
│   ├── page.tsx                 # 首页
│   ├── globals.css              # 全局样式（包含 shadcn 主题变量）
│   ├── robots.ts                # SEO 配置
│   └── favicon.ico              # 网站图标
├── components/                  # React 组件目录
│   ├── layout/                  # 布局组件（2个）
│   │   ├── NavigationBar.tsx    # 左侧导航栏
│   │   └── Footer.tsx           # 底部信息栏
│   ├── sections/                # 页面区块组件（7个）
│   │   ├── HeroSection.tsx      # 首屏区域
│   │   ├── PainPointsSection.tsx  # 痛点模块
│   │   ├── MVPDemoSection.tsx     # MVP 演示
│   │   ├── CompetitorComparisonSection.tsx  # 竞品对比
│   │   ├── LearningJourneySection.tsx      # 学习复盘
│   │   ├── TechStackRoadmapSection.tsx     # 技术栈路线图
│   │   └── CallToActionSection.tsx        # 行动召唤
│   ├── ui/                      # UI 组件（55个）
│   │   ├── NoteCard.tsx         # 虚拟便签（自定义）
│   │   ├── InfoCard.tsx         # 信息卡片（自定义）
│   │   └── [shadcn/ui组件]      # 53 个 shadcn/ui 组件
│   └── hooks/                   # 自定义 Hooks
│       └── use-mobile.ts        # 移动端检测
├── lib/                         # 工具函数库
│   └── utils.ts                # cn() 等工具函数
├── data/                        # 内容数据（预留）
└── types/                       # 类型定义（预留）

context/                         # 上下文管理目录
├── _global.md                   # 全局摘要（每次任务必载）
├── DOCUMENT_INDEX.md            # 文档索引（30个文档）
├── routes.json                  # 路由映射表（关键词匹配）
├── wireframes/                  # 设计文档
│   └── project-layout-wireframe.md  # 项目布局线框图
├── arch/                        # 架构文档
│   ├── project-structure.md     # 项目结构
│   └── tech-stack.md            # 技术栈说明
├── modules/                     # 模块文档
│   ├── layout/                  # 布局组件文档
│   ├── sections/                # 页面区块文档
│   └── ui/                      # UI 组件文档（8个）
│       ├── note-card.md         # 虚拟便签
│       ├── info-card.md         # 信息卡片
│       ├── shadcn-basic-components.md           # 基础组件（11个）
│       ├── shadcn-form-components.md            # 表单组件（10个）
│       ├── shadcn-data-display-components.md    # 数据展示（9个）
│       ├── shadcn-feedback-navigation-components.md  # 反馈导航（8个）
│       ├── shadcn-dialog-checkbox-components.md       # 对话复选（8个）
│       └── shadcn-additional-components.md           # 补充组件（7个）
├── styles/                      # 样式文档
├── utils/                       # 工具文档
├── types/                       # 类型文档
├── hooks/                       # Hook 文档
└── PLANS/                       # 计划文档
    ├── feature-enhancements.md  # 功能增强计划
    └── optimization-tasks.md    # 优化任务清单

history/                         # 对话历史记录
├── 0203/                        # 早期历史
├── task-phase-5-shadcn-dialog-checkbox-components.md  # 最新任务

public/                          # 静态资源
├── plans/                       # 计划文档
│   ├── shadcn-ui-components-documentation-plan.md  # 组件文档计划
│   └── 上下文管理建设计划.md    # 上下文建设计划
└── [SVG图标]                    # 资源文件
```

---

## 核心功能

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

## 核心开发规范

### 1. 组件开发

**优先使用 shadcn/ui 基础组件**

本项目已预装 53 个 shadcn/ui 组件，位于 `src/components/ui/` 目录。

```tsx
// ✅ 推荐：使用 shadcn 基础组件
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function MyComponent() {
  return (
    <Card>
      <CardHeader>标题</CardHeader>
      <CardContent>
        <Input placeholder="输入内容" />
        <Button>提交</Button>
      </CardContent>
    </Card>
  );
}
```

**可用的 shadcn 组件清单（53个）**

**基础组件（11个）**
- Button, Input, Label, Badge, Avatar, Separator, ScrollArea, Sheet, Tabs, Popover, Tooltip

**表单组件（10个）**
- Form, Select, Checkbox, RadioGroup, Switch, Slider, Date, Calendar, Command, Combobox

**数据展示（9个）**
- Table, Card, Alert, Dialog, Drawer, DropdownMenu, Menubar, ContextMenu, NavigationMenu, Breadcrumb, Pagination, Progress, Skeleton, Chart

**反馈与导航（8个）**
- Toast, AlertDialog, Sonner, HoverCard, ScrollArea, Separator, Tabs, Sheet, Breadcrumb

**对话与复选（8个）**
- Accordion, Collapsible, Toggle, ToggleGroup, Resizable, Carousel, Sonner, InputOTP

**补充组件（7个）**
- Empty, Kbd, Spinner, Sidebar, AspectRatio, Field, Item, ButtonGroup

详见 `context/modules/ui/` 目录下的详细文档。

### 2. 自定义组件

本项目包含 2 个自定义核心组件：

**NoteCard（虚拟便签）**
- 三种状态：未开始（灰色）、进行中（黄色）、已完成（绿色）
- 支持状态切换交互
- 带有动画效果

**InfoCard（信息卡片）**
- 三种变体：蓝色、黄色、绿色
- 支持进度显示
- 响应式布局

### 3. 路由开发

Next.js 使用文件系统路由，在 `src/app/` 目录下创建文件夹即可添加路由：

```bash
# 创建新路由 /about
src/app/about/page.tsx

# 创建动态路由 /posts/[id]
src/app/posts/[id]/page.tsx

# 创建 API 路由
src/app/api/users/route.ts
```

**页面组件示例**

```tsx
// src/app/about/page.tsx
import { Button } from '@/components/ui/button';

export const metadata = {
  title: '关于我们',
  description: '关于页面描述',
};

export default function AboutPage() {
  return (
    <div>
      <h1>关于我们</h1>
      <Button>了解更多</Button>
    </div>
  );
}
```

### 4. 依赖管理

**必须使用 pnpm 管理依赖**

```bash
# ✅ 安装依赖
pnpm install

# ✅ 添加新依赖
pnpm add package-name

# ✅ 添加开发依赖
pnpm add -D package-name

# ❌ 禁止使用 npm 或 yarn
# npm install  # 错误！
# yarn add     # 错误！
```

项目已配置 `preinstall` 脚本，使用其他包管理器会报错。

### 5. 样式开发

**使用 Tailwind CSS v4**

本项目使用 Tailwind CSS v4 进行样式开发，并已配置 shadcn 主题变量。

```tsx
// 使用 Tailwind 类名
<div className="flex items-center gap-4 p-4 rounded-lg bg-background">
  <Button className="bg-primary text-primary-foreground">
    主要按钮
  </Button>
</div>

// 使用 cn() 工具函数合并类名
import { cn } from '@/lib/utils';

<div className={cn(
  "base-class",
  condition && "conditional-class",
  className
)}>
  内容
</div>
```

### 6. 动画开发

**使用 Framer Motion**

本项目使用 Framer Motion 实现流畅的动画效果。

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  内容
</motion.div>
```

---

## 文档体系

### 核心文档
- ⭐ `context/_global.md` - 全局摘要（每次任务必载）
- ⭐ `context/DOCUMENT_INDEX.md` - 文档索引（28个文档）
- 🗂️ `context/routes.json` - 路由映射表（关键词匹配）

### 组件文档
- `context/modules/ui/shadcn-basic-components.md` - 基础组件（11个）
- `context/modules/ui/shadcn-form-components.md` - 表单组件（10个）
- `context/modules/ui/shadcn-data-display-components.md` - 数据展示（17个）
- `context/modules/ui/shadcn-feedback-navigation-components.md` - 反馈导航（10个）
- `context/modules/ui/shadcn-dialog-checkbox-components.md` - 对话复选（12个）

### 模块文档
- `context/modules/layout/navigation-bar.md` - 导航栏组件
- `context/modules/ui/note-card.md` - 虚拟便签组件
- `context/modules/sections/hero-section.md` - 首屏区域
- `context/modules/sections/pain-points-section.md` - 痛点模块
- 以及其他页面区块文档...

### 架构文档
- `context/arch/project-structure.md` - 项目结构
- `context/arch/tech-stack.md` - 技术栈说明

### 计划文档
- `context/PLANS/feature-enhancements.md` - 功能增强计划
- `context/PLANS/optimization-tasks.md` - 优化任务清单

---

## 快速导航

### 按功能查找
| 功能 | 文档路径 |
|------|----------|
| 导航系统 | `context/modules/layout/navigation-bar.md` |
| 便签交互 | `context/modules/ui/note-card.md` |
| 首屏设计 | `context/modules/sections/hero-section.md` |
| 痛点展示 | `context/modules/sections/pain-points-section.md` |
| MVP演示 | `context/modules/sections/mvp-demo-section.md` |
| 竞品对比 | `context/modules/sections/competitor-comparison.md` |
| 学习复盘 | `context/modules/sections/learning-journey.md` |
| 技术路线 | `context/modules/sections/tech-stack-roadmap.md` |
| 行动召唤 | `context/modules/sections/call-to-action.md` |
| 主题样式 | `context/styles/theme-configuration.md` |

### 按组件查找
| 组件 | 文档路径 |
|------|----------|
| NavigationBar | `context/modules/layout/navigation-bar.md` |
| Footer | `context/modules/layout/footer.md` |
| NoteCard | `context/modules/ui/note-card.md` |
| InfoCard | `context/modules/ui/info-card.md` |
| shadcn/ui 基础组件 | `context/modules/ui/shadcn-basic-components.md` |
| shadcn/ui 表单组件 | `context/modules/ui/shadcn-form-components.md` |
| shadcn/ui 数据展示组件 | `context/modules/ui/shadcn-data-display-components.md` |
| shadcn/ui 反馈与导航组件 | `context/modules/ui/shadcn-feedback-navigation-components.md` |
| shadcn/ui 对话与复选组件 | `context/modules/ui/shadcn-dialog-checkbox-components.md` |
| shadcn/ui 补充组件 | `context/modules/ui/shadcn-additional-components.md` |

---

## 统计信息

- **文档总数**：29 个
- **组件总数**：55 个
  - shadcn/ui 组件：53 个
  - 自定义组件：2 个（NoteCard、InfoCard）
  - 页面区块：7 个
  - 布局组件：2 个
- **自定义 Hooks**：1 个（use-mobile）

### shadcn/ui 组件分布（53个）
- 基础组件：11 个
- 表单组件：10 个
- 数据展示：9 个
- 反馈导航：8 个
- 对话复选：8 个
- 补充组件：7 个（Empty, Kbd, Spinner, Sidebar, AspectRatio, Field, Item, ButtonGroup）

---

## 开发注意事项

1. **类型安全**：所有组件必须定义 Props 接口
2. **响应式**：所有组件必须支持移动端
3. **动画性能**：使用 Framer Motion 而非 CSS 动画
4. **代码分割**：大型组件考虑懒加载
5. **包管理器**：必须使用 pnpm，禁止使用 npm 或 yarn
6. **组件优先级**：优先使用 shadcn/ui 组件，其次使用自定义组件

---

## 项目状态

- **开发状态**：✅ 已完成
- **测试状态**：✅ 通过
- **部署状态**：✅ 运行中（端口 5000）
- **文档状态**：✅ 阶段一至四完成（29个文档）
- **组件状态**：✅ 55 个组件（53 个 shadcn/ui + 2 自定义 + 9 页面区块）
- **完成度**：100%

---

## 许可证

MIT

---

**最后更新**：2026-02-03
**文档版本**：v2.1
**维护者**：Vibe Coding 前端专家
