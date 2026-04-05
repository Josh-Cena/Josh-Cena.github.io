import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{n,t as r}from"./_components-DcdEf7Vf.js";var i=e();function a(e){let a={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2022 - Day 9`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Rope Bridge`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.h2,{children:`Part 1`}),`
`,(0,i.jsx)(a.p,{children:`We have a tail that's always following the head, and we need to record the positions of the tail. Naturally we'd like to fold over the list of moves, tracking the current positions of the head and tail as well as the set of tail positions.`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-hs`,children:`type State = ((Int, Int), (Int, Int), Set (Int, Int))

(_, set) = foldl' makeMove ((0, 0), (0, 0), Set.empty) moves

makeMove :: State -> ((Int, Int), Int) -> State
`})}),`
`,(0,i.jsx)(a.p,{children:`The movement itself is done recursively over the number of steps. If we have no more steps to take, return the state as-is.`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-hs`,children:`makeMove s (_, 0) = s
`})}),`
`,(0,i.jsx)(a.p,{children:`Otherwise, we move the head one step in the given direction, and then move the tail.`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-hs`,children:`makeMove (chainHead, chainTail, set) (dir, count) =
  makeMove (chainHead', chainTail', Set.insert chainTail' set) (dir, count - 1)
  where
    chainHead' = chainHead |+| dir
    chainTail' = moveTail chainHead' chainTail
`})}),`
`,(0,i.jsxs)(a.p,{children:[`(By the way, I defined `,(0,i.jsx)(a.code,{children:`|+|`}),` and `,(0,i.jsx)(a.code,{children:`|-|`}),` for 2D vector arithmetic so I don't have to load `,(0,i.jsx)(a.code,{children:`Data.Vector`}),`.)`]}),`
`,(0,i.jsxs)(a.p,{children:[`In `,(0,i.jsx)(a.code,{children:`moveTail`}),`, we check the distance between the head and tail. If it's more than 1 in either direction, we need to move the tail one step towards the head.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-hs`,children:`moveTail :: (Int, Int) -> (Int, Int) -> (Int, Int)
moveTail h' t
  | max (abs dx) (abs dy) < 2 = t
  | otherwise = t |+| (clamp (-1, 1) dx, clamp (-1, 1) dy)
  where
    (dx, dy) = h' |-| t
`})}),`
`,(0,i.jsx)(a.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(a.p,{children:[`Now with 10 knots, we just need to upgrade the state to a collection of 10 positions. Most of the logic is the same, except I now use `,(0,i.jsx)(a.code,{children:`mapAccumL`}),` to move each knot in turn, keeping track of the previous knot's position. Conveniently, this also returns the tail position so we can add it to the set.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-hs`,children:`type State = ([(Int, Int)], Set (Int, Int))

makeMove (chainHead : rest, set) (dir, count) =
  makeMove (chainHead' : chain', Set.insert chainTail' set) (dir, count - 1)
  where
    chainHead' = chainHead |+| dir
    (chainTail', chain') =
      mapAccumL
        ( \\prev cur ->
            let cur' = moveTail prev cur in (cur', cur')
        )
        chainHead'
        rest
`})}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Grid walking`],title:`Advent of Code 2022 - Day 9: Rope Bridge`,description:`Advent of Code 2022 - Day 9: Rope Bridge, a problem that involves Grid walking. Solution written in Haskell, with detailed walkthrough and proof.`,year:2022,day:9};export{o as default};