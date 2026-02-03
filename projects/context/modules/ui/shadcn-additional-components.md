# shadcn/ui 补充组件文档

## 文档信息
- **分类**: 补充组件（Additional Components）
- **组件数量**: 1 个（额外发现的组件）
- **文件路径**: `src/components/ui/`
- **创建时间**: 2025-06-18
- **最后更新**: 2025-06-18
- **技术栈**: React 19 + Radix UI + Tailwind CSS 4

---

## 组件概览

本组组件是 shadcn/ui 组件库中额外发现的补充组件。这些组件不在最初的文档计划中，但项目中确实存在并且可以使用。

### 组件列表

| 组件名称 | 核心功能 | 复杂度 | 推荐场景 |
|---------|---------|--------|---------|
| Sidebar | 侧边栏容器 | ⭐⭐⭐⭐⭐ | 侧边导航、面板管理 |

### 备注
- **Empty, Kbd, Spinner** 这 3 个组件已在 [shadcn-basic-components.md](./shadcn-basic-components.md) 中详细记录
- 本文档仅记录额外发现的 Sidebar 组件

---

## 组件详解

### 1. Sidebar（侧边栏组件）

**文件**: `src/components/ui/sidebar.tsx`

**组件导出**（25个）:
- `SidebarProvider` - 侧边栏上下文提供者
- `Sidebar` - 侧边栏容器
- `SidebarTrigger` - 触发按钮
- `SidebarRail` - 拖拽边框
- `SidebarInset` - 主内容区域
- `SidebarHeader` - 侧边栏头部
- `SidebarFooter` - 侧边栏底部
- `SidebarSeparator` - 分隔符
- `SidebarContent` - 内容区域
- `SidebarGroup` - 分组容器
- `SidebarGroupLabel` - 分组标签
- `SidebarGroupAction` - 分组操作按钮
- `SidebarGroupContent` - 分组内容
- `SidebarMenu` - 菜单列表
- `SidebarMenuItem` - 菜单项
- `SidebarMenuButton` - 菜单按钮
- `SidebarMenuAction` - 菜单操作
- `SidebarMenuBadge` - 菜单徽章
- `SidebarMenuSkeleton` - 菜单骨架屏
- `SidebarMenuSub` - 子菜单
- `SidebarMenuSubItem` - 子菜单项
- `SidebarMenuSubButton` - 子菜单按钮
- `SidebarInput` - 输入框
- `useSidebar` - Hook

**核心特性**:
- 三种折叠模式（offcanvas / icon / none）
- 三种布局变体（sidebar / floating / inset）
- 响应式设计（移动端使用 Sheet）
- 键盘快捷键（⌘+B / Ctrl+B）
- 状态持久化（Cookie）
- 支持左侧/右侧
- 丰富的子组件体系

**类型定义**:
```typescript
type SidebarContextProps = {
  state: 'expanded' | 'collapsed'
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}
```

**使用示例**:
```typescript
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

<SidebarProvider>
  <Sidebar collapsible="icon">
    <SidebarHeader>
      <div className="font-bold">Logo</div>
    </SidebarHeader>
    <SidebarContent>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <HomeIcon />
            <span>首页</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <SettingsIcon />
            <span>设置</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContent>
    <SidebarFooter>
      <div className="text-xs text-muted-foreground">© 2025</div>
    </SidebarFooter>
  </Sidebar>
  <SidebarInset>
    <main>主内容区域</main>
  </SidebarInset>
</SidebarProvider>
```

**API**:

**SidebarProvider**:
| 属性 | 类型 | 默认值 | 说明 |
|-----|------|--------|------|
| defaultOpen | boolean | true | 默认展开状态 |
| open | boolean | - | 受控展开状态 |
| onOpenChange | (open: boolean) => void | - | 状态变化回调 |

**Sidebar**:
| 属性 | 类型 | 默认值 | 说明 |
|-----|------|--------|------|
| side | "left" \| "right" | "left" | 侧边栏位置 |
| variant | "sidebar" \| "floating" \| "inset" | "sidebar" | 布局变体 |
| collapsible | "offcanvas" \| "icon" \| "none" | "offcanvas" | 折叠模式 |

