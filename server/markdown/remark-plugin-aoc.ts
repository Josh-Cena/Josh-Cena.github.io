import type { Plugin } from "unified";
import type { Root, Heading, PhrasingContent } from "mdast";
import { toString } from "mdast-util-to-string";
import * as Acorn from "acorn";
import type { Program } from "estree";

const languages: { [year: number]: string } = {
  2019: "C++",
  2020: "Python",
  2021: "TypeScript",
  2022: "Haskell",
  2023: "R",
  2024: "OCaml",
  2025: "Rust",
};

const remarkAOC: Plugin = () => (ast, vFile) => {
  if (!/notes\/aoc\/\d{4}\/\d/u.test(vFile.path)) return;
  const { children } = ast as Root;
  const firstHeading = children.findIndex(
    (node) => node.type === "heading" && node.depth === 1,
  );
  const frontMatter = vFile.data.frontMatter as {
    title: string;
    description: string;
    year: number;
    day: number;
    tags: string[];
  };
  const title = children[firstHeading]!;
  const titleText = toString(title);
  const { year, day } = /notes\/aoc\/(?<year>\d{4})\/(?<day>\d{1,2})/u.exec(
    vFile.path,
  )!.groups! as { year: `${number}`; day: `${number}` };
  const { tags } = frontMatter;
  const problemCode = `Advent of Code ${year} - Day ${day}`;
  (title as Heading).children = [
    { type: "text", value: problemCode },
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
  frontMatter.description = `${problemCode}: ${titleText}, a problem that involves ${new Intl.ListFormat("en-US").format(tags)}. Solution written in ${languages[year]!}, with detailed walkthrough and proof.`;
  frontMatter.year = Number(year);
  frontMatter.day = Number(day);
};

export default remarkAOC;
