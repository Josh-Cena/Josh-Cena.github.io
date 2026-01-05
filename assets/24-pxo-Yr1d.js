import{u as o,j as e}from"./index-MRNusryy.js";import{F as s,a}from"./_components-BFU_Acax.js";const t={description:"Advent of Code 2020 - Day 24: Lobby Layout. Written in Python.",tags:["Cellular automata","Grid walking"],year:2020,day:24,title:"AoC 2020 D24: Lobby Layout"};function r(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"AoC 2020 D24: Lobby Layout"}),`
`,`
`,e.jsx(s,{frontMatter:t}),`
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
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"/notes/aoc/2019/24",children:"Yet"})," ",e.jsx(n.a,{href:"//notes/aoc/2020/11",children:"another"})," ",e.jsx(n.a,{href:"/notes/aoc/2020/17",children:"cellular automaton"}),". The only twist is that the grid is hexagonal instead of square, but that just requires tweaks to the neighbor calculation. Again, the template remains unchanged:"]}),`
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
`,e.jsx(a,{frontMatter:t})]})}function d(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{d as default,t as frontMatter};
