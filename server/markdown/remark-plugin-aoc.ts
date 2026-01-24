import type { Plugin } from "unified";
import type { Root, Heading, Literal, PhrasingContent } from "mdast";
import { toString } from "mdast-util-to-string";
import * as Acorn from "acorn";
import Yaml from "yaml";
import type { Program } from "estree";
import { createImportDeclaration, createJSXElement } from "./utils.ts";

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
  const frontMatter = children.find((node) => node.type === "yaml");
  if (!frontMatter) throw new Error("AoC solution must have front matter");
  const title = children[firstHeading]!;
  const titleText = toString(title);
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
  frontMatter.value += `
title: "${fullTitle}"
description: "${problemCode}: ${titleText}, a problem that involves ${new Intl.ListFormat("en-US").format(tags)}. Solution written in ${languages[year]!}, with detailed walkthrough and proof."
year: ${year}
day: ${day}
`;
  children.splice(
    firstHeading + 1,
    0,
    createImportDeclaration(
      "{ ProblemHeader, ProblemFooter }",
      "../_components",
    ),
    createJSXElement("ProblemHeader", [
      { name: "frontMatter", value: "frontMatter" },
    ]),
  );
  children.push(
    createJSXElement("ProblemFooter", [
      { name: "frontMatter", value: "frontMatter" },
    ]),
  );
};

export default remarkAOC;
