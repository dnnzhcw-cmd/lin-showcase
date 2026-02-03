# shadcn/ui 数据展示组件文档

## 版本信息
- **文档版本**: v1.0
- **创建日期**: 2025-02-03
- **shadcn/ui 版本**: latest
- **状态**: ✅ 已完成

## 概述

本文档介绍 shadcn/ui 中的 9 个数据展示组件，这些组件用于展示和呈现数据、内容分组、导航结构等。

### 组件列表
1. **Table** - 表格（8个子组件）
2. **Card** - 卡片（7个子组件）
3. **Alert** - 警告（3个子组件）
4. **Progress** - 进度条
5. **ScrollArea** - 滚动区域（2个子组件）
6. **Breadcrumb** - 面包屑（7个子组件）
7. **Pagination** - 分页（7个子组件）
8. **Tabs** - 标签页（4个子组件）
9. **Chart** - 图表（基于 recharts）

### 使用场景
- 表格化数据展示
- 内容分组和卡片布局
- 提示和警告信息
- 进度显示
- 可滚动内容区域
- 面包屑导航
- 分页导航
- 标签页切换
- 数据可视化图表

### 注意事项
- 原计划中的 Callout、DataGrid、DataList 组件在当前项目中不存在
- 本文档基于项目实际存在的 9 个数据展示组件编写

---

## 组件详解

### 1. Table（表格）

#### 功能说明
Table 组件用于展示结构化的表格数据，包含多个子组件用于构建完整的表格结构。

#### Props 接口
```typescript
// Table 容器
interface TableProps extends React.ComponentProps<'table'> {}

// TableHeader 表头
interface TableHeaderProps extends React.ComponentProps<'thead'> {}

// TableBody 表体
interface TableBodyProps extends React.ComponentProps<'tbody'> {}

// TableFooter 表尾
interface TableFooterProps extends React.ComponentProps<'tfoot'> {}

// TableRow 行
interface TableRowProps extends React.ComponentProps<'tr'> {}

// TableHead 表头单元格
interface TableHeadProps extends React.ComponentProps<'th'> {}

// TableCell 数据单元格
interface TableCellProps extends React.ComponentProps<'td'> {}

// TableCaption 标题
interface TableCaptionProps extends React.ComponentProps<'caption'> {}
```

#### 使用示例
```tsx
// 基础用法
<Table>
  <TableCaption>用户列表</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>姓名</TableHead>
      <TableHead>邮箱</TableHead>
      <TableHead>状态</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>张三</TableCell>
      <TableCell>zhang@example.com</TableCell>
      <TableCell>活跃</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>李四</TableCell>
      <TableCell>li@example.com</TableCell>
      <TableCell>离线</TableCell>
    </TableRow>
  </TableBody>
</Table>

// 带复选框
<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[50px]">
        <Checkbox />
      </TableHead>
      <TableHead>产品</TableHead>
      <TableHead>价格</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell><Checkbox /></TableCell>
      <TableCell>产品 A</TableCell>
      <TableCell>$100</TableCell>
    </TableRow>
  </TableBody>
</Table>

// 带状态
<Table>
  <TableBody>
    <TableRow data-state="selected">
      <TableCell>选中行</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>普通行</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

#### 子组件
- **Table**: 表格容器（包含自动横向滚动）
- **TableHeader**: 表头区域
- **TableBody**: 表格数据区域
- **TableFooter**: 表尾区域
- **TableRow**: 表格行
- **TableHead**: 表头单元格
- **TableCell**: 数据单元格
- **TableCaption**: 表格标题

#### 特性
- 自动横向滚动支持
- 最后一行无边框
- 支持悬停效果
- 支持选中状态（`data-state="selected"`）
- 自动处理复选框对齐

#### 可访问性
- 语义化的 HTML 表格结构
- 支持屏幕阅读器
- 自动添加 ARIA 属性

---

### 2. Card（卡片）

#### 功能说明
Card 组件用于内容分组和展示，包含标题、描述、内容、底部等多个区域。

#### Props 接口
```typescript
// Card 容器
interface CardProps extends React.ComponentProps<'div'> {}

