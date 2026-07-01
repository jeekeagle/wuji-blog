/**
 * 给站内链接加 base 前缀，兼容子路径部署（GitHub Pages 项目页）。
 *
 * 用法：
 *   href={siteUrl("/posts")}
 *   href={siteUrl(`/tags/${tag}/`)}
 *   href={siteUrl("/rss.xml")}
 *
 * 部署到根域（自定义域名 / Vercel）时 BASE_URL="/"，行为不变。
 */
export function siteUrl(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  // path 已带 base 前缀就别重复加
  if (path.startsWith(base + "/") || path === base) return path;
  if (path.startsWith("/")) return `${base}${path}`;
  return `${base}/${path}`;
}
