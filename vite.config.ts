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
import mermaidPlugin from "./server/vite-plugin-mermaid.ts";
import transformMarkdown from "./server/markdown/remark-plugin-transform-markdown.ts";

export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [
          remarkGfm,
          remarkMath,
          remarkFrontmatter,
          transformMarkdown,
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
