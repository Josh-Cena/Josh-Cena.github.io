import type { Plugin } from "unified";
import type { Root, Code } from "mdast";
import { visit } from "unist-util-visit";

import { createImportDeclaration, createJSXElement } from "./utils.ts";

const remarkCanvas: Plugin = () => (ast) => {
  const { children } = ast as Root;
  let usesCanvas = false as boolean;
  visit(ast, "code", (node: Code) => {
    if (
      (node.lang === "js" || node.lang === "ts") &&
      node.meta?.startsWith("canvas")
    ) {
      const props = node.meta
        .split(" ")
        .slice(1)
        .map((prop) => prop.split("="));
      const widthProp = props.find(([name]) => name === "width");
      const heightProp = props.find(([name]) => name === "height");
      if (!widthProp || !heightProp) {
        throw new Error(
          "Canvas code block must specify width and height props in meta.",
        );
      }
      Object.assign(
        node,
        createJSXElement("Canvas", [
          {
            name: "code",
            value: `(ctx, width, height, textColor, colorMode) => {\n${node.value}\n}`,
          },
          ...props.map(([name, value]) => ({
            name: name!,
            value: value ?? "true",
          })),
        ]),
      );
      usesCanvas = true;
    }
  });
  if (usesCanvas)
    children.unshift(createImportDeclaration("Canvas", "@/components/Canvas"));
};

export default remarkCanvas;
