import{u as i,j as e}from"./index-DyI1T4xN.js";import{P as l,a as o}from"./_components-YM4q2yub.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ciqn2WuZ.js";const s={tags:["Phrase translation","Syntax"],title:"NACLO 2025 - Problem P: The Greatest Thing Since Boiled Breadfruit",description:"NACLO 2025 - Problem P: The Greatest Thing Since Boiled Breadfruit, a problem that involves Phrase translation and Syntax. Detailed solution and walkthrough.",year:2025,prob:"P"};function r(t){const n={em:"em",h1:"h1",li:"li",p:"p",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["NACLO 2025 - Problem P",e.jsx(n.span,{className:"subtitle",children:"The Greatest Thing Since Boiled Breadfruit"})]}),e.jsx(l,{frontMatter:s}),`
`,`
`,e.jsx(n.p,{children:"There are only 8 sentences, which is a good sign because the fewer sentences (with more repetitions of lexical items), the simpler the pattern."}),`
`,e.jsx(n.p,{children:"Indeed, these 8 sentences only involve 3 verbs: boil, tell a story, and go. They only involve 4 tenses: past (far), present, near future, and far future. All of them are progressive. So we can make a table:"}),`
`,e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{children:"(Far) Past"}),e.jsx("th",{children:"Present"}),e.jsx("th",{children:"Near future"}),e.jsx("th",{children:"Far future"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Boil"}),e.jsx("td",{}),e.jsxs("td",{children:[e.jsx("strong",{children:"Meli blulu nelalee."}),e.jsx("br",{}),e.jsx("em",{children:"The water"})]}),e.jsxs("td",{children:[e.jsx("strong",{children:"Meli blulu nelabe."}),e.jsx("br",{}),e.jsx("em",{children:"The water"})]}),e.jsxs("td",{children:[e.jsx("strong",{children:"Nibie blulu nefomefe."}),e.jsx("br",{}),e.jsx("em",{children:"I - the breadfruit"})]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Tell a story"}),e.jsxs("td",{children:[e.jsx("strong",{children:"Nalime nafomelee."}),e.jsx("br",{}),e.jsx("em",{children:"He - to himself"}),e.jsx("br",{}),e.jsx("strong",{children:"Meneme naomeie."}),e.jsx("br",{}),e.jsx("em",{children:"I - to myself"})]}),e.jsxs("td",{children:[e.jsx("strong",{children:"Menele naolane."}),e.jsx("br",{}),e.jsx("em",{children:"They - to me"})]}),e.jsx("td",{}),e.jsxs("td",{children:[e.jsx("strong",{children:"Nalile natemefe."}),e.jsx("br",{}),e.jsx("em",{children:"I - to them"})]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Go"}),e.jsx("td",{}),e.jsx("td",{}),e.jsxs("td",{children:[e.jsx("strong",{children:"Melife walafe."}),e.jsx("br",{}),e.jsx("em",{children:"I - for water"})]}),e.jsx("td",{})]})]}),`
`,e.jsxs(n.p,{children:['To begin, we should always look for concrete lexical items such as "to boil" or "to tell a story", because pronouns may be merged into the inflection of the verb. Compare all "to tell a story" sentences. The ',e.jsx(n.em,{children:"only"}),` commonality is the "na" at the start of the second word, so "na" must be the morpheme for "to tell a story". (It's often striking how short these morphemes are, which is a common feature of polysynthetic languages, which are quite popular in contests.) Similarly, all "to boil" sentences contain "blulu" and the last word begins with "ne", so "blulu ne" means "to boil".`]}),`
`,e.jsx(n.p,{children:'Now compare vertically. Although the last syllable has no obvious common pattern across columns, the penultimate one one is consistently "me" for past and far future, and "la" for present and near future, implying that they mark the near/far distinction. This strongly suggests that the last syllable marks the future/past distinction. Indeed, there are two past/present sentences ending with "lee" and 3 future sentences ending with "fe". The commonality within each group is the phi-feature of the subject: the "lee" group all have 3rd singular person subjects, while the "fe" group all have 1st person subjects. This means that the tense marker agrees with the subject in person and number:'}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Tense"}),e.jsx(n.th,{children:"1st singular"}),e.jsx(n.th,{children:"3rd singular"}),e.jsx(n.th,{children:"3rd plural"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Past (incl. present)"}),e.jsx(n.td,{children:"-ie"}),e.jsx(n.td,{children:"-lee"}),e.jsx(n.td,{children:"-ne"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Future"}),e.jsx(n.td,{children:"-fe"}),e.jsx(n.td,{children:"-be"}),e.jsx(n.td,{children:"?"})]})]})]}),`
`,e.jsx(n.p,{children:"This distinction seems logical because [f] and [b] are both labials, while [i], [l], and [n] are all coronal sonorants, so they are articulatorily similar."}),`
`,e.jsx(n.p,{children:`We've now completely determined the composition of tense and verb morphemes, but for sentences involving an object, there's one morpheme in the middle (such as the -o- in "naolane") that we haven't accounted for, which likely has something to do with the subject or object. So we now turn to the nouns. Concerning this morpheme in the middle:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["-o-: ",e.jsx(n.em,{children:"They - to me"}),", ",e.jsx(n.em,{children:"I - to myself"})]}),`
`,e.jsxs(n.li,{children:["-fo-: ",e.jsx(n.em,{children:"He - to himself"}),", ",e.jsx(n.em,{children:"I - the breadfruit"})]}),`
`,e.jsxs(n.li,{children:["-te-: ",e.jsx(n.em,{children:"I - to them"})]}),`
`]}),`
`,e.jsx(n.p,{children:"It's pretty clear that this is an object agreement marker, with -o- for 1st person singular object, -fo- for 3rd person singular object, and -te- for 3rd person plural object. This makes sense given that the subject agreement is already on the tense marker."}),`
`,e.jsx(n.p,{children:"Only the first word remains to be analyzed. Note that the whole second word already contains both object and subject agreement, which means for pronoun objects/subjects, the information is already fully contained in the second word, so the first word may not contain any pronoun."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Meli: ",e.jsx(n.em,{children:"The water"})]}),`
`,e.jsxs(n.li,{children:["Melife: ",e.jsx(n.em,{children:"I - for water"})]}),`
`,e.jsxs(n.li,{children:["Nibie: ",e.jsx(n.em,{children:"I - the breadfruit"})]}),`
`,e.jsxs(n.li,{children:["Nalime: ",e.jsx(n.em,{children:"He - to himself"})]}),`
`,e.jsxs(n.li,{children:["Nalile: ",e.jsx(n.em,{children:"I - to them"})]}),`
`,e.jsxs(n.li,{children:["Meneme: ",e.jsx(n.em,{children:"I - to myself"})]}),`
`,e.jsxs(n.li,{children:["Menele: ",e.jsx(n.em,{children:"They - to me"})]}),`
`]}),`
`,e.jsx(n.p,{children:`Meli must stand for "the water" because it's the only morpheme left in the sentence "Meli blulu nelalee". Therefore "-fe" is "for". There are two sentences that begin with "Nali-" and two that begin with "Mene-"; the former both have 3rd person objects and the latter both have 1st person objects, so they are pronouns for the object. "-me" and "-le" mark whether the action is reflexive or not, because the only two sentences with "-me" are reflexive ("to myself" and "to himself"). This also leaves "Nibie" to mean "the breadfruit".`}),`
`,e.jsx(n.p,{children:"Therefore we can summarize the grammar as follows:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Each sentence consists of a noun followed by a verb complex."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:`If one of the arguments is a concrete noun, then it appears in the noun slot. (We don't know the word order if both of them are concrete nouns.) Otherwise, if both arguments are pronouns, then the object appears in the noun slot. The noun slot has the structure [object][suffix] where [object] is "Mene-" for 1st person and "Nali-" for 3rd person, and the suffix is:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"-me for reflexive"}),`
`,e.jsx(n.li,{children:"-le for non-reflexive"}),`
`,e.jsx(n.li,{children:'-fe for "for"'}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:'The verb complex has the structure [verb root][object][timeframe][tense/subject agreement]. The verb root is "blulu ne" for "to boil", "na" for "to tell a story", and "wa" for "to go". The object is:'}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"-o- for 1st person singular object"}),`
`,e.jsx(n.li,{children:"-fo- for 3rd person singular object"}),`
`,e.jsx(n.li,{children:"-te- for 3rd person plural object"}),`
`]}),`
`,e.jsx(n.p,{children:"(This particle is only present if the object is a pronoun.) The timeframe marker is:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"-la- for near (incl. present)"}),`
`,e.jsx(n.li,{children:"-me- for far"}),`
`]}),`
`,e.jsx(n.p,{children:"The tense/subject agreement is given in the table above."}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Once the grammar has been thoroughly dissected, translation is straightforward."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Mene-le na-o-me-lee = Me tell-me-far-past.3s = He was telling me a story a while ago."}),`
`,e.jsx(n.li,{children:"Nali-me na-te-la-ne = He/they-reflexive tell-them-near-past.3p = They are telling themselves a story."}),`
`,e.jsx(n.li,{children:"Wa-me-ie = Go-far-past.1s = I was going a while ago."}),`
`,e.jsx(n.li,{children:"He will be going for breadfruit soon = breadfruit-for go-near-future.3s = Nibie-fe wa-la-be"}),`
`,e.jsx(n.li,{children:'He was going to him a while ago = Him go-him-far-past.3s = Nali-le wa-fo-me-lee (note: -le not -me because the object is "him" not "himself")'}),`
`,e.jsx(n.li,{children:"The breadfruit will be boiling in a while = breadfruit boil-far-future.3s = Nibie blulu ne-me-be"}),`
`]}),e.jsx(o,{frontMatter:s})]})}function j(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{j as default,s as frontMatter};
