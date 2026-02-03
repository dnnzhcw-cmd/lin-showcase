# shadcn/ui 表单组件文档

## 版本信息
- **文档版本**: v1.0
- **创建日期**: 2025-02-03
- **shadcn/ui 版本**: latest
- **状态**: ✅ 已完成

## 概述

本文档介绍 shadcn/ui 中的 10 个表单组件，这些组件用于构建用户输入和表单交互功能。

### 组件列表
1. **Input** - 文本输入框
2. **Textarea** - 多行文本输入
3. **Checkbox** - 复选框
4. **RadioGroup** - 单选组
5. **Switch** - 开关
6. **Slider** - 滑块
7. **Select** - 下拉选择
8. **Label** - 标签
9. **Form** - 表单（基于 react-hook-form）
10. **Calendar** - 日历

### 使用场景
- 用户数据输入和收集
- 表单验证和提交
- 日期和时间选择
- 开关和选择控件
- 集成 react-hook-form 实现高级表单功能

---

## 组件详解

### 1. Input（文本输入框）

#### 功能说明
Input 组件用于单行文本输入，支持各种 HTML 输入类型。

#### Props 接口
```typescript
interface InputProps extends React.ComponentProps<'input'> {
  type?: string;
  className?: string;
  // 继承所有原生 input 属性
}
```

#### 使用示例
```tsx
// 基础用法
<Input placeholder="请输入用户名" />

// 不同类型
<Input type="email" placeholder="邮箱" />
<Input type="password" placeholder="密码" />
<Input type="number" placeholder="年龄" />

// 禁用状态
<Input disabled placeholder="禁用状态" />

// 自定义样式
<Input className="max-w-sm" placeholder="自定义宽度" />
```

#### 支持的输入类型
- `text` - 文本（默认）
- `email` - 邮箱
- `password` - 密码
- `number` - 数字
- `tel` - 电话
- `url` - URL
- `search` - 搜索
- `date` - 日期
- `time` - 时间
- 其他标准 HTML5 input 类型

#### 可访问性
- 支持键盘导航
- 自动添加 focus-visible 样式
- 支持屏幕阅读器
- 禁用状态自动降低透明度

---

### 2. Textarea（多行文本输入）

#### 功能说明
Textarea 组件用于多行文本输入，支持自动调整高度。

#### Props 接口
```typescript
interface TextareaProps extends React.ComponentProps<'textarea'> {
  className?: string;
  // 继承所有原生 textarea 属性
}
```

#### 使用示例
```tsx
// 基础用法
<Textarea placeholder="请输入描述" />

// 固定行数
<Textarea rows={4} placeholder="4行高度" />

- 禁用状态
<Textarea disabled placeholder="禁用状态" />

// 限制最大长度
<Textarea maxLength={200} placeholder="最多200字符" />
```

#### 特性
- 最小高度 `min-h-16`
- 支持自动调整大小（`field-sizing-content`）
- 与 Input 保持一致的样式和交互

#### 可访问性
- 支持键盘导航
- 自动添加 focus-visible 样式
- 支持屏幕阅读器

---

### 3. Checkbox（复选框）

#### 功能说明
Checkbox 组件用于多选场景，支持单独使用或与 Label 配合使用。

#### Props 接口
```typescript
interface CheckboxProps extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  checked?: boolean | 'indeterminate';
  onCheckedChange?: (checked: boolean | 'indeterminate') => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
}
```

#### 使用示例
```tsx
// 基础用法
<Checkbox />
<Checkbox checked />
<Checkbox defaultChecked />

// 带文本
<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <label htmlFor="terms">我同意服务条款</label>
</div>

// 受控组件
function MyComponent() {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onCheckedChange={setChecked}
    />
  );
}

// 禁用状态
<Checkbox disabled />
```

#### 状态
- `unchecked` - 未选中
- `checked` - 已选中
- `indeterminate` - 部分选中

#### 可访问性
- 支持键盘导航（Space 切换）
- 自动添加 ARIA 属性
- 支持屏幕阅读器

---

### 4. RadioGroup（单选组）

#### 功能说明
RadioGroup 组件用于单选场景，多个 RadioGroupItem 共享同一个 name 属性。

