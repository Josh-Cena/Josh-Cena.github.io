import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{n,t as r}from"./_components-DcdEf7Vf.js";var i=e();function a(e){let a={annotation:`annotation`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,math:`math`,mi:`mi`,mn:`mn`,mo:`mo`,mrow:`mrow`,msup:`msup`,ol:`ol`,p:`p`,pre:`pre`,semantics:`semantics`,span:`span`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2022 - Day 16`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Proboscidea Volcanium`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,`
`,(0,i.jsx)(a.h2,{children:`Part 1`}),`
`,(0,i.jsx)(a.p,{children:`First, to dispel a few common misunderstandings:`}),`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`Always going for the biggest valve first doesn't work. If the biggest is far away, you may waste too much time getting there.`}),`
`,(0,i.jsx)(a.li,{children:`Always going for the closest valve first doesn't work. Because the earlier you open a valve, the more reward it gives, you may want to open a bigger but slightly farther valve first.`}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`So we can't greedily choose the next valve to open. Instead, we need to consider all possible sequences of valves to open, and calculate the score for each sequence.`}),`
`,(0,i.jsx)(a.p,{children:`Instead of using text labels to represent valves, I take the typical approach of mapping them to integers—more precisely, as 1-hot encodings so that we can represent sets of valves as bitmasks. This makes it easier to do all sorts of set operations later, like maintaining the set of opened valves, and for part 2, checking if the sets of valves opened by the two actors are disjoint.`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-hs`,children:`newtype Node = Node Int deriving (Eq, Ord, Show)

-- "AA" is the smallest node, so it's 1 << 0
startNode :: Node
startNode = Node 1

newtype NodeSet = NodeSet Int deriving (Eq, Ord, Show)

singleton :: Node -> NodeSet
singleton (Node n) = NodeSet n

insert :: Node -> NodeSet -> NodeSet
insert (Node n) (NodeSet s) = NodeSet (s .|. n)

notMember :: Node -> NodeSet -> Bool
notMember (Node n) (NodeSet s) = (s .&. n) == 0

disjoint :: NodeSet -> NodeSet -> Bool
disjoint (NodeSet s1) (NodeSet s2) = (s1 .&. s2) == 0
`})}),`
`,(0,i.jsx)(a.p,{children:`Most of the broken valves (except the starting point) can be ignored, since they don't contribute to the score. Our graph should only contain the working valves. More precisely, we need to know the distance between each pair of valves, so we can quickly calculate how much time it takes to get from one valve to another. When we do the planning, we need to quickly move to the next valve to open—we don't want to waste time jumping through intermediate valves that we don't actually do anything with.`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-hs`,children:`distance :: Map Node (Int, [Node]) -> Node -> Map Node Int
distance graph start =
  go Map.empty (singletonNode start) (Seq.singleton (start, 0))
  where
    go dist _ Seq.Empty = dist
    go dist visited ((node, d) Seq.:<| queue) =
      let (flow, neighbors) = second (filter (not . (\`memberNode\` visited))) $ graph Map.! node
          dist' = if flow > 0 then Map.insert node d dist else dist
          visited' = foldr insertNode visited neighbors
          queue' = queue Seq.>< Seq.fromList (map (,d + 1) neighbors)
       in go dist' visited' queue'
`})}),`
`,(0,i.jsxs)(a.p,{children:[`The `,(0,i.jsx)(a.code,{children:`reduceGraph`}),` function takes the original graph and produces a new graph that only contains the working valves, and the distances between them. This is the graph we will use for planning.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-hs`,children:`reduceGraph :: Map Text (Int, [Text]) -> Map Node (Int, Map Node Int)
reduceGraph fullGraph =
  encodedGraph
    & Map.filterWithKey (\\k (f, _) -> k == startNode || f > 0)
    & Map.mapWithKey (\\k (f, _) -> (f, distance encodedGraph k))
  where
    nodeMap = Map.fromList $ zip (Map.keys fullGraph) [Node (1 \`shiftL\` i) | i <- [0 ..]]
    toNode k = nodeMap Map.! k
    encodedGraph = Map.map (second (map toNode)) fullGraph & Map.mapKeys toNode
`})}),`
`,(0,i.jsxs)(a.p,{children:[`As for the actual optimization, I took a DFS approach. (Dijkstra should have worked here, but it would make part 2 much trickier.) My goal is to calculate `,(0,i.jsx)(a.em,{children:`every single combination`}),` of valves that can be opened within the time limit, and the score for each combination. The state of the search contains: the current node, the time left, the set of opened valves, and the total score so far. Each time when starting at a state, the valve is considered open (it has been added to the open set), but the score has not been added yet. We first compute the score for the current state. Then we try to move to each of the neighboring valves, which takes time `,(0,i.jsx)(a.code,{children:`distance + 1`}),` (1 minute to open the valve). It's only a valid state to move to if:`]}),`
`,(0,i.jsxs)(a.ol,{children:[`
`,(0,i.jsx)(a.li,{children:`The valve is not already open.`}),`
`,(0,i.jsx)(a.li,{children:`The time left is greater than the time it takes to get there and open it. (If the time is up just as we open it, then the score is 0 anyway.)`}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`Note that I still explore subsequent states even if the currently opened valve set has been seen before with a higher reward. This is because my memo doesn't contain the time left or the current node, so it's possible that the more-reward path actually spent more time and would be eventually worse. (I tried pruning and it still worked, but I cannot prove its safety.)`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-hs`,children:`allPaths :: Map Node (Int, Map Node Int) -> Int -> Map NodeSet Int
allPaths graph time = go [(startNode, time, NodeSet 0, 0)] Map.empty
  where
    go :: [(Node, Int, NodeSet, Int)] -> Map NodeSet Int -> Map NodeSet Int
    go [] rewards = rewards
    go ((current, timeLeft, opened, prevReward) : rest) rewards =
      let (flow, neighbors) = graph Map.! current
          reward = prevReward + flow * timeLeft
          rewards' = Map.insertWith max opened reward rewards
          nextStates =
            [ (tgt, timeAfter, insert tgt opened, reward)
              | (tgt, dist) <- Map.toList neighbors,
                notMember tgt opened,
                let timeAfter = timeLeft - dist - 1,
                timeAfter > 0
            ]
       in go (nextStates ++ rest) rewards'
`})}),`
`,(0,i.jsxs)(a.p,{children:[`The return value of `,(0,i.jsx)(a.code,{children:`allPaths`}),` can be read as "if the actor is to open these valves within `,(0,i.jsx)(a.code,{children:`time`}),`, the highest possible score is this". Part 1 is just to find the maximum reward among all paths.`]}),`
`,(0,i.jsx)(a.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(a.p,{children:[`The key observation is that the two actors' paths are independent, except for the fact that they cannot open the same valve. So with `,(0,i.jsx)(a.code,{children:`allPaths`}),`, we just need to find a pair of disjoint valve sets with the highest total score. In part 1, I was careful not to implement much pruning for `,(0,i.jsx)(a.code,{children:`allPaths`}),`, which turns out to be useful for part 2. In particular, the paths we collected allow the actor to stop and do nothing, even if there are still valves that can be opened. This avoids the case where one actor greedily maximizes their score, forcing the other actor into more inferior paths.`]}),`
`,(0,i.jsxs)(a.p,{children:[`Technically, finding the best pair of disjoint valve sets can be done with SOS DP by memoizing the best score for each valve subset (the actual set opened by the actor may be a further subset of that subset). Then for each opened set of actor 1, look up `,(0,i.jsx)(a.code,{children:`dp[complement]`}),` for actor 2. This would take `,(0,i.jsxs)(a.span,{className:`katex`,children:[(0,i.jsx)(a.span,{className:`katex-mathml`,children:(0,i.jsx)(a.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,i.jsxs)(a.semantics,{children:[(0,i.jsxs)(a.mrow,{children:[(0,i.jsx)(a.mi,{mathvariant:`script`,children:`O`}),(0,i.jsx)(a.mo,{stretchy:`false`,children:`(`}),(0,i.jsx)(a.mi,{children:`n`}),(0,i.jsx)(a.mo,{children:`+`}),(0,i.jsx)(a.mi,{children:`k`}),(0,i.jsx)(a.mo,{children:`⋅`}),(0,i.jsxs)(a.msup,{children:[(0,i.jsx)(a.mn,{children:`2`}),(0,i.jsx)(a.mi,{children:`k`})]}),(0,i.jsx)(a.mo,{stretchy:`false`,children:`)`})]}),(0,i.jsx)(a.annotation,{encoding:`application/x-tex`,children:`\\mathcal{O}(n + k\\cdot 2^k)`})]})})}),(0,i.jsxs)(a.span,{className:`katex-html`,"aria-hidden":`true`,children:[(0,i.jsxs)(a.span,{className:`base`,children:[(0,i.jsx)(a.span,{className:`strut`,style:{height:`1em`,verticalAlign:`-0.25em`}}),(0,i.jsx)(a.span,{className:`mord mathcal`,style:{marginRight:`0.02778em`},children:`O`}),(0,i.jsx)(a.span,{className:`mopen`,children:`(`}),(0,i.jsx)(a.span,{className:`mord mathnormal`,children:`n`}),(0,i.jsx)(a.span,{className:`mspace`,style:{marginRight:`0.2222em`}}),(0,i.jsx)(a.span,{className:`mbin`,children:`+`}),(0,i.jsx)(a.span,{className:`mspace`,style:{marginRight:`0.2222em`}})]}),(0,i.jsxs)(a.span,{className:`base`,children:[(0,i.jsx)(a.span,{className:`strut`,style:{height:`0.6944em`}}),(0,i.jsx)(a.span,{className:`mord mathnormal`,style:{marginRight:`0.03148em`},children:`k`}),(0,i.jsx)(a.span,{className:`mspace`,style:{marginRight:`0.2222em`}}),(0,i.jsx)(a.span,{className:`mbin`,children:`⋅`}),(0,i.jsx)(a.span,{className:`mspace`,style:{marginRight:`0.2222em`}})]}),(0,i.jsxs)(a.span,{className:`base`,children:[(0,i.jsx)(a.span,{className:`strut`,style:{height:`1.0991em`,verticalAlign:`-0.25em`}}),(0,i.jsxs)(a.span,{className:`mord`,children:[(0,i.jsx)(a.span,{className:`mord`,children:`2`}),(0,i.jsx)(a.span,{className:`msupsub`,children:(0,i.jsx)(a.span,{className:`vlist-t`,children:(0,i.jsx)(a.span,{className:`vlist-r`,children:(0,i.jsx)(a.span,{className:`vlist`,style:{height:`0.8491em`},children:(0,i.jsxs)(a.span,{style:{top:`-3.063em`,marginRight:`0.05em`},children:[(0,i.jsx)(a.span,{className:`pstrut`,style:{height:`2.7em`}}),(0,i.jsx)(a.span,{className:`sizing reset-size6 size3 mtight`,children:(0,i.jsx)(a.span,{className:`mord mathnormal mtight`,style:{marginRight:`0.03148em`},children:`k`})})]})})})})})]}),(0,i.jsx)(a.span,{className:`mclose`,children:`)`})]})]})]}),` time where `,(0,i.jsxs)(a.span,{className:`katex`,children:[(0,i.jsx)(a.span,{className:`katex-mathml`,children:(0,i.jsx)(a.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,i.jsxs)(a.semantics,{children:[(0,i.jsx)(a.mrow,{children:(0,i.jsx)(a.mi,{children:`n`})}),(0,i.jsx)(a.annotation,{encoding:`application/x-tex`,children:`n`})]})})}),(0,i.jsx)(a.span,{className:`katex-html`,"aria-hidden":`true`,children:(0,i.jsxs)(a.span,{className:`base`,children:[(0,i.jsx)(a.span,{className:`strut`,style:{height:`0.4306em`}}),(0,i.jsx)(a.span,{className:`mord mathnormal`,children:`n`})]})})]}),` is the number of paths (~4000) and `,(0,i.jsxs)(a.span,{className:`katex`,children:[(0,i.jsx)(a.span,{className:`katex-mathml`,children:(0,i.jsx)(a.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,i.jsxs)(a.semantics,{children:[(0,i.jsx)(a.mrow,{children:(0,i.jsx)(a.mi,{children:`k`})}),(0,i.jsx)(a.annotation,{encoding:`application/x-tex`,children:`k`})]})})}),(0,i.jsx)(a.span,{className:`katex-html`,"aria-hidden":`true`,children:(0,i.jsxs)(a.span,{className:`base`,children:[(0,i.jsx)(a.span,{className:`strut`,style:{height:`0.6944em`}}),(0,i.jsx)(a.span,{className:`mord mathnormal`,style:{marginRight:`0.03148em`},children:`k`})]})})]}),` is the number of valves (16). However, since `,(0,i.jsxs)(a.span,{className:`katex`,children:[(0,i.jsx)(a.span,{className:`katex-mathml`,children:(0,i.jsx)(a.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,i.jsxs)(a.semantics,{children:[(0,i.jsx)(a.mrow,{children:(0,i.jsx)(a.mi,{children:`n`})}),(0,i.jsx)(a.annotation,{encoding:`application/x-tex`,children:`n`})]})})}),(0,i.jsx)(a.span,{className:`katex-html`,"aria-hidden":`true`,children:(0,i.jsxs)(a.span,{className:`base`,children:[(0,i.jsx)(a.span,{className:`strut`,style:{height:`0.4306em`}}),(0,i.jsx)(a.span,{className:`mord mathnormal`,children:`n`})]})})]}),` isn't too large, I just used a `,(0,i.jsxs)(a.span,{className:`katex`,children:[(0,i.jsx)(a.span,{className:`katex-mathml`,children:(0,i.jsx)(a.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,i.jsxs)(a.semantics,{children:[(0,i.jsxs)(a.mrow,{children:[(0,i.jsx)(a.mi,{mathvariant:`script`,children:`O`}),(0,i.jsx)(a.mo,{stretchy:`false`,children:`(`}),(0,i.jsxs)(a.msup,{children:[(0,i.jsx)(a.mi,{children:`n`}),(0,i.jsx)(a.mn,{children:`2`})]}),(0,i.jsx)(a.mo,{stretchy:`false`,children:`)`})]}),(0,i.jsx)(a.annotation,{encoding:`application/x-tex`,children:`\\mathcal{O}(n^2)`})]})})}),(0,i.jsx)(a.span,{className:`katex-html`,"aria-hidden":`true`,children:(0,i.jsxs)(a.span,{className:`base`,children:[(0,i.jsx)(a.span,{className:`strut`,style:{height:`1.0641em`,verticalAlign:`-0.25em`}}),(0,i.jsx)(a.span,{className:`mord mathcal`,style:{marginRight:`0.02778em`},children:`O`}),(0,i.jsx)(a.span,{className:`mopen`,children:`(`}),(0,i.jsxs)(a.span,{className:`mord`,children:[(0,i.jsx)(a.span,{className:`mord mathnormal`,children:`n`}),(0,i.jsx)(a.span,{className:`msupsub`,children:(0,i.jsx)(a.span,{className:`vlist-t`,children:(0,i.jsx)(a.span,{className:`vlist-r`,children:(0,i.jsx)(a.span,{className:`vlist`,style:{height:`0.8141em`},children:(0,i.jsxs)(a.span,{style:{top:`-3.063em`,marginRight:`0.05em`},children:[(0,i.jsx)(a.span,{className:`pstrut`,style:{height:`2.7em`}}),(0,i.jsx)(a.span,{className:`sizing reset-size6 size3 mtight`,children:(0,i.jsx)(a.span,{className:`mord mtight`,children:`2`})})]})})})})})]}),(0,i.jsx)(a.span,{className:`mclose`,children:`)`})]})})]}),` brute-force approach. 16,000,000 pairs is still manageable, especially because my bitset operations are fast with disjointness checks.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-hs`,children:`maximum
  [ r1 + r2
    | (s1, r1) <- Map.toList paths,
      (s2, r2) <- Map.toList paths,
      disjoint s1 s2
  ]
`})}),`
`,(0,i.jsx)(a.p,{children:`The performance is very satisfactory: a mere 270ms, which is merely 100ms more than part 1.`}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`BFS/DFS`,`Dynamic programming`],title:`Advent of Code 2022 - Day 16: Proboscidea Volcanium`,description:`Advent of Code 2022 - Day 16: Proboscidea Volcanium, a problem that involves BFS/DFS and Dynamic programming. Solution written in Haskell, with detailed walkthrough and proof.`,year:2022,day:16};export{o as default};