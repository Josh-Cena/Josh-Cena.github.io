import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{n,t as r}from"./_components-DcdEf7Vf.js";var i=e();function a(e){let a={a:`a`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2021 - Day 14`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Extended Polymerization`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsxs)(a.p,{children:[`This is the exact same spirit as `,(0,i.jsx)(a.a,{href:`/notes/aoc/2021/6/`,children:`day 6`}),`, where we have exponential growth but can group identical entities together.`]}),`
`,(0,i.jsx)(a.p,{children:`The naïve solution is to simulate each element individually:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ts`,children:`seq = seq.flatMap((elem, i) => {
  if (i === seq.length - 1) return [elem];
  const pair = elem + seq[i + 1];
  const insert = rules.get(pair);
  return insert ? [elem, insert] : [elem];
});
`})}),`
`,(0,i.jsxs)(a.p,{children:[`However, the sequence grows exponentially, so this doesn't work for part 2. We observe that all pairs of the same type behave identically. No matter what surrounds this pair, each occurrence of `,(0,i.jsx)(a.code,{children:`AB`}),` always contribute one `,(0,i.jsx)(a.code,{children:`AC`}),` and one `,(0,i.jsx)(a.code,{children:`CB`}),` to the next iteration, where `,(0,i.jsx)(a.code,{children:`C`}),` is the inserted element, and removes itself. Therefore, we can put pairs into bins based on their type.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ts`,children:`const newPairCounts: Record<string, number> = { ...pairCounts };
for (const pair in pairCounts) {
  const count = pairCounts[pair];
  if (count > 0 && pair in rules) {
    const insert = rules[pair];
    newPairCounts[pair] -= count;
    newPairCounts[pair[0] + insert] += count;
    newPairCounts[insert + pair[1]] += count;
  }
}
`})}),`
`,`
`,(0,i.jsxs)(a.p,{children:[`This gives us the counts of each pair after all iterations. To get the counts of each individual element, we note that each element is counted twice in pairs, except for the first and last element of the entire sequence, which never change anyway since the initial input. For example, the sequence `,(0,i.jsx)(a.code,{children:`ABCB`}),` has pairs `,(0,i.jsx)(a.code,{children:`AB`}),`, `,(0,i.jsx)(a.code,{children:`BC`}),`, and `,(0,i.jsx)(a.code,{children:`CB`}),`, which counts `,(0,i.jsx)(a.code,{children:`A`}),` once, `,(0,i.jsx)(a.code,{children:`B`}),` 3 times, and `,(0,i.jsx)(a.code,{children:`C`}),` twice. Because `,(0,i.jsx)(a.code,{children:`A`}),` and `,(0,i.jsx)(a.code,{children:`B`}),` are the first and last elements, we add 1 to their counts. Finally, we divide all counts by 2 to get the actual counts.`]}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Dynamic programming`],title:`Advent of Code 2021 - Day 14: Extended Polymerization`,description:`Advent of Code 2021 - Day 14: Extended Polymerization, a problem that involves Dynamic programming. Solution written in TypeScript, with detailed walkthrough and proof.`,year:2021,day:14};export{o as default};