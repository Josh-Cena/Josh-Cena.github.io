import{t as e}from"./jsx-runtime-xty2or4m.js";import{n as t}from"./lib-zKnO7aGa.js";import{n,t as r}from"./_components-vrS0ov66.js";var i=e(),a={tags:[`Intcode`,`Puzzle`],title:`Advent of Code 2019 - Day 21: Springdroid Adventure`,description:`Advent of Code 2019 - Day 21: Springdroid Adventure, a problem that involves Intcode and Puzzle. Solution written in C++, with detailed walkthrough and proof.`,year:2019,day:21};function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[`
`,(0,i.jsxs)(o.h1,{children:[`Advent of Code 2019 - Day 21`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Springdroid Adventure`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsx)(o.p,{children:`I have to say that I'm a bit annoyed by the vague wording. It took me a while to see that the jump distance is always 4. Still, there's a marvelous visualizer in this tiny program, so I shouldn't complain too much.`}),`
`,(0,i.jsx)(o.p,{children:`It turns out that there's no coding to do here. We just need to devise the logic, and then type it in. The observation is this: if we want to make a jump, both of these should be true: (1) the landing spot (D) must be ground, and (2) at least one of the next three spots (A, B, C) must be a hole, otherwise we should just walk. If A is a hole, we must jump; if B is a hole and A is ground, we actually may need to jump as well, because if "E" (can't see) is also a hole, we would have missed the chance. Similarly for C. So the logic is:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`J = (not A or not B or not C) and D
  = not (A and B and C) and D
`})}),`
`,(0,i.jsx)(o.p,{children:`Turning this into instructions:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`NOT T T
AND A T
AND B T
AND C T
NOT T J
AND D J
WALK
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsx)(o.p,{children:`I spent a while figuring out what the additional sensors are for. If I run the same logic as part 1, I get the following:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`Didn't make it across:

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
`,(0,i.jsx)(o.p,{children:`Indeed, at the final position, both A and D are holes, so we can't move. The problem looks like:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`O A B C D E F G H I
0 1 . . 4 . . 7 . 9
`})}),`
`,(0,i.jsx)(o.p,{children:`If we decide to jump at 0, then at 4, we won't be able to either jump or walk. To fix this, we need to ensure that either E or H is also ground when we jump. In conclusion:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`J = not (A and B and C) and D and (E or H)
`})}),`
`,(0,i.jsx)(o.p,{children:`In code:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`NOT T T
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
`,(0,i.jsxs)(o.p,{children:[`Note that to calculate `,(0,i.jsx)(o.code,{children:`(E or H)`}),`, we assume that `,(0,i.jsx)(o.code,{children:`T`}),` starts to be false. `,(0,i.jsx)(o.code,{children:`T`}),` was previously `,(0,i.jsx)(o.code,{children:`A and B and C`}),`; if that is true, then `,(0,i.jsx)(o.code,{children:`J`}),` is definitely false, so it's not a problem.`]}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};