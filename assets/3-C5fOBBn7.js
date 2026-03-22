import{u as a,j as t}from"./index-DwRXtLVn.js";import{P as r,a as i}from"./_components-C1hTrXOn.js";import"./_commonjsHelpers-Cpj98o6Y.js";const o={tags:["Data structures"],title:"Advent of Code 2022 - Day 3: Rucksack Reorganization",description:"Advent of Code 2022 - Day 3: Rucksack Reorganization, a problem that involves Data structures. Solution written in Haskell, with detailed walkthrough and proof.",year:2022,day:3};function s(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...a(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsxs(n.h1,{children:["Advent of Code 2022 - Day 3",t.jsx(n.span,{className:"subtitle",children:"Rucksack Reorganization"})]}),t.jsx(r,{frontMatter:o}),`
`,t.jsx(n.h2,{children:"Part 1"}),`
`,t.jsx(n.p,{children:"I convert the two halves of each string into sets and find the intersection."}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-hs",children:`solve1 :: [Text] -> IO ()
solve1 input = do
  let compartments = map (\\line -> T.splitAt (T.length line \`div\` 2) line) input
  print $ sumMap (\\(a, b) -> commonPriority (textToSet a) (textToSet b)) compartments

textToSet :: Text -> Set Char
textToSet = Set.fromList . T.unpack

commonPriority :: Set Char -> Set Char -> Int
commonPriority a b = priority $ Set.elemAt 0 $ Set.intersection a b
`})}),`
`,t.jsx(n.h2,{children:"Part 2"}),`
`,t.jsxs(n.p,{children:["I made a little utility called ",t.jsx(n.code,{children:"chunksOf"})," to split the input into chunks of 3."]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-hs",children:`chunksOf :: Int -> [a] -> [[a]]
chunksOf _ [] = []
chunksOf n xs = take n xs : chunksOf n (drop n xs)
`})}),`
`,t.jsx(n.p,{children:"Now I can find the common item in each chunk of 3 rucksacks the same way as in part 1."}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-hs",children:`solve2 :: [Text] -> IO ()
solve2 input = do
  let groups = map (map textToSet) $ chunksOf 3 input
  print $ sumMap (\\[a, b, c] -> commonPriority a $ Set.intersection b c) groups
`})}),t.jsx(i,{frontMatter:o})]})}function d(e={}){const{wrapper:n}={...a(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(s,{...e})}):s(e)}export{d as default,o as frontMatter};
