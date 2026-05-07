
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