import{t as e}from"./jsx-runtime-xty2or4m.js";import{n as t}from"./lib-zKnO7aGa.js";import{n,t as r}from"./_components-vrS0ov66.js";var i=e(),a={tags:[`Data structures`],title:`Advent of Code 2021 - Day 10: Syntax Scoring`,description:`Advent of Code 2021 - Day 10: Syntax Scoring, a problem that involves Data structures. Solution written in TypeScript, with detailed walkthrough and proof.`,year:2021,day:10};function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2021 - Day 10`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Syntax Scoring`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsx)(o.p,{children:`Bracket matching is a first-in-last-out problem: for each closing bracket, we need to match it with the most recent unclosed opening bracket. This is akin to a stack. We push opening brackets onto the stack, and for each closing bracket, we pop the stack and check if it matches. If it doesn't match, we have found a corrupted line. If everything matches at the end, we return the remaining stack, which are the unclosed opening brackets, for part 2.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`function checkLine(line: string): number | string[] {
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
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsx)(o.p,{children:`Brackets are closed in reverse order, so we can iterate the remaining stack from the end (or top, since it's a stack) to get the sequence of required closing brackets.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`let lineScore = 0;
for (let i = result.length - 1; i >= 0; i--) {
  lineScore =
    lineScore * 5 +
    completionScores[result[i] as keyof typeof completionScores];
}
scores.push(lineScore);
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};