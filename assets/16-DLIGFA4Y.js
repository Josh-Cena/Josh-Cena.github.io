import{u as a,j as t}from"./index-BQ4aqFrv.js";import{P as d,a as r}from"./_components-Byf801p9.js";import"./_commonjsHelpers-Cpj98o6Y.js";const s={tags:["Maze","Dijkstra"],title:"Advent of Code 2024 - Day 16: Reindeer Maze",description:"Advent of Code 2024 - Day 16: Reindeer Maze, a problem that involves Maze and Dijkstra. Solution written in OCaml, with detailed walkthrough and proof.",year:2024,day:16};function i(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...a(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.h1,{children:["Advent of Code 2024 - Day 16",t.jsx(e.span,{className:"subtitle",children:"Reindeer Maze"})]}),`
`,`
`,t.jsx(d,{frontMatter:s}),`
`,t.jsx(e.p,{children:"This problem pays tribute to 2015 day 14 (unimplemented)."}),`
`,t.jsx(e.h2,{children:"Part 1"}),`
`,t.jsx(e.p,{children:"We essentially want the shortest path through the maze, where each turning also incurs a cost. So the state is not just the position, but also the reindeer's direction, and a transition is either a turn or a move forward, with different costs."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ocaml",children:`type state = { x : int; y : int; dx : int; dy : int }

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
`,t.jsx(e.p,{children:"I then just run Dijkstra's on this state space."}),`
`,t.jsxs(e.p,{children:["Happy to see that OCaml has a ",t.jsx(e.code,{children:"Pqueue"})," module built-in. (Technically I should be using 5.2.1, the version released in 2024, but I cheated and used 5.4.)"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ocaml",children:`module StateOrder = struct
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
`,t.jsx(e.p,{children:"Note: we don't stop when we reach the target, because there may be multiple targets that are equally good, and we want all of them to be considered for part 2."}),`
`,t.jsx(e.p,{children:"There are 4 possible targets, one for each direction when it reaches the target cell. We take the minimum of those."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ocaml",children:`let dist = dijkstra mat false s in
let e1_dist = Hashtbl.find dist { x = ex; y = ey; dx = 1; dy = 0 } in
let e2_dist = Hashtbl.find dist { x = ex; y = ey; dx = 0; dy = 1 } in
let e3_dist = Hashtbl.find dist { x = ex; y = ey; dx = -1; dy = 0 } in
let e4_dist = Hashtbl.find dist { x = ex; y = ey; dx = 0; dy = -1 } in
let res = List.fold_left min max_int [ e1_dist; e2_dist; e3_dist; e4_dist ] in
Printf.printf "%d\\n" res
`})}),`
`,t.jsxs(e.p,{children:["It turns out that the optimal target is unique, so theoretically we could have stopped early when we reached ",t.jsx(e.code,{children:"ex, ey"}),". But I kept this solution for robustness."]}),`
`,t.jsx(e.h2,{children:"Part 2"}),`
`,t.jsx(e.p,{children:"Now we need all cells that are on some optimal path. I took a—perhaps unorthodox?—approach of running Dijkstra's again, from the target back to the start. Then for each state, I check if the distance from the start to that state plus the distance from that state to the target equals the optimal distance. If it does, then that cell is on an optimal path."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ocaml",children:`let dist_es =
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
`,t.jsxs(e.p,{children:["Again, because in reality there's a single optimal target state, we could have picked that single ",t.jsx(e.code,{children:"e"})," state, instead of using loops, but this is more robust."]}),`
`,t.jsx(r,{frontMatter:s})]})}function c(n={}){const{wrapper:e}={...a(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i(n)}export{c as default,s as frontMatter};