// CardHeader 头部
interface CardHeaderProps extends React.ComponentProps<'div'> {}

// CardTitle 标题
interface CardTitleProps extends React.ComponentProps<'div'> {}

// CardDescription 描述
interface CardDescriptionProps extends React.ComponentProps<'div'> {}

// CardAction 操作按钮
interface CardActionProps extends React.ComponentProps<'div'> {}

// CardContent 内容区域
interface CardContentProps extends React.ComponentProps<'div'> {}

// CardFooter 底部
interface CardFooterProps extends React.ComponentProps<'div'> {}
```

#### 使用示例
```tsx
// 基础用法
<Card>
  <CardHeader>
    <CardTitle>卡片标题</CardTitle>
    <CardDescription>这是卡片的描述信息</CardDescription>
  </CardHeader>
  <CardContent>
    <p>这里是卡片的主要内容</p>
  </CardContent>
  <CardFooter>
    <Button>确认</Button>
  </CardFooter>
</Card>

// 带操作按钮
<Card>
  <CardHeader>
    <CardTitle>用户设置</CardTitle>
    <CardAction>
      <Button variant="ghost" size="icon">
        <MoreHorizontalIcon />
      </Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    {/* 内容 */}
  </CardContent>
</Card>

// 多列卡片
<div className="grid gap-4 md:grid-cols-2">
  <Card>
    <CardHeader>
      <CardTitle>卡片 1</CardTitle>
    </CardHeader>
    <CardContent>内容 1</CardContent>
  </Card>
  <Card>
    <CardHeader>
      <CardTitle>卡片 2</CardTitle>
    </CardHeader>
    <CardContent>内容 2</CardContent>
  </Card>
</div>
```

#### 子组件
- **Card**: 卡片容器
- **CardHeader**: 头部区域
- **CardTitle**: 标题
- **CardDescription**: 描述文本
- **CardAction**: 操作按钮（右上角）
- **CardContent**: 主要内容区域
- **CardFooter**: 底部操作区域

#### 特性
- 圆角和阴影设计
- 响应式布局
- 支持边框分隔（`.border-b` 和 `.border-t`）
- 自动处理操作按钮位置

#### 可访问性
- 语义化的结构
- 支持屏幕阅读器

---

### 3. Alert（警告）

#### 功能说明
Alert 组件用于展示警告、错误、成功等信息提示。

#### Props 接口
```typescript
interface AlertProps extends React.ComponentProps<'div'> {
  variant?: 'default' | 'destructive';
}

interface AlertTitleProps extends React.ComponentProps<'div'> {}

interface AlertDescriptionProps extends React.ComponentProps<'div'> {}
```

#### 使用示例
```tsx
// 默认样式
<Alert>
  <InfoIcon />
  <AlertTitle>提示</AlertTitle>
  <AlertDescription>
    这是一条提示信息
  </AlertDescription>
</Alert>

// 危险样式
<Alert variant="destructive">
  <AlertCircleIcon />
  <AlertTitle>错误</AlertTitle>
  <AlertDescription>
    操作失败，请重试
  </AlertDescription>
</Alert>

// 成功样式（自定义）
<Alert className="border-green-500 bg-green-50">
  <CheckIcon />
  <AlertTitle>成功</AlertTitle>
  <AlertDescription>
    操作已成功完成
  </AlertDescription>
</Alert>
```

#### 变体
- `default`: 默认样式
- `destructive`: 危险/错误样式

#### 子组件
- **Alert**: 警告容器
- **AlertTitle**: 标题
- **AlertDescription**: 描述文本

#### 特性
- 支持 Grid 布局
- 图标和文本自动对齐
- 标题单行显示（`line-clamp-1`）
- 描述支持多段文本

#### 可访问性
- 自动添加 `role="alert"`
- 支持屏幕阅读器

---

### 4. Progress（进度条）

#### 功能说明
Progress 组件用于显示任务进度或加载进度。

#### Props 接口
```typescript
interface ProgressProps extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  value?: number;
  max?: number;
}
```

#### 使用示例
```tsx
// 基础用法
<Progress value={33} />

