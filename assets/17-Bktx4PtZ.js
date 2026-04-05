import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{n,t as r}from"./_components-DcdEf7Vf.js";var i=e();function a(e){let a={a:`a`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2020 - Day 17`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Conway Cubes`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsxs)(a.p,{children:[`Literally like `,(0,i.jsx)(a.a,{href:`/notes/aoc/2019/24/`,children:`any`}),` `,(0,i.jsx)(a.a,{href:`/notes/aoc/2020/11/`,children:`other`}),` cellular automaton problem. The general template looks like this:`]}),`
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
`,(0,i.jsx)(a.p,{children:`Part 1 has 3D points and part 2 has 4D points, but otherwise they're identical. The only difference is the neighbor function. The biggest struggle might be how to get the types right in Python 3.9.`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-python`,children:`Point = TypeVar("Point", bound=tuple[int, ...])


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
`})}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Cellular automata`],title:`Advent of Code 2020 - Day 17: Conway Cubes`,description:`Advent of Code 2020 - Day 17: Conway Cubes, a problem that involves Cellular automata. Solution written in Python, with detailed walkthrough and proof.`,year:2020,day:17};export{o as default};