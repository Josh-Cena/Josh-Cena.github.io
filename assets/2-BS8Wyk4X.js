import{u as c,j as e}from"./index-tdPHbA8R.js";import{F as a,a as t}from"./_components-CqTbvCTQ.js";const o={description:"Advent of Code 2022 - Day 2: Rock Paper Scissors. Written in Haskell.",tags:["Brute force"],year:2022,day:2,title:"AoC 2022 D2: Rock Paper Scissors"};function r(s){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"AoC 2022 D2: Rock Paper Scissors"}),`
`,`
`,e.jsx(a,{frontMatter:o}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:"Just compute the score for each round based on the given rules."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`winScore :: (Char, Char) -> Int
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
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"outcomes"})," records all possible outcomes of the game:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`outcomes :: [(Char, Char, Int)]
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
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["I want to keep the same ",e.jsx(n.code,{children:"score"})," function from part 1, so instead of ",e.jsx(n.code,{children:"sumMap score games"}),", I use ",e.jsx(n.code,{children:"sumMap (\\g -> score (fst g, shape g)) games"}),", where ",e.jsx(n.code,{children:"shape"})," computes the shape I need to play based on the desired outcome:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`shape :: (Char, Char) -> Char
shape game = case find (\\(opp, _, score) -> (opp, scoreToOutcome score) == game) outcomes of
  (Just (_, self, _)) -> self
  Nothing -> 'X'
`})}),`
`,e.jsx(t,{frontMatter:o})]})}function i(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{i as default,o as frontMatter};
