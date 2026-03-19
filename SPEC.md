# Jon's Blog — 项目规范

## 1. Concept & Vision

一个极简但有灵魂的技术博客。去除一切装饰性杂物，让文字和代码成为主角。设计语言借鉴日式俳句的「留白」美学——不是少即是多，而是每一处空白都有存在的理由。给读者一种走进安静图书馆的感觉：专注、沉静、值得停留。

## 2. Design Language

**Aesthetic direction:** 日式极简 + 瑞士网格系统。干净得像一张好的米色纸。

**Color palette:**
- Background: `#FAFAF8` (暖白，非纯白)
- Text primary: `#1A1A1A` (近黑，非纯黑)
- Text secondary: `#6B6B6B` (中灰)
- Accent: `#C85A3A` (赤陶色，来源于古书记批注的朱红)
- Code background: `#F2F2EF` (微暖灰)
- Border: `#E5E5E0`

**Typography:**
- 标题: `"Noto Serif SC"`, serif — 中文衬线，有文学气息
- 正文: `"Noto Sans SC"`, sans-serif — 清晰易读
- 代码: `"JetBrains Mono"`, monospace — 程序员标配
- 字重: 标题 700，正文 400，代码 400

**Spatial system:**
- 基础单位: 8px
- 内容最大宽度: 720px
- 段落间距: 24px
- 大区块间距: 64px

**Motion philosophy:**
- 页面切换: 无过度动画，只做 opacity 0→1，300ms ease-out
- 悬停交互: color transition 150ms，不做 scale 变化
- 滚动渐入: `IntersectionObserver` 触发 opacity + translateY，400ms

**Visual assets:**
- 无装饰性图片
- 代码高亮: 基于 Prism.js 的 `Tomorrow Night` 主题
- 留白即装饰

## 3. Layout & Structure

```
┌────────────────────────────────────────────┐
│  Header: 博客名 (左) · 导航链接 (右)        │
├────────────────────────────────────────────┤
│                                            │
│  Hero area: 文章标题 + 日期 + 标签          │
│                                            │
├────────────────────────────────────────────┤
│  Content: 正文 (单栏，720px max)            │
│  - 段落间距 24px                            │
│  - 二级标题上方间距 48px                    │
│  - 代码块左侧 padding 24px                  │
│                                            │
├────────────────────────────────────────────┤
│  Footer: 版权 + 社交链接 (GitHub)           │
└────────────────────────────────────────────┘
```

**响应式策略:**
- Desktop (>768px): 完整布局
- Mobile (<768px): 字号缩小 10%，侧边距收窄到 24px

## 4. Features & Interactions

**文章列表页:**
- 展示所有文章，按时间倒序
- 每篇显示: 标题 + 日期 + 摘要(首段截取 120 字)
- 点击标题进入详情页
- 悬停标题: 颜色变为 accent

**文章详情页:**
- 完整正文渲染
- 代码块: 复制按钮(右上角)，点击后显示 "Copied!" 2 秒
- 返回链接 → 列表页
- 阅读时间估算(基于字数)

**首页:**
- 只有最新 3 篇文章的预览
- 每篇: 标题 + 日期 + 标签
- 「查看更多文章」链接 → 列表页

**标签系统:**
- 每篇文章可打多个标签
- 标签云在列表页侧边(桌面端)或顶部(移动端)
- 点击标签过滤文章列表

**交互细节:**
- 所有链接悬停: color → accent, 150ms transition
- 文章卡片悬停: 无动画，保持安静感
- 页面切换: 内容区 fade-in 300ms

**边界情况:**
- 空文章列表: 显示「暂无文章，敬请期待」
- 文章不存在: 404 页面，简洁风格

## 5. Component Inventory

**Header:**
- 左侧: 博客名 "Jon のBlog" → 回到首页
- 右侧: 导航 (首页 / 文章 / 关于)
- 状态: 当前页链接加下划线

**ArticleCard:**
- 标题(链接) + 日期 + 标签列表 + 摘要
- 默认: 标题 #1A1A1A
- 悬停: 标题 #C85A3A

**ArticleContent:**
- 渲染后的 Markdown HTML
- 标题 h1/h2/h3 样式
- 段落 p，行高 1.8
- 代码块 pre+code，背景 #F2F2EF，左侧 border-left 3px accent
- 行内代码 code，背景同上
- 引用 blockquote，左 border accent
- 链接 a，underline → accent color

**Tag:**
- 小圆角标签，背景 #F2F2EF，文字 #6B6B6B
- 悬停: 背景 #E5E5E0
- 点击: 过滤文章

**Footer:**
- 版权年份 + "Built with love" + GitHub 链接
- 字号小，颜色 secondary

**CopyButton:**
- 位置: 代码块右上角
- 默认: "Copy" 文字，opacity 0.5
- 悬停: opacity 1
- 点击后: "Copied!" 2 秒

## 6. Technical Approach

**框架:** Next.js 14 (App Router)

**内容管理:**
- 文章存储在 `content/posts/` 目录
- Markdown 文件 + frontmatter (title, date, tags, summary)
- 使用 `gray-matter` 解析 frontmatter
- 使用 `react-markdown` + `rehype-highlight` 渲染

**样式:**
- Tailwind CSS
- 自定义 CSS 变量(颜色、字体)
- 全局样式文件: `app/globals.css`

**页面路由:**
- `/` → 首页 (最新 3 篇)
- `/posts` → 文章列表
- `/posts/[slug]` → 文章详情
- `/about` → 关于页

**部署:**
- Vercel (GitHub 一键接入)
- 自动部署到 `.vercel.app` 域名

**性能目标:**
- LCP < 1.5s
- 无需 JS 的静态内容(文章)优先服务端渲染
