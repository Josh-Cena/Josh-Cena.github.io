import{u as o,j as n}from"./index-Dbnp75iT.js";import{F as a,a as r}from"./_components-CrZycPda.js";const s={tags:["Bitwise operations"],description:"Advent of Code 2021 - Day 3: Binary Diagnostic, a problem that involves Bitwise operations. Solution written in TypeScript, with detailed walkthrough and proof.",year:2021,day:3,title:"Advent of Code 2021 - Day 3: Binary Diagnostic"};function i(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.h1,{children:["Advent of Code 2021 - Day 3",n.jsx(e.span,{className:"subtitle",children:"Binary Diagnostic"})]}),`
`,`
`,n.jsx(a,{frontMatter:s}),`
`,n.jsx(e.h2,{children:"Part 1"}),`
`,n.jsxs(e.p,{children:["The main idea is to iterate the input column by column, each time recording the counts of ",n.jsx(e.code,{children:"0"})," and ",n.jsx(e.code,{children:"1"}),". Since I represent my input as ",n.jsx(e.code,{children:"data: string[]"}),", my loop looks like:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const length = data[0].length;
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
`,n.jsxs(e.p,{children:["You can append a ",n.jsx(e.code,{children:"0"})," or ",n.jsx(e.code,{children:"1"})," to the binary number by ",n.jsx(e.code,{children:"(num << 1) | bit"}),". Another way would be to build the binary as a string and then use ",n.jsx(e.code,{children:"parseInt(str, 2)"}),"."]}),`
`,n.jsx(e.h2,{children:"Part 2"}),`
`,n.jsxs(e.p,{children:["I keep two arrays, ",n.jsx(e.code,{children:"o2Candidates"})," and ",n.jsx(e.code,{children:"co2Candidates"}),", initialized to the full input. For each bit position, I count the number of ",n.jsx(e.code,{children:"0"}),"s and ",n.jsx(e.code,{children:"1"}),"s in each array, then filter the arrays based on the criteria given."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`if (o2Candidates.length > 1) {
  const counts = [0, 0];
  for (const line of o2Candidates) {
    counts[parseInt(line[i], 10)]++;
  }
  const mostCommon = counts[0] > counts[1] ? "0" : "1";
  o2Candidates = o2Candidates.filter((line) => line[i] === mostCommon);
}

// Same for co2Candidates
`})}),`
`,n.jsxs(e.p,{children:["Finally, the result is ",n.jsx(e.code,{children:"parseInt(o2Candidates[0], 2) * parseInt(co2Candidates[0], 2)"}),"."]}),`
`,n.jsxs(e.p,{children:["In both parts, it's possible to parse the input as numbers upfront, and then extract the ",n.jsx(e.code,{children:"i"}),"-th bit as ",n.jsx(e.code,{children:"(num >> (length - 1 - i)) & 1"}),". However, I think string indexing is sufficient here."]}),`
`,n.jsx(r,{frontMatter:s})]})}function l(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{l as default,s as frontMatter};
