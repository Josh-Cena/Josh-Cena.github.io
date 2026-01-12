import{u as r,j as e}from"./index-DEJgW3cN.js";import{F as a,a as i}from"./_components-C_Mh6GSJ.js";const t={description:"Advent of Code 2019 - Day 9: Sensor Boost. Written in C++.",tags:["Intcode"],year:2019,day:9,title:"AoC 2019 D9: Sensor Boost"};function s(n){const o={code:"code",h1:"h1",li:"li",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{children:"AoC 2019 D9: Sensor Boost"}),`
`,`
`,e.jsx(a,{frontMatter:t}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["To add support for relative mode, the ",e.jsx(o.code,{children:"relative_base"})," is added to the ",e.jsx(o.code,{children:"Program"})," class. Because ",e.jsx(o.code,{children:"eval_param"})," and ",e.jsx(o.code,{children:"write_to"})," now relies on two states: the memory and the relative base, I just make them member functions so they can directly access on ",e.jsx(o.code,{children:"this"}),". Some other things are also incorporated into the class."]}),`
`,e.jsxs(o.li,{children:["All memory values are now ",e.jsx(o.code,{children:"long long"})," instead of ",e.jsx(o.code,{children:"int"}),"."]}),`
`,e.jsxs(o.li,{children:["The memory is now a ",e.jsx(o.code,{children:"map<long long, long long>"})," instead of a ",e.jsx(o.code,{children:"vector<long long>"}),", so that the memory can be indexed at arbitrary addresses without greatly growing its physical size."]}),`
`]}),`
`,e.jsx(i,{frontMatter:t})]})}function l(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}export{l as default,t as frontMatter};
