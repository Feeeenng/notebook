
# tmux 使用文档


配置文件
```
# vim tmux.conf
set -g mouse on
set -g status on
set -g status-right "session: #S"
```

配置生效
```
tmux source-file ~/.tmux.conf
```


# 操作命令

## 查看session
```
tmux ls # 查看所有 session
```

## 启动session
可以直接执行命令，也可以加 **-s** 参考来配置ID，方便找回session
```
tmux new-session -s $(date +%s)
```

## 修改session

```
tmux rename-session -t old-id new-id
```
## 找回session

```
tmux attach -t <session-id>
```
## 删除session

```
tmux kill-session -t <session-id>
tmux kill-server # 删除所有 session
```


# 插件功能
> 后续所有插件功能都要提前装好插件管理器

## 插件管理器
https://github.com/tmux-plugins/tpm
```
git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm

```


## 自动保存会话
tmux-continuum
地址：https://github.com/tmux-plugins/tmux-continuum

开启方式
```
set -g @plugin 'tmux-plugins/tmux-resurrect'
set -g @plugin 'tmux-plugins/tmux-continuum'
```



## 配置vscode 自动启动tmux
vscode目录下 新建.vscode 目录 注入文件 

### task.json

```
{

  "version": "2.0.0",

  

  "tasks": [

    {

      "label": "tmux: backend",

      "type": "process",

      "command": "${workspaceFolder}/.vscode/tmux-dev.sh",

      "args": [

        "backend"

      ],

      "isBackground": true,

      "problemMatcher": [],

      "presentation": {

        "reveal": "always",

        "panel": "dedicated",

        "focus": false,

        "clear": false,

        "showReuseMessage": false,

        "close": false

      }

    },

  

    {

      "label": "tmux: frontend",

      "type": "process",

      "command": "${workspaceFolder}/.vscode/tmux-dev.sh",

      "args": [

        "frontend"

      ],

      "isBackground": true,

      "problemMatcher": [],

      "presentation": {

        "reveal": "always",

        "panel": "dedicated",

        "focus": false,

        "clear": false,

        "showReuseMessage": false,

        "close": false

      }

    },

  

    {

      "label": "tmux: k8s",

      "type": "process",

      "command": "${workspaceFolder}/.vscode/tmux-dev.sh",

      "args": [

        "k8s"

      ],

      "isBackground": true,

      "problemMatcher": [],

      "presentation": {

        "reveal": "always",

        "panel": "dedicated",

        "focus": false,

        "clear": false,

        "showReuseMessage": false,

        "close": false

      }

    },

  

    {

      "label": "tmux: dev",

      "type": "process",

      "command": "${workspaceFolder}/.vscode/tmux-dev.sh",

      "args": [

        "dev"

      ],

      "isBackground": true,

      "problemMatcher": [],

      "presentation": {

        "reveal": "always",

        "panel": "dedicated",

        "focus": true,

        "clear": false,

        "showReuseMessage": false,

        "close": false

      }

    },

  

    {

      "label": "Open tmux workspace",

      "dependsOn": [

        "tmux: backend",

        "tmux: frontend",

        "tmux: k8s",

        "tmux: dev"

      ],

      "dependsOrder": "parallel",

      "runOptions": {

        "runOn": "folderOpen"

      },

      "problemMatcher": []

    }

  ]

}




```


### tmux-dev.sh
```
# tmux-dev.sh
#!/usr/bin/env bash

set -e

  

TYPE="$1"

  

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

PROJECT_NAME="$(basename "$ROOT_DIR" | tr ' ' '-' | tr -cd '[:alnum:]_-')"

  

SESSION="${PROJECT_NAME}-${TYPE}"

NEW_SESSION=false

  

# 自动判断前端目录

if [ -d "$ROOT_DIR/frontend" ]; then

    FRONTEND_DIR="$ROOT_DIR/frontend"

elif [ -d "$ROOT_DIR/myapp/frontend" ]; then

    FRONTEND_DIR="$ROOT_DIR/myapp/frontend"

else

    FRONTEND_DIR=""

fi

  

create_session() {

    local cwd="$1"

  

    if [ ! -d "$cwd" ]; then

        echo "目录不存在: $cwd"

        exit 1

    fi

  

    if ! tmux has-session -t "$SESSION" 2>/dev/null; then

        tmux new-session \

            -d \

            -s "$SESSION" \

            -c "$cwd"

  

        NEW_SESSION=true

    fi

}

  

case "$TYPE" in

  

    backend)

        create_session "$ROOT_DIR"

  

        if [ "$NEW_SESSION" = true ]; then

            tmux send-keys \

                -t "${SESSION}:0.0" \

                "source ../.ai-venv/bin/activate && PYTHONPATH=$(pwd) python myapp/run.py" \

                C-m

        fi

        ;;

  

    frontend)

        if [ -z "$FRONTEND_DIR" ]; then

            echo "找不到前端目录"

            echo "检查过:"

            echo "  $ROOT_DIR/frontend"

            echo "  $ROOT_DIR/myapp/frontend"

            exit 1

        fi

  

        create_session "$FRONTEND_DIR"

  

        if [ "$NEW_SESSION" = true ]; then

            tmux send-keys \

                -t "${SESSION}:0.0" \

                "npm run start" \

                C-m

        fi

        ;;

  

    k8s)

        create_session "$ROOT_DIR"

  

        if [ "$NEW_SESSION" = true ]; then

            tmux send-keys \

                -t "${SESSION}:0.0" \

                "telepresence connect -n infra && telepresence intercept --port 80 kubeflow-dashboard" \

                C-m

        fi

        ;;

  

    dev)

        create_session "$ROOT_DIR"

        ;;

  

    *)

        echo "Usage: $0 {backend|frontend|k8s|dev}"

        exit 1

        ;;

esac

  

exec env -u TMUX tmux attach-session -t "$SESSION"
```