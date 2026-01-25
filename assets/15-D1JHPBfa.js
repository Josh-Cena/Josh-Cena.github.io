import{u as c,j as e}from"./index-VHEsq7sr.js";import{P as a,a as d}from"./_components-rH1xXMsL.js";import"./_commonjsHelpers-Cpj98o6Y.js";const o={tags:["Arcade game","BFS/DFS"],title:"Advent of Code 2024 - Day 15: Warehouse Woes",description:"Advent of Code 2024 - Day 15: Warehouse Woes, a problem that involves Arcade game and BFS/DFS. Solution written in OCaml, with detailed walkthrough and proof.",year:2024,day:15};function r(t){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2024 - Day 15",e.jsx(n.span,{className:"subtitle",children:"Warehouse Woes"})]}),`
`,`
`,e.jsx(a,{frontMatter:o}),`
`,e.jsxs(n.p,{children:["This problem pays tribute to ",e.jsx(n.a,{href:"/notes/aoc/2021/6/",children:"2021 day 6"}),"."]}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:["After doing ",e.jsx(n.a,{href:"/notes/aoc/2019/13/",children:"breakout"}),", ",e.jsx(n.a,{href:"/notes/aoc/2022/17/",children:"Tetris"}),", and ",e.jsx(n.a,{href:"/notes/aoc/2023/14/",children:"marble Labyrinth"}),", we now have ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Sokoban",children:"Sokoban"})," added under our belt."]}),`
`,e.jsx(n.p,{children:"Part 1 is a straightforward simulation, and is quite easy thanks to OCaml's mutable arrays. I implement every step as two functions:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Can the player move in that direction? If not, do nothing."}),`
`,e.jsx(n.li,{children:"If the player can move, then move the player and all boxes it touches."}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"can_move"}),' function answers the question "can the cell at ',e.jsx(n.code,{children:"r, c"})," be moved in the direction of ",e.jsx(n.code,{children:"dr, dc"}),'?" Walls cannot be moved into; empty space can be moved into; boxes can be moved into if the next cell can be moved away.']}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`let rec can_move r c dr dc =
  let nr = r + dr in
  let nc = c + dc in
  match !mat.(nr).(nc) with
  | '#' -> false
  | '.' -> true
  | 'O' -> can_move nr nc dr dc
  | _ -> failwith "Invalid cell"
`})}),`
`,e.jsxs(n.p,{children:["When invoking ",e.jsx(n.code,{children:"do_move"}),", we already know that the player can move, therefore each cell along the path is either empty or a box. We first vacate the next cell using ",e.jsx(n.code,{children:"do_move"}),", then move the current cell into it."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`let rec do_move r c dr dc =
  let nr = r + dr in
  let nc = c + dc in
  if !mat.(nr).(nc) = 'O' then do_move nr nc dr dc;
  !mat.(nr).(nc) <- !mat.(r).(c);
  !mat.(r).(c) <- '.'
`})}),`
`,e.jsx(n.p,{children:"Now we can iterate through the directions and apply the moves."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`let _ =
  List.fold_left
    (fun (r, c) (dr, dc) ->
      if can_move r c dr dc then (
        do_move r c dr dc;
        (r + dr, c + dc))
      else (r, c))
    (start_r, start_c) dirs
`})}),`
`,e.jsx(n.p,{children:"The final step is to get the coordinates of all boxes."}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsx(n.p,{children:"I literally expand the map when parsing the input:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`let mat =
  List.hd parts |> String.split_on_char '\\n'
  |> List.map (fun line ->
      line |> String.to_seq
      |> Seq.flat_map (fun c ->
          match c with
          | '#' -> List.to_seq [ '#'; '#' ]
          | 'O' -> List.to_seq [ '['; ']' ]
          | '.' -> List.to_seq [ '.'; '.' ]
          | '@' -> List.to_seq [ '@'; '.' ]
          | _ -> failwith "Invalid character")
      |> Array.of_seq)
  |> Array.of_list |> ref
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"can_move"}),"/",e.jsx(n.code,{children:"do_move"})," cycle function does not change, but updates are needed to these functions. Now, when moving up or down, the movement of a box does not just depend on the next cell, but the ",e.jsx(n.em,{children:"two"}),' cells above/below it. When moving a box left or right, we still only need to check one cell, but we need to be careful because the "immediately next" cell may be the same box. When executing ',e.jsx(n.code,{children:"<"}),", we are looking from right to left, so we would see ",e.jsx(n.code,{children:"]"})," first, and we need to jump two cells ahead to get to the next cell; similarly for ",e.jsx(n.code,{children:">"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`let rec can_move r c dr dc =
  let nr = r + dr in
  let nc = c + dc in
  match !mat.(nr).(nc) with
  | '#' -> false
  | '.' -> true
  | ']' -> begin
      match (dr, dc) with
      | 0, 1 -> failwith "Shouldn't be looking at ] when moving right"
      | 0, -1 -> can_move nr (nc - 1) dr dc
      | _ -> can_move nr nc dr dc && can_move nr (nc - 1) dr dc
    end
  | '[' -> begin
      match (dr, dc) with
      | 0, 1 -> can_move nr (nc + 1) dr dc
      | 0, -1 -> failwith "Shouldn't be looking at [ when moving left"
      | _ -> can_move nr nc dr dc && can_move nr (nc + 1) dr dc
    end
  | _ -> failwith "Invalid cell"
`})}),`
`,e.jsxs(n.p,{children:["When executing ",e.jsx(n.code,{children:"do_move"}),", when moving up or down, we need to vacate ",e.jsx(n.em,{children:"two"})," cells above or below the current cell. When moving left or right, the logic is same as before: vacate the next cell, then move the current cell into it. It's fine if the box is split in half for just a moment before the next half catches up."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`let rec do_move r c dr dc =
  let nr = r + dr in
  let nc = c + dc in
  if !mat.(nr).(nc) = ']' then begin
    match (dr, dc) with
    | 0, 1 | 0, -1 -> do_move nr nc dr dc
    | _ ->
        do_move nr (nc - 1) dr dc;
        do_move nr nc dr dc
  end
  else if !mat.(nr).(nc) = '[' then begin
    match (dr, dc) with
    | 0, 1 | 0, -1 -> do_move nr nc dr dc
    | _ ->
        do_move nr nc dr dc;
        do_move nr (nc + 1) dr dc
  end;
  !mat.(nr).(nc) <- !mat.(r).(c);
  !mat.(r).(c) <- '.'
`})}),`
`,e.jsx(n.p,{children:"Note that this is essentially a DFS. Consider the following board:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plain",children:`........
[][][][]
.[][][].
..[][]..
...[]...
....^...
`})}),`
`,e.jsxs(n.p,{children:["Because we are moving into a ",e.jsx(n.code,{children:"]"}),", we first need to move the ",e.jsx(n.code,{children:"]"})," and the ",e.jsx(n.code,{children:"["})," next to it. Moving each half requires moving the box above that half, and so on. Each time we move those and only those boxes that stand in the way of the current half, and then move the half-box that we want to move. It progresses like this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plain",children:`[]......
..[][][]
.[][][].
..[][]..
...[]...
....^...

[]......
.[[][][]
..][][].
..[][]..
...[]...
....^...

[][]....
.[..[][]
..][][].
..[][]..
...[]...
....^...

[][]....
.[].[][]
...[][].
..[][]..
...[]...
....^...

[][]....
.[][[][]
....][].
..[][]..
...[]...
....^...

[][][]..
.[][..[]
....][].
..[][]..
...[]...
....^...

[][][]..
.[][].[]
.....[].
..[][]..
...[]...
....^...

...
`})}),`
`,e.jsxs(n.p,{children:["Because whenever we are trying to move a half-box (",e.jsx(n.code,{children:"mat.(nr).(nc) = ']'"})," or ",e.jsx(n.code,{children:"mat.(nr).(nc) = '['"}),"), we always move the accompanying half-box as well, the final result is guaranteed to have the two halves together."]}),`
`,e.jsx(d,{frontMatter:o})]})}function h(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{h as default,o as frontMatter};
