import{u as r,j as e}from"./index-BnEAZLVO.js";import{P as i,a}from"./_components-CRYqM7VG.js";import"./_commonjsHelpers-Cpj98o6Y.js";const s={tags:["Cellular automata"],title:"Advent of Code 2022 - Day 23: Unstable Diffusion",description:"Advent of Code 2022 - Day 23: Unstable Diffusion, a problem that involves Cellular automata. Solution written in Haskell, with detailed walkthrough and proof.",year:2022,day:23};function o(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2022 - Day 23",e.jsx(n.span,{className:"subtitle",children:"Unstable Diffusion"})]}),`
`,`
`,e.jsx(i,{frontMatter:s}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:["Not much to say about this one; it's a straightforward simulation. Like any other cellular automata problem, due to the potentially infinite grid, I represent the map as a ",e.jsx(n.code,{children:"Set (Int, Int)"}),"."]}),`
`,e.jsx(n.p,{children:"I let the elves each propose a move. If it has no neighbors, it doesn't move. Otherwise, it uses the first valid direction in the current round's order."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`canMove :: Set (Int, Int) -> (Int, Int) -> (Int, Int) -> Bool
canMove elves (r, c) (dr, dc) = not $ any (\`Set.member\` elves) positions
  where
    positions = case (dr, dc) of
      (-1, 0) -> [(r - 1, c - 1), (r - 1, c), (r - 1, c + 1)]
      (1, 0) -> [(r + 1, c - 1), (r + 1, c), (r + 1, c + 1)]
      (0, -1) -> [(r - 1, c - 1), (r, c - 1), (r + 1, c - 1)]
      (0, 1) -> [(r - 1, c + 1), (r, c + 1), (r + 1, c + 1)]
      _ -> error "Invalid direction"

proposeMove :: Set (Int, Int) -> [(Int, Int)] -> (Int, Int) -> (Int, Int)
proposeMove elves directions (r, c) =
  if not hasNeighbor then (r, c) else (r + dr, c + dc)
  where
    hasNeighbor =
      any
        (\`Set.member\` elves)
        [ (r + dr, c + dc) | dr <- [-1 .. 1], dc <- [-1 .. 1], (dr, dc) /= (0, 0)
        ]
    (dr, dc) = fromMaybe (0, 0) $ find (canMove elves (r, c)) directions
`})}),`
`,e.jsxs(n.p,{children:["Then, I count the proposed moves and only execute those that are unique (",e.jsx(n.code,{children:"moveCounts"})," is 1), and finally rotate the directions."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`moveElves :: (Set (Int, Int), [(Int, Int)]) -> (Set (Int, Int), [(Int, Int)])
moveElves (elves, directions) = (Set.fromList elves', directions')
  where
    proposals = [(pos, proposeMove elves directions pos) | pos <- Set.toList elves]
    moveCounts = foldr (\\(_, pos') acc -> Map.insertWith (+) pos' 1 acc) Map.empty proposals
    elves' =
      map
        (\\(pos, pos') -> if Map.findWithDefault 0 pos' moveCounts > 1 then pos else pos')
        proposals
    directions' = tail directions ++ [head directions]
`})}),`
`,e.jsxs(n.p,{children:["Now I just need to execute ",e.jsx(n.code,{children:"moveElves"})," 10 times."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`moveTimes :: Int -> (Set (Int, Int), [(Int, Int)]) -> (Set (Int, Int), [(Int, Int)])
moveTimes 0 st = st
moveTimes n st = moveTimes (n - 1) $ moveElves st
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["The easy way out is to just keep executing ",e.jsx(n.code,{children:"moveElves"}),", each time comparing the new set of elves to the old one. This is a bit slow though, so I augmented ",e.jsx(n.code,{children:"moveElves"})," to also return a boolean indicating whether any elves moved."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`moveElves :: (Set (Int, Int), [(Int, Int)]) -> (Set (Int, Int), [(Int, Int)], Bool)
moveElves (elves, directions) = (Set.fromList elves', directions', hasMoved)
  where
    proposals = [(pos, proposeMove elves directions pos) | pos <- Set.toList elves]
    moveCounts = foldr (\\(_, pos') acc -> Map.insertWith (+) pos' 1 acc) Map.empty proposals
    (hasMoved, elves') =
      mapAccumL
        ( \\hasMoved (pos, pos') ->
            if Map.findWithDefault 0 pos' moveCounts > 1
              then (hasMoved, pos)
              else (hasMoved || pos /= pos', pos')
        )
        False
        proposals
    directions' = tail directions ++ [head directions]
`})}),`
`,e.jsx(n.p,{children:"Now I can execute until no elves move:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`findStable :: (Set (Int, Int), [(Int, Int)]) -> Int
findStable = go 1
  where
    go n s =
      let (elves', directions', hasMoved) = moveElves s
       in if not hasMoved then n else go (n + 1) (elves', directions')
`})}),`
`,e.jsx(a,{frontMatter:s})]})}function h(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{h as default,s as frontMatter};
