import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import"./chroma-js-C4qMxh81.js";import{i as n,r}from"./_components-BMUVh2lY.js";var i=e(),a={tags:[`Computational`],title:`NACLO 2025 - Problem D: Let's Pivot!`,description:`NACLO 2025 - Problem D: Let's Pivot!, a problem that involves Computational. Detailed solution and walkthrough.`,year:2025,prob:`D`};function o(e){let o={a:`a`,br:`br`,h1:`h1`,li:`li`,ol:`ol`,p:`p`,span:`span`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`NACLO 2025 - Problem D`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Let's Pivot!`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,`
`,(0,i.jsx)(o.p,{children:`The basic idea with this problem is that when translating, we do the following:`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`Look up word X in the row for language A, getting a list of meanings M1, M2, ...`}),`
`,(0,i.jsx)(o.li,{children:`Look up (B, M1), (B, M2), ..., corresponding to their translations Y1, Y2, ...`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`If a pivot C is inserted, then we do the following:`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`Look up word X in the row for language A, getting a list of meanings M1, M2, ...`}),`
`,(0,i.jsx)(o.li,{children:`Look up (C, M1), (C, M2), ..., corresponding to their translations Z1, Z2, ...`}),`
`,(0,i.jsx)(o.li,{children:`Then, for each translation Yi, look up Yi in the row for language C, getting a list of meanings M1', M2', ... (this is a superset of M1, M2, ... because Yi may have multiple meanings in C)`}),`
`,(0,i.jsx)(o.li,{children:`Look up (B, M1'), (B, M2'), ..., corresponding to their translations Y1', Y2', ...`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`This is how the pivot language allows us to reach more meanings in B.`}),`
`,(0,i.jsx)(o.p,{children:`D1 answers:`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`No pivot needed: M = { ocean }.`}),`
`,(0,i.jsx)(o.li,{children:`Pivot needed: M = { crow }, M' = { grass }. Need a language where "crow" and "grass" share a word, which is any of Bassa, Bété, Ejagham.`}),`
`,(0,i.jsx)(o.li,{children:`No pivot needed: M = { ocean }.`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`D2 answers:`}),`
`,(0,i.jsxs)(o.p,{children:[`a. M = { ocean, crow }, which map to "blue" and "black" in English respectively.`,(0,i.jsx)(o.br,{}),`
`,`b. M = { ocean, crow }, Z = { tyre, ilyby }, M' = { ocean, crow, sky, grass, banana }, which map to "blue", "black", "green", and "yellow" in English.`,(0,i.jsx)(o.br,{}),`
`,`c. M = { ocean, crow }, M' = { ocean, crow, sky, grass }. Need a language where "sky" and "grass" share a word with either "ocean" or "crow", but all others (plum, strawberry, banana, snow) are distinguished from "ocean" and "crow". This leaves Ejagham, Matsés, Seri. See `,(0,i.jsx)(o.a,{href:`/notes/naclo/2025/c/`,children:`problem C`}),` for visualization; we want the union of the "ocean" and "crow" components to only contain the additional colors "sky" and "grass".`]}),`
`,(0,i.jsx)(o.p,{children:`As for D3, we need to figure out all the constraints, and then find the assignments that satisfy all of them.`}),`
`,(0,i.jsxs)(o.ol,{children:[`
`,(0,i.jsx)(o.li,{children:`M = { plum, strawberry }, M' = { crow }. Need a language where "crow" shares a word with "plum" and/or "strawberry": Bassa, Bété.`}),`
`,(0,i.jsx)(o.li,{children:`M = { plum, ocean }, M' = { sky }. Need a language where "sky" shares a word with "plum" and/or "ocean": Apinaye, Bassa, Bété, English, Teribe (only Tsafiki doesn't work).`}),`
`,(0,i.jsx)(o.li,{children:`M = { plum, strawberry }, M' = { plum }. This is a direct translation, so any pivot will do.`}),`
`,(0,i.jsx)(o.li,{children:`M = { plum, strawberry, banana }, M' = { grass, sky, ocean }. Need any language that doesn't distinguish one of "grass", "sky", or "ocean" from one of "plum", "strawberry", or "banana": Apinaye, Bassa, Bété, Teribe.`}),`
`,(0,i.jsx)(o.li,{children:`M = { banana }, M' = { snow }. Need a language where "snow" shares a word with "banana": only Bassa.`}),`
`,(0,i.jsx)(o.li,{children:`M = { grass }, M' = { plum, strawberry }. Need a language where "plum" and/or "strawberry" share a word with "grass": Apinaye, Bassa, Bété.`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`It happens that these constraints contain 1, 2, 3, 4, 5, 6 candidates, respectively! So we can satisfy them in the order of their restrictiveness:`}),`
`,(0,i.jsx)(o.p,{children:`5. B → 1. C → 6. A → 4. E → 2. D → 3. F`}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{s as default,a as frontMatter};