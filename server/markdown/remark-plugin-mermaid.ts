import FS from "node:fs/promises";
import Path from "node:path";
import { createHash } from "node:crypto";
import type { Plugin } from "unified";
import type { Root, Code } from "mdast";
import { visit } from "unist-util-visit";

import { createImportDeclaration, createJSXElement } from "./utils.ts";

const remarkMermaid: Plugin = () => async (ast) => {
  const { children } = ast as Root;
  const mermaidCodes = new Map<string, string>();
  visit(ast, "code", (node: Code) => {
    if (node.lang === "mermaid") {
      const props = (node.meta ?? "")
        .split(" ")
        .slice(1)
        .map((prop) => prop.split("="));
      if (!mermaidCodes.has(node.value)) {
        const hash = createHash("sha256")
          .update(node.value)
          .digest("hex")
          .slice(0, 8);
        mermaidCodes.set(node.value, hash);
      }
      Object.assign(
        node,
        createJSXElement(
          `Diagram_${mermaidCodes.get(node.value)!}`,
          props.map(([name, value]) => ({
            name: name!,
            value: value ?? "true",
          })),
        ),
      );
    }
  });
  if (mermaidCodes.size > 0) {
    children.unshift(
      ...Array.from(mermaidCodes.values()).map((hash) =>
        createImportDeclaration(
          `Diagram_${hash}`,
          `assets/diagrams/${hash}.mmd`,
        ),
      ),
    );
    const outDir = Path.join(process.cwd(), "assets/diagrams");
    await FS.mkdir(outDir, { recursive: true });
    await Promise.all(
      Array.from(mermaidCodes.entries()).map(async ([code, hash]) => {
        const filePath = Path.join(outDir, `${hash}.mmd`);
        await FS.writeFile(filePath, code, "utf8");
      }),
    );
  }
};

export default remarkMermaid;
