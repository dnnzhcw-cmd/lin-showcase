# shadcn/ui 对话与复选组件文档

## 文档信息
- **分类**: 对话与复选组件 (Dialog & Interactive Components)
- **组件数量**: 12 个
- **文件路径**: `src/components/ui/`
- **创建时间**: 2025-06-18
- **最后更新**: 2025-06-18
- **技术栈**: React 19 + Radix UI + Tailwind CSS 4

---

## 组件概览

本组组件涵盖了用户交互的核心场景，包括折叠面板、可调整大小元素、轮播图、通知提示、表单组合输入、列表项展示和按钮组等。这些组件支持丰富的交互模式和高度可定制性。

### 组件列表

| 组件名称 | 核心功能 | 复杂度 | 推荐场景 |
|---------|---------|--------|---------|
| Accordion | 手风琴折叠面板 | ⭐⭐⭐ | FAQ、菜单导航、分组内容 |
| Collapsible | 可折叠内容容器 | ⭐⭐ | 条件显示内容、详情展开 |
| Toggle | 二态切换按钮 | ⭐⭐ | 功能开关、选项切换 |
| ToggleGroup | 切换按钮组 | ⭐⭐⭐ | 多选一、多选项组 |
| Resizable | 可调整大小的容器 | ⭐⭐⭐⭐ | 分屏布局、面板调整 |
| Carousel | 轮播图/图片轮播 | ⭐⭐⭐⭐ | 图片展示、内容轮播 |
| Sonner | 通知提示组件 | ⭐⭐ | 操作反馈、状态通知 |
| InputOTP | 一次性密码输入 | ⭐⭐⭐ | 验证码、OTP 输入 |
| InputGroup | 输入框组合 | ⭐⭐⭐ | 带前缀/后缀的输入框 |
| Field | 表单字段容器 | ⭐⭐⭐⭐ | 表单布局、字段管理 |
| Item | 列表项组件 | ⭐⭐⭐ | 列表展示、卡片项 |
| ButtonGroup | 按钮组容器 | ⭐⭐ | 相关按钮组合 |

---

## 组件详解

### 1. Accordion（手风琴折叠面板）

**文件**: `src/components/ui/accordion.tsx`

**组件导出**:
- `Accordion` - 手风琴容器
- `AccordionItem` - 手风琴项
- `AccordionTrigger` - 折叠触发器
- `AccordionContent` - 折叠内容

**核心特性**:
- 支持单选/多选模式
- 内置键盘导航 (Arrow keys)
- 平滑动画过渡
- 自定义方向 (horizontal/vertical)

**类型定义**:
```typescript
type AccordionSingleProps = React.ComponentProps<typeof Accordion>
type AccordionType = "single" | "multiple"
```

**使用示例**:
```typescript
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>问题 1</AccordionTrigger>
    <AccordionContent>
      这里是问题 1 的答案内容...
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

**API**:
| 属性 | 类型 | 默认值 | 说明 |
|-----|------|--------|------|
| type | "single" \| "multiple" | "single" | 选择模式 |
| collapsible | boolean | false | 是否允许全部折叠 |
| defaultValue | string \| string[] | - | 默认展开项 |
| onValueChange | (value) => void | - | 值变化回调 |

**注意事项**:
- 使用 `collapsible` 允许用户再次点击触发器关闭已展开项
- `type="multiple"` 时可同时展开多项
- 内容区域高度自适应，支持动画

---

### 2. Collapsible（可折叠内容）

**文件**: `src/components/ui/collapsible.tsx`

**组件导出**:
- `Collapsible` - 折叠容器
- `CollapsibleTrigger` - 触发器
- `CollapsibleContent` - 内容区

**核心特性**:
- 轻量级折叠容器
- 自定义触发器样式
- 支持受控/非受控模式

**使用示例**:
```typescript
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

<Collapsible>
  <CollapsibleTrigger>点击展开</CollapsibleTrigger>
  <CollapsibleContent>
    <p>这里是需要折叠的内容...</p>
  </CollapsibleContent>
