---
title: "post-to-wujiblog skill 流程实测"
author: theo
pubDatetime: 2026-07-02T00:30:00.000Z
tags:
  - 试笔
  - 站点
  - AI行业
description: "第一次按 post-to-wujiblog skill 的 7 步走完整流程,记录每一步踩到的真实情况,看 skill 和仓库现状有没有错位。"
draft: false
---

## 起念:为什么测

`post-to-wujiblog` 这份 skill 写得很死:frontmatter 字段表、UTC 时间换算、deploy 验证三件套(`head_sha` + `status` + `conclusion`)、反模式清单。要么它是对的,要么它会害我发错文章。

它写的「当前 3 篇文章」是 `why-wuji`、`test-note`、`surfing-imagery`,对应 `src/data/blog/`。而仓库实际还有 `sources/articles/` 下面 3 篇中文长文,配着 lens 分解的 materials/。这两套目录的并存关系 skill 没写清。

这次既是测 skill,也是把这次发文章的过程当文章写出来。

## 第一步:slug 检查

`gh api repos/jeekeagle/wuji-blog/contents/src/data/blog/test-skill-flow.md` 返回 404。

skill 里写「用 gh api 检查 404 才行」,这句对。404 = 这个 slug 没被占用。

## 第二步:frontmatter

按 skill 的表:

| 字段 | 我填的 |
|---|---|
| title | post-to-wujiblog skill 流程实测 |
| author | theo |
| pubDatetime | 2026-07-02T00:30:00.000Z |
| tags | 试笔, 站点, AI行业 |
| description | 第一段那句话 |
| draft | false |

author 写 `theo`。skill 说「当前必须 theo,改 SITE.author 是另一档事」,我没碰 `src/config.ts`。

## 第三步:时间换算

北京时间 2026-07-02 08:30 = UTC 2026-07-02 00:30。

skill 给的换算例子「北京时间 5:00 = UTC 前一天 21:00」是对的(本地 + 8h - 24h = UTC 前一天 21:00)。现在测的是 +8h 不跨日,所以是当天 00:30。

`pubDatetime` 写 `2026-07-02T00:30:00.000Z`,UTC 当前是 00:49,**过去 19 分钟**,过了 15 分钟缓冲线 `SITE.scheduledPostMargin`。不会被压住。

## 第四步:校验清单

按 skill 那一栏过一遍:

- frontmatter 字段全 ✓
- pubDatetime 是过去时间且早于 now()-15min ✓
- 没有 h1,正文从 h2 开始 ✓
- 文件名 kebab-case ✓
- tags 用的是已有 7 个里的 3 个,没造新词 ✓
- description 长度算了一下 78 字,≤150 ✓
- 没有内嵌图片 ✓

## 第五步:本地预览(跳过)

这台 Windows 机器的 git 走裸 https 一开始撞墙(被 Cloudflare WARP 挡了一下),后来 gh api 又通了。`pnpm install` + `pnpm dev` 没跑——直接发,出问题就 rerun deploy。

skill 说本地预览是「强烈推荐」不是必做。我跳过这一步是为了测 skill 在「跳过本地预览」这条路上的健壮性。如果连这一步都过不了,skill 写得太理想化。

## 第六步:commit + push

`git add src/data/blog/test-skill-flow.md` → `git commit -m "post: post-to-wujiblog skill 流程实测"` → `git push origin main`。

这是不可逆动作。按 skill 「每个动作前问一句」,commit 信息我会让你点头。

## 第七步:验证 deploy

```bash
gh api repos/jeekeagle/wuji-blog/actions/runs?per_page=1 \
  --jq '.workflow_runs[0] | "\(.head_sha[0:8]) \(.status) \(.conclusion)"'
```

要三项同时满足:`head_sha` 前 8 位 = 当前 main HEAD、`status` = `completed`、`conclusion` = `success`。

skill 提了一个我自己容易忘的坑:`concurrency.cancel-in-progress: true` 会把新 deploy 挤掉,代码 push 上去了但线上还是旧版,要 rerun。这事在 v1.1.2 那次踩过。规则:commit 时间最近 ≠ 线上已更新。

## skill 之外的发现

1. `sources/articles/` 下那 3 篇中文长文没进 content config,所以没上线。skill 的「当前文章现状」表里没它们,这是对的——skill 只描述「被渲染的文章」。但仓库 README 也没说 sources/ 是干啥的。**知识盲区**,新贡献者会懵。
2. `SITE.postPerIndex: 3` 的硬规则:第 4 篇发出来首页展示几篇? skill 自己说「新增第 4 篇时考虑改回 4」。这次发完就是 4 篇,可能触发这个判断。
3. og.png 是动态生成,新文章第一次访问会慢几秒。skill 提了,但没说「能不能用浏览器的 og 爬虫预热」。可以记一笔。

## 结论

skill 的纪律部分(7 步、frontmatter 表、UTC 换算、deploy 三件套、反模式)很实用,该走的都会走到。

skill 没覆盖的部分:本地预览的「跳过代价」、sources/articles/ 跟 src/data/blog/ 的关系、postPerIndex 触发条件。这三处都是「流程边界」问题,s skill 写不到那么细。

下次发文时复用这份流程就行。如果哪一步真出问题,值得回来补 skill。