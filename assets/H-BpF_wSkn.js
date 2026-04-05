import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import"./chroma-js-BVS6aaM2.js";import{i as n,r}from"./_components-DEaGFsln.js";var i=e();function a(e){let a={br:`br`,em:`em`,h1:`h1`,li:`li`,p:`p`,span:`span`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`NACLO 2023 - Problem H`,(0,i.jsx)(a.span,{className:`subtitle`,children:`My Grandmother and I`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,`
`,(0,i.jsx)(a.p,{children:`We have 11 pronouns shown here, including the table and H1:`}),`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`bili`}),`
`,(0,i.jsx)(a.li,{children:`birri`}),`
`,(0,i.jsx)(a.li,{children:`kili`}),`
`,(0,i.jsx)(a.li,{children:`kilmu`}),`
`,(0,i.jsx)(a.li,{children:`kirri`}),`
`,(0,i.jsx)(a.li,{children:`niinki`}),`
`,(0,i.jsx)(a.li,{children:`nyaanki`}),`
`,(0,i.jsx)(a.li,{children:`nyali`}),`
`,(0,i.jsx)(a.li,{children:`nyalmu`}),`
`,(0,i.jsx)(a.li,{children:`nyarri`}),`
`,(0,i.jsx)(a.li,{children:`nyiinki`}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`Except niinki, nyaanki, nyiinki, the other 8 form a clear prefix-suffix combination grid (technically, nyaanki = nya + anki as well, but we don't have "bianki" or "kianki", so this split is unattested, and we leave it out for now).`}),`
`,(0,i.jsxs)(`table`,{children:[(0,i.jsx)(`thead`,{children:(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{}),(0,i.jsx)(`th`,{children:`bi-`}),(0,i.jsx)(`th`,{children:`ki-`}),(0,i.jsx)(`th`,{children:`nya-`})]})}),(0,i.jsxs)(`tbody`,{children:[(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`-li`}),(0,i.jsx)(`td`,{children:`bili`}),(0,i.jsx)(`td`,{children:`kili`}),(0,i.jsx)(`td`,{children:`nyali`})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`-rri`}),(0,i.jsx)(`td`,{children:`birri`}),(0,i.jsx)(`td`,{children:`kirri`}),(0,i.jsx)(`td`,{children:`nyarri`})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`-lmu`}),(0,i.jsx)(`td`,{children:`(bilmu)`}),(0,i.jsx)(`td`,{children:`kilmu`}),(0,i.jsx)(`td`,{children:`nyalmu`})]})]})]}),`
`,(0,i.jsx)(a.p,{children:`Fill in the cases in which each one is used:`}),`
`,(0,i.jsxs)(`table`,{children:[(0,i.jsx)(`thead`,{children:(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{}),(0,i.jsx)(`th`,{children:`bi-`}),(0,i.jsx)(`th`,{children:`ki-`}),(0,i.jsx)(`th`,{children:`nya-`})]})}),(0,i.jsxs)(`tbody`,{children:[(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`-li`}),(0,i.jsxs)(`td`,{children:[(0,i.jsx)(a.p,{children:`he, his brother, and his sister`}),(0,i.jsx)(`br`,{}),(0,i.jsx)(a.p,{children:`she and her grandparents`})]}),(0,i.jsx)(`td`,{children:`you, your sister, and your grandson`}),(0,i.jsx)(`td`,{children:(0,i.jsxs)(a.p,{children:[`my grandparents and I`,(0,i.jsx)(`br`,{}),`
my sister, my grandson, and I`]})})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`-rri`}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{children:`you and your brother`}),(0,i.jsx)(`td`,{children:`my grandmother and I`})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`-lmu`}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{children:`you, your father, and your mother`}),(0,i.jsx)(`td`,{children:`my son, my mother, and I`})]})]})]}),`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`niinki: she and her great-granddaughter`}),`
`,(0,i.jsx)(a.li,{children:`nyaanki: my great-grandfather and I`}),`
`,(0,i.jsx)(a.li,{children:`nyiinki: you and your aunt`}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`Obviously, the prefix determines the person: bi- = 3rd person, ki- = 2nd person, nya- = 1st person. In this sense, niinki is also bi- prefix, nyaanki is also nya- prefix, and nyiinki is also ki- prefix. We may claim that niinki = bi-anki, nyaanki = nya-anki, and nyiinki = ki-anki.`}),`
`,(0,i.jsx)(a.p,{children:`The suffix is more involved. Obviously it isn't just about number, because -li and -lmu both have 3 people, while -rri and -anki both have 2 people, but this is a good starting point nonetheless, because we managed to group the suffixes into two groups. Squint a bit harder and see that all "grand-" relatives are in the -li/-rri rows, and the other relatives are "brother" and "sister", which are same-generation. On the other hand, in the -lmu/-anki rows, we have all "great-grand-" relatives and father/mother/aunt/son etc., which are 1 or 3 generations away. So the suffix is also determined by how many generations away the relatives are, with -li/-rri for 0 or 2 generations away, and -lmu/-anki for 1 or 3 generations away.`}),`
`,(0,i.jsx)(a.p,{children:`To recap:`}),`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[`Prefix:`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`bi-: 3rd person`}),`
`,(0,i.jsx)(a.li,{children:`ki-: 2nd person`}),`
`,(0,i.jsx)(a.li,{children:`nya-: 1st person`}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`Suffix:`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`-li: 3 people, 0 or 2 generations away ("same moiety" as per the solution)`}),`
`,(0,i.jsx)(a.li,{children:`-rri: 2 people, 0 or 2 generations away`}),`
`,(0,i.jsx)(a.li,{children:`-lmu: 3 people, 1 or 3 generations away ("different moiety")`}),`
`,(0,i.jsx)(a.li,{children:`-anki: 2 people, 1 or 3 generations away`}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`Special cases:`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`niinki = bi-anki`}),`
`,(0,i.jsx)(a.li,{children:`nyiinki = ki-anki`}),`
`]}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.p,{children:[`a. you and your parents: ki-lmu = 3`,(0,i.jsx)(a.br,{}),`
`,`b. my grandfather and I: nya-rri = 5`,(0,i.jsx)(a.br,{}),`
`,`c. you and your grandchildren: ki-li = 4`,(0,i.jsx)(a.br,{}),`
`,`d. she, her grandmother, and her brother: bi-li = 2`,(0,i.jsx)(a.br,{}),`
`,`e. he and his sister = bi-rri = 6`,(0,i.jsx)(a.br,{}),`
`,`f. my daughter, my mother, and I = nya-lmu = 1`]}),`
`,(0,i.jsxs)(a.p,{children:[`a. my father and I: nya-anki`,(0,i.jsx)(a.br,{}),`
`,`b. you and your granddaughter: ki-rri`,(0,i.jsx)(a.br,{}),`
`,`c. my uncle, my aunt, and I: nya-lmu`,(0,i.jsx)(a.br,{}),`
`,`d. he and his parents: bi-lmu`,(0,i.jsx)(a.br,{}),`
`,`e. she and her mother: bi-anki = niinki`,(0,i.jsx)(a.br,{}),`
`,`f. you and your cousin: ki-rri`]}),`
`,(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.em,{children:`birri`}),` is 3rd person, 2 people, same moiety. "She and her sister" fits all of these.`]}),`
`,(0,i.jsx)(a.p,{children:`"ngaku-li" and "ngaku-lmu" use the same suffixes, so they are still 3 people with same and different moieties respectively, just now that the group includes both "you" and "I", so the person is mixed. "You, I, and our grandfather" is same moiety, so it's ngaku-li, while "You, I, and our aunt" is different moiety, so it's ngaku-lmu. "You and I" where "you" is the speaker's sister would be 2 people in the same moiety, so it's ngaku-rri.`}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Semantics`],title:`NACLO 2023 - Problem H: My Grandmother and I`,description:`NACLO 2023 - Problem H: My Grandmother and I, a problem that involves Semantics. Detailed solution and walkthrough.`,year:2023,prob:`H`};export{o as default};