#### Props 接口
```typescript
// RadioGroup 容器
interface RadioGroupProps extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  name?: string;
}

// RadioGroupItem 单选项
interface RadioGroupItemProps extends React.ComponentProps<typeof RadioGroupPrimitive.Item> {
  value: string;
  disabled?: boolean;
  required?: boolean;
}
```

#### 使用示例
```tsx
// 基础用法
<RadioGroup defaultValue="option1">
  <RadioGroupItem value="option1" id="r1" />
  <Label htmlFor="r1">选项 1</Label>

  <RadioGroupItem value="option2" id="r2" />
  <Label htmlFor="r2">选项 2</Label>
</RadioGroup>

// 受控组件
function MyComponent() {
  const [value, setValue] = useState('option1');
  return (
    <RadioGroup value={value} onValueChange={setValue}>
      <RadioGroupItem value="option1">选项 1</RadioGroupItem>
      <RadioGroupItem value="option2">选项 2</RadioGroupItem>
    </RadioGroup>
  );
}

// 禁用整个组
<RadioGroup disabled>
  <RadioGroupItem value="option1" />
  <RadioGroupItem value="option2" />
</RadioGroup>

// 禁用单个选项
<RadioGroup>
  <RadioGroupItem value="option1" />
  <RadioGroupItem value="option2" disabled />
</RadioGroup>
```

#### 子组件
- **RadioGroup**: 容器组件
- **RadioGroupItem**: 单选项

#### 可访问性
- 支持键盘导航（↑/↓/←/→ 切换）
- 自动添加 ARIA 属性
- 支持屏幕阅读器

---

### 5. Switch（开关）

#### 功能说明
Switch 组件用于二元状态切换，类似 iOS 风格的开关按钮。

#### Props 接口
```typescript
interface SwitchProps extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  defaultChecked?: boolean;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
}
```

#### 使用示例
```tsx
// 基础用法
<Switch />
<Switch checked />
<Switch defaultChecked />

// 带标签
<div className="flex items-center gap-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">启用通知</Label>
</div>

// 受控组件
function MyComponent() {
  const [enabled, setEnabled] = useState(false);
  return (
    <Switch
      checked={enabled}
      onCheckedChange={setEnabled}
    />
  );
}

// 禁用状态
<Switch disabled />
```

#### 状态
- `unchecked` - 关闭状态
- `checked` - 开启状态

#### 可访问性
- 支持键盘导航（Space 切换）
- 自动添加 ARIA 属性
- 支持屏幕阅读器

---

### 6. Slider（滑块）

#### 功能说明
Slider 组件用于数值范围选择，支持单值和双值模式。

#### Props 接口
```typescript
interface SliderProps extends React.ComponentProps<typeof SliderPrimitive.Root> {
  defaultValue?: number[];
  value?: number[];
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onValueChange?: (value: number[]) => void;
  onValueCommit?: (value: number[]) => void;
}
```

#### 使用示例
```tsx
// 单值滑块（默认）
<Slider defaultValue={[50]} />

// 双值滑块（范围选择）
<Slider defaultValue={[20, 80]} />

// 自定义范围
<Slider min={0} max={1000} defaultValue={[500]} />

// 自定义步长
<Slider min={0} max={100} step={5} defaultValue={[25]} />

// 受控组件
function MyComponent() {
  const [value, setValue] = useState([50]);
  return (
    <Slider
      value={value}
      onValueChange={setValue}
    />
  );
}

// 禁用状态
<Slider disabled defaultValue={[50]} />
```

#### 配置项
- `min`: 最小值（默认 0）
- `max`: 最大值（默认 100）
- `step`: 步长（默认 1）
- `defaultValue`: 初始值
- `value`: 受控值

#### 特性
- 支持单值和双值模式
- 支持键盘导航（←/→/↓/↑）
- 响应式触摸支持
- 禁用状态自动降低透明度

#### 可访问性
- 支持键盘导航
- 支持屏幕阅读器
- ARIA 属性自动添加

---

### 7. Select（下拉选择）

#### 功能说明
Select 组件用于从选项列表中选择一个值，基于 Radix UI。

