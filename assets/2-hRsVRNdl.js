import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-BHnTV9cU.js";import"./Link-CEJsqf-b.js";import{n,t as r}from"./_components-CjKNIGmQ.js";var i=e();function a(e){let a={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2022 - Day 2`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Rock Paper Scissors`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.h2,{children:`Part 1`}),`
`,(0,i.jsx)(a.p,{children:`Just compute the score for each round based on the given rules.`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-hs`,children:`winScore :: (Char, Char) -> Int
winScore game = case find (\\(opp, self, _) -> (opp, self) == game) outcomes of
  (Just (_, _, score)) -> score
  Nothing -> 0

shapeScore :: Char -> Int
shapeScore 'X' = 1
shapeScore 'Y' = 2
shapeScore _ = 3

score :: (Char, Char) -> Int
score game = winScore game + shapeScore (snd game)
`})}),`
`,(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.code,{children:`outcomes`}),` records all possible outcomes of the game:`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-hs`,children:`outcomes :: [(Char, Char, Int)]
outcomes =
  [ ('A', 'X', 3),
    ('B', 'X', 0),
    ('C', 'X', 6),
    ('A', 'Y', 6),
    ('B', 'Y', 3),
    ('C', 'Y', 0),
    ('A', 'Z', 0),
    ('B', 'Z', 6),
    ('C', 'Z', 3)
  ]
`})}),`
`,(0,i.jsx)(a.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(a.p,{children:[`I want to keep the same `,(0,i.jsx)(a.code,{children:`score`}),` function from part 1, so instead of `,(0,i.jsx)(a.code,{children:`sumMap score games`}),`, I use `,(0,i.jsx)(a.code,{children:`sumMap (\\g -> score (fst g, shape g)) games`}),`, where `,(0,i.jsx)(a.code,{children:`shape`}),` computes the shape I need to play based on the desired outcome:`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-hs`,children:`shape :: (Char, Char) -> Char
shape game = case find (\\(opp, _, score) -> (opp, scoreToOutcome score) == game) outcomes of
  (Just (_, self, _)) -> self
  Nothing -> 'X'
`})}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Brute force`],title:`Advent of Code 2022 - Day 2: Rock Paper Scissors`,description:`Advent of Code 2022 - Day 2: Rock Paper Scissors, a problem that involves Brute force. Solution written in Haskell, with detailed walkthrough and proof.`,year:2022,day:2};export{o as default};