import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import{n,t as r}from"./_components-Bk2TMGF4.js";var i=`/assets/17-vscode-BwLr3OPS.png`,a=e(),o={tags:[`Intcode`,`Grid walking`,`String manipulation`,`Manual inspection`],title:`Advent of Code 2019 - Day 17: Set and Forget`,description:`Advent of Code 2019 - Day 17: Set and Forget, a problem that involves Intcode, Grid walking, String manipulation, and Manual inspection. Solution written in C++, with detailed walkthrough and proof.`,year:2019,day:17};function s(e){let s={code:`code`,h1:`h1`,h2:`h2`,img:`img`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.h1,{children:[`Advent of Code 2019 - Day 17`,(0,a.jsx)(s.span,{className:`subtitle`,children:`Set and Forget`})]}),(0,a.jsx)(n,{frontMatter:o}),`
`,(0,a.jsx)(s.p,{children:`This problem introduces string I/O, so I implemented two additional methods:`}),`
`,(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:`language-cpp`,children:`void send_input(const std::string &str);
std::string pop_str_output();
`})}),`
`,(0,a.jsxs)(s.p,{children:[`Their implementations are straightforward extensions of the existing `,(0,a.jsx)(s.code,{children:`send_input(long long)`}),` and `,(0,a.jsx)(s.code,{children:`pop_all_output()`}),` methods.`]}),`
`,(0,a.jsx)(s.h2,{children:`Part 1`}),`
`,(0,a.jsxs)(s.p,{children:[`Given the full output string, this problem is now as straightforward as any other AoC grid problem. I just iterate through each cell, and for each `,(0,a.jsx)(s.code,{children:`#`}),`, check if all four neighbors are also `,(0,a.jsx)(s.code,{children:`#`}),`.`]}),`
`,(0,a.jsx)(s.h2,{children:`Part 2`}),`
`,(0,a.jsx)(s.p,{children:`The first step of part 2 is to simulate the robot's movement along the scaffolding by moving as far as possible in the current direction, then turning left or right when blocked, until we reach the end. After getting the movement sequence, the next step is to compress it into functions A, B, and C.`}),`
`,(0,a.jsx)(s.p,{children:`There's one simple trick here, for the purpose of submission: I can print out the movement sequence, paste it into VS Code, and select the longest substring that appears multiple times:`}),`
`,(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:i,alt:`Finding repeated substrings in VS Code`,width:858,height:128})}),`
`,(0,a.jsx)(s.p,{children:`Of course, this isn't a general solution. To implement this logic in code, the idea is this:`}),`
`,(0,a.jsxs)(s.ol,{children:[`
`,(0,a.jsxs)(s.li,{children:[`I enumerate all prefixes of length up to 21 characters as function A. The prefix must end at a comma. (e.g., `,(0,a.jsx)(s.code,{children:`R,8,L,12,R,8`}),`)`]}),`
`,(0,a.jsxs)(s.li,{children:[`I split the sequence by A into non-empty segments. (e.g., `,(0,a.jsx)(s.code,{children:`["R,12,L,8,R,10,R,12,L,8,R,10,", "R,8,L,8,L,8,R,8,R,10,", "R,8,L,8,L,8,R,8,R,10,R,12,L,8,R,10,R,8,L,8,L,8,R,8,R,10,"]`}),`)`]}),`
`,(0,a.jsxs)(s.li,{children:[`For the first segment, I enumerate all prefixes of length up to 21 characters as function B. Again, the prefix must end at a comma. (e.g., `,(0,a.jsx)(s.code,{children:`R,12,L,8,`}),`)`]}),`
`,(0,a.jsxs)(s.li,{children:[`I split all segments by B into non-empty segments. (e.g., `,(0,a.jsx)(s.code,{children:`["R,10,", "R,10,", "R,8,L,8,L,8,R,8,R,10,", "R,8,L,8,L,8,R,8,R,10,", "R,10,R,8,L,8,L,8,R,8,R,10,"]`}),`)`]}),`
`,(0,a.jsx)(s.li,{children:`If all remaining segments are identical and of length up to 21 characters, these segments are function C.`}),`
`]}),`
`,(0,a.jsxs)(s.p,{children:[`C++ does not make this job easy for me, because it doesn't have convenient methods like `,(0,a.jsx)(s.code,{children:`split()`}),` or `,(0,a.jsx)(s.code,{children:`replace()`}),`, which I had to implement myself:`]}),`
`,`
`,(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:`language-cpp`,children:`std::vector<std::string> split(const std::vector<std::string> &data, const std::string &delim) {
    std::vector<std::string> result;
    for (const auto &line : data) {
        size_t start = 0;
        size_t end = line.find(delim);
        while (end != std::string::npos) {
            if (end != start) {
                result.push_back(line.substr(start, end - start));
            }
            start = end + delim.length();
            end = line.find(delim, start);
        }
        if (start >= line.length()) continue;
        result.push_back(line.substr(start, end));
    }
    return result;
}
`})}),`
`,(0,a.jsxs)(s.p,{children:[`After acquiring the functions A, B, and C, I can replace their occurrences in the movement sequence with `,(0,a.jsx)(s.code,{children:`A,`}),`, `,(0,a.jsx)(s.code,{children:`B,`}),`, and `,(0,a.jsx)(s.code,{children:`C,`}),` respectively, and finally send the main routine and functions to the program.`]}),(0,a.jsx)(r,{frontMatter:o})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}export{o as n,c as t};