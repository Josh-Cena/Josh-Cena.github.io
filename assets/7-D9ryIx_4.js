import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{n,t as r}from"./_components-DcdEf7Vf.js";var i=e();function a(e){let a={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2019 - Day 7`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Amplification Circuit`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsxs)(a.p,{children:[`This time we are introducing stateful programs, where each one needs to be paused and resumed (especially for part 2). So instead of my functional `,(0,i.jsx)(a.code,{children:`run_prog`}),` from `,(0,i.jsx)(a.a,{href:`/notes/aoc/2019/5/`,children:`day 5`}),`, I wrapped it into a class:`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-cpp`,children:`class Program {
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
`,(0,i.jsxs)(a.p,{children:[`Now the execution state (instruction pointer, input/output queues, halted flag) is stored in the object. The program can be paused when an output is produced (`,(0,i.jsx)(a.code,{children:`run_until_output()`}),`), or run to completion (`,(0,i.jsx)(a.code,{children:`run()`}),`). When paused, the outputs can be popped and inputs can be sent in. I have to expose the memory (`,(0,i.jsx)(a.code,{children:`codes`}),`) because the caller sometimes needs to read from it (e.g., `,(0,i.jsx)(a.a,{href:`/notes/aoc/2019/2/`,children:`day 2`}),` when there was no output) or modify it (e.g., setting flags).`]}),`
`,(0,i.jsx)(a.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(a.p,{children:[`Conveniently, C++ has `,(0,i.jsx)(a.a,{href:`https://en.cppreference.com/w/cpp/algorithm/next_permutation.html`,children:(0,i.jsx)(a.code,{children:`std::next_permutation`})}),` to generate all permutations of the phase settings. So the main loop looks like:`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-cpp`,children:`std::vector<int> phase_settings = {0, 1, 2, 3, 4};
int max_output = 0;
do {
    // Run programs
    max_output = std::max(max_output, final_output);
} while (std::next_permutation(phase_settings.begin(), phase_settings.end()));
`})}),`
`,(0,i.jsxs)(a.p,{children:[`For each permutation, we just construct 5 `,(0,i.jsx)(a.code,{children:`Program`}),` instances one by one, send in the phase setting and previous output, run to completion, and read the final output. It looks like this:`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-cpp`,children:`int input_signal = 0;
for (auto &prog : progs) {
    prog.send_input(input_signal);
    prog.run();
    input_signal = prog.pop_output();
}
`})}),`
`,(0,i.jsx)(a.h2,{children:`Part 2`}),`
`,(0,i.jsx)(a.p,{children:`We need to run the programs in a loop until they all halt. It looks like this:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-cpp`,children:`int input_signal = 0;
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
`,(0,i.jsx)(a.p,{children:`Note, technically this may terminate in the middle of a cycle if one program halts, but it looks like the correct output is produced regardless.`}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Intcode`,`Brute force`],title:`Advent of Code 2019 - Day 7: Amplification Circuit`,description:`Advent of Code 2019 - Day 7: Amplification Circuit, a problem that involves Intcode and Brute force. Solution written in C++, with detailed walkthrough and proof.`,year:2019,day:7};export{o as default};