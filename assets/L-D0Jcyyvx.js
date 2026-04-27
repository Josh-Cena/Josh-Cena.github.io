import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-BHnTV9cU.js";import"./Link-CEJsqf-b.js";import"./chroma-js-DuFX2F1K.js";import{i as n,r}from"./_components-DtU0Oezi.js";var i=e();function a(e){let a={br:`br`,em:`em`,h1:`h1`,li:`li`,p:`p`,span:`span`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`NACLO 2023 - Problem L`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Camp Not-So-Pleasanthill`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,`
`,(0,i.jsx)(a.p,{children:`If we look up "canoeing", "the campfire", "tennis" in the table, we get: "food", "delicious", "is". How do we order the words? It must depend on the number: 2443. It's saying that the first word, when decrypted, goes in position 2, the second and third go in position 4, and the fourth goes in position 3. So we get: ____ food is delicious. The missing word is "the". The "delicious" is then interpreted in the opposite meaning: "disgusting".`}),`
`,(0,i.jsx)(a.p,{children:`Knowing this, look up "cabins", "food", "basketball": "home", "take", "me". They go in positions 3, 1, 2, so we get "take me home".`}),`
`,(0,i.jsx)(a.p,{children:`To encrypt, first take the number and read off the corresponding positions in the translation. Then for each translation word, look up for the code word in the right column.`}),`
`,(0,i.jsxs)(a.p,{children:[`a. "my counselor is mean" (12443) → my, counselor, mean-mean, is → postcards, archery, the lake, tennis (again we have two words going into position 4, so add "the" before "lake". "mean" is reversed to "kind".)`,(0,i.jsx)(a.br,{}),`
`,`b. "someone stole my favorite shirt" (21453) → stole, someone, favorite, shirt, my → soccer, friends, turtle, crafts, postcards`,(0,i.jsx)(a.br,{}),`
`,`c. "take me home" (2213) → me-me, take, home → rope course, food, cabins (we want two words that both go into position 2, and "rope course" are two words and translate to "me".)`]}),`
`,(0,i.jsx)(a.p,{children:`In L3, obviously the "mystery sequence" also tells us "for each Wari’ word, upon translation, which English words does it correspond to".`}),`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[`Querec napa’ 2,[1,2,3] → "He saw me": "Querec" contributes to "saw"; "napa’" contributes to "he", "saw", `,(0,i.jsx)(a.em,{children:`and`}),` "me". It contributes to 3 positions, so it's probably a combination of agreement (with subject and object) and tense (so it contributes to the verb "saw").`]}),`
`,(0,i.jsx)(a.li,{children:`Quep ’inain temem’ 2,[1,2,4],4 → "I made a bow": "Quep" contributes to "made"; "’inain" contributes to "I", "made", and "bow"; "temem’" contributes to "bow".`}),`
`,(0,i.jsx)(a.li,{children:`Querec taram Hatem 3,[1,2,4],4 → "He will see Hatem": the key here is that "taram" contributes to "he", "will", and "Hatem", but not "see", further confirming that it contributes tense.`}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`So, with this knowledge, we just need to translate word-by-word (by looking at previous sentences containing the same word and which English positions each word contributed to), and then put their meanings into the respective English positions.`}),`
`,(0,i.jsx)(a.p,{children:`First consider "Mi’ ram con hwam Hatem":`}),`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`"Mi’" previously contributed to: "gave", "give", "gave", so it means "give"`}),`
`,(0,i.jsx)(a.li,{children:`"ram" has never appeared, but it contributes to multiple positions, so it's probably agreement + tense, like "napa’".`}),`
`,(0,i.jsx)(a.li,{children:`"con" previously contributed to: "fish", "dress", "fish", "fish". However, note that every time "con" appears, the word following it also contributes to the same noun. So perhaps "con" is some noun marker that's not overt in English.`}),`
`,(0,i.jsx)(a.li,{children:`"hwam" previously contributed to: "fish", "fish", "fish". So this is the real "fish" word.`}),`
`,(0,i.jsx)(a.li,{children:`"Hatem" as stated is just "Hatem".`}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`Putting these together: ____ ____ give the fish ____ Hatem. The last blank is probably just "to". But the first two blanks mark the subject and the tense and must be understood by fully analyzing the syntax of "ram". We list out the correspondences of all other such sentence markers:`}),`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`’inain: I/bow/past`}),`
`,(0,i.jsx)(a.li,{children:`’inam: I/woman/past`}),`
`,(0,i.jsx)(a.li,{children:`’inon: I/fish/past, I/man/past`}),`
`,(0,i.jsx)(a.li,{children:`nain: jaguar/house/past`}),`
`,(0,i.jsx)(a.li,{children:`napa’: he/me/past`}),`
`,(0,i.jsx)(a.li,{children:`non: he/fish/past, she/fish/past`}),`
`,(0,i.jsx)(a.li,{children:`nonon: she/children/past`}),`
`,(0,i.jsx)(a.li,{children:`ron: you(sg)/him/future`}),`
`,(0,i.jsx)(a.li,{children:`taram: he/Hatem/future`}),`
`,(0,i.jsx)(a.li,{children:`tarapa’: Orowao/me/future`}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`Obviously there's also a prefix/suffix combination here:`}),`
`,`
`,(0,i.jsxs)(`table`,{children:[(0,i.jsx)(`thead`,{children:(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{}),(0,i.jsx)(`th`,{children:`’in-`}),(0,i.jsx)(`th`,{children:`n-`}),(0,i.jsx)(`th`,{children:`r-`}),(0,i.jsx)(`th`,{children:`tar-`})]})}),(0,i.jsxs)(`tbody`,{children:[(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`-ain`}),(0,i.jsx)(`td`,{children:`I/bow/past`}),(0,i.jsx)(`td`,{children:`jaguar/house/past`}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`-am`}),(0,i.jsx)(`td`,{children:`I/woman/past`}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{children:`he/Hatem/future`})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`-apa’`}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{children:`he/me/past`}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{children:`Orowao/me/future`})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`-on`}),(0,i.jsxs)(`td`,{children:[`I/fish/past`,(0,i.jsx)(`br`,{}),`I/man/past`]}),(0,i.jsxs)(`td`,{children:[`he/fish/past`,(0,i.jsx)(`br`,{}),`she/fish/past`]}),(0,i.jsx)(`td`,{children:`you(sg)/him/future`}),(0,i.jsx)(`td`,{})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`-onon`}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{children:`she/children/past`}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{})]})]})]}),`
`,(0,i.jsx)(a.p,{children:`So the conclusion is:`}),`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[`Prefix:`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`’in- = 1st person subject, past`}),`
`,(0,i.jsx)(a.li,{children:`n- = 3rd person subject, past`}),`
`,(0,i.jsx)(a.li,{children:`r- = 2nd person subject, future`}),`
`,(0,i.jsx)(a.li,{children:`tar- = 3rd person subject, future`}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`Suffix:`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`-ain = inanimate object`}),`
`,(0,i.jsx)(a.li,{children:`-am = feminine object`}),`
`,(0,i.jsx)(a.li,{children:`-apa’ = 1st person object`}),`
`,(0,i.jsx)(a.li,{children:`-on = masculine object (including "fish")`}),`
`,(0,i.jsx)(a.li,{children:`-onon = plural object`}),`
`]}),`
`]}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`"ram" = r-am, so it's 2nd person subject, future, feminine object. So the sentence is "You will give the fish to Hatem".`}),`
`,(0,i.jsx)(a.p,{children:`"Mi’ ram con hwam Topa’" has highly similar words, but the correspondences are different. Doing the same mapping, and putting the words into their designated positions, we get ____ ____ give Topa’ the fish. And again, the blanks should be "You will". So the sentence is "You will give Topa’ the fish".`}),`
`,(0,i.jsx)(a.p,{children:`Finally, we have "Topa’ made Hatem a dress" and we are translating back. Use the same principle as L2 and read the English word at each position to get the following list of Wari’ words:`}),`
`,(0,i.jsx)(a.p,{children:`made, made, Topa’/Hatem/past, dress, dress, Hatem, Topa’`}),`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`"made" is "Quep" per "I made a bow".`}),`
`,(0,i.jsx)(a.li,{children:`Topa’/Hatem/past is 3rd person, feminine, past, so it's "nam".`}),`
`,(0,i.jsx)(a.li,{children:`"dress" is "con wom" per "'Orowao' will give me a dress". We have two words as desired.`}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`However we need an extra word that maps to "made". We only have a few cases where two words map to a single verb:`}),`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`pa’ mi’ = open (something for someone)`}),`
`,(0,i.jsx)(a.li,{children:`hoc mi’ = cook (something for someone)`}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`Especially compare "She cooked fish for her children" to "he cooked the fish". In the latter, "cook" is represented by "hoc"; in the former, we have "hoc mi’" both mapping to "cook". The difference is that the two sentences with "mi’" both have an indirect object, so "mi’" is the indirect object marker. We also have an indirect object here: "make something for someone", so the full sentence is "Quep mi’ nam con wom Hatem Topa’".`}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Computational`,`Syntax`,`Puzzle`],title:`NACLO 2023 - Problem L: Camp Not-So-Pleasanthill`,description:`NACLO 2023 - Problem L: Camp Not-So-Pleasanthill, a problem that involves Computational, Syntax, and Puzzle. Detailed solution and walkthrough.`,year:2023,prob:`L`};export{o as default};