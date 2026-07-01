import type { Root, Element } from "hast";
import { visit } from "unist-util-visit";

/**
 * Rehype 插件：给 Markdown 渲染后的 HTML 里「绝对路径」拼上站点 base 前缀。
 *
 *   <img src="/images/foo.png">   →   <img src="/wuji-blog/images/foo.png">
 *   <a   href="/about">           →   <a   href="/wuji-blog/about">
 */
export function rehypeBasePrefix(basePath: string) {
  const prefix = basePath.replace(/\/$/, "");
  return () => (tree: Root) => {
    if (!prefix) return;
    visit(tree, "element", (node: Element) => {
      if (node.tagName !== "a" && node.tagName !== "img") return;
      if (!node.properties) return;
      for (const attr of ["href", "src"] as const) {
        const value = node.properties[attr];
        if (typeof value !== "string") continue;
        if (
          !value.startsWith("/") ||         // 不是绝对路径
          value.startsWith("//") ||         // 协议相对
          value.startsWith(prefix + "/") || // 已带前缀
          value === prefix
        ) continue;
        node.properties[attr] = `${prefix}${value}`;
      }
    });
  };
}