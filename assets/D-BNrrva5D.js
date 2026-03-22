import{u as a,j as r}from"./index-DyI1T4xN.js";import{P as t,a as l}from"./_components-YM4q2yub.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ciqn2WuZ.js";const n={tags:["Phrase translation","Semantics"],title:"NACLO 2026 - Problem D: Witsuwit’en Word Salad",description:"NACLO 2026 - Problem D: Witsuwit’en Word Salad, a problem that involves Phrase translation and Semantics. Detailed solution and walkthrough.",year:2026,prob:"D"};function i(s){const e={br:"br",h1:"h1",p:"p",span:"span",...a(),...s.components};return r.jsxs(r.Fragment,{children:[r.jsxs(e.h1,{children:["NACLO 2026 - Problem D",r.jsx(e.span,{className:"subtitle",children:"Witsuwit’en Word Salad"})]}),r.jsx(t,{frontMatter:n}),`
`,`
`,r.jsx(e.p,{children:"Phrases here are either 2 or 3 words long. The first word almost never repeats, so it's likely the thing being eaten. The second word only has the following options: yini’alh, yi’alh, nildïlh, hildïlh. It appears that yini’alh = yi’alh + -ni-, and nildïlh = hildïlh + -ni- (with some other change that deletes the hi-). Therefore, arrange them into a grid and see which foods co-occur with each verb."}),`
`,`
`,r.jsxs("table",{children:[r.jsxs("tr",{children:[r.jsx("td",{}),r.jsx("th",{children:"yi’alh"}),r.jsx("th",{children:"hildïlh"})]}),r.jsxs("tr",{children:[r.jsx("th",{children:"∅"}),r.jsxs("td",{children:["dried fish",r.jsx("br",{}),"(thick) soup",r.jsx("br",{}),"moose meat",r.jsx("br",{}),"slice of bread",r.jsx("br",{}),"carrot"]}),r.jsxs("td",{children:["sugar",r.jsx("br",{}),"leaves (e.g., kale)",r.jsx("br",{}),"(ground) pepper",r.jsx("br",{}),"cornflakes",r.jsx("br",{}),"strips of bacon"]})]}),r.jsxs("tr",{children:[r.jsx("th",{children:"-ni-"}),r.jsxs("td",{children:["potato",r.jsx("br",{}),"turnip",r.jsx("br",{}),"blueberry",r.jsx("br",{}),"head of lettuce"]}),r.jsxs("td",{children:["(hard-boiled) eggs",r.jsx("br",{}),"onions"]})]})]}),`
`,r.jsx(e.p,{children:'Everything in the -ni- row is spherical, while nothing in the ∅ row is. So the -ni- infix means "eating something spherical". "yi’alh" occurs with singular stuff (including "a single blueberry"), while hildïlh appears with plural stuff (sugar and pepper are measured in "grains" and one obviously eats many grains).'}),`
`,r.jsx(e.p,{children:"So:"}),`
`,r.jsxs(e.p,{children:["1. mashed potatoes (singular, not spherical - it's mashed!) = yi’alh",r.jsx(e.br,{}),`
`,"2. french fries (plural, not spherical) = hildïlh",r.jsx(e.br,{}),`
`,"3. potato chip (singular, not spherical) = yi’alh",r.jsx(e.br,{}),`
`,"4. stalks of rhubarb (plural, not spherical) = hildïlh",r.jsx(e.br,{}),`
`,"5. sausages (plural, not spherical) = hildïlh",r.jsx(e.br,{}),`
`,"6. cracker (singular, not spherical) = yi’alh",r.jsx(e.br,{}),`
`,"7. cherries (plural, spherical) = nildïlh",r.jsx(e.br,{}),`
`,"8. hazelnut (singular, spherical) = yini’alh",r.jsx(e.br,{}),`
`,"9. cranberries (plural, spherical) = nildïlh",r.jsx(e.br,{}),`
`,"10. tomato (singular, spherical) = yini’alh"]}),r.jsx(l,{frontMatter:n})]})}function p(s={}){const{wrapper:e}={...a(),...s.components};return e?r.jsx(e,{...s,children:r.jsx(i,{...s})}):i(s)}export{p as default,n as frontMatter};
