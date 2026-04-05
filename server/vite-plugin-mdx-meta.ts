import FS from "node:fs/promises";
import Path from "node:path";
import type { Plugin } from "vite";
import { unified, type PluggableList } from "unified";
import { VFile } from "vfile";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import { uneval } from "devalue";

function mdxMetaPlugin({
  remarkPlugins,
}: {
  remarkPlugins: PluggableList;
}): Plugin {
  const prefix = "\0mdx-meta:";
  const processor = unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(remarkPlugins);

  return {
    name: "vite-plugin-mdx-meta",
    enforce: "pre",

    resolveId(source, importer) {
      if (!source.endsWith(".mdx?meta") || !importer) return null;

      const clean = source.slice(0, -"?meta".length);

      // Resolve relative to the importing module, or project root if none.
      const basedir = Path.dirname(importer);
      const abs = Path.resolve(basedir, clean);

      return prefix + abs;
    },

    async load(id) {
      if (!id.startsWith(prefix)) return null;

      const filepath = id.slice(prefix.length);
      const source = await FS.readFile(filepath, "utf8");

      const vFile = new VFile({ path: filepath, value: source });
      const ast = processor.parse(vFile);
      await processor.run(ast, vFile);

      const { frontMatter } = vFile.data;
      if (!frontMatter)
        throw new Error(`MDX file ${filepath} must have front matter`);
      return `export default ${uneval(frontMatter)};`;
    },
  };
}

export default mdxMetaPlugin;
