import{t as e}from"./jsx-runtime-xty2or4m.js";import{n as t}from"./lib-zKnO7aGa.js";import{n,t as r}from"./_components-vrS0ov66.js";var i=e(),a={tags:[`Arcade game`,`Period finding`],title:`Advent of Code 2022 - Day 17: Pyroclastic Flow`,description:`Advent of Code 2022 - Day 17: Pyroclastic Flow, a problem that involves Arcade game and Period finding. Solution written in Haskell, with detailed walkthrough and proof.`,year:2022,day:17};function o(e){let o={code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2022 - Day 17`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Pyroclastic Flow`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsx)(o.p,{children:`The first step is to choose a good data structure to represent the rocks. I chose to represent the board as a set of filled cells, and each rock as a set of coordinates relative to the bottom-left corner. This makes it easy to check for collisions and to move the rocks around. For example, block 3 is represented as:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`-- ..#
-- ..#
-- ###
block3 :: Block
block3 = [(2, 2), (2, 1), (0, 0), (1, 0), (2, 0)]
`})}),`
`,(0,i.jsxs)(o.p,{children:[`This is just a "blueprint". In the actual functions, blocks are introduced in the board coordinate system, so that we can move them around. `,(0,i.jsx)(o.code,{children:`moveLeft`}),` (and `,(0,i.jsx)(o.code,{children:`moveRight`}),` and `,(0,i.jsx)(o.code,{children:`moveDown`}),`) checks if any of the cells in the rock would collide with barriers (walls or other rocks); if not, it return the new coordinates of the rock after moving left. `,(0,i.jsx)(o.code,{children:`moveDown`}),` additionally checks if the rock would collide with the floor, and if so, it returns `,(0,i.jsx)(o.code,{children:`Nothing`}),` to indicate that the rock has come to rest.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`moveLeft :: Board -> Block -> Block
moveLeft board block = if canMoveLeft then shiftedBlock else block
  where
    canMoveLeft = all (\\(x, y) -> x > 0 && not (Set.member (x - 1, y) board)) block
    shiftedBlock = map (|-| (1, 0)) block
`})}),`
`,(0,i.jsx)(o.p,{children:`Laziness is very useful here, because instead of circulating the rocks and jet patterns, I just generated an infinite list of them, and each time pop the next one off the list.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`let winds = cycle $ T.unpack $ head input
let blocks = cycle $ [block1, block2, block3, block4, block5]
`})}),`
`,(0,i.jsxs)(o.p,{children:[`Now to drop a single block is to repeatedly apply the wind and move down until the block comes to rest (`,(0,i.jsx)(o.code,{children:`moveDown`}),` returns `,(0,i.jsx)(o.code,{children:`Nothing`}),`). Note that the block isn't physically added to the board until it comes to rest, so we can easily update its position. The function returns the final position of the block, and the remaining wind pattern.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`dropBlock :: Board -> Block -> [Char] -> (Block, [Char])
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
`,(0,i.jsxs)(o.p,{children:[`Now we can drop many blocks. We keep track of the top row of the board. Each time, the next block starts 4 rows above the top row (top row index is `,(0,i.jsx)(o.code,{children:`height - 1`}),`) and 2 columns from the left wall, gets dropped, and gets added to the board. Because the topmost cell of each block is always at the beginning of the block template, we can update the top row by the y-coordinate of that cell. If the number of blocks dropped is equal to the target, we return the top row as the answer.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`dropBlocks :: Int -> Board -> [Char] -> [Block] -> Int -> Int -> Int
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
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsx)(o.p,{children:`The statement screams "find a period in the sequence". It's very easy to reach the same state anyway, given how narrow the board is. If we are at the exact same block, same wind position, and the unfilled cells at the top have the exact same shape, then everything that follows must be exactly the same.`}),`
`,(0,i.jsx)(o.p,{children:`Note: I've seen some algorithms that only check the height of each column, but I don't think that's sufficient. Consider:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`. . # . . . .
. # # # . . .
. # # # . . .
# # # # # # #
`})}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`. . # . . . .
. # # # . . .
. . # . . . .
# # # # # # #
`})}),`
`,(0,i.jsx)(o.p,{children:`The height of each column is the same, but the shape of the unfilled cells is different. If we drop block 3 and repeatedly move right except the last move, the final state is different:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`. . # . . . O
. # # # . . O
. # # # O O O
# # # # # # #
`})}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`. . # . . O .
. # # # . O .
. . # O O O .
# # # # # # #
`})}),`
`,(0,i.jsxs)(o.p,{children:[`This means we have to consider the shape of `,(0,i.jsx)(o.em,{children:`all`}),` unfilled cells at the top, only stopping when we reach a full barrier that cannot be penetrated by any block. I implemented a flood fill:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`unfilledTop :: Board -> Int -> Set (Int, Int)
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
`,(0,i.jsxs)(o.p,{children:[`Now we just need to add state tracking to `,(0,i.jsx)(o.code,{children:`dropBlocks`}),`. Both `,(0,i.jsx)(o.code,{children:`winds`}),` and `,(0,i.jsx)(o.code,{children:`blocks`}),` now get an extra index. The unfilled top cells' coordinates are relativized to the top row, so that they can be compared across different heights.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`dropBlocks blocksDropped board windSeq ((blockIndex, blockTemplate) : blocksTail) height seenStates heights target
  | blocksDropped == target = height
  | otherwise =
      let windSeqPos = fst (head windSeq)
          emptyTop = unfilledTop board height
          state = (blockIndex, windSeqPos, Set.map (\\(x, y) -> (x, y - height)) emptyTop)
       in case Map.lookup state seenStates of
            Nothing -> -- ...
            Just cycleStart -> -- ...
`})}),`
`,(0,i.jsx)(o.p,{children:`If the state hasn't been seen before, the logic is the same as before, just with the state and height added to the memos.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`Nothing ->
  let seenStates' = Map.insert state blocksDropped seenStates
      heights' = Map.insert blocksDropped height heights
      block = map (|+| (2, height + 3)) blockTemplate
      (block', windSeq') = dropBlock board block windSeq
      board' = Set.union board (Set.fromList block')
      height' = max height $ snd (head block') + 1
   in dropBlocks (blocksDropped + 1) board' windSeq' blocksTail height' seenStates' heights' target
`})}),`
`,(0,i.jsx)(o.p,{children:`If the state has been seen before, then we can stop and calculate the eventual height. We know that the cycle goes like this:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`t = 0: state0
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
`,(0,i.jsxs)(o.p,{children:[`Then the total height is the height at `,(0,i.jsx)(o.code,{children:`cycleStart`}),`, plus `,(0,i.jsx)(o.code,{children:`n`}),` times the height grown in a cycle, plus the height grown `,(0,i.jsx)(o.code,{children:`x`}),` steps into the cycle. `,(0,i.jsx)(o.code,{children:`n`}),` and `,(0,i.jsx)(o.code,{children:`x`}),` are just the quotient and remainder of `,(0,i.jsx)(o.code,{children:`(target - cycleStart) / cycleLength`}),`.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`Just cycleStart ->
  let cycleLen = blocksDropped - cycleStart
      cycleStartHeight = heights Map.! cycleStart
      cycleHeight = height - cycleStartHeight
      inCycle = target - cycleStart
      numCycles = inCycle \`div\` cycleLen
      remainder = inCycle \`mod\` cycleLen
      remainderHeight = (heights Map.! (cycleStart + remainder)) - cycleStartHeight
   in cycleStartHeight + numCycles * cycleHeight + remainderHeight
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};