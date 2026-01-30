import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkFrontmatter from "remark-frontmatter";
import remarkMDXFrontmatter from "remark-mdx-frontmatter";
import rehypeKatex from "rehype-katex";
import { visualizer } from "rollup-plugin-visualizer";
import mermaidPlugin from "./server/vite-plugin-mermaid.ts";
import remarkAOC from "./server/markdown/remark-plugin-aoc.ts";
import remarkBlog from "./server/markdown/remark-plugin-blog.ts";
import remarkCanvas from "./server/markdown/remark-plugin-canvas.ts";
import remarkExtractTitle from "./server/markdown/remark-plugin-extract-title.ts";
import remarkLocalImage from "./server/markdown/remark-plugin-local-image.ts";
import remarkMDLink from "./server/markdown/remark-plugin-md-link.ts";
import remarkMermaid from "./server/markdown/remark-plugin-mermaid.ts";

export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [
          remarkGfm,
          remarkMath,
          remarkFrontmatter,
          remarkAOC,
          remarkBlog,
          remarkCanvas,
          remarkExtractTitle,
          remarkLocalImage,
          remarkMDLink,
          remarkMermaid,
          [remarkMDXFrontmatter, { name: "frontMatter" }],
        ],
        rehypePlugins: [
          [
            rehypeKatex,
            {
              strict: (errorCode: string) =>
                errorCode === "unicodeTextInMathMode" ? "ignore" : "warn",
            },
          ],
        ],
        providerImportSource: "@mdx-js/react",
      }),
    },
    mermaidPlugin(),
    react({ include: /\.(?:mmd|js|jsx|ts|tsx)$/u }),
    svgr(),
    // @ts-expect-error: bad types
    visualizer({
      filename: "dist/static/bundle-map.html",
    }),
  ],
  define: {
    "process.env": {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  },
  build: {
    cssCodeSplit: false,
    target: "es2022",
  },
  resolve: {
    mainFields: ["main"],
    alias: {
      assets: fileURLToPath(new URL("./assets", import.meta.url)),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
