import{t as e}from"./jsx-runtime-DAs1UGHr.js";import"./react-BRPyh-lz.js";import{n as t}from"./lib-T-nEWGuF.js";import"./Link-BoPxscL2.js";import"./chroma-js-gUsXfuXB.js";import{i as n,r}from"./_components-DIee1U0p.js";var i=e(),a={tags:[`Syntax`,`Puzzle`],title:`NACLO 2023 - Problem A: The Way We Were`,description:`NACLO 2023 - Problem A: The Way We Were, a problem that involves Syntax and Puzzle. Detailed solution and walkthrough.`,year:2023,prob:`A`};function o(e){let o={br:`br`,h1:`h1`,li:`li`,p:`p`,span:`span`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`NACLO 2023 - Problem A`,(0,i.jsx)(o.span,{className:`subtitle`,children:`The Way We Were`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,`
`,(0,i.jsx)(o.p,{children:`Most words here are identical or very close, so word matching is easy.`}),`
`,(0,i.jsxs)(o.p,{children:[`a. "Archbishop" is in sentence 3: arcebisceop.`,(0,i.jsx)(o.br,{}),`
`,`b. From 12, we know that "King Alfred" = "Alfred cyning"; from 13, we know that "Edward" = "Eadweard", so combine these two to get "King Edward" = "Eadweard cyning".`,(0,i.jsx)(o.br,{}),`
`,`c. "menn" is from sentence 1; "þas menn" = "these men".`,(0,i.jsx)(o.br,{}),`
`,`d. "weras" is from sentence 8; "þas weras" = "these men".`]}),`
`,(0,i.jsx)(o.p,{children:`Next we want to understand a bit about Old English syntax, or at least the ways in which it differs from Modern English.`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`Æþelwine and Wulfstan gesawon þas menn. = Athelwine and Wulfstan saw these men.`}),`
`,(0,i.jsx)(o.li,{children:`Hi hi gretton. = They them greeted. (object pronoun before verb)`}),`
`,(0,i.jsx)(o.li,{children:`Nereþ hit us? = Saves it us? (verb lifted instead of do-support)`}),`
`,(0,i.jsx)(o.li,{children:`Se cyning and se bisceop and ic gesawon þone arcebisceop. = The king and the bishop and I saw the archbishop.`}),`
`,(0,i.jsx)(o.li,{children:`We hine gretton. = We him greeted. (object pronoun before verb)`}),`
`,(0,i.jsx)(o.li,{children:`Hwæt cweþe we? = What say we? (verb lifted instead of do-support)`}),`
`,(0,i.jsx)(o.li,{children:`Seo lar eow nereþ. = The teaching you saves. (object pronoun before verb)`}),`
`,(0,i.jsx)(o.li,{children:`We cumaþ. = We come.`}),`
`,(0,i.jsx)(o.li,{children:`Ne hiere we þas wifmen. = No hear we these women. (verb at second position, before subject and after negation)`}),`
`,(0,i.jsx)(o.li,{children:`Þas weras hieraþ þas wifmen. = These men hear these women.`}),`
`,(0,i.jsx)(o.li,{children:`Ne gesawon hi hi. = No saw they them. (verb at second position, before subject and after negation)`}),`
`,(0,i.jsx)(o.li,{children:`Þu hierdest þas menn. = You heard these men.`}),`
`,(0,i.jsx)(o.li,{children:`Þa hierde we þe. = Then heard we you. (verb at second position, before subject and after adverb)`}),`
`,(0,i.jsx)(o.li,{children:`Þu þe hierdest, and we us hierdon. = You you heard, and we us heard. (object pronoun before verb)`}),`
`,(0,i.jsx)(o.li,{children:`Alfred cyning and se bisceop ridon into þære byrig. = Alfred king and the bishop rode into the town.`}),`
`,(0,i.jsx)(o.li,{children:`Þa gesawe we hi. = Then saw we them. (verb at second position, before subject and after adverb)`}),`
`,(0,i.jsx)(o.li,{children:`Eadweard hine geseah. = Edward himself saw. (object pronoun before verb)`}),`
`,(0,i.jsx)(o.li,{children:`Gesawe ge us? = Saw you us? (verb lifted instead of do-support)`}),`
`,(0,i.jsx)(o.li,{children:`Hwæt fremest þu? = What perform you? (verb lifted instead of do-support)`}),`
`,(0,i.jsx)(o.li,{children:`Fremede we hit? = Perform we it? (verb lifted instead of do-support)`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`Therefore, we observed three main differences: in simple and wh questions, the verb is lifted without any do-support; in normal sentences with a pronoun object, the pronoun comes before the verb (like French "je le mange"); in sentences starting with negation "ne" or adverb "þa", the verb is in the second position, lifted before the subject. These suggest that Old English has V-to-T movement as well as V2 word order (no need to worry what these terms mean).`}),`
`,(0,i.jsx)(o.p,{children:`It may be helpful to list out all the pronouns:`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`1st sg: subject = ic`}),`
`,(0,i.jsx)(o.li,{children:`1st pl: subject = we; object = us`}),`
`,(0,i.jsx)(o.li,{children:`2nd sg/pl: subject = þu/ge; object = þe/eow`}),`
`,(0,i.jsx)(o.li,{children:`3rd sg: subject = hit; object = hine/hit`}),`
`,(0,i.jsx)(o.li,{children:`3rd pl: hi`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`And all the verbs:`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`saw: gesawon (Athelwine and Wulfstan; the king and the bishop and I; they), gesawe (we; you), geseah (Edward)`}),`
`,(0,i.jsx)(o.li,{children:`greeted: gretton (they; we)`}),`
`,(0,i.jsx)(o.li,{children:`save: Nereþ (it; the teaching)`}),`
`,(0,i.jsx)(o.li,{children:`say: cweþe (we)`}),`
`,(0,i.jsx)(o.li,{children:`come: cumaþ (we)`}),`
`,(0,i.jsx)(o.li,{children:`hear: hiere (we), hieraþ (these men); heard: hierdest (you), hierde (we), hierdon (we)`}),`
`,(0,i.jsx)(o.li,{children:`rode: ridon (Alfred king and the bishop)`}),`
`,(0,i.jsx)(o.li,{children:`perform: fremest (you), fremede (we)`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`There's rich inflection: at least three variants per word. "-on" is always used for "we/they" past tense: "gesawon", "gretton", "hierdon", "ridon"; while "-est" for "you" past tense: "hierdest", "fremest". "We heard" has two forms: "hierde" and "hierdon". Similarly "we saw" can be either "gesawe" or "gesawon". Which one to choose? Note that "hierde" is used when it comes before "we" and "hierdon" when it's after. Similarly, "gesawe", "hiere", "fremede", and "cweþe" are all used when the verb comes before the subject "we". So the suffix is just "-e" when the verb comes before the "we" and inflected normally otherwise. However, this rule doesn't apply to "hi" pronoun, which still uses "gesawon hi" instead of "gesawe hi". We don't have to figure out the inflection 100%: just enough to get us through the translations.`}),`
`,(0,i.jsxs)(o.p,{children:[`e. Ne hierde ge hi. = No heard you them. = You did not hear them.`,(0,i.jsx)(o.br,{}),`
`,`f. Ne gesawon hi þe. = No saw they you. = They did not see you.`,(0,i.jsx)(o.br,{}),`
`,`g. Hi hit fremedon. = They it performed. = They performed it.`,(0,i.jsx)(o.br,{}),`
`,`h. Ne nerede we þe. = No saved we you. = We did not save you.`]}),`
`,(0,i.jsx)(o.p,{children:`In A2, we just find out which parts are missing.`}),`
`,(0,i.jsxs)(o.p,{children:[`a. them = hi`,(0,i.jsx)(o.br,{}),`
`,`b. saves = nereþ`,(0,i.jsx)(o.br,{}),`
`,`c. (you) it heard = hit hierdest`,(0,i.jsx)(o.br,{}),`
`,`d. heard they us = hierdon hi us`]}),`
`,(0,i.jsx)(o.p,{children:`In A3, based on how the problem is set up, we need to focus on the two pronouns: "we" and "you". "We" can be either "we" or "wit", and "you" can be either "eow", "inc", or "þe". Because all these sentences have the same structure, the selection is not a syntactic choice, but a semantic one. Look at the right hand side. The distinction is based on what the pronouns refer to. Look for commonalities in the referents of "we" and "you":`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`A "my people and I", C "all the bishops", E "he and his men": more than 2 people`}),`
`,(0,i.jsx)(o.li,{children:`B "she and my father", D "my mother and I", F "he and his queen": 2 people`}),`
`,(0,i.jsx)(o.li,{children:`A "your people", F "the people": more than 2 people`}),`
`,(0,i.jsx)(o.li,{children:`D "my sister and brother", E "Swithun and Edmund": 2 people`}),`
`,(0,i.jsx)(o.li,{children:`B "me", C "the arch-bishop": 1 people`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`So it has to do with the number of people, and we just need to find sentences that tell us the number of people.`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`"we" is not used in 28–32, but we have 3 "The king and the bishop and I". So "we" is 3 or more people: A, C, E.`}),`
`,(0,i.jsx)(o.li,{children:`"wit" is used in 29 "The king and I". So "wit" is 2 people: B, D, F.`}),`
`,(0,i.jsx)(o.li,{children:`"inc" is used in 32 "Edmund and Swithun". So "inc" is 2 people: D, E.`}),`
`,(0,i.jsx)(o.li,{children:`"þe" is used in 11 to mean "yourself", so it's singular: B, C.`}),`
`,(0,i.jsx)(o.li,{children:`That leaves "eow" to be plural "you": A, F.`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`Therefore:`}),`
`,(0,i.jsxs)(o.p,{children:[`i. Wit-eow = F`,(0,i.jsx)(o.br,{}),`
`,`ii. Wit-inc = D`,(0,i.jsx)(o.br,{}),`
`,`iii. We-eow = A`,(0,i.jsx)(o.br,{}),`
`,`iv. We-inc = E`,(0,i.jsx)(o.br,{}),`
`,`v. We-þe = C`,(0,i.jsx)(o.br,{}),`
`,`vi. Wit-þe = B`]}),`
`,(0,i.jsx)(o.p,{children:`Finally in A4, we do the same thing: find the referent of "you" and count the number of people. However, here we also need to be careful with subject/object: eow/inc/þe are object pronouns, while the subjects, as previously analyzed, are ge/git/þu. "git" is 2-people per 32; "þu" is singular per 11.`}),`
`,(0,i.jsxs)(o.p,{children:[`a. Paul (subject) = þu`,(0,i.jsx)(o.br,{}),`
`,`b. Alfred & Edmund (subject) = git`,(0,i.jsx)(o.br,{}),`
`,`c. Athelwine & Wulfstan (object) = inc`,(0,i.jsx)(o.br,{}),`
`,`d. Crowd (subject) = ge`,(0,i.jsx)(o.br,{}),`
`,`e. Paul (object) = þe`,(0,i.jsx)(o.br,{}),`
`,`f. Alfred, Athelwine, and Paul (object) = eow`]}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{s as default,a as frontMatter};