import{u as i,j as e}from"./index-BnEAZLVO.js";import{P as r,a}from"./_components-CRYqM7VG.js";import"./_commonjsHelpers-Cpj98o6Y.js";const o={tags:["Intcode","Brute force"],title:"Advent of Code 2019 - Day 7: Amplification Circuit",description:"Advent of Code 2019 - Day 7: Amplification Circuit, a problem that involves Intcode and Brute force. Solution written in C++, with detailed walkthrough and proof.",year:2019,day:7};function s(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2019 - Day 7",e.jsx(n.span,{className:"subtitle",children:"Amplification Circuit"})]}),`
`,`
`,e.jsx(r,{frontMatter:o}),`
`,e.jsxs(n.p,{children:["This time we are introducing stateful programs, where each one needs to be paused and resumed (especially for part 2). So instead of my functional ",e.jsx(n.code,{children:"run_prog"})," from ",e.jsx(n.a,{href:"/notes/aoc/2019/5/",children:"day 5"}),", I wrapped it into a class:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-cpp",children:`class Program {
    int ip;
    std::queue<int> inputs;
    std::queue<int> outputs;
public:
    std::vector<int> codes;
    bool halted;
    Program(const std::string &prog_line);
    void send_input(int value);
    int pop_output();
    void run_until_output();
    void run();
};
`})}),`
`,e.jsxs(n.p,{children:["Now the execution state (instruction pointer, input/output queues, halted flag) is stored in the object. The program can be paused when an output is produced (",e.jsx(n.code,{children:"run_until_output()"}),"), or run to completion (",e.jsx(n.code,{children:"run()"}),"). When paused, the outputs can be popped and inputs can be sent in. I have to expose the memory (",e.jsx(n.code,{children:"codes"}),") because the caller sometimes needs to read from it (e.g., ",e.jsx(n.a,{href:"/notes/aoc/2019/2/",children:"day 2"})," when there was no output) or modify it (e.g., setting flags)."]}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:["Conveniently, C++ has ",e.jsx(n.a,{href:"https://en.cppreference.com/w/cpp/algorithm/next_permutation.html",children:e.jsx(n.code,{children:"std::next_permutation"})})," to generate all permutations of the phase settings. So the main loop looks like:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-cpp",children:`std::vector<int> phase_settings = {0, 1, 2, 3, 4};
int max_output = 0;
do {
    // Run programs
    max_output = std::max(max_output, final_output);
} while (std::next_permutation(phase_settings.begin(), phase_settings.end()));
`})}),`
`,e.jsxs(n.p,{children:["For each permutation, we just construct 5 ",e.jsx(n.code,{children:"Program"})," instances one by one, send in the phase setting and previous output, run to completion, and read the final output. It looks like this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-cpp",children:`int input_signal = 0;
for (auto &prog : progs) {
    prog.send_input(input_signal);
    prog.run();
    input_signal = prog.pop_output();
}
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsx(n.p,{children:"We need to run the programs in a loop until they all halt. It looks like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-cpp",children:`int input_signal = 0;
bool all_halted = false;
while (!all_halted) {
    all_halted = true;
    for (auto &prog : progs) {
        prog.send_input(input_signal);
        prog.run_until_output();
        if (prog.halted) break;
        all_halted = false;
        input_signal = prog.pop_output();
    }
}
`})}),`
`,e.jsx(n.p,{children:"Note, technically this may terminate in the middle of a cycle if one program halts, but it looks like the correct output is produced regardless."}),`
`,e.jsx(a,{frontMatter:o})]})}function d(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{d as default,o as frontMatter};
