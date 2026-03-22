import{u as r,j as n}from"./index-DtspggIi.js";import{P as o,a}from"./_components-B3shFePq.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ciqn2WuZ.js";const t={tags:["Phrase translation","Semantics"],title:"NACLO 2026 - Problem C: Sheninagans[sic] in Kogi",description:"NACLO 2026 - Problem C: Sheninagans[sic] in Kogi, a problem that involves Phrase translation and Semantics. Detailed solution and walkthrough.",year:2026,prob:"C"};function i(s){const e={h1:"h1",li:"li",p:"p",span:"span",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.h1,{children:["NACLO 2026 - Problem C",n.jsx(e.span,{className:"subtitle",children:"Sheninagans[sic] in Kogi"})]}),`
`,`
`,n.jsx(o,{frontMatter:t}),`
`,`
`,n.jsx(e.p,{children:"Based on the illustrations, it looks like the relevant information of the events is: the person doing the event (I vs. you), the action of the event (drop, eat, cry, dance), whether the listener knows about the event (the difference between G and H, example and F, C and C2(10))."}),`
`,n.jsxs("table",{children:[n.jsxs("tr",{children:[n.jsx("td",{}),n.jsx("th",{children:"Drop"}),n.jsx("th",{children:"Eat"}),n.jsx("th",{children:"Cry"}),n.jsx("th",{children:"Dance"})]}),n.jsxs("tr",{children:[n.jsx("th",{children:"I (listener knows)"}),n.jsx("td",{children:"akhiengua nigukú"}),n.jsx("td",{children:"A"}),n.jsx("td",{}),n.jsx("td",{children:"G"})]}),n.jsxs("tr",{children:[n.jsx("th",{children:"I (listener doesn't know)"}),n.jsx("td",{children:"F"}),n.jsx("td",{}),n.jsx("td",{children:"E"}),n.jsx("td",{children:"H"})]}),n.jsxs("tr",{children:[n.jsx("th",{children:"You (listener knows)"}),n.jsx("td",{}),n.jsx("td",{children:"B"}),n.jsx("td",{children:"D"}),n.jsx("td",{})]}),n.jsxs("tr",{children:[n.jsx("th",{children:"You (listener doesn't know)"}),n.jsx("td",{children:"C"}),n.jsx("td",{}),n.jsx("td",{}),n.jsx("td",{})]})]}),`
`,n.jsx(e.p,{children:"Look at the phrases given. All phrases are of the form: [A] [B][C], where [A] is one of: akhiengua, ga, kwisaté, mowi; [B] is one of: na-/ni-; and [C] is one of: -gukú/-magu. Naturally, [A] should correspond to the action while [B] and [C] correspond to the person and whether the listener knows, in some order. Including the example, we have 5 ni- and 4 na-, 6 -gukú and 3 -magu. So [B] corresponds in count to the listener's knowledge (know = 5, doesn't know = 4), while [C] corresponds in count to the person (I = 6, you = 3). So we can determine that:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"nigukú = I (listener knows)"}),`
`,n.jsx(e.li,{children:"nagukú = I (listener doesn't know)"}),`
`,n.jsx(e.li,{children:"nimagu = you (listener knows)"}),`
`,n.jsx(e.li,{children:"namagu = you (listener doesn't know)"}),`
`]}),`
`,n.jsx(e.p,{children:"So:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:'"ga" co-occurs with "nigukú" and "nimagu", so it must be "eat".'}),`
`,n.jsx(e.li,{children:'"kwisaté" co-occurs with "nagukú" and "nigukú", so it must be "dance".'}),`
`,n.jsx(e.li,{children:'"mowi" co-occurs with "nimagu" and "nagukú", so it must be "cry".'}),`
`]}),`
`,n.jsx(e.p,{children:"The remaining translation work is trivial. In C2:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"I eat (listener doesn't know) = ga nagukú"}),`
`,n.jsx(e.li,{children:"You drop (listener knows) = akhiengua nimagu"}),`
`,n.jsx(e.li,{children:"You dance (listener knows) = kwisaté nimagu"}),`
`]}),`
`,n.jsx(a,{frontMatter:t})]})}function x(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{x as default,t as frontMatter};
