import{u as a,j as e}from"./index-BEXjlMni.js";import{P as r,a as i}from"./_components-Rjxg5wzU.js";import"./_commonjsHelpers-Cpj98o6Y.js";const s={tags:["Data structures"],title:"Advent of Code 2020 - Day 6: Custom Customs",description:"Advent of Code 2020 - Day 6: Custom Customs, a problem that involves Data structures. Solution written in Python, with detailed walkthrough and proof.",year:2020,day:6};function o(n){const t={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.h1,{children:["Advent of Code 2020 - Day 6",e.jsx(t.span,{className:"subtitle",children:"Custom Customs"})]}),`
`,`
`,e.jsx(r,{frontMatter:s}),`
`,e.jsx(t.h2,{children:"Part 1"}),`
`,e.jsxs(t.p,{children:["Each group's answers is a list of sets. For part 1, if we want the questions ",e.jsx(t.em,{children:"anyone"}),` answered "yes", that's the union of the sets in each list. Conveniently we can simply concatenate all the strings in the group (removing newlines) and convert that to a set, which automatically removes duplicates.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-python",children:`sum(len(set(g.replace("\\n", ""))) for g in groups)
`})}),`
`,e.jsx(t.h2,{children:"Part 2"}),`
`,e.jsxs(t.p,{children:["Now we want the questions ",e.jsx(t.em,{children:"everyone"}),` answered "yes", which is the intersection of the sets in each list. Python's `,e.jsx(t.code,{children:"set.intersection"})," method can take multiple arguments, so we can unpack the list of sets with ",e.jsx(t.code,{children:"*"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-python",children:`sum(len(set.intersection(*map(set, g.split("\\n")))) for g in groups)
`})}),`
`,e.jsx(i,{frontMatter:s})]})}function d(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{d as default,s as frontMatter};
