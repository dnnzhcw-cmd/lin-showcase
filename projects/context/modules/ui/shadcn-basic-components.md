# shadcn/ui 基础 UI 组件文档

## 版本信息
- **文档版本**: v1.0
- **创建日期**: 2025-02-03
- **shadcn/ui 版本**: latest
- **状态**: ✅ 已完成

## 概述

本文档介绍 shadcn/ui 中的 11 个基础 UI 组件，这些组件是项目中使用频率最高、最基础的 UI 元素。

### 组件列表
1. **Button** - 按钮
2. **Badge** - 徽章
3. **Avatar** - 头像
4. **Skeleton** - 骨架屏
5. **Spinner** - 加载指示器
6. **Separator** - 分隔线
7. **AspectRatio** - 宽高比
8. **Empty** - 空状态
9. **Kbd** - 键盘快捷键
10. **Tooltip** - 工具提示
11. **Popover** - 弹出框

### 使用场景
- 这些组件用于构建基础的用户界面元素
- 适用于各种 Web 应用场景
- 提供统一的视觉风格和交互体验

---

## 组件详解

### 1. Button（按钮）

#### 功能说明
Button 组件是用于触发操作或导航的基本交互元素，支持多种变体和尺寸。

#### Props 接口
```typescript
interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg';
  asChild?: boolean;
}
```

#### 使用示例
```tsx
// 基础用法
<Button>点击我</Button>

// 带变体和尺寸
<Button variant="destructive" size="lg">
  删除
</Button>

// 图标按钮
<Button variant="outline" size="icon">
  <SettingsIcon />
</Button>

// 作为链接
<Button asChild variant="link">
  <a href="/">首页</a>
</Button>
```

#### 变体和样式
- **Variants**:
  - `default`: 默认样式，主要按钮
  - `destructive`: 危险操作，红色
  - `outline`: 边框样式
  - `secondary`: 次要按钮
  - `ghost`: 幽灵样式，仅悬停时显示背景
  - `link`: 链接样式，带下划线

- **Sizes**:
  - `default`: 默认高度 h-9
  - `sm`: 小号 h-8
  - `lg`: 大号 h-10
  - `icon`: 正方形 icon-size-9
  - `icon-sm`: 小正方形 icon-size-8
  - `icon-lg`: 大正方形 icon-size-10

#### 可访问性
- 支持键盘导航（Enter 和 Space 激活）
- 自动添加 `aria-disabled` 属性
- 支持屏幕阅读器

---

### 2. Badge（徽章）

#### 功能说明
Badge 组件用于显示状态、标签或分类信息，通常以圆角小标签的形式展示。

#### Props 接口
```typescript
interface BadgeProps extends React.ComponentProps<'span'> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  asChild?: boolean;
}
```

#### 使用示例
```tsx
// 基础用法
<Badge>默认</Badge>

// 带变体
<Badge variant="secondary">次要</Badge>
<Badge variant="destructive">错误</Badge>
<Badge variant="outline">边框</Badge>

// 带图标
<Badge>
  <CheckIcon className="size-3" />
  已完成
</Badge>
```

#### 变体和样式
- **Variants**:
  - `default`: 主色调背景
  - `secondary`: 次要色调背景
  - `destructive`: 危险/错误状态
  - `outline`: 边框样式

#### 可访问性
- 语义化的 `span` 元素
- 自动添加焦点样式
- 支持键盘导航

---

### 3. Avatar（头像）

#### 功能说明
Avatar 组件用于显示用户头像、品牌图标或标识符，支持图片和 fallback 文本。

#### Props 接口
```typescript
// Avatar 容器
interface AvatarProps extends React.ComponentProps<typeof AvatarPrimitive.Root> {}

// Avatar 图片
interface AvatarImageProps extends React.ComponentProps<typeof AvatarPrimitive.Image> {}

// Avatar Fallback
interface AvatarFallbackProps extends React.ComponentProps<typeof AvatarPrimitive.Fallback> {}
```

#### 使用示例
```tsx
// 基础用法
<Avatar>
  <AvatarImage src="/avatar.png" alt="用户头像" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>

// 仅 Fallback
<Avatar>
  <AvatarFallback>用户</AvatarFallback>
</Avatar>
```

#### 子组件
- **Avatar**: 容器组件
- **AvatarImage**: 图片组件
- **AvatarFallback**: 图片加载失败时显示的 fallback

