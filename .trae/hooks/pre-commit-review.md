# 代码审查钩子

## 钩子描述

在代码提交前自动执行代码审查,确保代码质量符合标准。

## 触发时机

- Git commit 前
- Git push 前
- Pull Request 创建时

## 功能特性

1. **自动代码检查**
   - 运行静态代码分析
   - 检查代码格式
   - 验证命名规范
   - 检测代码复杂度

2. **安全扫描**
   - 扫描安全漏洞
   - 检查敏感信息
   - 验证依赖安全性
   - 检测常见攻击模式

3. **测试验证**
   - 运行相关单元测试
   - 验证测试覆盖率
   - 检查测试失败
   - 生成测试报告

4. **文档检查**
   - 验证文档完整性
   - 检查文档格式
   - 验证 API 文档
   - 检查 README 更新

## 配置选项

```json
{
  "enabled": true,
  "triggers": ["pre-commit", "pre-push", "pull-request"],
  "checks": {
    "code-quality": {
      "enabled": true,
      "severity": "warning"
    },
    "security": {
      "enabled": true,
      "severity": "error"
    },
    "tests": {
      "enabled": true,
      "severity": "error",
      "coverage": 80
    },
    "documentation": {
      "enabled": true,
      "severity": "warning"
    }
  },
  "excludes": [
    "node_modules/**",
    "dist/**",
    "build/**"
  ]
}
```

## 输出格式

```
# 代码审查钩子报告

## 检查结果
- 总检查项: X
- 通过: X
- 警告: X
- 错误: X

## 代码质量
- 代码格式: ✓
- 命名规范: ✓
- 代码复杂度: ⚠ (平均复杂度: 8.5)

## 安全检查
- 安全漏洞: ✓
- 敏感信息: ✓
- 依赖安全: ⚠ (发现 2 个过时的依赖)

## 测试验证
- 单元测试: ✓ (通过 45/45)
- 测试覆盖率: ⚠ (78%, 目标: 80%)

## 文档检查
- 文档完整性: ✓
- API 文档: ⚠ (缺少 3 个函数的文档)

## 建议
1. 降低代码复杂度
2. 更新过时的依赖
3. 提高测试覆盖率到 80%
4. 补充缺失的 API 文档
```

## 注意事项

- 钩子执行会增加提交时间
- 可以通过 `--no-verify` 跳过钩子(不推荐)
- 建议在 CI/CD 流程中也运行相同的检查
- 定期更新钩子配置以适应项目需求