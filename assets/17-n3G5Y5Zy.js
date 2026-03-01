import{u as c,j as e}from"./index-BbGgi_W7.js";import{P as s,a as l}from"./_components-B9H8t5ur.js";import"./_commonjsHelpers-Cpj98o6Y.js";const o={tags:["Arcade game","Period finding"],title:"Advent of Code 2022 - Day 17: Pyroclastic Flow",description:"Advent of Code 2022 - Day 17: Pyroclastic Flow, a problem that involves Arcade game and Period finding. Solution written in Haskell, with detailed walkthrough and proof.",year:2022,day:17};function a(n){const t={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.h1,{children:["Advent of Code 2022 - Day 17",e.jsx(t.span,{className:"subtitle",children:"Pyroclastic Flow"})]}),`
`,`
`,e.jsx(s,{frontMatter:o}),`
`,e.jsx(t.h2,{children:"Part 1"}),`
`,e.jsx(t.p,{children:"The first step is to choose a good data structure to represent the rocks. I chose to represent the board as a set of filled cells, and each rock as a set of coordinates relative to the bottom-left corner. This makes it easy to check for collisions and to move the rocks around. For example, block 3 is represented as:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-hs",children:`-- ..#
-- ..#
-- ###
block3 :: Block
block3 = [(2, 2), (2, 1), (0, 0), (1, 0), (2, 0)]
`})}),`
`,e.jsxs(t.p,{children:['This is just a "blueprint". In the actual functions, blocks are introduced in the board coordinate system, so that we can move them around. ',e.jsx(t.code,{children:"moveLeft"})," (and ",e.jsx(t.code,{children:"moveRight"})," and ",e.jsx(t.code,{children:"moveDown"}),") checks if any of the cells in the rock would collide with barriers (walls or other rocks); if not, it return the new coordinates of the rock after moving left. ",e.jsx(t.code,{children:"moveDown"})," additionally checks if the rock would collide with the floor, and if so, it returns ",e.jsx(t.code,{children:"Nothing"})," to indicate that the rock has come to rest."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-hs",children:`moveLeft :: Board -> Block -> Block
moveLeft board block = if canMoveLeft then shiftedBlock else block
  where
    canMoveLeft = all (\\(x, y) -> x > 0 && not (Set.member (x - 1, y) board)) block
    shiftedBlock = map (|-| (1, 0)) block
`})}),`
`,e.jsx(t.p,{children:"Laziness is very useful here, because instead of circulating the rocks and jet patterns, I just generated an infinite list of them, and each time pop the next one off the list."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-hs",children:`let winds = cycle $ T.unpack $ head input
let blocks = cycle $ [block1, block2, block3, block4, block5]
`})}),`
`,e.jsxs(t.p,{children:["Now to drop a single block is to repeatedly apply the wind and move down until the block comes to rest (",e.jsx(t.code,{children:"moveDown"})," returns ",e.jsx(t.code,{children:"Nothing"}),"). Note that the block isn't physically added to the board until it comes to rest, so we can easily update its position. The function returns the final position of the block, and the remaining wind pattern."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-hs",children:`dropBlock :: Board -> Block -> [Char] -> (Block, [Char])
dropBlock board block wind = case wind of
  [] -> error "Ran out of wind"
  dir : wind' ->
    let block' = case dir of
          '<' -> moveLeft board block
          '>' -> moveRight board block
          _ -> error $ "Invalid wind direction: " ++ [dir]
     in case moveDown board block' of
          Just block'' -> dropBlock board block'' wind'
          Nothing -> (block', wind')
`})}),`
`,e.jsxs(t.p,{children:["Now we can drop many blocks. We keep track of the top row of the board. Each time, the next block starts 4 rows above the top row (top row index is ",e.jsx(t.code,{children:"height - 1"}),") and 2 columns from the left wall, gets dropped, and gets added to the board. Because the topmost cell of each block is always at the beginning of the block template, we can update the top row by the y-coordinate of that cell. If the number of blocks dropped is equal to the target, we return the top row as the answer."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-hs",children:`dropBlocks :: Int -> Board -> [Char] -> [Block] -> Int -> Int -> Int
dropBlocks _ _ _ [] _ _ = error "Ran out of blocks"
dropBlocks blocksDropped board windSeq (blockTemplate : blocksTail) height target
  | blocksDropped == target = height
  | otherwise =
      let block = map (|+| (2, height + 3)) blockTemplate
          (block', windSeq') = dropBlock board block windSeq
          board' = Set.union board (Set.fromList block')
          height' = max height $ head block' + 1
       in dropBlocks (blocksDropped + 1) board' windSeq' blocksTail height' target
`})}),`
`,e.jsx(t.h2,{children:"Part 2"}),`
`,e.jsx(t.p,{children:`The statement screams "find a period in the sequence". It's very easy to reach the same state anyway, given how narrow the board is. If we are at the exact same block, same wind position, and the unfilled cells at the top have the exact same shape, then everything that follows must be exactly the same.`}),`
`,e.jsx(t.p,{children:"Note: I've seen some algorithms that only check the height of each column, but I don't think that's sufficient. Consider:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-plain",children:`. . # . . . .
. # # # . . .
. # # # . . .
# # # # # # #
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-plain",children:`. . # . . . .
. # # # . . .
. . # . . . .
# # # # # # #
`})}),`
`,e.jsx(t.p,{children:"The height of each column is the same, but the shape of the unfilled cells is different. If we drop block 3 and repeatedly move right except the last move, the final state is different:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-plain",children:`. . # . . . O
. # # # . . O
. # # # O O O
# # # # # # #
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-plain",children:`. . # . . O .
. # # # . O .
. . # O O O .
# # # # # # #
`})}),`
`,e.jsxs(t.p,{children:["This means we have to consider the shape of ",e.jsx(t.em,{children:"all"})," unfilled cells at the top, only stopping when we reach a full barrier that cannot be penetrated by any block. I implemented a flood fill:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-hs",children:`unfilledTop :: Board -> Int -> Set (Int, Int)
unfilledTop board height = bfs (Seq.singleton start) (Set.singleton start)
  where
    start = (0, height)
    inBox :: (Int, Int) -> Bool
    inBox (x, y) = x >= 0 && x < w && y >= 0 && y <= height
    bfs :: Seq (Int, Int) -> Set (Int, Int) -> Set (Int, Int)
    bfs Seq.Empty seen = seen
    bfs (p Seq.:<| q) seen =
      let next = [n | n <- neighbors2d p, inBox n, Set.notMember n board, Set.notMember n seen]
          seen' = foldr Set.insert seen next
          q' = q Seq.>< Seq.fromList next
       in bfs q' seen'
`})}),`
`,e.jsxs(t.p,{children:["Now we just need to add state tracking to ",e.jsx(t.code,{children:"dropBlocks"}),". Both ",e.jsx(t.code,{children:"winds"})," and ",e.jsx(t.code,{children:"blocks"})," now get an extra index. The unfilled top cells' coordinates are relativized to the top row, so that they can be compared across different heights."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-hs",children:`dropBlocks blocksDropped board windSeq ((blockIndex, blockTemplate) : blocksTail) height seenStates heights target
  | blocksDropped == target = height
  | otherwise =
      let windSeqPos = fst (head windSeq)
          emptyTop = unfilledTop board height
          state = (blockIndex, windSeqPos, Set.map (\\(x, y) -> (x, y - height)) emptyTop)
       in case Map.lookup state seenStates of
            Nothing -> -- ...
            Just cycleStart -> -- ...
`})}),`
`,e.jsx(t.p,{children:"If the state hasn't been seen before, the logic is the same as before, just with the state and height added to the memos."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-hs",children:`Nothing ->
  let seenStates' = Map.insert state blocksDropped seenStates
      heights' = Map.insert blocksDropped height heights
      block = map (|+| (2, height + 3)) blockTemplate
      (block', windSeq') = dropBlock board block windSeq
      board' = Set.union board (Set.fromList block')
      height' = max height $ snd (head block') + 1
   in dropBlocks (blocksDropped + 1) board' windSeq' blocksTail height' seenStates' heights' target
