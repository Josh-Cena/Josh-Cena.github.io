import{u as a,j as e}from"./index-Bb_SBPIJ.js";import{P as t,a as c}from"./_components-DLB4m9JY.js";const o={tags:["Brute force"],description:"Advent of Code 2022 - Day 2: Rock Paper Scissors, a problem that involves Brute force. Solution written in Haskell, with detailed walkthrough and proof.",year:2022,day:2,title:"Advent of Code 2022 - Day 2: Rock Paper Scissors"};function r(s){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2022 - Day 2",e.jsx(n.span,{className:"subtitle",children:"Rock Paper Scissors"})]}),`
`,`
`,e.jsx(t,{frontMatter:o}),`
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
`,e.jsx(c,{frontMatter:o})]})}function i(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{i as default,o as frontMatter};