</Collapsible>
```

**API**:
| 属性 | 类型 | 默认值 | 说明 |
|-----|------|--------|------|
| open | boolean | - | 受控模式展开状态 |
| defaultOpen | boolean | false | 默认展开 |
| onOpenChange | (open: boolean) => void | - | 状态变化回调 |

**注意事项**:
- 比 Accordion 更灵活，不限制触发器样式
- 适合单独的折叠/展开场景

---

### 3. Toggle（切换按钮）

**文件**: `src/components/ui/toggle.tsx`

**组件导出**: `Toggle`

**核心特性**:
- 二态切换 (开/关)
- 支持 outline/default 两种样式
- 可作为子元素使用 (asChild)

**变体 (Variants)**:
```typescript
{
  variant: "default" | "outline",
  size: "default" | "sm" | "lg"
}
```

**使用示例**:
```typescript
import { Toggle } from "@/components/ui/toggle"

<Toggle pressed={isPressed} onPressedChange={setIsPressed}>
  <BoldIcon />
</Toggle>
```

**API**:
| 属性 | 类型 | 默认值 | 说明 |
|-----|------|--------|------|
| pressed | boolean | - | 按下状态 |
| onPressedChange | (pressed: boolean) => void | - | 状态变化回调 |
| variant | "default" \| "outline" | "default" | 样式变体 |
| size | "default" \| "sm" \| "lg" | "default" | 尺寸 |

**注意事项**:
- 适用于工具栏按钮、功能开关
- 支持键盘操作

---

### 4. ToggleGroup（切换按钮组）

**文件**: `src/components/ui/toggle-group.tsx`

**组件导出**:
- `ToggleGroup` - 按钮组容器
- `ToggleGroupItem` - 组内按钮

**核心特性**:
- 单选/多选模式
- 水平/垂直布局
- 统一按钮样式

**使用示例**:
```typescript
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

<ToggleGroup type="single" value={value} onValueChange={setValue}>
  <ToggleGroupItem value="bold">B</ToggleGroupItem>
  <ToggleGroupItem value="italic">I</ToggleGroupItem>
  <ToggleGroupItem value="underline">U</ToggleGroupItem>
</ToggleGroup>
```

**API**:
| 属性 | 类型 | 默认值 | 说明 |
|-----|------|--------|------|
| type | "single" \| "multiple" | - | 选择模式 |
| value | string \| string[] | - | 当前值 |
| onValueChange | (value) => void | - | 值变化回调 |

**注意事项**:
- `type="single"` 时类似 RadioGroup
- `type="multiple"` 时支持多选
- 按钮会自动处理圆角样式

---

### 5. Resizable（可调整大小）

**文件**: `src/components/ui/resizable.tsx`

**组件导出**:
- `Resizable` - 可调整容器
- `ResizableHandle` - 调整手柄

**核心特性**:
- 四方向调整 (四个角)
- 手柄拖拽交互
- 可嵌套使用

**使用示例**:
```typescript
import { Resizable, ResizableHandle } from "@/components/ui/resizable"

<Resizable>
  <ResizableHandle />
  <div className="flex-1">主要内容</div>
</Resizable>
```

**API**:
| 属性 | 类型 | 默认值 | 说明 |
|-----|------|--------|------|
| defaultSize | number \| string | - | 默认尺寸 |
| minSize | number \| string | 10% | 最小尺寸 |
| maxSize | number \| string | Infinity | 最大尺寸 |
| direction | "horizontal" \| "vertical" | - | 调整方向 |

**注意事项**:
- 手柄样式可自定义
- 适合分屏编辑器、面板布局

---

### 6. Carousel（轮播图）

**文件**: `src/components/ui/carousel.tsx`

**组件导出**:
- `Carousel` - 轮播容器
- `CarouselContent` - 内容区
- `CarouselItem` - 轮播项
- `CarouselPrevious` - 上一张按钮
- `CarouselNext` - 下一张按钮
- `useCarousel` - Hook

**核心特性**:
- 基于 Embla Carousel
- 水平/垂直轮播
- 键盘导航支持
- 循环播放

**类型定义**:
```typescript
type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}
```

**使用示例**:
```typescript
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

