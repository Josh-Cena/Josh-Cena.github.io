import{u as s,j as n}from"./index-BfdjqJwq.js";import{P as i,a as r}from"./_components-DIXLoOhb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const o={tags:["Intcode","Puzzle"],title:"Advent of Code 2019 - Day 21: Springdroid Adventure",description:"Advent of Code 2019 - Day 21: Springdroid Adventure, a problem that involves Intcode and Puzzle. Solution written in C++, with detailed walkthrough and proof.",year:2019,day:21};function a(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...s(),...t.components};return n.jsxs(n.Fragment,{children:[`
`,n.jsxs(e.h1,{children:["Advent of Code 2019 - Day 21",n.jsx(e.span,{className:"subtitle",children:"Springdroid Adventure"})]}),`
`,`
`,n.jsx(i,{frontMatter:o}),`
`,n.jsx(e.h2,{children:"Part 1"}),`
`,n.jsx(e.p,{children:"I have to say that I'm a bit annoyed by the vague wording. It took me a while to see that the jump distance is always 4. Still, there's a marvelous visualizer in this tiny program, so I shouldn't complain too much."}),`
`,n.jsx(e.p,{children:`It turns out that there's no coding to do here. We just need to devise the logic, and then type it in. The observation is this: if we want to make a jump, both of these should be true: (1) the landing spot (D) must be ground, and (2) at least one of the next three spots (A, B, C) must be a hole, otherwise we should just walk. If A is a hole, we must jump; if B is a hole and A is ground, we actually may need to jump as well, because if "E" (can't see) is also a hole, we would have missed the chance. Similarly for C. So the logic is:`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-plain",children:`J = (not A or not B or not C) and D
  = not (A and B and C) and D
`})}),`
`,n.jsx(e.p,{children:"Turning this into instructions:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-plain",children:`NOT T T
AND A T
AND B T
AND C T
NOT T J
AND D J
WALK
`})}),`
`,n.jsx(e.h2,{children:"Part 2"}),`
`,n.jsx(e.p,{children:"I spent a while figuring out what the additional sensors are for. If I run the same logic as part 1, I get the following:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-plain",children:`Didn't make it across:

.................
.................
@................
#####.#.##.#.####

.................
.................
.@...............
#####.#.##.#.####

.................
.................
..@..............
#####.#.##.#.####

.................
...@.............
.................
#####.#.##.#.####

....@............
.................
.................
#####.#.##.#.####

.................
.....@...........
.................
#####.#.##.#.####

.................
.................
......@..........
#####.#.##.#.####

.................
.................
.................
#####.#@##.#.####
`})}),`
`,n.jsx(e.p,{children:"Indeed, at the final position, both A and D are holes, so we can't move. The problem looks like:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-plain",children:`O A B C D E F G H I
0 1 . . 4 . . 7 . 9
`})}),`
`,n.jsx(e.p,{children:"If we decide to jump at 0, then at 4, we won't be able to either jump or walk. To fix this, we need to ensure that either E or H is also ground when we jump. In conclusion:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-plain",children:`J = not (A and B and C) and D and (E or H)
`})}),`
`,n.jsx(e.p,{children:"In code:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-plain",children:`NOT T T
AND A T
AND B T
AND C T
NOT T J
AND D J
OR E T
OR H T
AND T J
RUN
`})}),`
`,n.jsxs(e.p,{children:["Note that to calculate ",n.jsx(e.code,{children:"(E or H)"}),", we assume that ",n.jsx(e.code,{children:"T"})," starts to be false. ",n.jsx(e.code,{children:"T"})," was previously ",n.jsx(e.code,{children:"A and B and C"}),"; if that is true, then ",n.jsx(e.code,{children:"J"})," is definitely false, so it's not a problem."]}),`
`,n.jsx(r,{frontMatter:o})]})}function c(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{c as default,o as frontMatter};