// 不同进度值
<Progress value={0} />
<Progress value={50} />
<Progress value={100} />

// 自定义样式
<Progress value={75} className="h-4" />

// 受控组件
function MyComponent() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 10;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <Progress value={progress} />;
}
```

#### 配置
- `value`: 当前进度值（0-100）
- `max`: 最大值（默认 100）

#### 特性
- 圆角设计
- 平滑过渡动画
- 自动计算进度宽度

#### 可访问性
- 支持屏幕阅读器
- 自动添加 ARIA 属性

---

### 5. ScrollArea（滚动区域）

#### 功能说明
ScrollArea 组件用于创建可滚动的内容区域，自动添加滚动条。

#### Props 接口
```typescript
// ScrollArea 容器
interface ScrollAreaProps extends React.ComponentProps<typeof ScrollAreaPrimitive.Root> {
  children: React.ReactNode;
}

// ScrollBar 滚动条
interface ScrollBarProps extends React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> {
  orientation?: 'vertical' | 'horizontal';
}
```

#### 使用示例
```tsx
// 基础用法
<ScrollArea className="h-[200px] w-[350px]">
  <div className="p-4">
    {/* 长内容 */}
  </div>
</ScrollArea>

// 固定高度
<ScrollArea className="h-[500px]">
  <div className="p-4">
    <Table>
      {/* 大量数据表格 */}
    </Table>
  </div>
</ScrollArea>

// 水平滚动
<ScrollArea className="w-full">
  <div className="flex gap-4 p-4">
    {/* 宽内容 */}
  </div>
</ScrollArea>
```

#### 子组件
- **ScrollArea**: 滚动区域容器
- **ScrollBar**: 滚动条

#### 方向
- `vertical`: 垂直滚动（默认）
- `horizontal`: 水平滚动

#### 特性
- 自动显示/隐藏滚动条
- 自定义滚动条样式
- 支持触控设备
- 继承父元素的圆角

#### 可访问性
- 支持键盘导航
- 支持屏幕阅读器

---

### 6. Breadcrumb（面包屑）

#### 功能说明
Breadcrumb 组件用于展示页面导航路径，帮助用户了解当前位置。

#### Props 接口
```typescript
// Breadcrumb 容器
interface BreadcrumbProps extends React.ComponentProps<'nav'> {}

// BreadcrumbList 列表
interface BreadcrumbListProps extends React.ComponentProps<'ol'> {}

// BreadcrumbItem 项
interface BreadcrumbItemProps extends React.ComponentProps<'li'> {}

// BreadcrumbLink 链接
interface BreadcrumbLinkProps extends React.ComponentProps<'a'> {
  asChild?: boolean;
}

// BreadcrumbPage 当前页面
interface BreadcrumbPageProps extends React.ComponentProps<'span'> {}

// BreadcrumbSeparator 分隔符
interface BreadcrumbSeparatorProps extends React.ComponentProps<'li'> {}

// BreadcrumbEllipsis 省略号
interface BreadcrumbEllipsisProps extends React.ComponentProps<'span'> {}
```

#### 使用示例
```tsx
// 基础用法
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">首页</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/products">产品</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>产品详情</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

// 带省略号
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">首页</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbEllipsis />
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>当前页面</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

// 自定义分隔符
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">首页</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <SlashIcon />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbPage>当前页面</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

#### 子组件
- **Breadcrumb**: 面包屑容器
- **BreadcrumbList**: 列表容器
- **BreadcrumbItem**: 单个面包屑项
- **BreadcrumbLink**: 可点击的链接
- **BreadcrumbPage**: 当前页面（不可点击）
- **BreadcrumbSeparator**: 分隔符（默认 ChevronRight）
- **BreadcrumbEllipsis**: 省略号（用于长路径）

