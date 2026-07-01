---
title: "试笔 · 让站点先有第一道墨"
author: theo
pubDatetime: 2026-06-30T21:00:00.000Z
modDatetime: 2026-06-30T21:00:00.000Z
featured: true
tags:
  - 试笔
  - 随笔
  - 站点
description: "一篇用来打通发文流程的测试稿 —— 验证图片、列表、引用、代码、目录都能正常渲染。"
lang: zh
---

这篇只是试笔。先把站点打通 —— 文章 frontmatter、Markdown、图片、归档、标签、搜索索引、动态 OG 图，都让它跑一圈。

![试笔 · 一笔 ensō 与「無」印](/images/posts/test-enso.svg)

## 为什么先写一篇

任何写作系统如果第一篇不发出来，后面就是空转。
工具不落到内容上，就是纸上谈兵。
所以这次不留白，先把这一篇写完。

## 一些格式验证

- 普通列表项 1
- 普通列表项 2
- 普通列表项 3

行内 `code`、**加粗**、*斜体*、~~删除线~~ 都试一下。

> 引用块也试一下。
>
> 「内核越稳，开放的尺度就越大。」

## 代码块

```ts
// 一个最朴素的 debounce
export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  wait = 200,
) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}
```

## 表格

| 维度 | 旧 | 新 |
| --- | --- | --- |
| 强调色 | 琥珀 | 朱砂 |
| 背景 | 纯白 | 宣纸白 |
| 字体 | 通用无衬线 | 霞鹜文楷 |

## 收尾

下一篇再认真写。这只是落笔的第一下。