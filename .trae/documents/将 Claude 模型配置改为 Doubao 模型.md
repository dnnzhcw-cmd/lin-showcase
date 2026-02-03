# 将 Claude 模型配置改为 Doubao 模型

## 问题分析

通过检查配置文件，我发现所有代理文件都强制要求使用 Claude 模型 (opus)：

- `.trae/agents/architect.md` (第5行: `model: opus`)
- `.trae/agents/code-reviewer.md` (第5行: `model: opus`)
- `.trae/agents/planner.md` (第5行: `model: opus`)
- `.trae/agents/security-reviewer.md` (第5行: `model: opus`)
- `.trae/agents/build-error-resolver.md` (第5行: `model: opus`)
- `.trae/agents/database-reviewer.md` (第5行: `model: opus`)

此外，README.md 文档中也多次引用了 Claude：
- 项目概述中提到 "集成了 Anthropic 黑客松冠军开源的 Everything Claude Code 配置"
- 多个地方提到 "Claude Code"

## 实施计划

### 1. 更新代理配置文件

将所有代理文件中的 `model: opus` 改为 `model: doubao`：

- `.trae/agents/architect.md`
- `.trae/agents/code-reviewer.md`
- `.trae/agents/planner.md`
- `.trae/agents/security-reviewer.md`
- `.trae/agents/build-error-resolver.md`
- `.trae/agents/database-reviewer.md`

### 2. 更新 README 文档

修改 `.trae/README.md` 文档：
- 将 "Everything Claude Code" 改为 "Everything Doubao Code"
- 将 "Anthropic 黑客松冠军" 改为适当的描述
- 移除所有对 "Claude Code" 的引用
- 更新版本信息和更新日志

### 3. 验证配置

- 检查所有代理文件是否正确更新为 `model: doubao`
- 验证 README.md 文档是否已更新
- 确保没有遗漏任何 Claude 相关的引用

## 预期成果

- 所有代理配置文件都使用 Doubao 模型
- README 文档已更新，移除了对 Claude 的引用
- 配置文件验证通过，确保没有错误

## 执行顺序

1. 更新代理配置文件
2. 更新 README 文档
3. 验证所有配置文件

这个计划将确保所有配置文件都使用 Doubao 模型，而不是强制要求使用 Claude 模型。