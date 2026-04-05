import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-BHnTV9cU.js";import"./Link-CEJsqf-b.js";import{n,t as r}from"./_components-CjKNIGmQ.js";var i=e();function a(e){let a={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2020 - Day 24`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Lobby Layout`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.h2,{children:`Part 1`}),`
`,(0,i.jsx)(a.p,{children:`The hexagonal grid looks like this:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-plain`,children:`1      A   B
2    C   D   E
3  F   G   H   I
   1 2 3 4 5 6 7
`})}),`
`,(0,i.jsx)(a.p,{children:`We can still label them by rows and columns, and now the neighbors are:`}),`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:`e`}),`: `,(0,i.jsx)(a.code,{children:`(r, c + 2)`})]}),`
`,(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:`w`}),`: `,(0,i.jsx)(a.code,{children:`(r, c - 2)`})]}),`
`,(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:`ne`}),`: `,(0,i.jsx)(a.code,{children:`(r - 1, c + 1)`})]}),`
`,(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:`nw`}),`: `,(0,i.jsx)(a.code,{children:`(r - 1, c - 1)`})]}),`
`,(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:`se`}),`: `,(0,i.jsx)(a.code,{children:`(r + 1, c + 1)`})]}),`
`,(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:`sw`}),`: `,(0,i.jsx)(a.code,{children:`(r + 1, c - 1)`})]}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`This encoding turns this problem back into a grid problem, where we can use a set of coordinates to track black tiles.`}),`
`,(0,i.jsx)(a.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:`/notes/aoc/2019/24/`,children:`Yet`}),` `,(0,i.jsx)(a.a,{href:`/notes/aoc/2020/11/`,children:`another`}),` `,(0,i.jsx)(a.a,{href:`/notes/aoc/2020/17/`,children:`cellular automaton`}),`. The only twist is that the grid is hexagonal instead of square, but that just requires tweaks to the neighbor calculation. Again, the template remains unchanged:`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-python`,children:`def evolve(active: set[Point], get_neighbors: Callable[[Point], list[Point]]) -> set[Point]:
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
`,(0,i.jsx)(a.p,{children:`The neighbors are just the six directions defined above.`}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Cellular automata`,`Grid walking`],title:`Advent of Code 2020 - Day 24: Lobby Layout`,description:`Advent of Code 2020 - Day 24: Lobby Layout, a problem that involves Cellular automata and Grid walking. Solution written in Python, with detailed walkthrough and proof.`,year:2020,day:24};export{o as default};