#### 可访问性
- 自动添加 `alt` 文本
- Fallback 提供可读文本
- 支持屏幕阅读器

---

### 4. Skeleton（骨架屏）

#### 功能说明
Skeleton 组件用于在内容加载时显示占位符，提升用户体验。

#### Props 接口
```typescript
interface SkeletonProps extends React.ComponentProps<'div'> {}
```

#### 使用示例
```tsx
// 基础用法
<Skeleton className="h-4 w-[250px]" />

// 圆形骨架
<Skeleton className="h-12 w-12 rounded-full" />

// 卡片骨架
<div className="space-y-2">
  <Skeleton className="h-4 w-[250px]" />
  <Skeleton className="h-4 w-[200px]" />
</div>
```

#### 样式特点
- 自动添加脉冲动画（animate-pulse）
- 默认使用 `bg-accent` 背景色
- 可自定义尺寸和圆角

---

### 5. Spinner（加载指示器）

#### 功能说明
Spinner 组件用于显示加载状态，通常用于异步操作的反馈。

#### Props 接口
```typescript
interface SpinnerProps extends React.ComponentProps<'svg'> {}
```

#### 使用示例
```tsx
// 基础用法
<Spinner />

// 自定义大小
<Spinner className="size-8" />

// 在按钮中使用
<Button disabled>
  <Spinner className="mr-2" />
  加载中...
</Button>
```

#### 样式特点
- 基于 Lucide React 的 `Loader2Icon`
- 自动旋转动画（animate-spin）
- 默认大小为 `size-4`
- 可自定义大小和颜色

---

### 6. Separator（分隔线）

#### 功能说明
Separator 组件用于在视觉上分隔内容区域，支持水平和垂直方向。

#### Props 接口
```typescript
interface SeparatorProps extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}
```

#### 使用示例
```tsx
// 水平分隔线（默认）
<Separator />

// 垂直分隔线
<Separator orientation="vertical" className="h-20" />

// 自定义样式
<Separator className="my-4" />
```

#### 方向和样式
- **Orientations**:
  - `horizontal`: 水平分隔线（默认）
  - `vertical`: 垂直分隔线

- **Decorative**:
  - `true`: 纯装饰性（默认）
  - `false`: 语义化分隔符

---

### 7. AspectRatio（宽高比）

#### 功能说明
AspectRatio 组件用于保持元素的固定宽高比，常用于图片和视频容器。

#### Props 接口
```typescript
interface AspectRatioProps extends React.ComponentProps<typeof AspectRatioPrimitive.Root> {
  ratio?: number;
}
```

#### 使用示例
```tsx
// 16:9 宽高比
<AspectRatio ratio={16 / 9}>
  <img src="/image.jpg" alt="示例图片" />
</AspectRatio>

// 4:3 宽高比
<AspectRatio ratio={4 / 3}>
  <div>内容</div>
</AspectRatio>
```

#### 常用比例
- `16/9`: 高清视频
- `4/3`: 标准视频
- `1/1`: 正方形
- `3/2`: 传统照片

---

### 8. Empty（空状态）

#### 功能说明
Empty 组件用于展示空状态页面，包含标题、描述和操作按钮。

#### Props 接口
```typescript
// Empty 容器
interface EmptyProps extends React.ComponentProps<'div'> {}

// Empty 头部
interface EmptyHeaderProps extends React.ComponentProps<'div'> {}

// Empty 媒体
interface EmptyMediaProps extends React.ComponentProps<'div'> & VariantProps<typeof emptyMediaVariants> {}

// Empty 标题
interface EmptyTitleProps extends React.ComponentProps<'div'> {}

// Empty 描述
interface EmptyDescriptionProps extends React.ComponentProps<'p'> {}

// Empty 内容
interface EmptyContentProps extends React.ComponentProps<'div'> {}
```

#### 使用示例
```tsx
// 基础用法
<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <InboxIcon />
    </EmptyMedia>
    <EmptyTitle>暂无数据</EmptyTitle>
    <EmptyDescription>
      这里还没有内容，点击按钮添加新内容
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>添加内容</Button>
  </EmptyContent>
</Empty>
```

#### 子组件
- **Empty**: 容器组件
- **EmptyHeader**: 头部区域
- **EmptyMedia**: 媒体/图标
- **EmptyTitle**: 标题
- **EmptyDescription**: 描述文本
- **EmptyContent**: 内容/操作区域

---

### 9. Kbd（键盘快捷键）

