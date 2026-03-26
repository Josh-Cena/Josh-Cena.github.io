import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import{n,t as r}from"./_components-Bk2TMGF4.js";var i=e(),a={tags:[`Data structures`],title:`Advent of Code 2022 - Day 5: Supply Stacks`,description:`Advent of Code 2022 - Day 5: Supply Stacks, a problem that involves Data structures. Solution written in Haskell, with detailed walkthrough and proof.`,year:2022,day:5};function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2022 - Day 5`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Supply Stacks`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(o.p,{children:[`I parse the input to a `,(0,i.jsx)(o.code,{children:`([[Char]], [(Int, Int, Int)])`}),`, which is the list of stacks and the list of moves. Since Haskell lists are singly linked lists, pushing and popping from the front is efficient.`]}),`
`,(0,i.jsx)(o.p,{children:`Each time a move is made, the stacks are reconstructed as five parts:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`...before..  col1  ..middle..  col2  ..after..
`})}),`
`,(0,i.jsxs)(o.p,{children:[`Where `,(0,i.jsx)(o.code,{children:`col1`}),` and `,(0,i.jsx)(o.code,{children:`col2`}),` are modified while the other parts stay the same. `,(0,i.jsx)(o.code,{children:`col1`}),` and `,(0,i.jsx)(o.code,{children:`col2`}),` are not necessarily `,(0,i.jsx)(o.code,{children:`from`}),` and `,(0,i.jsx)(o.code,{children:`to`}),` though; that depends on which one is on the left. The two columns are modified according to the move, and then everything is concatenated back together. Instead of actually popping and pushing one at a time, I `,(0,i.jsx)(o.code,{children:`take`}),` the required number of crates and prepend them to the other column reversed. The time of `,(0,i.jsx)(o.code,{children:`++`}),` is proportional to the length of the left list, so it's at least as efficient as popping and pushing one at a time.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`makeMove :: [[Char]] -> (Int, Int, Int) -> [[Char]]
makeMove columns (cnt, from, to) = before ++ col1' : middle ++ col2' : after
  where
    (before, col1 : rest) = splitAt (min from to - 1) columns
    (middle, col2 : after) = splitAt (abs (from - to) - 1) rest
    col1' = if from < to then drop cnt col1 else reverse (take cnt col2) ++ col1
    col2' = if from > to then drop cnt col2 else reverse (take cnt col1) ++ col2
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`Turns out that `,(0,i.jsx)(o.code,{children:`makeMove`}),` is almost exactly the same, except that the crates are not reversed when being prepended to the other column. I pass a `,(0,i.jsx)(o.code,{children:`process`}),` function specifying how to handle the crates being moved.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`makeMove :: ([Char] -> [Char]) -> [[Char]] -> (Int, Int, Int) -> [[Char]]
makeMove process columns (cnt, from, to) = before ++ col1' : middle ++ col2' : after
  where
    (before, col1 : rest) = splitAt (min from to - 1) columns
    (middle, col2 : after) = splitAt (abs (from - to) - 1) rest
    col1' = if from < to then drop cnt col1 else process (take cnt col2) ++ col1
    col2' = if from > to then drop cnt col2 else process (take cnt col1) ++ col2
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};