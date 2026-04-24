import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-BHnTV9cU.js";import"./Link-CEJsqf-b.js";import"./chroma-js-CGevHmQZ.js";import{i as n,r}from"./_components-B_GYQ7d6.js";var i=e();function a(e){let a={h1:`h1`,li:`li`,ol:`ol`,p:`p`,span:`span`,strong:`strong`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`NACLO 2024 - Problem I`,(0,i.jsx)(a.span,{className:`subtitle`,children:`In the Scottish Highlands`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,`
`,(0,i.jsx)(a.p,{children:`Tally the morphemes. Morphemes that look similar are put together. "nan Damh" always appears together so I count it as one morpheme.`}),`
`,(0,i.jsxs)(a.ol,{children:[`
`,(0,i.jsx)(a.li,{children:`-Dearg (3)`}),`
`,(0,i.jsx)(a.li,{children:`-Mòr (1) + -Mòr- (1) + -Mhòr (1)`}),`
`,(0,i.jsx)(a.li,{children:`Beinn- (1) + -Bheinn (2)`}),`
`,(0,i.jsx)(a.li,{children:`Càrn- (3)`}),`
`,(0,i.jsx)(a.li,{children:`Meall- (3)`}),`
`,(0,i.jsx)(a.li,{children:`-Gorm (2)`}),`
`,(0,i.jsx)(a.li,{children:`-nan Damh (2)`}),`
`,(0,i.jsx)(a.li,{children:`-Teallach (2)`}),`
`,(0,i.jsx)(a.li,{children:`Creag- (2)`}),`
`,(0,i.jsx)(a.li,{children:`Fionn- (1) + -Fiona (1)`}),`
`,(0,i.jsx)(a.li,{children:`Garbh- (1) + -Garbh (1)`}),`
`,(0,i.jsx)(a.li,{children:`Sgùrr- (2)`}),`
`,(0,i.jsx)(a.li,{children:`An- (1)`}),`
`,(0,i.jsx)(a.li,{children:`Innis- (1)`}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`(The "-Mòr-" "infix" is actually either a prefix or a suffix, depending on whether the language is head-initial or head-final.)`}),`
`,(0,i.jsx)(a.p,{children:`And the English translations. "Of the stags" and "Lumpy hill" both have to be one morpheme, because there's only one 3-morpheme Scottish Gaelic word, which has to be "big red hill".`}),`
`,(0,i.jsxs)(a.ol,{children:[`
`,(0,i.jsx)(a.li,{children:`big- (3)`}),`
`,(0,i.jsx)(a.li,{children:`-hill (3)`}),`
`,(0,i.jsx)(a.li,{children:`-lumpy hill (3)`}),`
`,(0,i.jsx)(a.li,{children:`-mountain (3)`}),`
`,(0,i.jsx)(a.li,{children:`red- (3)`}),`
`,(0,i.jsx)(a.li,{children:`forge- (1) + -forge (1)`}),`
`,(0,i.jsx)(a.li,{children:`-of the stags (2)`}),`
`,(0,i.jsx)(a.li,{children:`-peak (2)`}),`
`,(0,i.jsx)(a.li,{children:`-rock (2)`}),`
`,(0,i.jsx)(a.li,{children:`rough- (2)`}),`
`,(0,i.jsx)(a.li,{children:`white- (2)`}),`
`,(0,i.jsx)(a.li,{children:`blue- (1)`}),`
`,(0,i.jsx)(a.li,{children:`green- (1)`}),`
`,(0,i.jsx)(a.li,{children:`-meadow (1)`}),`
`,(0,i.jsx)(a.li,{children:`the- (1)`}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`(Note: the prefix/suffix notation here just denotes how they appear in the English words, not that an English prefix is necessarily a Scottish Gaelic one. "Red" is considered to always be a prefix even in "big red hill" because English adjective noun phrases are head-final.)`}),`
`,(0,i.jsx)(a.p,{children:`Everything lines up almost perfectly: 15 morphemes on both sides, 5 appeared 3 times, 7 appeared 2 times, and 2 appeared 1 time. On the English side, we have 6 appearing 2 times and 4 appearing 1 time, meaning there are two English morphemes that map to the same Scottish Gaelic morpheme (indeed, I2 explicitly says so).`}),`
`,(0,i.jsxs)(a.p,{children:[`First, note that "Càrn Mòr Dearg" is the only word with three morphemes, and "big red hill" is similarly the only translation with three morphemes, so they have to match: `,(0,i.jsx)(a.strong,{children:`15 = B`}),`. We also have "Càrn Dearg" and "red hill", but no other 2-morpheme combinations of "big", "red", and "hill", so "Mòr" means "big", and `,(0,i.jsx)(a.strong,{children:`1 = I`}),`.`]}),`
`,(0,i.jsxs)(a.p,{children:[`"Càrn" and "Dearg" mean "red" and "hill" in some order, but these four morphemes all appear 3 times, so we can't use frequency to tell. Excluding "big red hill" and "red hill", "red" appeared in "red lumpy hill", "hill" appeared in "blue hill", "Càrn" appeared in "Càrn Gorm", and "Dearg" appeared in "Meall Dearg". "blue" has count 1, "Gorm" has count 2, and both "lumpy hill" and "Meall" have count 3. We know that there's 1 Scottish Gaelic morpheme with count 2 that corresponds to 2 English morphemes with count 1, so "Gorm" = "blue" ("blue" is one of the meanings of "Gorm"), "Meall" = "lumpy hill", therefore "Càrn" = "hill", "Dearg" = "red". So we have: `,(0,i.jsx)(a.strong,{children:`2 = M`}),`, `,(0,i.jsx)(a.strong,{children:`11 = E`}),`.`]}),`
`,(0,i.jsxs)(a.p,{children:[`"Meall" co-occurred with "Garbh" and "Gorm", and "lumpy hill" with "rough" and "green". Both "Garbh" and "rough" appear twice while "green" appears once, so "Garbh" = "rough", "Gorm" = "green" (giving us the other meaning of "Gorm"). So `,(0,i.jsx)(a.strong,{children:`3 = A`}),`, `,(0,i.jsx)(a.strong,{children:`14 = H`}),`.`]}),`
`,(0,i.jsxs)(a.p,{children:[`"Garbh" co-occurred with "Bheinn", and "rough" with "mountain", so "Bheinn" = "mountain". `,(0,i.jsx)(a.strong,{children:`7 = F`}),`.`]}),`
`,(0,i.jsxs)(a.p,{children:[`"Bheinn" and "Beinn" co-occurred with "Fionn" and "Teallach", and "mountain" with "forge" and "white". All of "Fionn", "Teallach", "forge", and "white" have count 2. However, "Fionn"/"Fiona" and "white" co-occurred with the count-2 morphemes "Sgùrr" and "peak", while "Teallach" and "forge" co-occurred with the count-1 morphemes "An" and "the". So "Fionn"/"Fiona" = "white", "Teallach" = "forge", "Sgùrr" = "peak", "An" = "the". `,(0,i.jsx)(a.strong,{children:`4 = K`}),`, `,(0,i.jsx)(a.strong,{children:`5 = G`}),`, `,(0,i.jsx)(a.strong,{children:`8 = C`}),`, `,(0,i.jsx)(a.strong,{children:`9 = J`}),`.`]}),`
`,(0,i.jsxs)(a.p,{children:[`"Mòr"/"Mhòr" has one other unmatched appearance in "Creag Mhòr", and "big" has one more appearance in "big rock", so "Creag" = "rock". `,(0,i.jsx)(a.strong,{children:`6 = L`}),`.`]}),`
`,(0,i.jsxs)(a.p,{children:[`"Creag" appeared with "nan Damh", and "rock" with "of the stags", so "nan Damh" = "of the stags". `,(0,i.jsx)(a.strong,{children:`12 = O`}),`. That leaves "Innis" = "meadow". `,(0,i.jsx)(a.strong,{children:`10 = D`}),`.`]}),`
`,(0,i.jsx)(a.p,{children:`As we look back, we see that there's no real word order or clue for spelling variation. Most words like "Càrn" and "Meall" appear before the modifiers, but "Beinn"/"Bheinn" may appear after. "Mòr" and "Mhòr" are used for modifying "peak" and "rock" respectively, so perhaps there's a gender difference, but we don't have enough data to tell.`}),`
`,(0,i.jsx)(a.p,{children:`Solutions (since at the time of writing no official solution is released):`}),`
`,(0,i.jsxs)(a.ol,{children:[`
`,(0,i.jsx)(a.li,{children:`I`}),`
`,(0,i.jsx)(a.li,{children:`M`}),`
`,(0,i.jsx)(a.li,{children:`A`}),`
`,(0,i.jsx)(a.li,{children:`K`}),`
`,(0,i.jsx)(a.li,{children:`G`}),`
`,(0,i.jsx)(a.li,{children:`L`}),`
`,(0,i.jsx)(a.li,{children:`F`}),`
`,(0,i.jsx)(a.li,{children:`C`}),`
`,(0,i.jsx)(a.li,{children:`J`}),`
`,(0,i.jsx)(a.li,{children:`D`}),`
`,(0,i.jsx)(a.li,{children:`E`}),`
`,(0,i.jsx)(a.li,{children:`O`}),`
`,(0,i.jsx)(a.li,{children:`N`}),`
`,(0,i.jsx)(a.li,{children:`H`}),`
`,(0,i.jsx)(a.li,{children:`B`}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`"Gorm" has two meanings: "blue" and "green".`}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Morphology`,`Semantics`],title:`NACLO 2024 - Problem I: In the Scottish Highlands`,description:`NACLO 2024 - Problem I: In the Scottish Highlands, a problem that involves Morphology and Semantics. Detailed solution and walkthrough.`,year:2024,prob:`I`};export{o as default};