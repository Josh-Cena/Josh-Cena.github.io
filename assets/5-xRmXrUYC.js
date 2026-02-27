import{u as r,j as e}from"./index-TXYOrs-s.js";import{P as c,a}from"./_components-D-appPx2.js";import"./_commonjsHelpers-Cpj98o6Y.js";const n={tags:["Data structures"],title:"Advent of Code 2022 - Day 5: Supply Stacks",description:"Advent of Code 2022 - Day 5: Supply Stacks, a problem that involves Data structures. Solution written in Haskell, with detailed walkthrough and proof.",year:2022,day:5};function s(o){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.h1,{children:["Advent of Code 2022 - Day 5",e.jsx(t.span,{className:"subtitle",children:"Supply Stacks"})]}),`
`,`
`,e.jsx(c,{frontMatter:n}),`
`,e.jsx(t.h2,{children:"Part 1"}),`
`,e.jsxs(t.p,{children:["I parse the input to a ",e.jsx(t.code,{children:"([[Char]], [(Int, Int, Int)])"}),", which is the list of stacks and the list of moves. Since Haskell lists are singly linked lists, pushing and popping from the front is efficient."]}),`
`,e.jsx(t.p,{children:"Each time a move is made, the stacks are reconstructed as five parts:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-plain",children:`...before..  col1  ..middle..  col2  ..after..
`})}),`
`,e.jsxs(t.p,{children:["Where ",e.jsx(t.code,{children:"col1"})," and ",e.jsx(t.code,{children:"col2"})," are modified while the other parts stay the same. ",e.jsx(t.code,{children:"col1"})," and ",e.jsx(t.code,{children:"col2"})," are not necessarily ",e.jsx(t.code,{children:"from"})," and ",e.jsx(t.code,{children:"to"})," though; that depends on which one is on the left. The two columns are modified according to the move, and then everything is concatenated back together. Instead of actually popping and pushing one at a time, I ",e.jsx(t.code,{children:"take"})," the required number of crates and prepend them to the other column reversed. The time of ",e.jsx(t.code,{children:"++"})," is proportional to the length of the left list, so it's at least as efficient as popping and pushing one at a time."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-hs",children:`makeMove :: [[Char]] -> (Int, Int, Int) -> [[Char]]
makeMove columns (cnt, from, to) = before ++ col1' : middle ++ col2' : after
  where
    (before, col1 : rest) = splitAt (min from to - 1) columns
    (middle, col2 : after) = splitAt (abs (from - to) - 1) rest
    col1' = if from < to then drop cnt col1 else reverse (take cnt col2) ++ col1
    col2' = if from > to then drop cnt col2 else reverse (take cnt col1) ++ col2
`})}),`
`,e.jsx(t.h2,{children:"Part 2"}),`
`,e.jsxs(t.p,{children:["Turns out that ",e.jsx(t.code,{children:"makeMove"})," is almost exactly the same, except that the crates are not reversed when being prepended to the other column. I pass a ",e.jsx(t.code,{children:"process"})," function specifying how to handle the crates being moved."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-hs",children:`makeMove :: ([Char] -> [Char]) -> [[Char]] -> (Int, Int, Int) -> [[Char]]
makeMove process columns (cnt, from, to) = before ++ col1' : middle ++ col2' : after
  where
    (before, col1 : rest) = splitAt (min from to - 1) columns
    (middle, col2 : after) = splitAt (abs (from - to) - 1) rest
    col1' = if from < to then drop cnt col1 else process (take cnt col2) ++ col1
    col2' = if from > to then drop cnt col2 else process (take cnt col1) ++ col2
`})}),`
`,e.jsx(a,{frontMatter:n})]})}function h(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{h as default,n as frontMatter};
