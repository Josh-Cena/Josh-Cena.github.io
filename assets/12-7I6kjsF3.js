import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{n,t as r}from"./_components-DcdEf7Vf.js";var i=e();function a(e){let a={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2020 - Day 12`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Rain Risk`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(a.p,{children:[`Literally do what the problem says. Keep track of the ship's position and direction, and update them according to the instructions. There's one small detail though: I thought the direction could be any angle, but in fact it's always a multiple of 90 degrees. I used the common trick of representing directions as complex numbers, so that turning is just multiplying by `,(0,i.jsx)(a.code,{children:`j`}),` or `,(0,i.jsx)(a.code,{children:`-j`}),`. On the complex plane, `,(0,i.jsx)(a.code,{children:`1`}),` is east, `,(0,i.jsx)(a.code,{children:`j`}),` is north, `,(0,i.jsx)(a.code,{children:`-1`}),` is west, and `,(0,i.jsx)(a.code,{children:`-j`}),` is south.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-python`,children:`action = line[0]
amount = int(line[1:])
if action == "R":
    cur_dir *= (-1j) ** (amount // 90)
elif action == "L":
    cur_dir *= 1j ** (amount // 90)
elif action == "F":
    cur_pos += cur_dir * amount
else:
    cur_pos += shift_dir[action] * amount
`})}),`
`,(0,i.jsx)(a.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(a.p,{children:[`In part 1 some people may have hardcoded the 4 directions, which is what part 2 tries to prevent. Because the waypoint can be anywhere, we must implement proper rotation. Since we are already doing that, the only difference is the initial direction (`,(0,i.jsx)(a.code,{children:`10 + 1j`}),` instead of `,(0,i.jsx)(a.code,{children:`1`}),`) and that `,(0,i.jsx)(a.code,{children:`N`}),`/`,(0,i.jsx)(a.code,{children:`S`}),`/`,(0,i.jsx)(a.code,{children:`E`}),`/`,(0,i.jsx)(a.code,{children:`W`}),` instructions affect the waypoint instead of the ship.`]}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Geometry`,`Grid walking`],title:`Advent of Code 2020 - Day 12: Rain Risk`,description:`Advent of Code 2020 - Day 12: Rain Risk, a problem that involves Geometry and Grid walking. Solution written in Python, with detailed walkthrough and proof.`,year:2020,day:12};export{o as default};