<Carousel>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
  </CarouselContent>
</Carousel>
```

**API**:
| 属性 | 类型 | 默认值 | 说明 |
|-----|------|--------|------|
| orientation | "horizontal" \| "vertical" | "horizontal" | 轮播方向 |
| opts | CarouselOptions | - | Embla 选项 |
| plugins | CarouselPlugin | - | 插件配置 |

**注意事项**:
- 需安装 `embla-carousel-react`
- 支持自定义导航按钮
- 可通过 `setApi` 获取控制 API

---

### 7. Sonner（通知提示）

**文件**: `src/components/ui/sonner.tsx`

**组件导出**: `Toaster`

**核心特性**:
- 基于 sonner 库
- 5 种预设样式 (success/info/warning/error/loading)
- 自动主题适配
- 支持自定义图标

**使用示例**:
```typescript
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"

// 在布局中添加
<Toaster />

// 调用提示
toast.success("操作成功")
toast.error("发生错误")
toast.loading("正在加载...")
```

**API**:
```typescript
toast(message: string, options?: ToastOptions)
toast.success(message, options?)
toast.error(message, options?)
toast.info(message, options?)
toast.warning(message, options?)
toast.loading(message, options?)
```

**注意事项**:
- 需安装 `sonner` 包
- 图标使用 lucide-react
- 支持自动关闭和手动关闭

---

### 8. InputOTP（一次性密码输入）

**文件**: `src/components/ui/input-otp.tsx`

**组件导出**:
- `InputOTP` - OTP 容器
- `InputOTPGroup` - 分组
- `InputOTPSlot` - 输入槽
- `InputOTPSeparator` - 分隔符

**核心特性**:
- 专为验证码设计
- 自动聚焦和跳转
- 分组显示 (如 3-4-3 格式)
- 闪烁光标动画

**使用示例**:
```typescript
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
</InputOTP>
```

**API**:
| 属性 | 类型 | 默认值 | 说明 |
|-----|------|--------|------|
| maxLength | number | 6 | 最大长度 |
| value | string | - | 当前值 |
| onChange | (value: string) => void | - | 值变化回调 |

**注意事项**:
- 需安装 `input-otp` 包
- 槽位索引从 0 开始
- 支持复制粘贴

---

### 9. InputGroup（输入框组）

**文件**: `src/components/ui/input-group.tsx`

**组件导出**:
- `InputGroup` - 容器
- `InputGroupAddon` - 附加元素
- `InputGroupButton` - 组内按钮
- `InputGroupText` - 文本
- `InputGroupInput` - 输入框
- `InputGroupTextarea` - 文本域

**核心特性**:
- 四种对齐方式 (inline-start/end, block-start/end)
- 聚焦样式联动
- 错误状态支持
- 禁用状态支持

**变体 (Variants)**:
```typescript
{
  align: "inline-start" | "inline-end" | "block-start" | "block-end"
}
```

**使用示例**:
```typescript
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"

<InputGroup>
  <InputGroupAddon align="inline-start">
    <SearchIcon />
  </InputGroupAddon>
  <InputGroupInput placeholder="搜索..." />
