# HeroSection 文字内容更新计划

## 项目背景

用户希望修改 HeroSection 组件中的文字内容，确保字体适配不同设备的屏幕大小，同时更新为新的宣传文案。

## 目标文件

**文件**：`src/components/sections/HeroSection.tsx`

## 当前实现分析

### 现有文字结构

```tsx
// 主标题
<p className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight mb-3 md:mb-6 font-['Outfit']" style={{ color: 'var(--text-primary)' }}>
  总忘长期任务？
  <br />
  不是你记性差，是工具太笨重。
</p>

// 副标题区域
<div className="pt-3 md:pt-4 border-t border-gray-200">
  <p className="text-sm md:text-base lg:text-lg leading-relaxed font-['DM_Sans']" style={{ color: 'var(--text-secondary)' }}>
    这是我用 AI 辅助开发的第一个产品
  </p>
  <p className="text-xs md:text-sm lg:text-base mt-2 font-['DM_Sans']" style={{ color: 'var(--text-muted)' }}>
    记录从点子到上线的完整过程
  </p>
</div>
```

### 现有响应式字体配置

| 设备类型 | 主标题字体大小 | 副标题字体大小 | 描述文字字体大小 |
|---------|---------------|---------------|------------------|
| 移动端   | `text-xl`     | `text-sm`     | `text-xs`        |
| 平板端   | `md:text-2xl` | `md:text-base`| `md:text-sm`     |
| 桌面端   | `lg:text-4xl` | `lg:text-lg`  | `lg:text-base`   |

## 修改需求

### 新文字内容

1. **主标题**：
   > "总忘长期任务？不是你记性差，是工具太笨重，不如来试试ClueBoard吧"

2. **副标题**：
   > "这是我用 AI 完成的第一个完整项目路演"

3. **新增内容**：
   > "从 '发现长期任务难跟踪的痛点' 到 '做出 ClueBoard MVP'"

4. **新增内容**：
   > "我把「AI 编程学习→产品落地」的全流程，都装在了这个页面里"

5. **保留内容**：
   > "记录了从点子到上线的完整过程"

### 字体适配要求

- 确保在不同设备上字体大小合适，可读性良好
- 保持响应式设计，适配移动端、平板端和桌面端
- 维持现有的字体家族和颜色配置
- 确保文字排版美观，行间距合理

## 解决方案

### 技术方案

1. **修改主标题**：
   - 保持现有的响应式字体类
   - 调整文字内容为新的主标题
   - 优化换行逻辑，确保在不同设备上显示美观

2. **修改副标题区域**：
   - 调整现有的副标题文字
   - 添加两个新的段落，用于新增内容
   - 为新增内容添加适当的响应式字体类
   - 保持与现有设计的一致性

3. **字体适配优化**：
   - 维持现有的响应式断点配置
   - 确保行高和字间距在不同设备上都合适
   - 测试在各种屏幕尺寸下的显示效果

### 具体修改步骤

#### 步骤 1：修改主标题

```tsx
// 修改前
<p className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight mb-3 md:mb-6 font-['Outfit']" style={{ color: 'var(--text-primary)' }}>
  总忘长期任务？
  <br />
  不是你记性差，是工具太笨重。
</p>

// 修改后
<p className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight mb-3 md:mb-6 font-['Outfit']" style={{ color: 'var(--text-primary)' }}>
  总忘长期任务？不是你记性差，是工具太笨重，不如来试试ClueBoard吧
</p>
```

#### 步骤 2：修改副标题区域

```tsx
// 修改前
<div className="pt-3 md:pt-4 border-t border-gray-200">
  <p className="text-sm md:text-base lg:text-lg leading-relaxed font-['DM_Sans']" style={{ color: 'var(--text-secondary)' }}>
    这是我用 AI 辅助开发的第一个产品
  </p>
  <p className="text-xs md:text-sm lg:text-base mt-2 font-['DM_Sans']" style={{ color: 'var(--text-muted)' }}>
    记录从点子到上线的完整过程
  </p>
</div>

// 修改后
<div className="pt-3 md:pt-4 border-t border-gray-200">
  <p className="text-sm md:text-base lg:text-lg leading-relaxed font-['DM_Sans']" style={{ color: 'var(--text-secondary)' }}>
    这是我用 AI 完成的第一个完整项目路演
  </p>
  <p className="text-xs md:text-sm lg:text-base mt-2 font-['DM_Sans']" style={{ color: 'var(--text-muted)' }}>
    从 "发现长期任务难跟踪的痛点" 到 "做出 ClueBoard MVP"
  </p>
  <p className="text-xs md:text-sm lg:text-base mt-2 font-['DM_Sans']" style={{ color: 'var(--text-muted)' }}>
    我把「AI 编程学习→产品落地」的全流程，都装在了这个页面里
  </p>
  <p className="text-xs md:text-sm lg:text-base mt-2 font-['DM_Sans']" style={{ color: 'var(--text-muted)' }}>
    记录了从点子到上线的完整过程
  </p>
</div>
```

