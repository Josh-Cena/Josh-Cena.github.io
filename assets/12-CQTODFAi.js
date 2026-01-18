import{u as r,j as e}from"./index-CuM7bDfp.js";import{F as s,a}from"./_components-1-OWSA-J.js";const i={tags:["Geometry","Grid walking"],description:"Advent of Code 2020 - Day 12: Rain Risk, a problem that involves Geometry and Grid walking. Solution written in Python, with detailed walkthrough and proof.",year:2020,day:12,title:"Advent of Code 2020 - Day 12: Rain Risk"};function o(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2020 - Day 12",e.jsx(n.span,{className:"subtitle",children:"Rain Risk"})]}),`
`,`
`,e.jsx(s,{frontMatter:i}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:["Literally do what the problem says. Keep track of the ship's position and direction, and update them according to the instructions. There's one small detail though: I thought the direction could be any angle, but in fact it's always a multiple of 90 degrees. I used the common trick of representing directions as complex numbers, so that turning is just multiplying by ",e.jsx(n.code,{children:"j"})," or ",e.jsx(n.code,{children:"-j"}),". On the complex plane, ",e.jsx(n.code,{children:"1"})," is east, ",e.jsx(n.code,{children:"j"})," is north, ",e.jsx(n.code,{children:"-1"})," is west, and ",e.jsx(n.code,{children:"-j"})," is south."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`action = line[0]
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
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["In part 1 some people may have hardcoded the 4 directions, which is what part 2 tries to prevent. Because the waypoint can be anywhere, we must implement proper rotation. Since we are already doing that, the only difference is the initial direction (",e.jsx(n.code,{children:"10 + 1j"})," instead of ",e.jsx(n.code,{children:"1"}),") and that ",e.jsx(n.code,{children:"N"}),"/",e.jsx(n.code,{children:"S"}),"/",e.jsx(n.code,{children:"E"}),"/",e.jsx(n.code,{children:"W"})," instructions affect the waypoint instead of the ship."]}),`
`,e.jsx(a,{frontMatter:i})]})}function h(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{h as default,i as frontMatter};
