import{t as e}from"./jsx-runtime-D57Vegw5.js";import{n as t}from"./lib-rxHYdfSX.js";import{n,t as r}from"./_components-BHKTFOi1.js";var i=e(),a={tags:[`Constraint satisfaction`],title:`Advent of Code 2021 - Day 8: Seven Segment Search`,description:`Advent of Code 2021 - Day 8: Seven Segment Search, a problem that involves Constraint satisfaction. Solution written in TypeScript, with detailed walkthrough and proof.`,year:2021,day:8};function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2021 - Day 8`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Seven Segment Search`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(o.p,{children:[`Fun problem, but not much to say here. `,(0,i.jsx)(o.code,{children:`1`}),` uses 2 segments, `,(0,i.jsx)(o.code,{children:`4`}),` uses 4 segments, `,(0,i.jsx)(o.code,{children:`7`}),` uses 3 segments, and `,(0,i.jsx)(o.code,{children:`8`}),` uses all 7 segments. Just count how many times these lengths appear in the output values.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`const count = data
  .map((line) => line.split(" | ")[1])
  .flatMap((output) => output.split(" "))
  .filter((digit) => [2, 3, 4, 7].includes(digit.length));
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsx)(o.p,{children:`If we use the following canonical segment labeling:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:` aaaa
b    c
b    c
 dddd
e    f
e    f
 gggg
`})}),`
`,(0,i.jsx)(o.p,{children:`Then we have the following segment usage for each digit:`}),`
`,`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`const digits = {
  abcefg: "0",
  cf: "1",
  acdeg: "2",
  acdfg: "3",
  bcdf: "4",
  abdfg: "5",
  abdefg: "6",
  acf: "7",
  abcdefg: "8",
  abcdfg: "9",
};
`})}),`
`,(0,i.jsx)(o.p,{children:`We can count the number of times each segment letter appears in all ten digits:`}),`
`,(0,i.jsxs)(o.table,{children:[(0,i.jsx)(o.thead,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.th,{children:`Segment`}),(0,i.jsx)(o.th,{children:`Times`})]})}),(0,i.jsxs)(o.tbody,{children:[(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:(0,i.jsx)(o.code,{children:`a`})}),(0,i.jsx)(o.td,{children:`8`})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:(0,i.jsx)(o.code,{children:`b`})}),(0,i.jsx)(o.td,{children:`6`})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:(0,i.jsx)(o.code,{children:`c`})}),(0,i.jsx)(o.td,{children:`8`})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:(0,i.jsx)(o.code,{children:`d`})}),(0,i.jsx)(o.td,{children:`7`})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:(0,i.jsx)(o.code,{children:`e`})}),(0,i.jsx)(o.td,{children:`4`})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:(0,i.jsx)(o.code,{children:`f`})}),(0,i.jsx)(o.td,{children:`9`})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:(0,i.jsx)(o.code,{children:`g`})}),(0,i.jsx)(o.td,{children:`7`})]})]})]}),`
`,(0,i.jsxs)(o.p,{children:[`This means that if we count the letters in the 10 scrambled patterns, we can instantly determine `,(0,i.jsx)(o.code,{children:`b`}),`, `,(0,i.jsx)(o.code,{children:`e`}),`, and `,(0,i.jsx)(o.code,{children:`f`}),`, because they have unique counts. We then need to tell `,(0,i.jsx)(o.code,{children:`a`}),` from `,(0,i.jsx)(o.code,{children:`c`}),` (both appear 8 times), and `,(0,i.jsx)(o.code,{children:`d`}),` from `,(0,i.jsx)(o.code,{children:`g`}),` (both appear 7 times). We already know the patterns for `,(0,i.jsx)(o.code,{children:`1`}),`, `,(0,i.jsx)(o.code,{children:`4`}),`, `,(0,i.jsx)(o.code,{children:`7`}),`, and `,(0,i.jsx)(o.code,{children:`8`}),` from part 1. Subtracting the pattern for `,(0,i.jsx)(o.code,{children:`1`}),` from that of `,(0,i.jsx)(o.code,{children:`7`}),` gives us `,(0,i.jsx)(o.code,{children:`a`}),`. Subtracting the pattern for `,(0,i.jsx)(o.code,{children:`1`}),` plus `,(0,i.jsx)(o.code,{children:`b`}),` from that of `,(0,i.jsx)(o.code,{children:`4`}),` gives us `,(0,i.jsx)(o.code,{children:`d`}),`.`]}),`
`,(0,i.jsxs)(o.p,{children:[`Once we have the mapping from scrambled letters to actual segments, we can decode the output values by looking up the output patterns using the `,(0,i.jsx)(o.code,{children:`digits`}),` map above.`]}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};