import{u as l,j as e}from"./index-4Sx7iykK.js";import{P as s,a as t}from"./_components-DPNBSDLx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ciqn2WuZ.js";const r={tags:["Phrase translation"],title:"NACLO 2024 - Problem B: Finding Your Place in Warlpiri",description:"NACLO 2024 - Problem B: Finding Your Place in Warlpiri, a problem that involves Phrase translation. Detailed solution and walkthrough.",year:2024,prob:"B"};function i(a){const n={br:"br",em:"em",h1:"h1",li:"li",p:"p",span:"span",ul:"ul",...l(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["NACLO 2024 - Problem B",e.jsx(n.span,{className:"subtitle",children:"Finding Your Place in Warlpiri"})]}),`
`,`
`,e.jsx(s,{frontMatter:r}),`
`,`
`,e.jsx(n.p,{children:`1–5 all contain "ka", so it's probably some functional particle (tense, aspect, etc.; all sentences here are present progressive). 1–3 all begin with "Maliki", so it means "The dog". This means "Marlu" = "The kangaroo" and "Karnta" = "The woman". The third word also begins with "marlu", "karnta", etc., so it's the object. However it has an extra suffix, which is probably case agreement, because each object has a different kind of suffix (-ngka for "marlu" and "karnta"; -rla for "nantuwu" and "kuurlu"). The last word is therefore the verb: "karrimi" = "stand"; "nyinami" = "sit"; "ngunami" = "lie". To recap, here's the sentence structure:`}),`
`,e.jsx(n.p,{children:"[Subject] ka [object][suffix] [verb]"}),`
`,e.jsx(n.p,{children:"Therefore:"}),`
`,e.jsxs(n.p,{children:["a. Maliki ka nantuwurla ngunami. = The dog is lying on the horse.",e.jsx(n.br,{}),`
`,"b. The kangaroo is sitting in the school. = Marlu ka kuurlurla nyinami."]}),`
`,e.jsx(n.p,{children:"Applying this structure to the new sentences, we have:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'"yaparranji" = "teenage boy"'}),`
`,e.jsx(n.li,{children:'"luurnpa" = "kingfisher bird"'}),`
`,e.jsx(n.li,{children:'"mardukuja" = "woman"'}),`
`,e.jsx(n.li,{children:'"paarlpa" = "calf"'}),`
`,e.jsx(n.li,{children:'"pirli" = "hill"'}),`
`,e.jsx(n.li,{children:'"raa" = "clearing"'}),`
`]}),`
`,e.jsx(n.p,{children:'Therefore "mardukuja" and "karnta" both mean "woman".'}),`
`,e.jsx(n.p,{children:'Finally we figure out whether to use "-rla" or "-ngka".'}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:['-rla: "nantuwu" ',e.jsx(n.em,{children:"horse"}),', "kuurlu" ',e.jsx(n.em,{children:"school"}),', "yaparranji" ',e.jsx(n.em,{children:"teenage boy"}),', "mardukuja" ',e.jsx(n.em,{children:"woman"}),', "paarlpa" ',e.jsx(n.em,{children:"calf"})]}),`
`,e.jsxs(n.li,{children:['-ngka: "marlu" ',e.jsx(n.em,{children:"kangaroo"}),', "karnta" ',e.jsx(n.em,{children:"woman"}),', " pirli" ',e.jsx(n.em,{children:"hill"}),', "raa" ',e.jsx(n.em,{children:"clearing"})]}),`
`]}),`
`,e.jsx(n.p,{children:`It cannot be based on anything semantics, because "mardukuja" and "karnta" both mean "woman" but use different suffixes. One plausible explanation is that it's syllable-based: "-rla" are all 3-syllable or longer, while "-ngka" are all 2-syllable (long vowels are counted as 2 syllable). Therefore in B3, "Wati", "Warlu", "Ngurra", and "Yama" are short and use "-ngka", while "Jaaji" and "Wulpayi" are long and use "-rla".`}),`
`,e.jsx(t,{frontMatter:r})]})}function d(a={}){const{wrapper:n}={...l(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(i,{...a})}):i(a)}export{d as default,r as frontMatter};
