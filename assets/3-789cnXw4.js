import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import{n,t as r}from"./_components-BiUCgGl-.js";var i=e(),a={tags:[`String manipulation`],title:`Advent of Code 2024 - Day 3: Mull It Over`,description:`Advent of Code 2024 - Day 3: Mull It Over, a problem that involves String manipulation. Solution written in OCaml, with detailed walkthrough and proof.`,year:2024,day:3};function o(e){let o={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2024 - Day 3`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Mull It Over`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsxs)(o.p,{children:[`This problem pays tribute to `,(0,i.jsx)(o.a,{href:`/notes/aoc/2020/2/`,children:`2020 day 2`}),`.`]}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(o.p,{children:[`I used a regex to extract all `,(0,i.jsx)(o.code,{children:`mul(X,Y)`}),` expressions, as nature intended. The pattern is `,(0,i.jsx)(o.code,{children:`mul\\((\\d{1,3}),(\\d{1,3})\\)`}),`, which captures two numbers between 1 and 999. Then I can iterate over the matches and extract the captured groups.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let re = Re.Perl.compile (Re.Perl.re {|mul\\((\\d{1,3}),(\\d{1,3})\\)|}) in
let matches =
  Re.all re line |> List.map (fun g -> (Re.Group.get g 1, Re.Group.get g 2))
in
let products =
  List.map (fun (a, b) -> int_of_string a * int_of_string b) matches
in
let total = List.fold_left ( + ) 0 products in
Printf.printf "%d\\n" total
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`Since the patterns can't nest in each other, this remains a regex matching problem, just with two additional things to match: `,(0,i.jsx)(o.code,{children:`do\\(\\)`}),` and `,(0,i.jsx)(o.code,{children:`don't\\(\\)`}),`.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let re =
  Re.Perl.compile
    (Re.Perl.re {|mul\\((\\d{1,3}),(\\d{1,3})\\)|do\\(\\)|(don't)\\(\\)|})
in
let matches =
  Re.all re line
  |> List.map (fun g ->
      (Re.Group.get g 0, Re.Group.get_opt g 1, Re.Group.get_opt g 2))
`})}),`
`,(0,i.jsxs)(o.p,{children:[`Each match can be one of three things: `,(0,i.jsx)(o.code,{children:`("mul(X,Y)", Some X, Some Y)`}),`, `,(0,i.jsx)(o.code,{children:`("do()", None, None)`}),`, or `,(0,i.jsx)(o.code,{children:`("don't()", None, None)`}),`. We can iterate over the matches and keep track of whether the state is enabled. Since we are folding anyway, I moved the multiplication and addition into the fold as well to avoid extra mapping and summing steps.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let _, total =
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
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};