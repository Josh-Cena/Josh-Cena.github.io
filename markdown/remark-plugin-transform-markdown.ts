import type { Plugin } from "unified";
import type { Root, Heading, Literal, Image, RootContent, Code } from "mdast";
import type { Nodes } from "hast";
import { toText } from "hast-util-to-text";
import { visit } from "unist-util-visit";
import * as Acorn from "acorn";
import type { Program } from "estree";

function createImportDeclaration(
  localName: string,
  sourceValue: string,
): RootContent {
  const code = `import ${localName} from "${sourceValue}";`;
  return {
    type: "mdxjsEsm",
    value: `import ${localName} from "${sourceValue}";`,
    data: {
      estree: Acorn.parse(code, {
        ecmaVersion: "latest",
        sourceType: "module",
      }) as unknown as Program,
    },
  };
}

function createJSXElement(
  name: string,
  attributes: { name: string; value: string }[],
): RootContent {
  return {
    type: "mdxJsxFlowElement",
    name,
    attributes: attributes.map((attr) => ({
      type: "mdxJsxAttribute",
      name: attr.name,
      value: {
        type: "mdxJsxAttributeValueExpression",
        value: attr.value,
        data: {
          estree: Acorn.parse(attr.value, {
            ecmaVersion: "latest",
            sourceType: "module",
          }) as unknown as Program,
        },
      },
    })),
    children: [],
  };
}

const transformMarkdown: Plugin = () => (ast, vFile) => {
  const { children } = ast as Root;
  if (!children.length) return;
  const firstHeading = children.findIndex(
    (node): node is Heading => node.type === "heading" && node.depth === 1,
  );
  if (!firstHeading) return;
  const title = children[firstHeading];
  const titleText = title ? toText(title as Nodes) : "";
  const frontMatter = children.find((node) => node.type === "yaml");
  if (!frontMatter) {
    children.unshift({
      type: "yaml",
      value: `title: ${titleText}`,
    });
  } else {
    (frontMatter as Literal).value += `\ntitle: "${titleText}"`;
  }
  const images: string[] = [];
  visit(ast, "image", (node: Image) => {
    if (/^https?:\/\//u.test(node.url)) return;
    if (images.includes(node.url)) return;
    images.push(node.url);
  });
  children.unshift(
    ...images.map((url, index) =>
      createImportDeclaration(`Image${index}`, url),
    ),
  );
  visit(ast, "image", (node: Image) => {
    const imageIndex = images.indexOf(node.url);
    if (imageIndex === -1) return;
    Object.assign(
      node,
      createJSXElement("img", [
        { name: "src", value: `Image${imageIndex}` },
        // TODO: the ESTree node type should not be Identifier
        { name: "alt", value: `"${node.alt ?? ""}"` },
      ]),
    );
  });
  let usesMermaid = false as boolean;
  let usesCanvas = false as boolean;
  visit(ast, "code", (node: Code) => {
    if (node.lang === "mermaid") {
      Object.assign(
        // TODO: can the diagram be rendered at compile time and directly
        // inserted as image?
        node,
        createJSXElement("Mermaid", [
          {
            name: "code",
            value: `\`${node.value.replaceAll(/[`$\\]/gu, "\\$&")}\``,
          },
        ]),
      );
      usesMermaid = true;
    } else if (
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
            value: `(ctx, width, height, textColor) => {\n${node.value}\n}`,
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
  if (usesMermaid) {
    children.splice(
      firstHeading + 1,
      0,
      createImportDeclaration("Mermaid", "@/components/Mermaid"),
    );
  }
  if (usesCanvas) {
    children.splice(
      firstHeading + 1,
      0,
      createImportDeclaration("Canvas", "@/components/Canvas"),
    );
  }
  if (vFile.dirname?.includes("blog")) {
    children.splice(
      firstHeading + 1,
      0,
      createImportDeclaration("PostData", "@/components/PostData"),
      createJSXElement("PostData", [
        { name: "frontMatter", value: "frontMatter" },
      ]),
    );
  }
};

export default transformMarkdown;
