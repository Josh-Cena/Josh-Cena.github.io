import{u as a,j as t}from"./index-MRNusryy.js";import{F as s,a as c}from"./_components-BFU_Acax.js";const r={description:"Advent of Code 2020 - Day 3: Toboggan Trajectory. Written in Python.",tags:["Brute force"],year:2020,day:3,title:"AoC 2020 D3: Toboggan Trajectory"};function o(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{children:"AoC 2020 D3: Toboggan Trajectory"}),`
`,`
`,t.jsx(s,{frontMatter:r}),`
`,t.jsx(e.h2,{children:"Part 1"}),`
`,t.jsx(e.p,{children:"There may be smarter ways to do this, but I just simulated the movement of the toboggan. The map repeats infinitely to the right, so I used modulo to wrap around."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-python",children:`cur = (0, 0)
total = 0
while cur[0] < len(grid):
    if grid[cur]:
        total += 1
    cur = (cur[0] + slope[0], (cur[1] + slope[1]) % len(grid[0]))
`})}),`
`,t.jsx(e.h2,{children:"Part 2"}),`
`,t.jsx(e.p,{children:"Just repeat part 1 for all slopes and multiply the results."}),`
`,t.jsx(c,{frontMatter:r})]})}function d(n={}){const{wrapper:e}={...a(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{d as default,r as frontMatter};
