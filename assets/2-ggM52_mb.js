import{u as r,j as e}from"./index-CYq-bCfF.js";import{P as a,a as c}from"./_components-DytvGw39.js";import"./_commonjsHelpers-Cpj98o6Y.js";const t={tags:["Brute force"],title:"Advent of Code 2020 - Day 2: Password Philosophy",description:"Advent of Code 2020 - Day 2: Password Philosophy, a problem that involves Brute force. Solution written in Python, with detailed walkthrough and proof.",year:2020,day:2};function s(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2020 - Day 2",e.jsx(n.span,{className:"subtitle",children:"Password Philosophy"})]}),`
`,`
`,e.jsx(a,{frontMatter:t}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:"Nothing to say here. Just parse the input and check the counts."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`if count[0] <= password.count(char) <= count[1]:
    total += 1
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["The left position check is ",e.jsx(n.code,{children:"password[ind_range[0] - 1] == char"})," and the right position check is ",e.jsx(n.code,{children:"password[ind_range[1] - 1] == char"}),". We want exactly one of them to be true, so we can use ",e.jsx(n.code,{children:"!="}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`if (password[ind_range[0] - 1] == char) != (password[ind_range[1] - 1] == char):
    total += 1
`})}),`
`,e.jsx(c,{frontMatter:t})]})}function l(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{l as default,t as frontMatter};
