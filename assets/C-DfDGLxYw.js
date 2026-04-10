import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-BHnTV9cU.js";import"./Link-CEJsqf-b.js";import"./chroma-js-CGevHmQZ.js";import{i as n,r}from"./_components-Bnwig05j.js";var i=e();function a(e){let a={h1:`h1`,li:`li`,p:`p`,span:`span`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`NACLO 2023 - Problem C`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Vloxes`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,`
`,(0,i.jsx)(a.p,{children:`(The official solution already has a very detailed explanation, so this is just a paraphrase.)`}),`
`,(0,i.jsx)(a.p,{children:`We have the following differentiating factors of vloxes:`}),`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`Has horn: A, I`}),`
`,(0,i.jsx)(a.li,{children:`Small: B, F; big: I`}),`
`,(0,i.jsxs)(a.li,{children:[`Where the stripe on the body is pointing to:`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`Top corner, slightly right: I`}),`
`,(0,i.jsx)(a.li,{children:`Top right corner, slightly up: C`}),`
`,(0,i.jsx)(a.li,{children:`Top right corner: A, H`}),`
`,(0,i.jsx)(a.li,{children:`Top right corner, slightly down: B`}),`
`,(0,i.jsx)(a.li,{children:`Bottom right corner, slightly left: D`}),`
`,(0,i.jsx)(a.li,{children:`Top left corner: E, F, G`}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`How much of the feet is black:`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`All: A, G`}),`
`,(0,i.jsx)(a.li,{children:`Most: C, F, I`}),`
`,(0,i.jsx)(a.li,{children:`Some: B, E, H`}),`
`,(0,i.jsx)(a.li,{children:`None: D`}),`
`]}),`
`]}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`In the encyclopedia, the following words are important:`}),`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`imxo: comparable as more/less`}),`
`,(0,i.jsx)(a.li,{children:`mellivu: comparable as more/less`}),`
`,(0,i.jsx)(a.li,{children:`qliqli: comparable as more/less, has an absolute "completely"`}),`
`,(0,i.jsx)(a.li,{children:`zuff, kibb, tezz, ravv, womm: not compared, but can be graded and combined using "-ish". Collectively referred to as "zlorvitude".`}),`
`,(0,i.jsx)(a.li,{children:`azeltorf: has an absolute "nearly"`}),`
`,(0,i.jsx)(a.li,{children:`mellovu: absolute, cannot be compared`}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`Based on whether the adjectives are comparable or absolute and how many vloxes have each trait, we can match the list above to the list of traits:`}),`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`There's only one absolute adjective, and among the traits, only "has horn" is incomparable. Since there are only two mellovu vloxes and two vloxes with horn, we conclude that "mellovu" = "has horn".`}),`
`,(0,i.jsx)(a.li,{children:`Since the zlorvitude adjectives can be combined but they are never compared, these are most likely the direction of the body stripe. For example, suppose pointing to the top corner is "tezz" and top right corner is "zuff", then "top, slightly right" would be "zuffish tezz", while "right, slightly up" would be "tezzish zuff". Only two neighboring corners can be joined by "-ish". There are one zuffish-kibb, one kibbish-zuff, and two kibb, so "kibb" = "top right", "zuff" = "top". There are three ravv, so "ravv" = "top left". One can say "ravvish-womm", so "womm" is next to "ravv" and must be "bottom left", leaving "tezz" = "bottom right".`}),`
`,(0,i.jsx)(a.li,{children:`That leaves "imxo", "mellivu", "qliqli", and "azeltorf" to refer to size and leg color. Since "azeltorf" and "qliqli" both have an absolute (one can say "completely filled" but not "completely large"), these two refer to the leg color, while "imxo" and "mellivu" refer to size. There is one imxo vlox but two mellivu vloxes, so "imxo" = "big" and "mellivu" = "small". There is one qliqli vlox but two azeltorf vloxes, so "qliqli" = "not filled" and "azeltorf" = "filled".`}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`Since vloxes are born completely qliqli and qliqli means "not filled", the youngest vlox is D. This one has the stripe pointing to the bottom right corner, slightly towards bottom left, so it's "wommish tezz".`}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Semantics`,`Puzzle`],title:`NACLO 2023 - Problem C: Vloxes`,description:`NACLO 2023 - Problem C: Vloxes, a problem that involves Semantics and Puzzle. Detailed solution and walkthrough.`,year:2023,prob:`C`};export{o as default};