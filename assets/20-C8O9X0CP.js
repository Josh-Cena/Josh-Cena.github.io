import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import{n,t as r}from"./_components-Bk2TMGF4.js";var i=e(),a={tags:[`Data structures`],title:`Advent of Code 2022 - Day 20: Grove Positioning System`,description:`Advent of Code 2022 - Day 20: Grove Positioning System, a problem that involves Data structures. Solution written in Haskell, with detailed walkthrough and proof.`,year:2022,day:20};function o(e){let o={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2022 - Day 20`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Grove Positioning System`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(o.p,{children:[`This kind of reminds me of `,(0,i.jsx)(o.a,{href:`/notes/aoc/2020/23/`,children:`2020 day 23`}),`, where we also have to turn things around a circular list, which I implemented as a linked list. This problem needs to implement similar operations. In pseudocode it looks like:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`for num in nums:
  pos = list.find(num)
  newPos = (pos + num) % (list.size - 1)
  list.move(pos, newPos)

zeroPos = list.find(0)
result =
  list.at((zeroPos + 1000) % list.size)
  + list.at((zeroPos + 2000) % list.size)
  + list.at((zeroPos + 3000) % list.size)
`})}),`
`,(0,i.jsx)(o.p,{children:`There are two tricky parts:`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`Numbers may repeat, so if we search by the value of the number, there may be multiple ones. Instead, we assign each number a unique ID, and search by that ID instead.`}),`
`,(0,i.jsxs)(o.li,{children:[`We need to modulo by `,(0,i.jsx)(o.code,{children:`list.size - 1`}),` instead of `,(0,i.jsx)(o.code,{children:`list.size`}),`, because the number is removed from the list before being reinserted, so the list size is one less than the original. Thinking about it in another way, `,(0,i.jsx)(o.code,{children:`n - 1`}),` and `,(0,i.jsx)(o.code,{children:`0`}),` are operationally equivalent: they both insert at the end of the list, so we avoid `,(0,i.jsx)(o.code,{children:`n - 1`}),`.`]}),`
`]}),`
`,(0,i.jsxs)(o.p,{children:[`Unlike 2020 day 23, the main difference is that the absolute index matters (not just the relative shifts), so a linked list can't work, unless you'd like to jump 5000 times to the target position. Whatever data structure we choose, we just need to implement three operations: `,(0,i.jsx)(o.code,{children:`at`}),`, `,(0,i.jsx)(o.code,{children:`find`}),`, and `,(0,i.jsx)(o.code,{children:`move`}),`. The trick is to stop thinking about `,(0,i.jsx)(o.code,{children:`pos`}),` as a physical position, but instead as an order. Then:`]}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:`at(pos)`}),`: returns the `,(0,i.jsx)(o.code,{children:`pos`}),`-th smallest element (by some key) in the list.`]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:`find(num)`}),`: returns the order of the element with the given ID.`]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:`move(pos, newPos)`}),`: removes the `,(0,i.jsx)(o.code,{children:`pos`}),`-th smallest element and reinserts it with a new key that makes it the `,(0,i.jsx)(o.code,{children:`newPos`}),`-th smallest element.`]}),`
`]}),`
`,(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:`at`}),` and `,(0,i.jsx)(o.code,{children:`find`}),` strongly suggest an `,(0,i.jsx)(o.a,{href:`https://en.wikipedia.org/wiki/Order_statistic_tree`,children:`order statistic tree`}),`. The trick for implementing `,(0,i.jsx)(o.code,{children:`move`}),` is to assign the new key as some number between the keys at `,(0,i.jsx)(o.code,{children:`newPos - 1`}),` and `,(0,i.jsx)(o.code,{children:`newPos`}),`. This way, the element will be in the middle of them without having to update the keys of all the other elements.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`function move(pos, newPos):
  num = list.at(pos)
  list.remove(num)
  if newPos == 0:
    newKey = list.at(0).key - 1
  else:
    newKey = (list.at(newPos - 1).key + list.at(newPos).key) / 2
  list.insert(num, key = newKey)
`})}),`
`,`
`,(0,i.jsxs)(o.p,{children:[`You know you are treading deep waters when there's basically no package to do this. I found `,(0,i.jsx)(o.a,{href:`https://hackage.haskell.org/package/order-statistic-tree`,children:`order-statistic-tree`}),`, but it's `,(0,i.jsxs)(o.a,{href:`https://github.com/lambdakazan/ostree/issues/2`,children:[`missing `,(0,i.jsx)(o.code,{children:`rank`})]}),`. I decided to just copy the code over. Thanks Shlok Datye!`]}),`
`,(0,i.jsxs)(o.p,{children:[`From the pseudocode above, we need each entry in the list to have two things: the number, and an ordering key. The `,(0,i.jsx)(o.code,{children:`OSTree`}),` type expects the entries to be orderable, so we implement `,(0,i.jsx)(o.code,{children:`Ord`}),` by just comparing the keys.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`type Key = Ratio Integer

data TreeEntry = TreeEntry {teKey :: Key, teNum :: Int} deriving (Eq, Show)

instance Ord TreeEntry where
  compare (TreeEntry {teKey = key1}) (TreeEntry {teKey = key2}) = compare key1 key2

type CList = OSTree TreeEntry
`})}),`
`,(0,i.jsxs)(o.p,{children:[`(By the way, I started by defining `,(0,i.jsx)(o.code,{children:`Key`}),` as `,(0,i.jsx)(o.code,{children:`Ratio Int`}),`, but it turned out that the keys can get very large and caused some overflow issues.)`]}),`
`,(0,i.jsx)(o.p,{children:`To do anything with tree entries, we need to know the key of the target number. Since I already mentioned that the numbers can repeat, all lookup data structures must be keyed by a unique ID, not the number itself. So we assign each number a unique ID, and store two mappings: from ID to key and to number. The IDs are just the indices of the input list. With these mappings, we just need to iterate over the IDs, mixing each corresponding number.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`solve :: [Int] -> Int
solve nums = groveCoords zeroKey mixed
  where
    zeroId = fromJust $ elemIndex 0 nums
    ids = [0 .. length nums - 1]
    keys = map fromIntegral ids :: [Key]
    idToNum = Map.fromList $ zip ids nums
    idToKey = Map.fromList $ zip ids keys
    tree = OST.fromList $ zipWith TreeEntry keys nums
    (mixed, idToKey') = foldl' (mix idToNum) (tree, idToKey) ids
    zeroKey = idToKey' Map.! zeroId
`})}),`
`,(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:`mix`}),` itself is just the implementation of the pseudocode above. Given one ID, it finds the corresponding key and number, calculates the new key, and updates the tree and the mapping.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`mix :: Map Int Int -> (CList, Map Int Key) -> Int -> (CList, Map Int Key)
mix idToNum (tree, idToKey) id = (tree'', Map.insert id key' idToKey)
  where
    num = idToNum Map.! id
    entry = TreeEntry (idToKey Map.! id) num
    rank = fromJust $ OST.rank tree entry
    rank' = (rank + num) \`mod\` (OST.size tree - 1)
    tree' = OST.delete entry tree
    keyLeft = teKey $ fromJust $ OST.select tree' (rank' - 1)
    keyRight = teKey $ fromJust $ OST.select tree' rank'
    key' = if rank' == 0 then keyRight - 1 else (keyLeft + keyRight) / 2
    newEntry = TreeEntry key' num
    tree'' = OST.insert newEntry tree'
`})}),`
`,(0,i.jsxs)(o.p,{children:[`Finally, to get the 1000th, 2000th, and 3000th numbers after the zero, we just need to find the key of the zero entry (already done in the `,(0,i.jsx)(o.code,{children:`solve`}),` function), and then select the entries at the corresponding ranks.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-hs`,children:`groveCoords :: Key -> CList -> Int
groveCoords zeroKey tree =
  sumMap (teNum . fromJust . OST.select tree . (\`mod\` n) . (+ zeroRank)) [1000, 2000, 3000]
  where
    n = OST.size tree
    zeroRank = fromJust $ OST.rank tree (TreeEntry zeroKey 0)
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`Multiplication of the numbers don't change the algorithm at all (it's used to shoot down solutions that physically move the element `,(0,i.jsx)(o.code,{children:`num`}),` times). Repeating the mixing 10 times just requires replicating the IDs 10 times when iterating over them.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-diff`,children:`- (mixed, idToKey') = foldl' (mix idToNum) (tree, idToKey) ids
+ (mixed, idToKey') = foldl' (mix idToNum) (tree, idToKey) $ concat $ replicate rounds ids
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};