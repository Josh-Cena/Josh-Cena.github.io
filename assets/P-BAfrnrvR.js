import{u as n,j as e}from"./index-DwRXtLVn.js";import{P as i,a as o}from"./_components-C8VjCMbT.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ciqn2WuZ.js";const l={tags:["Phonology"],title:"NACLO 2024 - Problem P: Stressed Out in Kilivila",description:"NACLO 2024 - Problem P: Stressed Out in Kilivila, a problem that involves Phonology. Detailed solution and walkthrough.",year:2024,prob:"P"};function a(t){const s={br:"br",h1:"h1",li:"li",p:"p",span:"span",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h1,{children:["NACLO 2024 - Problem P",e.jsx(s.span,{className:"subtitle",children:"Stressed Out in Kilivila"})]}),e.jsx(i,{frontMatter:l}),`
`,`
`,e.jsx(s.p,{children:'For P1, we figure out the syllable structure. Syllable structure is described by a sequence of Cs, a sequence of Vs, and another sequence of Cs, known as the onset, nucleus, and coda respectively. Here, based on existing information, the coda can only be "m" and nothing else. The nucleus may have two vowels, but "uo" and "iu" must be split. Empty onset is also allowed, but complex onset is only allowed if the second consonant is "w". "mw" is always analyzed as a complex onset instead of "m" as the coda of the previous syllable.'}),`
`,e.jsxs(s.p,{children:["12. [i.dó.ja]",e.jsx(s.br,{}),`
`,"13. [ba.kám]",e.jsx(s.br,{}),`
`,"14. [ḿ.wo] (have to make ḿ a single syllable because it receives stress)",e.jsx(s.br,{}),`
`,"15. [i.gi.bu.lúi]",e.jsx(s.br,{}),`
`,"16. [la.ó.di.la] (have to make ó a single syllable because it receives stress)",e.jsx(s.br,{}),`
`,"17. [m.kí.u.ta]"]}),`
`,e.jsx(s.p,{children:"Now for stress pattern. Notice how the stress appears closer to the right end of the word, especially for very long words like [gu.gu.lom.bwai.lí.gu], so assume that we start counting syllables from the right."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Last syllable: [tau.áu], [i.ki.úm], [la.ka.tu.pói], [ba.kám], [i.gi.bu.lúi]"}),`
`,e.jsx(s.li,{children:"Penultimate syllable: [gu.gwá.di], [i.koi.sú.vi], [péu.la], [am.bái.sa], [kei.ú.na], [gu.gu.lom.bwai.lí.gu], [i.dó.ja], [ḿ.wo]"}),`
`,e.jsx(s.li,{children:"Antepenultimate syllable: [du.o.sí.si.a], [m.lo.mwá.lu.va], [a.ó.di.la], [m.kí.u.ta]"}),`
`]}),`
`,e.jsx(s.p,{children:`For words with stress on the last syllable, the last syllable is always either a diphthong or has the "m" coda. Otherwise, the stress moves to the second last syllable. However, if the second last syllable uses "i" or "u" as the nucleus, the stress moves to the antepenultimate syllable instead. This explains all the data except [i.koi.sú.vi], [kei.ú.na], and [gu.gu.lom.bwai.lí.gu], for which the stress is on the penultimate syllable even though it has "i" as the nucleus. For these, the antepenultimate syllable is a diphthong, so the stress doesn't move further left.`}),`
`,e.jsxs(s.p,{children:['18. [pá.ku.la] (last syllable not diphthong, penultimate syllable has "u" as nucleus, antepenultimate syllable is not diphthong)',e.jsx(s.br,{}),`
`,`19. [m.tu.mwá.tu] (last syllable not diphthong, penultimate syllable doesn't have "i" or "u" as nucleus)`,e.jsx(s.br,{}),`
`,`20. [tom.to.mó.ta] (last syllable not diphthong, penultimate syllable doesn't have "i" or "u" as nucleus)`,e.jsx(s.br,{}),`
`,'21. [i.va.bo.da.ním] (last syllable has "m" coda)',e.jsx(s.br,{}),`
`,"22. [i.sáim] (last syllable has more than 1 nucleus sound)",e.jsx(s.br,{}),`
`,'23. [tom.mei.kí.ta] (last syllable not diphthong, penultimate syllable has "i" as nucleus, antepenultimate syllable is a diphthong)']}),`
`,e.jsx(s.p,{children:"Finally we are missing both, but the Kilivila words' letters are exactly equivalent to their IPA transcriptions, so really we just need to do both syllabification and stress placement for the missing words."}),`
`,e.jsxs(s.p,{children:["24. [ka.wá.la]",e.jsx(s.br,{}),`
`,"25. [ku.lía]",e.jsx(s.br,{}),`
`,"26. [dum.da.bó.gi]",e.jsx(s.br,{}),`
`,"27. [m.ló.pu]",e.jsx(s.br,{}),`
`,"28. [ku.su.nu.pu.lói]",e.jsx(s.br,{}),`
`,"29. [ki.lí.vi.la]"]}),e.jsx(o,{frontMatter:l})]})}function d(t={}){const{wrapper:s}={...n(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(a,{...t})}):a(t)}export{d as default,l as frontMatter};
