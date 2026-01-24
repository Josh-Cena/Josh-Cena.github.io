import Path from "node:path";
import type { Plugin } from "unified";
import type { Link } from "mdast";
import { visit } from "unist-util-visit";
import { normalizeRoute } from "../../src/normalize-route.ts";

const remarkMDLink: Plugin = () => (ast, vFile) => {
  visit(ast, "link", (node: Link) => {
    if (!node.url.startsWith(".")) return;
    const fullPath = Path.join(vFile.dirname ?? "", node.url);
    const pagesRelative = fullPath.replace(/^.*src\/pages\//u, "");
    node.url = normalizeRoute(pagesRelative);
  });
};

export default remarkMDLink;
