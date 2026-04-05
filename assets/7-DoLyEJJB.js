import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-BHnTV9cU.js";import"./Link-CEJsqf-b.js";import{n,t as r}from"./_components-CjKNIGmQ.js";var i=e();function a(e){let a={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2020 - Day 7`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Handy Haversacks`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.h2,{children:`Part 1`}),`
`,(0,i.jsx)(a.p,{children:`We can model the rules as a directed graph, where each node is a bag color, and each edge points to a bag color that it can contain. We want to find all the bag colors that can eventually contain at least one "shiny gold" bag. This is equivalent to finding all nodes that can reach the "shiny gold" node, or equivalently, all nodes reachable from the "shiny gold" node in the reversed graph. Graph reversal looks like:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-python`,children:`rev_graph: defaultdict[str, list[str]] = defaultdict(list)
for parent, children in graph.items():
    for _, child in children:
        rev_graph[child].append(parent)
`})}),`
`,(0,i.jsx)(a.p,{children:`As for traversal, I chose DFS because a stack is just a list.`}),`
`,(0,i.jsx)(a.h2,{children:`Part 2`}),`
`,(0,i.jsx)(a.p,{children:`This is DFS in the other direction: starting from "shiny gold", count all the bags it must contain. If a bag contains no other bags, it contributes 1 (itself). Otherwise, it contributes 1 plus the sum of the counts of each child bag color multiplied by the color's number. This feels more recursive than iterative, but still DFS in nature.`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-python`,children:`def dfs(node: str) -> int:
    return sum(count * (1 + dfs(child)) for count, child in graph[node])
`})}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`BFS/DFS`],title:`Advent of Code 2020 - Day 7: Handy Haversacks`,description:`Advent of Code 2020 - Day 7: Handy Haversacks, a problem that involves BFS/DFS. Solution written in Python, with detailed walkthrough and proof.`,year:2020,day:7};export{o as default};