import{u as i,j as e}from"./index-L6ckUcGi.js";import{F as o,a as r}from"./_components-DB3Df8DK.js";const s={tags:["BFS/DFS"],description:"Advent of Code 2022 - Day 18: Boiling Boulders, a problem that involves BFS/DFS. Solution written in Haskell, with detailed walkthrough and proof.",year:2022,day:18,title:"Advent of Code 2022 - Day 18: Boiling Boulders"};function a(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2022 - Day 18",e.jsx(n.span,{className:"subtitle",children:"Boiling Boulders"})]}),`
`,`
`,e.jsx(o,{frontMatter:s}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:"We want the total surface area. The contribution of each cube to the surface area is determined only by its neighbors: For each face, if it has a neighbor in that direction, the face doesn't contribute to the surface area; otherwise, it contributes 1."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`neighbors3d :: (Int, Int, Int) -> [(Int, Int, Int)]
neighbors3d (x, y, z) = [(x + 1, y, z), (x - 1, y, z), (x, y + 1, z), (x, y - 1, z), (x, y, z + 1), (x, y, z - 1)]

surfaceArea :: Set (Int, Int, Int) -> Int
surfaceArea cubes = Set.foldr (\\p -> (+ exposedSides p)) 0 cubes
  where
    exposedSides p = count (\`Set.notMember\` cubes) (neighbors3d p)
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["Now we want the ",e.jsx(n.em,{children:"exterior"})," surface area. The contribution of each face now needs to check more than its neighbors. The perfectly physically sensible solution is to immerge the thing in water and see how many faces touch water—this is flood filling, which is, again, implemented with BFS. We add one unit of padding around the whole shape, so that we can deterministically have a starting point outside the shape, as well as be sure that the water can eventually reach all faces of the shape without getting stuck in a corner."]}),`
`,e.jsx(n.p,{children:"Once we have the set of water cubes, we can check all faces to see if they are exposed to water. If a face is adjacent to a water cube, it contributes 1 to the exterior surface area."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`exposedArea :: Set (Int, Int, Int) -> Int
exposedArea cubes = Set.foldr (\\p -> (+ exposedSides p)) 0 cubes
  where
    minX = minimum (Set.map (\\(x, _, _) -> x) cubes) - 1
    maxX = maximum (Set.map (\\(x, _, _) -> x) cubes) + 1
    minY = minimum (Set.map (\\(_, y, _) -> y) cubes) - 1
    maxY = maximum (Set.map (\\(_, y, _) -> y) cubes) + 1
    minZ = minimum (Set.map (\\(_, _, z) -> z) cubes) - 1
    maxZ = maximum (Set.map (\\(_, _, z) -> z) cubes) + 1
    inBox (x, y, z) = x >= minX && x <= maxX && y >= minY && y <= maxY && z >= minZ && z <= maxZ
    start = (minX, minY, minZ)
    outsideAir = bfs (Seq.singleton start) (Set.singleton start)
    bfs :: Seq (Int, Int, Int) -> Set (Int, Int, Int) -> Set (Int, Int, Int)
    bfs Seq.Empty seen = seen
    bfs (p Seq.:<| q) seen =
      let next = [n | n <- neighbors3d p, inBox n, n \`Set.notMember\` cubes, n \`Set.notMember\` seen]
          seen' = foldr Set.insert seen next
          q' = q Seq.>< Seq.fromList next
       in bfs q' seen'
    exposedSides p = count (\`Set.member\` outsideAir) (neighbors3d p)
`})}),`
`,e.jsx(r,{frontMatter:s})]})}function d(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{d as default,s as frontMatter};