#### Props 接口
```typescript
// Select 容器
interface SelectProps extends React.ComponentProps<typeof SelectPrimitive.Root> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  name?: string;
  required?: boolean;
}

// SelectTrigger 触发器
interface SelectTriggerProps extends React.ComponentProps<typeof SelectPrimitive.Trigger> {
  size?: 'sm' | 'default';
}

// SelectContent 内容
interface SelectContentProps extends React.ComponentProps<typeof SelectPrimitive.Content> {
  position?: 'item-aligned' | 'popper';
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
}

// SelectItem 选项
interface SelectItemProps extends React.ComponentProps<typeof SelectPrimitive.Item> {
  value: string;
  disabled?: boolean;
}
```

#### 使用示例
```tsx
// 基础用法
<Select defaultValue="option1">
  <SelectTrigger>
    <SelectValue placeholder="选择选项" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">选项 1</SelectItem>
    <SelectItem value="option2">选项 2</SelectItem>
    <SelectItem value="option3">选项 3</SelectItem>
  </SelectContent>
</Select>

// 分组选项
<Select>
  <SelectTrigger>
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>水果</SelectLabel>
      <SelectItem value="apple">苹果</SelectItem>
      <SelectItem value="banana">香蕉</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>蔬菜</SelectLabel>
      <SelectItem value="carrot">胡萝卜</SelectItem>
      <SelectItem value="lettuce">生菜</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>

// 受控组件
function MyComponent() {
  const [value, setValue] = useState('option1');
  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">选项 1</SelectItem>
        <SelectItem value="option2">选项 2</SelectItem>
      </SelectContent>
    </Select>
  );
}

// 小尺寸
<Select>
  <SelectTrigger size="sm">
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">选项 1</SelectItem>
  </SelectContent>
</Select>
```

#### 子组件
- **Select**: 容器组件
- **SelectTrigger**: 触发按钮
- **SelectValue**: 选值显示
- **SelectContent**: 下拉内容
- **SelectGroup**: 选项组
- **SelectLabel**: 组标签
- **SelectItem**: 单个选项
- **SelectSeparator**: 分隔线
- **SelectScrollUpButton**: 向上滚动按钮
- **SelectScrollDownButton**: 向下滚动按钮

#### 尺寸
- `default`: 默认高度 h-9
- `sm`: 小号高度 h-8

#### 可访问性
- 支持键盘导航（↑/↓/Home/End/Enter/Esc）
- 自动添加 ARIA 属性
- 支持屏幕阅读器

---

### 8. Label（标签）

#### 功能说明
Label 组件用于表单元素的标签，与表单元素关联。

#### Props 接口
```typescript
interface LabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {
  htmlFor?: string;
  className?: string;
}
```

#### 使用示例
```tsx
// 基础用法
<Label htmlFor="username">用户名</Label>
<Input id="username" />

// 与其他组件配合
<div className="grid gap-2">
  <Label htmlFor="email">邮箱</Label>
  <Input id="email" type="email" />
</div>

// 禁用状态
<div className="flex items-center gap-2 group" data-disabled>
  <Label>禁用标签</Label>
</div>

// 自定义样式
<Label className="text-base font-semibold">
  自定义样式标签
</Label>
```

#### 特性
- 自动处理禁用状态的透明度
- 与表单元素通过 `htmlFor` 关联
- 支持键盘导航（Focus）

#### 可访问性
- 支持键盘导航
- 与表单元素正确关联
- 支持屏幕阅读器

---

### 9. Form（表单）

#### 功能说明
Form 组件基于 react-hook-form，提供完整的表单验证和状态管理。

#### Props 接口
```typescript
// Form 提供者（直接使用 FormProvider）
interface FormProps {
  children: React.ReactNode;
}

// FormField 表单字段
interface FormFieldProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> {
  control: Control<TFieldValues>;
  name: TName;
  render: (props: { field: any }) => React.ReactNode;
}

// FormItem 表单项容器
interface FormItemProps extends React.ComponentProps<'div'> {}

// FormLabel 表单标签
interface FormLabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {}

// FormControl 表单控件
interface FormControlProps extends React.ComponentProps<typeof Slot> {}

// FormDescription 表单描述
interface FormDescriptionProps extends React.ComponentProps<'p'> {}

// FormMessage 表单错误消息
interface FormMessageProps extends React.ComponentProps<'p'> {}
```

