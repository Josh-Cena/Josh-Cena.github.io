import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import type { Yaml as YamlNode } from "mdast";
import Yaml from "yaml";

const remarkParseFrontmatter: Plugin = () => (ast, vFile) => {
  let hasFrontMatter = false as boolean;
  visit(ast, "yaml", (node: YamlNode) => {
    vFile.data.frontMatter = Yaml.parse(node.value);
    hasFrontMatter = true;
  });
  if (!hasFrontMatter) vFile.data.frontMatter = {};
};

export default remarkParseFrontmatter;
