import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import type { PluggableList } from "unified";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkFrontmatter from "remark-frontmatter";
import remarkSuperSub from "remark-supersub";
import rehypeKatex from "rehype-katex";
import { visualizer } from "rollup-plugin-visualizer";
import mdxMetaPlugin from "./server/vite-plugin-mdx-meta.ts";
import mermaidPlugin from "./server/vite-plugin-mermaid.ts";
import recmaExportFrontmatter from "./server/markdown/recma-plugin-export-frontmatter.ts";
import rehypeAOC from "./server/markdown/rehype-plugin-aoc.ts";
import rehypeBlog from "./server/markdown/rehype-plugin-blog.ts";
import rehypeNACLO from "./server/markdown/rehype-plugin-naclo.ts";
import remarkAOC from "./server/markdown/remark-plugin-aoc.ts";
import remarkCanvas from "./server/markdown/remark-plugin-canvas.ts";
import remarkExtractTitle from "./server/markdown/remark-plugin-extract-title.ts";
import remarkLocalImage from "./server/markdown/remark-plugin-local-image.ts";
import remarkMDLink from "./server/markdown/remark-plugin-md-link.ts";
import remarkMermaid from "./server/markdown/remark-plugin-mermaid.ts";
import remarkNACLO from "./server/markdown/remark-plugin-naclo.ts";
import remarkParseFrontmatter from "./server/markdown/remark-plugin-parse-frontmatter.ts";

// Our front matter setup is a bit complicated.
// We can't use remark-mdx-frontmatter because it breaks HMR:
// https://github.com/remcohaszing/remark-mdx-frontmatter/issues/9
// Therefore we need to do it in four steps:
// 1. remark-frontmatter to parse the front matter from MDX into AST
// 2. parse-frontmatter to parse raw YAML and put into vFile.data
// 3. a Recma plugin to define the front matter on the component itself
// so it can be accessed in routes.tsx without doing another query import
// 4. a Vite plugin to allow directly importing ?meta for tree-shakable
// imports for blog, AoC, etc. that don't need the full MDX content
const sharedRemarkPlugins: PluggableList = [
  remarkFrontmatter,
  remarkParseFrontmatter,
  remarkAOC,
  remarkExtractTitle,
  remarkNACLO,
];

export default defineConfig({
  plugins: [
    // Intercept .mdx?meta imports, so the MDX loader doesn't see it
    mdxMetaPlugin({
      remarkPlugins: [
        // Important: without this the parser would fail on math
        remarkMath,
        ...sharedRemarkPlugins,
      ],
    }),
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [
          [remarkGfm, { singleTilde: false }],
          remarkMath,
          remarkSuperSub,
          remarkCanvas,
          remarkLocalImage,
          remarkMDLink,
          remarkMermaid,
          ...sharedRemarkPlugins,
        ],
        rehypePlugins: [
          [
            rehypeKatex,
            {
              strict: (errorCode: string) =>
                errorCode === "unicodeTextInMathMode" ? "ignore" : "warn",
            },
          ],
          rehypeAOC,
          rehypeBlog,
          rehypeNACLO,
        ],
        recmaPlugins: [recmaExportFrontmatter],
        providerImportSource: "@mdx-js/react",
      }),
    },
    mermaidPlugin(),
    react({ include: /\.(?:mmd|js|jsx|ts|tsx)$/u }),
    svgr(),
    visualizer({ filename: "dist/static/bundle-map.html" }),
  ],
  define: { "process.env": { NODE_ENV: JSON.stringify(process.env.NODE_ENV) } },
  build: {
    cssCodeSplit: false,
    target: "es2022",
    manifest: true,
    rolldownOptions: {
      input: fileURLToPath(new URL("./src/client-entry.tsx", import.meta.url)),
    },
  },
  resolve: {
    mainFields: ["main"],
    alias: {
      assets: fileURLToPath(new URL("./assets", import.meta.url)),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
