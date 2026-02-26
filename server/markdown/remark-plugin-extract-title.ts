import type { Plugin } from "unified";
import { toString } from "mdast-util-to-string";
import type { Root, Heading, Literal } from "mdast";

const remarkExtractTitle: Plugin = () => (ast, vFile) => {
  const { children } = ast as Root;
  if (!children.length) return;
  const firstHeading = children.findIndex(
    (node): node is Heading => node.type === "heading" && node.depth === 1,
  );
  if (firstHeading === -1) throw new Error("Markdown file must have H1");
  const frontMatter = children.find((node) => node.type === "yaml");
  if (!/notes\/aoc\/\d{4}\/\d/u.test(vFile.path)) {
    // AoC notes are handled by remark-plugin-aoc
    const title = children[firstHeading]!;
    const titleText = toString(title).replaceAll('"', '\\"');
    if (!frontMatter) {
      children.unshift({
        type: "yaml",
        value: `title: "${titleText}"`,
      });
    } else {
      (frontMatter as Literal).value += `\ntitle: "${titleText}"`;
    }
  }
};

export default remarkExtractTitle;