`})}),`
`,e.jsx(t.p,{children:"If the state has been seen before, then we can stop and calculate the eventual height. We know that the cycle goes like this:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-plain",children:`t = 0: state0
t = 1: state1
...
t = cycleStart: cycleState0
t = cycleStart + 1: cycleState1
...
t = cycleStart + cycleLength: cycleState0
...
t = cycleStart + n * cycleLength: cycleState0
...
t = target = cycleStart + n * cycleLength + x: cycleStateX
`})}),`
`,e.jsxs(t.p,{children:["Then the total height is the height at ",e.jsx(t.code,{children:"cycleStart"}),", plus ",e.jsx(t.code,{children:"n"})," times the height grown in a cycle, plus the height grown ",e.jsx(t.code,{children:"x"})," steps into the cycle. ",e.jsx(t.code,{children:"n"})," and ",e.jsx(t.code,{children:"x"})," are just the quotient and remainder of ",e.jsx(t.code,{children:"(target - cycleStart) / cycleLength"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-hs",children:`Just cycleStart ->
  let cycleLen = blocksDropped - cycleStart
      cycleStartHeight = heights Map.! cycleStart
      cycleHeight = height - cycleStartHeight
      inCycle = target - cycleStart
      numCycles = inCycle \`div\` cycleLen
      remainder = inCycle \`mod\` cycleLen
      remainderHeight = (heights Map.! (cycleStart + remainder)) - cycleStartHeight
   in cycleStartHeight + numCycles * cycleHeight + remainderHeight
`})}),`
`,e.jsx(l,{frontMatter:o})]})}function d(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{d as default,o as frontMatter};
