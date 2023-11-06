import type { Plugin } from "unified";
import type { Root, Heading, Literal } from "mdast";
import { toText } from "hast-util-to-text";

const populateFrontMatter: Plugin = () => (ast) => {
  const { children } = ast as Root;
  if (!children.length) return;
  const firstHeading = children.findIndex(
    (node): node is Heading => node.type === "heading" && node.depth === 1,
  );
  if (!firstHeading) return;
  const title = toText(children[firstHeading]);
  const frontMatter = children.find((node) => node.type === "yaml");
  if (!frontMatter) {
    children.unshift({
      type: "yaml",
      value: `title: ${title}`,
    });
  } else {
    (frontMatter as Literal).value += `\ntitle: ${title}`;
  }
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
};

export default populateFrontMatter;
