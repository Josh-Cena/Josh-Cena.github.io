import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import{n,t as r}from"./_components-Bk2TMGF4.js";var i=e(),a={tags:[`Geometry`],title:`Advent of Code 2024 - Day 12: Garden Groups`,description:`Advent of Code 2024 - Day 12: Garden Groups, a problem that involves Geometry. Solution written in OCaml, with detailed walkthrough and proof.`,year:2024,day:12};function o(e){let o={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2024 - Day 12`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Garden Groups`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsxs)(o.p,{children:[`This problem pays tribute to `,(0,i.jsx)(o.a,{href:`/notes/aoc/2023/5/`,children:`2023 day 5`}),` and `,(0,i.jsx)(o.a,{href:`/notes/aoc/2023/21/`,children:`2023 day 21`}),`.`]}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsx)(o.p,{children:`This map is almost usable as-is, but there are different regions marked by the same letter. Therefore we do a flood fill for each letter, and assign a unique ID to each region.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let mark_regions data =
  let mat =
    Array.of_list
      (List.map (fun line -> Array.of_seq (String.to_seq line)) data)
  in
  let height = Array.length mat in
  let width = Array.length mat.(0) in
  let regions = Array.map (Array.map (fun _ -> -1)) mat in
  let region_id = ref 0 in
  let flood_fill x y =
    let queue = Queue.create () in
    Queue.push (x, y) queue;
    regions.(y).(x) <- !region_id;
    while not (Queue.is_empty queue) do
      let cx, cy = Queue.pop queue in
      let neighbors =
        [ (cx - 1, cy); (cx + 1, cy); (cx, cy - 1); (cx, cy + 1) ]
      in
      List.iter
        (fun (nx, ny) ->
          if nx >= 0 && nx < width && ny >= 0 && ny < height then
            if regions.(ny).(nx) = -1 && mat.(ny).(nx) = mat.(cy).(cx) then begin
              regions.(ny).(nx) <- !region_id;
              Queue.push (nx, ny) queue
            end)
        neighbors
    done
  in
  for x = 0 to width - 1 do
    for y = 0 to height - 1 do
      if regions.(y).(x) = -1 then begin
        flood_fill x y;
        region_id := !region_id + 1
      end
    done
  done;
  (regions, !region_id, width, height)
`})}),`
`,(0,i.jsx)(o.p,{children:`Now for part 1, we can just go through each cell. Every cell contributes 1 to its area, and contributes 1 to the perimeter if it's on the edge; i.e., it has a neighbor that's not the same region.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let regions, region_count, width, height = mark_regions data in
let areas = Array.make region_count 0 in
let perimeters = Array.make region_count 0 in
for y = 0 to height - 1 do
  for x = 0 to width - 1 do
    let rid = regions.(y).(x) in
    areas.(rid) <- areas.(rid) + 1;
    let neighbors = [ (x - 1, y); (x + 1, y); (x, y - 1); (x, y + 1) ] in
    List.iter
      (fun (nx, ny) ->
        if
          nx < 0 || nx >= width || ny < 0 || ny >= height
          || regions.(ny).(nx) <> rid
        then perimeters.(rid) <- perimeters.(rid) + 1)
      neighbors
  done
done;
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`Now we need the number of `,(0,i.jsx)(o.em,{children:`edges`}),` of each region, so not all edge cells are counted. A shape's number of edges is the number of its corners, but we need to count both `,(0,i.jsx)(o.em,{children:`convex`}),` and `,(0,i.jsx)(o.em,{children:`reflex`}),` corners, which makes it a bit more involved. Let's think about the 3x3 neighborhood of a cell:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`n1 n2 n3
n4  c n5
n6 n7 n8
`})}),`
`,(0,i.jsxs)(o.p,{children:[`There are 8 corners that `,(0,i.jsx)(o.code,{children:`c`}),` can possibly be: a convex corner in top-left, top-right, bottom-left, or bottom-right; and a reflex corner in the same directions. If it's a convex corner in the top-left, that means that `,(0,i.jsx)(o.code,{children:`n2`}),` and `,(0,i.jsx)(o.code,{children:`n4`}),` are different from `,(0,i.jsx)(o.code,{children:`c`}),`. (`,(0,i.jsx)(o.code,{children:`n1`}),` might not be; for example, in the `,(0,i.jsx)(o.code,{children:`368`}),` example, there are two touching `,(0,i.jsx)(o.code,{children:`A`}),` corners in the center of the board.) If it's a reflex corner in the top-left, that means that `,(0,i.jsx)(o.code,{children:`n1`}),` is different from `,(0,i.jsx)(o.code,{children:`c`}),`, but `,(0,i.jsx)(o.code,{children:`n2`}),` and `,(0,i.jsx)(o.code,{children:`n4`}),` are the same as `,(0,i.jsx)(o.code,{children:`c`}),`.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`? . ?
. # ?
? ? ?

. # ?
# # ?
? ? ?
`})}),`
`,(0,i.jsx)(o.p,{children:`A cell can simultaneously be a corner in multiple directions. For example, a lone cell is a convex corner in all four directions. However, a cell cannot simultaneously be a convex corner and a reflex corner in the same direction.`}),`
`,(0,i.jsx)(o.p,{children:`I do this counting for each cell.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let corners = Array.make region_count 0 in
for y = 0 to height - 1 do
  for x = 0 to width - 1 do
    let rid = regions.(y).(x) in
    let c = regions.(y).(x) in
    let get_neighbor dx dy =
      if x + dx >= 0 && x + dx < width && y + dy >= 0 && y + dy < height then
        regions.(y + dy).(x + dx)
      else -1
    in
    List.iter
      (fun (dx, dy) ->
        let o1 = get_neighbor dx 0 in
        let o2 = get_neighbor 0 dy in
        let d = get_neighbor dx dy in
        if (c <> o1 && c <> o2) || (c <> d && c = o1 && c = o2) then
          corners.(rid) <- corners.(rid) + 1)
      [ (-1, -1); (-1, 1); (1, -1); (1, 1) ]
  done
done;
`})}),`
`,(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:`corners`}),` is equivalent to the number of edges, so the final answer is the sum of `,(0,i.jsx)(o.code,{children:`areas.(i) * corners.(i)`}),` for all `,(0,i.jsx)(o.code,{children:`i`}),`.`]}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};