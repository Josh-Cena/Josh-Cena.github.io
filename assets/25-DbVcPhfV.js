import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{n,t as r}from"./_components-DcdEf7Vf.js";var i=e();function a(e){let a={a:`a`,code:`code`,h1:`h1`,img:`img`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2023 - Day 25`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Snowverload`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,`
`,(0,i.jsxs)(a.p,{children:[`I think this is an easy cheat. Since I already use `,(0,i.jsx)(a.a,{href:`https://r.igraph.org/index.html`,children:(0,i.jsx)(a.code,{children:`igraph`})}),`, I can directly find the min-cut, i.e., the smallest set of edges that disconnects the graph.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-R`,children:`parts <- strsplit(data, ": ")
nodes <- sapply(parts, function(x) x[1])
targets <- lapply(parts, function(x) strsplit(x[2], " ")[[1]])
nodes <- unique(c(nodes, unlist(targets)))
graph <- igraph::make_empty_graph(n = length(nodes), directed = FALSE)
for (i in seq_along(targets)) {
  graph <- igraph::add_edges(
    graph,
    unlist(sapply(targets[[i]], function(x) c(i, match(x, nodes))))
  )
}
igraph::V(graph)$label <- nodes
min_cut <- igraph::min_cut(graph, value.only = FALSE)
stopifnot(min_cut$value == 3)
cat(length(min_cut$partition1) * length(min_cut$partition2), "\\n")
`})}),`
`,(0,i.jsxs)(a.p,{children:[`Of course one could just implement the `,(0,i.jsx)(a.a,{href:`https://en.wikipedia.org/wiki/Minimum_cut`,children:`min-cut algorithm`}),` by hand, but why bother??`]}),`
`,(0,i.jsx)(a.p,{children:`Alternative you can export the graph and look at it directly:`}),`
`,(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{src:`https://github.com/Josh-Cena/aoc2023/blob/master/src/day25.png?raw=true`,alt:`Graph visualization`})}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Graph theory`,`Manual inspection`],title:`Advent of Code 2023 - Day 25: Snowverload`,description:`Advent of Code 2023 - Day 25: Snowverload, a problem that involves Graph theory and Manual inspection. Solution written in R, with detailed walkthrough and proof.`,year:2023,day:25};export{o as default};