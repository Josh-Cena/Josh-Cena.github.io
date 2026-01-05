import{u as a,j as e}from"./index-MRNusryy.js";import{F as s,a as c}from"./_components-BFU_Acax.js";const r={description:"Advent of Code 2020 - Day 8: Handheld Halting. Written in Python.",tags:["VM","Brute force"],year:2020,day:8,title:"AoC 2020 D8: Handheld Halting"};function o(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{children:"AoC 2020 D8: Handheld Halting"}),`
`,`
`,e.jsx(s,{frontMatter:r}),`
`,e.jsx(t.h2,{children:"Part 1"}),`
`,e.jsx(t.p,{children:"Not much to say here; just iterate through the instructions, keeping track of which ones have been executed (as line numbers). If we reach an instruction we've already executed, return the accumulator."}),`
`,e.jsx(t.h2,{children:"Part 2"}),`
`,e.jsxs(t.p,{children:["There may be clever ways to do this, such as building a control flow graph and finding which ",e.jsx(t.code,{children:"nop"}),"/",e.jsx(t.code,{children:"jmp"})," instructions are on paths that lead to termination, but I brute-forced: for each ",e.jsx(t.code,{children:"nop"})," or ",e.jsx(t.code,{children:"jmp"}),", swap it, run the program, and see if it terminates. If it does, return the accumulator."]}),`
`,e.jsx(c,{frontMatter:r})]})}function d(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{d as default,r as frontMatter};
