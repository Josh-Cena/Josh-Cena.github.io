import{u as a,j as e}from"./index-BEXjlMni.js";import{P as r,a as s}from"./_components-Rjxg5wzU.js";import"./_commonjsHelpers-Cpj98o6Y.js";const i={tags:["Cellular automata"],title:"Advent of Code 2020 - Day 17: Conway Cubes",description:"Advent of Code 2020 - Day 17: Conway Cubes, a problem that involves Cellular automata. Solution written in Python, with detailed walkthrough and proof.",year:2020,day:17};function o(t){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",span:"span",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2020 - Day 17",e.jsx(n.span,{className:"subtitle",children:"Conway Cubes"})]}),`
`,`
`,e.jsx(r,{frontMatter:i}),`
`,e.jsxs(n.p,{children:["Literally like ",e.jsx(n.a,{href:"/notes/aoc/2019/24/",children:"any"})," ",e.jsx(n.a,{href:"/notes/aoc/2020/11/",children:"other"})," cellular automaton problem. The general template looks like this:"]}),`
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
`,e.jsx(n.p,{children:"Part 1 has 3D points and part 2 has 4D points, but otherwise they're identical. The only difference is the neighbor function. The biggest struggle might be how to get the types right in Python 3.9."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`Point = TypeVar("Point", bound=tuple[int, ...])


def solve(
    points: set[Point],
    n: int,
    neighbors: Callable[[Point, bool], Generator[Point, Any, None]],
):
    alive = set(points)
    for _ in range(n):
        new_alive = set[Point]()
        for p in itertools.chain.from_iterable(neighbors(p, True) for p in alive):
            alive_neighbors = sum(np in alive for np in neighbors(p, False))
            if p in alive and alive_neighbors == 2 or alive_neighbors == 3:
                new_alive.add(p)
        alive = new_alive
    print(len(alive))
`})}),`
`,e.jsx(s,{frontMatter:i})]})}function d(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{d as default,i as frontMatter};