#### 使用示例
```tsx
// 基础用法
import { useForm } from 'react-hook-form';

function MyForm() {
  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
    },
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>用户名</FormLabel>
              <FormControl>
                <Input placeholder="请输入用户名" {...field} />
              </FormControl>
              <FormDescription>
                这是您的显示名称
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">提交</Button>
      </form>
    </Form>
  );
}

// 带验证
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formSchema = z.object({
  username: z.string().min(2, {
    message: '用户名至少2个字符',
  }),
  email: z.string().email({
    message: '请输入有效的邮箱地址',
  }),
});

function MyForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
    },
  });

  // ... 其他代码
}
```

#### 子组件
- **Form**: 表单提供者
- **FormField**: 表单字段
- **FormItem**: 表单项容器
- **FormLabel**: 表单标签
- **FormControl**: 表单控件
- **FormDescription**: 表单描述
- **FormMessage**: 表单错误消息

#### Hooks
- **useFormField**: 在表单项内部获取表单状态

#### 特性
- 基于 react-hook-form
- 支持 Zod 验证
- 自动处理错误状态
- 支持服务器端验证
- TypeScript 类型安全

#### 可访问性
- 自动添加 ARIA 属性
- 支持屏幕阅读器
- 错误消息自动关联

---

### 10. Calendar（日历）

#### 功能说明
Calendar 组件用于日期选择，基于 react-day-picker。

#### Props 接口
```typescript
interface CalendarProps extends React.ComponentProps<typeof DayPicker> {
  className?: string;
  classNames?: Partial<typeof defaultClassNames>;
  showOutsideDays?: boolean;
  captionLayout?: 'label' | 'dropdown';
  buttonVariant?: React.ComponentProps<typeof Button>['variant'];
  mode?: 'single' | 'multiple' | 'range';
  selected?: Date | Date[] | { from?: Date; to?: Date };
  onSelect?: (date: Date | Date[] | { from?: Date; to?: Date } | undefined) => void;
  disabled?: (date: Date) => boolean;
  fromDate?: Date;
  toDate?: Date;
  numberOfMonths?: number;
}
```

#### 使用示例
```tsx
// 基础用法（单选模式）
import { useState } from 'react';

function MyCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}

// 多选模式
function MultiSelectCalendar() {
  const [dates, setDates] = useState<Date[]>([]);

  return (
    <Calendar
      mode="multiple"
      selected={dates}
      onSelect={setDates}
      className="rounded-md border"
    />
  );
}

// 范围选择模式
function RangeCalendar() {
  const [range, setRange] = useState<{ from?: Date; to?: Date }>({});

  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      className="rounded-md border"
    />
  );
}

// 禁用特定日期
function DisabledCalendar() {
  const disabledDates = (date: Date) => {
    // 禁用周末
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  return (
    <Calendar
      mode="single"
      disabled={disabledDates}
      className="rounded-md border"
    />
  );
}

// 限制日期范围
function LimitedCalendar() {
  return (
    <Calendar
      mode="single"
      fromDate={new Date(2024, 0, 1)}
      toDate={new Date(2024, 11, 31)}
      className="rounded-md border"
    />
  );
}

// 多个月份
function MultiMonthCalendar() {
  return (
    <Calendar
      mode="single"
      numberOfMonths={2}
      className="rounded-md border"
    />
  );
}
```

#### 模式
- `single`: 单选模式
- `multiple`: 多选模式
- `range`: 范围选择模式

#### 配置项
- `captionLayout`: 标题布局（'label' | 'dropdown'）
- `showOutsideDays`: 是否显示外部日期（默认 true）
- `buttonVariant`: 按钮变体
- `numberOfMonths`: 显示月份数量
- `fromDate`: 最小可选日期
- `toDate`: 最大可选日期
- `disabled`: 禁用日期函数

#### 可访问性
- 支持键盘导航
- 自动添加 ARIA 属性
- 支持屏幕阅读器
- 支持焦点管理

---

## 使用建议

