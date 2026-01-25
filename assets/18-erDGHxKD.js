import{u as a,j as n}from"./index-CYq-bCfF.js";import{C as d}from"./index-X8odWltj.js";import{P as l,a as h}from"./_components-DytvGw39.js";import"./_commonjsHelpers-Cpj98o6Y.js";const i={tags:["BFS/DFS","Data structures","Geometry"],title:"Advent of Code 2024 - Day 18: RAM Run",description:"Advent of Code 2024 - Day 18: RAM Run, a problem that involves BFS/DFS, Data structures, and Geometry. Solution written in OCaml, with detailed walkthrough and proof.",year:2024,day:18};function s(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(o.h1,{children:["Advent of Code 2024 - Day 18",n.jsx(o.span,{className:"subtitle",children:"RAM Run"})]}),`
`,`
`,n.jsx(l,{frontMatter:i}),`
`,n.jsx(o.p,{children:"This problem pays tribute to 2017 day 2 (unimplemented)."}),`
`,n.jsx(o.h2,{children:"Part 1"}),`
`,n.jsx(o.p,{children:"Finding the shortest path in a maze with equal costs is a straightforward BFS. I need not show how BFS works at this point."}),`
`,n.jsx(o.h2,{children:"Part 2"}),`
`,n.jsx(o.p,{children:"To be honest, this problem is a bit... underwhelming? I was expecting a shortest path finding problem where the maze changes every second. But I guess that would be hard because of exploding states."}),`
`,n.jsx(o.p,{children:"Instead, we are just asked for the time when the path is cut off. If you've played maze games for a while, you know that a path exists if and only if there does not exist a wall that cuts across the whole maze."}),`
`,n.jsx(d,{code:(e,m,u,r,c)=>{e.lineWidth=2,e.beginPath(),e.moveTo(1,1),e.lineTo(1,199),e.lineTo(180,199),e.moveTo(20,1),e.lineTo(199,1),e.lineTo(199,199),e.moveTo(1,90),e.lineTo(100,90),e.moveTo(100,80),e.lineTo(199,80),e.stroke(),e.strokeStyle="red",e.lineWidth=1,e.beginPath(),e.moveTo(10,1),e.lineTo(10,85),e.lineTo(190,85),e.lineTo(190,199),e.stroke(),e.lineWidth=2,e.strokeStyle=r,e.beginPath(),e.moveTo(301,1),e.lineTo(301,199),e.lineTo(480,199),e.moveTo(320,1),e.lineTo(499,1),e.lineTo(499,199),e.moveTo(301,90),e.lineTo(400,90),e.lineTo(400,80),e.lineTo(499,80),e.stroke(),e.strokeStyle="red",e.lineWidth=1,e.beginPath(),e.moveTo(310,1),e.lineTo(310,85),e.lineTo(390,85),e.moveTo(380,75),e.lineTo(400,95),e.moveTo(400,75),e.lineTo(380,95),e.stroke()},width:500,height:200}),`
`,n.jsxs(o.p,{children:["Therefore, the question is: as we add more walls, when do we connect the top-right border to the bottom-left border? This is a great use case for the union-find data structure. Essentially, we have a list of connected walls, and each time we add a wall, we connect the components of its neighboring walls. If the top-right border and the bottom-left border are in the same component, then we know that the path is cut off. I use the ",n.jsx(o.a,{href:"https://ocaml.org/p/unionFind/20220122/doc/index.html",children:n.jsx(o.code,{children:"unionFind"})})," package for this."]}),`
`,n.jsxs(o.p,{children:["Each time a wall is added, a ",n.jsx(o.code,{children:"UnionFind"})," node is allocated. Initially, it only includes the borders (note that ",n.jsx(o.code,{children:"points"})," are now shifted by 1 from the input so that they start at 1, leaving the borders at 0 and ",n.jsx(o.code,{children:"w - 1"}),"/",n.jsx(o.code,{children:"h - 1"}),"):"]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-ocaml",children:`for x = 1 to w - 2 do
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
`,n.jsxs(o.p,{children:["Then I join walls within the bottom-left border and top-right border (but at this time the two borders are still not connected due to the openings at the start and end points). ",n.jsx(o.code,{children:"try_union"})," just calls ",n.jsx(o.code,{children:"UnionFind.union"})," on two points if they are in-bounds and not ",n.jsx(o.code,{children:"None"}),":"]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-ocaml",children:`for x = 1 to w - 1 do
  try_union x 0 (x - 1) 0;
  try_union x (h - 1) (x - 1) (h - 1)
done;
for y = 1 to h - 1 do
  try_union 0 y 0 (y - 1);
  try_union (w - 1) y (w - 1) (y - 1)
done;
`})}),`
`,n.jsx(o.p,{children:"Now we just iterate through the additional walls, each time merging it with all its neighbors, until the top-right border and the bottom-left border are in the same component."}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-ocaml",children:`let first_blocking =
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
`})}),`
`,n.jsx(h,{frontMatter:i})]})}function g(t={}){const{wrapper:o}={...a(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(s,{...t})}):s(t)}export{g as default,i as frontMatter};
