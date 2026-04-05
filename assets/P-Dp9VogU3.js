import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import"./chroma-js-BVS6aaM2.js";import{i as n,r}from"./_components-DEaGFsln.js";var i=e();function a(e){let a={br:`br`,h1:`h1`,li:`li`,p:`p`,span:`span`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`NACLO 2024 - Problem P`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Stressed Out in Kilivila`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,`
`,(0,i.jsx)(a.p,{children:`For P1, we figure out the syllable structure. Syllable structure is described by a sequence of Cs, a sequence of Vs, and another sequence of Cs, known as the onset, nucleus, and coda respectively. Here, based on existing information, the coda can only be "m" and nothing else. The nucleus may have two vowels, but "uo" and "iu" must be split. Empty onset is also allowed, but complex onset is only allowed if the second consonant is "w". "mw" is always analyzed as a complex onset instead of "m" as the coda of the previous syllable.`}),`
`,(0,i.jsxs)(a.p,{children:[`12. [i.dó.ja]`,(0,i.jsx)(a.br,{}),`
`,`13. [ba.kám]`,(0,i.jsx)(a.br,{}),`
`,`14. [ḿ.wo] (have to make ḿ a single syllable because it receives stress)`,(0,i.jsx)(a.br,{}),`
`,`15. [i.gi.bu.lúi]`,(0,i.jsx)(a.br,{}),`
`,`16. [la.ó.di.la] (have to make ó a single syllable because it receives stress)`,(0,i.jsx)(a.br,{}),`
`,`17. [m.kí.u.ta]`]}),`
`,(0,i.jsx)(a.p,{children:`Now for stress pattern. Notice how the stress appears closer to the right end of the word, especially for very long words like [gu.gu.lom.bwai.lí.gu], so assume that we start counting syllables from the right.`}),`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`Last syllable: [tau.áu], [i.ki.úm], [la.ka.tu.pói], [ba.kám], [i.gi.bu.lúi]`}),`
`,(0,i.jsx)(a.li,{children:`Penultimate syllable: [gu.gwá.di], [i.koi.sú.vi], [péu.la], [am.bái.sa], [kei.ú.na], [gu.gu.lom.bwai.lí.gu], [i.dó.ja], [ḿ.wo]`}),`
`,(0,i.jsx)(a.li,{children:`Antepenultimate syllable: [du.o.sí.si.a], [m.lo.mwá.lu.va], [a.ó.di.la], [m.kí.u.ta]`}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`For words with stress on the last syllable, the last syllable is always either a diphthong or has the "m" coda. Otherwise, the stress moves to the second last syllable. However, if the second last syllable uses "i" or "u" as the nucleus, the stress moves to the antepenultimate syllable instead. This explains all the data except [i.koi.sú.vi], [kei.ú.na], and [gu.gu.lom.bwai.lí.gu], for which the stress is on the penultimate syllable even though it has "i" as the nucleus. For these, the antepenultimate syllable is a diphthong, so the stress doesn't move further left.`}),`
`,(0,i.jsxs)(a.p,{children:[`18. [pá.ku.la] (last syllable not diphthong, penultimate syllable has "u" as nucleus, antepenultimate syllable is not diphthong)`,(0,i.jsx)(a.br,{}),`
`,`19. [m.tu.mwá.tu] (last syllable not diphthong, penultimate syllable doesn't have "i" or "u" as nucleus)`,(0,i.jsx)(a.br,{}),`
`,`20. [tom.to.mó.ta] (last syllable not diphthong, penultimate syllable doesn't have "i" or "u" as nucleus)`,(0,i.jsx)(a.br,{}),`
`,`21. [i.va.bo.da.ním] (last syllable has "m" coda)`,(0,i.jsx)(a.br,{}),`
`,`22. [i.sáim] (last syllable has more than 1 nucleus sound)`,(0,i.jsx)(a.br,{}),`
`,`23. [tom.mei.kí.ta] (last syllable not diphthong, penultimate syllable has "i" as nucleus, antepenultimate syllable is a diphthong)`]}),`
`,(0,i.jsx)(a.p,{children:`Finally we are missing both, but the Kilivila words' letters are exactly equivalent to their IPA transcriptions, so really we just need to do both syllabification and stress placement for the missing words.`}),`
`,(0,i.jsxs)(a.p,{children:[`24. [ka.wá.la]`,(0,i.jsx)(a.br,{}),`
`,`25. [ku.lía]`,(0,i.jsx)(a.br,{}),`
`,`26. [dum.da.bó.gi]`,(0,i.jsx)(a.br,{}),`
`,`27. [m.ló.pu]`,(0,i.jsx)(a.br,{}),`
`,`28. [ku.su.nu.pu.lói]`,(0,i.jsx)(a.br,{}),`
`,`29. [ki.lí.vi.la]`]}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Phonology`],title:`NACLO 2024 - Problem P: Stressed Out in Kilivila`,description:`NACLO 2024 - Problem P: Stressed Out in Kilivila, a problem that involves Phonology. Detailed solution and walkthrough.`,year:2024,prob:`P`};export{o as default};