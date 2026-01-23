import{u as a,j as e}from"./index-RGQIYrCD.js";import{P as i,a as o}from"./_components-QBhgxPvn.js";const t={tags:["BFS/DFS"],description:"Advent of Code 2024 - Day 7: Bridge Repair, a problem that involves BFS/DFS. Solution written in OCaml, with detailed walkthrough and proof.",year:2024,day:7,title:"Advent of Code 2024 - Day 7: Bridge Repair"};function r(n){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",math:"math",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h1,{children:["Advent of Code 2024 - Day 7",e.jsx(s.span,{className:"subtitle",children:"Bridge Repair"})]}),`
`,`
`,e.jsx(i,{frontMatter:t}),`
`,e.jsxs(s.p,{children:["This problem pays tribute to ",e.jsx(s.a,{href:"/notes/aoc/2022/9/",children:"2022 day 9"}),"."]}),`
`,e.jsx(s.h2,{children:"Part 1"}),`
`,e.jsxs(s.p,{children:["Obviously this problem involves an exponential decision space: for every space, we can insert either a ",e.jsx(s.code,{children:"+"})," or a ",e.jsx(s.code,{children:"*"}),". An easy optimization is to stop whenever we find a valid expression, but when the expression actually ",e.jsx(s.em,{children:"doesn't"})," work we are still forced to explore the whole space. In the input, the list of operands can have length up to 12, ",e.jsxs(s.span,{className:"katex",children:[e.jsx(s.span,{className:"katex-mathml",children:e.jsx(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:e.jsxs(s.semantics,{children:[e.jsxs(s.mrow,{children:[e.jsxs(s.msup,{children:[e.jsx(s.mn,{children:"2"}),e.jsx(s.mn,{children:"11"})]}),e.jsx(s.mo,{children:"="}),e.jsx(s.mn,{children:"2048"})]}),e.jsx(s.annotation,{encoding:"application/x-tex",children:"2^{11} = 2048"})]})})}),e.jsxs(s.span,{className:"katex-html","aria-hidden":"true",children:[e.jsxs(s.span,{className:"base",children:[e.jsx(s.span,{className:"strut",style:{height:"0.8141em"}}),e.jsxs(s.span,{className:"mord",children:[e.jsx(s.span,{className:"mord",children:"2"}),e.jsx(s.span,{className:"msupsub",children:e.jsx(s.span,{className:"vlist-t",children:e.jsx(s.span,{className:"vlist-r",children:e.jsx(s.span,{className:"vlist",style:{height:"0.8141em"},children:e.jsxs(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[e.jsx(s.span,{className:"pstrut",style:{height:"2.7em"}}),e.jsx(s.span,{className:"sizing reset-size6 size3 mtight",children:e.jsx(s.span,{className:"mord mtight",children:e.jsx(s.span,{className:"mord mtight",children:"11"})})})]})})})})})]}),e.jsx(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),e.jsx(s.span,{className:"mrel",children:"="}),e.jsx(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),e.jsxs(s.span,{className:"base",children:[e.jsx(s.span,{className:"strut",style:{height:"0.6444em"}}),e.jsx(s.span,{className:"mord",children:"2048"})]})]})]})," possibilities, which is not too bad."]}),`
`,e.jsxs(s.p,{children:["However, we can prune edges that we know ",e.jsx(s.em,{children:"will never work"}),". The trick is to construct the expression ",e.jsx(s.em,{children:"backwards"}),"."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-plain",children:`(a1 op1 a2) op2 a3) op3 a4) ... op[n-1] an = target
`})}),`
`,e.jsxs(s.p,{children:["When we try to fill in ",e.jsx(s.code,{children:"op1"}),", we don't know anything and must try both ",e.jsx(s.code,{children:"+"})," and ",e.jsx(s.code,{children:"*"}),"; but what about ",e.jsx(s.code,{children:"op[n-1]"}),"? If we want to fill it with ",e.jsx(s.code,{children:"*"}),", then we know that ",e.jsx(s.code,{children:"b * an = target"})," for some ",e.jsx(s.code,{children:"b"}),", which means that ",e.jsx(s.code,{children:"target"})," must be divisible by ",e.jsx(s.code,{children:"an"}),". If it's not, then we can skip the ",e.jsx(s.code,{children:"*"})," option for ",e.jsx(s.code,{children:"op[n-1]"}),". The ",e.jsx(s.code,{children:"+"})," option is always valid, so we can always try it. After filling in ",e.jsx(s.code,{children:"op[n-1]"}),", the problem has been reduced to one of the following:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-plain",children:`(a1 op1 a2) op2 a3) op3 a4) ... op[n-2] an-1 = target - an
(a1 op1 a2) op2 a3) op3 a4) ... op[n-2] an-1 = target / an
`})}),`
`,e.jsxs(s.p,{children:["And we repeat until we get ",e.jsx(s.code,{children:"a1 = target"}),", which is trivial to check. The merit of this approach is that often times there remains only one valid option for the next operator, so we can skip a large portion of the search space, regardless of whether the final expression is valid or not. If a valid solution is found, it still returns early."]}),`
`,e.jsxs(s.p,{children:["The order of the two tests don't matter, but I prefer to test the ",e.jsx(s.code,{children:"*"})," option first since if it is ",e.jsx(s.code,{children:"true"})," then that is more likely to lead to a solution, and we can skip the ",e.jsx(s.code,{children:"+"})," option due to short circuiting."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ocaml",children:`let rec can_calc cur_res ops =
  match ops with
  | [] -> failwith "No operators left"
  | [ op ] -> cur_res = op
  | op :: rest ->
      (op <> 0 && cur_res mod op = 0 && can_calc (cur_res / op) rest)
      || can_calc (cur_res - op) rest
`})}),`
`,e.jsx(s.p,{children:"Note that this takes operands right-to-left, so we need to reverse the list."}),`
`,e.jsx(s.h2,{children:"Part 2"}),`
`,e.jsxs(s.p,{children:["The only difference is the addition of ",e.jsx(s.code,{children:"||"}),", which doesn't change our approach of searching backwards. Now we need to consider the reverse operation of ",e.jsx(s.code,{children:"||"}),": for ",e.jsx(s.code,{children:"*"}),", we test if ",e.jsx(s.code,{children:"target / an"})," is valid; for ",e.jsx(s.code,{children:"||"}),", we need to test if we can strip ",e.jsx(s.code,{children:"an"})," from ",e.jsx(s.code,{children:"target"})," as a string suffix, and still have some numbers left."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ocaml",children:`let rec can_calc cur_res ops =
  match ops with
  | [] -> failwith "No operators left"
  | [ op ] -> cur_res = op
  | op :: rest ->
      (op <> 0 && cur_res mod op = 0 && can_calc (cur_res / op) rest)
      || (let op_str = string_of_int op in
          let cur_str = string_of_int cur_res in
          String.length cur_str > String.length op_str
          && String.ends_with ~suffix:op_str cur_str
          &&
          let remaining_str =
            String.sub cur_str 0 (String.length cur_str - String.length op_str)
          in
          can_calc (int_of_string remaining_str) rest)
      || (cur_res > op && can_calc (cur_res - op) rest)
`})}),`
`,e.jsx(o,{frontMatter:t})]})}function h(n={}){const{wrapper:s}={...a(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{h as default,t as frontMatter};
