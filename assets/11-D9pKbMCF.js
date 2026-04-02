import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import{n,t as r}from"./_components-BiUCgGl-.js";var i=e(),a={tags:[`Intcode`,`Manual inspection`],title:`Advent of Code 2019 - Day 11: Space Police`,description:`Advent of Code 2019 - Day 11: Space Police, a problem that involves Intcode and Manual inspection. Solution written in C++, with detailed walkthrough and proof.`,year:2019,day:11};function o(e){let o={a:`a`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2019 - Day 11`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Space Police`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsxs)(o.p,{children:[`The only additional capability from `,(0,i.jsx)(o.a,{href:`/notes/aoc/2019/7/`,children:`day 7`}),` is that instead of having one number output at a time, the program now produces two outputs before pausing. Since the size is fixed, I just call `,(0,i.jsx)(o.code,{children:`run_until_output()`}),` twice to get both outputs.`]}),`
`,(0,i.jsxs)(o.p,{children:[`Both parts work the same way. I keep track of the robot's position and direction, and a map of painted panels. Each time, I use `,(0,i.jsx)(o.code,{children:`send_input()`}),` to provide the current panel color, then call `,(0,i.jsx)(o.code,{children:`run_until_output()`}),` to get the new color and direction. Abstractly:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-cpp`,children:`int x = 0, y = 0;
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
`,(0,i.jsx)(o.p,{children:`Again, I take a second to admire the ASCII art in part 2:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:` ###   ##  #  # ###  #    ###  #  # #  #
 #  # #  # # #  #  # #    #  # #  # # #
 #  # #    ##   #  # #    #  # #  # ##
 ###  #    # #  ###  #    ###  #  # # #
 #    #  # # #  # #  #    #    #  # # #
 #     ##  #  # #  # #### #     ##  #  #
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};