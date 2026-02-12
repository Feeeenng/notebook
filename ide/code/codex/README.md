
# code cli 使用方式
docs：https://developers.openai.com/codex/cli


## 下载codex cli

```
npm i -g @openai/codex
```


## 配置代理(可选)
```
export HTTP_PROXY=ip:port
export HTTPS_PROXY=ip:port
```

## 添加config.toml
```
vim ~/.codex/config.toml

model_provider = "openai"
model ="gpt-5.1-codex-max"
model_reasoning_effort = "medium"
disable_response_storage = true
#preferred_auth_method ="apikey"

[model_providers.openai]
name = "openai"
base_url = "https://api.openai.com/v1"
wire_api = "responses"


```


## 登录 codex

```
codex login
```

最后就可以正常使用了


```
  Tip: Paste an image with Ctrl+V to attach it to your next message.


› 测试


• Ready.

─ Worked for 6s ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

• 在的，有什么需要我帮助的吗？
```