#### 特性
- 自动响应式折行
- 支持自定义分隔符
- 默认 ChevronRight 图标
- 当前页面自动加粗

#### 可访问性
- 自动添加 `aria-label="breadcrumb"`
- 支持屏幕阅读器
- 自动添加 ARIA 属性

---

### 7. Pagination（分页）

#### 功能说明
Pagination 组件用于分页导航，支持页码切换和省略显示。

#### Props 接口
```typescript
// Pagination 容器
interface PaginationProps extends React.ComponentProps<'nav'> {}

// PaginationContent 内容
interface PaginationContentProps extends React.ComponentProps<'ul'> {}

// PaginationItem 项
interface PaginationItemProps extends React.ComponentProps<'li'> {}

// PaginationLink 链接
interface PaginationLinkProps {
  isActive?: boolean;
  size?: React.ComponentProps<typeof Button>['size'];
} & React.ComponentProps<'a'>;

// PaginationPrevious 上一页
interface PaginationPreviousProps extends React.ComponentProps<typeof PaginationLink> {}

// PaginationNext 下一页
interface PaginationNextProps extends React.ComponentProps<typeof PaginationLink> {}

// PaginationEllipsis 省略号
interface PaginationEllipsisProps extends React.ComponentProps<'span'> {}
```

#### 使用示例
```tsx
// 基础用法
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>

// 带省略号
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationEllipsis />
    <PaginationItem>
      <PaginationLink href="#" isActive>5</PaginationLink>
    </PaginationItem>
    <PaginationEllipsis />
    <PaginationItem>
      <PaginationLink href="#">10</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>

// 受控组件
function MyPagination() {
  const [page, setPage] = useState(1);
  const totalPages = 10;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
          />
        </PaginationItem>
        {/* 页码 */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => setPage(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
```

#### 子组件
- **Pagination**: 分页容器
- **PaginationContent**: 内容容器
- **PaginationItem**: 单个分页项
- **PaginationLink**: 页码链接
- **PaginationPrevious**: 上一页按钮
- **PaginationNext**: 下一页按钮
- **PaginationEllipsis**: 省略号

#### 特性
- 支持激活状态（`isActive`）
- 响应式文字显示
- 默认 Previous/Next 文本
- 基于 Button 组件的样式

#### 可访问性
- 自动添加 `aria-label`
- 支持键盘导航
- 支持屏幕阅读器

---

### 8. Tabs（标签页）

#### 功能说明
Tabs 组件用于创建可切换的内容标签页。

#### Props 接口
```typescript
// Tabs 容器
interface TabsProps extends React.ComponentProps<typeof TabsPrimitive.Root> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

// TabsList 标签列表
interface TabsListProps extends React.ComponentProps<typeof TabsPrimitive.List> {}

// TabsTrigger 标签触发器
interface TabsTriggerProps extends React.ComponentProps<typeof TabsPrimitive.Trigger> {
  value: string;
}

// TabsContent 标签内容
interface TabsContentProps extends React.ComponentProps<typeof TabsPrimitive.Content> {
  value: string;
}
```

#### 使用示例
```tsx
// 基础用法
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">标签 1</TabsTrigger>
    <TabsTrigger value="tab2">标签 2</TabsTrigger>
    <TabsTrigger value="tab3">标签 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>标签 1 的内容</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>标签 2 的内容</p>
  </TabsContent>
  <TabsContent value="tab3">
    <p>标签 3 的内容</p>
  </TabsContent>
</Tabs>

// 受控组件
function MyTabs() {
  const [value, setValue] = useState('tab1');

  return (
    <Tabs value={value} onValueChange={setValue}>
      <TabsList>
        <TabsTrigger value="tab1">概览</TabsTrigger>
        <TabsTrigger value="tab2">详情</TabsTrigger>
        <TabsTrigger value="tab3">设置</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        {/* 概览内容 */}
      </TabsContent>
      <TabsContent value="tab2">
        {/* 详情内容 */}
      </TabsContent>
      <TabsContent value="tab3">
        {/* 设置内容 */}
      </TabsContent>
    </Tabs>
  );
}

// 带图标
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">
      <UserIcon />
      账户
    </TabsTrigger>
    <TabsTrigger value="password">
      <LockIcon />
      密码
    </TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    {/* 账户内容 */}
  </TabsContent>
  <TabsContent value="password">
    {/* 密码内容 */}
  </TabsContent>
</Tabs>
```

