# Footer 组件文档

## 版本信息
- **文档版本**: v1.0
- **创建日期**: 2025-02-03
- **最后更新**: 2025-02-03
- **状态**: ✅ 已完成
- **作者**: AI Assistant
- **组件文件**: `src/components/layout/Footer.tsx`
- **组件类型**: Layout Component

## 概述
Footer 是 ClueBoard 展示页的底部组件，提供品牌信息、联系方式和社交媒体链接。采用深色背景（灰色），分为三个区域：品牌信息、联系方式和社交媒体。底部包含版权信息。设计简洁，强调可访问性和用户联系渠道。

## 核心功能

### 1. 品牌信息
- 产品名称：ClueBoard
- 产品口号：让重要的事情，一眼就能看见
- 产品描述：个人创意与生活任务的可视化容器

### 2. 联系方式
- 邮箱联系（793220026@qq.com）
- 使用 Mail 图标
- 悬停交互效果

### 3. 社交媒体
- 微信（MessageCircle 图标）
- 小红书（SVG 图标）
- 悬停交互效果

### 4. 版权信息
- 版权声明
- 产品标语：用 AI 编程，让想法落地

## 技术架构

### 依赖库
```json
{
  "lucide-react": "^0.344.0"    // 图标库
}
```

### 布局结构
```
Footer (容器)
├── 品牌信息区域 (1/3)
│   ├── 产品名称
│   └── 产品描述
├── 联系方式区域 (1/3)
│   └── 邮箱链接
├── 社交媒体区域 (1/3)
│   ├── 微信链接
│   └── 小红书链接
└── 版权信息区域 (底部横跨)
```

## 实现细节

### 1. 容器布局
```typescript
<footer className="bg-gray-900 text-white py-12">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* 三列内容 */}
    </div>
  </div>
</footer>
```

**布局特点**:
- 深色背景（`bg-gray-900`）
- 白色文字（`text-white`）
- 最大宽度限制（`max-w-6xl`）
- 响应式网格：移动端 1 列，桌面端 3 列
- 垂直间距（`py-12`）

### 2. 品牌信息区域
```typescript
<div>
  <h3 className="text-2xl font-bold mb-4">ClueBoard</h3>
  <p className="text-gray-400 leading-relaxed">
    让重要的事情，一眼就能看见<br />
    个人创意与生活任务的可视化容器
  </p>
</div>
```

**样式特点**:
- 大号字体标题（`text-2xl`）
- 加粗（`font-bold`）
- 底部间距（`mb-4`）
- 浅灰色描述文本（`text-gray-400`）
- 行间距优化（`leading-relaxed`）

### 3. 联系方式区域
```typescript
<div>
  <h4 className="font-semibold mb-4">联系我</h4>
  <div className="space-y-3">
    <a
      href="mailto:793220026@qq.com"
      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
    >
      <Mail className="w-5 h-5" />
      <span>793220026@qq.com</span>
    </a>
  </div>
</div>
```

**特点**:
- 使用 `mailto:` 协议
- Mail 图标（`w-5 h-5`）
- 浅灰色文字，悬停变白
- 垂直间距（`space-y-3`）
- 平滑过渡效果

### 4. 社交媒体区域
```typescript
<div>
  <h4 className="font-semibold mb-4">关注我</h4>
  <div className="space-y-3">
    {/* 微信 */}
    <a
      href="#"
      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
    >
      <MessageCircle className="w-5 h-5" />
      <span>微信</span>
    </a>

    {/* 小红书 */}
    <a
      href="#"
      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
      <span>小红书</span>
    </a>
  </div>
</div>
```

**特点**:
- 微信：使用 lucide-react 的 MessageCircle 图标
- 小红书：使用自定义 SVG 图标
- 统一的悬停效果
- 占位链接（`href="#"`），需替换为实际链接

### 5. 版权信息区域
```typescript
<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
  <p>© 2024 ClueBoard. 用 AI 编程，让想法落地。</p>
</div>
```

**特点**:
- 顶部边框（`border-t`）
- 深灰色边框（`border-gray-800`）
- 顶部间距（`mt-8`）
- 底部间距（`pt-8`）
- 居中对齐（`text-center`）
- 小字体（`text-sm`）

## 样式规范

### 容器样式
```css
bg-gray-900              /* 深灰背景 */
text-white               /* 白色文字 */
py-12                    /* 垂直内边距 */
```

### 网格布局
```css
grid grid-cols-1         /* 移动端 1 列 */
md:grid-cols-3           /* 桌面端 3 列 */
gap-8                    /* 间距 */
```

