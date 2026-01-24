import{u as o,j as e}from"./index-viUjO3pU.js";import{P as s,a as i}from"./_components-CnEwx4LA.js";import"./_commonjsHelpers-Cpj98o6Y.js";const r={tags:["String manipulation"],description:"Advent of Code 2024 - Day 3: Mull It Over, a problem that involves String manipulation. Solution written in OCaml, with detailed walkthrough and proof.",year:2024,day:3,title:"Advent of Code 2024 - Day 3: Mull It Over"};function a(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2024 - Day 3",e.jsx(n.span,{className:"subtitle",children:"Mull It Over"})]}),`
`,`
`,e.jsx(s,{frontMatter:r}),`
`,e.jsxs(n.p,{children:["This problem pays tribute to ",e.jsx(n.a,{href:"/notes/aoc/2020/2/",children:"2020 day 2"}),"."]}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:["I used a regex to extract all ",e.jsx(n.code,{children:"mul(X,Y)"})," expressions, as nature intended. The pattern is ",e.jsx(n.code,{children:"mul\\((\\d{1,3}),(\\d{1,3})\\)"}),", which captures two numbers between 1 and 999. Then I can iterate over the matches and extract the captured groups."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`let re = Re.Perl.compile (Re.Perl.re {|mul\\((\\d{1,3}),(\\d{1,3})\\)|}) in
let matches =
  Re.all re line |> List.map (fun g -> (Re.Group.get g 1, Re.Group.get g 2))
in
let products =
  List.map (fun (a, b) -> int_of_string a * int_of_string b) matches
in
let total = List.fold_left ( + ) 0 products in
Printf.printf "%d\\n" total
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["Since the patterns can't nest in each other, this remains a regex matching problem, just with two additional things to match: ",e.jsx(n.code,{children:"do\\(\\)"})," and ",e.jsx(n.code,{children:"don't\\(\\)"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`let re =
  Re.Perl.compile
    (Re.Perl.re {|mul\\((\\d{1,3}),(\\d{1,3})\\)|do\\(\\)|(don't)\\(\\)|})
in
let matches =
  Re.all re line
  |> List.map (fun g ->
      (Re.Group.get g 0, Re.Group.get_opt g 1, Re.Group.get_opt g 2))
`})}),`
`,e.jsxs(n.p,{children:["Each match can be one of three things: ",e.jsx(n.code,{children:'("mul(X,Y)", Some X, Some Y)'}),", ",e.jsx(n.code,{children:'("do()", None, None)'}),", or ",e.jsx(n.code,{children:`("don't()", None, None)`}),". We can iterate over the matches and keep track of whether the state is enabled. Since we are folding anyway, I moved the multiplication and addition into the fold as well to avoid extra mapping and summing steps."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ocaml",children:`let _, total =
  List.fold_left
    (fun (cur_st, res) (s, a, b) ->
      match s with
      | "do()" -> (true, res)
      | "don't()" -> (false, res)
      | _ -> begin
          match (a, b) with
          | Some a, Some b ->
              if cur_st then
                (cur_st, (int_of_string a * int_of_string b) + res)
              else (cur_st, res)
          | _ -> (cur_st, res)
        end)
    (true, 0) matches
`})}),`
`,e.jsx(i,{frontMatter:r})]})}function h(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{h as default,r as frontMatter};
