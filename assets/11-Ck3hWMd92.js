import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-BHnTV9cU.js";import"./Link-CEJsqf-b.js";import{n,t as r}from"./_components-CjKNIGmQ.js";var i=e();function a(e){let a={a:`a`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2024 - Day 11`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Plutonian Pebbles`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsxs)(a.p,{children:[`This problem pays tribute to `,(0,i.jsx)(a.a,{href:`/notes/aoc/2019/20/`,children:`2019 day 20`}),`.`]}),`
`,(0,i.jsxs)(a.p,{children:[`This is yet another `,(0,i.jsx)(a.a,{href:`/notes/aoc/2021/6/`,children:`lanternfish problem`}),`. Each time, the objects can morph into other objects, but objects in the same state are indistinguishable. Therefore we can keep track of how many objects are in each state.`]}),`
`,(0,i.jsx)(a.p,{children:`First we can count the existing states.`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ocaml`,children:`module IntMap = Map.Make (Int)

let counts lst =
  List.fold_left
    (fun acc x ->
      IntMap.update x (function None -> Some 1 | Some n -> Some (n + 1)) acc)
    IntMap.empty lst
`})}),`
`,(0,i.jsxs)(a.p,{children:[`Each time, we evolve the counts by applying the rules. All `,(0,i.jsx)(a.code,{children:`0`}),`'s become `,(0,i.jsx)(a.code,{children:`1`}),`'s; numbers with even digits are split; the rest are `,(0,i.jsx)(a.code,{children:`* 2024`}),`.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ocaml`,children:`let evolve nums =
  IntMap.fold
    (fun x count acc ->
      let sx = string_of_int x in
      let new_x =
        if x = 0 then [ 1 ]
        else if String.length sx mod 2 = 0 then
          [
            int_of_string (String.sub sx 0 (String.length sx / 2));
            int_of_string
              (String.sub sx (String.length sx / 2) (String.length sx / 2));
          ]
        else [ x * 2024 ]
      in
      List.fold_left
        (fun acc' nx ->
          IntMap.update nx
            (function None -> Some count | Some c -> Some (c + count))
            acc')
        acc new_x)
    nums IntMap.empty
`})}),`
`,(0,i.jsxs)(a.p,{children:[`Parts 1 and 2 just apply `,(0,i.jsx)(a.code,{children:`evolve`}),` 25 and 75 times, respectively.`]}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Dynamic programming`],title:`Advent of Code 2024 - Day 11: Plutonian Pebbles`,description:`Advent of Code 2024 - Day 11: Plutonian Pebbles, a problem that involves Dynamic programming. Solution written in OCaml, with detailed walkthrough and proof.`,year:2024,day:11};export{o as default};