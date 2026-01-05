import{u as s,j as n}from"./index-MRNusryy.js";import{F as a,a as c}from"./_components-BFU_Acax.js";const o={description:"Advent of Code 2020 - Day 2: Password Philosophy. Written in Python.",tags:["Brute force"],year:2020,day:2,title:"AoC 2020 D2: Password Philosophy"};function r(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"AoC 2020 D2: Password Philosophy"}),`
`,`
`,n.jsx(a,{frontMatter:o}),`
`,n.jsx(e.h2,{children:"Part 1"}),`
`,n.jsx(e.p,{children:"Nothing to say here. Just parse the input and check the counts."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-python",children:`if count[0] <= password.count(char) <= count[1]:
    total += 1
`})}),`
`,n.jsx(e.h2,{children:"Part 2"}),`
`,n.jsxs(e.p,{children:["The left position check is ",n.jsx(e.code,{children:"password[ind_range[0] - 1] == char"})," and the right position check is ",n.jsx(e.code,{children:"password[ind_range[1] - 1] == char"}),". We want exactly one of them to be true, so we can use ",n.jsx(e.code,{children:"!="}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-python",children:`if (password[ind_range[0] - 1] == char) != (password[ind_range[1] - 1] == char):
    total += 1
`})}),`
`,n.jsx(c,{frontMatter:o})]})}function d(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{d as default,o as frontMatter};
