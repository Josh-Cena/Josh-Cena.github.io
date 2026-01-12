import{u as a,j as n}from"./index-Cpgx5Zsn.js";import{F as r,a as s}from"./_components-AhTRSQH8.js";const i={description:"Advent of Code 2020 - Day 17: Conway Cubes. Written in Python.",tags:["Cellular automata"],year:2020,day:17,title:"AoC 2020 D17: Conway Cubes"};function o(t){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"AoC 2020 D17: Conway Cubes"}),`
`,`
`,n.jsx(r,{frontMatter:i}),`
`,n.jsxs(e.p,{children:["Literally like ",n.jsx(e.a,{href:"/notes/aoc/2019/24",children:"any"})," ",n.jsx(e.a,{href:"/notes/aoc/2020/11",children:"other"})," cellular automaton problem. The general template looks like this:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-python",children:`def evolve(active: set[Point], get_neighbors: Callable[[Point], list[Point]]) -> set[Point]:
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
`,n.jsx(e.p,{children:"Part 1 has 3D points and part 2 has 4D points, but otherwise they're identical. The only difference is the neighbor function. The biggest struggle might be how to get the types right in Python 3.9."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-python",children:`Point = TypeVar("Point", bound=tuple[int, ...])


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
`,n.jsx(s,{frontMatter:i})]})}function c(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{c as default,i as frontMatter};
