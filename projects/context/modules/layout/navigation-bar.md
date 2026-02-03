# NavigationBar 组件文档

## 版本信息
- **文档版本**: v1.0
- **创建日期**: 2025-02-03
- **最后更新**: 2025-02-03
- **状态**: ✅ 已完成
- **作者**: AI Assistant
- **组件文件**: `src/components/layout/NavigationBar.tsx`
- **组件类型**: Layout Component

## 概述
NavigationBar 是 ClueBoard 的主导航组件，提供页面内锚点导航功能。支持响应式设计，在桌面端显示为左侧固定导航栏，在移动端显示为顶部可折叠菜单。

## 核心功能

### 1. 桌面端导航（左侧固定）
- 固定在屏幕左侧垂直居中位置
- 显示导航项图标，激活时展开显示文本
- 支持鼠标悬停和点击动画
- 包含返回顶部按钮

### 2. 移动端导航（顶部汉堡菜单）
- 固定在页面顶部
- 点击汉堡图标展开/收起菜单
- 显示导航项图标和文本
- 独立的返回顶部按钮（右下角）

### 3. 滚动监听
- 自动监听页面滚动位置
- 高亮当前可见的章节
- 返回顶部按钮根据滚动位置显示/隐藏

## 技术架构

### 依赖库
```json
{
  "framer-motion": "^12.30.0",  // 动画库
  "lucide-react": "^0.344.0"    // 图标库
}
```

### 状态管理
```typescript
const [activeSection, setActiveSection] = useState('hero');         // 当前激活的章节
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);   // 移动端菜单状态
const [showScrollTop, setShowScrollTop] = useState(false);         // 返回顶部按钮状态
```

### 导航项配置
```typescript
interface NavItem {
  id: string;           // 章节 ID
  label: string;        // 显示文本
  icon: React.ReactNode;// 图标组件
  href: string;         // 锚点链接
}

const navItems: NavItem[] = [
  { id: 'hero', label: '首页', icon: <Home className="w-4 h-4" />, href: '#hero' },
  { id: 'pitch', label: '项目路演', icon: <Lightbulb className="w-4 h-4" />, href: '#pitch' },
  { id: 'learning', label: '学习复盘', icon: <BookOpen className="w-4 h-4" />, href: '#learning' },
  { id: 'contact', label: '联系我', icon: <Mail className="w-4 h-4" />, href: '#contact' },
];
```

## 实现细节