#### 功能说明
Kbd 组件用于展示键盘快捷键，帮助用户了解可用的快捷操作。

#### Props 接口
```typescript
// 单个按键
interface KbdProps extends React.ComponentProps<'kbd'> {}

// 按键组
interface KbdGroupProps extends React.ComponentProps<'div'> {}
```

#### 使用示例
```tsx
// 单个按键
<Kbd>Ctrl</Kbd>

// 按键组合
<KbdGroup>
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>

// 在提示中使用
<p>
  按 <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd> 保存
</p>
```

#### 子组件
- **Kbd**: 单个按键
- **KbdGroup**: 按键组合容器

#### 样式特点
- 小号字体（text-xs）
- 圆角边框
- 自动适应 Tooltip 背景

---

### 10. Tooltip（工具提示）

#### 功能说明
Tooltip 组件用于在鼠标悬停时显示额外的提示信息。

#### Props 接口
```typescript
// Tooltip 容器
interface TooltipProps extends React.ComponentProps<typeof TooltipPrimitive.Root> {}

// Tooltip 触发器
interface TooltipTriggerProps extends React.ComponentProps<typeof TooltipPrimitive.Trigger> {}

// Tooltip 内容
interface TooltipContentProps extends React.ComponentProps<typeof TooltipPrimitive.Content> {
  sideOffset?: number;
}

// Tooltip Provider
interface TooltipProviderProps extends React.ComponentProps<typeof TooltipPrimitive.Provider> {
  delayDuration?: number;
}
```

#### 使用示例
```tsx
// 基础用法
<Tooltip>
  <TooltipTrigger>悬停查看提示</TooltipTrigger>
  <TooltipContent>
    <p>这是提示信息</p>
  </TooltipContent>
</Tooltip>

// 带延迟
<Tooltip>
  <TooltipProvider delayDuration={500}>
    <TooltipTrigger>延迟提示</TooltipTrigger>
    <TooltipContent>500ms 后显示</TooltipContent>
  </TooltipProvider>
</Tooltip>
```

#### 子组件
- **Tooltip**: 容器组件
- **TooltipTrigger**: 触发元素
- **TooltipContent**: 提示内容
- **TooltipProvider**: 全局提供者

#### 可访问性
- 键盘导航支持（Focus + Hover）
- ARIA 属性自动添加
- 屏幕阅读器支持

---

### 11. Popover（弹出框）

#### 功能说明
Popover 组件用于显示额外的内容，可以包含表单、列表或其他交互元素。

#### Props 接口
```typescript
// Popover 容器
interface PopoverProps extends React.ComponentProps<typeof PopoverPrimitive.Root> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

// Popover 触发器
interface PopoverTriggerProps extends React.ComponentProps<typeof PopoverPrimitive.Trigger> {}

// Popover 内容
interface PopoverContentProps extends React.ComponentProps<typeof PopoverPrimitive.Content> {
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
}

// Popover 锚点
interface PopoverAnchorProps extends React.ComponentProps<typeof PopoverPrimitive.Anchor> {}
```

#### 使用示例
```tsx
// 基础用法
<Popover>
  <PopoverTrigger>点击打开</PopoverTrigger>
  <PopoverContent>
    <p>这是弹出框内容</p>
  </PopoverContent>
</Popover>

// 受控模式
<Popover open={isOpen} onOpenChange={setIsOpen}>
  <PopoverTrigger>受控弹出框</PopoverTrigger>
  <PopoverContent>
    <Button onClick={() => setIsOpen(false)}>关闭</Button>
  </PopoverContent>
</Popover>
```

#### 子组件
- **Popover**: 容器组件
- **PopoverTrigger**: 触发元素
- **PopoverContent**: 弹出内容
- **PopoverAnchor**: 锚点元素

#### 对齐方式
- `start`: 左对齐
- `center`: 居中对齐（默认）
- `end`: 右对齐

#### 可访问性
- 键盘导航支持（Escape 关闭）
- 焦点管理自动处理
- ARIA 属性自动添加

---

## 使用建议

### 何时使用这些组件
- **Button**: 所有需要触发操作或导航的场景
- **Badge**: 显示状态、标签、分类信息
- **Avatar**: 用户头像、品牌标识
- **Skeleton**: 内容加载时的占位符
- **Spinner**: 异步操作的加载状态
- **Separator**: 视觉分隔内容区域
- **AspectRatio**: 需要保持固定宽高比的元素
- **Empty**: 空状态页面
- **Kbd**: 展示键盘快捷键
- **Tooltip**: 鼠标悬停时显示额外信息
- **Popover**: 显示额外的交互内容

