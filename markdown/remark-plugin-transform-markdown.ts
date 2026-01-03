import type { Plugin } from "unified";
import type { Root, Heading, Literal, Image, RootContent } from "mdast";
import type { Nodes } from "hast";
import { toText } from "hast-util-to-text";
import { visit } from "unist-util-visit";

function createImportDeclaration(
  localName: string,
  sourceValue: string,
): RootContent {
  return {
    type: "mdxjsEsm",
    value: `import ${localName} from "${sourceValue}";`,
    data: {
      estree: {
        type: "Program",
        body: [
          {
            type: "ImportDeclaration",
            specifiers: [
              {
                type: "ImportDefaultSpecifier",
                local: {
                  type: "Identifier",
                  name: localName,
                },
              },
            ],
            source: {
              type: "Literal",
              value: sourceValue,
              raw: `"${sourceValue}"`,
            },
          },
        ],
        sourceType: "module",
        comments: [],
      },
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
          estree: {
            type: "Program",
            body: [
              {
                type: "ExpressionStatement",
                expression: {
                  type: "Identifier",
                  name: attr.value,
                },
              },
            ],
            sourceType: "module",
            comments: [],
          },
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
