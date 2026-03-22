import{t as e}from"./jsx-runtime-D57Vegw5.js";import{n as t}from"./lib-rxHYdfSX.js";import{n,t as r}from"./_components-BHKTFOi1.js";var i=e(),a={tags:[`Cellular automata`],title:`Advent of Code 2022 - Day 23: Unstable Diffusion`,description:`Advent of Code 2022 - Day 23: Unstable Diffusion, a problem that involves Cellular automata. Solution written in Haskell, with detailed walkthrough and proof.`,year:2022,day:23};function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2022 - Day 23`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Unstable Diffusion`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(o.p,{children:[`Not much to say about this one; it's a straightforward simulation. Like any other cellular automata problem, due to the potentially infinite grid, I represent the map as a `,(0,i.jsx)(o.code,{children:`Set (Int, Int)`}),`.`]}),`
`,(0,i.jsx)(o.p,{children:`I let the elves each propose a move. If it has no neighbors, it doesn't move. Otherwise, it uses the first valid direction in the current round's order.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`canMove :: Set (Int, Int) -> (Int, Int) -> (Int, Int) -> Bool
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
`,(0,i.jsxs)(o.p,{children:[`Then, I count the proposed moves and only execute those that are unique (`,(0,i.jsx)(o.code,{children:`moveCounts`}),` is 1), and finally rotate the directions.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`moveElves :: (Set (Int, Int), [(Int, Int)]) -> (Set (Int, Int), [(Int, Int)])
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
`,(0,i.jsxs)(o.p,{children:[`Now I just need to execute `,(0,i.jsx)(o.code,{children:`moveElves`}),` 10 times.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`moveTimes :: Int -> (Set (Int, Int), [(Int, Int)]) -> (Set (Int, Int), [(Int, Int)])
moveTimes 0 st = st
moveTimes n st = moveTimes (n - 1) $ moveElves st
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`The easy way out is to just keep executing `,(0,i.jsx)(o.code,{children:`moveElves`}),`, each time comparing the new set of elves to the old one. This is a bit slow though, so I augmented `,(0,i.jsx)(o.code,{children:`moveElves`}),` to also return a boolean indicating whether any elves moved.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`moveElves :: (Set (Int, Int), [(Int, Int)]) -> (Set (Int, Int), [(Int, Int)], Bool)
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
`,(0,i.jsx)(o.p,{children:`Now I can execute until no elves move:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`findStable :: (Set (Int, Int), [(Int, Int)]) -> Int
findStable = go 1
  where
    go n s =
      let (elves', directions', hasMoved) = moveElves s
       in if not hasMoved then n else go (n + 1) (elves', directions')
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};