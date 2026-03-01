import{u as r,j as e}from"./index-BbGgi_W7.js";import{P as o,a}from"./_components-B9H8t5ur.js";import"./_commonjsHelpers-Cpj98o6Y.js";const l="/assets/17-vscode-BwLr3OPS.png",s={tags:["Intcode","Grid walking","String manipulation","Manual inspection"],title:"Advent of Code 2019 - Day 17: Set and Forget",description:"Advent of Code 2019 - Day 17: Set and Forget, a problem that involves Intcode, Grid walking, String manipulation, and Manual inspection. Solution written in C++, with detailed walkthrough and proof.",year:2019,day:17};function i(t){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2019 - Day 17",e.jsx(n.span,{className:"subtitle",children:"Set and Forget"})]}),`
`,`
`,e.jsx(o,{frontMatter:s}),`
`,e.jsx(n.p,{children:"This problem introduces string I/O, so I implemented two additional methods:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-cpp",children:`void send_input(const std::string &str);
std::string pop_str_output();
`})}),`
`,e.jsxs(n.p,{children:["Their implementations are straightforward extensions of the existing ",e.jsx(n.code,{children:"send_input(long long)"})," and ",e.jsx(n.code,{children:"pop_all_output()"})," methods."]}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:["Given the full output string, this problem is now as straightforward as any other AoC grid problem. I just iterate through each cell, and for each ",e.jsx(n.code,{children:"#"}),", check if all four neighbors are also ",e.jsx(n.code,{children:"#"}),"."]}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsx(n.p,{children:"The first step of part 2 is to simulate the robot's movement along the scaffolding by moving as far as possible in the current direction, then turning left or right when blocked, until we reach the end. After getting the movement sequence, the next step is to compress it into functions A, B, and C."}),`
`,e.jsx(n.p,{children:"There's one simple trick here, for the purpose of submission: I can print out the movement sequence, paste it into VS Code, and select the longest substring that appears multiple times:"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:l,alt:"Finding repeated substrings in VS Code",width:858,height:128})}),`
`,e.jsx(n.p,{children:"Of course, this isn't a general solution. To implement this logic in code, the idea is this:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["I enumerate all prefixes of length up to 21 characters as function A. The prefix must end at a comma. (e.g., ",e.jsx(n.code,{children:"R,8,L,12,R,8"}),")"]}),`
`,e.jsxs(n.li,{children:["I split the sequence by A into non-empty segments. (e.g., ",e.jsx(n.code,{children:'["R,12,L,8,R,10,R,12,L,8,R,10,", "R,8,L,8,L,8,R,8,R,10,", "R,8,L,8,L,8,R,8,R,10,R,12,L,8,R,10,R,8,L,8,L,8,R,8,R,10,"]'}),")"]}),`
`,e.jsxs(n.li,{children:["For the first segment, I enumerate all prefixes of length up to 21 characters as function B. Again, the prefix must end at a comma. (e.g., ",e.jsx(n.code,{children:"R,12,L,8,"}),")"]}),`
`,e.jsxs(n.li,{children:["I split all segments by B into non-empty segments. (e.g., ",e.jsx(n.code,{children:'["R,10,", "R,10,", "R,8,L,8,L,8,R,8,R,10,", "R,8,L,8,L,8,R,8,R,10,", "R,10,R,8,L,8,L,8,R,8,R,10,"]'}),")"]}),`
`,e.jsx(n.li,{children:"If all remaining segments are identical and of length up to 21 characters, these segments are function C."}),`
`]}),`
`,e.jsxs(n.p,{children:["C++ does not make this job easy for me, because it doesn't have convenient methods like ",e.jsx(n.code,{children:"split()"})," or ",e.jsx(n.code,{children:"replace()"}),", which I had to implement myself:"]}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-cpp",children:`std::vector<std::string> split(const std::vector<std::string> &data, const std::string &delim) {
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
`,e.jsxs(n.p,{children:["After acquiring the functions A, B, and C, I can replace their occurrences in the movement sequence with ",e.jsx(n.code,{children:"A,"}),", ",e.jsx(n.code,{children:"B,"}),", and ",e.jsx(n.code,{children:"C,"})," respectively, and finally send the main routine and functions to the program."]}),`
`,e.jsx(a,{frontMatter:s})]})}function p(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{p as default,s as frontMatter};
