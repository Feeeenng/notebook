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

|CLAUDE.md 文件|自动记忆|
|---|---|
|**谁编写**|您|Claude|
|**包含内容**|指令和规则|学习和模式|
|**范围**|项目、用户或组织|每个工作树|
|**加载到**|每个会话|每个会话（前 200 行）|
|**用于**|编码标准、工作流、项目架构|构建命令、调试见解、Claude 发现的偏好|


## SKILL

Skills 扩展了 Claude 能做的事情。创建一个 `SKILL.md` 文件，其中包含说明，Claude 会将其添加到其工具包中。Claude 在相关时使用 skills，或者你可以使用 `/skill-name` 直接调用一个

捆绑 skills 随 Claude Code 一起提供，在每个会话中都可用。与[内置命令](https://code.claude.com/docs/zh-CN/interactive-mode#built-in-commands)不同，内置命令直接执行固定逻辑，捆绑 skills 是基于提示的：它们为 Claude 提供详细的操作手册，让它使用其工具来编排工作。这意味着捆绑 skills 可以生成并行代理、读取文件并适应你的代码库。

###  skill 推荐
- [openspec](skill/openspec.md)

## MCP

Claude Code 可以通过 [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction)（一个用于 AI 工具集成的开源标准）连接到数百个外部工具和数据源。MCP 服务器为 Claude Code 提供对您的工具、数据库和 API 的访问权限。

连接 MCP 服务器后，您可以要求 Claude Code：

- **从问题跟踪器实现功能**：“添加 JIRA 问题 ENG-4521 中描述的功能，并在 GitHub 上创建 PR。”
- **分析监控数据**：“检查 Sentry 和 Statsig 以检查 ENG-4521 中描述的功能的使用情况。”
- **查询数据库**：“根据我们的 PostgreSQL 数据库，查找使用功能 ENG-4521 的 10 个随机用户的电子邮件。”
- **集成设计**：“根据在 Slack 中发布的新 Figma 设计更新我们的标准电子邮件模板”
- **自动化工作流**：“创建 Gmail 草稿，邀请这 10 个用户参加关于新功能的反馈会议。“


###  MCP 推荐
- [claude-mem](MCP/claude-mem.md)


## Agent

##  subagents



# 基本命令使用

## /compact
如果上下文超过限制，使用这个。可以保存上下文来。开启新的会话以后，






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