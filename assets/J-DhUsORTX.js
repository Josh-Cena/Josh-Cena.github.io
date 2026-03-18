import{u as r,j as e}from"./index-BykeWMol.js";import{P as i,a as o}from"./_components-B6wE-VEc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ciqn2WuZ.js";const n={tags:["Morphology","Semantics"],title:"NACLO 2025 - Problem J: Nganasan Idol",description:"NACLO 2025 - Problem J: Nganasan Idol, a problem that involves Morphology and Semantics. Detailed solution and walkthrough.",year:2025,prob:"J"};function t(s){const a={br:"br",h1:"h1",li:"li",p:"p",span:"span",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(a.h1,{children:["NACLO 2025 - Problem J",e.jsx(a.span,{className:"subtitle",children:"Nganasan Idol"})]}),`
`,`
`,e.jsx(i,{frontMatter:n}),`
`,`
`,e.jsx(a.p,{children:"Every semantic matching problem needs a starting point. Here it's given in the problem statement: ŋuəʔ = gods, ŋuə = god, so -ʔ is the plural marker. In the word pool, we have 8 singulars and 8 plurals, which match their English translations. This breaks down the problem into 2 smaller problems."}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Nganasan (sg.)"}),e.jsx("th",{children:"English (sg.)"}),e.jsx("th",{children:"Nganasan (pl.)"}),e.jsx("th",{children:"English (pl.)"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsxs("td",{children:["1. bad'ačimi",e.jsx("br",{}),"2. bad'aʔbəbə",e.jsx("br",{}),"5. d'üəbəbə",e.jsx("br",{}),"6. d'ütü",e.jsx("br",{}),"10. koubasa",e.jsx("br",{}),"12. ŋənduj",e.jsx("br",{}),"13. təiriəŋənduj",e.jsx("br",{}),"14. tuj"]}),e.jsxs("td",{children:["A. airplane",e.jsx("br",{}),"B. boat",e.jsx("br",{}),"E. earring",e.jsx("br",{}),"F. fire",e.jsx("br",{}),"G. gunpowder sack",e.jsx("br",{}),"H. hand",e.jsx("br",{}),"I. hook",e.jsx("br",{}),"K. purse"]}),e.jsxs("td",{children:["3. čimi",e.jsx("br",{}),"4. d'üðübad'a",e.jsx("br",{}),"7. huaad'ütü",e.jsx("br",{}),"8. kojkə",e.jsx("br",{}),"9. kojküʔmaðə",e.jsx("br",{}),"11. maðə",e.jsx("br",{}),"15. tuubitiðə",e.jsx("br",{}),"16. tuuŋəntu"]}),e.jsxs("td",{children:["C. branch",e.jsx("br",{}),"D. church",e.jsx("br",{}),"J. idol",e.jsx("br",{}),"L. ring",e.jsx("br",{}),"M. steamboat",e.jsx("br",{}),"N. tooth",e.jsx("br",{}),"O. tent",e.jsx("br",{}),"P. weapon"]})]})})]}),`
`,e.jsx(a.p,{children:"Next, we group the words by common morphemes:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:"12 ŋənduj, 13 təiriə-ŋənduj, 16 tuu-ŋəntu"}),`
`,e.jsx(a.li,{children:"6 d'ütü, 7 huaa-d'ütü, 4 d'üðü-bad'a"}),`
`,e.jsx(a.li,{children:"4 d'üðü-bad'a, 2 bad'aʔ-bəbə, 1 bad'a-čimi"}),`
`,e.jsx(a.li,{children:"3 čimi, 1 bad'a-čimi"}),`
`,e.jsx(a.li,{children:"5 d'üə-bəbə, 2 bad'aʔ-bəbə"}),`
`,e.jsx(a.li,{children:"11 maðə, 9 kojküʔ-maðə"}),`
`,e.jsx(a.li,{children:"8 kojkə"}),`
`,e.jsx(a.li,{children:"10 koubasa"}),`
`,e.jsx(a.li,{children:"14 tuj"}),`
`,e.jsx(a.li,{children:"15 tuubitiðə"}),`
`]}),`
`,e.jsx(a.p,{children:"Similarly, we group the English words by theme:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:"Transport: A airplane, B boat, M steamboat"}),`
`,e.jsx(a.li,{children:'Hand-related: H hand, C branch ("tree hand"; this is based on pure intuition and experience), L ring ("hand metal"; the "piece of metal" hint is from J3)'}),`
`,e.jsx(a.li,{children:"Bag: G gunpowder sack, K purse"}),`
`,e.jsx(a.li,{children:"Weapon: P weapon, G gunpowder sack"}),`
`,e.jsx(a.li,{children:"Religion: D church, J idol"}),`
`,e.jsx(a.li,{children:"Residence: O tent, D church"}),`
`,e.jsx(a.li,{children:"E earring"}),`
`,e.jsx(a.li,{children:"F fire"}),`
`,e.jsx(a.li,{children:"I hook"}),`
`,e.jsx(a.li,{children:"N tooth"}),`
`]}),`
`,e.jsx(a.p,{children:`To begin with, notice that there's one and only one case where two morphemes both present in the dataset combine to form a new word: 8 kojkə + 11 maðə = 9 kojküʔmaðə. Furthermore, all these three morphemes belong to the "plural" side of the table. On this side, the only plausible English correspondence is J idol + O tent = D church (literally "tent of idols"). Since kojkə is pluralized in the compound word, kojkə must be "idol", and maðə must be "tent". This suggests that Nganasan is head-final, where the base noun comes at the end of the compound.`}),`
`,e.jsx(a.p,{children:'The next group I take out is the transport group, because this group needs 3 words where the base morpheme is the same, which leaves only one group: 12 ŋənduj, 13 təiriə-ŋənduj, 16 tuu-ŋəntu. I know that 12 must be "boat", from which "airplane" and "steamboat" are derived. Because 13 is on the left side of the table while 16 is on the right, 13 must be "airplane" and 16 must be "steamboat". This suggests that "tuu-" means "steam", and "təiriə-" means "flying".'}),`
`,e.jsx(a.p,{children:`The next group I take out is the hand-related group. This group first needs a morpheme for "hand", which can then act as either a base for "tree hand" or a modifier for "hand metal". This maps very nicely to 6 d'ütü, 7 huaa-d'ütü, 4 d'üðü-bad'a. If 6 is hand, and Nganasan is head-final, then 7 is "tree hand" and 4 is "hand metal". This also tells me that "huaa-" is "tree" and "-bad'a" is "metal".`}),`
`,e.jsx(a.p,{children:`At this point not many words are left, so the relationships are clearer. 2 bad'aʔbəbə and 5 d'üəbəbə share the base -bəbə, so they are probably "purse" and "gunpowder sack", with "bəbə" meaning "bag". If "bad'a" has something to do with "metal", then "bad'aʔbəbə" is probably "purse" (literally "bad of metals/jewelries"), and "d'üə-bəbə" is "gunpowder sack". The other metal-related thing is earring, but we would want "bad'a" to occur in the base rather than modifier position, so 1 bad'ačimi cannot be "earring", leaving only 10 koubasa as "earring". I guess "basa" is close enough to "bad'a". 1 bad'ačimi is therefore I hook, which is still somewhat related to metal. Obviously, čimi can't stand for "weapon" because weapon has nothing to do with hook, so 3 čimi is N tooth (hook = "metal tooth"). This leaves 14 tuj = F fire, 15 tuubitiðə = P weapon.`}),`
`,e.jsx(a.p,{children:"J2 answers:"}),`
`,e.jsxs(a.p,{children:['17. As analyzed, bəbə is "bag", so bəbəʔ is "bags".',e.jsx(a.br,{}),`
`,'18. As analyzed, kojkə is "idol".',e.jsx(a.br,{}),`
`,`19. "koubasa" is "earring" and "basa" is related to "bad'a", which is "metal", so "kou" is "ear", and "kouʔ" is "ears".`]}),`
`,e.jsx(a.p,{children:"J3 answers:"}),`
`,e.jsxs(a.p,{children:[`20. Note that "steamboats" is not simply "ŋənduj + ʔ"; there's some irregular morphology. So we just use the ending of "steamboats", which is "ŋəntuʔ".`,e.jsx(a.br,{}),`
`,`21. As stated many times, "bad'a"/"basa" mean "metal", where "basa" is probably the singular of "bad'aʔ". So the answer is "basa".`]}),`
`,e.jsx(a.p,{children:'J4: "forest fire" = trees + fire = huaaʔ-tuj'}),`
`,e.jsx(a.p,{children:'There are a lot of little pitfalls here. For example remember to pluralize "trees" in J4, or remember that pluralization is irregular for both parts of J3.'}),`
`,e.jsx(o,{frontMatter:n})]})}function u(s={}){const{wrapper:a}={...r(),...s.components};return a?e.jsx(a,{...s,children:e.jsx(t,{...s})}):t(s)}export{u as default,n as frontMatter};