### 如何组合使用
```tsx
// Button + Badge + Avatar
<div className="flex items-center gap-2">
  <Avatar>
    <AvatarImage src="/avatar.png" />
    <AvatarFallback>用户</AvatarFallback>
  </Avatar>
  <div>
    <p className="font-medium">用户名</p>
    <Badge variant="secondary">管理员</Badge>
  </div>
  <Button variant="outline">编辑</Button>
</div>

// Tooltip + Button
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="ghost" size="icon">
      <SettingsIcon />
    </Button>
  </TooltipTrigger>
  <TooltipContent>设置</TooltipContent>
</Tooltip>
```

### 性能优化建议
- **懒加载**: 使用 Skeleton 代替空状态
- **防抖**: Tooltip 使用 delayDuration 避免频繁触发
- **动画**: Popover 和 Tooltip 使用 CSS transform 优化性能

---

## 最佳实践

### Button 组件
```tsx
// ✅ 推荐：明确的文字
<Button>保存更改</Button>

// ❌ 避免：模糊的描述
<Button>确定</Button>
```

### Badge 组件
```tsx
// ✅ 推荐：使用语义化变体
<Badge variant="destructive">错误</Badge>
<Badge variant="default">成功</Badge>

// ❌ 避免：仅用颜色区分
<Badge className="bg-red-500">错误</Badge>
```

### Avatar 组件
```tsx
// ✅ 推荐：提供 alt 文本
<Avatar>
  <AvatarImage src="/avatar.png" alt="张三" />
</Avatar>

// ❌ 避免：缺少 alt 文本
<Avatar>
  <AvatarImage src="/avatar.png" />
</Avatar>
```

### Tooltip 组件
```tsx
// ✅ 推荐：简短明确的提示
<TooltipContent>保存到本地</TooltipContent>

// ❌ 避免：过长的提示
<TooltipContent>保存到本地计算机的 C 盘 Documents 文件夹</TooltipContent>
```

### Popover 组件
```tsx
// ✅ 推荐：使用受控模式
const [open, setOpen] = useState(false);
<Popover open={open} onOpenChange={setOpen}>...</Popover>

// ❌ 避免：非受控模式（除非必要）
<Popover>...</Popover>
```

---

## 常见问题解答

### Q: Button 的 `asChild` 属性是什么？
A: `asChild` 属性允许 Button 组件渲染为子元素，而不是默认的 `<button>` 标签。常用于将 Button 样式应用到链接或其他可点击元素上。

```tsx
<Button asChild>
  <a href="/">首页</a>
</Button>
```

### Q: Avatar 的 Fallback 什么时候显示？
A: AvatarFallback 在以下情况下显示：
1. AvatarImage 的 `src` 属性为空
2. 图片加载失败
3. 图片 URL 无效

### Q: Tooltip 和 Popover 有什么区别？
A: 主要区别：
- **Tooltip**: 用于简短的提示信息，鼠标悬停时显示
- **Popover**: 用于复杂的内容和交互，点击触发

### Q: 如何自定义 Skeleton 的动画速度？
A: Skeleton 使用 Tailwind 的 `animate-pulse` 动画，可以通过自定义 `animation-duration` 来调整速度：

```tsx
<Skeleton className="animate-pulse" style={{ animationDuration: '1s' }} />
```

### Q: Empty 组件的 `variant="icon"` 是什么？
A: `variant="icon"` 是 EmptyMedia 的一个变体，为图标提供带背景和圆角的容器样式，使图标更加突出。

---

## 相关文档

- [shadcn/ui 官方文档 - Button](https://ui.shadcn.com/docs/components/button)
- [shadcn/ui 官方文档 - Badge](https://ui.shadcn.com/docs/components/badge)
- [shadcn/ui 官方文档 - Avatar](https://ui.shadcn.com/docs/components/avatar)
- [shadcn/ui 官方文档 - Skeleton](https://ui.shadcn.com/docs/components/skeleton)
- [Radix UI 文档](https://www.radix-ui.com/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)

---

## 版本历史

### v1.0 (2025-02-03)
- ✅ 创建初始文档
- ✅ 添加 11 个基础 UI 组件的完整文档
- ✅ 添加使用示例和最佳实践
- ✅ 添加常见问题解答
