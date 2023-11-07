import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import transformMarkdown from "./markdown/remark-plugin-transform-markdown.js";
import remarkMDXFrontmatter from "remark-mdx-frontmatter";

export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [
          remarkGfm,
          remarkFrontmatter,
          transformMarkdown,
          [remarkMDXFrontmatter, { name: "frontMatter" }],
        ],
        providerImportSource: "@mdx-js/react",
      }),
    },
    react(),
    svgr(),
  ],
  define: {
    "process.env": {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
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
