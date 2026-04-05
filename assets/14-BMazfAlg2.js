import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{n,t as r}from"./_components-DcdEf7Vf.js";var i=e();function a(e){let a={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2022 - Day 14`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Regolith Reservoir`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(a.p,{children:[`I build the literal grid as a `,(0,i.jsx)(a.code,{children:`Map (Int, Int) Char`}),` (exactly same representation as the problem statement). Then I drop sand. Each time, I check if the sand can move down, then down-left, then down-right. If it can't move (same position after moving down), I add it to the grid. It also stops when the sand falls to `,(0,i.jsx)(a.code,{children:`maxY`}),`, to prevent the sand actually falling indefinitely into the abyss.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-hs`,children:`dropSand :: Int -> Map (Int, Int) Char -> (Map (Int, Int) Char, (Int, Int))
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
`,(0,i.jsxs)(a.p,{children:[`Now I can drop an indefinite number of sands using `,(0,i.jsx)(a.code,{children:`iterate`}),`. Thanks to laziness, I don't even have to define a stopping condition here. It returns an infinite list of the positions of the dropped sands, and I can just take as many as I need.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-hs`,children:`dropSands :: Int -> Map (Int, Int) Char -> [(Int, Int)]
dropSands maxY grid = map snd $ iterate (\\(m, _) -> dropSand maxY m) $ dropSand maxY grid
`})}),`
`,(0,i.jsxs)(a.p,{children:[`In part 1, I need the number of sands before a sand falls into the abyss, i.e., its y position reaches `,(0,i.jsx)(a.code,{children:`ymax`}),` (which is the bottommost line).`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-hs`,children:`let ymax = maximum $ map snd $ concat lines
print $ countWhile (\\(_, y) -> y < ymax) (dropSands ymax grid)
`})}),`
`,(0,i.jsx)(a.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(a.p,{children:[`Same thing, but this time `,(0,i.jsx)(a.code,{children:`maxY`}),` is `,(0,i.jsx)(a.code,{children:`ymax + 1`}),` (one cell above the floor). And I count until the position reaches the source.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-hs`,children:`let ymax = maximum $ map snd $ concat lines
print $ 1 + countWhile (/= sandSource) (dropSands (ymax + 1) grid)
`})}),`
`,(0,i.jsx)(a.p,{children:`I add 1 to the count because the sand that reaches the source should still be counted.`}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Physics`],title:`Advent of Code 2022 - Day 14: Regolith Reservoir`,description:`Advent of Code 2022 - Day 14: Regolith Reservoir, a problem that involves Physics. Solution written in Haskell, with detailed walkthrough and proof.`,year:2022,day:14};export{o as default};