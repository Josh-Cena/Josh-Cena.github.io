import{u as o,j as n}from"./index-BVdbyz0p.js";import{F as i,a as s}from"./_components-ozm2G8yB.js";const a={tags:["Grid walking"],description:"Advent of Code 2024 - Day 4: Ceres Search, a problem that involves Grid walking. Solution written in OCaml, with detailed walkthrough and proof.",year:2024,day:4,title:"Advent of Code 2024 - Day 4: Ceres Search"};function r(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.h1,{children:["Advent of Code 2024 - Day 4",n.jsx(e.span,{className:"subtitle",children:"Ceres Search"})]}),`
`,`
`,n.jsx(i,{frontMatter:a}),`
`,n.jsxs(e.p,{children:["This problem pays tribute to ",n.jsx(e.a,{href:"/notes/aoc/2019/10/",children:"2019 day 10"}),"."]}),`
`,n.jsx(e.h2,{children:"Part 1"}),`
`,n.jsx(e.p,{children:"This starts a series of days where my solution starts with the incantation:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ocaml",children:`let mat =
  Array.of_list
    (List.map (fun line -> Array.of_seq (String.to_seq line)) data)
in
let width = Array.length mat.(0) in
let height = Array.length mat
`})}),`
`,n.jsxs(e.p,{children:["This is the thing I really appreciate about OCaml: not only does it have arrays, but also ",n.jsx(e.code,{children:"for"})," loops and refs. Perhaps a bit guilty, but I find imperative code much more straightforward than recursion or folds (which I spend non-trivial time rewriting into tail recursion)."]}),`
`,n.jsxs(e.p,{children:["Given a direction ",n.jsx(e.code,{children:"(dx, dy)"})," and a starting point ",n.jsx(e.code,{children:"(x, y)"}),", we can walk in that direction and validate that we see ",n.jsx(e.code,{children:"X"}),", ",n.jsx(e.code,{children:"M"}),", ",n.jsx(e.code,{children:"A"}),", ",n.jsx(e.code,{children:"S"})," in order. We just repeat this for all 8 directions for each cell."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ocaml",children:`let is_xmas mat x y dx dy =
  (not
     ((dx == -1 && x <= 2)
     || (dx == 1 && x >= width - 3)
     || (dy == -1 && y <= 2)
     || (dy == 1 && y >= height - 3)))
  && mat.(y).(x) = 'X'
  && mat.(y + dy).(x + dx) = 'M'
  && mat.(y + (2 * dy)).(x + (2 * dx)) = 'A'
  && mat.(y + (3 * dy)).(x + (3 * dx)) = 'S'
in
let count = ref 0 in
for y = 0 to height - 1 do
  for x = 0 to width - 1 do
    List.iter
      (fun (dx, dy) -> if is_xmas mat x y dx dy then incr count)
      [ (1, 0); (1, -1); (0, -1); (-1, -1); (-1, 0); (-1, 1); (0, 1); (1, 1) ]
  done
done;
`})}),`
`,n.jsx(e.h2,{children:"Part 2"}),`
`,n.jsxs(e.p,{children:["Now for each cell, we need to search its 3x3 neighborhood for two diagonals of ",n.jsx(e.code,{children:"MAS"}),". For each diagonal, we should see either ",n.jsx(e.code,{children:"MAS"})," or ",n.jsx(e.code,{children:"SAM"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ocaml",children:`let is_xmas mat x y =
  mat.(y).(x) = 'A'
  && ((mat.(y - 1).(x - 1) = 'M' && mat.(y + 1).(x + 1) = 'S')
      || (mat.(y - 1).(x - 1) = 'S' && mat.(y + 1).(x + 1) = 'M'))
  && ((mat.(y - 1).(x + 1) = 'M' && mat.(y + 1).(x - 1) = 'S')
      || (mat.(y - 1).(x + 1) = 'S' && mat.(y + 1).(x - 1) = 'M'))
in
let count = ref 0 in
for y = 1 to height - 2 do
  for x = 1 to width - 2 do
    if is_xmas mat x y then incr count
  done
done;
`})}),`
`,n.jsx(s,{frontMatter:a})]})}function h(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{h as default,a as frontMatter};
