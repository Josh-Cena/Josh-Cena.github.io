import{u as r,j as e}from"./index-BEXjlMni.js";import{P as a,a as i}from"./_components-Rjxg5wzU.js";import"./_commonjsHelpers-Cpj98o6Y.js";const t={tags:["Intcode"],title:"Advent of Code 2019 - Day 9: Sensor Boost",description:"Advent of Code 2019 - Day 9: Sensor Boost, a problem that involves Intcode. Solution written in C++, with detailed walkthrough and proof.",year:2019,day:9};function s(n){const o={code:"code",h1:"h1",li:"li",span:"span",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(o.h1,{children:["Advent of Code 2019 - Day 9",e.jsx(o.span,{className:"subtitle",children:"Sensor Boost"})]}),`
`,`
`,e.jsx(a,{frontMatter:t}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["To add support for relative mode, the ",e.jsx(o.code,{children:"relative_base"})," is added to the ",e.jsx(o.code,{children:"Program"})," class. Because ",e.jsx(o.code,{children:"eval_param"})," and ",e.jsx(o.code,{children:"write_to"})," now relies on two states: the memory and the relative base, I just make them member functions so they can directly access on ",e.jsx(o.code,{children:"this"}),". Some other things are also incorporated into the class."]}),`
`,e.jsxs(o.li,{children:["All memory values are now ",e.jsx(o.code,{children:"long long"})," instead of ",e.jsx(o.code,{children:"int"}),"."]}),`
`,e.jsxs(o.li,{children:["The memory is now a ",e.jsx(o.code,{children:"map<long long, long long>"})," instead of a ",e.jsx(o.code,{children:"vector<long long>"}),", so that the memory can be indexed at arbitrary addresses without greatly growing its physical size."]}),`
`]}),`
`,e.jsx(i,{frontMatter:t})]})}function h(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}export{h as default,t as frontMatter};
