import{u as s,j as e}from"./index-TXYOrs-s.js";import{P as i,a as r}from"./_components-D-appPx2.js";import"./_commonjsHelpers-Cpj98o6Y.js";const d="/assets/13-breakout-CcUktQIU.gif",o={tags:["Intcode","Arcade game"],title:"Advent of Code 2019 - Day 13: Care Package",description:"Advent of Code 2019 - Day 13: Care Package, a problem that involves Intcode and Arcade game. Solution written in C++, with detailed walkthrough and proof.",year:2019,day:13};function a(n){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",span:"span",strong:"strong",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.h1,{children:["Advent of Code 2019 - Day 13",e.jsx(t.span,{className:"subtitle",children:"Care Package"})]}),`
`,`
`,e.jsx(i,{frontMatter:o}),`
`,e.jsx(t.h2,{children:"Part 1"}),`
`,e.jsx(t.p,{children:"For part 1, we just run to completion and pop all outputs:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-cpp",children:`int block_count = 0;
std::vector<long long> outputs = prog.pop_all_output();
for (int i = 2; i < outputs.size(); i += 3) {
    long long tile_id = outputs[i];
    if (tile_id == 2) {
        block_count++;
    }
}
`})}),`
`,e.jsx(t.h2,{children:"Part 2"}),`
`,e.jsxs(t.p,{children:["Now, building on ",e.jsx(t.a,{href:"/notes/aoc/2019/11/",children:"day 11"}),", the Intcode program is interactive but produces ",e.jsx(t.em,{children:"many"})," outputs at a time, so we cannot use a fixed number of ",e.jsx(t.code,{children:"run_until_output()"})," calls. Instead, I added a ",e.jsx(t.code,{children:"run_until_input()"})," method that runs until an input is needed, at which point we are certain that all outputs have been produced."]}),`
`,e.jsxs(t.p,{children:["Initially, I thought about just playing the game myself, but it turned out to be a quite tedious process. ",e.jsx(t.a,{href:"https://www.reddit.com/r/adventofcode/comments/e9zgse/2019_day_13_solutions/",children:"Reddit wisdom"})," suggested two ways: (1) always move the paddle towards the ball, or (2) hack the memory to replace the paddle's row with walls. I implemented (1) since it felt more satisfying."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-cpp",children:`while (true) {
    prog.run_until_input();
    int ball_pos;
    int paddle_pos;
    int score;
    std::vector<long long> outputs = prog.pop_all_output();
    // ...Process output
    if (prog.halted) {
        std::cout << score << std::endl;
        break;
    }
    if (ball_pos < paddle_pos) {
        input = -1;
    } else if (ball_pos > paddle_pos) {
        input = 1;
    } else {
        input = 0;
    }
    prog.send_input(input);
    prog.step();
}
`})}),`
`,e.jsx(t.p,{children:"I still kept my visualization logic though, and it was fun to watch the AI play the game:"}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:d,alt:"Game intelligence playing breakout",width:425,height:375})}),`
`,e.jsxs(t.p,{children:["(One complaint: I didn't understand from the problem statement that each time only the ",e.jsx(t.strong,{children:"diff"})," is output, so at first I rendered the entire screen each time and wondered why the blocks disappeared!)"]}),`
`,e.jsx(r,{frontMatter:o})]})}function u(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{u as default,o as frontMatter};
