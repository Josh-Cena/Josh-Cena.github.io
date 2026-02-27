import{u as a,j as e}from"./index-TXYOrs-s.js";import{P as s,a as l}from"./_components-D-appPx2.js";import"./_commonjsHelpers-Cpj98o6Y.js";const o={tags:["Brute force"],title:"Advent of Code 2020 - Day 3: Toboggan Trajectory",description:"Advent of Code 2020 - Day 3: Toboggan Trajectory, a problem that involves Brute force. Solution written in Python, with detailed walkthrough and proof.",year:2020,day:3};function r(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.h1,{children:["Advent of Code 2020 - Day 3",e.jsx(t.span,{className:"subtitle",children:"Toboggan Trajectory"})]}),`
`,`
`,e.jsx(s,{frontMatter:o}),`
`,e.jsx(t.h2,{children:"Part 1"}),`
`,e.jsx(t.p,{children:"There may be smarter ways to do this, but I just simulated the movement of the toboggan. The map repeats infinitely to the right, so I used modulo to wrap around."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-python",children:`cur = (0, 0)
total = 0
while cur[0] < len(grid):
    if grid[cur]:
        total += 1
    cur = (cur[0] + slope[0], (cur[1] + slope[1]) % len(grid[0]))
`})}),`
`,e.jsx(t.h2,{children:"Part 2"}),`
`,e.jsx(t.p,{children:"Just repeat part 1 for all slopes and multiply the results."}),`
`,e.jsx(l,{frontMatter:o})]})}function h(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{h as default,o as frontMatter};
