import{u as a,j as t}from"./index-JVg7E-KF.js";import{F as i,a as s}from"./_components-4OamRaNd.js";const o={description:"Advent of Code 2019 - Day 11: Space Police. Written in C++.",tags:["Intcode"],year:2019,day:11,title:"AoC 2019 D11: Space Police"};function r(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n.h1,{children:"AoC 2019 D11: Space Police"}),`
`,`
`,t.jsx(i,{frontMatter:o}),`
`,t.jsxs(n.p,{children:["The only additional capability from ",t.jsx(n.a,{href:"/notes/aoc/2019/7",children:"day 7"})," is that instead of having one number output at a time, the program now produces two outputs before pausing. Since the size is fixed, I just call ",t.jsx(n.code,{children:"run_until_output()"})," twice to get both outputs."]}),`
`,t.jsx(n.h2,{children:"Parts 1 & 2"}),`
`,t.jsxs(n.p,{children:["Both parts work the same way. I keep track of the robot's position and direction, and a map of painted panels. Each time, I use ",t.jsx(n.code,{children:"send_input()"})," to provide the current panel color, then call ",t.jsx(n.code,{children:"run_until_output()"})," to get the new color and direction. Abstractly:"]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-cpp",children:`int x = 0, y = 0;
int dir_x = 0, dir_y = -1;
while (!prog.halted) {
    prog.send_input(panels.find({x, y}) != panels.end() ? panels[{x, y}] : 0);
    prog.run_until_output();
    if (prog.halted) break;
    panels[{x, y}] = prog.pop_output();
    prog.run_until_output();
    int turn = prog.pop_output();
    // Update direction
}
`})}),`
`,t.jsx(s,{frontMatter:o})]})}function d(e={}){const{wrapper:n}={...a(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(r,{...e})}):r(e)}export{d as default,o as frontMatter};
