import Path from "node:path";
import type { Plugin } from "unified";
import type {
  Root,
  Heading,
  Literal,
  Image,
  RootContent,
  Code,
  Link,
  PhrasingContent,
} from "mdast";
import type { Nodes } from "hast";
import { toText } from "hast-util-to-text";
import { visit } from "unist-util-visit";
import * as Acorn from "acorn";
import Yaml from "yaml";
import type { Program } from "estree";

import { normalizeRoute } from "../../src/normalize-route.ts";

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

const languages: { [year: number]: string } = {
  2019: "C++",
  2020: "Python",
  2021: "TypeScript",
  2022: "Haskell",
  2023: "R",
  2024: "OCaml",
  2025: "Rust",
};

const transformMarkdown: Plugin = () => (ast, vFile) => {
  const { children } = ast as Root;
  if (!children.length) return;
  const firstHeading = children.findIndex(
    (node): node is Heading => node.type === "heading" && node.depth === 1,
  );
  if (!firstHeading) throw new Error("Markdown file must have H1");
  const frontMatter = children.find((node) => node.type === "yaml");
  const title = children[firstHeading]!;
  let titleText = toText(title as Nodes);
  if (/notes\/aoc\/\d{4}\/\d/u.test(vFile.path)) {
    const { year, day } = /notes\/aoc\/(?<year>\d{4})\/(?<day>\d{1,2})/u.exec(
      vFile.path,
    )!.groups! as {
      year: `${number}`;
      day: `${number}`;
    };
    const { tags } = Yaml.parse((frontMatter as Literal).value) as {
      tags: string[];
    };
    const problemCode = `Advent of Code ${year} - Day ${day}`;
    (frontMatter as Literal).value += `
description: "${problemCode}: ${titleText}, a problem that involves ${new Intl.ListFormat("en-US").format(tags)}. Solution written in ${languages[year]!}, with detailed walkthrough and proof."
year: ${year}
day: ${day}`;
    (title as Heading).children = [
      {
        type: "text",
        value: problemCode,
      },
      {
        type: "mdxJsxFlowElement",
        name: "span",
        children: (title as Heading).children,
        attributes: [
          {
            type: "mdxJsxAttribute",
            name: "className",
            value: {
              type: "mdxJsxAttributeValueExpression",
              value: `"subtitle"`,
              data: {
                estree: Acorn.parse(`"subtitle"`, {
                  ecmaVersion: "latest",
                  sourceType: "module",
                }) as unknown as Program,
              },
            },
          },
        ],
      } as unknown as PhrasingContent,
    ];
    titleText = `${problemCode}: ${titleText}`;
  }
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
  children.splice(
    firstHeading + 1,
    0,
    ...images.map((url, index) =>
      createImportDeclaration(`imageSrc${index}`, url),
    ),
  );
  visit(ast, "image", (node: Image) => {
    const imageIndex = images.indexOf(node.url);
    if (imageIndex === -1) return;
    Object.assign(
      node,
      createJSXElement("img", [
        { name: "src", value: `imageSrc${imageIndex}` },
        { name: "alt", value: `"${node.alt ?? ""}"` },
      ]),
    );
  });
  visit(ast, "link", (node: Link) => {
    if (!node.url.startsWith(".")) return;
    const fullPath = Path.join(vFile.dirname ?? "", node.url);
    const pagesRelative = fullPath.replace(/^.*src\/pages\//u, "");
    node.url = normalizeRoute(pagesRelative);
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
  if (/notes\/aoc\/\d{4}\/\d/u.test(vFile.path)) {
    children.splice(
      firstHeading + 1,
      0,
      createImportDeclaration("{ FrontMatter, Footer }", "../_components"),
      createJSXElement("FrontMatter", [
        { name: "frontMatter", value: "frontMatter" },
      ]),
    );
    children.push(
      createJSXElement("Footer", [
        { name: "frontMatter", value: "frontMatter" },
      ]),
    );
  }
};

export default transformMarkdown;
