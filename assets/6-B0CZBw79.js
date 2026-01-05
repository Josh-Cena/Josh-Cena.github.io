import{u as r,j as e}from"./index-MRNusryy.js";import{F as a,a as i}from"./_components-BFU_Acax.js";const s={description:"Advent of Code 2020 - Day 6: Custom Customs. Written in Python.",tags:["Data structures"],year:2020,day:6,title:"AoC 2020 D6: Custom Customs"};function o(n){const t={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{children:"AoC 2020 D6: Custom Customs"}),`
`,`
`,e.jsx(a,{frontMatter:s}),`
`,e.jsx(t.h2,{children:"Part 1"}),`
`,e.jsxs(t.p,{children:["Each group's answers is a list of sets. For part 1, if we want the questions ",e.jsx(t.em,{children:"anyone"}),` answered "yes", that's the union of the sets in each list. Conveniently we can simply concatenate all the strings in the group (removing newlines) and convert that to a set, which automatically removes duplicates.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-python",children:`sum(len(set(g.replace("\\n", ""))) for g in groups)
`})}),`
`,e.jsx(t.h2,{children:"Part 2"}),`
`,e.jsxs(t.p,{children:["Now we want the questions ",e.jsx(t.em,{children:"everyone"}),` answered "yes", which is the intersection of the sets in each list. Python's `,e.jsx(t.code,{children:"set.intersection"})," method can take multiple arguments, so we can unpack the list of sets with ",e.jsx(t.code,{children:"*"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-python",children:`sum(len(set.intersection(*map(set, g.split("\\n")))) for g in groups)
`})}),`
`,e.jsx(i,{frontMatter:s})]})}function l(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{l as default,s as frontMatter};