#### 子组件
- **Tabs**: 标签页容器
- **TabsList**: 标签列表
- **TabsTrigger**: 单个标签触发器
- **TabsContent**: 标签内容

#### 特性
- 支持受控和非受控模式
- 自动激活样式
- 平滑过渡动画
- 支持图标和文本

#### 可访问性
- 支持键盘导航（←/→）
- 自动添加 ARIA 属性
- 支持屏幕阅读器

---

### 9. Chart（图表）

#### 功能说明
Chart 组件基于 Recharts，用于数据可视化展示。

#### Props 接口
```typescript
// ChartConfig 配置
type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
}

// ChartContainer 容器
interface ChartContainerProps extends React.ComponentProps<'div'> {
  config: ChartConfig;
  children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>['children'];
}

// ChartTooltipContent 提示框内容
interface ChartTooltipContentProps extends React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentProps<'div'> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: 'line' | 'dot' | 'dashed';
    nameKey?: string;
    labelKey?: string;
  };
```

#### 使用示例
```tsx
// 基础用法 - 柱状图
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const chartData = [
  { month: '1月', desktop: 186, mobile: 80 },
  { month: '2月', desktop: 305, mobile: 200 },
  { month: '3月', desktop: 237, mobile: 120 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2563eb',
  },
  mobile: {
    label: 'Mobile',
    color: '#f97316',
  },
};

function MyChart() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart data={chartData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Bar dataKey="desktop" fill="var(--color-desktop)" />
        <Bar dataKey="mobile" fill="var(--color-mobile)" />
      </BarChart>
    </ChartContainer>
  );
}

// 折线图
import { Line, LineChart, XAxis, YAxis } from 'recharts';

function LineChartExample() {
  return (
    <ChartContainer config={chartConfig}>
      <LineChart data={chartData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Line
          type="monotone"
          dataKey="desktop"
          stroke="var(--color-desktop)"
        />
      </LineChart>
    </ChartContainer>
  );
}

// 饼图
import { Pie, PieChart } from 'recharts';

function PieChartExample() {
  return (
    <ChartContainer config={chartConfig}>
      <PieChart data={chartData}>
        <Pie dataKey="desktop" />
      </PieChart>
    </ChartContainer>
  );
}
```

#### 组件
- **ChartContainer**: 图表容器
- **ChartTooltip**: 提示框
- **ChartTooltipContent**: 提示框内容

#### 支持的图表类型
- BarChart - 柱状图
- LineChart - 折线图
- PieChart - 饼图
- AreaChart - 面积图
- 以及 Recharts 支持的所有图表类型

#### 特性
- 响应式设计
- 支持深色/浅色主题
- 自定义颜色配置
- 自定义提示框内容

#### 可访问性
- 支持屏幕阅读器
- 自动添加 ARIA 属性

---

## 使用建议

### 何时使用这些组件
- **Table**: 展示结构化的列表数据（用户列表、订单列表等）
- **Card**: 内容分组和展示（产品卡片、文章卡片等）
- **Alert**: 提示和警告信息（成功提示、错误警告等）
- **Progress**: 显示进度（文件上传、任务进度等）
- **ScrollArea**: 可滚动内容区域（长列表、聊天记录等）
- **Breadcrumb**: 展示导航路径（商品详情页等）
- **Pagination**: 分页导航（数据列表分页等）
- **Tabs**: 标签页切换（设置页面、详情页面等）
- **Chart**: 数据可视化（销售统计、用户分析等）

### 如何组合使用

