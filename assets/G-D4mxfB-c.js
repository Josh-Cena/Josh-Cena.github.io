import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import"./chroma-js-C4qMxh81.js";import{i as n,r}from"./_components-BMUVh2lY.js";var i=e(),a={tags:[`Puzzle`],title:`NACLO 2026 - Problem G: A Manam Family`,description:`NACLO 2026 - Problem G: A Manam Family, a problem that involves Puzzle. Detailed solution and walkthrough.`,year:2026,prob:`G`};function o(e){let o={br:`br`,h1:`h1`,li:`li`,p:`p`,span:`span`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`NACLO 2026 - Problem G`,(0,i.jsx)(o.span,{className:`subtitle`,children:`A Manam Family`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,`
`,(0,i.jsx)(o.p,{children:`Obviously "ngau" means "myself" because it appears nowhere except the diagonal, so (5) = (6) = ngau. Other than these, we have 3 other names: a’o, to’a, tari. Since all of these people are siblings, the only differentiating factors are age and gender (since parents are the same).`}),`
`,(0,i.jsx)(o.p,{children:`When a name depends on gender, it can take two factors into account: the gender of the person being referred to, and the gender of the speaker. If just the former, then we would expect to see the oldest and youngest person being referred to by the same name by everyone. Although we don't know how others refer to Lakia, no other column contains the same name, so this is impossible. Therefore, the name must depend on the speaker's gender as well, so the same oldest sibling would be referred to by different names by brothers and sisters.`}),`
`,(0,i.jsx)(o.p,{children:`If the name depends on both the speaker and the referred person's gender, then there's the following hypothetical 4-way split:`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`Speaker male, refer to male`}),`
`,(0,i.jsx)(o.li,{children:`Speaker male, refer to female`}),`
`,(0,i.jsx)(o.li,{children:`Speaker female, refer to male`}),`
`,(0,i.jsx)(o.li,{children:`Speaker female, refer to female`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`However, this predicts that the same speaker only uses 2 names for all siblings. Tsedam uses 3 different names, so this is impossible. Therefore, the name must depend on age as well, giving the following 4-way split:`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`Older, same gender`}),`
`,(0,i.jsx)(o.li,{children:`Older, different gender`}),`
`,(0,i.jsx)(o.li,{children:`Younger, same gender`}),`
`,(0,i.jsx)(o.li,{children:`Younger, different gender`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`where either one option is entirely omitted or two options share the same name, because we only see 3 names throughout.`}),`
`,(0,i.jsx)(o.p,{children:`If the name depends on age, then there must be an oldest and youngest person for which only 2 names are used; for others, 3 names are used. Unfortunately, with the sparse data, we can only see 2 names in each column. So holding the age difference constant doesn't work. On the other hand, we can hold the gender difference constant: just look at how two people refer to each other.`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`Mamboti and Tsedam refer to each other by "to’a" and "a’o"`}),`
`,(0,i.jsx)(o.li,{children:`Kakodo and Tsedam refer to each other by "to’a" and "tari"`}),`
`,(0,i.jsx)(o.li,{children:`Baliau and Tsedam refer to each other by "a’o" and "to’a"`}),`
`,(0,i.jsx)(o.li,{children:`Kakodo and Mamboti refer to each other by "tari" and "to’a"`}),`
`,(0,i.jsx)(o.li,{children:`Baliau and Kakodo refer to each other by "tari" and "to’a"`}),`
`,(0,i.jsx)(o.li,{children:`Aibobe and Kakodo refer to each other by "to’a" and "a’o"`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`Since we've never seen "a’o" and "tari" co-occur in a pair, these two must denote the same age difference but different gender difference; the other two pairs both denote the same gender difference but different age difference. Both of these pairs contain "to’a", so "to’a" must be used by all "older" siblings, while the other two names are used by "younger" siblings depending on the gender difference. In other words, we have the following structure:`}),`
`,(0,i.jsxs)(`table`,{children:[(0,i.jsx)(`thead`,{children:(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{}),(0,i.jsx)(`th`,{children:`Older`}),(0,i.jsx)(`th`,{children:`Younger`})]})}),(0,i.jsxs)(`tbody`,{children:[(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`Same gender`}),(0,i.jsx)(`td`,{rowSpan:2,children:`to’a`}),(0,i.jsx)(`td`,{})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`Different gender`}),(0,i.jsx)(`td`,{})]})]})]}),`
`,(0,i.jsx)(o.p,{children:`The roles of "older" and "younger" are interchangeable, since we don't have information about who's the oldest or youngest here; we can only generate an ordering of their ages.`}),`
`,(0,i.jsx)(o.p,{children:`Knowing that "to’a" is used for older siblings, we look at which pairs use "to’a" to generate ordered pairs of their ages.`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`Mamboti/Kakodo/Aibobe < Tsedam < Baliau`}),`
`,(0,i.jsx)(o.li,{children:`Baliau/Aibobe < Lakia`}),`
`,(0,i.jsx)(o.li,{children:`Mamboti < Tsedam/Kakodo`}),`
`,(0,i.jsx)(o.li,{children:`Mamboti/Aibobe < Kakodo < Tsedam/Baliau`}),`
`,(0,i.jsx)(o.li,{children:`Tsedam/Kakodo < Baliau`}),`
`,(0,i.jsx)(o.li,{children:`Aibobe < Kakodo`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`The total order: Mamboti/Aibobe < Kakodo < Tsedam < Baliau < Lakia.`}),`
`,(0,i.jsx)(o.p,{children:`And we can know the gender differences by looking at which pairs use "a’o" and "tari".`}),`
`,`
`,(0,i.jsxs)(`table`,{children:[(0,i.jsx)(`thead`,{children:(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{}),(0,i.jsx)(`th`,{children:`Tsedam`}),(0,i.jsx)(`th`,{children:`Lakia`}),(0,i.jsx)(`th`,{children:`Mamboti`}),(0,i.jsx)(`th`,{children:`Kakodo`}),(0,i.jsx)(`th`,{children:`Baliau`}),(0,i.jsx)(`th`,{children:`Aibobe`})]})}),(0,i.jsxs)(`tbody`,{children:[(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`Tsedam`}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{children:`a’o`}),(0,i.jsx)(`td`,{children:`tari`}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{children:`tari`})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`Lakia`}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{children:`tari`}),(0,i.jsx)(`td`,{children:`a’o`})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`Mamboti`}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`Kakodo`}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{children:`tari`}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{children:`a’o`})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`Baliau`}),(0,i.jsx)(`td`,{children:`a’o`}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{children:`tari`}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{})]}),(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{children:`Aibobe`}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{}),(0,i.jsx)(`td`,{})]})]})]}),`
`,(0,i.jsx)(o.p,{children:`Assume "tari" means same-gender. Tsedam calls Kakodo and Aibobe "tari", so they are the same gender. Kakodo calls Mamboti "tari", so they are also the same gender. However, we only have 3 brothers and 3 sisters, so we can't have 4 people of the same gender. (And Tsedam calls Mamboti "a’o".) Therefore, "tari" must mean different-gender, and "a’o" means same-gender.`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`Gender 1: Tsedam, Mamboti, Baliau`}),`
`,(0,i.jsx)(o.li,{children:`Gender 2: Kakodo, Aibobe, Lakia`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`Now we can fill in the rest:`}),`
`,(0,i.jsxs)(o.p,{children:[`(1) Tsedam→Lakia: older = to’a`,(0,i.jsx)(o.br,{}),`
`,`(2) Lakia→Tsedam: younger, different = tari`,(0,i.jsx)(o.br,{}),`
`,`(3) Lakia→Mamboti: younger, different = tari`,(0,i.jsx)(o.br,{}),`
`,`(4) Lakia→Kakodo: younger, same = a’o`,(0,i.jsx)(o.br,{}),`
`,`(7) Baliau→Lakia: older = to’a`,(0,i.jsx)(o.br,{}),`
`,`(8) Baliau→Mamboti: younger, same = a’o`,(0,i.jsx)(o.br,{}),`
`,`(9) Baliau→Aibobe: younger, different = tari`,(0,i.jsx)(o.br,{}),`
`,`(10) Aibobe→Tsedam: older = to’a`,(0,i.jsx)(o.br,{}),`
`,`(11) Aibobe→Lakia: older = to’a`,(0,i.jsx)(o.br,{}),`
`,`(12) Aibobe→Baliau: older = to’a`]}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{s as default,a as frontMatter};