import{t as e}from"./jsx-runtime-xty2or4m.js";import{n as t}from"./lib-zKnO7aGa.js";import{n,t as r}from"./_components-vrS0ov66.js";var i=e(),a={tags:[`Cellular automata`],title:`Advent of Code 2020 - Day 11: Seating System`,description:`Advent of Code 2020 - Day 11: Seating System, a problem that involves Cellular automata. Solution written in Python, with detailed walkthrough and proof.`,year:2020,day:11};function o(e){let o={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2020 - Day 11`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Seating System`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(o.p,{children:[`I've said it before: `,(0,i.jsx)(o.a,{href:`/notes/aoc/2019/24/`,children:`never represent cellular automata grids as physical 2D arrays`}),`. Always use a map from coordinates to cell states. Well in this problem, doing so allows us to completely ignore the floor cells. We can also precompute all neighbor cells for each seat, since it's going to be non-trivial in part 2.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-python`,children:`def evolve(grid: list[list[str]]):
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
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`The only difference in part 2 is the `,(0,i.jsx)(o.code,{children:`neighbors2d`}),` function, which now has to look in each of the 8 directions until it finds a seat or hits the edge of the grid. Again, because whether a cell is a seat or floor is static, we can precompute the neighbors instead of recomputing during each evolution step.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-python`,children:`def neighbors2d(
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
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};