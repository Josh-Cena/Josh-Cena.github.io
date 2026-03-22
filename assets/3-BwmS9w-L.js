import{t as e}from"./jsx-runtime-xty2or4m.js";import{n as t}from"./lib-zKnO7aGa.js";import{n,t as r}from"./_components-vrS0ov66.js";var i=e(),a={tags:[`Data structures`],title:`Advent of Code 2022 - Day 3: Rucksack Reorganization`,description:`Advent of Code 2022 - Day 3: Rucksack Reorganization, a problem that involves Data structures. Solution written in Haskell, with detailed walkthrough and proof.`,year:2022,day:3};function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2022 - Day 3`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Rucksack Reorganization`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsx)(o.p,{children:`I convert the two halves of each string into sets and find the intersection.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`solve1 :: [Text] -> IO ()
solve1 input = do
  let compartments = map (\\line -> T.splitAt (T.length line \`div\` 2) line) input
  print $ sumMap (\\(a, b) -> commonPriority (textToSet a) (textToSet b)) compartments

textToSet :: Text -> Set Char
textToSet = Set.fromList . T.unpack

commonPriority :: Set Char -> Set Char -> Int
commonPriority a b = priority $ Set.elemAt 0 $ Set.intersection a b
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`I made a little utility called `,(0,i.jsx)(o.code,{children:`chunksOf`}),` to split the input into chunks of 3.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`chunksOf :: Int -> [a] -> [[a]]
chunksOf _ [] = []
chunksOf n xs = take n xs : chunksOf n (drop n xs)
`})}),`
`,(0,i.jsx)(o.p,{children:`Now I can find the common item in each chunk of 3 rucksacks the same way as in part 1.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`solve2 :: [Text] -> IO ()
solve2 input = do
  let groups = map (map textToSet) $ chunksOf 3 input
  print $ sumMap (\\[a, b, c] -> commonPriority a $ Set.intersection b c) groups
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};