### 链接样式
```css
flex items-center gap-2  /* 水平布局，图标和文字间距 */
text-gray-400            /* 浅灰文字 */
hover:text-white         /* 悬停变白 */
transition-colors        /* 平滑过渡 */
```

### 图标样式
```css
w-5 h-5                  /* 尺寸 */
```

### 标题样式
```css
text-2xl font-bold       /* 品牌名称 */
font-semibold            /* 区域标题 */
mb-4                     /* 底部间距 */
```

## 内容策略

### 品牌信息
- **产品名称**：ClueBoard
- **产品口号**：让重要的事情，一眼就能看见
- **产品描述**：个人创意与生活任务的可视化容器

### 联系方式
- **邮箱**：793220026@qq.com
- **图标**：Mail（邮件）

### 社交媒体
- **微信**：使用 MessageCircle 图标
- **小红书**：使用自定义 SVG 图标

### 版权信息
- **版权**：© 2024 ClueBoard
- **标语**：用 AI 编程，让想法落地

## 使用示例

### 基础使用
```tsx
import Footer from '@/components/layout/Footer';

export default function Layout() {
  return (
    <>
      <main>
        {/* 页面内容 */}
      </main>
      <Footer />
    </>
  );
}
```

### 自定义联系信息
```typescript
// 修改 src/components/layout/Footer.tsx
<a
  href="mailto:your-email@example.com"
  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
>
  <Mail className="w-5 h-5" />
  <span>your-email@example.com</span>
</a>
```

### 添加更多社交媒体
```typescript
<div className="space-y-3">
  {/* 现有链接 */}
  <a
    href="#"
    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
  >
    <Twitter className="w-5 h-5" />
    <span>Twitter</span>
  </a>
</div>
```

### 自定义版权信息
```typescript
<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
  <p>© 2025 ClueBoard. 自定义版权信息。</p>
</div>
```

## 最佳实践

### 1. 链接配置
- 确保所有链接都是有效的
- `mailto:` 协议用于邮箱
- 社交媒体链接替换为实际 URL
- 考虑添加 `target="_blank"` 属性

### 2. 图标使用
- 保持图标尺寸一致（`w-5 h-5`）
- 使用合适的图标库（lucide-react）
- 自定义 SVG 图标确保 viewBox 正确

### 3. 响应式设计
- 移动端使用单列布局
- 桌面端使用三列布局
- 确保在小屏幕上内容可读

### 4. 可访问性
- 使用语义化 `<footer>` 标签
- 提供清晰的链接文本
- 确保颜色对比度符合标准
- 支持键盘导航

## 常见问题

### Q: 如何添加更多社交媒体链接？
A: 在社交媒体区域添加新的链接项：
```typescript
<a
  href="your-url"
  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
>
  <YourIcon className="w-5 h-5" />
  <span>平台名称</span>
</a>
```

### Q: 如何修改版权年份？
A: 更新版权信息中的年份：
```typescript
<p>© 2025 ClueBoard. 用 AI 编程，让想法落地。</p>
```

### Q: 如何修改背景颜色？
A: 修改容器的背景类名：
```typescript
<footer className="bg-black text-white py-12">
```

## 性能优化

1. **图标优化**:
   - 使用 lucide-react 的 Tree Shaking
   - SVG 图标内联，避免额外请求
   - 保持图标文件小

2. **响应式**:
   - 使用 Tailwind 断点
   - 移动端优先策略
   - 灵活的网格布局

3. **样式优化**:
   - 使用 CSS 变量
   - 避免内联样式
   - 使用 Tailwind 类名

## 可访问性

1. **语义化标签**：使用 `<footer>` 标签
2. **链接文本**：提供清晰的链接文本
3. **颜色对比**：符合 WCAG AA 标准
4. **键盘导航**：支持 Tab 键导航

## 未来扩展

- [ ] 添加更多社交媒体平台
- [ ] 支持多语言
- [ ] 添加网站地图链接
- [ ] 添加隐私政策链接
- [ ] 添加 Cookie 设置
- [ ] 支持深色/浅色主题切换

## 相关文档

- [项目结构文档](../../arch/project-structure.md)
- [主题配置文档](../../styles/theme-configuration.md)
- [NavigationBar 组件文档](../layout/navigation-bar.md)
- [全局摘要](../../_global.md)

## 版本历史

### v1.0 (2025-02-03)
- ✅ 创建初始文档
- ✅ 完整记录组件实现
- ✅ 添加使用示例和最佳实践