#### Table + Pagination + ScrollArea
```tsx
<div className="space-y-4">
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>姓名</TableHead>
        <TableHead>邮箱</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {/* 数据行 */}
    </TableBody>
  </Table>

  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href="#" />
      </PaginationItem>
      {/* 页码 */}
      <PaginationItem>
        <PaginationNext href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
</div>
```

#### Card + Tabs
```tsx
<Card>
  <CardHeader>
    <CardTitle>用户设置</CardTitle>
  </CardHeader>
  <CardContent>
    <Tabs defaultValue="profile">
      <TabsList>
        <TabsTrigger value="profile">个人资料</TabsTrigger>
        <TabsTrigger value="security">安全设置</TabsTrigger>
        <TabsTrigger value="notifications">通知</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        {/* 个人资料表单 */}
      </TabsContent>
      <TabsContent value="security">
        {/* 安全设置 */}
      </TabsContent>
      <TabsContent value="notifications">
        {/* 通知设置 */}
      </TabsContent>
    </Tabs>
  </CardContent>
</Card>
```

#### Breadcrumb + Alert
```tsx
<div className="space-y-4">
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">首页</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>当前页面</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>

  <Alert>
    <InfoIcon />
    <AlertTitle>提示</AlertTitle>
    <AlertDescription>页面加载完成</AlertDescription>
  </Alert>
</div>
```

### 性能优化建议
- **Table**: 大数据量使用虚拟滚动
- **Card**: 避免在卡片内放置过多组件
- **ScrollArea**: 设置固定高度以优化渲染
- **Tabs**: 惰性加载未激活的标签内容
- **Chart**: 大数据量时使用采样或聚合

---

## 最佳实践

### Table
```tsx
// ✅ 推荐：添加表头和数据区分
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>姓名</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>张三</TableCell>
    </TableRow>
  </TableBody>
</Table>

// ❌ 避免：缺少表头
<Table>
  <tbody>
    <tr>
      <td>张三</td>
    </tr>
  </tbody>
</Table>

// ✅ 推荐：添加标题
<Table>
  <TableCaption>用户列表（共 10 条）</TableCaption>
  {/* 表格内容 */}
</Table>
```

### Card
```tsx
// ✅ 推荐：完整的卡片结构
<Card>
  <CardHeader>
    <CardTitle>标题</CardTitle>
    <CardDescription>描述</CardDescription>
  </CardHeader>
  <CardContent>
    内容
  </CardContent>
  <CardFooter>
    <Button>操作</Button>
  </CardFooter>
</Card>

// ❌ 避免：缺少描述或操作
<Card>
  <CardHeader>
    <CardTitle>标题</CardTitle>
  </CardHeader>
  <CardContent>内容</CardContent>
</Card>
```

### Alert
```tsx
// ✅ 推荐：提供明确的标题和描述
<Alert variant="destructive">
  <AlertCircleIcon />
  <AlertTitle>删除失败</AlertTitle>
  <AlertDescription>
    该项正在使用中，无法删除
  </AlertDescription>
</Alert>

// ❌ 避免：只有描述没有标题
<Alert>
  <InfoIcon />
  <AlertDescription>这是一条提示信息</AlertDescription>
</Alert>
```

### Breadcrumb
```tsx
// ✅ 推荐：完整的面包屑路径
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">首页</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/products">产品</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>产品详情</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

// ❌ 避免：只有一个面包屑项
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbPage>首页</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Pagination
```tsx
// ✅ 推荐：提供完整的分页导航
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>

// ❌ 避免：只有页码没有导航按钮
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationLink href="#" isActive>1</PaginationLink>
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

---

## 常见问题解答

### Q: Table 组件如何实现排序功能？
A: Table 组件本身不提供排序功能，需要结合状态管理实现。在 TableHeader 的点击事件中更新排序状态，然后对数据进行排序。

