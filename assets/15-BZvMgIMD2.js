import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{n,t as r}from"./_components-DcdEf7Vf.js";var i=e();function a(e){let a={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2024 - Day 15`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Warehouse Woes`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsxs)(a.p,{children:[`This problem pays tribute to `,(0,i.jsx)(a.a,{href:`/notes/aoc/2021/6/`,children:`2021 day 6`}),`.`]}),`
`,(0,i.jsx)(a.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(a.p,{children:[`After doing `,(0,i.jsx)(a.a,{href:`/notes/aoc/2019/13/`,children:`breakout`}),`, `,(0,i.jsx)(a.a,{href:`/notes/aoc/2022/17/`,children:`Tetris`}),`, and `,(0,i.jsx)(a.a,{href:`/notes/aoc/2023/14/`,children:`marble Labyrinth`}),`, we now have `,(0,i.jsx)(a.a,{href:`https://en.wikipedia.org/wiki/Sokoban`,children:`Sokoban`}),` added under our belt.`]}),`
`,(0,i.jsx)(a.p,{children:`Part 1 is a straightforward simulation, and is quite easy thanks to OCaml's mutable arrays. I implement every step as two functions:`}),`
`,(0,i.jsxs)(a.ol,{children:[`
`,(0,i.jsx)(a.li,{children:`Can the player move in that direction? If not, do nothing.`}),`
`,(0,i.jsx)(a.li,{children:`If the player can move, then move the player and all boxes it touches.`}),`
`]}),`
`,(0,i.jsxs)(a.p,{children:[`The `,(0,i.jsx)(a.code,{children:`can_move`}),` function answers the question "can the cell at `,(0,i.jsx)(a.code,{children:`r, c`}),` be moved in the direction of `,(0,i.jsx)(a.code,{children:`dr, dc`}),`?" Walls cannot be moved into; empty space can be moved into; boxes can be moved into if the next cell can be moved away.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ocaml`,children:`let rec can_move r c dr dc =
  let nr = r + dr in
  let nc = c + dc in
  match !mat.(nr).(nc) with
  | '#' -> false
  | '.' -> true
  | 'O' -> can_move nr nc dr dc
  | _ -> failwith "Invalid cell"
`})}),`
`,(0,i.jsxs)(a.p,{children:[`When invoking `,(0,i.jsx)(a.code,{children:`do_move`}),`, we already know that the player can move, therefore each cell along the path is either empty or a box. We first vacate the next cell using `,(0,i.jsx)(a.code,{children:`do_move`}),`, then move the current cell into it.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ocaml`,children:`let rec do_move r c dr dc =
  let nr = r + dr in
  let nc = c + dc in
  if !mat.(nr).(nc) = 'O' then do_move nr nc dr dc;
  !mat.(nr).(nc) <- !mat.(r).(c);
  !mat.(r).(c) <- '.'
`})}),`
`,(0,i.jsx)(a.p,{children:`Now we can iterate through the directions and apply the moves.`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ocaml`,children:`let _ =
  List.fold_left
    (fun (r, c) (dr, dc) ->
      if can_move r c dr dc then (
        do_move r c dr dc;
        (r + dr, c + dc))
      else (r, c))
    (start_r, start_c) dirs
`})}),`
`,(0,i.jsx)(a.p,{children:`The final step is to get the coordinates of all boxes.`}),`
`,(0,i.jsx)(a.h2,{children:`Part 2`}),`
`,(0,i.jsx)(a.p,{children:`I literally expand the map when parsing the input:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ocaml`,children:`let mat =
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
`,(0,i.jsxs)(a.p,{children:[`The `,(0,i.jsx)(a.code,{children:`can_move`}),`/`,(0,i.jsx)(a.code,{children:`do_move`}),` cycle function does not change, but updates are needed to these functions. Now, when moving up or down, the movement of a box does not just depend on the next cell, but the `,(0,i.jsx)(a.em,{children:`two`}),` cells above/below it. When moving a box left or right, we still only need to check one cell, but we need to be careful because the "immediately next" cell may be the same box. When executing `,(0,i.jsx)(a.code,{children:`<`}),`, we are looking from right to left, so we would see `,(0,i.jsx)(a.code,{children:`]`}),` first, and we need to jump two cells ahead to get to the next cell; similarly for `,(0,i.jsx)(a.code,{children:`>`}),`.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ocaml`,children:`let rec can_move r c dr dc =
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
`,(0,i.jsxs)(a.p,{children:[`When executing `,(0,i.jsx)(a.code,{children:`do_move`}),`, when moving up or down, we need to vacate `,(0,i.jsx)(a.em,{children:`two`}),` cells above or below the current cell. When moving left or right, the logic is same as before: vacate the next cell, then move the current cell into it. It's fine if the box is split in half for just a moment before the next half catches up.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ocaml`,children:`let rec do_move r c dr dc =
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
`,(0,i.jsx)(a.p,{children:`Note that this is essentially a DFS. Consider the following board:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-plain`,children:`........
[][][][]
.[][][].
..[][]..
...[]...
....^...
`})}),`
`,(0,i.jsxs)(a.p,{children:[`Because we are moving into a `,(0,i.jsx)(a.code,{children:`]`}),`, we first need to move the `,(0,i.jsx)(a.code,{children:`]`}),` and the `,(0,i.jsx)(a.code,{children:`[`}),` next to it. Moving each half requires moving the box above that half, and so on. Each time we move those and only those boxes that stand in the way of the current half, and then move the half-box that we want to move. It progresses like this:`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-plain`,children:`[]......
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
`,(0,i.jsxs)(a.p,{children:[`Because whenever we are trying to move a half-box (`,(0,i.jsx)(a.code,{children:`mat.(nr).(nc) = ']'`}),` or `,(0,i.jsx)(a.code,{children:`mat.(nr).(nc) = '['`}),`), we always move the accompanying half-box as well, the final result is guaranteed to have the two halves together.`]}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Arcade game`,`BFS/DFS`],title:`Advent of Code 2024 - Day 15: Warehouse Woes`,description:`Advent of Code 2024 - Day 15: Warehouse Woes, a problem that involves Arcade game and BFS/DFS. Solution written in OCaml, with detailed walkthrough and proof.`,year:2024,day:15};export{o as default};