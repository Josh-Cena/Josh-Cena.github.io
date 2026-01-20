import{u as s,j as e}from"./index-BGRydkNA.js";import{F as o,a as i}from"./_components-CaosYk2-.js";const a={tags:["BFS/DFS"],description:"Advent of Code 2020 - Day 7: Handy Haversacks, a problem that involves BFS/DFS. Solution written in Python, with detailed walkthrough and proof.",year:2020,day:7,title:"Advent of Code 2020 - Day 7: Handy Haversacks"};function r(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.h1,{children:["Advent of Code 2020 - Day 7",e.jsx(t.span,{className:"subtitle",children:"Handy Haversacks"})]}),`
`,`
`,e.jsx(o,{frontMatter:a}),`
`,e.jsx(t.h2,{children:"Part 1"}),`
`,e.jsx(t.p,{children:'We can model the rules as a directed graph, where each node is a bag color, and each edge points to a bag color that it can contain. We want to find all the bag colors that can eventually contain at least one "shiny gold" bag. This is equivalent to finding all nodes that can reach the "shiny gold" node, or equivalently, all nodes reachable from the "shiny gold" node in the reversed graph. Graph reversal looks like:'}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-python",children:`rev_graph: defaultdict[str, list[str]] = defaultdict(list)
for parent, children in graph.items():
    for _, child in children:
        rev_graph[child].append(parent)
`})}),`
`,e.jsx(t.p,{children:"As for traversal, I chose DFS because a stack is just a list."}),`
`,e.jsx(t.h2,{children:"Part 2"}),`
`,e.jsx(t.p,{children:`This is DFS in the other direction: starting from "shiny gold", count all the bags it must contain. If a bag contains no other bags, it contributes 1 (itself). Otherwise, it contributes 1 plus the sum of the counts of each child bag color multiplied by the color's number. This feels more recursive than iterative, but still DFS in nature.`}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-python",children:`def dfs(node: str) -> int:
    return sum(count * (1 + dfs(child)) for count, child in graph[node])
`})}),`
`,e.jsx(i,{frontMatter:a})]})}function h(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{h as default,a as frontMatter};
