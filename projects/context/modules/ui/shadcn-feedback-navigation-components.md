# shadcn/ui 反馈与导航组件文档

## 版本信息
- **文档版本**: v1.0
- **创建日期**: 2025-02-03
- **shadcn/ui 版本**: latest
- **状态**: ✅ 已完成

## 概述

本文档介绍 shadcn/ui 中的 10 个反馈与导航组件，这些组件用于弹窗、菜单、命令面板等交互场景。

### 组件列表
1. **Drawer** - 抽屉（10个子组件）
2. **Dialog** - 对话框（11个子组件）
3. **AlertDialog** - 警告对话框（11个子组件）
4. **Sheet** - 侧边栏（8个子组件）
5. **HoverCard** - 悬停卡片（3个子组件）
6. **ContextMenu** - 上下文菜单（12个子组件）
7. **DropdownMenu** - 下拉菜单（13个子组件）
8. **Command** - 命令面板（11个子组件）
9. **NavigationMenu** - 导航菜单（9个子组件）
10. **Menubar** - 菜单栏（13个子组件）

### 使用场景
- 弹窗和模态框
- 警告和确认对话框
- 抽屉和侧边栏
- 上下文菜单和下拉菜单
- 命令面板
- 导航菜单
- 悬停提示卡片

### 注意事项
- Popover 组件在基础 UI 组件文档中已涵盖，本文档不再重复
- 这些组件基于 Radix UI 原语，提供可访问性和丰富的交互功能

---

## 组件详解

### 1. Drawer（抽屉）

#### 功能说明
Drawer 组件用于从屏幕边缘滑入的抽屉式面板，支持上下左右四个方向。

#### Props 接口
```typescript
// Drawer 容器
interface DrawerProps extends React.ComponentProps<typeof DrawerPrimitive.Root> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  direction?: 'top' | 'right' | 'bottom' | 'left';
}

// DrawerContent 内容
interface DrawerContentProps extends React.ComponentProps<typeof DrawerPrimitive.Content> {}
```

#### 使用示例
```tsx
// 基础用法
<Drawer>
  <DrawerTrigger>打开抽屉</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>标题</DrawerTitle>
      <DrawerDescription>描述</DrawerDescription>
    </DrawerHeader>
    <div className="p-4">内容</div>
  </DrawerContent>
</Drawer>

// 从底部滑入
<Drawer direction="bottom">
  <DrawerTrigger>打开</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>底部抽屉</DrawerTitle>
    </DrawerHeader>
  </DrawerContent>
</Drawer>

// 受控模式
function MyDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>打开抽屉</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>受控抽屉</DrawerTitle>
        </DrawerHeader>
        <DrawerFooter>
          <Button onClick={() => setOpen(false)}>关闭</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
```

#### 子组件
- **Drawer**: 容器组件
- **DrawerTrigger**: 触发按钮
- **DrawerPortal**: 传送门
- **DrawerOverlay**: 遮罩层
- **DrawerClose**: 关闭按钮
- **DrawerContent**: 抽屉内容
- **DrawerHeader**: 头部区域
- **DrawerFooter**: 底部区域
- **DrawerTitle**: 标题
- **DrawerDescription**: 描述

#### 方向
- `top`: 从顶部滑入
- `bottom`: 从底部滑入（默认）
- `left`: 从左侧滑入
- `right`: 从右侧滑入

#### 可访问性
- 支持键盘导航（Escape 关闭）
- 焦点管理自动处理
- 支持屏幕阅读器

---

### 2. Dialog（对话框）

#### 功能说明
Dialog 组件用于模态对话框，居中显示，需要用户交互才能关闭。

#### Props 接口
```typescript
// Dialog 容器
interface DialogProps extends React.ComponentProps<typeof DialogPrimitive.Root> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
}

// DialogContent 内容
interface DialogContentProps extends React.ComponentProps<typeof DialogPrimitive.Content> {
  showCloseButton?: boolean;
}
```