### 1. 滚动监听逻辑
```typescript
useEffect(() => {
  const handleScroll = () => {
    const sections = navItems.map(item => item.id);
    const scrollPosition = window.scrollY + 100;

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
          break;
        }
      }
    }

    // 滚动超过 500px 时显示返回顶部按钮
    setShowScrollTop(window.scrollY > 500);
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // 初始化

  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

**特点**:
- 使用 `scrollPosition + 100` 偏移量，提前触发激活状态
- 遍历所有章节，找到第一个匹配的章节
- 性能优化：移除监听器，避免内存泄漏

### 2. 平滑滚动实现
```typescript
const scrollToSection = (href: string) => {
  const targetId = href.replace('#', '');
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMobileMenuOpen(false); // 移动端点击后关闭菜单
  }
};
```

**参数**:
- `behavior: 'smooth'`: 平滑滚动
- `block: 'start'`: 对齐到元素顶部

### 3. 桌面端导航
```tsx
<nav className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2 p-3 bg-white/80 backdrop-blur-md rounded-r-xl shadow-lg border-l border-t border-b border-gray-200">
  {navItems.map((item) => (
    <motion.button
      key={item.id}
      onClick={() => scrollToSection(item.href)}
      className={cn(
        'relative flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300',
        activeSection === item.id
          ? 'bg-gray-900 text-white shadow-md'
          : 'text-gray-600 hover:bg-gray-100'
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={item.label}
    >
      {item.icon}
      <AnimatePresence mode="wait">
        {activeSection === item.id && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            className="text-sm font-medium overflow-hidden whitespace-nowrap"
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  ))}
</nav>
```

**关键点**:
- `fixed left-0 top-1/2 -translate-y-1/2`: 垂直居中固定定位
- `hidden lg:flex`: 仅在桌面端显示（>=1024px）
- `AnimatePresence mode="wait"`: 确保文本展开动画流畅
- `overflow-hidden whitespace-nowrap`: 防止文本换行

### 4. 移动端导航
```tsx
<div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200">
  <div className="flex items-center justify-between px-4 py-3">
    <span className="font-bold text-lg text-gray-900">ClueBoard</span>

    <motion.button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      whileTap={{ scale: 0.95 }}
      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
    >
      {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </motion.button>
  </div>

  <AnimatePresence>
    {isMobileMenuOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="overflow-hidden"
      >
        <div className="px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.href)}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300',
                activeSection === item.id
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              )}
              whileTap={{ scale: 0.98 }}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</div>
```

**关键点**:
- `lg:hidden`: 仅在移动端显示（<1024px）
- 菜单展开/收起使用高度动画
- 点击导航项后自动关闭菜单

### 5. 返回顶部按钮

#### 桌面端（集成在导航栏内）
```tsx
<motion.button
  onClick={scrollToTop}
  className={cn(
    'flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all duration-300',
    'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
  )}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  title="返回顶部"
>
  <ChevronUp className="w-4 h-4" />
</motion.button>
```

#### 移动端（右下角浮动）
```tsx
<AnimatePresence>
  {showScrollTop && (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      onClick={scrollToTop}
      className="lg:hidden fixed bottom-6 right-6 z-50 p-3 bg-gray-900 text-white rounded-full shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ChevronUp className="w-6 h-6" />
    </motion.button>
  )}
</AnimatePresence>
```

## 样式规范

### 激活状态
- 背景：`bg-gray-900`
- 文字：`text-white`
- 阴影：`shadow-md`

### 未激活状态
- 背景：透明
- 文字：`text-gray-600`
- 悬停：`hover:bg-gray-100`

### 响应式断点
- 移动端：`< 1024px`（`lg:hidden`）
- 桌面端：`>= 1024px`（`hidden lg:flex`）

## 动画效果

### 1. 按钮交互
```typescript
whileHover={{ scale: 1.05 }}   // 悬停放大 5%
whileTap={{ scale: 0.95 }}     // 点击缩小 5%
```

### 2. 文本展开
```typescript
initial={{ opacity: 0, width: 0 }}
animate={{ opacity: 1, width: 'auto' }}
exit={{ opacity: 0, width: 0 }}
```

### 3. 菜单展开
```typescript
initial={{ height: 0, opacity: 0 }}
animate={{ height: 'auto', opacity: 1 }}
exit={{ height: 0, opacity: 0 }}
```

### 4. 浮动按钮
```typescript
initial={{ opacity: 0, scale: 0 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0, scale: 0 }}
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.9 }}
```

## 使用示例

### 基础使用
```tsx
import NavigationBar from '@/components/layout/NavigationBar';

export default function Page() {
  return (
    <>
      <NavigationBar />
      <section id="hero">首页内容</section>
      <section id="pitch">项目路演内容</section>
      <section id="learning">学习复盘内容</section>
      <section id="contact">联系我内容</section>
    </>
  );
}
```

### 自定义导航项
```typescript
const customNavItems: NavItem[] = [
  { id: 'section1', label: '章节一', icon: <Icon1 />, href: '#section1' },
  { id: 'section2', label: '章节二', icon: <Icon2 />, href: '#section2' },
  { id: 'section3', label: '章节三', icon: <Icon3 />, href: '#section3' },
];
```

## 性能优化

1. **事件监听清理**: 使用 `useEffect` 清理函数移除 scroll 监听器
2. **防抖**: 未使用防抖（考虑后续添加）
3. **条件渲染**: 使用 `AnimatePresence` 优化 DOM 操作
4. **CSS 优化**: 使用 Tailwind 类名，避免内联样式

## 可访问性

1. **语义化标签**: 使用 `<nav>` 标签
2. **键盘导航**: 所有按钮可聚焦
3. **标题提示**: 使用 `title` 属性提供提示
4. **颜色对比**: 符合 WCAG AA 标准

## 未来扩展

- [ ] 支持键盘快捷键（数字键切换章节）
- [ ] 支持自定义主题色
- [ ] 支持导航项拖拽排序
- [ ] 添加面包屑导航
- [ ] 支持多语言

## 相关文档

- [项目结构文档](../../arch/project-structure.md)
- [主题配置文档](../../styles/theme-configuration.md)
- [全局摘要](../../_global.md)

## 版本历史

### v1.0 (2025-02-03)
- ✅ 创建初始文档
- ✅ 完整记录组件实现
- ✅ 添加使用示例和最佳实践