**SidebarMenuButton**:
| 属性 | 类型 | 默认值 | 说明 |
|-----|------|--------|------|
| isActive | boolean | false | 是否激活 |
| variant | "default" \| "outline" | "default" | 样式变体 |
| size | "default" \| "sm" \| "lg" | "default" | 尺寸 |
| tooltip | string \| TooltipContent | - | Tooltip 提示 |

**注意事项**:
- 必须使用 `SidebarProvider` 包裹整个应用
- `SidebarInset` 用于包裹主内容区域
- 移动端会自动转换为 Sheet 弹出层
- 折叠状态下会显示 Tooltip
- 使用 `useSidebar()` Hook 访问上下文

**折叠模式说明**:
- **offcanvas**: 折叠时完全隐藏，点击触发按钮显示
- **icon**: 折缩时只显示图标，不显示文字
- **none**: 不可折叠

**布局变体说明**:
- **sidebar**: 标准侧边栏，占据完整宽度
- **floating**: 浮动侧边栏，有圆角和阴影
- **inset**: 嵌入式侧边栏，有边距和圆角

**键盘快捷键**:
- `⌘+B` / `Ctrl+B`: 切换侧边栏展开/折叠

**尺寸常量**:
- `SIDEBAR_WIDTH`: 16rem (256px)
- `SIDEBAR_WIDTH_MOBILE`: 18rem (288px)
- `SIDEBAR_WIDTH_ICON`: 3rem (48px)

**Cookie 持久化**:
- Cookie 名称: `sidebar_state`
- 有效期: 7 天
- 路径: `/`

---

## 依赖说明

本组组件的第三方依赖：

| 依赖 | 组件 | 用途 |
|-----|------|------|
| lucide-react | Sidebar | PanelLeftIcon 等图标 |
| @radix-ui/react-slot | Sidebar | 多功能插槽 |
| class-variance-authority | Sidebar | 变体管理 |

**其他组件的依赖**: 请参考 [shadcn-basic-components.md](./shadcn-basic-components.md)

---

## 使用建议

### 常见组合模式

**1. 完整侧边栏布局**
```typescript
<SidebarProvider defaultOpen>
  <Sidebar collapsible="icon">
    <SidebarHeader>
      <SidebarMenuButton size="lg">
        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
          <GlobeIcon />
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">Logo</span>
          <span className="truncate text-xs">副标题</span>
        </div>
      </SidebarMenuButton>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>应用</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/">
                <HomeIcon />
                <span>首页</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <UserIcon />
            <span>用户</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  </Sidebar>
  <SidebarInset>
    <header>
      <SidebarTrigger />
      {/* 头部内容 */}
    </header>
    <main>
      {/* 主内容 */}
    </main>
  </SidebarInset>
</SidebarProvider>
```

### 性能优化建议

1. **Sidebar**: 大量菜单项时使用虚拟滚动
2. **其他组件**: 请参考 [shadcn-basic-components.md](./shadcn-basic-components.md)

### 无障碍建议

- **Sidebar**: 支持键盘导航（Tab, Arrow keys）
- **SidebarMenuButton**: 支持 Tooltip 和快捷键
- **其他组件**: 请参考各自的文档

---

## 相关文档

- [基础组件文档](./shadcn-basic-components.md) - Button, Input, Empty, Kbd, Spinner, Tooltip 等
- [反馈与导航文档](./shadcn-feedback-navigation-components.md) - Dialog, Toast, Tabs 等
- [布局组件文档](../layout/navigation-bar.md) - NavigationBar, Footer 等

---

## 更新日志

**2025-06-18**:
- 创建文档，记录额外发现的 Sidebar 组件
- 添加 Sidebar 组件的完整 API 说明和使用示例
- 提供常见组合模式和性能优化建议
- 注意：Empty, Kbd, Spinner 组件已在 [shadcn-basic-components.md](./shadcn-basic-components.md) 中详细记录

---

## 贡献者

- ClueBoard 开发团队

---

**文档版本**: 1.0.0
**最后更新**: 2025-06-18
