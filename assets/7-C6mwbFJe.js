import{u as s,j as e}from"./index-BkHp0GFc.js";import{F as o,a as i}from"./_components-Bb0yU4yQ.js";const a={description:"Advent of Code 2020 - Day 7: Handy Haversacks. Written in Python.",tags:["BFS/DFS"],year:2020,day:7,title:"AoC 2020 D7: Handy Haversacks"};function r(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"AoC 2020 D7: Handy Haversacks"}),`
`,`
`,e.jsx(o,{frontMatter:a}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:'We can model the rules as a directed graph, where each node is a bag color, and each edge points to a bag color that it can contain. We want to find all the bag colors that can eventually contain at least one "shiny gold" bag. This is equivalent to finding all nodes that can reach the "shiny gold" node, or equivalently, all nodes reachable from the "shiny gold" node in the reversed graph. Graph reversal looks like:'}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`rev_graph: defaultdict[str, list[str]] = defaultdict(list)
for parent, children in graph.items():
    for _, child in children:
        rev_graph[child].append(parent)
`})}),`
`,e.jsx(n.p,{children:"As for traversal, I chose DFS because a stack is just a list."}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsx(n.p,{children:`This is DFS in the other direction: starting from "shiny gold", count all the bags it must contain. If a bag contains no other bags, it contributes 1 (itself). Otherwise, it contributes 1 plus the sum of the counts of each child bag color multiplied by the color's number. This feels more recursive than iterative, but still DFS in nature.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`def dfs(node: str) -> int:
    return sum(count * (1 + dfs(child)) for count, child in graph[node])
`})}),`
`,e.jsx(i,{frontMatter:a})]})}function l(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{l as default,a as frontMatter};
