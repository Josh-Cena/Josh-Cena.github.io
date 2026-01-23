import{u as i,j as n}from"./index-RGQIYrCD.js";import{P as s,a as o}from"./_components-QBhgxPvn.js";const a={tags:["Graph theory","Manual inspection"],description:"Advent of Code 2023 - Day 25: Snowverload, a problem that involves Graph theory and Manual inspection. Solution written in R, with detailed walkthrough and proof.",year:2023,day:25,title:"Advent of Code 2023 - Day 25: Snowverload"};function r(e){const t={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",span:"span",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsxs(t.h1,{children:["Advent of Code 2023 - Day 25",n.jsx(t.span,{className:"subtitle",children:"Snowverload"})]}),`
`,`
`,n.jsx(s,{frontMatter:a}),`
`,`
`,n.jsxs(t.p,{children:["I think this is an easy cheat. Since I already use ",n.jsx(t.a,{href:"https://r.igraph.org/index.html",children:n.jsx(t.code,{children:"igraph"})}),", I can directly find the min-cut, i.e., the smallest set of edges that disconnects the graph."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-R",children:`parts <- strsplit(data, ": ")
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
`,n.jsxs(t.p,{children:["Of course one could just implement the ",n.jsx(t.a,{href:"https://en.wikipedia.org/wiki/Minimum_cut",children:"min-cut algorithm"})," by hand, but why bother??"]}),`
`,n.jsx(t.p,{children:"Alternative you can export the graph and look at it directly:"}),`
`,n.jsx(t.p,{children:n.jsx(t.img,{src:"https://github.com/Josh-Cena/aoc2023/blob/master/src/day25.png?raw=true",alt:"Graph visualization"})}),`
`,n.jsx(o,{frontMatter:a})]})}function c(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r(e)}export{c as default,a as frontMatter};
