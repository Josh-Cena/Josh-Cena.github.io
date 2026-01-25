import{u as a,j as e}from"./index-VHEsq7sr.js";import{P as o,a as i}from"./_components-rH1xXMsL.js";import"./_commonjsHelpers-Cpj98o6Y.js";const t={tags:["Parsing","Recursion"],title:"Advent of Code 2022 - Day 13: Distress Signal",description:"Advent of Code 2022 - Day 13: Distress Signal, a problem that involves Parsing and Recursion. Solution written in Haskell, with detailed walkthrough and proof.",year:2022,day:13};function r(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2022 - Day 13",e.jsx(n.span,{className:"subtitle",children:"Distress Signal"})]}),`
`,`
`,e.jsx(o,{frontMatter:t}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:"I first define the data type for the packets:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`data TreeNode = Leaf Int | Branch [TreeNode] deriving (Show, Eq)
`})}),`
`,e.jsxs(n.p,{children:["And, very importantly, the ",e.jsx(n.code,{children:"Ord"})," instance:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`instance Ord TreeNode where
  compare (Leaf a) (Leaf b) = compare a b
  compare (Branch []) (Branch []) = EQ
  compare (Branch []) (Branch _) = LT
  compare (Branch _) (Branch []) = GT
  compare (Branch (a : as)) (Branch (b : bs)) = case compare a b of
    EQ -> compare (Branch as) (Branch bs)
    other -> other
  compare la@(Leaf _) bb@(Branch _) = compare (Branch [la]) bb
  compare bb@(Branch _) la@(Leaf _) = compare bb (Branch [la])
`})}),`
`,e.jsxs(n.p,{children:["(This shows how convenient Haskell type classes are: once we have ",e.jsx(n.code,{children:"compare"}),", the type is automatically endowed with all the other comparison operators.)"]}),`
`,e.jsxs(n.p,{children:["This input reminds me of ",e.jsx(n.a,{href:"/notes/aoc/2021/18/",children:"2021 day 18"}),", where we also had to parse a nested list structure. The difference is that this time I am using Haskell, and I do want strong types, so no ",e.jsx(n.code,{children:"Data.Aeson"}),"; manual parsing it is."]}),`
`,e.jsx(n.p,{children:"I do parsing the old school way: tokenize, then recursively parse. Tokens are just brackets and numbers (commas and whitespace are ignored):"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`data Token = Number Int | OpenBracket | CloseBracket deriving (Show)

tokenize :: String -> [Token]
tokenize [] = []
tokenize input@(c : rest) = case c of
  ',' -> tokenize rest
  '[' -> OpenBracket : tokenize rest
  ']' -> CloseBracket : tokenize rest
  _ -> Number (read token) : tokenize rest'
    where
      (token, rest') = span (\`notElem\` "[],") input
`})}),`
`,e.jsxs(n.p,{children:["Now I can parse the tokens into our ",e.jsx(n.code,{children:"TreeNode"})," structure, using the following BNF:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plain",children:`List :: OpenBracket ListElements CloseBracket
ListElements :: empty | ListElement ListElements
ListElement :: List | Number
`})}),`
`,e.jsxs(n.p,{children:["It's all standard recursive descent parsing, so not much to say. Each time, I consume the tokens I need, and return the rest for the next step. For ",e.jsx(n.code,{children:"parseListElements"}),", I keep consuming ",e.jsx(n.code,{children:"ListElement"}),"s until I can't anymore (i.e., I hit a ",e.jsx(n.code,{children:"CloseBracket"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`parseList :: [Token] -> Maybe (TreeNode, [Token])
parseList (OpenBracket : next) = Just (Branch elements, rest)
  where
    (elements, CloseBracket : rest) = parseListElements next
    parseListElements tokens = case parseListElement tokens of
      Nothing -> ([], tokens)
      Just (firstElem, next) ->
        let (restElems, restTokens) = parseListElements next
         in (firstElem : restElems, restTokens)
    parseListElement (Number n : rest) = Just (Leaf n, rest)
    parseListElement tokens = parseList tokens
parseList _ = Nothing
`})}),`
`,e.jsx(n.p,{children:"Now when parsing the whole input, I just unwrap and get the constructed tree. Technically, I should check that the parse was successful and that there are no remaining tokens, but I just assume that the input is well-formed and my parser is correct."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`parseInput :: Text -> TreeNode
parseInput = fst . fromJust . parseList . tokenize . T.unpack
`})}),`
`,e.jsxs(n.p,{children:["With the ",e.jsx(n.code,{children:"Ord"})," and the parser in place, the actual solution is straightforward."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`let rightOrder = sumMap (+ 1) $ findIndices (\\[a, b] -> a < b) pairs
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsx(n.p,{children:"I guess the more efficient way is to implement my own sorting algorithm that tracks the indices of the elements, but I just sort the packets and find the indices of the divider packets."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`let d1 = Branch [Branch [Leaf 2]]
let d2 = Branch [Branch [Leaf 6]]
let sorted = sort $ d1 : d2 : concat pairs
let indices = map (+ 1) $ findIndices (\\a -> a == d1 || a == d2) sorted
`})}),`
`,e.jsx(i,{frontMatter:t})]})}function d(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{d as default,t as frontMatter};
