import{u as s,j as e}from"./index-DsugHUjk.js";import{P as r,a as d}from"./_components-GobSWsVa.js";import"./_commonjsHelpers-Cpj98o6Y.js";const o={tags:["Intcode","Brute force"],title:"Advent of Code 2019 - Day 2: 1202 Program Alarm",description:"Advent of Code 2019 - Day 2: 1202 Program Alarm, a problem that involves Intcode and Brute force. Solution written in C++, with detailed walkthrough and proof.",year:2019,day:2};function i(t){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2019 - Day 2",e.jsx(n.span,{className:"subtitle",children:"1202 Program Alarm"})]}),`
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
`,e.jsx(d,{frontMatter:o})]})}function h(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{h as default,o as frontMatter};
