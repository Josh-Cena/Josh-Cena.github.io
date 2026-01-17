import{u as r,j as n}from"./index-L6ckUcGi.js";import{F as i,a as s}from"./_components-DB3Df8DK.js";const o={tags:["Intcode","Manual inspection"],description:"Advent of Code 2019 - Day 11: Space Police, a problem that involves Intcode and Manual inspection. Solution written in C++, with detailed walkthrough and proof.",year:2019,day:11,title:"Advent of Code 2019 - Day 11: Space Police"};function a(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",span:"span",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsxs(t.h1,{children:["Advent of Code 2019 - Day 11",n.jsx(t.span,{className:"subtitle",children:"Space Police"})]}),`
`,`
`,n.jsx(i,{frontMatter:o}),`
`,n.jsxs(t.p,{children:["The only additional capability from ",n.jsx(t.a,{href:"/notes/aoc/2019/7/",children:"day 7"})," is that instead of having one number output at a time, the program now produces two outputs before pausing. Since the size is fixed, I just call ",n.jsx(t.code,{children:"run_until_output()"})," twice to get both outputs."]}),`
`,n.jsxs(t.p,{children:["Both parts work the same way. I keep track of the robot's position and direction, and a map of painted panels. Each time, I use ",n.jsx(t.code,{children:"send_input()"})," to provide the current panel color, then call ",n.jsx(t.code,{children:"run_until_output()"})," to get the new color and direction. Abstractly:"]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-cpp",children:`int x = 0, y = 0;
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
`,n.jsx(t.p,{children:"Again, I take a second to admire the ASCII art in part 2:"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-plain",children:` ###   ##  #  # ###  #    ###  #  # #  #
 #  # #  # # #  #  # #    #  # #  # # #
 #  # #    ##   #  # #    #  # #  # ##
 ###  #    # #  ###  #    ###  #  # # #
 #    #  # # #  # #  #    #    #  # # #
 #     ##  #  # #  # #### #     ##  #  #
`})}),`
`,n.jsx(s,{frontMatter:o})]})}function d(e={}){const{wrapper:t}={...r(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(a,{...e})}):a(e)}export{d as default,o as frontMatter};
