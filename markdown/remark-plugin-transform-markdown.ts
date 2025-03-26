import type { Plugin } from "unified";
import type { Root, Heading, Literal } from "mdast";
import type { Nodes } from "hast";
import { toText } from "hast-util-to-text";

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
  if (vFile.dirname?.includes("blog")) {
    children.splice(
      firstHeading + 1,
      0,
      {
        type: "mdxjsEsm",
        value: 'import PostData from "@/components/PostData";',
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
                      name: "PostData",
                    },
                  },
                ],
                source: {
                  type: "Literal",
                  value: "@/components/PostData",
                  raw: '"@/components/PostData"',
                },
              },
            ],
            sourceType: "module",
            comments: [],
          },
        },
      },
      {
        type: "mdxJsxFlowElement",
        name: "PostData",
        attributes: [
          {
            type: "mdxJsxAttribute",
            name: "frontMatter",
            value: {
              type: "mdxJsxAttributeValueExpression",
              value: "frontMatter",
              data: {
                estree: {
                  type: "Program",
                  body: [
                    {
                      type: "ExpressionStatement",
                      expression: {
                        type: "Identifier",
                        name: "frontMatter",
                      },
                    },
                  ],
                  sourceType: "module",
                  comments: [],
                },
              },
            },
          },
        ],
        children: [],
      },
    );
  }
};

export default transformMarkdown;
