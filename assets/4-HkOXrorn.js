import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import{n,t as r}from"./_components-BiUCgGl-.js";var i=e(),a={tags:[`Grid walking`],title:`Advent of Code 2024 - Day 4: Ceres Search`,description:`Advent of Code 2024 - Day 4: Ceres Search, a problem that involves Grid walking. Solution written in OCaml, with detailed walkthrough and proof.`,year:2024,day:4};function o(e){let o={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2024 - Day 4`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Ceres Search`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsxs)(o.p,{children:[`This problem pays tribute to `,(0,i.jsx)(o.a,{href:`/notes/aoc/2019/10/`,children:`2019 day 10`}),`.`]}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsx)(o.p,{children:`This starts a series of days where my solution starts with the incantation:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let mat =
  Array.of_list
    (List.map (fun line -> Array.of_seq (String.to_seq line)) data)
in
let width = Array.length mat.(0) in
let height = Array.length mat
`})}),`
`,(0,i.jsxs)(o.p,{children:[`This is the thing I really appreciate about OCaml: not only does it have arrays, but also `,(0,i.jsx)(o.code,{children:`for`}),` loops and refs. Perhaps a bit guilty, but I find imperative code much more straightforward than recursion or folds (which I spend non-trivial time rewriting into tail recursion).`]}),`
`,(0,i.jsxs)(o.p,{children:[`Given a direction `,(0,i.jsx)(o.code,{children:`(dx, dy)`}),` and a starting point `,(0,i.jsx)(o.code,{children:`(x, y)`}),`, we can walk in that direction and validate that we see `,(0,i.jsx)(o.code,{children:`X`}),`, `,(0,i.jsx)(o.code,{children:`M`}),`, `,(0,i.jsx)(o.code,{children:`A`}),`, `,(0,i.jsx)(o.code,{children:`S`}),` in order. We just repeat this for all 8 directions for each cell.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let is_xmas mat x y dx dy =
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
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`Now for each cell, we need to search its 3x3 neighborhood for two diagonals of `,(0,i.jsx)(o.code,{children:`MAS`}),`. For each diagonal, we should see either `,(0,i.jsx)(o.code,{children:`MAS`}),` or `,(0,i.jsx)(o.code,{children:`SAM`}),`.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let is_xmas mat x y =
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
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};