import type { Plugin } from "unified";
import type { Root } from "hast";
import { createImportDeclaration, createJSXElement } from "./utils.ts";

// Make this a Rehype plugin so that the footer comes after footnotes
const rehypeAOC: Plugin = () => (ast, vFile) => {
  if (!/notes\/aoc\/\d{4}\/\d/u.test(vFile.path)) return;
  const { children } = ast as Root;
  const firstHeading = children.findIndex(
    (node) => node.type === "element" && node.tagName === "h1",
  );
  children.splice(
    firstHeading + 1,
    0,
    createImportDeclaration(
      "{ ProblemHeader, ProblemFooter }",
      "../_components",
    ),
    createJSXElement("ProblemHeader", [
      { name: "frontMatter", value: "frontMatter" },
    ]),
  );
  children.push(
    createJSXElement("ProblemFooter", [
      { name: "frontMatter", value: "frontMatter" },
    ]),
  );
};

export default rehypeAOC;
