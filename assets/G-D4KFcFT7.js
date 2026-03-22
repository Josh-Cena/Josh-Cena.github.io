import{u as a,j as e}from"./index-CKqa2xZ3.js";import{P as l,a as o}from"./_components-Fu4-ILO4.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Ciqn2WuZ.js";const s={tags:["Phrase translation","Syntax"],title:"NACLO 2025 - Problem G: The Little Dog That Could Read",description:"NACLO 2025 - Problem G: The Little Dog That Could Read, a problem that involves Phrase translation and Syntax. Detailed solution and walkthrough.",year:2025,prob:"G"};function t(i){const n={a:"a",br:"br",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",section:"section",span:"span",sup:"sup",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["NACLO 2025 - Problem G",e.jsx(n.span,{className:"subtitle",children:"The Little Dog That Could Read"})]}),e.jsx(l,{frontMatter:s}),`
`,`
`,e.jsx(n.p,{children:'The way to approach a phrase translation problem like this is start by making a "template" for the sentences. Here, all sentences are in past tense. All 12 but 2 of them are declarative; the other 2 are interrogative. Most of them are of the form (including the questions):'}),`
`,e.jsx(n.p,{children:"[Modifier] [Subject] [Verb] [Modifier] [Object]"}),`
`,e.jsx(n.p,{children:"Where the modifier can be a possessor or an adjective (good, bad, big, little, white, long)."}),`
`,e.jsx(n.p,{children:'Compare the three sentences that all have "saw". The only common part is "amwi", which is "bamwi" in 1, "amwi" in 11, and "nemwi" in 12. Similarly, in the two sentences involving "eat", the common part is "la", which is "ala" in 6 and "ila" in 8, and we also see "ola" in 4.'}),`
`,e.jsx(n.p,{children:`8 and 12 both involve "peanut", and the only common part is "cher", which is "ncher" in 8 and "lecher" in 12. This suggests that the parts after them, "i bang" and "lenini", mean "the children's" and "big", respectively. Indeed, "lenini" also appears in 6, and "benini" appears 1, both sentences containing "big". From 1, "bebil" therefore means "fields", so in 10 "kebil" means "field".`}),`
`,e.jsx(n.p,{children:"At this point, we know that this language is SVO, with the head noun before the modifier. So we can fill out the glosses that just have adjective-noun:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'In 1, "banka" = "women", "balülü" = "good".'}),`
`,e.jsx(n.li,{children:'In 2, "banjir" = "men", "babibə" = "bad", "badzo" = "kill", "ibat" = "duck", "lelülü" = "good" (consistent with "balülü").'}),`
`,e.jsx(n.li,{children:`In 8, "nko" = "chickens", "ibibə" = "bad" (consistent with "babibə"). Therefore in 7, "nejo" = "hear", "ne bang" = "the children's" (similar to previous "i bang"), and "munkar" = "woman".`}),`
`,e.jsx(n.li,{children:`In 9, "ntaw" = "goats", "ilülü" = "good". Therefore in 10, "i banka" = "the women's". In 9, this leaves "bachunga" = "buy", "bande" = "white men".`}),`
`,e.jsx(n.li,{children:'In 12, "ngombe" = "cow", "nekikə" = "little".'}),`
`]}),`
`,e.jsx(n.p,{children:"At this point, we have enough confidence to claim that possessives are formed by appending some possessive marker (i, ke, be, ...) and then the possessor noun, unchanged."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`In 3, "ne banjir" = "the men's" (consistent with previous "banjir"), "kejo" = "hear" (similar to "nejo"), "keto" = "snake", and "ketita" = "long".`}),`
`,e.jsx(n.li,{children:`In 5, "ne banka" = "the women's", "mva" = "dog".`}),`
`,e.jsx(n.li,{children:`In 6, "le ibat" = "the duck's", "ipe" = "wing".`}),`
`,e.jsx(n.li,{children:`In 10, "ke munde" = "the white man's".`}),`
`,e.jsx(n.li,{children:`In 11, "be bande" = "the white men's", so "bena" = "things".`}),`
`]}),`
`,e.jsx(n.p,{children:`Finally in 4, "mabat" = "ducks", "masinxunə" = "want to", "mokan" = "book", "mo munjir" = "the man's".`}),`
`,e.jsx(n.p,{children:"To summarize, here's the glossary:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Nouns:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"woman/women: munkar/banka"}),`
`,e.jsx(n.li,{children:"man/men: munjir/banjir"}),`
`,e.jsx(n.li,{children:"white man/white men: munde/bande"}),`
`,e.jsx(n.li,{children:"children: bang"}),`
`,e.jsx(n.li,{children:"field/fields: kebil/bebil"}),`
`,e.jsx(n.li,{children:"things: bena"}),`
`,e.jsx(n.li,{children:"snake: keto"}),`
`,e.jsx(n.li,{children:"duck/ducks: ibat/mabat"}),`
`,e.jsx(n.li,{children:"wing: ipe"}),`
`,e.jsx(n.li,{children:"goat/goats: ntaw"}),`
`,e.jsx(n.li,{children:"chicken/chickens: nko"}),`
`,e.jsx(n.li,{children:"cow: ngombe"}),`
`,e.jsx(n.li,{children:"dog: mva"}),`
`,e.jsx(n.li,{children:"peanut/peanuts: lecher/ncher"}),`
`,e.jsx(n.li,{children:"book: mokan"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Verbs:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"see: bamwi (women-fields)/amwi (who-things)/nemwi (cow-peanut)"}),`
`,e.jsx(n.li,{children:"hear: kejo (snake-goat)/nejo (woman-chickens)"}),`
`,e.jsx(n.li,{children:"eat: ola (want to)/ala (who-wing)/ila (chickens-peanuts)"}),`
`,e.jsx(n.li,{children:"want to: masinxunə (ducks)"}),`
`,e.jsx(n.li,{children:"learn to: nejao (dog)"}),`
`,e.jsx(n.li,{children:"read: otang (learn to)"}),`
`,e.jsx(n.li,{children:"buy: bachunga (white men-goats)"}),`
`,e.jsx(n.li,{children:"go to: ikwi o (goats)"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Adjectives:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"good: lelülü (duck)/ilülü (goats)/balülü (women)"}),`
`,e.jsx(n.li,{children:"bad: ibibə (chickens)/babibə (men)"}),`
`,e.jsx(n.li,{children:"big: lenini (duck/peanut)/benini (fields)"}),`
`,e.jsx(n.li,{children:"little: nekikə (dog/cow)"}),`
`,e.jsx(n.li,{children:"long: ketita (snake)"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Possessive marker:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"ne (men's goat, women's dog, children's chicken)"}),`
`,e.jsx(n.li,{children:"i (children's peanuts, women's goats)"}),`
`,e.jsx(n.li,{children:"mo (man's book)"}),`
`,e.jsx(n.li,{children:"le (duck's wing)"}),`
`,e.jsx(n.li,{children:"ke (white man's field)"}),`
`,e.jsx(n.li,{children:"be (white men's things)"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"So we observe that nouns have different prefixes denoting different classes. The prefix participates in pluralization, adjective agreement, verb agreement with subject, and possessive marker with the possessed (part of the table filled in by G1):"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Class"}),e.jsx(n.th,{children:"Noun prefix"}),e.jsx(n.th,{children:"Adjective & Possessive"}),e.jsx(n.th,{children:"Verb"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"human"}),e.jsx(n.td,{children:"mu- / ba-"}),e.jsx(n.td,{children:"mu- / ba-"}),e.jsx(n.td,{children:"ne- / ba-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"wing"}),e.jsx(n.td,{children:"i- / ma-"}),e.jsx(n.td,{children:"le- / ?"}),e.jsx(n.td,{children:"? / ma-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"domestic"}),e.jsxs(n.td,{children:["n- / n-",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),e.jsx(n.td,{children:"ne- / i-"}),e.jsx(n.td,{children:"ne- / i-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"peanut"}),e.jsx(n.td,{children:"le- / n-"}),e.jsx(n.td,{children:"le- / i-"}),e.jsx(n.td,{children:"?"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"book"}),e.jsx(n.td,{children:"mo- / me-"}),e.jsx(n.td,{children:"mo- / me-"}),e.jsx(n.td,{children:"?"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"other"}),e.jsx(n.td,{children:"ke- / be-"}),e.jsx(n.td,{children:"ke- / be-"}),e.jsx(n.td,{children:"ke- / be-"})]})]})]}),`
`,e.jsx(n.p,{children:"This is enough for G1:"}),`
`,e.jsxs(n.p,{children:["a. Mva imwi ntaw nebibə = dog see.PL goat bad.SG = The dogs saw the bad goat.",e.jsx(n.br,{}),`
`,"b. Munjir nekikə netang mekan melülü = man little read books good.PL = The little man read the good books.",e.jsx(n.br,{}),`
`,"c. Nə adzo beto be munkar? = who kill snakes of woman = Who killed the woman's snakes?"]}),`
`,e.jsx(n.p,{children:"As for G2:"}),`
`,e.jsxs(n.p,{children:['a. "Heard" is "kejo/nejo"; here the subject is "cows", a plural domestic animal, so we use the "i-" prefix: "ijo". "Big" is "lenini/benini", here the noun is "dogs", again a plural domestic animal, so we use "inini". Answer: Ngombe ijo mva inini.',e.jsx(n.br,{}),`
`,'b. "Learned" is "nejao"; here the subject is "the white man", a singular human, so we keep the "ne-" prefix. The infinitive form of "eat" is "ola". "Wing" is "ipe", so its plural is "mape". Put together: Munde nejao ola mape.',e.jsx(n.br,{}),`
`,'c. "Snakes" is "beto", so its agreeing possessive is "be". "Read" is "otang" (infinitive), so to agree with "snakes" we use "betang". "Big" is "lenini/benini", so to agree with books "mekan" we use "menini". Put together: Beto be kebil betang mekan menini.']}),`
`,e.jsx(n.p,{children:"In G3, the new observation is that numbers also agree with the head noun, using what appears to be the adjective agreement rules."}),`
`,e.jsxs(n.p,{children:[`a. "pigs" is "nchungə", so it's from the "domestic" class whose singular is still "nchungə". "One" becomes "nemo" from "lemo".`,e.jsx(n.br,{}),`
`,`b. "trees" is "mete", so it's from the "book" class whose singular is "mote". "One" becomes "momo".`,e.jsx(n.br,{}),`
`,`c. "bones" is "befwa", so it's from the "other" class whose singular is "kefwa". "One" becomes "kemo".`,e.jsx(n.br,{}),`
`,`d. "shoulder" is "ipyao", so it's from the "wing" class whose plural is "mapyao". "Two" becomes "mapə" from "ipə".`,e.jsx(n.br,{}),`
`,`e. "finger" is "ledze", so it's from the "peanut" class whose plural is "ndze". "Three" becomes "isa" from "besa".`]}),`
`,e.jsxs(n.section,{"data-footnotes":!0,className:"footnotes",children:[e.jsx(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{id:"user-content-fn-1",children:[`
`,e.jsxs(n.p,{children:['"Dog" is special case because it starts with "m" but is in the "n-" class. ',e.jsx(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`]}),`
`]}),e.jsx(o,{frontMatter:s})]})}function m(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{m as default,s as frontMatter};