### 何时使用这些组件
- **Input**: 单行文本输入（用户名、邮箱、密码等）
- **Textarea**: 多行文本输入（描述、评论、留言等）
- **Checkbox**: 多选场景（兴趣爱好、权限选择等）
- **RadioGroup**: 单选场景（性别、语言、主题等）
- **Switch**: 二元状态切换（启用/禁用、开/关等）
- **Slider**: 数值范围选择（价格、数量、进度等）
- **Select**: 从固定选项中选择（分类、排序、筛选等）
- **Label**: 所有表单元素的标签
- **Form**: 复杂表单（需要验证、状态管理）
- **Calendar**: 日期选择（生日、预约、行程等）

### 如何组合使用

#### Input + Label + Form
```tsx
<Form>
  <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel>邮箱</FormLabel>
        <FormControl>
          <Input type="email" placeholder="your@email.com" {...field} />
        </FormControl>
        <FormDescription>
          我们会发送验证邮件到您的邮箱
        </FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
</Form>
```

#### Checkbox + Label
```tsx
<div className="flex items-center gap-2">
  <Checkbox id="agree" />
  <Label htmlFor="agree">我同意服务条款</Label>
</div>
```

#### RadioGroup + Label
```tsx
<RadioGroup defaultValue="default">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">默认主题</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="dark" id="r2" />
    <Label htmlFor="r2">深色主题</Label>
  </div>
</RadioGroup>
```

#### Switch + Label
```tsx
<div className="flex items-center gap-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">启用通知</Label>
</div>
```

#### Form + Select + Slider
```tsx
<Form>
  <FormField
    control={form.control}
    name="category"
    render={({ field }) => (
      <FormItem>
        <FormLabel>分类</FormLabel>
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="选择分类" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectItem value="tech">科技</SelectItem>
            <SelectItem value="design">设计</SelectItem>
            <SelectItem value="business">商业</SelectItem>
          </SelectContent>
        </Select>
      </FormItem>
    )}
  />

  <FormField
    control={form.control}
    name="budget"
    render={({ field }) => (
      <FormItem>
        <FormLabel>预算</FormLabel>
        <FormControl>
          <Slider
            min={0}
            max={10000}
            step={100}
            value={[field.value]}
            onValueChange={(vals) => field.onChange(vals[0])}
          />
        </FormControl>
      </FormItem>
    )}
  />
</Form>
```

### 性能优化建议
- **Select**: 使用 `position="popper"` 提升性能
- **Form**: 使用 `useForm` 的默认值避免不必要的重渲染
- **Calendar**: 限制 `numberOfMonths` 数量
- **Slider**: 避免频繁的 `onValueChange` 回调

---

## 最佳实践

### Input 和 Textarea
```tsx
// ✅ 推荐：提供 placeholder 和 label
<Label htmlFor="email">邮箱</Label>
<Input id="email" type="email" placeholder="your@email.com" />

// ❌ 避免：缺少 label
<Input type="email" placeholder="your@email.com" />

// ✅ 推荐：设置 input 类型
<Input type="email" placeholder="邮箱" />
<Input type="number" placeholder="年龄" />

// ❌ 避免：所有输入都用 text
<Input placeholder="年龄" />
```

### Checkbox 和 Switch
```tsx
// ✅ 推荐：配合 Label 使用
<div className="flex items-center gap-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">启用通知</Label>
</div>

// ❌ 避免：缺少可访问性
<Switch />
<span>启用通知</span>

// ✅ 推荐：使用明确的文案
<Checkbox id="agree" />
<Label htmlFor="agree">我同意服务条款和隐私政策</Label>

// ❌ 避免：模糊的描述
<Checkbox />
<Label>勾选</Label>
```

### RadioGroup
```tsx
// ✅ 推荐：使用 RadioGroup 容器
<RadioGroup defaultValue="option1">
  <RadioGroupItem value="option1" id="r1" />
  <Label htmlFor="r1">选项 1</Label>
  <RadioGroupItem value="option2" id="r2" />
  <Label htmlFor="r2">选项 2</Label>
</RadioGroup>

// ❌ 避免：多个 RadioGroup 分散
<div>
  <RadioGroupItem value="option1" />
  <RadioGroupItem value="option2" />
</div>
<div>
  <RadioGroupItem value="option3" />
  <RadioGroupItem value="option4" />
</div>
```