```tsx
function SortableTable() {
  const [sortConfig, setSortConfig] = useState({
    key: 'name',
    direction: 'asc',
  });

  const sortedData = data.sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead onClick={() => setSortConfig({
            key: 'name',
            direction: sortConfig.direction === 'asc' ? 'desc' : 'asc',
          })}>
            姓名 {sortConfig.key === 'name' && '↑'}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

### Q: Card 组件如何实现折叠/展开功能？
A: 可以结合状态管理控制 CardContent 的显示/隐藏。

```tsx
function CollapsibleCard() {
  const [expanded, setExpanded] = useState(true);

  return (
    <Card>
      <CardHeader>
        <CardTitle>可折叠卡片</CardTitle>
        <CardAction>
          <Button variant="ghost" size="icon" onClick={() => setExpanded(!expanded)}>
            {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Button>
        </CardAction>
      </CardHeader>
      {expanded && (
        <CardContent>
          可展开的内容
        </CardContent>
      )}
    </Card>
  );
}
```

### Q: Progress 组件如何显示不确定的进度？
A: 对于不确定的进度（如加载中），可以使用 Skeleton 组件或 Spinner 组件。

```tsx
// 不确定进度
{isLoading ? (
  <Spinner />
) : (
  <Progress value={progress} />
)}
```

### Q: Chart 组件如何自定义提示框内容？
A: 使用 `ChartTooltipContent` 组件，并提供自定义的 formatter 函数。

```tsx
<ChartTooltipContent
  formatter={(value, name) => (
    <div>
      <span className="font-medium">{name}:</span>
      <span className="ml-2">{value}</span>
    </div>
  )}
/>
```

### Q: Tabs 组件如何实现标签页的增删？
A: Tabs 组件本身不支持动态增删，需要结合状态管理实现。

```tsx
function DynamicTabs() {
  const [tabs, setTabs] = useState([
    { id: '1', label: '标签 1', content: '内容 1' },
    { id: '2', label: '标签 2', content: '内容 2' },
  ]);
  const [activeTab, setActiveTab] = useState('1');

  const addTab = () => {
    const newId = String(tabs.length + 1);
    setTabs([...tabs, {
      id: newId,
      label: `标签 ${newId}`,
      content: `内容 ${newId}`,
    }]);
    setActiveTab(newId);
  };

  const removeTab = (id: string) => {
    setTabs(tabs.filter(tab => tab.id !== id));
    if (activeTab === id && tabs.length > 1) {
      setActiveTab(tabs[0].id);
    }
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        {tabs.map(tab => (
          <div key={tab.id} className="flex">
            <TabsTrigger value={tab.id}>{tab.label}</TabsTrigger>
            <Button size="sm" onClick={() => removeTab(tab.id)}>×</Button>
          </div>
        ))}
        <Button size="sm" onClick={addTab}>+</Button>
      </TabsList>
      {tabs.map(tab => (
        <TabsContent key={tab.id} value={tab.id}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
```

---

## 相关文档

- [shadcn/ui 官方文档 - Table](https://ui.shadcn.com/docs/components/table)
- [shadcn/ui 官方文档 - Card](https://ui.shadcn.com/docs/components/card)
- [shadcn/ui 官方文档 - Alert](https://ui.shadcn.com/docs/components/alert)
- [shadcn/ui 官方文档 - Progress](https://ui.shadcn.com/docs/components/progress)
- [shadcn/ui 官方文档 - Breadcrumb](https://ui.shadcn.com/docs/components/breadcrumb)
- [shadcn/ui 官方文档 - Pagination](https://ui.shadcn.com/docs/components/pagination)
- [shadcn/ui 官方文档 - Tabs](https://ui.shadcn.com/docs/components/tabs)
- [shadcn/ui 官方文档 - Chart](https://ui.shadcn.com/docs/components/chart)
- [Recharts 文档](https://recharts.org/)
- [Radix UI 文档](https://www.radix-ui.com/)

---

## 版本历史

### v1.0 (2025-02-03)
- ✅ 创建初始文档
- ✅ 添加 9 个数据展示组件的完整文档
- ✅ 添加使用示例和最佳实践
- ✅ 添加常见问题解答
- ✅ 说明组件差异（Callout/DataGrid/DataList 不存在）
