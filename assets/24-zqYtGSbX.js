import{t as e}from"./jsx-runtime-DAs1UGHr.js";import{n as t}from"./lib-T-nEWGuF.js";import{n,t as r}from"./_components-DgNpooeQ.js";var i=e(),a={tags:[`VM`,`Manual inspection`,`Puzzle`],title:`Advent of Code 2021 - Day 24: Arithmetic Logic Unit`,description:`Advent of Code 2021 - Day 24: Arithmetic Logic Unit, a problem that involves VM, Manual inspection, and Puzzle. Solution written in TypeScript, with detailed walkthrough and proof.`,year:2021,day:24};function o(e){let o={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2021 - Day 24`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Arithmetic Logic Unit`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsx)(o.p,{children:`This is a question type I enjoy a lot: there's more pen-and-paper (or, for me, iPad and typing in a text file) than coding.`}),`
`,(0,i.jsxs)(o.p,{children:[`I tried to formally work out the required input range, using `,(0,i.jsx)(o.a,{href:`https://en.wikipedia.org/wiki/Hoare_logic`,children:`Hoare logic`}),` to symbolically deduce the weakest precondition for each line of code, given that the postcondition is `,(0,i.jsx)(o.code,{children:`z = 0`}),`. This is actually feasible given that no loops exist. I even have `,(0,i.jsx)(o.a,{href:`https://github.com/Josh-Cena/aoc2021/blob/master/src/day24-doesnt-work.ts`,children:`a solution`}),` that I believe works; the problem is that the branching still leads to an exponential number of paths, and Node OOMs. So I was forced back to manual inspection.`]}),`
`,(0,i.jsx)(o.p,{children:`The program has 14 chunks, each of the form:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:` 1 | inp w
 2 | mul x 0
 3 | add x z
 4 | mod x 26
 5 | div z <n0>
 6 | add x <n1>
 7 | eql x w
 8 | eql x 0
 9 | mul y 0
10 | add y 25
11 | mul y x
12 | add y 1
13 | mul z y
14 | mul y 0
15 | add y w
16 | add y <n2>
17 | mul y x
18 | add z y
`})}),`
`,(0,i.jsxs)(o.p,{children:[`Among the 14 chunks, only lines 5, 6, 16 may be different in their constant. In particular, `,(0,i.jsx)(o.code,{children:`<n0>`}),` can either be 1 or 26; `,(0,i.jsx)(o.code,{children:`<n1>`}),` can be between -15 and 15; `,(0,i.jsx)(o.code,{children:`<n2>`}),` can be between 1 and 14. Furthermore, `,(0,i.jsx)(o.code,{children:`n1 <= n0`}),` iff `,(0,i.jsx)(o.code,{children:`n0 == 26`}),`.`]}),`
`,(0,i.jsx)(o.p,{children:`If we convert this to TypeScript:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`function chunk(w: number, n0: number, n1: number, n2: number) {
  x = (z % 26) + n1 === w ? 0 : 1; // Lines 2, 3, 4, 6, 7, 8
  z = Math.floor(z / n0); // Line 5
  y = 25 * x + 1; // Lines 9, 10, 11, 12
  z *= y; // Line 13
  y = (w + n2) * x; // Lines 14, 15, 16, 17
  z += y; // Line 18
}
`})}),`
`,(0,i.jsx)(o.p,{children:`More compactly:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`function chunk(w: number, n0: number, n1: number, n2: number) {
  if (z % 26 === w - n1) {
    z = Math.floor(z / n0);
  } else {
    z = Math.floor(z / n0) * 26 + w + n2;
  }
}
`})}),`
`,(0,i.jsxs)(o.p,{children:[`Note that while `,(0,i.jsx)(o.code,{children:`n1`}),` can be negative, all other numbers are always positive, including `,(0,i.jsx)(o.code,{children:`z`}),`.`]}),`
`,(0,i.jsxs)(o.p,{children:[`This is using `,(0,i.jsx)(o.code,{children:`z`}),` as a stack in base-26:`]}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsxs)(o.li,{children:[`If `,(0,i.jsx)(o.code,{children:`z.top() == w - n1`}),` and `,(0,i.jsx)(o.code,{children:`n0 == 26`}),`, then `,(0,i.jsx)(o.code,{children:`z.pop()`}),`.`]}),`
`,(0,i.jsxs)(o.li,{children:[`If `,(0,i.jsx)(o.code,{children:`z.top() == w - n1`}),` and `,(0,i.jsx)(o.code,{children:`n0 == 1`}),`, then do nothing.`]}),`
`,(0,i.jsxs)(o.li,{children:[`If `,(0,i.jsx)(o.code,{children:`z.top() != w - n1`}),` and `,(0,i.jsx)(o.code,{children:`n0 == 1`}),`, then `,(0,i.jsx)(o.code,{children:`z.push(w + n2)`}),`.`]}),`
`,(0,i.jsxs)(o.li,{children:[`If `,(0,i.jsx)(o.code,{children:`z.top() != w - n1`}),` and `,(0,i.jsx)(o.code,{children:`n0 == 26`}),`, then `,(0,i.jsx)(o.code,{children:`z.replaceTop(w + n2)`}),`.`]}),`
`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`function chunk(w: number, n0: number, n1: number, n2: number) {
  if (n0 == 1) {
    z.push(w + n2);
  } else if (z[z.length - 1] == w - n1) {
    z.pop();
  } else {
    z[z.length - 1] = w + n2;
  }
}
`})}),`
`,(0,i.jsxs)(o.p,{children:[`The goal at the end is to have `,(0,i.jsx)(o.code,{children:`z`}),` empty, and we have 7 `,(0,i.jsx)(o.code,{children:`n0 == 1`}),` chunks and 7 `,(0,i.jsx)(o.code,{children:`n0 == 26`}),` chunks, so we need to pop every time we can. We can pair up each push-chunk and pop-chunk, such that `,(0,i.jsx)(o.code,{children:`w_push + n2_push == w_pop - n1_pop`}),`. This creates 7 equations, each of the form `,(0,i.jsx)(o.code,{children:`w[i] - w[j] = n`}),` where `,(0,i.jsx)(o.code,{children:`i > j`}),`.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`function getConstraints(data: string[]): [number, number, number][] {
  const chunks = data.join("\\n").split("inp w\\n");
  const nVals = chunks.filter(Boolean).map((chunk) => {
    const lines = chunk.split("\\n");
    return [lines[3], lines[4], lines[14]].map((line, i) =>
      Number(line.split(" ")[2]),
    );
  });
  const stack: [number, number][] = [];
  // Each constraint of the form w[i] - w[j] = n (i > j)
  const constraints: [number, number, number][] = [];
  for (const [i, [n0, n1, n2]] of nVals.entries()) {
    if (n0 === 1) {
      // Push-chunk
      stack.push([i, n2]);
    } else {
      // Pop-chunk
      const [iPush, n2Push] = stack.pop()!;
      constraints.push([i, iPush, n2Push + n1]);
    }
  }
  return constraints;
}
`})}),`
`,(0,i.jsxs)(o.p,{children:[`Because we want to maximize `,(0,i.jsx)(o.code,{children:`w`}),`, we can just greedily maximize each `,(0,i.jsx)(o.code,{children:`w[i]`}),`, since these equations are independent of each other. If `,(0,i.jsx)(o.code,{children:`w[i] - w[j] = n`}),`, then when `,(0,i.jsx)(o.code,{children:`n`}),` is positive, set `,(0,i.jsx)(o.code,{children:`w[i] = 9`}),` and `,(0,i.jsx)(o.code,{children:`w[j] = 9 - n`}),`; when `,(0,i.jsx)(o.code,{children:`n`}),` is negative, set `,(0,i.jsx)(o.code,{children:`w[j] = 9`}),` and `,(0,i.jsx)(o.code,{children:`w[i] = 9 + n`}),`.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`const optW = Array(14).fill(0);
for (const [i, iPush, n] of constraints) {
  optW[i] = Math.min(9, 9 + n);
  optW[iPush] = Math.min(9, 9 - n);
}
console.log(optW.join(""));
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`Exactly the same, except we minimize `,(0,i.jsx)(o.code,{children:`w`}),` instead of maximizing it. In this case we want `,(0,i.jsx)(o.code,{children:`w[i]`}),` and `,(0,i.jsx)(o.code,{children:`w[j]`}),` as close to 1 as possible.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`const optW = Array(14).fill(9);
for (const [i, iPush, n] of constraints) {
  optW[i] = Math.max(1, 1 + n);
  optW[iPush] = Math.max(1, 1 - n);
}
console.log(optW.join(""));
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};