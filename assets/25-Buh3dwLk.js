import{u as i,j as t}from"./index-BVdbyz0p.js";import{F as s,a as o}from"./_components-ozm2G8yB.js";const a={tags:["Graph theory","Manual inspection"],description:"Advent of Code 2023 - Day 25: Snowverload, a problem that involves Graph theory and Manual inspection. Solution written in R, with detailed walkthrough and proof.",year:2023,day:25,title:"Advent of Code 2023 - Day 25: Snowverload"};function r(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",span:"span",...i(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsxs(n.h1,{children:["Advent of Code 2023 - Day 25",t.jsx(n.span,{className:"subtitle",children:"Snowverload"})]}),`
`,`
`,t.jsx(s,{frontMatter:a}),`
`,`
`,t.jsxs(n.p,{children:["I think this is an easy cheat. Since I already use ",t.jsx(n.a,{href:"https://r.igraph.org/index.html",children:t.jsx(n.code,{children:"igraph"})}),", I can directly find the min-cut, i.e., the smallest set of edges that disconnects the graph."]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-R",children:`parts <- strsplit(data, ": ")
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
`,t.jsxs(n.p,{children:["Of course one could just implement the ",t.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Minimum_cut",children:"min-cut algorithm"})," by hand, but why bother??"]}),`
`,t.jsx(n.p,{children:"Alternative you can export the graph and look at it directly:"}),`
`,t.jsx("img",{src:"https://github.com/Josh-Cena/aoc2023/blob/master/src/day25.png?raw=true",alt:"Graph visualization",width:"1668",height:"1367",style:{maxWidth:"100%",height:"auto"}}),`
`,t.jsx(o,{frontMatter:a})]})}function l(e={}){const{wrapper:n}={...i(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(r,{...e})}):r(e)}export{l as default,a as frontMatter};
