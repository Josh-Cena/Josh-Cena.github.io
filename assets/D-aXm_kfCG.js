import{u as i,j as e}from"./index-DwRXtLVn.js";import{P as o,a}from"./_components-C8VjCMbT.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ciqn2WuZ.js";const s={tags:["Computational"],title:"NACLO 2024 - Problem D: Generally Speaking",description:"NACLO 2024 - Problem D: Generally Speaking, a problem that involves Computational. Detailed solution and walkthrough.",year:2024,prob:"D"};function r(n){const t={a:"a",br:"br",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",section:"section",span:"span",sup:"sup",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.h1,{children:["NACLO 2024 - Problem D",e.jsx(t.span,{className:"subtitle",children:"Generally Speaking"})]}),e.jsx(o,{frontMatter:s}),`
`,e.jsx(t.p,{children:"We need to reverse-engineer the algorithm of each computer."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"C1 only gave G for 18–20, which are all in the training set. Therefore this computer only gives G for sentences in the training set. 36 is in the training set but 37, 38 are not, so (f) = G, (i) = U, (l) = U."}),`
`,e.jsx(t.li,{children:"C2 gave G for 18–24. Its strategy isn't immediately obvious, so we'll leave it for later."}),`
`,e.jsx(t.li,{children:"C3 always gives the correct answers; but it has no corresponding blanks to fill."}),`
`,e.jsx(t.li,{children:"C4 only ever gives G, so (h) = G, (k) = G, (n) = G."}),`
`]}),`
`,e.jsx(t.p,{children:"Now for C2. Here are a few hypotheses that don't work:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"It only rejects sentences with unknown words: while it does reject all sentences with unknown words, it also rejects 25 and 26 which have no unknown words."}),`
`,e.jsx(t.li,{children:'It judges based on co-occurrence of words or elements it has seen: it accepts "The linguist visited the spy." where "linguist", "visited", and "spy" have never co-occurred before.'}),`
`]}),`
`,e.jsxs(t.p,{children:[`Our biggest problem is why it accepts "The linguist visited the spy." but not "The woodcarver visited the programmer.", when none of the words are unknown and the structures are also highly regular. If it's not the word and not the structure, then it must be how the words are placed `,e.jsx(t.em,{children:"into"}),` the structure. Indeed, for a pattern like "The X Y the Z.", "linguist" has appeared as "X" (1), "visited" has appeared as "Y" (7), and "spy" has appeared as "Z" (2), but "woodcarver" has never appeared as "X". Therefore, C2 takes distribution into account. To verify this hypothesis, we must count the distribution of each word in the training set. Note that it's able to get "The main concierge saw the blacksmith" where there's an extra adjective, so the distribution is not just about the word's index position in the sentence, but its position relative to landmarks. Let's suppose that C2 learned the following templates (I'm assuming it has learned that the same categories B, C, and D can be reused across templates, instead of learning one category per template, and it turned out to be a correct, at least irrelevant, assumption):`]}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"The B is E."}),`
`,e.jsx(t.li,{children:"The B C the D."}),`
`,e.jsx(t.li,{children:"The A B C the D."}),`
`]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"A"}),e.jsx("th",{children:"B"}),e.jsx("th",{children:"C"}),e.jsx("th",{children:"D"}),e.jsx("th",{children:"E"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsxs("td",{children:["cheerful",e.jsx("br",{}),"famous",e.jsx("br",{}),"happy",e.jsx("br",{}),"main",e.jsx("br",{}),"talented"]}),e.jsxs("td",{children:["ballerina",e.jsx("br",{}),"calligrapher",e.jsx("br",{}),"cartoonist",e.jsx("br",{}),"concierge",e.jsx("br",{}),"detective",e.jsx("br",{}),"haberdasher",e.jsx("br",{}),"linguist",e.jsx("br",{}),"programmer",e.jsx("br",{}),"spy",e.jsx("br",{}),"watchmaker"]}),e.jsxs("td",{children:["met",e.jsx("br",{}),"saw",e.jsx("br",{}),"visited"]}),e.jsxs("td",{children:["astronaut",e.jsx("br",{}),"ballerina",e.jsx("br",{}),"blacksmith",e.jsx("br",{}),"linguist",e.jsx("br",{}),"programmer",e.jsx("br",{}),"spy",e.jsx("br",{}),"woodcarver",e.jsx("br",{}),"yodeler"]}),e.jsxs("td",{children:["asleep",e.jsx("br",{}),"famous",e.jsx("br",{}),"happy",e.jsx("br",{}),"tall",e.jsx("br",{}),"knowledgeable"]})]})})]}),`
`,e.jsx(t.p,{children:"Indeed, we can verify that all sentences accepted by C2 follow one of these templates, and all sentences rejected by C2 violate these templates. Therefore:"}),`
`,e.jsxs(t.p,{children:['31. "tall" not in A; (a) = U',e.jsx(t.br,{}),`
`,"32. Follows template 2; (b) = G",e.jsx(t.br,{}),`
`,"33. Doesn't follow a template; (c) = U",e.jsx(t.br,{}),`
`,'34. "yodeler" not in B; (d) = U',e.jsx(t.br,{}),`
`,"35. Follows template 1; (e) = G",e.jsx(t.br,{}),`
`,"36. Follows template 2; (g) = G",e.jsx(t.br,{}),`
`,'37. "talented" not in E; (j) = U',e.jsx(t.br,{}),`
`,'38. "cartoonist" not in D; (m) = U']}),`
`,e.jsx(t.p,{children:'In D2, "asleep" only appeared in position E; "happy" appeared in both B and E; "main" only appeared in position B. C2 gave 39 and 40 both G, so HIDDEN_WORD_1 = happy. It gave 41 U, which means HIDDEN_WORD_2 cannot be in position E, so HIDDEN_WORD_2 = main. It gave 44 U, which means HIDDEN_WORD_3 cannot be in position B, so HIDDEN_WORD_3 = asleep.'}),`
`,e.jsx(t.p,{children:'For me, "happy" is definitely both attributive and predicative; "main" is mostly only attributive (I can think of very limited contexts in which "he is main" is legal, usually as slangs); "asleep" is mostly only predicative (the attributive version is "sleeping"). So I give the same judgment as C2 and differ with C3 by 2.'}),`
`,e.jsx(t.p,{children:"For D4, here are the ciphered texts and their contexts:"}),`
`,`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:'to QGTRHUU it (in response to "make this picture smaller"; later mentioned "enlarge")'}),`
`,e.jsx(t.li,{children:"the RKGKHENDKEW of the smaller version should make it easier to move around"}),`
`,e.jsx(t.li,{children:'is currently UQYETKFQ-DKAPE (in response to "looks a little odd", followed by "apply a mirror filter")'}),`
`,e.jsx(t.li,{children:'EPX! (in response to "Who is the tallest person"; previous two responses "That" and "There")'}),`
`,e.jsx(t.li,{children:'make this HEEQRMEKXG (in response to "schedule an appointment with my hairdresser")'}),`
`,e.jsx(t.li,{children:"an appointment TXRQCPQG next week"}),`
`,e.jsx(t.li,{children:'But then, WQTEQDCQQB, we got two new clients (after "Not much happened for the first week")'}),`
`,e.jsx(t.li,{children:"had many EHUUJXRKGAT"}),`
`]}),`
`,e.jsxs(t.p,{children:['The problem setup says that all these words have something to do with morphology. Therefore "QGTRHUU" has something to do with "small"; naturally the "TRHUU" part stands for "small", making "QG" stand for "en" (i.e., make), which is consistent with the later mention of "enlarge".',e.jsx(t.sup,{children:e.jsx(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," Now we can just substitute these deciphered letters into other words and keep guessing as the words become more revealed:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:'"WQTEQDCQQB" becomes "WesEeDCeeB", which, in the context of "last week", is obviously "yesterweek" (generalized from "yesterday").'}),`
`,e.jsx(t.li,{children:'"TXRQCPQG" becomes "sXmewPen", which is likely "somewhen" (generalized from "somewhat", "somewhere", "somehow").'}),`
`,e.jsx(t.li,{children:'"EPX" becomes "tho" (generalized from "what" → "that", "where" → "there").'}),`
`,e.jsx(t.li,{children:`"HEEQRMEKXG" becomes "attemMtKon", which can only be "attemption" (don't know how it generalized that).`}),`
`,e.jsx(t.li,{children:'"RKGKHENDKEW" becomes "miniatNrity", which can only be "miniaturity" (from "miniature").'}),`
`,e.jsx(t.li,{children:'"UQYETKFQ-DKAPE" becomes "leYtsiFe-riAht", which is "leftside-right" (from "upside-down").'}),`
`,e.jsx(t.li,{children:'Finally "EHUUJXRKGAT" becomes "tallJomings", which is "tallcomings" (the antonym of "shortcomings").'}),`
`]}),`
`,e.jsxs(t.section,{"data-footnotes":!0,className:"footnotes",children:[e.jsx(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{id:"user-content-fn-1",children:[`
`,e.jsxs(t.p,{children:['Funny aside: in my CS data structures class, the functions to shrink/grow a hash map are actually called "ensmallen/embiggen". I can never get over the double causative morphology. ',e.jsx(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`]}),`
`]}),e.jsx(a,{frontMatter:s})]})}function m(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{m as default,s as frontMatter};
