# 任务阶段六：绘制项目页面布局线框图

## 任务目标
绘制 ClueBoard 项目页面的整体布局和组件 UI 设置的线框图，为开发提供清晰的视觉参考。

## 任务时间
2026-02-04

---

## 执行步骤

### 1. 分析现有页面结构
- 读取 `src/app/page.tsx` 了解页面整体布局
- 读取 `src/components/layout/NavigationBar.tsx` 了解导航结构
- 读取各个 section 组件了解模块布局

### 2. 创建线框图文档
**文件路径**: `context/wireframes/project-layout-wireframe.md`

**文档内容**:
- 整体页面布局（桌面端和移动端）
- 组件层次结构树
- 核心 UI 组件说明
- 动画交互设计
- 响应式断点
- 配色方案
- 组件清单
- 导航流程
- 依赖关系
- 开发重点

### 3. 更新文档索引
**更新文件**:
- `context/DOCUMENT_INDEX.md`
  - 添加"设计文档"分类
  - 添加线框图文档索引
  - 更新文档统计（29个 → 30个）

### 4. 更新全局摘要
**更新文件**: `context/_global.md`
- 添加"设计文档"分类
- 添加线框图文档引用
- 更新组件统计（55个组件）
- 更新快速导航

### 5. 更新路由映射
**更新文件**: `context/routes.json`
- 添加线框图相关关键词映射
- 更新版本号（1.9 → 1.10）
- 更新最后更新日期

### 6. 更新项目README
**更新文件**: `README.md`
- 更新文档索引统计（29个 → 30个）
- 更新组件数量（55个）

---

## 交付成果

### 新建文件
1. `context/wireframes/project-layout-wireframe.md` - 项目布局线框图

### 更新文件
1. `context/DOCUMENT_INDEX.md` - 文档索引
2. `context/_global.md` - 全局摘要
3. `context/routes.json` - 路由映射表
4. `README.md` - 项目说明

---

## 线框图内容概览

### 1. 整体页面布局
- 桌面端布局（lg+）
  - 固定左侧导航栏
  - 7个主要模块垂直排列
  - 底部Footer

- 移动端布局（sm-md）
  - 顶部汉堡菜单
  - 单列垂直布局
  - 浮动返回顶部按钮

### 2. 7个核心模块
1. **HeroSection** - 首屏区域
2. **PainPointsSection** - 痛点场景
3. **MVPDemoSection** - MVP演示
4. **CompetitorComparisonSection** - 竞品对比
5. **LearningJourneySection** - 学习复盘
6. **TechStackRoadmapSection** - 技术栈路线图
7. **CallToActionSection** - 行动召唤

### 3. 组件层次结构
- 8个核心组件
- 5个UI子组件
- 2个布局组件

### 4. 响应式断点
- mobile: < 640px
- tablet: 640px - 1024px
- desktop: 1024px - 1280px
- large-desktop: > 1280px

### 5. 配色方案
- 主色调：深灰/中灰/红/黄/绿
- 背景色：白色/浅灰/深灰渐变
- 交互反馈：悬停/点击背景

---

## 文档统计更新

### 总文档数
- 之前：29个
- 现在：30个
- 新增：1个（线框图）

### 组件统计
- 布局组件：2个
- 页面区块：7个
- UI组件：55个（53个 shadcn/ui + 2个自定义）
- Hooks：1个

---

## 验收标准
- ✅ 线框图文档包含完整的布局说明
- ✅ 组件层次结构清晰
- ✅ 响应式设计说明完整
- ✅ 文档索引已更新
- ✅ 路由映射已更新
- ✅ 全局摘要已更新
- ✅ README已更新

---

## 后续建议
1. 根据线框图优化实际代码实现
2. 补充更多交互细节说明
3. 添加组件间数据流转图
4. 补充性能优化建议
