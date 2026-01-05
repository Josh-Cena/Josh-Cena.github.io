import{u as o,j as n}from"./index-MRNusryy.js";import{F as s,a}from"./_components-BFU_Acax.js";const i={description:"Advent of Code 2020 - Day 11: Seating System. Written in Python.",tags:["Cellular automata"],year:2020,day:11,title:"AoC 2020 D11: Seating System"};function t(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"AoC 2020 D11: Seating System"}),`
`,`
`,n.jsx(s,{frontMatter:i}),`
`,n.jsx(e.h2,{children:"Part 1"}),`
`,n.jsxs(e.p,{children:["I've said it before: ",n.jsx(e.a,{href:"/notes/aoc/2019/24",children:"never represent cellular automata grids as physical 2D arrays"}),". Always use a map from coordinates to cell states. Well in this problem, doing so allows us to completely ignore the floor cells. We can also precompute all neighbor cells for each seat, since it's going to be non-trivial in part 2."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-python",children:`def evolve(grid: list[list[str]]):
    h = len(grid)
    w = len(grid[0])
    points = [(r, c) for r in range(h) for c in range(w) if grid[r][c] != "."]
    point_neighbors = {(r, c): neighbors2d(r, c, grid, allowed) for (r, c) in points}
    has_changed = True
    while has_changed:
        has_changed = False
        new_grid = [row.copy() for row in grid]
        for r, c in points:
            neighbors = [grid[nr][nc] for (nr, nc) in point_neighbors[(r, c)]]
            if "#" not in neighbors and grid[r][c] == "L":
                new_grid[r][c] = "#"
                has_changed = True
            elif neighbors.count("#") >= 4 and grid[r][c] == "#":
                new_grid[r][c] = "L"
                has_changed = True
        grid = new_grid
    return grid
`})}),`
`,n.jsx(e.h2,{children:"Part 2"}),`
`,n.jsxs(e.p,{children:["The only difference in part 2 is the ",n.jsx(e.code,{children:"neighbors2d"})," function, which now has to look in each of the 8 directions until it finds a seat or hits the edge of the grid. Again, because whether a cell is a seat or floor is static, we can precompute the neighbors instead of recomputing during each evolution step."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-python",children:`def neighbors2d(
    r: int, c: int, grid: list[list[str]], allowed: Union[list[str], None]
) -> list[tuple[int, int]]:
    res: list[tuple[int, int]] = []
    for dr in range(-1, 2):
        for dc in range(-1, 2):
            if dr == 0 and dc == 0:
                continue
            d = 1
            nr = r + dr * d
            nc = c + dc * d
            # In part 1, this loop would just be res.append((nr, nc))
            while 0 <= nr < len(grid) and 0 <= nc < len(grid[0]):
                if not allowed or grid[nr][nc] in allowed:
                    if grid[nr][nc] != ".":
                        res.append((nr, nc))
                    break
                d += 1
                nr = r + dr * d
                nc = c + dc * d
    return res
`})}),`
`,n.jsx(a,{frontMatter:i})]})}function l(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{l as default,i as frontMatter};
