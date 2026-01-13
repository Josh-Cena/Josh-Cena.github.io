import{u as o,j as e}from"./index-qevQNCpR.js";import{F as s,a as r}from"./_components-DKxNAZHD.js";const i={tags:["Cellular automata","Grid walking"],description:"Advent of Code 2020 - Day 24: Lobby Layout, a problem that involves Cellular automata and Grid walking. Solution written in Python, with detailed walkthrough and proof.",year:2020,day:24,title:"Advent of Code 2020 - Day 24: Lobby Layout"};function a(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2020 - Day 24",e.jsx(n.span,{className:"subtitle",children:"Lobby Layout"})]}),`
`,`
`,e.jsx(s,{frontMatter:i}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:"The hexagonal grid looks like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plain",children:`1      A   B
2    C   D   E
3  F   G   H   I
   1 2 3 4 5 6 7
`})}),`
`,e.jsx(n.p,{children:"We can still label them by rows and columns, and now the neighbors are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"e"}),": ",e.jsx(n.code,{children:"(r, c + 2)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"w"}),": ",e.jsx(n.code,{children:"(r, c - 2)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ne"}),": ",e.jsx(n.code,{children:"(r - 1, c + 1)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"nw"}),": ",e.jsx(n.code,{children:"(r - 1, c - 1)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"se"}),": ",e.jsx(n.code,{children:"(r + 1, c + 1)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sw"}),": ",e.jsx(n.code,{children:"(r + 1, c - 1)"})]}),`
`]}),`
`,e.jsx(n.p,{children:"This encoding turns this problem back into a grid problem, where we can use a set of coordinates to track black tiles."}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"/notes/aoc/2019/24/",children:"Yet"})," ",e.jsx(n.a,{href:"/notes/aoc/2020/11/",children:"another"})," ",e.jsx(n.a,{href:"/notes/aoc/2020/17/",children:"cellular automaton"}),". The only twist is that the grid is hexagonal instead of square, but that just requires tweaks to the neighbor calculation. Again, the template remains unchanged:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`def evolve(active: set[Point], get_neighbors: Callable[[Point], list[Point]]) -> set[Point]:
    new_active = set[Point]()
    candidates = active.union(
        neighbor for p in active for neighbor in get_neighbors(p)
    )
    for p in candidates:
        active_neighbors = sum(
            (neighbor in active) for neighbor in get_neighbors(p)
        )
        if p in active and should_stay_active(active_neighbors):
            new_active.add(p)
        elif p not in active and should_become_active(active_neighbors):
            new_active.add(p)
    return new_active
`})}),`
`,e.jsx(n.p,{children:"The neighbors are just the six directions defined above."}),`
`,e.jsx(r,{frontMatter:i})]})}function d(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{d as default,i as frontMatter};