#### 使用示例
```tsx
// 基础用法
<Dialog>
  <DialogTrigger>打开对话框</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>标题</DialogTitle>
      <DialogDescription>描述</DialogDescription>
    </DialogHeader>
    <div className="p-4">内容</div>
  </DialogContent>
</Dialog>

// 不显示关闭按钮
<Dialog>
  <DialogTrigger>打开</DialogTrigger>
  <DialogContent showCloseButton={false}>
    <DialogHeader>
      <DialogTitle>无关闭按钮</DialogTitle>
    </DialogHeader>
  </DialogContent>
</Dialog>

// 受控模式
function MyDialog() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>打开对话框</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>受控对话框</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            取消
          </Button>
          <Button onClick={() => setOpen(false)}>确认</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

#### 子组件
- **Dialog**: 容器组件
- **DialogTrigger**: 触发按钮
- **DialogPortal**: 传送门
- **DialogOverlay**: 遮罩层
- **DialogClose**: 关闭按钮
- **DialogContent**: 对话框内容
- **DialogHeader**: 头部区域
- **DialogFooter**: 底部区域
- **DialogTitle**: 标题
- **DialogDescription**: 描述

#### 特性
- 居中显示
- 自动显示关闭按钮（可配置）
- 点击遮罩关闭
- Escape 键关闭

#### 可访问性
- 支持键盘导航
- 焦点陷阱
- 支持屏幕阅读器

---

### 3. AlertDialog（警告对话框）

#### 功能说明
AlertDialog 组件用于需要用户确认的警告对话框，通常包含确认和取消按钮。

#### Props 接口
```typescript
// AlertDialog 容器
interface AlertDialogProps extends React.ComponentProps<typeof AlertDialogPrimitive.Root> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

// AlertDialogContent 内容
interface AlertDialogContentProps extends React.ComponentProps<typeof AlertDialogPrimitive.Content> {}
```

#### 使用示例
```tsx
// 基础用法
<AlertDialog>
  <AlertDialogTrigger>删除</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>确认删除？</AlertDialogTitle>
      <AlertDialogDescription>
        此操作不可撤销
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>取消</AlertDialogCancel>
      <AlertDialogAction>确认删除</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

