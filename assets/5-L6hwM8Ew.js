import{u as d,j as n}from"./index-DsugHUjk.js";import{P as s,a}from"./_components-GobSWsVa.js";import"./_commonjsHelpers-Cpj98o6Y.js";const i={tags:["Brute force"],title:"Advent of Code 2024 - Day 5: Print Queue",description:"Advent of Code 2024 - Day 5: Print Queue, a problem that involves Brute force. Solution written in OCaml, with detailed walkthrough and proof.",year:2024,day:5};function o(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...d(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.h1,{children:["Advent of Code 2024 - Day 5",n.jsx(e.span,{className:"subtitle",children:"Print Queue"})]}),`
`,`
`,n.jsx(s,{frontMatter:i}),`
`,n.jsx(e.p,{children:"This problem pays tribute to 2017 day 1 (unimplemented)."}),`
`,n.jsx(e.h2,{children:"Part 1"}),`
`,n.jsxs(e.p,{children:["I parse my input to two things: ",n.jsx(e.code,{children:"orders"}),", a ",n.jsx(e.code,{children:"(int * int) list"})," saying that ",n.jsx(e.code,{children:"a"})," should come before ",n.jsx(e.code,{children:"b"}),", and ",n.jsx(e.code,{children:"lists"}),", a ",n.jsx(e.code,{children:"int list list"}),"."]}),`
`,n.jsxs(e.p,{children:["If a list is valid, then for each order ",n.jsx(e.code,{children:"(a, b)"}),", ",n.jsx(e.code,{children:"a"})," must come before ",n.jsx(e.code,{children:"b"})," in the list. Instead of searching for ",n.jsx(e.code,{children:"a"})," and ",n.jsx(e.code,{children:"b"})," for each order, I can build a map from each element to its index in the list, and then check that ",n.jsx(e.code,{children:"index(a) < index(b)"})," for each order."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ocaml",children:`module IntMap = Map.Make (Int)

let map_num_to_ind lst =
  List.fold_right
    (fun (i, x) -> IntMap.add x i)
    (List.mapi (fun i x -> (i, x)) lst)
    IntMap.empty

let order_holds num_to_ind (a, b) =
  match (IntMap.find_opt a num_to_ind, IntMap.find_opt b num_to_ind) with
  | Some i1, Some i2 -> i1 < i2
  | _ -> true
`})}),`
`,n.jsxs(e.p,{children:["Finding the middle element is just ",n.jsx(e.code,{children:"List.nth lst (List.length lst / 2)"}),"."]}),`
`,n.jsx(e.h2,{children:"Part 2"}),`
`,n.jsx(e.p,{children:"To be honest, I'm not too fond of this problem, because there's no guarantee that the given order is total and consistent. In the end, I implemented a very dumb (IMO) solution that just fixes violations one by one. Each time, I pull an order, and if it's violated, swap the two elements. But one pass may not be enough, since fixing one order may break another. So I repeat this process until no more changes are needed."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ocaml",children:`let rec sort_list_repeatedly orders num_to_ind =
  let rec sort_list orders num_to_ind =
    match orders with
    | [] -> (false, num_to_ind)
    | (a, b) :: rest ->
        let ind_a = IntMap.find_opt a num_to_ind in
        let ind_b = IntMap.find_opt b num_to_ind in
        begin match (ind_a, ind_b) with
        | Some i, Some j when i > j ->
            let _, num_to_ind' =
              num_to_ind |> IntMap.add a j |> IntMap.add b i |> sort_list rest
            in
            (true, num_to_ind')
        | _ -> sort_list rest num_to_ind
        end
  in
  let has_changed, num_to_ind' = sort_list orders num_to_ind in
  if has_changed then sort_list_repeatedly orders num_to_ind' else num_to_ind
`})}),`
`,n.jsxs(e.p,{children:["Now finding the middle element is slightly more complicated, since we have to invert the map from element to index back to a list of elements. I just do a search for the element with index ",n.jsx(e.code,{children:"List.length num_to_ind / 2"})," in the map."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ocaml",children:`let middle_element num_to_ind =
  let mapping = IntMap.bindings num_to_ind in
  List.find (fun (_, ind) -> ind = List.length mapping / 2) mapping |> fst
`})}),`
`,n.jsx(a,{frontMatter:i})]})}function h(t={}){const{wrapper:e}={...d(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{h as default,i as frontMatter};
