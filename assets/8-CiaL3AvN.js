import{u as c,j as e}from"./index-Bb_SBPIJ.js";import{P as r,a as i}from"./_components-DLB4m9JY.js";const s={tags:["Constraint satisfaction"],description:"Advent of Code 2021 - Day 8: Seven Segment Search, a problem that involves Constraint satisfaction. Solution written in TypeScript, with detailed walkthrough and proof.",year:2021,day:8,title:"Advent of Code 2021 - Day 8: Seven Segment Search"};function d(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2021 - Day 8",e.jsx(n.span,{className:"subtitle",children:"Seven Segment Search"})]}),`
`,`
`,e.jsx(r,{frontMatter:s}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:["Fun problem, but not much to say here. ",e.jsx(n.code,{children:"1"})," uses 2 segments, ",e.jsx(n.code,{children:"4"})," uses 4 segments, ",e.jsx(n.code,{children:"7"})," uses 3 segments, and ",e.jsx(n.code,{children:"8"})," uses all 7 segments. Just count how many times these lengths appear in the output values."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const count = data
  .map((line) => line.split(" | ")[1])
  .flatMap((output) => output.split(" "))
  .filter((digit) => [2, 3, 4, 7].includes(digit.length));
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsx(n.p,{children:"If we use the following canonical segment labeling:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plain",children:` aaaa
b    c
b    c
 dddd
e    f
e    f
 gggg
`})}),`
`,e.jsx(n.p,{children:"Then we have the following segment usage for each digit:"}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const digits = {
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
`,e.jsx(n.p,{children:"We can count the number of times each segment letter appears in all ten digits:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Segment"}),e.jsx(n.th,{children:"Times"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"a"})}),e.jsx(n.td,{children:"8"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"b"})}),e.jsx(n.td,{children:"6"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"c"})}),e.jsx(n.td,{children:"8"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"d"})}),e.jsx(n.td,{children:"7"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"e"})}),e.jsx(n.td,{children:"4"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"f"})}),e.jsx(n.td,{children:"9"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"g"})}),e.jsx(n.td,{children:"7"})]})]})]}),`
`,e.jsxs(n.p,{children:["This means that if we count the letters in the 10 scrambled patterns, we can instantly determine ",e.jsx(n.code,{children:"b"}),", ",e.jsx(n.code,{children:"e"}),", and ",e.jsx(n.code,{children:"f"}),", because they have unique counts. We then need to tell ",e.jsx(n.code,{children:"a"})," from ",e.jsx(n.code,{children:"c"})," (both appear 8 times), and ",e.jsx(n.code,{children:"d"})," from ",e.jsx(n.code,{children:"g"})," (both appear 7 times). We already know the patterns for ",e.jsx(n.code,{children:"1"}),", ",e.jsx(n.code,{children:"4"}),", ",e.jsx(n.code,{children:"7"}),", and ",e.jsx(n.code,{children:"8"})," from part 1. Subtracting the pattern for ",e.jsx(n.code,{children:"1"})," from that of ",e.jsx(n.code,{children:"7"})," gives us ",e.jsx(n.code,{children:"a"}),". Subtracting the pattern for ",e.jsx(n.code,{children:"1"})," plus ",e.jsx(n.code,{children:"b"})," from that of ",e.jsx(n.code,{children:"4"})," gives us ",e.jsx(n.code,{children:"d"}),"."]}),`
`,e.jsxs(n.p,{children:["Once we have the mapping from scrambled letters to actual segments, we can decode the output values by looking up the output patterns using the ",e.jsx(n.code,{children:"digits"})," map above."]}),`
`,e.jsx(i,{frontMatter:s})]})}function h(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}export{h as default,s as frontMatter};
