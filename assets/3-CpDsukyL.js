import{u as a,j as n}from"./index-L6ckUcGi.js";import{F as r,a as i}from"./_components-DB3Df8DK.js";const o={tags:["Data structures"],description:"Advent of Code 2022 - Day 3: Rucksack Reorganization, a problem that involves Data structures. Solution written in Haskell, with detailed walkthrough and proof.",year:2022,day:3,title:"Advent of Code 2022 - Day 3: Rucksack Reorganization"};function s(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...a(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsxs(t.h1,{children:["Advent of Code 2022 - Day 3",n.jsx(t.span,{className:"subtitle",children:"Rucksack Reorganization"})]}),`
`,`
`,n.jsx(r,{frontMatter:o}),`
`,n.jsx(t.h2,{children:"Part 1"}),`
`,n.jsx(t.p,{children:"I convert the two halves of each string into sets and find the intersection."}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-hs",children:`solve1 :: [Text] -> IO ()
solve1 input = do
  let compartments = map (\\line -> T.splitAt (T.length line \`div\` 2) line) input
  print $ sumMap (\\(a, b) -> commonPriority (textToSet a) (textToSet b)) compartments

textToSet :: Text -> Set Char
textToSet = Set.fromList . T.unpack

commonPriority :: Set Char -> Set Char -> Int
commonPriority a b = priority $ Set.elemAt 0 $ Set.intersection a b
`})}),`
`,n.jsx(t.h2,{children:"Part 2"}),`
`,n.jsxs(t.p,{children:["I made a little utility called ",n.jsx(t.code,{children:"chunksOf"})," to split the input into chunks of 3."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-hs",children:`chunksOf :: Int -> [a] -> [[a]]
chunksOf _ [] = []
chunksOf n xs = take n xs : chunksOf n (drop n xs)
`})}),`
`,n.jsx(t.p,{children:"Now I can find the common item in each chunk of 3 rucksacks the same way as in part 1."}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-hs",children:`solve2 :: [Text] -> IO ()
solve2 input = do
  let groups = map (map textToSet) $ chunksOf 3 input
  print $ sumMap (\\[a, b, c] -> commonPriority a $ Set.intersection b c) groups
`})}),`
`,n.jsx(i,{frontMatter:o})]})}function h(e={}){const{wrapper:t}={...a(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(s,{...e})}):s(e)}export{h as default,o as frontMatter};
