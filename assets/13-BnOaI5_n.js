import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import{n,t as r}from"./_components-BiUCgGl-.js";var i=e(),a={tags:[`Parsing`,`Recursion`],title:`Advent of Code 2022 - Day 13: Distress Signal`,description:`Advent of Code 2022 - Day 13: Distress Signal, a problem that involves Parsing and Recursion. Solution written in Haskell, with detailed walkthrough and proof.`,year:2022,day:13};function o(e){let o={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2022 - Day 13`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Distress Signal`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsx)(o.p,{children:`I first define the data type for the packets:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`data TreeNode = Leaf Int | Branch [TreeNode] deriving (Show, Eq)
`})}),`
`,(0,i.jsxs)(o.p,{children:[`And, very importantly, the `,(0,i.jsx)(o.code,{children:`Ord`}),` instance:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`instance Ord TreeNode where
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
`,(0,i.jsxs)(o.p,{children:[`(This shows how convenient Haskell type classes are: once we have `,(0,i.jsx)(o.code,{children:`compare`}),`, the type is automatically endowed with all the other comparison operators.)`]}),`
`,(0,i.jsxs)(o.p,{children:[`This input reminds me of `,(0,i.jsx)(o.a,{href:`/notes/aoc/2021/18/`,children:`2021 day 18`}),`, where we also had to parse a nested list structure. The difference is that this time I am using Haskell, and I do want strong types, so no `,(0,i.jsx)(o.code,{children:`Data.Aeson`}),`; manual parsing it is.`]}),`
`,(0,i.jsx)(o.p,{children:`I do parsing the old school way: tokenize, then recursively parse. Tokens are just brackets and numbers (commas and whitespace are ignored):`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`data Token = Number Int | OpenBracket | CloseBracket deriving (Show)

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
`,(0,i.jsxs)(o.p,{children:[`Now I can parse the tokens into our `,(0,i.jsx)(o.code,{children:`TreeNode`}),` structure, using the following BNF:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`List :: OpenBracket ListElements CloseBracket
ListElements :: empty | ListElement ListElements
ListElement :: List | Number
`})}),`
`,(0,i.jsxs)(o.p,{children:[`It's all standard recursive descent parsing, so not much to say. Each time, I consume the tokens I need, and return the rest for the next step. For `,(0,i.jsx)(o.code,{children:`parseListElements`}),`, I keep consuming `,(0,i.jsx)(o.code,{children:`ListElement`}),`s until I can't anymore (i.e., I hit a `,(0,i.jsx)(o.code,{children:`CloseBracket`}),`).`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`parseList :: [Token] -> Maybe (TreeNode, [Token])
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
`,(0,i.jsx)(o.p,{children:`Now when parsing the whole input, I just unwrap and get the constructed tree. Technically, I should check that the parse was successful and that there are no remaining tokens, but I just assume that the input is well-formed and my parser is correct.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`parseInput :: Text -> TreeNode
parseInput = fst . fromJust . parseList . tokenize . T.unpack
`})}),`
`,(0,i.jsxs)(o.p,{children:[`With the `,(0,i.jsx)(o.code,{children:`Ord`}),` and the parser in place, the actual solution is straightforward.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`let rightOrder = sumMap (+ 1) $ findIndices (\\[a, b] -> a < b) pairs
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsx)(o.p,{children:`I guess the more efficient way is to implement my own sorting algorithm that tracks the indices of the elements, but I just sort the packets and find the indices of the divider packets.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`let d1 = Branch [Branch [Leaf 2]]
let d2 = Branch [Branch [Leaf 6]]
let sorted = sort $ d1 : d2 : concat pairs
let indices = map (+ 1) $ findIndices (\\a -> a == d1 || a == d2) sorted
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};