// 受控模式
function MyAlertDialog() {
  const [open, setOpen] = useState(false);
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger>打开警告</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>确认操作</AlertDialogTitle>
          <AlertDialogDescription>
            是否继续执行此操作？
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>
            取消
          </AlertDialogCancel>
          <AlertDialogAction onClick={() => {
            // 执行操作
            setOpen(false);
          }}>
            确认
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
```

#### 子组件
- **AlertDialog**: 容器组件
- **AlertDialogTrigger**: 触发按钮
- **AlertDialogPortal**: 传送门
- **AlertDialogOverlay**: 遮罩层
- **AlertDialogContent**: 警告框内容
- **AlertDialogHeader**: 头部区域
- **AlertDialogFooter**: 底部区域
- **AlertDialogTitle**: 标题
- **AlertDialogDescription**: 描述
- **AlertDialogAction**: 确认按钮（primary 样式）
- **AlertDialogCancel**: 取消按钮（outline 样式）

#### 特性
- 与 Dialog 类似，但专用于确认操作
- 自动添加确认和取消按钮
- 基于 Button 组件的样式

#### 可访问性
- 支持键盘导航
- 焦点管理
- 支持屏幕阅读器

---

### 4. Sheet（侧边栏）

#### 功能说明
Sheet 组件用于从屏幕边缘滑出的侧边栏，常用于设置、详情等场景。

#### Props 接口
```typescript
// Sheet 容器
interface SheetProps extends React.ComponentProps<typeof SheetPrimitive.Root> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

// SheetContent 内容
interface SheetContentProps extends React.ComponentProps<typeof SheetPrimitive.Content> {
  side?: 'top' | 'right' | 'bottom' | 'left';
}
```

#### 使用示例
```tsx
// 基础用法
<Sheet>
  <SheetTrigger>打开侧边栏</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>设置</SheetTitle>
      <SheetDescription>修改您的偏好设置</SheetDescription>
    </SheetHeader>
    <div className="py-4">内容</div>
  </SheetContent>
</Sheet>

// 从右侧滑出
<Sheet>
  <SheetTrigger>打开</SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>右侧侧边栏</SheetTitle>
    </SheetHeader>
  </SheetContent>
</Sheet>

// 受控模式
function MySheet() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>设置</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>用户设置</SheetTitle>
        </SheetHeader>
        <SheetFooter>
          <Button onClick={() => setOpen(false)}>关闭</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
```

#### 子组件
- **Sheet**: 容器组件
- **SheetTrigger**: 触发按钮
- **SheetPortal**: 传送门
- **SheetOverlay**: 遮罩层
- **SheetClose**: 关闭按钮
- **SheetContent**: 侧边栏内容
- **SheetHeader**: 头部区域
- **SheetFooter**: 底部区域
- **SheetTitle**: 标题
- **SheetDescription**: 描述

#### 方向
- `top`: 从顶部滑出
- `right`: 从右侧滑出（默认）
- `bottom`: 从底部滑出
- `left`: 从左侧滑出

#### 可访问性
- 支持键盘导航
- 焦点管理
- 支持屏幕阅读器

---

### 5. HoverCard（悬停卡片）

#### 功能说明
HoverCard 组件用于鼠标悬停时显示的卡片内容，类似工具提示但可以容纳更多内容。

#### Props 接口
```typescript
// HoverCard 容器
interface HoverCardProps extends React.ComponentProps<typeof HoverCardPrimitive.Root> {
  openDelay?: number;
  closeDelay?: number;
}

// HoverCardContent 内容
interface HoverCardContentProps extends React.ComponentProps<typeof HoverCardPrimitive.Content> {
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
}
```

#### 使用示例
```tsx
// 基础用法
<HoverCard>
  <HoverCardTrigger>悬停查看</HoverCardTrigger>
  <HoverCardContent>
    <p>这是悬停卡片的内容</p>
  </HoverCardContent>
</HoverCard>

// 带延迟
<HoverCard openDelay={500} closeDelay={200}>
  <HoverCardTrigger>延迟显示</HoverCardTrigger>
  <HoverCardContent>
    <p>500ms 后显示</p>
  </HoverCardContent>
</HoverCard>

// 对齐方式
<HoverCard>
  <HoverCardTrigger>悬停</HoverCardTrigger>
  <HoverCardContent align="start">
    <p>左对齐内容</p>
  </HoverCardContent>
</HoverCard>
```

#### 子组件
- **HoverCard**: 容器组件
- **HoverCardTrigger**: 触发元素
- **HoverCardContent**: 悬停内容

#### 配置项
- `openDelay`: 打开延迟（毫秒）
- `closeDelay`: 关闭延迟（毫秒）
- `align`: 对齐方式
- `sideOffset`: 偏移量

#### 可访问性
- 支持键盘导航（Focus 显示）
- 支持屏幕阅读器

---

### 6. ContextMenu（上下文菜单）

#### 功能说明
ContextMenu 组件用于右键菜单，支持多级菜单、分组、快捷键等。

#### Props 接口
```typescript
// ContextMenu 容器
interface ContextMenuProps extends React.ComponentProps<typeof ContextMenuPrimitive.Root> {}

// ContextMenuItem 菜单项
interface ContextMenuItemProps extends React.ComponentProps<typeof ContextMenuPrimitive.Item> {
  inset?: boolean;
  variant?: 'default' | 'destructive';
}
```

#### 使用示例
```tsx
// 基础用法
<ContextMenu>
  <ContextMenuTrigger>右键点击我</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>复制</ContextMenuItem>
    <ContextMenuItem>粘贴</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem variant="destructive">删除</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>

// 带图标和快捷键
<ContextMenu>
  <ContextMenuTrigger>右键菜单</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>
      <CopyIcon />
      复制
      <ContextMenuShortcut>⌘C</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      <PasteIcon />
      粘贴
      <ContextMenuShortcut>⌘V</ContextMenuShortcut>
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>

// 多级菜单
<ContextMenu>
  <ContextMenuTrigger>右键</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuSub>
      <ContextMenuSubTrigger>新建</ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuItem>文件夹</ContextMenuItem>
        <ContextMenuItem>文件</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuItem>刷新</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>

// 复选框和单选
<ContextMenu>
  <ContextMenuTrigger>右键</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuCheckboxItem checked={true}>
      显示网格
    </ContextMenuCheckboxItem>
    <ContextMenuRadioGroup value="dark">
      <ContextMenuRadioItem value="light">浅色</ContextMenuRadioItem>
      <ContextMenuRadioItem value="dark">深色</ContextMenuRadioItem>
    </ContextMenuRadioGroup>
  </ContextMenuContent>
</ContextMenu>
```

#### 子组件
- **ContextMenu**: 容器组件
- **ContextMenuTrigger**: 触发区域
- **ContextMenuGroup**: 分组
- **ContextMenuPortal**: 传送门
- **ContextMenuSub**: 子菜单
- **ContextMenuRadioGroup**: 单选组
- **ContextMenuSubTrigger**: 子菜单触发器
- **ContextMenuSubContent**: 子菜单内容
- **ContextMenuContent**: 菜单内容
- **ContextMenuItem**: 菜单项
- **ContextMenuCheckboxItem**: 复选框项
- **ContextMenuRadioItem**: 单选项
- **ContextMenuLabel**: 标签
- **ContextMenuSeparator**: 分隔线

#### 特性
- 支持多级菜单
- 支持复选框和单选
- 支持快捷键显示
- 支持危险操作样式

#### 可访问性
- 支持键盘导航
- 支持屏幕阅读器

---

### 7. DropdownMenu（下拉菜单）

#### 功能说明
DropdownMenu 组件用于点击触发的下拉菜单，支持多级菜单、分组、快捷键等。

#### Props 接口
```typescript
// DropdownMenu 容器
interface DropdownMenuProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Root> {}

// DropdownMenuItem 菜单项
interface DropdownMenuItemProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Item> {
  inset?: boolean;
  variant?: 'default' | 'destructive';
}
```

#### 使用示例
```tsx
// 基础用法
<DropdownMenu>
  <DropdownMenuTrigger>打开菜单</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>个人资料</DropdownMenuItem>
    <DropdownMenuItem>设置</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">退出登录</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

// 带图标和快捷键
<DropdownMenu>
  <DropdownMenuTrigger>菜单</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      <UserIcon />
      个人资料
      <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <SettingsIcon />
      设置
      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

// 复选框和单选
<DropdownMenu>
  <DropdownMenuTrigger>选项</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuCheckboxItem checked={true}>
      显示通知
    </DropdownMenuCheckboxItem>
    <DropdownMenuRadioGroup value="list">
      <DropdownMenuRadioItem value="list">列表视图</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="grid">网格视图</DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
  </DropdownMenuContent>
</DropdownMenu>
```

#### 子组件
- **DropdownMenu**: 容器组件
- **DropdownMenuTrigger**: 触发按钮
- **DropdownMenuPortal**: 传送门
- **DropdownMenuContent**: 菜单内容
- **DropdownMenuGroup**: 分组
- **DropdownMenuItem**: 菜单项
- **DropdownMenuCheckboxItem**: 复选框项
- **DropdownMenuRadioGroup**: 单选组
- **DropdownMenuRadioItem**: 单选项
- **DropdownMenuLabel**: 标签
- **DropdownMenuSeparator**: 分隔线
- **DropdownMenuShortcut**: 快捷键
- **DropdownMenuSub**: 子菜单

#### 特性
- 支持多级菜单
- 支持复选框和单选
- 支持快捷键显示
- 支持危险操作样式

#### 可访问性
- 支持键盘导航
- 支持屏幕阅读器

---

### 8. Command（命令面板）

#### 功能说明
Command 组件用于命令面板（类似 VS Code 的 Command Palette），支持搜索和快捷键。

#### Props 接口
```typescript
// Command 容器
interface CommandProps extends React.ComponentProps<typeof CommandPrimitive> {}

// CommandDialog 对话框模式
interface CommandDialogProps extends React.ComponentProps<typeof Dialog> & {
  title?: string;
  description?: string;
  showCloseButton?: boolean;
}

// CommandInput 输入框
interface CommandInputProps extends React.ComponentProps<typeof CommandPrimitive.Input> {}
```

#### 使用示例
```tsx
// 基础用法
<Command>
  <CommandInput placeholder="搜索命令..." />
  <CommandList>
    <CommandEmpty>没有找到结果</CommandEmpty>
    <CommandGroup heading="基本操作">
      <CommandItem>复制</CommandItem>
      <CommandItem>粘贴</CommandItem>
      <CommandItem>剪切</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

// 对话框模式
<CommandDialog>
  <CommandInput placeholder="搜索命令..." />
  <CommandList>
    <CommandGroup heading="文件">
      <CommandItem>新建文件</CommandItem>
      <CommandItem>打开文件</CommandItem>
    </CommandGroup>
    <CommandGroup heading="编辑">
      <CommandItem>撤销</CommandItem>
      <CommandItem>重做</CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>

// 带快捷键
<Command>
  <CommandInput placeholder="搜索..." />
  <CommandList>
    <CommandItem>
      复制
      <CommandShortcut>⌘C</CommandShortcut>
    </CommandItem>
    <CommandItem>
      粘贴
      <CommandShortcut>⌘V</CommandShortcut>
    </CommandItem>
  </CommandList>
</Command>
```

#### 子组件
- **Command**: 命令容器
- **CommandDialog**: 对话框模式
- **CommandInput**: 搜索输入框
- **CommandList**: 列表容器
- **CommandEmpty**: 空状态
- **CommandGroup**: 分组
- **CommandItem**: 命令项
- **CommandShortcut**: 快捷键
- **CommandSeparator**: 分隔线

#### 特性
- 内置搜索功能
- 支持快捷键显示
- 支持分组
- 支持空状态
- 对话框模式

#### 可访问性
- 支持键盘导航
- 支持屏幕阅读器

---

### 9. NavigationMenu（导航菜单）

#### 功能说明
NavigationMenu 组件用于水平导航菜单，支持下拉内容和视口模式。

#### Props 接口
```typescript
// NavigationMenu 容器
interface NavigationMenuProps extends React.ComponentProps<typeof NavigationMenuPrimitive.Root> {
  viewport?: boolean;
}

// NavigationMenuTrigger 触发器
interface NavigationMenuTriggerProps extends React.ComponentProps<typeof NavigationMenuPrimitive.Trigger> {}
```

#### 使用示例
```tsx
// 基础用法
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>产品</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/products/p1">产品 1</NavigationMenuLink>
        <NavigationMenuLink href="/products/p2">产品 2</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>服务</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/services/s1">服务 1</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

// 无视口模式
<NavigationMenu viewport={false}>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>菜单</NavigationMenuTrigger>
      <NavigationMenuContent>
        {/* 下拉内容 */}
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

#### 子组件
- **NavigationMenu**: 容器组件
- **NavigationMenuList**: 菜单列表
- **NavigationMenuItem**: 菜单项
- **NavigationMenuTrigger**: 触发器
- **NavigationMenuContent**: 下拉内容
- **NavigationMenuLink**: 链接
- **NavigationMenuIndicator**: 指示器
- **NavigationMenuViewport**: 视口

#### 特性
- 支持视口模式
- 支持下拉内容
- 自动动画效果
- 响应式设计

#### 可访问性
- 支持键盘导航
- 支持屏幕阅读器

---

### 10. Menubar（菜单栏）

#### 功能说明
Menubar 组件用于桌面应用风格的菜单栏，支持多级菜单和快捷键。

#### Props 接口
```typescript
// Menubar 容器
interface MenubarProps extends React.ComponentProps<typeof MenubarPrimitive.Root> {}

// MenubarItem 菜单项
interface MenubarItemProps extends React.ComponentProps<typeof MenubarPrimitive.Item> {
  inset?: boolean;
  variant?: 'default' | 'destructive';
}
```

#### 使用示例
```tsx
// 基础用法
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>文件</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>新建</MenubarItem>
      <MenubarItem>打开</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>保存</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>编辑</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>复制</MenubarItem>
      <MenubarItem>粘贴</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>

// 带快捷键
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>文件</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        新建
        <MenubarShortcut>⌘N</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        打开
        <MenubarShortcut>⌘O</MenubarShortcut>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

#### 子组件
- **Menubar**: 容器组件
- **MenubarMenu**: 菜单组
- **MenubarGroup**: 分组
- **MenubarTrigger**: 触发器
- **MenubarContent**: 菜单内容
- **MenubarItem**: 菜单项
- **MenubarCheckboxItem**: 复选框项
- **MenubarRadioGroup**: 单选组
- **MenubarRadioItem**: 单选项
- **MenubarLabel**: 标签
- **MenubarSeparator**: 分隔线
- **MenubarShortcut**: 快捷键

#### 特性
- 桌面应用风格
- 支持多级菜单
- 支持复选框和单选
- 支持快捷键显示

#### 可访问性
- 支持键盘导航
- 支持屏幕阅读器

---

## 使用建议

### 何时使用这些组件
- **Drawer**: 需要大空间的内容，移动端友好
- **Dialog**: 模态对话框，需要用户交互
- **AlertDialog**: 确认操作，危险操作警告
- **Sheet**: 侧边栏，设置、详情等
- **HoverCard**: 悬停显示更多信息
- **ContextMenu**: 右键菜单，快捷操作
- **DropdownMenu**: 点击触发的菜单
- **Command**: 命令面板，搜索命令
- **NavigationMenu**: 水平导航菜单
- **Menubar**: 桌面应用菜单栏

### 如何组合使用

#### Dialog + Form
```tsx
<Dialog>
  <DialogTrigger>
    <Button>编辑用户</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>编辑用户</DialogTitle>
    </DialogHeader>
    <Form>
      {/* 表单内容 */}
    </Form>
    <DialogFooter>
      <Button variant="outline" type="button">取消</Button>
      <Button type="submit">保存</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

#### AlertDialog + 危险操作
```tsx
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">删除</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>确认删除？</AlertDialogTitle>
      <AlertDialogDescription>
        此操作不可撤销
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>取消</AlertDialogCancel>
      <AlertDialogAction onClick={() => handleDelete()}>
        确认删除
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

#### Command + Dialog
```tsx
<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="搜索命令..." />
  <CommandList>
    <CommandGroup heading="文件">
      <CommandItem onSelect={() => {
        handleNewFile();
        setOpen(false);
      }}>
        新建文件
        <CommandShortcut>⌘N</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>
```

### 性能优化建议
- **Dialog/Sheet**: 懒加载内容，避免渲染时加载所有数据
- **ContextMenu/DropdownMenu**: 使用 Portal 避免层级问题
- **Command**: 使用虚拟滚动处理大量命令
- **HoverCard**: 设置合理的 openDelay 避免误触发

---

## 最佳实践

### Dialog
```tsx
// ✅ 推荐：提供明确的标题和描述
<Dialog>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>确认删除</DialogTitle>
      <DialogDescription>
        删除后数据将无法恢复
      </DialogDescription>
    </DialogHeader>
    {/* 内容 */}
  </DialogContent>
</Dialog>

// ❌ 避免：缺少描述
<Dialog>
  <DialogContent>
    <DialogTitle>删除</DialogTitle>
    {/* 内容 */}
  </DialogContent>
</Dialog>
```

### AlertDialog
```tsx
// ✅ 推荐：使用 AlertDialogAction 和 AlertDialogCancel
<AlertDialog>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>确认删除？</AlertDialogTitle>
      <AlertDialogDescription>此操作不可撤销</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>取消</AlertDialogCancel>
      <AlertDialogAction>确认删除</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

// ❌ 避免：使用普通按钮
<AlertDialog>
  <AlertDialogContent>
    <Button>取消</Button>
    <Button>确认</Button>
  </AlertDialogContent>
</AlertDialog>
```

### ContextMenu
```tsx
// ✅ 推荐：提供图标和快捷键
<ContextMenu>
  <ContextMenuContent>
    <ContextMenuItem>
      <CopyIcon />
      复制
      <ContextMenuShortcut>⌘C</ContextMenuShortcut>
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>

// ❌ 避免：纯文本菜单项
<ContextMenu>
  <ContextMenuContent>
    <ContextMenuItem>复制</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

### DropdownMenu
```tsx
// ✅ 推荐：使用分组和分隔线
<DropdownMenu>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuItem>个人资料</DropdownMenuItem>
      <DropdownMenuItem>设置</DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">退出登录</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

// ❌ 避免：所有菜单项平铺
<DropdownMenu>
  <DropdownMenuContent>
    <DropdownMenuItem>个人资料</DropdownMenuItem>
    <DropdownMenuItem>设置</DropdownMenuItem>
    <DropdownMenuItem>退出登录</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### Command
```tsx
// ✅ 推荐：提供分组和空状态
<Command>
  <CommandInput placeholder="搜索..." />
  <CommandList>
    <CommandEmpty>没有找到命令</CommandEmpty>
    <CommandGroup heading="文件">
      <CommandItem>新建文件</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

// ❌ 避免：缺少空状态
<Command>
  <CommandInput placeholder="搜索..." />
  <CommandList>
    <CommandGroup heading="文件">
      <CommandItem>新建文件</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

---

## 常见问题解答

### Q: Dialog 和 Sheet 有什么区别？
A: 主要区别：
- **Dialog**: 居中显示的模态框，适合确认对话框、表单等
- **Sheet**: 从边缘滑出的侧边栏，适合设置、详情等

### Q: Drawer 和 Sheet 有什么区别？
A: 主要区别：
- **Drawer**: 基于 vaul 库，更适合移动端，支持滑动手势
- **Sheet**: 基于 Radix UI，更适合桌面端

### Q: 如何实现多个 Dialog 层叠？
A: 每个独立的 Dialog 都有自己的 Portal，会自动处理层级。确保使用不同的 `open` 状态。

### Q: ContextMenu 如何禁用某个菜单项？
A: 使用 `disabled` 属性：
```tsx
<ContextMenuItem disabled>禁用的选项</ContextMenuItem>
```

### Q: Command 如何实现异步搜索？
A: 使用状态管理搜索结果：
```tsx
function MyCommand() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      search(query).then(setResults);
    }
  }, [query]);

  return (
    <Command>
      <CommandInput onValueChange={setQuery} />
      <CommandList>
        {results.map(result => (
          <CommandItem key={result.id}>{result.name}</CommandItem>
        ))}
      </CommandList>
    </Command>
  );
}
```

---

## 相关文档

- [shadcn/ui 官方文档 - Dialog](https://ui.shadcn.com/docs/components/dialog)
- [shadcn/ui 官方文档 - Sheet](https://ui.shadcn.com/docs/components/sheet)
- [shadcn/ui 官方文档 - Drawer](https://ui.shadcn.com/docs/components/drawer)
- [shadcn/ui 官方文档 - DropdownMenu](https://ui.shadcn.com/docs/components/dropdown-menu)
- [shadcn/ui 官方文档 - Command](https://ui.shadcn.com/docs/components/command)
- [Radix UI 文档](https://www.radix-ui.com/)
- [Vaul 文档](https://emilkowalski.dev/ui/vaul)
- [cmdk 文档](https://cmdk.paco.me/)

---

## 版本历史

### v1.0 (2025-02-03)
- ✅ 创建初始文档
- ✅ 添加 10 个反馈与导航组件的完整文档
- ✅ 添加使用示例和最佳实践
- ✅ 添加常见问题解答
- ✅ 说明 Popover 在基础组件文档中已涵盖
