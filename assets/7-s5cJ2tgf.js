import{t as e}from"./jsx-runtime-DAs1UGHr.js";import{n as t}from"./lib-T-nEWGuF.js";import{n,t as r}from"./_components-DgNpooeQ.js";var i=e(),a={tags:[`BFS/DFS`],title:`Advent of Code 2024 - Day 7: Bridge Repair`,description:`Advent of Code 2024 - Day 7: Bridge Repair, a problem that involves BFS/DFS. Solution written in OCaml, with detailed walkthrough and proof.`,year:2024,day:7};function o(e){let o={a:`a`,annotation:`annotation`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,math:`math`,mn:`mn`,mo:`mo`,mrow:`mrow`,msup:`msup`,p:`p`,pre:`pre`,semantics:`semantics`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2024 - Day 7`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Bridge Repair`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsxs)(o.p,{children:[`This problem pays tribute to `,(0,i.jsx)(o.a,{href:`/notes/aoc/2022/9/`,children:`2022 day 9`}),`.`]}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(o.p,{children:[`Obviously this problem involves an exponential decision space: for every space, we can insert either a `,(0,i.jsx)(o.code,{children:`+`}),` or a `,(0,i.jsx)(o.code,{children:`*`}),`. An easy optimization is to stop whenever we find a valid expression, but when the expression actually `,(0,i.jsx)(o.em,{children:`doesn't`}),` work we are still forced to explore the whole space. In the input, the list of operands can have length up to 12, `,(0,i.jsxs)(o.span,{className:`katex`,children:[(0,i.jsx)(o.span,{className:`katex-mathml`,children:(0,i.jsx)(o.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,i.jsxs)(o.semantics,{children:[(0,i.jsxs)(o.mrow,{children:[(0,i.jsxs)(o.msup,{children:[(0,i.jsx)(o.mn,{children:`2`}),(0,i.jsx)(o.mn,{children:`11`})]}),(0,i.jsx)(o.mo,{children:`=`}),(0,i.jsx)(o.mn,{children:`2048`})]}),(0,i.jsx)(o.annotation,{encoding:`application/x-tex`,children:`2^{11} = 2048`})]})})}),(0,i.jsxs)(o.span,{className:`katex-html`,"aria-hidden":`true`,children:[(0,i.jsxs)(o.span,{className:`base`,children:[(0,i.jsx)(o.span,{className:`strut`,style:{height:`0.8141em`}}),(0,i.jsxs)(o.span,{className:`mord`,children:[(0,i.jsx)(o.span,{className:`mord`,children:`2`}),(0,i.jsx)(o.span,{className:`msupsub`,children:(0,i.jsx)(o.span,{className:`vlist-t`,children:(0,i.jsx)(o.span,{className:`vlist-r`,children:(0,i.jsx)(o.span,{className:`vlist`,style:{height:`0.8141em`},children:(0,i.jsxs)(o.span,{style:{top:`-3.063em`,marginRight:`0.05em`},children:[(0,i.jsx)(o.span,{className:`pstrut`,style:{height:`2.7em`}}),(0,i.jsx)(o.span,{className:`sizing reset-size6 size3 mtight`,children:(0,i.jsx)(o.span,{className:`mord mtight`,children:(0,i.jsx)(o.span,{className:`mord mtight`,children:`11`})})})]})})})})})]}),(0,i.jsx)(o.span,{className:`mspace`,style:{marginRight:`0.2778em`}}),(0,i.jsx)(o.span,{className:`mrel`,children:`=`}),(0,i.jsx)(o.span,{className:`mspace`,style:{marginRight:`0.2778em`}})]}),(0,i.jsxs)(o.span,{className:`base`,children:[(0,i.jsx)(o.span,{className:`strut`,style:{height:`0.6444em`}}),(0,i.jsx)(o.span,{className:`mord`,children:`2048`})]})]})]}),` possibilities, which is not too bad.`]}),`
`,(0,i.jsxs)(o.p,{children:[`However, we can prune edges that we know `,(0,i.jsx)(o.em,{children:`will never work`}),`. The trick is to construct the expression `,(0,i.jsx)(o.em,{children:`backwards`}),`.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`(a1 op1 a2) op2 a3) op3 a4) ... op[n-1] an = target
`})}),`
`,(0,i.jsxs)(o.p,{children:[`When we try to fill in `,(0,i.jsx)(o.code,{children:`op1`}),`, we don't know anything and must try both `,(0,i.jsx)(o.code,{children:`+`}),` and `,(0,i.jsx)(o.code,{children:`*`}),`; but what about `,(0,i.jsx)(o.code,{children:`op[n-1]`}),`? If we want to fill it with `,(0,i.jsx)(o.code,{children:`*`}),`, then we know that `,(0,i.jsx)(o.code,{children:`b * an = target`}),` for some `,(0,i.jsx)(o.code,{children:`b`}),`, which means that `,(0,i.jsx)(o.code,{children:`target`}),` must be divisible by `,(0,i.jsx)(o.code,{children:`an`}),`. If it's not, then we can skip the `,(0,i.jsx)(o.code,{children:`*`}),` option for `,(0,i.jsx)(o.code,{children:`op[n-1]`}),`. The `,(0,i.jsx)(o.code,{children:`+`}),` option is always valid, so we can always try it. After filling in `,(0,i.jsx)(o.code,{children:`op[n-1]`}),`, the problem has been reduced to one of the following:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`(a1 op1 a2) op2 a3) op3 a4) ... op[n-2] an-1 = target - an
(a1 op1 a2) op2 a3) op3 a4) ... op[n-2] an-1 = target / an
`})}),`
`,(0,i.jsxs)(o.p,{children:[`And we repeat until we get `,(0,i.jsx)(o.code,{children:`a1 = target`}),`, which is trivial to check. The merit of this approach is that often times there remains only one valid option for the next operator, so we can skip a large portion of the search space, regardless of whether the final expression is valid or not. If a valid solution is found, it still returns early.`]}),`
`,(0,i.jsxs)(o.p,{children:[`The order of the two tests don't matter, but I prefer to test the `,(0,i.jsx)(o.code,{children:`*`}),` option first since if it is `,(0,i.jsx)(o.code,{children:`true`}),` then that is more likely to lead to a solution, and we can skip the `,(0,i.jsx)(o.code,{children:`+`}),` option due to short circuiting.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let rec can_calc cur_res ops =
  match ops with
  | [] -> failwith "No operators left"
  | [ op ] -> cur_res = op
  | op :: rest ->
      (op <> 0 && cur_res mod op = 0 && can_calc (cur_res / op) rest)
      || can_calc (cur_res - op) rest
`})}),`
`,(0,i.jsx)(o.p,{children:`Note that this takes operands right-to-left, so we need to reverse the list.`}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`The only difference is the addition of `,(0,i.jsx)(o.code,{children:`||`}),`, which doesn't change our approach of searching backwards. Now we need to consider the reverse operation of `,(0,i.jsx)(o.code,{children:`||`}),`: for `,(0,i.jsx)(o.code,{children:`*`}),`, we test if `,(0,i.jsx)(o.code,{children:`target / an`}),` is valid; for `,(0,i.jsx)(o.code,{children:`||`}),`, we need to test if we can strip `,(0,i.jsx)(o.code,{children:`an`}),` from `,(0,i.jsx)(o.code,{children:`target`}),` as a string suffix, and still have some numbers left.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let rec can_calc cur_res ops =
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
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};