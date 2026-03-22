import{t as e}from"./jsx-runtime-xty2or4m.js";import{n as t}from"./lib-zKnO7aGa.js";import{n,t as r}from"./_components-vrS0ov66.js";var i=e(),a={tags:[`BFS/DFS`,`Geometry`],title:`Advent of Code 2023 - Day 19: Aplenty`,description:`Advent of Code 2023 - Day 19: Aplenty, a problem that involves BFS/DFS and Geometry. Solution written in R, with detailed walkthrough and proof.`,year:2023,day:19};function o(e){let o={a:`a`,annotation:`annotation`,code:`code`,h1:`h1`,h2:`h2`,math:`math`,mn:`mn`,mo:`mo`,mrow:`mrow`,msup:`msup`,p:`p`,pre:`pre`,semantics:`semantics`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2023 - Day 19`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Aplenty`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(o.p,{children:[`I parse the input to a mapping from name to the rules, where each rule contains a `,(0,i.jsx)(o.code,{children:`cond`}),` and a `,(0,i.jsx)(o.code,{children:`target`}),`.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`$px
cond     target
"a<2006" "qkq"
"m>2090" "A"
"TRUE"   "rfg"

$pv
cond     target
"a>1716" "R"
"TRUE"   "A"

$lnx
cond     target
"m>1548" "A"
"TRUE"   "A"
`})}),`
`,(0,i.jsxs)(o.p,{children:[`For part 1, I just use `,(0,i.jsx)(o.code,{children:`eval`}),`. It's actually trivial to parse these conditions, but what other opportunity do you have to use `,(0,i.jsx)(o.code,{children:`eval`}),`?`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`apply_rule <- function(rule, rating) {
  for (i in seq_len(nrow(rule))) {
    dest <- rule[i, ]
    if (eval(parse(text = dest$cond), envir = rating)) {
      return(dest$target)
    }
  }
  stop("No rule matched")
}
`})}),`
`,(0,i.jsxs)(o.p,{children:[`Now I just repeatedly apply, see if I end up at `,(0,i.jsx)(o.code,{children:`A`}),`.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`res <- sapply(ratings, function(r) {
  current <- "in"
  while (current != "A" && current != "R") {
    rule <- rules[[current]]
    current <- apply_rule(rule, r)
  }
  current == "A"
})
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`Let's think about the process of applying these rules. Each time I go down a path, I know additional information about the input. For example, `,(0,i.jsx)(o.code,{children:`in`}),` → `,(0,i.jsx)(o.code,{children:`qqz`}),` → `,(0,i.jsx)(o.code,{children:`hdj`}),` → `,(0,i.jsx)(o.code,{children:`pv`}),` → `,(0,i.jsx)(o.code,{children:`A`}),` tells me that `,(0,i.jsx)(o.code,{children:`s >= 1351`}),`, `,(0,i.jsx)(o.code,{children:`s < 2771 && m < 1801`}),`, `,(0,i.jsx)(o.code,{children:`m < 839`}),`, `,(0,i.jsx)(o.code,{children:`a < 1717`}),`. Therefore, if we label each edge by its condition, then a path from `,(0,i.jsx)(o.code,{children:`in`}),` to `,(0,i.jsx)(o.code,{children:`A`}),` corresponds to a conjunction of conditions specifying a region of the input space. If we find all paths from `,(0,i.jsx)(o.code,{children:`in`}),` to `,(0,i.jsx)(o.code,{children:`A`}),`, we can take the union of these regions, which is the set of all inputs that lead to `,(0,i.jsx)(o.code,{children:`A`}),`.`]}),`
`,(0,i.jsxs)(o.p,{children:[`There's a pitfall: the conditions aren't mutually exclusive. However, they are applied in order, so if we took a later rule, we know that the earlier rules didn't apply—so the edge condition actually contains the negation of all earlier conditions. For example, the rule from `,(0,i.jsx)(o.code,{children:`qqz`}),` to `,(0,i.jsx)(o.code,{children:`hdj`}),` itself just says `,(0,i.jsx)(o.code,{children:`m < 1801`}),`, but the previous rule says `,(0,i.jsx)(o.code,{children:`s > 2770`}),` and it didn't apply, so we know `,(0,i.jsx)(o.code,{children:`s < 2771`}),`, so the edge has condition `,(0,i.jsx)(o.code,{children:`s < 2771 && m < 1801`}),`.`]}),`
`,(0,i.jsxs)(o.p,{children:[`I built a reverse graph, and then did a DFS from `,(0,i.jsx)(o.code,{children:`A`}),` to `,(0,i.jsx)(o.code,{children:`in`}),`.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`get_paths <- function(rules) {
  paths <- list()
  out_i <- 0
  stk <- stack()
  stk$push(list(node = "A", path = NULL, visited = "A"))

  while (stk$size() > 0) {
    st <- stk$pop()
    node <- st$node
    if (st$node == "in") {
      out_i <- out_i + 1
      paths[[out_i]] <- st$path[st$path != "TRUE"]
      next
    }
    node_rules <- rules[[node]]
    if (is.null(node_rules) || length(node_rules) == 0) {
      next
    }
    sources <- names(node_rules)
    for (s in sources) {
      if (s %in% st$visited) {
        next
      }
      edge_list <- node_rules[[s]]
      for (conds in edge_list) {
        stk$push(list(
          node = s,
          path = c(st$path, conds),
          visited = c(st$visited, s)
        ))
      }
    }
  }

  paths
}
`})}),`
`,(0,i.jsx)(o.p,{children:`This generates a list of paths, such as:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`[[1]]
[1] "m>838"  "s<2771" "m<1801" "s>1350"

[[2]]
[1] "x>2662" "x>1415" "a<2006" "s<1351"

[[3]]
[1] "x<1416" "a<2006" "s<1351"

[[4]]
[1] "s>3448" "s>2770" "s>1350"
`})}),`
`,(0,i.jsxs)(o.p,{children:[`Now we just need to find the union of these regions. This is similar to `,(0,i.jsx)(o.a,{href:`/notes/aoc/2021/22/`,children:`2021 day 22`}),`: each path corresponds to a cuboid in 4D space (bounded by `,(0,i.jsxs)(o.span,{className:`katex`,children:[(0,i.jsx)(o.span,{className:`katex-mathml`,children:(0,i.jsx)(o.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,i.jsxs)(o.semantics,{children:[(0,i.jsxs)(o.mrow,{children:[(0,i.jsx)(o.mo,{stretchy:`false`,children:`[`}),(0,i.jsx)(o.mn,{children:`0`}),(0,i.jsx)(o.mo,{separator:`true`,children:`,`}),(0,i.jsx)(o.mn,{children:`4000`}),(0,i.jsxs)(o.msup,{children:[(0,i.jsx)(o.mo,{stretchy:`false`,children:`]`}),(0,i.jsx)(o.mn,{children:`4`})]})]}),(0,i.jsx)(o.annotation,{encoding:`application/x-tex`,children:`[0, 4000]^4`})]})})}),(0,i.jsx)(o.span,{className:`katex-html`,"aria-hidden":`true`,children:(0,i.jsxs)(o.span,{className:`base`,children:[(0,i.jsx)(o.span,{className:`strut`,style:{height:`1.0641em`,verticalAlign:`-0.25em`}}),(0,i.jsx)(o.span,{className:`mopen`,children:`[`}),(0,i.jsx)(o.span,{className:`mord`,children:`0`}),(0,i.jsx)(o.span,{className:`mpunct`,children:`,`}),(0,i.jsx)(o.span,{className:`mspace`,style:{marginRight:`0.1667em`}}),(0,i.jsx)(o.span,{className:`mord`,children:`4000`}),(0,i.jsxs)(o.span,{className:`mclose`,children:[(0,i.jsx)(o.span,{className:`mclose`,children:`]`}),(0,i.jsx)(o.span,{className:`msupsub`,children:(0,i.jsx)(o.span,{className:`vlist-t`,children:(0,i.jsx)(o.span,{className:`vlist-r`,children:(0,i.jsx)(o.span,{className:`vlist`,style:{height:`0.8141em`},children:(0,i.jsxs)(o.span,{style:{top:`-3.063em`,marginRight:`0.05em`},children:[(0,i.jsx)(o.span,{className:`pstrut`,style:{height:`2.7em`}}),(0,i.jsx)(o.span,{className:`sizing reset-size6 size3 mtight`,children:(0,i.jsx)(o.span,{className:`mord mtight`,children:`4`})})]})})})})})]})]})})]}),`), and we want to find the volume of the union of these cuboids. We can use the same approach as in that problem: maintain a list of "on" and "off" cuboids, and for each new cuboid, add it to the list and add the intersection with each existing cuboid with the opposite sign.`]}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};