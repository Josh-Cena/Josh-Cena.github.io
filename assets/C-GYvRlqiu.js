import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import"./chroma-js-rK3xRofm.js";import{i as n,r}from"./_components-Q6m5hMHs.js";var i=e(),a={tags:[`Semantics`,`Puzzle`],title:`NACLO 2023 - Problem C: Vloxes`,description:`NACLO 2023 - Problem C: Vloxes, a problem that involves Semantics and Puzzle. Detailed solution and walkthrough.`,year:2023,prob:`C`};function o(e){let o={h1:`h1`,li:`li`,p:`p`,span:`span`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`NACLO 2023 - Problem C`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Vloxes`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,`
`,(0,i.jsx)(o.p,{children:`(The official solution already has a very detailed explanation, so this is just a paraphrase.)`}),`
`,(0,i.jsx)(o.p,{children:`We have the following differentiating factors of vloxes:`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`Has horn: A, I`}),`
`,(0,i.jsx)(o.li,{children:`Small: B, F; big: I`}),`
`,(0,i.jsxs)(o.li,{children:[`Where the stripe on the body is pointing to:`,`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`Top corner, slightly right: I`}),`
`,(0,i.jsx)(o.li,{children:`Top right corner, slightly up: C`}),`
`,(0,i.jsx)(o.li,{children:`Top right corner: A, H`}),`
`,(0,i.jsx)(o.li,{children:`Top right corner, slightly down: B`}),`
`,(0,i.jsx)(o.li,{children:`Bottom right corner, slightly left: D`}),`
`,(0,i.jsx)(o.li,{children:`Top left corner: E, F, G`}),`
`]}),`
`]}),`
`,(0,i.jsxs)(o.li,{children:[`How much of the feet is black:`,`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`All: A, G`}),`
`,(0,i.jsx)(o.li,{children:`Most: C, F, I`}),`
`,(0,i.jsx)(o.li,{children:`Some: B, E, H`}),`
`,(0,i.jsx)(o.li,{children:`None: D`}),`
`]}),`
`]}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`In the encyclopedia, the following words are important:`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`imxo: comparable as more/less`}),`
`,(0,i.jsx)(o.li,{children:`mellivu: comparable as more/less`}),`
`,(0,i.jsx)(o.li,{children:`qliqli: comparable as more/less, has an absolute "completely"`}),`
`,(0,i.jsx)(o.li,{children:`zuff, kibb, tezz, ravv, womm: not compared, but can be graded and combined using "-ish". Collectively referred to as "zlorvitude".`}),`
`,(0,i.jsx)(o.li,{children:`azeltorf: has an absolute "nearly"`}),`
`,(0,i.jsx)(o.li,{children:`mellovu: absolute, cannot be compared`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`Based on whether the adjectives are comparable or absolute and how many vloxes have each trait, we can match the list above to the list of traits:`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`There's only one absolute adjective, and among the traits, only "has horn" is incomparable. Since there are only two mellovu vloxes and two vloxes with horn, we conclude that "mellovu" = "has horn".`}),`
`,(0,i.jsx)(o.li,{children:`Since the zlorvitude adjectives can be combined but they are never compared, these are most likely the direction of the body stripe. For example, suppose pointing to the top corner is "tezz" and top right corner is "zuff", then "top, slightly right" would be "zuffish tezz", while "right, slightly up" would be "tezzish zuff". Only two neighboring corners can be joined by "-ish". There are one zuffish-kibb, one kibbish-zuff, and two kibb, so "kibb" = "top right", "zuff" = "top". There are three ravv, so "ravv" = "top left". One can say "ravvish-womm", so "womm" is next to "ravv" and must be "bottom left", leaving "tezz" = "bottom right".`}),`
`,(0,i.jsx)(o.li,{children:`That leaves "imxo", "mellivu", "qliqli", and "azeltorf" to refer to size and leg color. Since "azeltorf" and "qliqli" both have an absolute (one can say "completely filled" but not "completely large"), these two refer to the leg color, while "imxo" and "mellivu" refer to size. There is one imxo vlox but two mellivu vloxes, so "imxo" = "big" and "mellivu" = "small". There is one qliqli vlox but two azeltorf vloxes, so "qliqli" = "not filled" and "azeltorf" = "filled".`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`Since vloxes are born completely qliqli and qliqli means "not filled", the youngest vlox is D. This one has the stripe pointing to the bottom right corner, slightly towards bottom left, so it's "wommish tezz".`}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{s as default,a as frontMatter};