</InputGroup>
```

**API**:
| 组件 | 属性 | 类型 | 默认值 | 说明 |
|-----|------|------|--------|------|
| InputGroup | - | - | - | 容器组件 |
| InputGroupAddon | align | "inline-start" 等 | - | 对齐位置 |
| InputGroupButton | size | "xs" \| "sm" \| "icon-xs" \| "icon-sm" | "xs" | 按钮尺寸 |

**注意事项**:
- 输入框会自动移除边框
- 支持多行文本域
- 点击附加元素会聚焦输入框

---

### 10. Field（表单字段）

**文件**: `src/components/ui/field.tsx`

**组件导出**:
- `Field` - 字段容器
- `FieldSet` - 字段集
- `FieldLegend` - 图例/标题
- `FieldGroup` - 分组
- `FieldContent` - 内容区
- `FieldLabel` - 标签
- `FieldTitle` - 标题
- `FieldDescription` - 描述
- `FieldError` - 错误信息
- `FieldSeparator` - 分隔符

**核心特性**:
- 三种布局方向 (vertical/horizontal/responsive)
- 内置错误处理
- 支持验证状态
- 响应式布局

**变体 (Variants)**:
```typescript
{
  orientation: "vertical" | "horizontal" | "responsive"
}
```

**使用示例**:
```typescript
import { Field, FieldLabel, FieldContent, FieldError } from "@/components/ui/field"

<Field orientation="horizontal">
  <FieldLabel>用户名</FieldLabel>
  <FieldContent>
    <Input />
    <FieldError errors={errors} />
  </FieldContent>
</Field>
```

**API**:
| 属性 | 类型 | 默认值 | 说明 |
|-----|------|--------|------|
| orientation | "vertical" \| "horizontal" \| "responsive" | "vertical" | 布局方向 |
| invalid | boolean | - | 是否无效 |
| disabled | boolean | - | 是否禁用 |

**FieldError**:
| 属性 | 类型 | 默认值 | 说明 |
|-----|------|--------|------|
| errors | Array<{ message: string }> | - | 错误数组 |

**注意事项**:
- `orientation="responsive"` 在桌面端水平，移动端垂直
- 错误信息会自动去重
- 支持嵌套分组

---

### 11. Item（列表项）

**文件**: `src/components/ui/item.tsx`

**组件导出**:
- `Item` - 列表项
- `ItemGroup` - 项组
- `ItemSeparator` - 分隔符
- `ItemMedia` - 媒体区
- `ItemContent` - 内容区
- `ItemTitle` - 标题
- `ItemDescription` - 描述
- `ItemActions` - 操作区
- `ItemHeader` - 头部
- `ItemFooter` - 底部

**核心特性**:
- 灵活的列表项布局
- 支持 icon/image 媒体类型
- 链接可点击
- 悬停效果

**变体 (Variants)**:
```typescript
{
  variant: "default" | "outline" | "muted",
  size: "default" | "sm"
}
```

**使用示例**:
```typescript
import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription } from "@/components/ui/item"

<Item>
  <ItemMedia variant="icon">
    <UserIcon />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>用户名称</ItemTitle>
    <ItemDescription>用户描述信息...</ItemDescription>
  </ItemContent>
</Item>
```

**API**:
| 属性 | 类型 | 默认值 | 说明 |
|-----|------|--------|------|
| variant | "default" \| "outline" \| "muted" | "default" | 样式变体 |
| size | "default" \| "sm" | "default" | 尺寸 |
| asChild | boolean | false | 作为子元素 |

**注意事项**:
- 可配合 `ItemGroup` 和 `ItemSeparator` 使用
- 支持点击跳转
- 描述文本自动截断（最多 2 行）

---

### 12. ButtonGroup（按钮组）

**文件**: `src/components/ui/button-group.tsx`

**组件导出**:
- `ButtonGroup` - 按钮组容器
- `ButtonGroupText` - 组内文本
- `ButtonGroupSeparator` - 分隔符

**核心特性**:
- 自动处理按钮圆角
- 水平/垂直布局
- 支持分隔符
- 文本标签

**变体 (Variants)**:
```typescript
{
  orientation: "horizontal" | "vertical"
}
```

**使用示例**:
```typescript
import { ButtonGroup, Button } from "@/components/ui/button-group"

<ButtonGroup orientation="horizontal">
  <Button variant="outline">取消</Button>
  <Button>确认</Button>
