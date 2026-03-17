
# 安装


# claude code for vs code
这里对接 `vscode` 插件。需要配置一下

## 步骤1、 配置setting文件
```
"claudeCode.environmentVariables": [

        {

            "name": "ANTHROPIC_BASE_URL",

            "value": "claude-api"

        },

        {

            "name": "ANTHROPIC_AUTH_TOKEN",

            "value": "sk-token"

        }

    ],
```

## 步骤2、 绕过claude登录
这里在对应的用户加目录创建 config 文件. 用来取消 cluade登录, 接入自己的模型API
文件路径地址： .claude/config.json
```
{
"primaryApiKey": "crs",
}
```


# 基本命令使用

## /compact
如果上下文超过限制，使用这个。可以保存上下文来。开启新的会话以后，



# skill 推荐
- [openspec](skill/openspec.md)

# MCP 推荐
- [claude-mem](MCP/claude-mem.md)


# everything-claude-code

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