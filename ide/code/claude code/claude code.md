
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
```

```


# 基本命令使用



# skill 推荐


