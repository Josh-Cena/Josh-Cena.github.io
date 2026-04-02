import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import{n,t as r}from"./_components-BiUCgGl-.js";var i=e(),a={tags:[`Bitwise operations`],title:`Advent of Code 2021 - Day 3: Binary Diagnostic`,description:`Advent of Code 2021 - Day 3: Binary Diagnostic, a problem that involves Bitwise operations. Solution written in TypeScript, with detailed walkthrough and proof.`,year:2021,day:3};function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2021 - Day 3`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Binary Diagnostic`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(o.p,{children:[`The main idea is to iterate the input column by column, each time recording the counts of `,(0,i.jsx)(o.code,{children:`0`}),` and `,(0,i.jsx)(o.code,{children:`1`}),`. Since I represent my input as `,(0,i.jsx)(o.code,{children:`data: string[]`}),`, my loop looks like:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`const length = data[0].length;
for (let i = 0; i < length; i++) {
  const counts = [0, 0];
  for (const line of data) {
    counts[parseInt(line[i], 10)]++;
  }
  gamma <<= 1;
  epsilon <<= 1;
  if (counts[0] > counts[1]) {
    epsilon |= 1;
  } else {
    gamma |= 1;
  }
}
`})}),`
`,(0,i.jsxs)(o.p,{children:[`You can append a `,(0,i.jsx)(o.code,{children:`0`}),` or `,(0,i.jsx)(o.code,{children:`1`}),` to the binary number by `,(0,i.jsx)(o.code,{children:`(num << 1) | bit`}),`. Another way would be to build the binary as a string and then use `,(0,i.jsx)(o.code,{children:`parseInt(str, 2)`}),`.`]}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`I keep two arrays, `,(0,i.jsx)(o.code,{children:`o2Candidates`}),` and `,(0,i.jsx)(o.code,{children:`co2Candidates`}),`, initialized to the full input. For each bit position, I count the number of `,(0,i.jsx)(o.code,{children:`0`}),`s and `,(0,i.jsx)(o.code,{children:`1`}),`s in each array, then filter the arrays based on the criteria given.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`if (o2Candidates.length > 1) {
  const counts = [0, 0];
  for (const line of o2Candidates) {
    counts[parseInt(line[i], 10)]++;
  }
  const mostCommon = counts[0] > counts[1] ? "0" : "1";
  o2Candidates = o2Candidates.filter((line) => line[i] === mostCommon);
}

// Same for co2Candidates
`})}),`
`,(0,i.jsxs)(o.p,{children:[`Finally, the result is `,(0,i.jsx)(o.code,{children:`parseInt(o2Candidates[0], 2) * parseInt(co2Candidates[0], 2)`}),`.`]}),`
`,(0,i.jsxs)(o.p,{children:[`In both parts, it's possible to parse the input as numbers upfront, and then extract the `,(0,i.jsx)(o.code,{children:`i`}),`-th bit as `,(0,i.jsx)(o.code,{children:`(num >> (length - 1 - i)) & 1`}),`. However, I think string indexing is sufficient here.`]}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};