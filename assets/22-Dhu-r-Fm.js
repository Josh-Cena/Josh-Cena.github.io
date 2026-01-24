import{u as m,j as e}from"./index-DH0P7Lag.js";import{C as v}from"./index-BhsuWj9V.js";import{P as S,a as M}from"./_components-BmaiIPu9.js";import"./_commonjsHelpers-Cpj98o6Y.js";const u={tags:["Grid walking","Geometry"],title:"Advent of Code 2022 - Day 22: Monkey Map",description:"Advent of Code 2022 - Day 22: Monkey Map, a problem that involves Grid walking and Geometry. Solution written in Haskell, with detailed walkthrough and proof.",year:2022,day:22};function w(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...m(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2022 - Day 22",e.jsx(n.span,{className:"subtitle",children:"Monkey Map"})]}),`
`,`
`,e.jsx(S,{frontMatter:u}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:"There's not much to say about part 1. I thought you need something fancy like precomputing the farthest reachable point in each direction for each cell, but it turns out you can just do the walk naïvely."}),`
`,e.jsx(n.p,{children:"The slightly tricky part is handling wraparound. I did a row scan followed by a column scan for the minimum/maximum points in each row/column. Then, when the current position goes out of bounds, I can just look up the corresponding point in the opposite direction."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`let rowBounds = Map.fromList
  [ (r, (minimum rowCells, maximum rowCells))
  | r <- [0..maxRow],
  let rowCells = [y | (x, y) <- Map.keys grid, x == r]
  ]
`})}),`
`,e.jsx(n.p,{children:"Wrap around is handled as we move one step:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`moveStep ::
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
`,e.jsxs(n.p,{children:["And then I have ",e.jsx(n.code,{children:"moveSteps"})," to move the specified number of steps until either a wall is hit (",e.jsx(n.code,{children:"moveStep"})," returns ",e.jsx(n.code,{children:"Nothing"}),") or the whole distance is walked."]}),`
`,e.jsx(n.p,{children:"Because the direction is an integer from 0 to 3, turning is about as convenient as using complex numbers."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`move ::
  Map (Int, Int) Char ->
  Map State State ->
  State ->
  String ->
  State
move _ _ (r, c, dir) "L" = (r, c, (dir - 1) \`mod\` 4)
move _ _ (r, c, dir) "R" = (r, c, (dir + 1) \`mod\` 4)
move board wraparound st stepsStr = moveSteps board wraparound st $ read stepsStr
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["OK, this turned out to be really intractable. I had to hardcode the wraparound rules for my input, because I have no idea how to do cube construction generically. I can't even figure out how to do it theoretically for my input; I had to actually get a piece of paper and fold it myself. Like ",e.jsx(n.a,{href:"/notes/aoc/2020/20/",children:"2020 day 20"}),", I represent each edge of each shape as one of T, L, B, R, and then represent wraparound as edge adjacency of the form ",e.jsx(n.code,{children:"(A, R) <-> (D, R')"}),"."]}),`
`,e.jsx(v,{code:(t,x,C,c,R)=>{const s={A:[2,0],B:[1,0],C:[1,1],D:[1,2],E:[0,2],F:[0,3]};t.translate(80/2,80/2),t.font="20px monospace",t.textAlign="center",t.textBaseline="middle";function g(o,r,d){o*=80,r*=80,t.strokeRect(o,r,80,80),t.fillStyle=c,t.fillText(d,o+80/2,r+80/2),t.fillStyle="teal",t.fillRect(o+4,r,72,4),t.fillStyle="goldenrod",t.fillRect(o+4,r+80-4,72,4),t.fillStyle="coral",t.fillRect(o,r+4,4,72),t.fillStyle="mediumorchid",t.fillRect(o+80-4,r+4,4,72),t.fillStyle=c}function a(o,r,d,j,h,l){t.beginPath();const p=s[o][0]+(r==="L"?0:r==="R"?1:.5),f=s[o][1]+(r==="T"?0:r==="B"?1:.5),y=s[h][0]+(l==="L"?0:l==="R"?1:.5),b=s[h][1]+(l==="T"?0:l==="B"?1:.5);t.moveTo(p*80,f*80),t.quadraticCurveTo((d+p)*80,(j+f)*80,y*80,b*80),t.stroke()}for(const[o,[r,d]]of Object.entries(s))g(r,d,o);a("C","L",-.5,0,"E","T"),a("C","R",.5,0,"A","B"),a("F","L",-1,-4,"B","T"),a("F","R",.5,0,"D","B"),a("F","B",3,-1,"A","T"),t.setLineDash([8,6]),a("B","L",-1.5,0,"E","L"),a("A","R",1,2,"D","R")},width:350,height:400}),`
`,e.jsxs(n.p,{children:['In the diagram above, the dashed lines are "trans" edges, meaning they connect ',e.jsx(n.code,{children:"X"})," to ",e.jsx(n.code,{children:"Y'"}),". This means that after edge translation, we also have to reflect about the center of the edge by doing a ",e.jsx(n.code,{children:"50 - coordinate"})," (the face width is 50). I hardcoded all of the exit positions and reenter positions."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`cubeWraparound :: Map State State
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
`,e.jsx(n.p,{children:"Since we have to do hardcoding for part 2 anyway, I also turned my part 1 into a hardcoded lookup table. Now, whenever I reach a state that's immediately outside the grid, I can just look up the corresponding state on the opposite side of the cube."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`moveStep ::
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
`})}),`
`,e.jsx(M,{frontMatter:u})]})}function L(i={}){const{wrapper:n}={...m(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(w,{...i})}):w(i)}export{L as default,u as frontMatter};
