import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import{n,t as r}from"./_components-Bk2TMGF4.js";var i=e(),a={tags:[],title:`Advent of Code 2024 - Day 25: Code Chronicle`,description:`Advent of Code 2024 - Day 25: Code Chronicle, a problem that involves . Solution written in OCaml, with detailed walkthrough and proof.`,year:2024,day:25};function o(e){let o={code:`code`,h1:`h1`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2024 - Day 25`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Code Chronicle`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsxs)(o.p,{children:[`IDK, this feels like a day 3 problem. I parse each lock and key to a list of integers saying how many `,(0,i.jsx)(o.code,{children:`#`}),`s are in each column.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let count_col rows =
  let a = Array.of_list rows in
  let n = Array.length a in
  let m = String.length (List.hd rows) in
  let counts = Array.make m 0 in
  for i = 0 to n - 1 do
    let s = a.(i) in
    for j = 0 to m - 1 do
      if s.[j] = '#' then counts.(j) <- counts.(j) + 1
    done
  done;
  Array.to_list counts
`})}),`
`,(0,i.jsxs)(o.p,{children:[`I can tell if a schematic is a key or a lock by testing if the first character is `,(0,i.jsx)(o.code,{children:`#`}),`, since locks have all `,(0,i.jsx)(o.code,{children:`#`}),`s in the first row while keys have all `,(0,i.jsx)(o.code,{children:`.`}),`s.`]}),`
`,(0,i.jsxs)(o.p,{children:[`Finally I just found how many lock-key combinations match with `,(0,i.jsx)(o.code,{children:`List.for_all2 (fun k l -> k + l <= 7) key lock`}),`:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let total =
  List.fold_left
    (fun acc key ->
      List.fold_left
        (fun acc lock ->
          if List.for_all2 (fun k l -> k + l <= 7) key lock then acc + 1
          else acc)
        acc locks)
    0 keys
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};