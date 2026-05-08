
# Chezmoi
一个跨平台的 dotfiles 管理工具，帮助你在多台机器间安全地同步配置文件


# 概述
Chez Moi 在法语中是“在我家”的意思。顾名思义，该工具也是用来管理位于家目录下各种配置文件（主要也就是各种点文件）的，并集成了诸如多设备同步、加密和脚本等各种高级功能。

chezmoi 的哲学是将所有文件托管到`~/.local/share/chezmoi`这个 Git 仓库，我们可以将已有的文件添加其中，也可以将其中的文件应用到实际的家目录，或者托管到 GitHub 等平台上。


# 安装

```
sh -c "$(curl -fsLS get.chezmoi.io)"
```


# 基本使用

如果你是第一次使用 chezmoi，可以遵循如下步骤开始：

1. `chezmoi init`: 该命令会在`~/.local/share/chezmoi`下初始化一个 Git 仓库。
2. `chezmoi add ~/.bashrc`: 将`~/.bashrc`纳入 chezmoi 的管理。其在`~/.local/share/chezmoi`下对应的文件是`dot_bashrc`, 下文统一称为源文件。
3. `chezmoi edit ~/.bashrc`: 编辑源文件。
4. `chezmoi diff`: 查看源文件和实际家目录下的对应文件的差异。
5. `chezmoi -v apply`: 将源文件应用到家目录。其中`-v`选项会显示对实际文件所做的更改，建议添加。
6. `chezmoi cd`: 进入`~/.local/share/chezmoi`.
7. `git add .`然后`git commit`: 提交更改。
8. 在 GitHub 下新建一个仓库(建议命令为`dotfiles`，这样在新机器的安装的时候可以使用`sh -c "$(curl -fsLS get.chezmoi.io)" -- init --apply $GITHUB_USERNAME`一键应用配置)，然后:


```
git remote add origin git@github.com:$GITHUB_USERNAME/dotfiles.git
git branch -M main
git push -u origin main
```

至此，你已经完成了对点文件的托管！

文档参考：
https://zhuanlan.zhihu.com/p/2017558515602990956

https://www.daucloud.com/posts/chezmoi/