### 响应式字体配置

| 设备类型 | 主标题字体大小 | 副标题字体大小 | 描述文字字体大小 |
|---------|---------------|---------------|------------------|
| 移动端   | `text-xl`     | `text-sm`     | `text-xs`        |
| 平板端   | `md:text-2xl` | `md:text-base`| `md:text-sm`     |
| 桌面端   | `lg:text-4xl` | `lg:text-lg`  | `lg:text-base`   |

### 布局优化

1. **间距调整**：
   - 保持现有的段落间距（`mt-2`）
   - 确保整体布局紧凑但不拥挤

2. **换行优化**：
   - 主标题在不同设备上自动换行
   - 确保长句子在小屏幕上显示美观

3. **视觉一致性**：
   - 保持与现有设计的颜色方案一致
   - 维持字体家族和样式的统一性

## 预期效果

### 移动端 (< 640px)

- ✅ 主标题：`text-xl`，自动换行
- ✅ 副标题：`text-sm`，清晰可读
- ✅ 描述文字：`text-xs`，排列整齐
- ✅ 整体布局紧凑，适应小屏幕

### 平板端 (640px - 1023px)

- ✅ 主标题：`md:text-2xl`，适当增大
- ✅ 副标题：`md:text-base`，提高可读性
- ✅ 描述文字：`md:text-sm`，清晰显示
- ✅ 布局合理，利用更多空间

### 桌面端 (≥ 1024px)

- ✅ 主标题：`lg:text-4xl`，视觉冲击力强
- ✅ 副标题：`lg:text-lg`，突出重要信息
- ✅ 描述文字：`lg:text-base`，易于阅读
- ✅ 布局宽敞，显示完整内容

## 技术风险评估

| 风险 | 等级 | 缓解措施 |
|------|------|----------|
| 文字过长 | 低 | 自动换行，响应式字体大小 |
| 布局拥挤 | 低 | 保持适当的间距，测试不同屏幕尺寸 |
| 可读性 | 低 | 确保文字与背景对比度足够，字体大小合适 |
| 响应式适配 | 低 | 维持现有的响应式断点配置 |

## 测试计划

### 功能测试

1. **文字显示**：验证所有文字内容正确显示
2. **响应式布局**：测试在不同设备尺寸下的显示效果
3. **字体大小**：确保在各种屏幕尺寸下字体大小合适
4. **间距布局**：验证段落间距和整体布局美观

### 兼容性测试

1. **浏览器兼容性**：测试在 Chrome、Firefox、Safari、Edge 中的显示效果
2. **设备兼容性**：测试在不同设备类型（手机、平板、桌面）上的显示效果
3. **屏幕分辨率**：测试在不同分辨率下的显示效果

### 性能测试

1. **加载速度**：验证修改后页面加载速度不受影响
2. **渲染性能**：确保文字渲染流畅，无闪烁

## 实施时间

**预计修改时间**：10-15 分钟
**测试时间**：5-10 分钟
**总时间**：15-25 分钟

## 依赖项

| 依赖 | 版本 | 用途 |
|------|------|------|
| React | 19.2.3 | 组件渲染 |
| Framer Motion | 12.30.0 | 动画效果 |
| Tailwind CSS | 4.1.18 | 样式管理 |

## 技术优势

1. **响应式设计**：完整的响应式字体配置，适配不同设备
2. **视觉一致性**：保持与现有设计的统一性
3. **代码质量**：修改简单直接，不影响其他功能
4. **用户体验**：优化文字内容，提高转化率
5. **可维护性**：修改清晰明了，易于后续维护

## 结论

本修改计划通过调整 HeroSection 组件的文字内容和保持响应式字体配置，实现了用户要求的文字更新。修改方案简单可行，风险低，能够在保持现有设计的基础上，更新为更有吸引力的宣传文案。

修改后，HeroSection 将更加生动有力地传达产品价值，吸引用户继续探索，同时保持在各种设备上的良好显示效果。