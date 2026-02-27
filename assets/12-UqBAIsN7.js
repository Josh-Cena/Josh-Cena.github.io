import{u as r,j as e}from"./index-DsugHUjk.js";import{P as o,a}from"./_components-GobSWsVa.js";import"./_commonjsHelpers-Cpj98o6Y.js";const i={tags:["BFS/DFS","Maze"],title:"Advent of Code 2022 - Day 12: Hill Climbing Algorithm",description:"Advent of Code 2022 - Day 12: Hill Climbing Algorithm, a problem that involves BFS/DFS and Maze. Solution written in Haskell, with detailed walkthrough and proof.",year:2022,day:12};function s(n){const t={code:"code",h1:"h1",p:"p",pre:"pre",span:"span",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.h1,{children:["Advent of Code 2022 - Day 12",e.jsx(t.span,{className:"subtitle",children:"Hill Climbing Algorithm"})]}),`
`,`
`,e.jsx(o,{frontMatter:i}),`
`,e.jsx(t.p,{children:"This is a shortest path problem with equal edge weights, so we can just run BFS. Each node (cell) is connected to its neighbors if the height difference is at most 1."}),`
`,e.jsxs(t.p,{children:["I parse the input grid into a ",e.jsx(t.code,{children:"Map (Int, Int) Int"}),", storing the heights of each cell. This part isn't very interesting so I'll skip it. Anyway, part 1 has a single starting point and part 2 has multiple starting points, but the BFS logic works the same. I just enqueue all starting points at the beginning of the BFS, where the queue keeps track of the cell's coordinates and the distance from the start. The BFS stops when we reach the end cell or the queue is depleted."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-hs",children:`bfs :: Map (Int, Int) Int -> (Int, Int) -> [(Int, Int)] -> Int
bfs matrix end starts = runQueue matrix end (Seq.fromList $ map (,0) starts) Set.empty
`})}),`
`,e.jsx(t.p,{children:"This is my first time implementing BFS in a functional language. It turned out to be not more complicated than the loop version."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-hs",children:`runQueue ::
  Map (Int, Int) Int ->
  (Int, Int) ->
  Seq ((Int, Int), Int) ->
  Set (Int, Int) ->
  Int
runQueue _ _ Seq.Empty _ = error "No path found"
runQueue matrix end ((cur, curDist) Seq.:<| rest) visited =
  if cur == end then curDist else runQueue matrix end queue' visited'
  where
    curHeight = matrix Map.! cur
    neighbors = filter canGo $ map (|+| cur) [(1, 0), (0, 1), (-1, 0), (0, -1)]
    neighborDists = map (,curDist + 1) neighbors
    visited' = Set.union visited $ Set.fromList neighbors
    queue' = rest Seq.>< Seq.fromList neighborDists

    canGo pos = case Map.lookup pos matrix of
      Nothing -> False
      Just neighborHeight -> Set.notMember pos visited && neighborHeight - curHeight <= 1
`})}),`
`,e.jsx(a,{frontMatter:i})]})}function c(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{c as default,i as frontMatter};
