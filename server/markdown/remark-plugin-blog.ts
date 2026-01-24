import type { Plugin } from "unified";
import type { Root } from "mdast";
import { createImportDeclaration, createJSXElement } from "./utils.ts";

const remarkBlog: Plugin = () => (ast, vFile) => {
  if (!vFile.dirname?.includes("/blog/")) return;
  const { children } = ast as Root;
  const firstHeading = children.findIndex(
    (node) => node.type === "heading" && node.depth === 1,
  );
  children.splice(
    firstHeading + 1,
    0,
    createImportDeclaration("PostData", "@/components/PostData"),
    createJSXElement("PostData", [
      { name: "frontMatter", value: "frontMatter" },
    ]),
  );
};

export default remarkBlog;
