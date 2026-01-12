import{u as a,j as e}from"./index-DEJgW3cN.js";import{F as o,a as s}from"./_components-C_Mh6GSJ.js";const r={description:"Advent of Code 2022 - Day 6: Tuning Trouble. Written in Haskell.",tags:["Data structures"],year:2022,day:6,title:"AoC 2022 D6: Tuning Trouble"};function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"AoC 2022 D6: Tuning Trouble"}),`
`,`
`,e.jsx(o,{frontMatter:r}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:["TBH this feels more like a day 1 problem. I just need to iterate through the string, taking substrings of length 4. I use a ",e.jsx(n.code,{children:"Set"})," to deduplicate the characters, and if we still have 4 characters, then they are all unique."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`roll :: Int -> Int -> Text -> Int
roll index input
  | (length . Set.fromList . T.unpack) prefix == 4 = index + 4
  | otherwise = roll (index + 1) $ T.tail input
  where
    prefix = T.take 4 input
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["Same as part 1, but with length 14 instead of 4. I parameterize ",e.jsx(n.code,{children:"roll"})," over the length of the marker."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`roll :: Int -> Int -> Text -> Int
roll len index input
  | (length . S.fromList . T.unpack) prefix == len = index + len
  | otherwise = roll len (index + 1) $ T.tail input
  where
    prefix = T.take len input
`})}),`
`,e.jsx(s,{frontMatter:r})]})}function c(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{c as default,r as frontMatter};
