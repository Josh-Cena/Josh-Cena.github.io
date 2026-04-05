import type { Plugin } from "unified";
import type { Root, Heading, PhrasingContent } from "mdast";
import { toString } from "mdast-util-to-string";
import * as Acorn from "acorn";
import type { Program } from "estree";

const remarkNACLO: Plugin = () => (ast, vFile) => {
  if (!/notes\/naclo\/\d{4}\/[A-Z]/u.test(vFile.path)) return;
  const { children } = ast as Root;
  const firstHeading = children.findIndex(
    (node) => node.type === "heading" && node.depth === 1,
  );
  const frontMatter = vFile.data.frontMatter as {
    title: string;
    description: string;
    year: number;
    prob: string;
    tags: string[];
  };
  const title = children[firstHeading]!;
  const titleText = toString(title);
  const { year, prob } = /notes\/naclo\/(?<year>\d{4})\/(?<prob>[A-Z])/u.exec(
    vFile.path,
  )!.groups! as {
    year: `${number}`;
    prob: string;
  };
  const { tags } = frontMatter;
  const problemCode = `NACLO ${year} - Problem ${prob}`;
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
  const fullTitle = `${problemCode}: ${titleText}`;
  frontMatter.title = fullTitle;
  frontMatter.description = `${problemCode}: ${titleText}, a problem that involves ${new Intl.ListFormat("en-US").format(tags)}. Detailed solution and walkthrough.`;
  frontMatter.year = Number(year);
  frontMatter.prob = prob;
};

export default remarkNACLO;