### Form
```tsx
// ✅ 推荐：使用 Zod 验证
const formSchema = z.object({
  username: z.string().min(2),
  email: z.string().email(),
});

const form = useForm({
  resolver: zodResolver(formSchema),
  defaultValues: { username: '', email: '' },
});

// ❌ 避免：缺少验证
const form = useForm({
  defaultValues: { username: '', email: '' },
});
```

### Calendar
```tsx
// ✅ 推荐：限制日期范围
<Calendar
  fromDate={new Date()}
  toDate={new Date(2025, 11, 31)}
  mode="single"
/>

// ❌ 避免：无限制日期选择
<Calendar mode="single" />

// ✅ 推荐：提供日期说明
<div className="space-y-2">
  <Label>选择日期</Label>
  <Calendar mode="single" />
  <p className="text-sm text-muted-foreground">
    请选择预约日期
  </p>
</div>
```

---

## 常见问题解答

### Q: Input 和 Textarea 如何自动调整高度？
A: Textarea 使用 `field-sizing-content` CSS 属性自动调整高度。Input 只支持固定高度。

### Q: Checkbox 的 `indeterminate` 状态是什么？
A: `indeterminate` 表示部分选中状态，常见于全选/取消全选场景。需要手动设置 DOM 元素的 `indeterminate` 属性。

```tsx
function SelectAll() {
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);

  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <Checkbox
      ref={checkboxRef}
      checked={checked}
      onCheckedChange={(checked) => {
        setChecked(!!checked);
        setIndeterminate(false);
      }}
    />
  );
}
```

### Q: Form 组件是否支持服务器端验证？
A: 支持。可以在 `onSubmit` 函数中进行服务器端验证，然后使用 `form.setError` 设置错误信息。

### Q: Calendar 组件如何限制日期范围？
A: 使用 `fromDate` 和 `toDate` 属性限制可选日期范围。对于复杂的禁用逻辑，使用 `disabled` 函数。

```tsx
<Calendar
  fromDate={new Date(2024, 0, 1)}
  toDate={new Date(2024, 11, 31)}
  disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
  mode="single"
/>
```

### Q: Select 组件的 `position` 属性有什么区别？
A: `position="item-aligned"` 是默认值，下拉内容与触发器对齐。`position="popper"` 使用 popper 定位，可以更灵活地控制位置。

### Q: 如何实现自定义验证？
A: Form 组件支持多种验证方案：
- **Zod**: 使用 `zodResolver`
- **Yup**: 使用 `yupResolver`
- **自定义验证**: 在 `render` 函数中使用 `form.setError`

```tsx
<FormField
  control={form.control}
  name="password"
  render={({ field }) => (
    <FormItem>
      <FormLabel>密码</FormLabel>
      <FormControl>
        <Input type="password" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
  rules={{
    validate: (value) => {
      if (value.length < 8) {
        return '密码至少8个字符';
      }
      if (!/[A-Z]/.test(value)) {
        return '密码必须包含大写字母';
      }
      return true;
    },
  }}
/>
```

---

## 相关文档

- [shadcn/ui 官方文档 - Form](https://ui.shadcn.com/docs/components/form)
- [shadcn/ui 官方文档 - Input](https://ui.shadcn.com/docs/components/input)
- [shadcn/ui 官方文档 - Select](https://ui.shadcn.com/docs/components/select)
- [shadcn/ui 官方文档 - Calendar](https://ui.shadcn.com/docs/components/calendar)
- [react-hook-form 文档](https://react-hook-form.com/)
- [Zod 文档](https://zod.dev/)
- [react-day-picker 文档](https://daypicker.dev/)
- [Radix UI 文档](https://www.radix-ui.com/)

---

## 版本历史

### v1.0 (2025-02-03)
- ✅ 创建初始文档
- ✅ 添加 10 个表单组件的完整文档
- ✅ 添加使用示例和最佳实践
- ✅ 添加常见问题解答
- ✅ 添加 Form 组件的 Zod 验证示例
