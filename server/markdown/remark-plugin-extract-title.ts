import type { Plugin } from "unified";
import { toString } from "mdast-util-to-string";
import type { Root, Heading } from "mdast";

const remarkExtractTitle: Plugin = () => (ast, vFile) => {
  const { children } = ast as Root;
  if (!children.length) return;
  const firstHeading = children.findIndex(
    (node): node is Heading => node.type === "heading" && node.depth === 1,
  );
  if (firstHeading === -1) throw new Error("Markdown file must have H1");
  const frontMatter = vFile.data.frontMatter as { title?: string };
  if (!/notes\/aoc\/\d{4}\/\d|notes\/naclo\/\d{4}\/[A-Z]/u.test(vFile.path)) {
    // AoC notes are handled by remark-plugin-aoc
    const title = children[firstHeading]!;
    const titleText = toString(title);
    frontMatter.title = titleText;
  }
};

export default remarkExtractTitle;
