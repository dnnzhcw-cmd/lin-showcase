# Component Props 类型定义文档

## 版本信息
- **文档版本**: v1.0
- **创建日期**: 2025-02-03
- **最后更新**: 2025-02-03
- **状态**: ✅ 已完成
- **作者**: AI Assistant
- **文件路径**: `context/types/component-props.md`

## 概述
本文档汇总了 ClueBoard 项目中所有自定义组件的 Props 类型定义，包括布局组件、页面区块组件和 UI 组件。这些类型定义提供了组件的输入参数说明，便于开发者理解和使用组件。

## 布局组件 Props

### NavigationBarProps
```typescript
// 组件文件: src/components/layout/NavigationBar.tsx
// 该组件目前没有导出 Props 接口
```

**内部状态**:
```typescript
const [activeSection, setActiveSection] = useState('hero');
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [showScrollTop, setShowScrollTop] = useState(false);
```

### FooterProps
```typescript
// 组件文件: src/components/layout/Footer.tsx
// 该组件目前没有 Props，是一个纯展示组件
```

## 页面区块组件 Props

### NoteCardProps
```typescript
// 组件文件: src/components/ui/NoteCard.tsx
export interface NoteCardProps {
  id: string;                                                          // 卡片唯一标识
  title: string;                                                       // 卡片标题
  description?: string;                                                // 卡片描述
  status?: 'not-started' | 'in-progress' | 'completed';               // 卡片状态
  onStatusChange?: (                                                   // 状态变更回调
    id: string,
    newStatus: 'not-started' | 'in-progress' | 'completed'
  ) => void;
  onClick?: () => void;                                                // 点击回调
  className?: string;                                                  // 自定义类名
  children?: React.ReactNode;                                          // 子内容
}
```

**状态类型**:
```typescript
type NoteStatus = 'not-started' | 'in-progress' | 'completed';
```

**使用示例**:
```typescript
<NoteCard
  id="task-1"
  title="完成项目文档"
  description="编写项目的技术文档和用户手册"
  status="in-progress"
  onStatusChange={(id, newStatus) => console.log(id, newStatus)}
/>
```

### InfoCardProps
```typescript
// 组件文件: src/components/ui/InfoCard.tsx
export interface InfoCardProps {
  title: string;                              // 卡片标题
  description?: string;                       // 卡片描述
  variant?: CardVariant;                      // 颜色变体
  icon?: React.ReactNode;                     // 图标组件
  children?: React.ReactNode;                 // 子内容
  className?: string;                         // 自定义类名
  progress?: number;                          // 进度百分比（0-100）
}

export type CardVariant = 'blue' | 'yellow' | 'green';
```

**变体类型**:
```typescript
type CardVariant = 'blue' | 'yellow' | 'green';
```

**使用示例**:
```typescript
<InfoCard
  variant="blue"
  title="技术实现"
  description="使用 Next.js 和 TypeScript 开发"
  icon={<Code />}
  progress={100}
/>
```

### PainPoint（PainPointsSection 内部类型）
```typescript
// 组件文件: src/components/sections/PainPointsSection.tsx
interface PainPoint extends Omit<NoteCardProps, 'status' | 'onStatusChange'> {
  id: string;
  status: 'not-started' | 'in-progress' | 'completed';
}
```

**使用示例**:
```typescript
const painPoints: PainPoint[] = [
  {
    id: 'pain-1',
    title: '记不住事',
    description: '不紧急但重要的长期任务，总在忙碌中遗忘',
    status: 'not-started',
  },
];
```

### Insight（LearningJourneySection 内部类型）
```typescript
// 组件文件: src/components/sections/LearningJourneySection.tsx
interface Insight {
  title: string;        // 洞察标题
  content: string;      // 洞察内容
  icon: string;         // 图标（Emoji）
}
```

**使用示例**:
```typescript
const insights: Insight[] = [
  {
    icon: '🧠',
    title: '认知的跃迁',
    content: '从"编程是技术活"到"编程是表达工具"的转变',
  },
];
```

### LearningPath（LearningJourneySection 内部类型）
```typescript
// 组件文件: src/components/sections/LearningJourneySection.tsx
interface LearningPath {
  step: number;         // 步骤编号
  title: string;        // 步骤标题
  description: string;  // 步骤描述
  details: string[];    // 详细说明列表
}
```

