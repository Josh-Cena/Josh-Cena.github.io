import{u as a,j as n}from"./index-TXYOrs-s.js";import{P as s,a as d}from"./_components-D-appPx2.js";import"./_commonjsHelpers-Cpj98o6Y.js";const i={tags:["Geometry"],title:"Advent of Code 2024 - Day 8: Resonant Collinearity",description:"Advent of Code 2024 - Day 8: Resonant Collinearity, a problem that involves Geometry. Solution written in OCaml, with detailed walkthrough and proof.",year:2024,day:8};function o(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.h1,{children:["Advent of Code 2024 - Day 8",n.jsx(e.span,{className:"subtitle",children:"Resonant Collinearity"})]}),`
`,`
`,n.jsx(s,{frontMatter:i}),`
`,n.jsx(e.p,{children:"This problem pays tribute to 2016 day 25 (unimplemented)."}),`
`,n.jsx(e.h2,{children:"Part 1"}),`
`,n.jsxs(e.p,{children:["I parse the input to four things: ",n.jsx(e.code,{children:"mat"}),", a ",n.jsx(e.code,{children:"char array array"}),", the ",n.jsx(e.code,{children:"width"})," and ",n.jsx(e.code,{children:"height"}),", and ",n.jsx(e.code,{children:"antenna_groups"}),", a ",n.jsx(e.code,{children:"(char * (int * int) list) list"})," mapping each frequency character to the list of coordinates."]}),`
`,n.jsx(e.p,{children:"Then, for each group of antennas, I get all combinations of antenna pairs and mark their antinodes on the map."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ocaml",children:`let antinodes = Array.map (Array.map (fun _ -> false)) mat in
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
`,n.jsxs(e.p,{children:["Finally, I count the number of ",n.jsx(e.code,{children:"true"})," values in ",n.jsx(e.code,{children:"antinodes"}),"."]}),`
`,n.jsx(e.h2,{children:"Part 2"}),`
`,n.jsxs(e.p,{children:["Same as part 1, except now I can explore farther than one ",n.jsx(e.code,{children:"dx"})," and ",n.jsx(e.code,{children:"dy"}),". Because ",n.jsx(e.code,{children:"x2 = x1 + dx"}),", ",n.jsx(e.code,{children:"y2 = y1 + dy"}),", we can simply traverse all ",n.jsx(e.code,{children:"x1 + m * dx"})," and ",n.jsx(e.code,{children:"y1 + m * dy"})," until we go out of bounds."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ocaml",children:`let antinodes = Array.map (Array.map (fun _ -> false)) mat in
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
`})}),`
`,n.jsx(d,{frontMatter:i})]})}function x(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{x as default,i as frontMatter};
