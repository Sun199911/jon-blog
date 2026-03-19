---
title: "我的开发环境配置"
date: "2024-03-19"
tags: ["工具", "效率"]
summary: "用了这么多年终端，整理出一套最顺手的环境配置。VSCode + iTerm2 + zsh，记录一下方便以后换机器。"
---

换了两次电脑之后，我终于意识到一个问题：花时间配置环境是值得的，因为每次重装都在重新学习。

## 工具选择

**编辑器：** VSCode
不用花哨的 IDE，日常开发够用了。装了几个必备插件：
- GitLens — 看代码历史
- Error Lens — 错误直接在行内显示
- Import Cost — import 语句占用多大一目了然

**终端：** iTerm2 + zsh + Starship
放弃了原生 Terminal，iTerm2 的分屏和搜索好用太多。zsh 配合 Starship 提示符，速度和颜值都在线。

**命令行工具：**
- `eza` — 彩色目录列表，比 ls 好看
- `fzf` — 模糊搜索，历史命令再也不怕忘
- `ripgrep` — 搜索速度飞快

## SSH 配置

每次新机器最烦的就是 SSH key。整理了一份 `~/.ssh/config` 模板：

```bash
Host github
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519

Host server
  HostName 你的服务器 IP
  User root
  Port 22
  IdentityFile ~/.ssh/id_ed25519
```

## Git 别名

`.gitconfig` 里的几个常用缩写：

```bash
[alias]
  co = checkout
  br = branch
  ci = commit
  st = status
  lg = log --oneline --graph --decorate
```

## 写在最后

工具这东西，没有最好的，只有最顺手的。花时间调一次，之后每天都在省时间。

---
*这套配置在 macOS 上测试通过，其他系统大同小异。*
