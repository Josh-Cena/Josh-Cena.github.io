import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{n,t as r}from"./_components-DcdEf7Vf.js";var i=e(),a=`/assets/13-breakout-CcUktQIU.gif`;function o(e){let o={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,img:`img`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2019 - Day 13`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Care Package`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsx)(o.p,{children:`For part 1, we just run to completion and pop all outputs:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-cpp`,children:`int block_count = 0;
std::vector<long long> outputs = prog.pop_all_output();
for (int i = 2; i < outputs.size(); i += 3) {
    long long tile_id = outputs[i];
    if (tile_id == 2) {
        block_count++;
    }
}
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`Now, building on `,(0,i.jsx)(o.a,{href:`/notes/aoc/2019/11/`,children:`day 11`}),`, the Intcode program is interactive but produces `,(0,i.jsx)(o.em,{children:`many`}),` outputs at a time, so we cannot use a fixed number of `,(0,i.jsx)(o.code,{children:`run_until_output()`}),` calls. Instead, I added a `,(0,i.jsx)(o.code,{children:`run_until_input()`}),` method that runs until an input is needed, at which point we are certain that all outputs have been produced.`]}),`
`,(0,i.jsxs)(o.p,{children:[`Initially, I thought about just playing the game myself, but it turned out to be a quite tedious process. `,(0,i.jsx)(o.a,{href:`https://www.reddit.com/r/adventofcode/comments/e9zgse/2019_day_13_solutions/`,children:`Reddit wisdom`}),` suggested two ways: (1) always move the paddle towards the ball, or (2) hack the memory to replace the paddle's row with walls. I implemented (1) since it felt more satisfying.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-cpp`,children:`while (true) {
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
`,(0,i.jsx)(o.p,{children:`I still kept my visualization logic though, and it was fun to watch the AI play the game:`}),`
`,(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{src:a,alt:`Game intelligence playing breakout`,width:425,height:375})}),`
`,(0,i.jsxs)(o.p,{children:[`(One complaint: I didn't understand from the problem statement that each time only the `,(0,i.jsx)(o.strong,{children:`diff`}),` is output, so at first I rendered the entire screen each time and wondered why the blocks disappeared!)`]}),(0,i.jsx)(r,{frontMatter:e})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}s.meta={tags:[`Intcode`,`Arcade game`],title:`Advent of Code 2019 - Day 13: Care Package`,description:`Advent of Code 2019 - Day 13: Care Package, a problem that involves Intcode and Arcade game. Solution written in C++, with detailed walkthrough and proof.`,year:2019,day:13};export{s as default};