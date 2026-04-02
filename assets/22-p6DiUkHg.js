import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import{t as n}from"./Canvas-D3s_pbEj.js";import{n as r,t as i}from"./_components-BiUCgGl-.js";var a=e(),o={tags:[`Grid walking`,`Geometry`],title:`Advent of Code 2022 - Day 22: Monkey Map`,description:`Advent of Code 2022 - Day 22: Monkey Map, a problem that involves Grid walking and Geometry. Solution written in Haskell, with detailed walkthrough and proof.`,year:2022,day:22};function s(e){let s={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.h1,{children:[`Advent of Code 2022 - Day 22`,(0,a.jsx)(s.span,{className:`subtitle`,children:`Monkey Map`})]}),(0,a.jsx)(r,{frontMatter:o}),`
`,(0,a.jsx)(s.h2,{children:`Part 1`}),`
`,(0,a.jsx)(s.p,{children:`There's not much to say about part 1. I thought you need something fancy like precomputing the farthest reachable point in each direction for each cell, but it turns out you can just do the walk naïvely.`}),`
`,(0,a.jsx)(s.p,{children:`The slightly tricky part is handling wraparound. I did a row scan followed by a column scan for the minimum/maximum points in each row/column. Then, when the current position goes out of bounds, I can just look up the corresponding point in the opposite direction.`}),`
`,(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:`language-hs`,children:`let rowBounds = Map.fromList
  [ (r, (minimum rowCells, maximum rowCells))
  | r <- [0..maxRow],
  let rowCells = [y | (x, y) <- Map.keys grid, x == r]
  ]
`})}),`
`,(0,a.jsx)(s.p,{children:`Wrap around is handled as we move one step:`}),`
`,(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:`language-hs`,children:`moveStep ::
  Map (Int, Int) Char ->
  Map State State ->
  State ->
  Maybe State
moveStep board wraparound (r, c, dir) =
  if board Map.! (r', c') == '#' then Nothing else Just st''
  where
    st' = case dir of
      3 -> (r - 1, c, dir)
      1 -> (r + 1, c, dir)
      2 -> (r, c - 1, dir)
      0 -> (r, c + 1, dir)
      _ -> error "invalid direction"
    st'' = case dir of
      3 -> let (minR, maxR) = colBounds Map.! c in if r' < minR then (maxR, c, dir) else st'
      -- ...
    (r', c', _) = st''
`})}),`
`,(0,a.jsxs)(s.p,{children:[`And then I have `,(0,a.jsx)(s.code,{children:`moveSteps`}),` to move the specified number of steps until either a wall is hit (`,(0,a.jsx)(s.code,{children:`moveStep`}),` returns `,(0,a.jsx)(s.code,{children:`Nothing`}),`) or the whole distance is walked.`]}),`
`,(0,a.jsx)(s.p,{children:`Because the direction is an integer from 0 to 3, turning is about as convenient as using complex numbers.`}),`
`,(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:`language-hs`,children:`move ::
  Map (Int, Int) Char ->
  Map State State ->
  State ->
  String ->
  State
move _ _ (r, c, dir) "L" = (r, c, (dir - 1) \`mod\` 4)
move _ _ (r, c, dir) "R" = (r, c, (dir + 1) \`mod\` 4)
move board wraparound st stepsStr = moveSteps board wraparound st $ read stepsStr
`})}),`
`,(0,a.jsx)(s.h2,{children:`Part 2`}),`
`,(0,a.jsxs)(s.p,{children:[`OK, this turned out to be really intractable. I had to hardcode the wraparound rules for my input, because I have no idea how to do cube construction generically. I can't even figure out how to do it theoretically for my input; I had to actually get a piece of paper and fold it myself. Like `,(0,a.jsx)(s.a,{href:`/notes/aoc/2020/20/`,children:`2020 day 20`}),`, I represent each edge of each shape as one of T, L, B, R, and then represent wraparound as edge adjacency of the form `,(0,a.jsx)(s.code,{children:`(A, R) <-> (D, R')`}),`.`]}),`
`,(0,a.jsx)(n,{code:(e,t,n,r,i)=>{let a={A:[2,0],B:[1,0],C:[1,1],D:[1,2],E:[0,2],F:[0,3]};e.translate(80/2,80/2),e.font=`20px monospace`,e.textAlign=`center`,e.textBaseline=`middle`;function o(t,n,i){t*=80,n*=80,e.strokeRect(t,n,80,80),e.fillStyle=r,e.fillText(i,t+80/2,n+80/2),e.fillStyle=`teal`,e.fillRect(t+4,n,72,4),e.fillStyle=`goldenrod`,e.fillRect(t+4,n+80-4,72,4),e.fillStyle=`coral`,e.fillRect(t,n+4,4,72),e.fillStyle=`mediumorchid`,e.fillRect(t+80-4,n+4,4,72),e.fillStyle=r}function s(t,n,r,i,o,s){e.beginPath();let c=a[t][0]+(n===`L`?0:n===`R`?1:.5),l=a[t][1]+(n===`T`?0:n===`B`?1:.5),u=a[o][0]+(s===`L`?0:s===`R`?1:.5),d=a[o][1]+(s===`T`?0:s===`B`?1:.5);e.moveTo(c*80,l*80),e.quadraticCurveTo((r+c)*80,(i+l)*80,u*80,d*80),e.stroke()}for(let[e,[t,n]]of Object.entries(a))o(t,n,e);s(`C`,`L`,-.5,0,`E`,`T`),s(`C`,`R`,.5,0,`A`,`B`),s(`F`,`L`,-1,-4,`B`,`T`),s(`F`,`R`,.5,0,`D`,`B`),s(`F`,`B`,3,-1,`A`,`T`),e.setLineDash([8,6]),s(`B`,`L`,-1.5,0,`E`,`L`),s(`A`,`R`,1,2,`D`,`R`)},width:350,height:400}),`
`,(0,a.jsxs)(s.p,{children:[`In the diagram above, the dashed lines are "trans" edges, meaning they connect `,(0,a.jsx)(s.code,{children:`X`}),` to `,(0,a.jsx)(s.code,{children:`Y'`}),`. This means that after edge translation, we also have to reflect about the center of the edge by doing a `,(0,a.jsx)(s.code,{children:`50 - coordinate`}),` (the face width is 50). I hardcoded all of the exit positions and reenter positions.`]}),`
`,(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:`language-hs`,children:`cubeWraparound :: Map State State
cubeWraparound =
  Map.fromList
    ( [((r, 50, 2), (151 - r, 1, 0)) | r <- [1 .. 50]] -- (B, left) -- (E, left')
        ++ [((r, 151, 0), (151 - r, 100, 2)) | r <- [1 .. 50]] -- (A, right) -- (D, right')
        ++ [((r, 50, 2), (101, r - 50, 1)) | r <- [51 .. 100]] -- (C, left) -- (E, up)
        ++ [((r, 101, 0), (50, r + 50, 3)) | r <- [51 .. 100]] -- (C, right) -- (A, down)
        ++ [((r, 0, 2), (151 - r, 51, 0)) | r <- [101 .. 150]] -- (E, left) -- (B, left')
        ++ [((r, 101, 0), (151 - r, 150, 2)) | r <- [101 .. 150]] -- (D, right) -- (A, right')
        ++ [((r, 0, 2), (1, r - 100, 1)) | r <- [151 .. 200]] -- (F, left) -- (B, up)
        ++ [((r, 51, 0), (150, r - 100, 3)) | r <- [151 .. 200]] -- (F, right) -- (D, down)
        ++ [((100, c, 3), (c + 50, 51, 0)) | c <- [1 .. 50]] -- (E, up) -- (C, left)
        ++ [((201, c, 1), (1, c + 100, 1)) | c <- [1 .. 50]] -- (F, down) -- (A, up)
        ++ [((0, c, 3), (c + 100, 1, 0)) | c <- [51 .. 100]] -- (B, up) -- (F, left)
        ++ [((151, c, 1), (c + 100, 50, 2)) | c <- [51 .. 100]] -- (D, down) -- (F, right)
        ++ [((0, c, 3), (200, c - 100, 3)) | c <- [101 .. 150]] -- (A, up) -- (F, down)
        ++ [((51, c, 1), (c - 50, 100, 2)) | c <- [101 .. 150]] -- (A, down) -- (C, right)
    )
`})}),`
`,(0,a.jsx)(s.p,{children:`Since we have to do hardcoding for part 2 anyway, I also turned my part 1 into a hardcoded lookup table. Now, whenever I reach a state that's immediately outside the grid, I can just look up the corresponding state on the opposite side of the cube.`}),`
`,(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:`language-hs`,children:`moveStep ::
  Map (Int, Int) Char ->
  Map State State ->
  State ->
  Maybe State
moveStep board wraparound (r, c, dir) =
  if board Map.! (r', c') == '#' then Nothing else Just st''
  where
    st' = case dir of
      3 -> (r - 1, c, dir)
      1 -> (r + 1, c, dir)
      2 -> (r, c - 1, dir)
      0 -> (r, c + 1, dir)
      _ -> error "invalid direction"
    st'' = fromMaybe st' $ Map.lookup st' wraparound
    (r', c', _) = st''
`})}),(0,a.jsx)(i,{frontMatter:o})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}export{o as n,c as t};