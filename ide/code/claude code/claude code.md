Claude Code 是一个代理编码工具，可以读取你的代码库、编辑文件、运行命令，并与你的开发工具集成。可在终端、IDE、桌面应用和浏览器中使用。
# 安装
这里[安装方式](https://code.claude.com/docs/zh-CN/overview#)非常多, 默认使用CLI的方式安装
## Liunx
```
curl -fsSL https://claude.ai/install.sh | bash
```

## Windows PowerShell
```
irm https://claude.ai/install.ps1 | iex
```

然后在任意项目中其中 **Claude Code**
```
cd your-project
claude
```


# 基础概念

## 概述

扩展插入代理循环的不同部分：

- **[CLAUDE.md](https://code.claude.com/docs/zh-CN/memory)** 添加 Claude 每个会话都能看到的持久上下文
- **[Skills](https://code.claude.com/docs/zh-CN/skills)** 添加可重用的知识和可调用的工作流
- **[MCP](https://code.claude.com/docs/zh-CN/mcp)** 将 Claude 连接到外部服务和工具
- **[Subagents](https://code.claude.com/docs/zh-CN/sub-agents)** 在隔离的上下文中运行自己的循环，返回摘要
- **[Agent teams](https://code.claude.com/docs/zh-CN/agent-teams)** 协调多个独立会话，具有共享任务和点对点消息传递
- **[Hooks](https://code.claude.com/docs/zh-CN/hooks)** 完全在循环外作为确定性脚本运行
- **[Plugins](https://code.claude.com/docs/zh-CN/plugins)** 和 **[marketplaces](https://code.claude.com/docs/zh-CN/plugin-marketplaces)** 打包和分发这些功能


|功能|作用|何时使用|示例|
|---|---|---|---|
|**CLAUDE.md**|每次对话加载的持久上下文|项目约定、“始终执行 X” 规则|”使用 pnpm，而不是 npm。提交前运行测试。“|
|**Skill**|Claude 可以使用的说明、知识和工作流|可重用内容、参考文档、可重复的任务|`/deploy` 运行您的部署清单；包含端点模式的 API 文档 skill|
|**Subagent**|返回摘要结果的隔离执行上下文|上下文隔离、并行任务、专门的工作者|读取许多文件但仅返回关键发现的研究任务|
|**[Agent teams](https://code.claude.com/docs/zh-CN/agent-teams)**|协调多个独立的 Claude Code 会话|并行研究、新功能开发、使用竞争假设进行调试|生成审查者同时检查安全性、性能和测试|
|**MCP**|连接到外部服务|外部数据或操作|查询您的数据库、发布到 Slack、控制浏览器|
|**Hook**|在事件上运行的确定性脚本|可预测的自动化，不涉及 LLM|每次文件编辑后运行 ESLi|


## CLAUDE.md

Claude Code 有两个互补的记忆系统。两者都在每次对话开始时加载。Claude 将它们视为上下文，而不是强制配置。您的指令越具体和简洁，Claude 遵循它们的一致性就越高。



# Agent

# MCP

# SKILL


# 基本命令使用

## /compact
如果上下文超过限制，使用这个。可以保存上下文来。开启新的会话以后，



# skill 推荐
- [openspec](skill/openspec.md)

# MCP 推荐
- [claude-mem](MCP/claude-mem.md)


# everything-claude-code

## 设置claude_path
目前1.8.0版本存在问题。需要手动设置`CLAUDE_PLUGIN_ROOT` . 否则无法使用hook功能

```
export CLAUDE_PLUGIN_ROOT="/myproject/.claude/"
```

## 设置规则

- dev 用于编码
- review 用于代码质量/安全
- research.md 做之前的探索模式

```
```bash
# Daily development
alias claude-dev='claude --system-prompt "$(cat ~/.claude/contexts/dev.md)"'

# PR review mode
alias claude-review='claude --system-prompt "$(cat ~/.claude/contexts/review.md)"'

# Research/exploration mode
alias claude-research='claude --system-prompt "$(cat ~/.claude/contexts/research.md)"'
```
```