</ButtonGroup>
```

**API**:
| 属性 | 类型 | 默认值 | 说明 |
|-----|------|--------|------|
| orientation | "horizontal" \| "vertical" | "horizontal" | 布局方向 |

**注意事项**:
- 按钮会自动移除中间边框
- 焦点时自动提升层级
- 支持嵌套组

---

## 依赖说明

本组组件的第三方依赖：

| 依赖 | 组件 | 用途 |
|-----|------|------|
| @radix-ui/react-collapsible | Collapsible | 折叠容器基础 |
| @radix-ui/react-slot | Item, ButtonGroup | 多功能插槽 |
| @radix-ui/react-toggle | Toggle, ToggleGroup | 切换按钮基础 |
| embla-carousel-react | Carousel | 轮播功能 |
| input-otp | InputOTP | OTP 输入 |
| sonner | Sonner | 通知提示 |
| class-variance-authority | 多个组件 | 变体管理 |
| lucide-react | 多个组件 | 图标 |

安装命令：
```bash
pnpm add @radix-ui/react-collapsible @radix-ui/react-slot @radix-ui/react-toggle embla-carousel-react input-otp sonner class-variance-authority lucide-react
```

---

## 使用建议

### 常见组合模式

**1. 手风琴 FAQ**
```typescript
<Accordion type="single" collapsible>
  <AccordionItem value="faq-1">
    <AccordionTrigger>问题标题</AccordionTrigger>
    <AccordionContent>答案内容</AccordionContent>
  </AccordionItem>
</Accordion>
```

**2. 验证码输入**
```typescript
<InputOTP maxLength={6} value={otp} onChange={setOtp}>
  <InputOTPGroup>
    {[...Array(6)].map((_, i) => (
      <InputOTPSlot key={i} index={i} />
    ))}
  </InputOTPGroup>
</InputOTP>
```

**3. 工具栏切换**
```typescript
<ToggleGroup type="multiple" value={tools} onValueChange={setTools}>
  <ToggleGroupItem value="bold"><BoldIcon /></ToggleGroupItem>
  <ToggleGroupItem value="italic"><ItalicIcon /></ToggleGroupItem>
</ToggleGroup>
```

**4. 图片轮播**
```typescript
<Carousel>
  <CarouselContent>
    {images.map((img, i) => (
      <CarouselItem key={i}>
        <img src={img} alt={`slide ${i}`} />
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>
```

**5. 表单字段**
```typescript
<Field orientation="horizontal">
  <FieldLabel>邮箱</FieldLabel>
  <FieldContent>
    <Input type="email" />
    <FieldDescription>我们不会公开你的邮箱</FieldDescription>
    <FieldError errors={errors.email} />
  </FieldContent>
</Field>
```

### 性能优化建议

1. **Carousel** - 大量图片时使用懒加载
2. **Accordion** - 多项内容时使用 `collapsible` 减少初始渲染
3. **Resizable** - 避免过度嵌套
4. **Sonner** - 限制同时显示的通知数量

### 无障碍建议

- 所有交互组件支持键盘导航
- `Accordion` 使用 `aria-expanded` 属性
- `Carousel` 包含 `aria-roledescription`
- `Field` 正确关联 `aria-invalid`

---

## 相关文档

- [基础组件文档](./shadcn-basic-components.md) - Button, Input, Label 等
- [表单组件文档](./shadcn-form-components.md) - Form, Select, Checkbox 等
- [数据展示文档](./shadcn-data-display-components.md) - Table, Card, Badge 等
- [反馈与导航文档](./shadcn-feedback-navigation-components.md) - Dialog, Toast, Tabs 等

---

## 更新日志

**2025-06-18**:
- 创建文档，覆盖 12 个交互组件
- 添加所有组件的 API 说明和使用示例
- 提供常见组合模式建议

---

## 贡献者

- ClueBoard 开发团队

---

**文档版本**: 1.0.0
**最后更新**: 2025-06-18