**使用示例**:
```typescript
const learningPath: LearningPath[] = [
  {
    step: 1,
    title: '需求发现',
    description: '从自身痛点出发',
    details: [
      '记录日常任务管理中的困惑',
      '梳理现有工具的不足',
    ],
  },
];
```

### ComparisonData（CompetitorComparisonSection 内部类型）
```typescript
// 组件文件: src/components/sections/CompetitorComparisonSection.tsx
interface ComparisonData {
  dimension: string;           // 对比维度
  clueboard: string;           // ClueBoard 特点
  competitor1: string;         // 竞品1特点
  competitor2: string;         // 竞品2特点
  highlight?: boolean;         // 是否为差异化优势
}
```

**使用示例**:
```typescript
const comparisonData: ComparisonData[] = [
  {
    dimension: '核心痛点',
    clueboard: '遗忘非紧急但重要的事项',
    competitor1: '多身份交织导致注意力分散',
    competitor2: '团队协作场景下的任务跟踪',
  },
];
```

## Hooks 类型

### useIsMobile 返回值
```typescript
// 文件: src/hooks/use-mobile.ts
function useIsMobile(): boolean
```

**说明**: 返回当前设备是否为移动设备（屏幕宽度 < 768px）。

**使用示例**:
```typescript
const isMobile = useIsMobile();

if (isMobile) {
  // 移动端布局
} else {
  // 桌面端布局
}
```

## 通用类型

### ClassValue（utils.ts）
```typescript
// 文件: src/lib/utils.ts
import { type ClassValue } from 'clsx';
```

**说明**: `cn` 函数的参数类型，支持字符串、对象、数组等。

**使用示例**:
```typescript
cn('px-4 py-2', { 'bg-red-500': isActive }, className)
```

## 类型命名规范

### 组件 Props
- 命名格式：`{ComponentName}Props`
- 示例：`NoteCardProps`、`InfoCardProps`

### 内部类型
- 命名格式：`{TypeName}`（首字母大写）
- 示例：`Insight`、`LearningPath`、`ComparisonData`

### 枚举/联合类型
- 命名格式：`{TypeName}`（首字母大写）
- 示例：`CardVariant`、`NoteStatus`

## 最佳实践

### 1. Props 接口定义
```typescript
// ✅ 推荐：使用 interface
export interface NoteCardProps {
  id: string;
  title: string;
}

// ✅ 也可以：使用 type
export type NoteCardProps = {
  id: string;
  title: string;
};
```

### 2. 可选属性
```typescript
// ✅ 推荐：使用 ? 标记可选属性
export interface InfoCardProps {
  title: string;
  description?: string;  // 可选
}
```

### 3. 回调函数类型
```typescript
// ✅ 推荐：明确参数和返回值
export interface NoteCardProps {
  onStatusChange?: (
    id: string,
    newStatus: 'not-started' | 'in-progress' | 'completed'
  ) => void;
}
```

### 4. React 节点类型
```typescript
// ✅ 推荐：使用 React.ReactNode
export interface InfoCardProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
}
```

### 5. 扩展类型
```typescript
// ✅ 推荐：使用 Omit 或 Pick
interface PainPoint extends Omit<NoteCardProps, 'status' | 'onStatusChange'> {
  id: string;
  status: NoteStatus;
}
```

## 常见问题

### Q: 何时使用 interface vs type？
A: 
- 使用 `interface`：定义对象结构、扩展接口
- 使用 `type`：定义联合类型、交叉类型、元组

### Q: 如何处理可选回调？
A: 使用可选属性和类型保护：
```typescript
const handleStatusChange = (id: string, newStatus: NoteStatus) => {
  if (onStatusChange) {
    onStatusChange(id, newStatus);
  }
};
```

### Q: 如何定义复杂的联合类型？
A: 使用 type 定义并导出：
```typescript
export type NoteStatus = 'not-started' | 'in-progress' | 'completed';
```

## 相关文档

- [项目结构文档](../arch/project-structure.md)
- [NoteCard 组件文档](../modules/ui/note-card.md)
- [InfoCard 组件文档](../modules/ui/info-card.md)
- [全局摘要](../_global.md)

## 版本历史

### v1.0 (2025-02-03)
- ✅ 创建初始文档
- ✅ 汇总所有组件 Props 类型定义
- ✅ 添加使用示例和最佳实践
