import{u as r,j as e}from"./index-iZtX16Nl.js";import{P as i,a}from"./_components-7amCHrfb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ciqn2WuZ.js";const t={tags:["Computational"],title:"NACLO 2024 - Problem J: aLLMost, but not quite",description:"NACLO 2024 - Problem J: aLLMost, but not quite, a problem that involves Computational. Detailed solution and walkthrough.",year:2024,prob:"J"};function o(n){const s={br:"br",h1:"h1",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h1,{children:["NACLO 2024 - Problem J",e.jsx(s.span,{className:"subtitle",children:"aLLMost, but not quite"})]}),`
`,`
`,e.jsx(i,{frontMatter:t}),`
`,e.jsx(s.p,{children:"For J1, just match the two sides based on the keywords' topics. I did 2, 3, 5, 7, and 8 first:"}),`
`,e.jsxs(s.p,{children:['2. Mentioned "stock", so categorized as "financial". ',e.jsx(s.strong,{children:"A"}),e.jsx(s.br,{}),`
`,'3. Mentioned "stitch", so categorized as "medical". ',e.jsx(s.strong,{children:"C"}),e.jsx(s.br,{}),`
`,'5. Mentioned "Will". ',e.jsx(s.strong,{children:"B"}),e.jsx(s.br,{}),`
`,'7. Mentioned "play", so categorized as "music streaming". ',e.jsx(s.strong,{children:"G"}),e.jsx(s.br,{}),`
`,'8. Mentioned "parties" and "speaker", so categorized as "political". ',e.jsx(s.strong,{children:"D"})]}),`
`,e.jsxs(s.p,{children:[`Now we have 1, 4, 6 left, and D, E unused. 1 mentions "date", so it's categorized as "relationship". `,e.jsx(s.strong,{children:"F"}),'. 4 mentions "free trial" and "expire" which seems sufficiently like legal domain, so ',e.jsx(s.strong,{children:"E"}),` (because the other one is even less like legal). However I'm not sure about 6. It mentioned "cold" and "summer", so perhaps "medical" again. `,e.jsx(s.strong,{children:"C"})]}),`
`,e.jsx(s.p,{children:"J2 is also straightforward."}),`
`,e.jsxs(s.p,{children:['(ab) "bee made of honey" = N1 MAKE N2. Correct: "bee that makes honey" = N2 MAKE N1',e.jsx(s.br,{}),`
`,`(cd) "video that is music" (can't be "have" because the response says "audio-only") = N2 BE N1. Correct: "video that has music" = N2 HAVE N1`,e.jsx(s.br,{}),`
`,`(ef) "engine that is part of steam" = "steam has engine" = N1 HAVE N2 (can't be "be" because the response says "part of" not "is"). Correct: "engine that uses steam" = N2 USE N1. Might also be "engine that produces steam" = N2 MAKE N1.`,e.jsx(s.br,{}),`
`,'(gh) "oil that makes olives" = N2 MAKE N1. Correct: "oil made of olives" = N1 MAKE N2']}),`
`,e.jsx(s.p,{children:"Solutions:"}),`
`,e.jsx(s.p,{children:"J1:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"F"}),`
`,e.jsx(s.li,{children:"A"}),`
`,e.jsx(s.li,{children:"C"}),`
`,e.jsx(s.li,{children:"E"}),`
`,e.jsx(s.li,{children:"B"}),`
`,e.jsx(s.li,{children:"C"}),`
`,e.jsx(s.li,{children:"G"}),`
`,e.jsx(s.li,{children:"D"}),`
`]}),`
`,e.jsx(s.p,{children:"(Other possibilities may work as well)"}),`
`,e.jsx(s.p,{children:"J2:"}),`
`,e.jsxs(s.p,{children:["a. N1 MAKE N2",e.jsx(s.br,{}),`
`,"b. N2 MAKE N1",e.jsx(s.br,{}),`
`,"c. N2 BE N1",e.jsx(s.br,{}),`
`,"d. N2 HAVE N1",e.jsx(s.br,{}),`
`,"e. N1 HAVE N2",e.jsx(s.br,{}),`
`,"f. N2 MAKE N1; N2 USE N1",e.jsx(s.br,{}),`
`,"g. N2 MAKE N1",e.jsx(s.br,{}),`
`,"h. N1 MAKE N2"]}),`
`,e.jsx(a,{frontMatter:t})]})}function x(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{x as default,t as frontMatter};
