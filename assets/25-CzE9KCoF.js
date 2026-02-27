import{u as l,j as n}from"./index-DsugHUjk.js";import{P as a,a as c}from"./_components-GobSWsVa.js";import"./_commonjsHelpers-Cpj98o6Y.js";const t={tags:[],title:"Advent of Code 2024 - Day 25: Code Chronicle",description:"Advent of Code 2024 - Day 25: Code Chronicle, a problem that involves . Solution written in OCaml, with detailed walkthrough and proof.",year:2024,day:25};function s(o){const e={code:"code",h1:"h1",p:"p",pre:"pre",span:"span",...l(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.h1,{children:["Advent of Code 2024 - Day 25",n.jsx(e.span,{className:"subtitle",children:"Code Chronicle"})]}),`
`,`
`,n.jsx(a,{frontMatter:t}),`
`,n.jsxs(e.p,{children:["IDK, this feels like a day 3 problem. I parse each lock and key to a list of integers saying how many ",n.jsx(e.code,{children:"#"}),"s are in each column."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ocaml",children:`let count_col rows =
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
`,n.jsxs(e.p,{children:["I can tell if a schematic is a key or a lock by testing if the first character is ",n.jsx(e.code,{children:"#"}),", since locks have all ",n.jsx(e.code,{children:"#"}),"s in the first row while keys have all ",n.jsx(e.code,{children:"."}),"s."]}),`
`,n.jsxs(e.p,{children:["Finally I just found how many lock-key combinations match with ",n.jsx(e.code,{children:"List.for_all2 (fun k l -> k + l <= 7) key lock"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ocaml",children:`let total =
  List.fold_left
    (fun acc key ->
      List.fold_left
        (fun acc lock ->
          if List.for_all2 (fun k l -> k + l <= 7) key lock then acc + 1
          else acc)
        acc locks)
    0 keys
`})}),`
`,n.jsx(c,{frontMatter:t})]})}function h(o={}){const{wrapper:e}={...l(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{h as default,t as frontMatter};
