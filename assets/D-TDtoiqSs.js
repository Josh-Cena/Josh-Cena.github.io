import{t as e}from"./jsx-runtime-DAs1UGHr.js";import"./react-BRPyh-lz.js";import{n as t}from"./lib-T-nEWGuF.js";import"./Link-BoPxscL2.js";import"./chroma-js-gUsXfuXB.js";import{i as n,r}from"./_components-CITIul92.js";var i=e(),a={tags:[`Computational`],title:`NACLO 2024 - Problem D: Generally Speaking`,description:`NACLO 2024 - Problem D: Generally Speaking, a problem that involves Computational. Detailed solution and walkthrough.`,year:2024,prob:`D`};function o(e){let o={a:`a`,br:`br`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,section:`section`,span:`span`,sup:`sup`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`NACLO 2024 - Problem D`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Generally Speaking`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.p,{children:`We need to reverse-engineer the algorithm of each computer.`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`C1 only gave G for 18–20, which are all in the training set. Therefore this computer only gives G for sentences in the training set. 36 is in the training set but 37, 38 are not, so (f) = G, (i) = U, (l) = U.`}),`
`,(0,i.jsx)(o.li,{children:`C2 gave G for 18–24. Its strategy isn't immediately obvious, so we'll leave it for later.`}),`
`,(0,i.jsx)(o.li,{children:`C3 always gives the correct answers; but it has no corresponding blanks to fill.`}),`
`,(0,i.jsx)(o.li,{children:`C4 only ever gives G, so (h) = G, (k) = G, (n) = G.`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`Now for C2. Here are a few hypotheses that don't work:`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`It only rejects sentences with unknown words: while it does reject all sentences with unknown words, it also rejects 25 and 26 which have no unknown words.`}),`
`,(0,i.jsx)(o.li,{children:`It judges based on co-occurrence of words or elements it has seen: it accepts "The linguist visited the spy." where "linguist", "visited", and "spy" have never co-occurred before.`}),`
`]}),`
`,(0,i.jsxs)(o.p,{children:[`Our biggest problem is why it accepts "The linguist visited the spy." but not "The woodcarver visited the programmer.", when none of the words are unknown and the structures are also highly regular. If it's not the word and not the structure, then it must be how the words are placed `,(0,i.jsx)(o.em,{children:`into`}),` the structure. Indeed, for a pattern like "The X Y the Z.", "linguist" has appeared as "X" (1), "visited" has appeared as "Y" (7), and "spy" has appeared as "Z" (2), but "woodcarver" has never appeared as "X". Therefore, C2 takes distribution into account. To verify this hypothesis, we must count the distribution of each word in the training set. Note that it's able to get "The main concierge saw the blacksmith" where there's an extra adjective, so the distribution is not just about the word's index position in the sentence, but its position relative to landmarks. Let's suppose that C2 learned the following templates (I'm assuming it has learned that the same categories B, C, and D can be reused across templates, instead of learning one category per template, and it turned out to be a correct, at least irrelevant, assumption):`]}),`
`,(0,i.jsxs)(o.ol,{children:[`
`,(0,i.jsx)(o.li,{children:`The B is E.`}),`
`,(0,i.jsx)(o.li,{children:`The B C the D.`}),`
`,(0,i.jsx)(o.li,{children:`The A B C the D.`}),`
`]}),`
`,(0,i.jsxs)(`table`,{children:[(0,i.jsx)(`thead`,{children:(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`A`}),(0,i.jsx)(`th`,{children:`B`}),(0,i.jsx)(`th`,{children:`C`}),(0,i.jsx)(`th`,{children:`D`}),(0,i.jsx)(`th`,{children:`E`})]})}),(0,i.jsx)(`tbody`,{children:(0,i.jsxs)(`tr`,{children:[(0,i.jsxs)(`td`,{children:[`cheerful`,(0,i.jsx)(`br`,{}),`famous`,(0,i.jsx)(`br`,{}),`happy`,(0,i.jsx)(`br`,{}),`main`,(0,i.jsx)(`br`,{}),`talented`]}),(0,i.jsxs)(`td`,{children:[`ballerina`,(0,i.jsx)(`br`,{}),`calligrapher`,(0,i.jsx)(`br`,{}),`cartoonist`,(0,i.jsx)(`br`,{}),`concierge`,(0,i.jsx)(`br`,{}),`detective`,(0,i.jsx)(`br`,{}),`haberdasher`,(0,i.jsx)(`br`,{}),`linguist`,(0,i.jsx)(`br`,{}),`programmer`,(0,i.jsx)(`br`,{}),`spy`,(0,i.jsx)(`br`,{}),`watchmaker`]}),(0,i.jsxs)(`td`,{children:[`met`,(0,i.jsx)(`br`,{}),`saw`,(0,i.jsx)(`br`,{}),`visited`]}),(0,i.jsxs)(`td`,{children:[`astronaut`,(0,i.jsx)(`br`,{}),`ballerina`,(0,i.jsx)(`br`,{}),`blacksmith`,(0,i.jsx)(`br`,{}),`linguist`,(0,i.jsx)(`br`,{}),`programmer`,(0,i.jsx)(`br`,{}),`spy`,(0,i.jsx)(`br`,{}),`woodcarver`,(0,i.jsx)(`br`,{}),`yodeler`]}),(0,i.jsxs)(`td`,{children:[`asleep`,(0,i.jsx)(`br`,{}),`famous`,(0,i.jsx)(`br`,{}),`happy`,(0,i.jsx)(`br`,{}),`tall`,(0,i.jsx)(`br`,{}),`knowledgeable`]})]})})]}),`
`,(0,i.jsx)(o.p,{children:`Indeed, we can verify that all sentences accepted by C2 follow one of these templates, and all sentences rejected by C2 violate these templates. Therefore:`}),`
`,(0,i.jsxs)(o.p,{children:[`31. "tall" not in A; (a) = U`,(0,i.jsx)(o.br,{}),`
`,`32. Follows template 2; (b) = G`,(0,i.jsx)(o.br,{}),`
`,`33. Doesn't follow a template; (c) = U`,(0,i.jsx)(o.br,{}),`
`,`34. "yodeler" not in B; (d) = U`,(0,i.jsx)(o.br,{}),`
`,`35. Follows template 1; (e) = G`,(0,i.jsx)(o.br,{}),`
`,`36. Follows template 2; (g) = G`,(0,i.jsx)(o.br,{}),`
`,`37. "talented" not in E; (j) = U`,(0,i.jsx)(o.br,{}),`
`,`38. "cartoonist" not in D; (m) = U`]}),`
`,(0,i.jsx)(o.p,{children:`In D2, "asleep" only appeared in position E; "happy" appeared in both B and E; "main" only appeared in position B. C2 gave 39 and 40 both G, so HIDDEN_WORD_1 = happy. It gave 41 U, which means HIDDEN_WORD_2 cannot be in position E, so HIDDEN_WORD_2 = main. It gave 44 U, which means HIDDEN_WORD_3 cannot be in position B, so HIDDEN_WORD_3 = asleep.`}),`
`,(0,i.jsx)(o.p,{children:`For me, "happy" is definitely both attributive and predicative; "main" is mostly only attributive (I can think of very limited contexts in which "he is main" is legal, usually as slangs); "asleep" is mostly only predicative (the attributive version is "sleeping"). So I give the same judgment as C2 and differ with C3 by 2.`}),`
`,(0,i.jsx)(o.p,{children:`For D4, here are the ciphered texts and their contexts:`}),`
`,`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`to QGTRHUU it (in response to "make this picture smaller"; later mentioned "enlarge")`}),`
`,(0,i.jsx)(o.li,{children:`the RKGKHENDKEW of the smaller version should make it easier to move around`}),`
`,(0,i.jsx)(o.li,{children:`is currently UQYETKFQ-DKAPE (in response to "looks a little odd", followed by "apply a mirror filter")`}),`
`,(0,i.jsx)(o.li,{children:`EPX! (in response to "Who is the tallest person"; previous two responses "That" and "There")`}),`
`,(0,i.jsx)(o.li,{children:`make this HEEQRMEKXG (in response to "schedule an appointment with my hairdresser")`}),`
`,(0,i.jsx)(o.li,{children:`an appointment TXRQCPQG next week`}),`
`,(0,i.jsx)(o.li,{children:`But then, WQTEQDCQQB, we got two new clients (after "Not much happened for the first week")`}),`
`,(0,i.jsx)(o.li,{children:`had many EHUUJXRKGAT`}),`
`]}),`
`,(0,i.jsxs)(o.p,{children:[`The problem setup says that all these words have something to do with morphology. Therefore "QGTRHUU" has something to do with "small"; naturally the "TRHUU" part stands for "small", making "QG" stand for "en" (i.e., make), which is consistent with the later mention of "enlarge".`,(0,i.jsx)(o.sup,{children:(0,i.jsx)(o.a,{href:`#user-content-fn-1`,id:`user-content-fnref-1`,"data-footnote-ref":!0,"aria-describedby":`footnote-label`,children:`1`})}),` Now we can just substitute these deciphered letters into other words and keep guessing as the words become more revealed:`]}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`"WQTEQDCQQB" becomes "WesEeDCeeB", which, in the context of "last week", is obviously "yesterweek" (generalized from "yesterday").`}),`
`,(0,i.jsx)(o.li,{children:`"TXRQCPQG" becomes "sXmewPen", which is likely "somewhen" (generalized from "somewhat", "somewhere", "somehow").`}),`
`,(0,i.jsx)(o.li,{children:`"EPX" becomes "tho" (generalized from "what" → "that", "where" → "there").`}),`
`,(0,i.jsx)(o.li,{children:`"HEEQRMEKXG" becomes "attemMtKon", which can only be "attemption" (don't know how it generalized that).`}),`
`,(0,i.jsx)(o.li,{children:`"RKGKHENDKEW" becomes "miniatNrity", which can only be "miniaturity" (from "miniature").`}),`
`,(0,i.jsx)(o.li,{children:`"UQYETKFQ-DKAPE" becomes "leYtsiFe-riAht", which is "leftside-right" (from "upside-down").`}),`
`,(0,i.jsx)(o.li,{children:`Finally "EHUUJXRKGAT" becomes "tallJomings", which is "tallcomings" (the antonym of "shortcomings").`}),`
`]}),`
`,(0,i.jsxs)(o.section,{"data-footnotes":!0,className:`footnotes`,children:[(0,i.jsx)(o.h2,{className:`sr-only`,id:`footnote-label`,children:`Footnotes`}),`
`,(0,i.jsxs)(o.ol,{children:[`
`,(0,i.jsxs)(o.li,{id:`user-content-fn-1`,children:[`
`,(0,i.jsxs)(o.p,{children:[`Funny aside: in my CS data structures class, the functions to shrink/grow a hash map are actually called "ensmallen/embiggen". I can never get over the double causative morphology. `,(0,i.jsx)(o.a,{href:`#user-content-fnref-1`,"data-footnote-backref":``,"aria-label":`Back to reference 1`,className:`data-footnote-backref`,children:`↩`})]}),`
`]}),`
`]}),`
`]}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{s as default,a as frontMatter};