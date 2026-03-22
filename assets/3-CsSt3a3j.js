import{t as e}from"./jsx-runtime-D57Vegw5.js";import{n as t}from"./lib-rxHYdfSX.js";import{n,t as r}from"./_components-BHKTFOi1.js";var i=e(),a={tags:[`Brute force`],title:`Advent of Code 2020 - Day 3: Toboggan Trajectory`,description:`Advent of Code 2020 - Day 3: Toboggan Trajectory, a problem that involves Brute force. Solution written in Python, with detailed walkthrough and proof.`,year:2020,day:3};function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2020 - Day 3`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Toboggan Trajectory`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsx)(o.p,{children:`There may be smarter ways to do this, but I just simulated the movement of the toboggan. The map repeats infinitely to the right, so I used modulo to wrap around.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-python`,children:`cur = (0, 0)
total = 0
while cur[0] < len(grid):
    if grid[cur]:
        total += 1
    cur = (cur[0] + slope[0], (cur[1] + slope[1]) % len(grid[0]))
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsx)(o.p,{children:`Just repeat part 1 for all slopes and multiply the results.`}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};