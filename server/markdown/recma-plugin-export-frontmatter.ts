import type { Plugin } from "unified";
import type { Program } from "estree";
import * as Acorn from "acorn";
import { uneval } from "devalue";

const recmaExportFrontmatter: Plugin = () => (ast, vFile) => {
  const definition = Acorn.parse(
    `MDXContent.meta = ${uneval(vFile.data.frontMatter)}`,
    {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  ) as Program;

  (ast as Program).body.push(definition.body[0]!);
};

export default recmaExportFrontmatter;
