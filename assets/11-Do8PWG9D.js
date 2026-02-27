import{u as r,j as n}from"./index-DsugHUjk.js";import{P as i,a as s}from"./_components-GobSWsVa.js";import"./_commonjsHelpers-Cpj98o6Y.js";const o={tags:["Intcode","Manual inspection"],title:"Advent of Code 2019 - Day 11: Space Police",description:"Advent of Code 2019 - Day 11: Space Police, a problem that involves Intcode and Manual inspection. Solution written in C++, with detailed walkthrough and proof.",year:2019,day:11};function a(t){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",span:"span",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.h1,{children:["Advent of Code 2019 - Day 11",n.jsx(e.span,{className:"subtitle",children:"Space Police"})]}),`
`,`
`,n.jsx(i,{frontMatter:o}),`
`,n.jsxs(e.p,{children:["The only additional capability from ",n.jsx(e.a,{href:"/notes/aoc/2019/7/",children:"day 7"})," is that instead of having one number output at a time, the program now produces two outputs before pausing. Since the size is fixed, I just call ",n.jsx(e.code,{children:"run_until_output()"})," twice to get both outputs."]}),`
`,n.jsxs(e.p,{children:["Both parts work the same way. I keep track of the robot's position and direction, and a map of painted panels. Each time, I use ",n.jsx(e.code,{children:"send_input()"})," to provide the current panel color, then call ",n.jsx(e.code,{children:"run_until_output()"})," to get the new color and direction. Abstractly:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-cpp",children:`int x = 0, y = 0;
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
`,n.jsx(e.p,{children:"Again, I take a second to admire the ASCII art in part 2:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-plain",children:` ###   ##  #  # ###  #    ###  #  # #  #
 #  # #  # # #  #  # #    #  # #  # # #
 #  # #    ##   #  # #    #  # #  # ##
 ###  #    # #  ###  #    ###  #  # # #
 #    #  # # #  # #  #    #    #  # # #
 #     ##  #  # #  # #### #     ##  #  #
`})}),`
`,n.jsx(s,{frontMatter:o})]})}function l(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{l as default,o as frontMatter};
