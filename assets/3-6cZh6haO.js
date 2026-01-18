import{u as a,j as t}from"./index-CuM7bDfp.js";import{F as s,a as i}from"./_components-1-OWSA-J.js";const o={tags:["Brute force"],description:"Advent of Code 2020 - Day 3: Toboggan Trajectory, a problem that involves Brute force. Solution written in Python, with detailed walkthrough and proof.",year:2020,day:3,title:"Advent of Code 2020 - Day 3: Toboggan Trajectory"};function r(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...a(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.h1,{children:["Advent of Code 2020 - Day 3",t.jsx(e.span,{className:"subtitle",children:"Toboggan Trajectory"})]}),`
`,`
`,t.jsx(s,{frontMatter:o}),`
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
`,t.jsx(i,{frontMatter:o})]})}function d(n={}){const{wrapper:e}={...a(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{d as default,o as frontMatter};
