import{u as s,j as n}from"./index-DH3w8YvN.js";import{P as i,a as r}from"./_components-X9vtOlXN.js";import"./_commonjsHelpers-Cpj98o6Y.js";const a={tags:["Physics"],title:"Advent of Code 2022 - Day 14: Regolith Reservoir",description:"Advent of Code 2022 - Day 14: Regolith Reservoir, a problem that involves Physics. Solution written in Haskell, with detailed walkthrough and proof.",year:2022,day:14};function o(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.h1,{children:["Advent of Code 2022 - Day 14",n.jsx(e.span,{className:"subtitle",children:"Regolith Reservoir"})]}),`
`,`
`,n.jsx(i,{frontMatter:a}),`
`,n.jsx(e.h2,{children:"Part 1"}),`
`,n.jsxs(e.p,{children:["I build the literal grid as a ",n.jsx(e.code,{children:"Map (Int, Int) Char"})," (exactly same representation as the problem statement). Then I drop sand. Each time, I check if the sand can move down, then down-left, then down-right. If it can't move (same position after moving down), I add it to the grid. It also stops when the sand falls to ",n.jsx(e.code,{children:"maxY"}),", to prevent the sand actually falling indefinitely into the abyss."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-hs",children:`dropSand :: Int -> Map (Int, Int) Char -> (Map (Int, Int) Char, (Int, Int))
dropSand maxY grid = (Map.insert finalPos 'o' grid, finalPos)
  where
    finalPos = untilSame moveDown sandSource
    moveDown p
      | snd p == maxY = p
      | not $ Map.member down grid = down
      | not $ Map.member downLeft grid = downLeft
      | not $ Map.member downRight grid = downRight
      | otherwise = p
      where
        down = p |+| (0, 1)
        downLeft = p |+| (-1, 1)
        downRight = p |+| (1, 1)

untilSame :: (Eq a) => (a -> a) -> a -> a
untilSame f x
  | x == x' = x
  | otherwise = untilSame f x'
  where
    x' = f x
`})}),`
`,n.jsxs(e.p,{children:["Now I can drop an indefinite number of sands using ",n.jsx(e.code,{children:"iterate"}),". Thanks to laziness, I don't even have to define a stopping condition here. It returns an infinite list of the positions of the dropped sands, and I can just take as many as I need."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-hs",children:`dropSands :: Int -> Map (Int, Int) Char -> [(Int, Int)]
dropSands maxY grid = map snd $ iterate (\\(m, _) -> dropSand maxY m) $ dropSand maxY grid
`})}),`
`,n.jsxs(e.p,{children:["In part 1, I need the number of sands before a sand falls into the abyss, i.e., its y position reaches ",n.jsx(e.code,{children:"ymax"})," (which is the bottommost line)."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-hs",children:`let ymax = maximum $ map snd $ concat lines
print $ countWhile (\\(_, y) -> y < ymax) (dropSands ymax grid)
`})}),`
`,n.jsx(e.h2,{children:"Part 2"}),`
`,n.jsxs(e.p,{children:["Same thing, but this time ",n.jsx(e.code,{children:"maxY"})," is ",n.jsx(e.code,{children:"ymax + 1"})," (one cell above the floor). And I count until the position reaches the source."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-hs",children:`let ymax = maximum $ map snd $ concat lines
print $ 1 + countWhile (/= sandSource) (dropSands (ymax + 1) grid)
`})}),`
`,n.jsx(e.p,{children:"I add 1 to the count because the sand that reaches the source should still be counted."}),`
`,n.jsx(r,{frontMatter:a})]})}function c(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{c as default,a as frontMatter};
