import{t as e}from"./jsx-runtime-D57Vegw5.js";import{n as t}from"./lib-rxHYdfSX.js";import{n,t as r}from"./_components-BHKTFOi1.js";var i=e(),a={tags:[`Maze`,`Dijkstra`],title:`Advent of Code 2024 - Day 16: Reindeer Maze`,description:`Advent of Code 2024 - Day 16: Reindeer Maze, a problem that involves Maze and Dijkstra. Solution written in OCaml, with detailed walkthrough and proof.`,year:2024,day:16};function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2024 - Day 16`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Reindeer Maze`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.p,{children:`This problem pays tribute to 2015 day 14 (unimplemented).`}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsx)(o.p,{children:`We essentially want the shortest path through the maze, where each turning also incurs a cost. So the state is not just the position, but also the reindeer's direction, and a transition is either a turn or a move forward, with different costs.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`type state = { x : int; y : int; dx : int; dy : int }

let edges w h board st =
  List.filter
    (fun (st', _) ->
      st'.x >= 0 && st'.x < w && st'.y >= 0 && st'.y < h
      && board.(st'.y).(st'.x) <> '#')
    [
      ({ st with x = st.x + st.dx; y = st.y + st.dy }, 1);
      ({ st with dx = -st.dy; dy = st.dx }, 1000);
      ({ st with dx = st.dy; dy = -st.dx }, 1000);
    ]
`})}),`
`,(0,i.jsx)(o.p,{children:`I then just run Dijkstra's on this state space.`}),`
`,(0,i.jsxs)(o.p,{children:[`Happy to see that OCaml has a `,(0,i.jsx)(o.code,{children:`Pqueue`}),` module built-in. (Technically I should be using 5.2.1, the version released in 2024, but I cheated and used 5.4.)`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`module StateOrder = struct
  type t = state * int

  let compare (_, c1) (_, c2) = Int.compare c1 c2
end

module MinQueue = Pqueue.MakeMin (StateOrder)

let dijkstra mat s =
  let width = Array.length mat.(0) in
  let height = Array.length mat in
  let pq = MinQueue.create () in
  let dist = Hashtbl.create (width * height * 4) in
  MinQueue.add pq (s, 0);
  Hashtbl.add dist s 0;
  let rec loop () =
    if MinQueue.is_empty pq then ()
    else
      let u, _ = Option.get (MinQueue.pop_min pq) in
      let u_dist = Hashtbl.find dist u in
      let neighbors = edges width height mat u in
      List.iter
        (fun (v, weight) ->
          let is_better =
            begin match Hashtbl.find_opt dist v with
            | None -> true
            | Some v_dist -> u_dist + weight < v_dist
            end
          in
          if is_better then begin
            Hashtbl.replace dist v (u_dist + weight);
            MinQueue.add pq (v, u_dist + weight)
          end)
        neighbors;
      loop ()
  in
  loop ();
  dist
`})}),`
`,(0,i.jsx)(o.p,{children:`Note: we don't stop when we reach the target, because there may be multiple targets that are equally good, and we want all of them to be considered for part 2.`}),`
`,(0,i.jsx)(o.p,{children:`There are 4 possible targets, one for each direction when it reaches the target cell. We take the minimum of those.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let dist = dijkstra mat false s in
let e1_dist = Hashtbl.find dist { x = ex; y = ey; dx = 1; dy = 0 } in
let e2_dist = Hashtbl.find dist { x = ex; y = ey; dx = 0; dy = 1 } in
let e3_dist = Hashtbl.find dist { x = ex; y = ey; dx = -1; dy = 0 } in
let e4_dist = Hashtbl.find dist { x = ex; y = ey; dx = 0; dy = -1 } in
let res = List.fold_left min max_int [ e1_dist; e2_dist; e3_dist; e4_dist ] in
Printf.printf "%d\\n" res
`})}),`
`,(0,i.jsxs)(o.p,{children:[`It turns out that the optimal target is unique, so theoretically we could have stopped early when we reached `,(0,i.jsx)(o.code,{children:`ex, ey`}),`. But I kept this solution for robustness.`]}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsx)(o.p,{children:`Now we need all cells that are on some optimal path. I took a—perhaps unorthodox?—approach of running Dijkstra's again, from the target back to the start. Then for each state, I check if the distance from the start to that state plus the distance from that state to the target equals the optimal distance. If it does, then that cell is on an optimal path.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let dist_es =
  [ (e1, e1_dist); (e2, e2_dist); (e3, e3_dist); (e4, e4_dist) ]
  |> List.filter (fun (_, d) -> d = min_dist)
  |> List.map fst
  |> List.map (dijkstra mat true)
in
let optimal_states =
  Hashtbl.fold
    (fun st d acc ->
      if
        List.exists
          (fun dist_e ->
            match Hashtbl.find_opt dist_e st with
            | Some dist -> dist + d = min_dist
            | None -> false)
          dist_es
      then (st.x, st.y) :: acc
      else acc)
    dist_s []
in
let st_uniq = List.sort_uniq compare optimal_states in
Printf.printf "%d\\n" (List.length st_uniq)
`})}),`
`,(0,i.jsxs)(o.p,{children:[`Again, because in reality there's a single optimal target state, we could have picked that single `,(0,i.jsx)(o.code,{children:`e`}),` state, instead of using loops, but this is more robust.`]}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};