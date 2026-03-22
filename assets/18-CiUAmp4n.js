import{t as e}from"./jsx-runtime-D57Vegw5.js";import{n as t}from"./lib-rxHYdfSX.js";import{t as n}from"./Canvas-yI4UjmfO.js";import{n as r,t as i}from"./_components-BHKTFOi1.js";var a=e(),o={tags:[`BFS/DFS`,`Data structures`,`Geometry`],title:`Advent of Code 2024 - Day 18: RAM Run`,description:`Advent of Code 2024 - Day 18: RAM Run, a problem that involves BFS/DFS, Data structures, and Geometry. Solution written in OCaml, with detailed walkthrough and proof.`,year:2024,day:18};function s(e){let s={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.h1,{children:[`Advent of Code 2024 - Day 18`,(0,a.jsx)(s.span,{className:`subtitle`,children:`RAM Run`})]}),(0,a.jsx)(r,{frontMatter:o}),`
`,(0,a.jsx)(s.p,{children:`This problem pays tribute to 2017 day 2 (unimplemented).`}),`
`,(0,a.jsx)(s.h2,{children:`Part 1`}),`
`,(0,a.jsx)(s.p,{children:`Finding the shortest path in a maze with equal costs is a straightforward BFS. I need not show how BFS works at this point.`}),`
`,(0,a.jsx)(s.h2,{children:`Part 2`}),`
`,(0,a.jsx)(s.p,{children:`To be honest, this problem is a bit... underwhelming? I was expecting a shortest path finding problem where the maze changes every second. But I guess that would be hard because of exploding states.`}),`
`,(0,a.jsx)(s.p,{children:`Instead, we are just asked for the time when the path is cut off. If you've played maze games for a while, you know that a path exists if and only if there does not exist a wall that cuts across the whole maze.`}),`
`,(0,a.jsx)(n,{code:(e,t,n,r,i)=>{e.lineWidth=2,e.beginPath(),e.moveTo(1,1),e.lineTo(1,199),e.lineTo(180,199),e.moveTo(20,1),e.lineTo(199,1),e.lineTo(199,199),e.moveTo(1,90),e.lineTo(100,90),e.moveTo(100,80),e.lineTo(199,80),e.stroke(),e.strokeStyle=`red`,e.lineWidth=1,e.beginPath(),e.moveTo(10,1),e.lineTo(10,85),e.lineTo(190,85),e.lineTo(190,199),e.stroke(),e.lineWidth=2,e.strokeStyle=r,e.beginPath(),e.moveTo(301,1),e.lineTo(301,199),e.lineTo(480,199),e.moveTo(320,1),e.lineTo(499,1),e.lineTo(499,199),e.moveTo(301,90),e.lineTo(400,90),e.lineTo(400,80),e.lineTo(499,80),e.stroke(),e.strokeStyle=`red`,e.lineWidth=1,e.beginPath(),e.moveTo(310,1),e.lineTo(310,85),e.lineTo(390,85),e.moveTo(380,75),e.lineTo(400,95),e.moveTo(400,75),e.lineTo(380,95),e.stroke()},width:500,height:200}),`
`,(0,a.jsxs)(s.p,{children:[`Therefore, the question is: as we add more walls, when do we connect the top-right border to the bottom-left border? This is a great use case for the union-find data structure. Essentially, we have a list of connected walls, and each time we add a wall, we connect the components of its neighboring walls. If the top-right border and the bottom-left border are in the same component, then we know that the path is cut off. I use the `,(0,a.jsx)(s.a,{href:`https://ocaml.org/p/unionFind/20220122/doc/index.html`,children:(0,a.jsx)(s.code,{children:`unionFind`})}),` package for this.`]}),`
`,(0,a.jsxs)(s.p,{children:[`Each time a wall is added, a `,(0,a.jsx)(s.code,{children:`UnionFind`}),` node is allocated. Initially, it only includes the borders (note that `,(0,a.jsx)(s.code,{children:`points`}),` are now shifted by 1 from the input so that they start at 1, leaving the borders at 0 and `,(0,a.jsx)(s.code,{children:`w - 1`}),`/`,(0,a.jsx)(s.code,{children:`h - 1`}),`):`]}),`
`,(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:`language-ocaml`,children:`for x = 1 to w - 2 do
  cells.(0).(x) <- Some (UnionFind.make (x, 0));
  cells.(h - 1).(x) <- Some (UnionFind.make (x, h - 1))
done;
for y = 1 to h - 2 do
  cells.(y).(0) <- Some (UnionFind.make (0, y));
  cells.(y).(w - 1) <- Some (UnionFind.make (w - 1, y))
done;
cells.(0).(w - 1) <- Some (UnionFind.make (w - 1, 0));
cells.(h - 1).(0) <- Some (UnionFind.make (0, h - 1));
`})}),`
`,(0,a.jsxs)(s.p,{children:[`Then I join walls within the bottom-left border and top-right border (but at this time the two borders are still not connected due to the openings at the start and end points). `,(0,a.jsx)(s.code,{children:`try_union`}),` just calls `,(0,a.jsx)(s.code,{children:`UnionFind.union`}),` on two points if they are in-bounds and not `,(0,a.jsx)(s.code,{children:`None`}),`:`]}),`
`,(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:`language-ocaml`,children:`for x = 1 to w - 1 do
  try_union x 0 (x - 1) 0;
  try_union x (h - 1) (x - 1) (h - 1)
done;
for y = 1 to h - 1 do
  try_union 0 y 0 (y - 1);
  try_union (w - 1) y (w - 1) (y - 1)
done;
`})}),`
`,(0,a.jsx)(s.p,{children:`Now we just iterate through the additional walls, each time merging it with all its neighbors, until the top-right border and the bottom-left border are in the same component.`}),`
`,(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:`language-ocaml`,children:`let first_blocking =
  List.find
    (fun (x, y) ->
      cells.(y).(x) <- Some (UnionFind.make (x, y));
      for dx = -1 to 1 do
        for dy = -1 to 1 do
          if dx <> 0 || dy <> 0 then try_union x y (x + dx) (y + dy)
        done
      done;
      UnionFind.eq (Option.get cells.(1).(0)) (Option.get cells.(0).(1)))
    points
`})}),(0,a.jsx)(i,{frontMatter:o})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}export{o as n,c as t};