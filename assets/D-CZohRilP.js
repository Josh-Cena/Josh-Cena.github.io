import{u as o,j as e}from"./index-BykeWMol.js";import{P as i,a as t}from"./_components-B6wE-VEc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ciqn2WuZ.js";const s={tags:["Computational"],title:"NACLO 2025 - Problem D: Let's Pivot!",description:"NACLO 2025 - Problem D: Let's Pivot!, a problem that involves Computational. Detailed solution and walkthrough.",year:2025,prob:"D"};function r(a){const n={a:"a",br:"br",h1:"h1",li:"li",ol:"ol",p:"p",span:"span",ul:"ul",...o(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["NACLO 2025 - Problem D",e.jsx(n.span,{className:"subtitle",children:"Let's Pivot!"})]}),`
`,`
`,e.jsx(i,{frontMatter:s}),`
`,`
`,e.jsx(n.p,{children:"The basic idea with this problem is that when translating, we do the following:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Look up word X in the row for language A, getting a list of meanings M1, M2, ..."}),`
`,e.jsx(n.li,{children:"Look up (B, M1), (B, M2), ..., corresponding to their translations Y1, Y2, ..."}),`
`]}),`
`,e.jsx(n.p,{children:"If a pivot C is inserted, then we do the following:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Look up word X in the row for language A, getting a list of meanings M1, M2, ..."}),`
`,e.jsx(n.li,{children:"Look up (C, M1), (C, M2), ..., corresponding to their translations Z1, Z2, ..."}),`
`,e.jsx(n.li,{children:"Then, for each translation Yi, look up Yi in the row for language C, getting a list of meanings M1', M2', ... (this is a superset of M1, M2, ... because Yi may have multiple meanings in C)"}),`
`,e.jsx(n.li,{children:"Look up (B, M1'), (B, M2'), ..., corresponding to their translations Y1', Y2', ..."}),`
`]}),`
`,e.jsx(n.p,{children:"This is how the pivot language allows us to reach more meanings in B."}),`
`,e.jsx(n.p,{children:"D1 answers:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"No pivot needed: M = { ocean }."}),`
`,e.jsx(n.li,{children:`Pivot needed: M = { crow }, M' = { grass }. Need a language where "crow" and "grass" share a word, which is any of Bassa, Bété, Ejagham.`}),`
`,e.jsx(n.li,{children:"No pivot needed: M = { ocean }."}),`
`]}),`
`,e.jsx(n.p,{children:"D2 answers:"}),`
`,e.jsxs(n.p,{children:['a. M = { ocean, crow }, which map to "blue" and "black" in English respectively.',e.jsx(n.br,{}),`
`,`b. M = { ocean, crow }, Z = { tyre, ilyby }, M' = { ocean, crow, sky, grass, banana }, which map to "blue", "black", "green", and "yellow" in English.`,e.jsx(n.br,{}),`
`,`c. M = { ocean, crow }, M' = { ocean, crow, sky, grass }. Need a language where "sky" and "grass" share a word with either "ocean" or "crow", but all others (plum, strawberry, banana, snow) are distinguished from "ocean" and "crow". This leaves Ejagham, Matsés, Seri. See `,e.jsx(n.a,{href:"/notes/naclo/2025/c/",children:"problem C"}),' for visualization; we want the union of the "ocean" and "crow" components to only contain the additional colors "sky" and "grass".']}),`
`,e.jsx(n.p,{children:"As for D3, we need to figure out all the constraints, and then find the assignments that satisfy all of them."}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:`M = { plum, strawberry }, M' = { crow }. Need a language where "crow" shares a word with "plum" and/or "strawberry": Bassa, Bété.`}),`
`,e.jsx(n.li,{children:`M = { plum, ocean }, M' = { sky }. Need a language where "sky" shares a word with "plum" and/or "ocean": Apinaye, Bassa, Bété, English, Teribe (only Tsafiki doesn't work).`}),`
`,e.jsx(n.li,{children:"M = { plum, strawberry }, M' = { plum }. This is a direct translation, so any pivot will do."}),`
`,e.jsx(n.li,{children:`M = { plum, strawberry, banana }, M' = { grass, sky, ocean }. Need any language that doesn't distinguish one of "grass", "sky", or "ocean" from one of "plum", "strawberry", or "banana": Apinaye, Bassa, Bété, Teribe.`}),`
`,e.jsx(n.li,{children:`M = { banana }, M' = { snow }. Need a language where "snow" shares a word with "banana": only Bassa.`}),`
`,e.jsx(n.li,{children:`M = { grass }, M' = { plum, strawberry }. Need a language where "plum" and/or "strawberry" share a word with "grass": Apinaye, Bassa, Bété.`}),`
`]}),`
`,e.jsx(n.p,{children:"It happens that these constraints contain 1, 2, 3, 4, 5, 6 candidates, respectively! So we can satisfy them in the order of their restrictiveness:"}),`
`,e.jsx(n.p,{children:"5. B → 1. C → 6. A → 4. E → 2. D → 3. F"}),`
`,e.jsx(t,{frontMatter:s})]})}function w(a={}){const{wrapper:n}={...o(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(r,{...a})}):r(a)}export{w as default,s as frontMatter};
