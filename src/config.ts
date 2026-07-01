export const SITE = {
  // 暂时指向 GitHub Pages 仓库页，后续切到 Vercel 只需改这里
  website: "https://jeekeagle.github.io/NextBlog/",
  author: "theo",
  profile: "https://github.com/jeekeagle",
  desc: "无记 —— 一片留白的数字花园。",
  title: "无记",
  ogImage: "og.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "在 GitHub 编辑",
    url: "https://github.com/jeekeagle/NextBlog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format)
} as const;
