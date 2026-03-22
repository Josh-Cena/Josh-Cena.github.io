import{u as s,j as e}from"./index-DwRXtLVn.js";import{P as o,a as i}from"./_components-C8VjCMbT.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ciqn2WuZ.js";const r={tags:["Puzzle"],title:"NACLO 2026 - Problem G: A Manam Family",description:"NACLO 2026 - Problem G: A Manam Family, a problem that involves Puzzle. Detailed solution and walkthrough.",year:2026,prob:"G"};function t(a){const n={br:"br",h1:"h1",li:"li",p:"p",span:"span",ul:"ul",...s(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["NACLO 2026 - Problem G",e.jsx(n.span,{className:"subtitle",children:"A Manam Family"})]}),e.jsx(o,{frontMatter:r}),`
`,`
`,e.jsx(n.p,{children:'Obviously "ngau" means "myself" because it appears nowhere except the diagonal, so (5) = (6) = ngau. Other than these, we have 3 other names: a’o, to’a, tari. Since all of these people are siblings, the only differentiating factors are age and gender (since parents are the same).'}),`
`,e.jsx(n.p,{children:"When a name depends on gender, it can take two factors into account: the gender of the person being referred to, and the gender of the speaker. If just the former, then we would expect to see the oldest and youngest person being referred to by the same name by everyone. Although we don't know how others refer to Lakia, no other column contains the same name, so this is impossible. Therefore, the name must depend on the speaker's gender as well, so the same oldest sibling would be referred to by different names by brothers and sisters."}),`
`,e.jsx(n.p,{children:"If the name depends on both the speaker and the referred person's gender, then there's the following hypothetical 4-way split:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Speaker male, refer to male"}),`
`,e.jsx(n.li,{children:"Speaker male, refer to female"}),`
`,e.jsx(n.li,{children:"Speaker female, refer to male"}),`
`,e.jsx(n.li,{children:"Speaker female, refer to female"}),`
`]}),`
`,e.jsx(n.p,{children:"However, this predicts that the same speaker only uses 2 names for all siblings. Tsedam uses 3 different names, so this is impossible. Therefore, the name must depend on age as well, giving the following 4-way split:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Older, same gender"}),`
`,e.jsx(n.li,{children:"Older, different gender"}),`
`,e.jsx(n.li,{children:"Younger, same gender"}),`
`,e.jsx(n.li,{children:"Younger, different gender"}),`
`]}),`
`,e.jsx(n.p,{children:"where either one option is entirely omitted or two options share the same name, because we only see 3 names throughout."}),`
`,e.jsx(n.p,{children:"If the name depends on age, then there must be an oldest and youngest person for which only 2 names are used; for others, 3 names are used. Unfortunately, with the sparse data, we can only see 2 names in each column. So holding the age difference constant doesn't work. On the other hand, we can hold the gender difference constant: just look at how two people refer to each other."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Mamboti and Tsedam refer to each other by "to’a" and "a’o"'}),`
`,e.jsx(n.li,{children:'Kakodo and Tsedam refer to each other by "to’a" and "tari"'}),`
`,e.jsx(n.li,{children:'Baliau and Tsedam refer to each other by "a’o" and "to’a"'}),`
`,e.jsx(n.li,{children:'Kakodo and Mamboti refer to each other by "tari" and "to’a"'}),`
`,e.jsx(n.li,{children:'Baliau and Kakodo refer to each other by "tari" and "to’a"'}),`
`,e.jsx(n.li,{children:'Aibobe and Kakodo refer to each other by "to’a" and "a’o"'}),`
`]}),`
`,e.jsx(n.p,{children:`Since we've never seen "a’o" and "tari" co-occur in a pair, these two must denote the same age difference but different gender difference; the other two pairs both denote the same gender difference but different age difference. Both of these pairs contain "to’a", so "to’a" must be used by all "older" siblings, while the other two names are used by "younger" siblings depending on the gender difference. In other words, we have the following structure:`}),`
`,e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("td",{}),e.jsx("th",{children:"Older"}),e.jsx("th",{children:"Younger"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Same gender"}),e.jsx("td",{rowSpan:2,children:"to’a"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Different gender"}),e.jsx("td",{})]})]}),`
`,e.jsx(n.p,{children:`The roles of "older" and "younger" are interchangeable, since we don't have information about who's the oldest or youngest here; we can only generate an ordering of their ages.`}),`
`,e.jsx(n.p,{children:'Knowing that "to’a" is used for older siblings, we look at which pairs use "to’a" to generate ordered pairs of their ages.'}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Mamboti/Kakodo/Aibobe < Tsedam < Baliau"}),`
`,e.jsx(n.li,{children:"Baliau/Aibobe < Lakia"}),`
`,e.jsx(n.li,{children:"Mamboti < Tsedam/Kakodo"}),`
`,e.jsx(n.li,{children:"Mamboti/Aibobe < Kakodo < Tsedam/Baliau"}),`
`,e.jsx(n.li,{children:"Tsedam/Kakodo < Baliau"}),`
`,e.jsx(n.li,{children:"Aibobe < Kakodo"}),`
`]}),`
`,e.jsx(n.p,{children:"The total order: Mamboti/Aibobe < Kakodo < Tsedam < Baliau < Lakia."}),`
`,e.jsx(n.p,{children:'And we can know the gender differences by looking at which pairs use "a’o" and "tari".'}),`
`,`
`,e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("td",{}),e.jsx("th",{children:"Tsedam"}),e.jsx("th",{children:"Lakia"}),e.jsx("th",{children:"Mamboti"}),e.jsx("th",{children:"Kakodo"}),e.jsx("th",{children:"Baliau"}),e.jsx("th",{children:"Aibobe"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Tsedam"}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{children:"a’o"}),e.jsx("td",{children:"tari"}),e.jsx("td",{}),e.jsx("td",{children:"tari"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Lakia"}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{children:"tari"}),e.jsx("td",{children:"a’o"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Mamboti"}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Kakodo"}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{children:"tari"}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{children:"a’o"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Baliau"}),e.jsx("td",{children:"a’o"}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{children:"tari"}),e.jsx("td",{}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Aibobe"}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{})]})]}),`
`,e.jsx(n.p,{children:`Assume "tari" means same-gender. Tsedam calls Kakodo and Aibobe "tari", so they are the same gender. Kakodo calls Mamboti "tari", so they are also the same gender. However, we only have 3 brothers and 3 sisters, so we can't have 4 people of the same gender. (And Tsedam calls Mamboti "a’o".) Therefore, "tari" must mean different-gender, and "a’o" means same-gender.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Gender 1: Tsedam, Mamboti, Baliau"}),`
`,e.jsx(n.li,{children:"Gender 2: Kakodo, Aibobe, Lakia"}),`
`]}),`
`,e.jsx(n.p,{children:"Now we can fill in the rest:"}),`
`,e.jsxs(n.p,{children:["(1) Tsedam→Lakia: older = to’a",e.jsx(n.br,{}),`
`,"(2) Lakia→Tsedam: younger, different = tari",e.jsx(n.br,{}),`
`,"(3) Lakia→Mamboti: younger, different = tari",e.jsx(n.br,{}),`
`,"(4) Lakia→Kakodo: younger, same = a’o",e.jsx(n.br,{}),`
`,"(7) Baliau→Lakia: older = to’a",e.jsx(n.br,{}),`
`,"(8) Baliau→Mamboti: younger, same = a’o",e.jsx(n.br,{}),`
`,"(9) Baliau→Aibobe: younger, different = tari",e.jsx(n.br,{}),`
`,"(10) Aibobe→Tsedam: older = to’a",e.jsx(n.br,{}),`
`,"(11) Aibobe→Lakia: older = to’a",e.jsx(n.br,{}),`
`,"(12) Aibobe→Baliau: older = to’a"]}),e.jsx(i,{frontMatter:r})]})}function x(a={}){const{wrapper:n}={...s(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(t,{...a})}):t(a)}export{x as default,r as frontMatter};
