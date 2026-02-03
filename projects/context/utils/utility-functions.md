# Utility Functions 文档

## 版本信息
- **文档版本**: v1.0
- **创建日期**: 2025-02-03
- **最后更新**: 2025-02-03
- **状态**: ✅ 已完成
- **作者**: AI Assistant
- **文件路径**: `src/lib/utils.ts`

## 概述
ClueBoard 项目使用了一个核心工具函数 `cn`，用于智能合并 Tailwind CSS 类名。这个函数基于 `clsx` 和 `tailwind-merge` 库，解决了 Tailwind CSS 类名冲突的问题，确保样式的正确优先级。

## 核心功能

### cn 函数
智能合并 Tailwind CSS 类名，自动处理冲突类名。

## 技术架构

### 依赖库
```json
{
  "clsx": "^2.1.0",          // 条件类名合并
  "tailwind-merge": "^2.2.0" // Tailwind 类名冲突解决
}
```

### 函数签名
```typescript
export function cn(...inputs: ClassValue[]): string
```

## 实现细节

### cn 函数实现
```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**工作原理**:
1. **clsx**: 处理条件类名，将数组、对象、字符串合并为类名字符串
2. **tailwind-merge**: 解决 Tailwind CSS 类名冲突，确保后定义的类名覆盖前面的

## 使用示例

### 基础使用
```typescript
cn('px-4 py-2 bg-red-500', 'text-white')
// 输出: "px-4 py-2 bg-red-500 text-white"
```

### 条件类名
```typescript
cn(
  'px-4 py-2',
  isActive ? 'bg-red-500' : 'bg-gray-500',
  isDisabled && 'opacity-50 cursor-not-allowed'
)
```

### 解决冲突类名
```typescript
cn('bg-red-500', 'bg-blue-500')
// 输出: "bg-blue-500" (后面的覆盖前面的)
```

### 对象语法
```typescript
cn({
  'px-4 py-2': true,
  'bg-red-500': isActive,
  'bg-gray-500': !isActive,
})
```

### 数组语法
```typescript
cn(['px-4', 'py-2', 'bg-red-500'])
```

### 混合使用
```typescript
cn(
  'px-4 py-2',
  { 'bg-red-500': isActive, 'bg-gray-500': !isActive },
  ['text-white', 'rounded-lg'],
  isDisabled && 'opacity-50'
)
```

## 常见使用场景

### 1. 组件样式合并
```typescript
<div className={cn('px-4 py-2', className)}>
  {/* 内容 */}
</div>
```

### 2. 状态样式切换
```typescript
const buttonClass = cn(
  'px-4 py-2 rounded-lg font-semibold',
  {
    'bg-red-500 text-white': variant === 'primary',
    'bg-white text-gray-900 border-2': variant === 'secondary',
  },
  disabled && 'opacity-50 cursor-not-allowed'
);
```

### 3. 响应式样式
```typescript
cn(
  'text-sm',
  'md:text-base',
  'lg:text-lg'
)
```

### 4. 主题样式
```typescript
cn(
  'bg-white text-gray-900',
  isDark && 'bg-gray-900 text-white'
)
```

## 最佳实践

### 1. 优先使用 cn 函数
```typescript
// ✅ 推荐
<div className={cn('px-4 py-2', className)} />

// ❌ 不推荐
<div className={`px-4 py-2 ${className}`} />
```

### 2. 清晰的类名顺序
```typescript
cn(
  // 1. 基础样式
  'px-4 py-2 rounded-lg',
  // 2. 状态样式
  {
    'bg-red-500': isActive,
    'bg-gray-500': !isActive,
  },
  // 3. 自定义样式
  className
)
```

### 3. 避免过度使用
```typescript
// ✅ 推荐：简单的直接使用
<div className="px-4 py-2 bg-red-500" />

// ✅ 推荐：复杂的使用 cn
<div className={cn('px-4 py-2', className, isActive && 'bg-red-500')} />
```

### 4. 提取复用样式
```typescript
const baseButtonClass = 'px-4 py-2 rounded-lg font-semibold';

function PrimaryButton({ className, ...props }) {
  return (
    <button
      className={cn(baseButtonClass, 'bg-red-500 text-white', className)}
      {...props}
    />
  );
}
```

## 常见问题

### Q: 为什么需要 cn 函数？
A: 直接使用模板字符串无法解决 Tailwind CSS 类名冲突问题：
```typescript
// ❌ 冲突未解决
`bg-red-500 ${className}`

// ✅ 冲突已解决
cn('bg-red-500', className)
```

### Q: 如何处理多个条件？
A: 使用对象语法或数组语法：
```typescript
// 对象语法
cn({
  'bg-red-500': condition1,
  'bg-blue-500': condition2,
})

// 数组语法
cn([
  condition1 && 'bg-red-500',
  condition2 && 'bg-blue-500',
])
```

### Q: 性能如何？
A: 性能很好，`clsx` 和 `tailwind-merge` 都是轻量级库，对性能影响极小。

## 相关文档

- [项目结构文档](../arch/project-structure.md)
- [主题配置文档](../styles/theme-configuration.md)
- [全局摘要](../_global.md)

## 版本历史

### v1.0 (2025-02-03)
- ✅ 创建初始文档
- ✅ 完整记录工具函数实现
- ✅ 添加使用示例和最佳实践
