import { BLOG_PATH } from "@/content.config";
import { slugifyStr } from "./slugify";

/**
 * Get the path of a blog post.
 *
 * @param id        post id (slug)
 * @param filePath  post file path
 * @param includeBase  是否包含 `/posts` 前缀（默认 true）—— 详情页路由需要 false
 * @param includeSiteBase  是否在结果前拼上 import.meta.env.BASE_URL（默认 true）——
 *                        路由参数（比如 [...slug]）需要 false，避免重复
 */
export function getPath(
  id: string,
  filePath: string | undefined,
  includeBase = true,
  includeSiteBase = true
) {
  const pathSegments = filePath
    ?.replace(BLOG_PATH, "")
    .split("/")
    .filter(path => path !== "")
    .filter(path => !path.startsWith("_"))
    .slice(0, -1)
    .map(segment => slugifyStr(segment));

  const basePath = includeBase ? "/posts" : "";
  const blogId = id.split("/");
  const slug = blogId.length > 0 ? blogId.slice(-1) : blogId;

  const relPath =
    !pathSegments || pathSegments.length < 1
      ? [basePath, slug].join("/")
      : [basePath, ...pathSegments, slug].join("/");

  if (!includeSiteBase) return relPath;

  const siteBase = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (siteBase && !relPath.startsWith(siteBase)) {
    return `${siteBase}${relPath.startsWith("/") ? "" : "/"}${relPath}`;
  }
  return relPath;
}
