import{u as i,j as n}from"./index-BGRydkNA.js";import{F as o,a as s}from"./_components-CaosYk2-.js";const r={tags:["Grid walking","Brute force"],description:"Advent of Code 2024 - Day 6: Guard Gallivant, a problem that involves Grid walking and Brute force. Solution written in OCaml, with detailed walkthrough and proof.",year:2024,day:6,title:"Advent of Code 2024 - Day 6: Guard Gallivant"};function a(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsxs(t.h1,{children:["Advent of Code 2024 - Day 6",n.jsx(t.span,{className:"subtitle",children:"Guard Gallivant"})]}),`
`,`
`,n.jsx(o,{frontMatter:r}),`
`,n.jsx(t.p,{children:"This problem pays tribute to 2018 day 5 (unimplemented)."}),`
`,n.jsx(t.h2,{children:"Part 1"}),`
`,n.jsx(t.p,{children:"We can start by marking all cells that the guard will walk through, just by following the instructions. Each time, the guard either takes a step forward in the current direction, or turns right if it will be moving into an obstruction, exiting when it moves out of bounds."}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-ocaml",children:`let create_walked_mat data =
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
`,n.jsxs(t.p,{children:["Then for part 1, just count the number of cells marked with ",n.jsx(t.code,{children:"X"})," in the matrix."]}),`
`,n.jsx(t.h2,{children:"Part 2"}),`
`,n.jsxs(t.p,{children:["Given the matrix from part 1, for each cell marked with ",n.jsx(t.code,{children:"X"}),", we can check if adding an obstruction there would create a loop. I bet there are smart ways to detect loops, but I just simulate the walk again and see if I re-enter the same cell in the same direction."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-ocaml",children:`let can_be_rect x y =
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
`})}),`
`,n.jsx(s,{frontMatter:r})]})}function h(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(a,{...e})}):a(e)}export{h as default,r as frontMatter};
