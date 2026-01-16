import{u as c,j as e}from"./index-Dbnp75iT.js";import{F as o,a}from"./_components-CrZycPda.js";const r={tags:["Data structures"],description:"Advent of Code 2021 - Day 10: Syntax Scoring, a problem that involves Data structures. Solution written in TypeScript, with detailed walkthrough and proof.",year:2021,day:10,title:"Advent of Code 2021 - Day 10: Syntax Scoring"};function s(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2021 - Day 10",e.jsx(n.span,{className:"subtitle",children:"Syntax Scoring"})]}),`
`,`
`,e.jsx(o,{frontMatter:r}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:"Bracket matching is a first-in-last-out problem: for each closing bracket, we need to match it with the most recent unclosed opening bracket. This is akin to a stack. We push opening brackets onto the stack, and for each closing bracket, we pop the stack and check if it matches. If it doesn't match, we have found a corrupted line. If everything matches at the end, we return the remaining stack, which are the unclosed opening brackets, for part 2."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function checkLine(line: string): number | string[] {
  const stack: string[] = [];
  for (const c of line) {
    if ("([{<".includes(c)) {
      stack.push(c);
    } else {
      const last = stack.pop();
      if (
        (c === ")" && last !== "(") ||
        (c === "]" && last !== "[") ||
        (c === "}" && last !== "{") ||
        (c === ">" && last !== "<")
      ) {
        return checkerScores[c as keyof typeof checkerScores];
      }
    }
  }
  return stack;
}
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsx(n.p,{children:"Brackets are closed in reverse order, so we can iterate the remaining stack from the end (or top, since it's a stack) to get the sequence of required closing brackets."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`let lineScore = 0;
for (let i = result.length - 1; i >= 0; i--) {
  lineScore =
    lineScore * 5 +
    completionScores[result[i] as keyof typeof completionScores];
}
scores.push(lineScore);
`})}),`
`,e.jsx(a,{frontMatter:r})]})}function h(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{h as default,r as frontMatter};
