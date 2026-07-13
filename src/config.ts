export const SITE = {
  // 暂时指向 GitHub Pages 仓库页，后续切到 Vercel 只需改这里
  website: "https://jeekeagle.github.io/wuji-blog/",
  author: "theo",
  profile: "https://github.com/jeekeagle",
  desc: "无记 —— 一片留白的数字花园。",
  title: "无记",
  ogImage: "og.png",
  lightAndDarkMode: true,
  // 文章总数 3 篇时,首页显示 3 篇比"显示 4 篇剩下的 1 篇列表里空着"更克制。
  // 以后写满 4 篇再改回 4。
  postPerIndex: 6,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "在 GitHub 编辑",
    url: "https://github.com/jeekeagle/wuji-blog/edit/main/",
  },
  dynamicOgImage: false,  // 2026-07-13 disabled: Google Font CDN 400 in CI; OG images disabled site-wide until fonts stabilize
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-CN", // html lang code: zh-CN 比 zh 更精确,SEO/读屏都更友好
  timezone: "Asia/Shanghai", // Default global timezone (IANA format)
} as const;
