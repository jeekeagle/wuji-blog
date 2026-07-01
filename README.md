# 无记 · Zero

一片留白的数字花园。

基于 [AstroPaper](https://github.com/satnaing/astro-paper) 主题魔改，去掉了原主题的英文示例内容与西方社交分享入口，整体调成偏东方的禅意风格。

## 本地开发

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # 构建 + pagefind 索引
```

## 部署

- 域名：`https://jeekeagle.github.io/NextBlog/`
- 部署方式：GitHub Pages（后续切 Vercel，只改 `src/config.ts` 的 `website`）

## 目录

- `src/data/blog/` — 文章（Markdown）
- `src/config.ts` — 站点元信息（标题/域名/作者/描述）
- `src/styles/global.css` — 设计 tokens（颜色/字体/动效）
- `src/pages/index.astro` — 首页

## 写作规范

- `pubDatetime` 必须是**过去时间**（定时发布机制）
- 北京时间 5:00 = UTC 前一天 21:00
- 文章从 `h2` 开始，不用 `h1`
- 翻译文章加 `canonicalURL`
