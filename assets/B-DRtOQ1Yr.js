import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import"./chroma-js-rK3xRofm.js";import{i as n,r}from"./_components-Q6m5hMHs.js";var i=e(),a={tags:[`Phonology`],title:`NACLO 2023 - Problem B: Don't Stress`,description:`NACLO 2023 - Problem B: Don't Stress, a problem that involves Phonology. Detailed solution and walkthrough.`,year:2023,prob:`B`};function o(e){let o={h1:`h1`,li:`li`,p:`p`,span:`span`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`NACLO 2023 - Problem B`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Don't Stress`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,`
`,(0,i.jsx)(o.p,{children:`Stress usually depends on both the position and the type of the syllable. Here, among the 7 words given, we have:`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`4 words with primary stress on the 3rd syllable: hokewe, wanįǧįgra, hokiwaroke, hakirujikgaja`}),`
`,(0,i.jsx)(o.li,{children:`3 words with primary stress on the 2nd syllable: waakit’e, hąąhere, bookągają`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`And the secondary stress, if it exists, is always the second syllable after the primary one. Short words don't have secondary stress. So the only remaining question is how we choose between 3rd and 2nd for primary stress. Usually, the stress shifts because the default position cannot be stressed, or something else attracts stress.`}),`
`,(0,i.jsx)(o.p,{children:`If it's because the default position cannot be stressed: let's see what each word's second and third syllables are.`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`Unstressed: ke, nį, ki, ki; t’e, re, ga`}),`
`,(0,i.jsx)(o.li,{children:`Stressed: we, ǧį, wa, ru; ki, he, ką`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`Unfortunately, there does not exist a clear complementary distribution in either the vowels or the consonants. So we can rule out this possibility.`}),`
`,(0,i.jsx)(o.p,{children:`If it's because something else attracts stress, we look for the context of the stress—i.e., the syllables around P. We immediately notice that for the second group, all syllables before P contain a long vowel, while in the first group, no syllable contains a long vowel. So the hypothesis is that the long vowel attracts stress, which by default is the 3rd syllable.`}),`
`,(0,i.jsx)(o.p,{children:`Following this:`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`hipirak: no long vowels; stress on 3rd syllable — N-N-P`}),`
`,(0,i.jsx)(o.li,{children:`xorojike: no long vowels; stress on 3rd syllable — N-N-P-N`}),`
`,(0,i.jsx)(o.li,{children:`waiperesga: diphthong in 1st syllable; stress on 2nd syllable — N-P-N-S (we've never seen diphthongs in the dataset, so we don't know if the attraction condition is based on long vowels or double vowels, so I believe N-N-P-N is also acceptable)`}),`
`,(0,i.jsx)(o.li,{children:`waaporoporo: long vowel; stress on 2nd syllable — N-P-N-S-N`}),`
`,(0,i.jsx)(o.li,{children:`hirakorohonira: no long vowels; stress on 3rd syllable — N-N-P-N-S-N-N (the answer says N-N-P-N-S-N-S because the segment after P alternates between N and S, but this is never observed in the dataset, so I believe both are acceptable)`}),`
`]}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{s as default,a as frontMatter};