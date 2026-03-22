import{t as e}from"./jsx-runtime-xty2or4m.js";import{n as t}from"./lib-zKnO7aGa.js";import{n,t as r}from"./_components-vrS0ov66.js";var i=e(),a={tags:[`Grid walking`,`Brute force`],title:`Advent of Code 2024 - Day 6: Guard Gallivant`,description:`Advent of Code 2024 - Day 6: Guard Gallivant, a problem that involves Grid walking and Brute force. Solution written in OCaml, with detailed walkthrough and proof.`,year:2024,day:6};function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2024 - Day 6`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Guard Gallivant`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.p,{children:`This problem pays tribute to 2018 day 5 (unimplemented).`}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsx)(o.p,{children:`We can start by marking all cells that the guard will walk through, just by following the instructions. Each time, the guard either takes a step forward in the current direction, or turns right if it will be moving into an obstruction, exiting when it moves out of bounds.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let create_walked_mat data =
  let mat =
    ref
      (Array.of_list
         (List.map (fun line -> Array.of_seq (String.to_seq line)) data))
  in
  let width = Array.length !mat.(0) in
  let height = Array.length !mat in
  let start_y =
    match Array.find_index (Array.exists (( = ) '^')) !mat with
    | Some y -> y
    | None -> failwith "No starting position found"
  in
  let start_x =
    match Array.find_index (( = ) '^') !mat.(start_y) with
    | Some x -> x
    | None -> failwith "No starting position found"
  in
  !mat.(start_y).(start_x) <- 'X';
  let rec loop pos dir =
    let x, y = pos in
    let dx, dy = dir in
    let new_x = x + dx in
    let new_y = y + dy in

    if new_x < 0 || new_x >= width || new_y < 0 || new_y >= height then ()
    else if !mat.(new_y).(new_x) = '#' then loop pos (turn_right dir)
    else (
      !mat.(new_y).(new_x) <- 'X';
      loop (new_x, new_y) dir)
  in
  loop (start_x, start_y) (0, -1);
  (!mat, start_x, start_y, width, height)
`})}),`
`,(0,i.jsxs)(o.p,{children:[`Then for part 1, just count the number of cells marked with `,(0,i.jsx)(o.code,{children:`X`}),` in the matrix.`]}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`Given the matrix from part 1, for each cell marked with `,(0,i.jsx)(o.code,{children:`X`}),`, we can check if adding an obstruction there would create a loop. I bet there are smart ways to detect loops, but I just simulate the walk again and see if I re-enter the same cell in the same direction.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let can_be_rect x y =
  let mat' = ref (Array.map Array.copy mat) in
  !mat'.(y).(x) <- '#';
  let path = ref (Array.map (fun row -> Array.map (fun _ -> []) row) !mat') in
  let rec loop pos dir =
    let x, y = pos in
    let dx, dy = dir in
    let new_x = x + dx in
    let new_y = y + dy in
    if new_x < 0 || new_x >= width || new_y < 0 || new_y >= height then false
    else if List.exists (fun p -> p = dir) !path.(new_y).(new_x) then true
    else if !mat'.(new_y).(new_x) = '#' then loop pos (turn_right dir)
    else (
      !path.(new_y).(new_x) <- dir :: !path.(new_y).(new_x);
      loop (new_x, new_y) dir)
  in
  loop (start_x, start_y) (0, -1)
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};