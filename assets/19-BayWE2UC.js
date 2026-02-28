import{u as i,j as e}from"./index-DKP0lJ-S.js";import{P as r,a as o}from"./_components-DSPmqsHQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";const t={tags:["BFS/DFS","Geometry"],title:"Advent of Code 2023 - Day 19: Aplenty",description:"Advent of Code 2023 - Day 19: Aplenty, a problem that involves BFS/DFS and Geometry. Solution written in R, with detailed walkthrough and proof.",year:2023,day:19};function a(s){const n={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",math:"math",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2023 - Day 19",e.jsx(n.span,{className:"subtitle",children:"Aplenty"})]}),`
`,`
`,e.jsx(r,{frontMatter:t}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:["I parse the input to a mapping from name to the rules, where each rule contains a ",e.jsx(n.code,{children:"cond"})," and a ",e.jsx(n.code,{children:"target"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plain",children:`$px
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
`,e.jsxs(n.p,{children:["For part 1, I just use ",e.jsx(n.code,{children:"eval"}),". It's actually trivial to parse these conditions, but what other opportunity do you have to use ",e.jsx(n.code,{children:"eval"}),"?"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`apply_rule <- function(rule, rating) {
  for (i in seq_len(nrow(rule))) {
    dest <- rule[i, ]
    if (eval(parse(text = dest$cond), envir = rating)) {
      return(dest$target)
    }
  }
  stop("No rule matched")
}
`})}),`
`,e.jsxs(n.p,{children:["Now I just repeatedly apply, see if I end up at ",e.jsx(n.code,{children:"A"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`res <- sapply(ratings, function(r) {
  current <- "in"
  while (current != "A" && current != "R") {
    rule <- rules[[current]]
    current <- apply_rule(rule, r)
  }
  current == "A"
})
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["Let's think about the process of applying these rules. Each time I go down a path, I know additional information about the input. For example, ",e.jsx(n.code,{children:"in"})," → ",e.jsx(n.code,{children:"qqz"})," → ",e.jsx(n.code,{children:"hdj"})," → ",e.jsx(n.code,{children:"pv"})," → ",e.jsx(n.code,{children:"A"})," tells me that ",e.jsx(n.code,{children:"s >= 1351"}),", ",e.jsx(n.code,{children:"s < 2771 && m < 1801"}),", ",e.jsx(n.code,{children:"m < 839"}),", ",e.jsx(n.code,{children:"a < 1717"}),". Therefore, if we label each edge by its condition, then a path from ",e.jsx(n.code,{children:"in"})," to ",e.jsx(n.code,{children:"A"})," corresponds to a conjunction of conditions specifying a region of the input space. If we find all paths from ",e.jsx(n.code,{children:"in"})," to ",e.jsx(n.code,{children:"A"}),", we can take the union of these regions, which is the set of all inputs that lead to ",e.jsx(n.code,{children:"A"}),"."]}),`
`,e.jsxs(n.p,{children:["There's a pitfall: the conditions aren't mutually exclusive. However, they are applied in order, so if we took a later rule, we know that the earlier rules didn't apply—so the edge condition actually contains the negation of all earlier conditions. For example, the rule from ",e.jsx(n.code,{children:"qqz"})," to ",e.jsx(n.code,{children:"hdj"})," itself just says ",e.jsx(n.code,{children:"m < 1801"}),", but the previous rule says ",e.jsx(n.code,{children:"s > 2770"})," and it didn't apply, so we know ",e.jsx(n.code,{children:"s < 2771"}),", so the edge has condition ",e.jsx(n.code,{children:"s < 2771 && m < 1801"}),"."]}),`
`,e.jsxs(n.p,{children:["I built a reverse graph, and then did a DFS from ",e.jsx(n.code,{children:"A"})," to ",e.jsx(n.code,{children:"in"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`get_paths <- function(rules) {
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
`,e.jsx(n.p,{children:"This generates a list of paths, such as:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plain",children:`[[1]]
[1] "m>838"  "s<2771" "m<1801" "s>1350"

[[2]]
[1] "x>2662" "x>1415" "a<2006" "s<1351"

[[3]]
[1] "x<1416" "a<2006" "s<1351"

[[4]]
[1] "s>3448" "s>2770" "s>1350"
`})}),`
`,e.jsxs(n.p,{children:["Now we just need to find the union of these regions. This is similar to ",e.jsx(n.a,{href:"/notes/aoc/2021/22/",children:"2021 day 22"}),": each path corresponds to a cuboid in 4D space (bounded by ",e.jsxs(n.span,{className:"katex",children:[e.jsx(n.span,{className:"katex-mathml",children:e.jsx(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:e.jsxs(n.semantics,{children:[e.jsxs(n.mrow,{children:[e.jsx(n.mo,{stretchy:"false",children:"["}),e.jsx(n.mn,{children:"0"}),e.jsx(n.mo,{separator:"true",children:","}),e.jsx(n.mn,{children:"4000"}),e.jsxs(n.msup,{children:[e.jsx(n.mo,{stretchy:"false",children:"]"}),e.jsx(n.mn,{children:"4"})]})]}),e.jsx(n.annotation,{encoding:"application/x-tex",children:"[0, 4000]^4"})]})})}),e.jsx(n.span,{className:"katex-html","aria-hidden":"true",children:e.jsxs(n.span,{className:"base",children:[e.jsx(n.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),e.jsx(n.span,{className:"mopen",children:"["}),e.jsx(n.span,{className:"mord",children:"0"}),e.jsx(n.span,{className:"mpunct",children:","}),e.jsx(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e.jsx(n.span,{className:"mord",children:"4000"}),e.jsxs(n.span,{className:"mclose",children:[e.jsx(n.span,{className:"mclose",children:"]"}),e.jsx(n.span,{className:"msupsub",children:e.jsx(n.span,{className:"vlist-t",children:e.jsx(n.span,{className:"vlist-r",children:e.jsx(n.span,{className:"vlist",style:{height:"0.8141em"},children:e.jsxs(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[e.jsx(n.span,{className:"pstrut",style:{height:"2.7em"}}),e.jsx(n.span,{className:"sizing reset-size6 size3 mtight",children:e.jsx(n.span,{className:"mord mtight",children:"4"})})]})})})})})]})]})})]}),'), and we want to find the volume of the union of these cuboids. We can use the same approach as in that problem: maintain a list of "on" and "off" cuboids, and for each new cuboid, add it to the list and add the intersection with each existing cuboid with the opposite sign.']}),`
`,e.jsx(o,{frontMatter:t})]})}function h(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{h as default,t as frontMatter};
