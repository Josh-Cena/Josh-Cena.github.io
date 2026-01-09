import{u as s,j as e}from"./index-K2wRAUCr.js";import{F as r,a as c}from"./_components-D8vnU3Mx.js";const o={description:"Advent of Code 2019 - Day 2: 1202 Program Alarm. Written in C++.",tags:["Intcode","Brute force"],year:2019,day:2,title:"AoC 2019 D2: 1202 Program Alarm"};function i(t){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"AoC 2019 D2: 1202 Program Alarm"}),`
`,`
`,e.jsx(r,{frontMatter:o}),`
`,e.jsx(n.p,{children:"This begins a very interesting series of Intcode problems. This is just like normal Assembly, with the only quirk being that the instruction memory can be modified at runtime. I iteratively modified my setup, and I will describe the version produced by each day."}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:["In Day 2, I didn't realize that I would be using this Intcode VM for the rest of the year, so the VM still lives in the solution file. It's a single function called ",e.jsx(n.code,{children:"int run_prog(vector<int> codes, int noun, int verb)"}),", which is just:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-cpp",children:`for (int i = 0; i + 3 < codes.size() && codes[i] != 99; i += 4) {
    int opcode = codes[i];
    int op1 = codes[i + 1];
    int op2 = codes[i + 2];
    int dest = codes[i + 3];
    if (opcode == 1) {
        codes[dest] = codes[op1] + codes[op2];
    } else if (opcode == 2) {
        codes[dest] = codes[op1] * codes[op2];
    } else {
        throw "Invalid opcode";
    }
}
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsx(n.p,{children:"I originally thought I had to analyze the program to figure out what noun and verb would produce the desired output, but because the program is self-modifying, this is actually tricky. I missed the line where it says:"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Each of the two input values will be between ",e.jsx(n.code,{children:"0"})," and ",e.jsx(n.code,{children:"99"}),", inclusive."]}),`
`]}),`
`,e.jsx(n.p,{children:"Once I see that, it's easy enough to just brute force all 10000 combinations of noun and verb."}),`
`,e.jsx(c,{frontMatter:o})]})}function l(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{l as default,o as frontMatter};
