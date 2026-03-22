import{t as e}from"./jsx-runtime-xty2or4m.js";import{n as t}from"./lib-zKnO7aGa.js";import{n,t as r}from"./_components-vrS0ov66.js";var i=e(),a={tags:[`BFS/DFS`,`Maze`],title:`Advent of Code 2022 - Day 12: Hill Climbing Algorithm`,description:`Advent of Code 2022 - Day 12: Hill Climbing Algorithm, a problem that involves BFS/DFS and Maze. Solution written in Haskell, with detailed walkthrough and proof.`,year:2022,day:12};function o(e){let o={code:`code`,h1:`h1`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2022 - Day 12`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Hill Climbing Algorithm`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.p,{children:`This is a shortest path problem with equal edge weights, so we can just run BFS. Each node (cell) is connected to its neighbors if the height difference is at most 1.`}),`
`,(0,i.jsxs)(o.p,{children:[`I parse the input grid into a `,(0,i.jsx)(o.code,{children:`Map (Int, Int) Int`}),`, storing the heights of each cell. This part isn't very interesting so I'll skip it. Anyway, part 1 has a single starting point and part 2 has multiple starting points, but the BFS logic works the same. I just enqueue all starting points at the beginning of the BFS, where the queue keeps track of the cell's coordinates and the distance from the start. The BFS stops when we reach the end cell or the queue is depleted.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`bfs :: Map (Int, Int) Int -> (Int, Int) -> [(Int, Int)] -> Int
bfs matrix end starts = runQueue matrix end (Seq.fromList $ map (,0) starts) Set.empty
`})}),`
`,(0,i.jsx)(o.p,{children:`This is my first time implementing BFS in a functional language. It turned out to be not more complicated than the loop version.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`runQueue ::
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
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};