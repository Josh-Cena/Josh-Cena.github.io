import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import{n,t as r}from"./_components-BiUCgGl-.js";var i=e(),a={tags:[`Geometry`],title:`Advent of Code 2024 - Day 8: Resonant Collinearity`,description:`Advent of Code 2024 - Day 8: Resonant Collinearity, a problem that involves Geometry. Solution written in OCaml, with detailed walkthrough and proof.`,year:2024,day:8};function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2024 - Day 8`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Resonant Collinearity`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.p,{children:`This problem pays tribute to 2016 day 25 (unimplemented).`}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(o.p,{children:[`I parse the input to four things: `,(0,i.jsx)(o.code,{children:`mat`}),`, a `,(0,i.jsx)(o.code,{children:`char array array`}),`, the `,(0,i.jsx)(o.code,{children:`width`}),` and `,(0,i.jsx)(o.code,{children:`height`}),`, and `,(0,i.jsx)(o.code,{children:`antenna_groups`}),`, a `,(0,i.jsx)(o.code,{children:`(char * (int * int) list) list`}),` mapping each frequency character to the list of coordinates.`]}),`
`,(0,i.jsx)(o.p,{children:`Then, for each group of antennas, I get all combinations of antenna pairs and mark their antinodes on the map.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let antinodes = Array.map (Array.map (fun _ -> false)) mat in
List.iter
  (fun (_, positions) ->
    List.iter
      (fun ((x1, y1), (x2, y2)) ->
        let dx = x2 - x1 in
        let dy = y2 - y1 in
        if 0 <= y2 + dy && y2 + dy < height && 0 <= x2 + dx && x2 + dx < width
        then antinodes.(y2 + dy).(x2 + dx) <- true;
        if 0 <= y1 - dy && y1 - dy < height && 0 <= x1 - dx && x1 - dx < width
        then antinodes.(y1 - dy).(x1 - dx) <- true)
      (combinations2 positions))
  antenna_groups;
`})}),`
`,(0,i.jsxs)(o.p,{children:[`Finally, I count the number of `,(0,i.jsx)(o.code,{children:`true`}),` values in `,(0,i.jsx)(o.code,{children:`antinodes`}),`.`]}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`Same as part 1, except now I can explore farther than one `,(0,i.jsx)(o.code,{children:`dx`}),` and `,(0,i.jsx)(o.code,{children:`dy`}),`. Because `,(0,i.jsx)(o.code,{children:`x2 = x1 + dx`}),`, `,(0,i.jsx)(o.code,{children:`y2 = y1 + dy`}),`, we can simply traverse all `,(0,i.jsx)(o.code,{children:`x1 + m * dx`}),` and `,(0,i.jsx)(o.code,{children:`y1 + m * dy`}),` until we go out of bounds.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let antinodes = Array.map (Array.map (fun _ -> false)) mat in
List.iter
  (fun (_, positions) ->
    List.iter
      (fun ((x1, y1), (x2, y2)) ->
        let dx = x2 - x1 in
        let dy = y2 - y1 in
        let rec loop m =
          let nx1 = x1 + (m * dx) in
          let ny1 = y1 + (m * dy) in
          let nx2 = x1 - (m * dx) in
          let ny2 = y1 - (m * dy) in
          let in_bounds1 =
            0 <= nx1 && nx1 < width && 0 <= ny1 && ny1 < height
          in
          let in_bounds2 =
            0 <= nx2 && nx2 < width && 0 <= ny2 && ny2 < height
          in
          if in_bounds1 then antinodes.(ny1).(nx1) <- true;
          if in_bounds2 then antinodes.(ny2).(nx2) <- true;
          if (not in_bounds1) && not in_bounds2 then () else loop (m + 1)
        in
        loop 0)
      (combinations2 positions))
  antenna_groups;
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};