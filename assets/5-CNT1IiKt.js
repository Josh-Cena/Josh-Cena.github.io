import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{n,t as r}from"./_components-DcdEf7Vf.js";var i=e();function a(e){let a={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2024 - Day 5`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Print Queue`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.p,{children:`This problem pays tribute to 2017 day 1 (unimplemented).`}),`
`,(0,i.jsx)(a.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(a.p,{children:[`I parse my input to two things: `,(0,i.jsx)(a.code,{children:`orders`}),`, a `,(0,i.jsx)(a.code,{children:`(int * int) list`}),` saying that `,(0,i.jsx)(a.code,{children:`a`}),` should come before `,(0,i.jsx)(a.code,{children:`b`}),`, and `,(0,i.jsx)(a.code,{children:`lists`}),`, a `,(0,i.jsx)(a.code,{children:`int list list`}),`.`]}),`
`,(0,i.jsxs)(a.p,{children:[`If a list is valid, then for each order `,(0,i.jsx)(a.code,{children:`(a, b)`}),`, `,(0,i.jsx)(a.code,{children:`a`}),` must come before `,(0,i.jsx)(a.code,{children:`b`}),` in the list. Instead of searching for `,(0,i.jsx)(a.code,{children:`a`}),` and `,(0,i.jsx)(a.code,{children:`b`}),` for each order, I can build a map from each element to its index in the list, and then check that `,(0,i.jsx)(a.code,{children:`index(a) < index(b)`}),` for each order.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ocaml`,children:`module IntMap = Map.Make (Int)

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
`,(0,i.jsxs)(a.p,{children:[`Finding the middle element is just `,(0,i.jsx)(a.code,{children:`List.nth lst (List.length lst / 2)`}),`.`]}),`
`,(0,i.jsx)(a.h2,{children:`Part 2`}),`
`,(0,i.jsx)(a.p,{children:`To be honest, I'm not too fond of this problem, because there's no guarantee that the given order is total and consistent. In the end, I implemented a very dumb (IMO) solution that just fixes violations one by one. Each time, I pull an order, and if it's violated, swap the two elements. But one pass may not be enough, since fixing one order may break another. So I repeat this process until no more changes are needed.`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ocaml`,children:`let rec sort_list_repeatedly orders num_to_ind =
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
`,(0,i.jsxs)(a.p,{children:[`Now finding the middle element is slightly more complicated, since we have to invert the map from element to index back to a list of elements. I just do a search for the element with index `,(0,i.jsx)(a.code,{children:`List.length num_to_ind / 2`}),` in the map.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ocaml`,children:`let middle_element num_to_ind =
  let mapping = IntMap.bindings num_to_ind in
  List.find (fun (_, ind) -> ind = List.length mapping / 2) mapping |> fst
`})}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Brute force`],title:`Advent of Code 2024 - Day 5: Print Queue`,description:`Advent of Code 2024 - Day 5: Print Queue, a problem that involves Brute force. Solution written in OCaml, with detailed walkthrough and proof.`,year:2024,day:5};export{o as default};