import{u as o,j as e}from"./index-tdPHbA8R.js";import{F as s,a as r}from"./_components-CqTbvCTQ.js";const a={description:"Advent of Code 2022 - Day 9: Rope Bridge. Written in Haskell.",tags:["Grid walking"],year:2022,day:9,title:"AoC 2022 D9: Rope Bridge"};function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"AoC 2022 D9: Rope Bridge"}),`
`,`
`,e.jsx(s,{frontMatter:a}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:"We have a tail that's always following the head, and we need to record the positions of the tail. Naturally we'd like to fold over the list of moves, tracking the current positions of the head and tail as well as the set of tail positions."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`type State = ((Int, Int), (Int, Int), Set (Int, Int))

(_, set) = foldl' makeMove ((0, 0), (0, 0), Set.empty) moves

makeMove :: State -> ((Int, Int), Int) -> State
`})}),`
`,e.jsx(n.p,{children:"The movement itself is done recursively over the number of steps. If we have no more steps to take, return the state as-is."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`makeMove s (_, 0) = s
`})}),`
`,e.jsx(n.p,{children:"Otherwise, we move the head one step in the given direction, and then move the tail."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`makeMove (chainHead, chainTail, set) (dir, count) =
  makeMove (chainHead', chainTail', Set.insert chainTail' set) (dir, count - 1)
  where
    chainHead' = chainHead |+| dir
    chainTail' = moveTail chainHead' chainTail
`})}),`
`,e.jsxs(n.p,{children:["(By the way, I defined ",e.jsx(n.code,{children:"|+|"})," and ",e.jsx(n.code,{children:"|-|"})," for 2D vector arithmetic so I don't have to load ",e.jsx(n.code,{children:"Data.Vector"}),".)"]}),`
`,e.jsxs(n.p,{children:["In ",e.jsx(n.code,{children:"moveTail"}),", we check the distance between the head and tail. If it's more than 1 in either direction, we need to move the tail one step towards the head."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`moveTail :: (Int, Int) -> (Int, Int) -> (Int, Int)
moveTail h' t
  | max (abs dx) (abs dy) < 2 = t
  | otherwise = t |+| (clamp (-1, 1) dx, clamp (-1, 1) dy)
  where
    (dx, dy) = h' |-| t
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["Now with 10 knots, we just need to upgrade the state to a collection of 10 positions. Most of the logic is the same, except I now use ",e.jsx(n.code,{children:"mapAccumL"})," to move each knot in turn, keeping track of the previous knot's position. Conveniently, this also returns the tail position so we can add it to the set."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`type State = ([(Int, Int)], Set (Int, Int))

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
`})}),`
`,e.jsx(r,{frontMatter:a})]})}function d(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{d as default,a as frontMatter};
