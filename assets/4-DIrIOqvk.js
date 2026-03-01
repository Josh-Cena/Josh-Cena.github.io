import{u as o,j as e}from"./index-U-3-Orkv.js";import{P as i,a as s}from"./_components-DNOqqG7-.js";import"./_commonjsHelpers-Cpj98o6Y.js";const a={tags:["Grid walking"],title:"Advent of Code 2024 - Day 4: Ceres Search",description:"Advent of Code 2024 - Day 4: Ceres Search, a problem that involves Grid walking. Solution written in OCaml, with detailed walkthrough and proof.",year:2024,day:4};function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2024 - Day 4",e.jsx(n.span,{className:"subtitle",children:"Ceres Search"})]}),`
`,`
`,e.jsx(i,{frontMatter:a}),`
`,e.jsxs(n.p,{children:["This problem pays tribute to ",e.jsx(n.a,{href:"/notes/aoc/2019/10/",children:"2019 day 10"}),"."]}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:"This starts a series of days where my solution starts with the incantation:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`let mat =
  Array.of_list
    (List.map (fun line -> Array.of_seq (String.to_seq line)) data)
in
let width = Array.length mat.(0) in
let height = Array.length mat
`})}),`
`,e.jsxs(n.p,{children:["This is the thing I really appreciate about OCaml: not only does it have arrays, but also ",e.jsx(n.code,{children:"for"})," loops and refs. Perhaps a bit guilty, but I find imperative code much more straightforward than recursion or folds (which I spend non-trivial time rewriting into tail recursion)."]}),`
`,e.jsxs(n.p,{children:["Given a direction ",e.jsx(n.code,{children:"(dx, dy)"})," and a starting point ",e.jsx(n.code,{children:"(x, y)"}),", we can walk in that direction and validate that we see ",e.jsx(n.code,{children:"X"}),", ",e.jsx(n.code,{children:"M"}),", ",e.jsx(n.code,{children:"A"}),", ",e.jsx(n.code,{children:"S"})," in order. We just repeat this for all 8 directions for each cell."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`let is_xmas mat x y dx dy =
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
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["Now for each cell, we need to search its 3x3 neighborhood for two diagonals of ",e.jsx(n.code,{children:"MAS"}),". For each diagonal, we should see either ",e.jsx(n.code,{children:"MAS"})," or ",e.jsx(n.code,{children:"SAM"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`let is_xmas mat x y =
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
`,e.jsx(s,{frontMatter:a})]})}function h(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{h as default,a as frontMatter};
