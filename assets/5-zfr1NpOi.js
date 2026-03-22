import{u as d,j as e}from"./index-CKqa2xZ3.js";import{P as s,a}from"./_components-Ci0FrSUn.js";import"./_commonjsHelpers-CqkleIqs.js";const i={tags:["Brute force"],title:"Advent of Code 2024 - Day 5: Print Queue",description:"Advent of Code 2024 - Day 5: Print Queue, a problem that involves Brute force. Solution written in OCaml, with detailed walkthrough and proof.",year:2024,day:5};function o(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2024 - Day 5",e.jsx(n.span,{className:"subtitle",children:"Print Queue"})]}),e.jsx(s,{frontMatter:i}),`
`,e.jsx(n.p,{children:"This problem pays tribute to 2017 day 1 (unimplemented)."}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:["I parse my input to two things: ",e.jsx(n.code,{children:"orders"}),", a ",e.jsx(n.code,{children:"(int * int) list"})," saying that ",e.jsx(n.code,{children:"a"})," should come before ",e.jsx(n.code,{children:"b"}),", and ",e.jsx(n.code,{children:"lists"}),", a ",e.jsx(n.code,{children:"int list list"}),"."]}),`
`,e.jsxs(n.p,{children:["If a list is valid, then for each order ",e.jsx(n.code,{children:"(a, b)"}),", ",e.jsx(n.code,{children:"a"})," must come before ",e.jsx(n.code,{children:"b"})," in the list. Instead of searching for ",e.jsx(n.code,{children:"a"})," and ",e.jsx(n.code,{children:"b"})," for each order, I can build a map from each element to its index in the list, and then check that ",e.jsx(n.code,{children:"index(a) < index(b)"})," for each order."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`module IntMap = Map.Make (Int)

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
`,e.jsxs(n.p,{children:["Finding the middle element is just ",e.jsx(n.code,{children:"List.nth lst (List.length lst / 2)"}),"."]}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsx(n.p,{children:"To be honest, I'm not too fond of this problem, because there's no guarantee that the given order is total and consistent. In the end, I implemented a very dumb (IMO) solution that just fixes violations one by one. Each time, I pull an order, and if it's violated, swap the two elements. But one pass may not be enough, since fixing one order may break another. So I repeat this process until no more changes are needed."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`let rec sort_list_repeatedly orders num_to_ind =
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
`,e.jsxs(n.p,{children:["Now finding the middle element is slightly more complicated, since we have to invert the map from element to index back to a list of elements. I just do a search for the element with index ",e.jsx(n.code,{children:"List.length num_to_ind / 2"})," in the map."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`let middle_element num_to_ind =
  let mapping = IntMap.bindings num_to_ind in
  List.find (fun (_, ind) -> ind = List.length mapping / 2) mapping |> fst
`})}),e.jsx(a,{frontMatter:i})]})}function h(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{h as default,i as frontMatter};
