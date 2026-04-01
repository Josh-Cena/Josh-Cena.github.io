import type { Plugin } from "unified";
import type { Root } from "hast";
import { extractDate } from "../../src/normalize-route.ts";
import { createImportDeclaration, createJSXElement } from "./utils.ts";

const rehypeBlog: Plugin = () => (ast, vFile) => {
  if (!vFile.dirname?.includes("/blog")) return;
  const { children } = ast as Root;
  const firstHeading = children.findIndex(
    (node) => node.type === "element" && node.tagName === "h1",
  );
  children.splice(
    firstHeading + 1,
    0,
    createImportDeclaration("PostData", "@/components/PostData"),
    createJSXElement("PostData", [
      { name: "frontMatter", value: "frontMatter" },
      { name: "date", value: `"${extractDate(vFile.basename!)}"` },
    ]),
  );
};

export default rehypeBlog;
