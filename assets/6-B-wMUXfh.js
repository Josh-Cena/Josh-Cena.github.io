import{u as r,j as e}from"./index-K2wRAUCr.js";import{F as i,a}from"./_components-D8vnU3Mx.js";const o={description:"Advent of Code 2019 - Day 6: Universal Orbit Map. Written in C++.",tags:["BFS/DFS"],year:2019,day:6,title:"AoC 2019 D6: Universal Orbit Map"};function s(n){const t={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{children:"AoC 2019 D6: Universal Orbit Map"}),`
`,`
`,e.jsx(i,{frontMatter:o}),`
`,e.jsx(t.p,{children:"The problem forms a tree because of the following observations:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"Each object orbits exactly one other object (one parent)."}),`
`,e.jsxs(t.li,{children:["There is a single object ",e.jsx(t.code,{children:"COM"})," that does not orbit anything (unique root)."]}),`
`,e.jsx(t.li,{children:"An object cannot indirectly orbit itself (no cycles). This is not explicitly stated, but I assumed this based on how orbits should work."}),`
`]}),`
`,e.jsx(t.h2,{children:"Part 1"}),`
`,e.jsx(t.p,{children:'"Direct orbits" are parent-child relationships; "indirect orbits" are ancestor-descendant relationships. Thus, for each node in the tree, we just count the number of ancestors. This is the depth of the node. Depths can be computed with either BFS or DFS; I prefer BFS.'}),`
`,e.jsx(t.h2,{children:"Part 2"}),`
`,e.jsxs(t.p,{children:["We want to find the shortest path from ",e.jsx(t.code,{children:"YOU"})," to ",e.jsx(t.code,{children:"SAN"}),". Since this is a tree, there is a unique path between any two nodes. Again this is a BFS, starting at ",e.jsx(t.code,{children:"YOU"}),", searching for ",e.jsx(t.code,{children:"SAN"}),". The result is ",e.jsx(t.code,{children:"depth - 2"}),", since we want to exclude the starting and ending nodes."]}),`
`,e.jsx(a,{frontMatter:o})]})}function d(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{d as default,o as frontMatter};
