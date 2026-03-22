import{u as l,j as e}from"./index-DwRXtLVn.js";import{P as a,a as c}from"./_components-C1hTrXOn.js";import"./_commonjsHelpers-Cpj98o6Y.js";const t={tags:[],title:"Advent of Code 2024 - Day 25: Code Chronicle",description:"Advent of Code 2024 - Day 25: Code Chronicle, a problem that involves . Solution written in OCaml, with detailed walkthrough and proof.",year:2024,day:25};function s(o){const n={code:"code",h1:"h1",p:"p",pre:"pre",span:"span",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2024 - Day 25",e.jsx(n.span,{className:"subtitle",children:"Code Chronicle"})]}),e.jsx(a,{frontMatter:t}),`
`,e.jsxs(n.p,{children:["IDK, this feels like a day 3 problem. I parse each lock and key to a list of integers saying how many ",e.jsx(n.code,{children:"#"}),"s are in each column."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`let count_col rows =
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
`,e.jsxs(n.p,{children:["I can tell if a schematic is a key or a lock by testing if the first character is ",e.jsx(n.code,{children:"#"}),", since locks have all ",e.jsx(n.code,{children:"#"}),"s in the first row while keys have all ",e.jsx(n.code,{children:"."}),"s."]}),`
`,e.jsxs(n.p,{children:["Finally I just found how many lock-key combinations match with ",e.jsx(n.code,{children:"List.for_all2 (fun k l -> k + l <= 7) key lock"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`let total =
  List.fold_left
    (fun acc key ->
      List.fold_left
        (fun acc lock ->
          if List.for_all2 (fun k l -> k + l <= 7) key lock then acc + 1
          else acc)
        acc locks)
    0 keys
`})}),e.jsx(c,{frontMatter:t})]})}function h(o={}){const{wrapper:n}={...l(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{h as default,t as frontMatter};
