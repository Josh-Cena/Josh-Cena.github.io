import{u as o,j as n}from"./index-BVdbyz0p.js";import{F as c,a as r}from"./_components-ozm2G8yB.js";const i={tags:["VM","Manual inspection","Puzzle"],description:"Advent of Code 2021 - Day 24: Arithmetic Logic Unit, a problem that involves VM, Manual inspection, and Puzzle. Solution written in TypeScript, with detailed walkthrough and proof.",year:2021,day:24,title:"Advent of Code 2021 - Day 24: Arithmetic Logic Unit"};function t(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.h1,{children:["Advent of Code 2021 - Day 24",n.jsx(e.span,{className:"subtitle",children:"Arithmetic Logic Unit"})]}),`
`,`
`,n.jsx(c,{frontMatter:i}),`
`,n.jsx(e.h2,{children:"Part 1"}),`
`,n.jsx(e.p,{children:"This is a question type I enjoy a lot: there's more pen-and-paper (or, for me, iPad and typing in a text file) than coding."}),`
`,n.jsxs(e.p,{children:["I tried to formally work out the required input range, using ",n.jsx(e.a,{href:"https://en.wikipedia.org/wiki/Hoare_logic",children:"Hoare logic"})," to symbolically deduce the weakest precondition for each line of code, given that the postcondition is ",n.jsx(e.code,{children:"z = 0"}),". This is actually feasible given that no loops exist. I even have ",n.jsx(e.a,{href:"https://github.com/Josh-Cena/aoc2021/blob/master/src/day24-doesnt-work.ts",children:"a solution"})," that I believe works; the problem is that the branching still leads to an exponential number of paths, and Node OOMs. So I was forced back to manual inspection."]}),`
`,n.jsx(e.p,{children:"The program has 14 chunks, each of the form:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-plain",children:` 1 | inp w
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
`,n.jsxs(e.p,{children:["Among the 14 chunks, only lines 5, 6, 16 may be different in their constant. In particular, ",n.jsx(e.code,{children:"<n0>"})," can either be 1 or 26; ",n.jsx(e.code,{children:"<n1>"})," can be between -15 and 15; ",n.jsx(e.code,{children:"<n2>"})," can be between 1 and 14. Furthermore, ",n.jsx(e.code,{children:"n1 <= n0"})," iff ",n.jsx(e.code,{children:"n0 == 26"}),"."]}),`
`,n.jsx(e.p,{children:"If we convert this to TypeScript:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function chunk(w: number, n0: number, n1: number, n2: number) {
  x = (z % 26) + n1 === w ? 0 : 1; // Lines 2, 3, 4, 6, 7, 8
  z = Math.floor(z / n0); // Line 5
  y = 25 * x + 1; // Lines 9, 10, 11, 12
  z *= y; // Line 13
  y = (w + n2) * x; // Lines 14, 15, 16, 17
  z += y; // Line 18
}
`})}),`
`,n.jsx(e.p,{children:"More compactly:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function chunk(w: number, n0: number, n1: number, n2: number) {
  if (z % 26 === w - n1) {
    z = Math.floor(z / n0);
  } else {
    z = Math.floor(z / n0) * 26 + w + n2;
  }
}
`})}),`
`,n.jsxs(e.p,{children:["Note that while ",n.jsx(e.code,{children:"n1"})," can be negative, all other numbers are always positive, including ",n.jsx(e.code,{children:"z"}),"."]}),`
`,n.jsxs(e.p,{children:["This is using ",n.jsx(e.code,{children:"z"})," as a stack in base-26:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["If ",n.jsx(e.code,{children:"z.top() == w - n1"})," and ",n.jsx(e.code,{children:"n0 == 26"}),", then ",n.jsx(e.code,{children:"z.pop()"}),"."]}),`
`,n.jsxs(e.li,{children:["If ",n.jsx(e.code,{children:"z.top() == w - n1"})," and ",n.jsx(e.code,{children:"n0 == 1"}),", then do nothing."]}),`
`,n.jsxs(e.li,{children:["If ",n.jsx(e.code,{children:"z.top() != w - n1"})," and ",n.jsx(e.code,{children:"n0 == 1"}),", then ",n.jsx(e.code,{children:"z.push(w + n2)"}),"."]}),`
`,n.jsxs(e.li,{children:["If ",n.jsx(e.code,{children:"z.top() != w - n1"})," and ",n.jsx(e.code,{children:"n0 == 26"}),", then ",n.jsx(e.code,{children:"z.replaceTop(w + n2)"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function chunk(w: number, n0: number, n1: number, n2: number) {
  if (n0 == 1) {
    z.push(w + n2);
  } else if (z[z.length - 1] == w - n1) {
    z.pop();
  } else {
    z[z.length - 1] = w + n2;
  }
}
`})}),`
`,n.jsxs(e.p,{children:["The goal at the end is to have ",n.jsx(e.code,{children:"z"})," empty, and we have 7 ",n.jsx(e.code,{children:"n0 == 1"})," chunks and 7 ",n.jsx(e.code,{children:"n0 == 26"})," chunks, so we need to pop every time we can. We can pair up each push-chunk and pop-chunk, such that ",n.jsx(e.code,{children:"w_push + n2_push == w_pop - n1_pop"}),". This creates 7 equations, each of the form ",n.jsx(e.code,{children:"w[i] - w[j] = n"})," where ",n.jsx(e.code,{children:"i > j"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function getConstraints(data: string[]): [number, number, number][] {
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
`,n.jsxs(e.p,{children:["Because we want to maximize ",n.jsx(e.code,{children:"w"}),", we can just greedily maximize each ",n.jsx(e.code,{children:"w[i]"}),", since these equations are independent of each other. If ",n.jsx(e.code,{children:"w[i] - w[j] = n"}),", then when ",n.jsx(e.code,{children:"n"})," is positive, set ",n.jsx(e.code,{children:"w[i] = 9"})," and ",n.jsx(e.code,{children:"w[j] = 9 - n"}),"; when ",n.jsx(e.code,{children:"n"})," is negative, set ",n.jsx(e.code,{children:"w[j] = 9"})," and ",n.jsx(e.code,{children:"w[i] = 9 + n"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const optW = Array(14).fill(0);
for (const [i, iPush, n] of constraints) {
  optW[i] = Math.min(9, 9 + n);
  optW[iPush] = Math.min(9, 9 - n);
}
console.log(optW.join(""));
`})}),`
`,n.jsx(e.h2,{children:"Part 2"}),`
`,n.jsxs(e.p,{children:["Exactly the same, except we minimize ",n.jsx(e.code,{children:"w"})," instead of maximizing it. In this case we want ",n.jsx(e.code,{children:"w[i]"})," and ",n.jsx(e.code,{children:"w[j]"})," as close to 1 as possible."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const optW = Array(14).fill(9);
for (const [i, iPush, n] of constraints) {
  optW[i] = Math.max(1, 1 + n);
  optW[iPush] = Math.max(1, 1 - n);
}
console.log(optW.join(""));
`})}),`
`,n.jsx(r,{frontMatter:i})]})}function h(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{h as default,i as frontMatter};
