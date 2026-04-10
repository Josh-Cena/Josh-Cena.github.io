import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-BHnTV9cU.js";import"./Link-CEJsqf-b.js";import"./chroma-js-CGevHmQZ.js";import{i as n,r}from"./_components-Bnwig05j.js";var i=e();function a(e){let a={br:`br`,h1:`h1`,li:`li`,ol:`ol`,p:`p`,span:`span`,strong:`strong`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`NACLO 2024 - Problem J`,(0,i.jsx)(a.span,{className:`subtitle`,children:`aLLMost, but not quite`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.p,{children:`For J1, just match the two sides based on the keywords' topics. I did 2, 3, 5, 7, and 8 first:`}),`
`,(0,i.jsxs)(a.p,{children:[`2. Mentioned "stock", so categorized as "financial". `,(0,i.jsx)(a.strong,{children:`A`}),(0,i.jsx)(a.br,{}),`
`,`3. Mentioned "stitch", so categorized as "medical". `,(0,i.jsx)(a.strong,{children:`C`}),(0,i.jsx)(a.br,{}),`
`,`5. Mentioned "Will". `,(0,i.jsx)(a.strong,{children:`B`}),(0,i.jsx)(a.br,{}),`
`,`7. Mentioned "play", so categorized as "music streaming". `,(0,i.jsx)(a.strong,{children:`G`}),(0,i.jsx)(a.br,{}),`
`,`8. Mentioned "parties" and "speaker", so categorized as "political". `,(0,i.jsx)(a.strong,{children:`D`})]}),`
`,(0,i.jsxs)(a.p,{children:[`Now we have 1, 4, 6 left, and D, E unused. 1 mentions "date", so it's categorized as "relationship". `,(0,i.jsx)(a.strong,{children:`F`}),`. 4 mentions "free trial" and "expire" which seems sufficiently like legal domain, so `,(0,i.jsx)(a.strong,{children:`E`}),` (because the other one is even less like legal). However I'm not sure about 6. It mentioned "cold" and "summer", so perhaps "medical" again. `,(0,i.jsx)(a.strong,{children:`C`})]}),`
`,(0,i.jsx)(a.p,{children:`J2 is also straightforward.`}),`
`,(0,i.jsxs)(a.p,{children:[`(ab) "bee made of honey" = N1 MAKE N2. Correct: "bee that makes honey" = N2 MAKE N1`,(0,i.jsx)(a.br,{}),`
`,`(cd) "video that is music" (can't be "have" because the response says "audio-only") = N2 BE N1. Correct: "video that has music" = N2 HAVE N1`,(0,i.jsx)(a.br,{}),`
`,`(ef) "engine that is part of steam" = "steam has engine" = N1 HAVE N2 (can't be "be" because the response says "part of" not "is"). Correct: "engine that uses steam" = N2 USE N1. Might also be "engine that produces steam" = N2 MAKE N1.`,(0,i.jsx)(a.br,{}),`
`,`(gh) "oil that makes olives" = N2 MAKE N1. Correct: "oil made of olives" = N1 MAKE N2`]}),`
`,(0,i.jsx)(a.p,{children:`Solutions:`}),`
`,(0,i.jsx)(a.p,{children:`J1:`}),`
`,(0,i.jsxs)(a.ol,{children:[`
`,(0,i.jsx)(a.li,{children:`F`}),`
`,(0,i.jsx)(a.li,{children:`A`}),`
`,(0,i.jsx)(a.li,{children:`C`}),`
`,(0,i.jsx)(a.li,{children:`E`}),`
`,(0,i.jsx)(a.li,{children:`B`}),`
`,(0,i.jsx)(a.li,{children:`C`}),`
`,(0,i.jsx)(a.li,{children:`G`}),`
`,(0,i.jsx)(a.li,{children:`D`}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`(Other possibilities may work as well)`}),`
`,(0,i.jsx)(a.p,{children:`J2:`}),`
`,(0,i.jsxs)(a.p,{children:[`a. N1 MAKE N2`,(0,i.jsx)(a.br,{}),`
`,`b. N2 MAKE N1`,(0,i.jsx)(a.br,{}),`
`,`c. N2 BE N1`,(0,i.jsx)(a.br,{}),`
`,`d. N2 HAVE N1`,(0,i.jsx)(a.br,{}),`
`,`e. N1 HAVE N2`,(0,i.jsx)(a.br,{}),`
`,`f. N2 MAKE N1; N2 USE N1`,(0,i.jsx)(a.br,{}),`
`,`g. N2 MAKE N1`,(0,i.jsx)(a.br,{}),`
`,`h. N1 MAKE N2`]}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Computational`],title:`NACLO 2024 - Problem J: aLLMost, but not quite`,description:`NACLO 2024 - Problem J: aLLMost, but not quite, a problem that involves Computational. Detailed solution and walkthrough.`,year:2024,prob:`J`};export{o as default};