import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import{n,t as r}from"./_components-Bk2TMGF4.js";var i=e(),a={tags:[`Intcode`],title:`Advent of Code 2019 - Day 23: Category Six`,description:`Advent of Code 2019 - Day 23: Category Six, a problem that involves Intcode. Solution written in C++, with detailed walkthrough and proof.`,year:2019,day:23};function o(e){let o={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2019 - Day 23`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Category Six`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsx)(o.p,{children:`Again, I'm a bit annoyed by the vague wording. How do we deal with races with non-blocking I/O? In what order do we step the programs? The problem doesn't say, so I picked the most conservative approach: step each program one instruction at a time in a round-robin fashion (so they are run at the same "speed"). If a program produces output, we immediately deliver it to the destination program's input queue.`}),`
`,(0,i.jsxs)(o.p,{children:[`I have to make some modifications to my `,(0,i.jsx)(o.code,{children:`Program`}),` class (which I haven't changed since `,(0,i.jsx)(o.a,{href:`/notes/aoc/2019/17/`,children:`day 17`}),`'s addition of string I/O). I added a field called `,(0,i.jsx)(o.code,{children:`default_input`}),`, which is returned when the input queue is empty (previously it threw an error). To keep throwing errors by default, I default it to `,(0,i.jsx)(o.code,{children:`0xDEAD`}),`, a sentinel value. Now the code for day 23 can set it to `,(0,i.jsx)(o.code,{children:`-1`}),` when initializing each program.`]}),`
`,(0,i.jsx)(o.p,{children:`The main loop looks like this:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-cpp`,children:`while (true) {
    for (int i = 0; i < 50; i++) {
        Program &prog = network[i];
        prog.step();
        if (prog.has_output()) {
            long long dest = prog.pop_output();
            prog.run_until_output();
            long long x = prog.pop_output();
            prog.run_until_output();
            long long y = prog.pop_output();
            if (dest == 255) {
                std::cout << y << std::endl;
                return;
            }
            network[dest].send_input(x);
            network[dest].send_input(y);
        }
    }
}
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`The problem statement is again vague about what it means by "continuously trying to receive packets". I added a field called `,(0,i.jsx)(o.code,{children:`starved_cycles`}),`, which counts how many times the input instruction was executed while the input queue was empty, and is reset on `,(0,i.jsx)(o.code,{children:`send_input()`}),` (not during the next input instruction, so that a program is immediately considered non-starved when it receives input). If all 50 programs have `,(0,i.jsx)(o.code,{children:`starved_cycles > 1`}),`, we consider the network idle. (For reasons unclear to me, `,(0,i.jsx)(o.code,{children:`starved_cycles > 1`}),` works but `,(0,i.jsx)(o.code,{children:`starved_cycles > 0`}),` doesn't; I assume that's the implication of "continuously".) This check happens once after each round-robin cycle.`]}),`
`,(0,i.jsxs)(o.p,{children:[`When the network is idle, and the NAT has a packet stored, I send the stored packet to program 0 (which resets its `,(0,i.jsx)(o.code,{children:`starved_cycles`}),`). I also keep track of the last Y value sent by the NAT, and print it and exit if the same Y value is sent twice in a row.`]}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};