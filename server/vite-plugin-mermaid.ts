import { type Plugin, transformWithEsbuild } from "vite";
import FS from "node:fs/promises";
import Path from "node:path";
import puppeteer from "puppeteer";
import { renderMermaid, type ParseMDDOptions } from "@mermaid-js/mermaid-cli";

async function runMmdc(code: string, options: ParseMDDOptions) {
  const browser = await puppeteer.launch();
  try {
    const { data } = await renderMermaid(browser, code, "svg", options);
    return new TextDecoder().decode(data);
  } finally {
    await browser.close();
  }
}

async function diagramCode({
  id,
  lightSVG,
  darkSVG,
}: {
  id: string;
  lightSVG: string;
  darkSVG: string;
}): Promise<string> {
  const result = await transformWithEsbuild(
    `import { useColorMode } from "@/context/ColorMode";

export default function Diagram() {
  const { colorMode } = useColorMode();
  const svg = colorMode === "dark" ? \`${darkSVG}\` : \`${lightSVG}\`;
  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
}
`,
    id,
    { loader: "tsx", target: "esnext" },
  );
  return result.code;
}

export default function mermaidPlugin(): Plugin {
  return {
    name: "vite-plugin-mermaid",
    enforce: "pre",

    async load(id) {
      if (!id.endsWith(".mmd")) return null;
      this.addWatchFile(id);
      const source = await FS.readFile(id, "utf8");
      const svgId = Path.basename(id, ".mmd");
      const [lightSVG, darkSVG] = await Promise.all([
        runMmdc(source, {
          svgId,
          mermaidConfig: { theme: "default" },
          backgroundColor: "var(--color-background)",
        }),
        runMmdc(source, {
          svgId,
          mermaidConfig: { theme: "dark" },
          backgroundColor: "var(--color-background)",
        }),
      ]);
      return diagramCode({ id, lightSVG, darkSVG });
    },

    handleHotUpdate(ctx) {
      if (ctx.file.endsWith(".mmd")) {
        const mod = ctx.server.moduleGraph.getModuleById(ctx.file);
        if (mod) ctx.server.moduleGraph.invalidateModule(mod);
      }
    },
  };
}
