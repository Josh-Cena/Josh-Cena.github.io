import{u as o,j as e}from"./index-K2wRAUCr.js";import{F as i,a as s}from"./_components-D8vnU3Mx.js";const r={description:"Advent of Code 2022 - Day 24: Blizzard Basin. Written in Haskell.",tags:["BFS/DFS"],year:2022,day:24,title:"AoC 2022 D24: Blizzard Basin"};function a(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{children:"AoC 2022 D24: Blizzard Basin"}),`
`,`
`,e.jsx(i,{frontMatter:r}),`
`,e.jsx(t.h2,{children:"Part 1"}),`
`,e.jsx(t.p,{children:"All it takes is to do a BFS with the current time as part of the state. Also realize that you don't have to actually simulate the blizzards; given the time and a position, you can know if a blizzard is there by going backwards in the direction of the blizzard and checking if there was a blizzard there at time 0."}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"canMoveTo"})," function essentially determines the edges for a node ",e.jsx(t.code,{children:"(r, c, t)"})," by checking if the position is out of bounds, is a wall, or has a blizzard at time ",e.jsx(t.code,{children:"t"}),". If not, we can move there."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-hs",children:`canMoveTo :: Map (Int, Int) Char -> Int -> Int -> State -> Bool
canMoveTo board width height (r, c, t) =
  case Map.lookup (r, c) board of
    Just '#' -> False
    Nothing -> False
    _ ->
      let blockingWinds =
            [ ((r, (c - t - 1) \`mod\` width + 1), '>'),
              (((r - t - 1) \`mod\` height + 1, c), 'v'),
              ((r, (c + t - 1) \`mod\` width + 1), '<'),
              (((r + t - 1) \`mod\` height + 1, c), '^')
            ]
       in all (\\(pos, wind) -> Map.lookup pos board /= Just wind) blockingWinds
`})}),`
`,e.jsx(t.p,{children:"Writing a BFS for the last time this year."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-hs",children:`bfs ::
  Map (Int, Int) Char ->
  Int ->
  Int ->
  (Int, Int, Int) ->
  (Int, Int) ->
  Int
bfs board width height start (er, ec) =
  go (Seq.singleton start) (Set.singleton start)
  where
    go :: Seq State -> Set State -> Int
    go Seq.Empty _ = error "No path found"
    go (s@(r, c, t) Seq.:<| q) seen
      | (r, c) == (er, ec) = t
      | otherwise =
          let next = [n | n <- neighbors s, canMoveTo board width height n, n \`Set.notMember\` seen]
              seen' = foldr Set.insert seen next
              q' = q Seq.>< Seq.fromList next
           in go q' seen'
`})}),`
`,e.jsxs(t.p,{children:["The answer is given by ",e.jsx(t.code,{children:"bfs board width height (0, 1, 0) (height + 1, width)"}),"."]}),`
`,e.jsx(t.h2,{children:"Part 2"}),`
`,e.jsx(t.p,{children:"Just execute the BFS three times: from start to end, then from end to start, and finally from start to end again. Each time, pass the previous end time as the starting time for the next BFS."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-hs",children:`let (_, _, t) =
      foldr
        (\\(r, c) lastState -> (r, c, bfs board width height lastState (r, c)))
        (0, 1, 0)
        [(height + 1, width), (0, 1), (height + 1, width)]
`})}),`
`,e.jsx(s,{frontMatter:r})]})}function c(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{c as default,r as frontMatter};
