import{t as e}from"./jsx-runtime-DAs1UGHr.js";import{n as t}from"./lib-T-nEWGuF.js";import{n,t as r}from"./_components-DgNpooeQ.js";var i=e(),a={tags:[`Data structures`],title:`Advent of Code 2022 - Day 6: Tuning Trouble`,description:`Advent of Code 2022 - Day 6: Tuning Trouble, a problem that involves Data structures. Solution written in Haskell, with detailed walkthrough and proof.`,year:2022,day:6};function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2022 - Day 6`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Tuning Trouble`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(o.p,{children:[`TBH this feels more like a day 1 problem. I just need to iterate through the string, taking substrings of length 4. I use a `,(0,i.jsx)(o.code,{children:`Set`}),` to deduplicate the characters, and if we still have 4 characters, then they are all unique.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`roll :: Int -> Int -> Text -> Int
roll index input
  | (length . Set.fromList . T.unpack) prefix == 4 = index + 4
  | otherwise = roll (index + 1) $ T.tail input
  where
    prefix = T.take 4 input
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`Same as part 1, but with length 14 instead of 4. I parameterize `,(0,i.jsx)(o.code,{children:`roll`}),` over the length of the marker.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`roll :: Int -> Int -> Text -> Int
roll len index input
  | (length . S.fromList . T.unpack) prefix == len = index + len
  | otherwise = roll len (index + 1) $ T.tail input
  where
    prefix = T.take len input
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};