import{t as e}from"./jsx-runtime-xty2or4m.js";import{n as t}from"./lib-zKnO7aGa.js";import{n,t as r}from"./_components-vrS0ov66.js";var i=e(),a={tags:[`Intcode`,`Brute force`],title:`Advent of Code 2019 - Day 2: 1202 Program Alarm`,description:`Advent of Code 2019 - Day 2: 1202 Program Alarm, a problem that involves Intcode and Brute force. Solution written in C++, with detailed walkthrough and proof.`,year:2019,day:2};function o(e){let o={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2019 - Day 2`,(0,i.jsx)(o.span,{className:`subtitle`,children:`1202 Program Alarm`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.p,{children:`This begins a very interesting series of Intcode problems. This is just like normal Assembly, with the only quirk being that the instruction memory can be modified at runtime. I iteratively modified my setup, and I will describe the version produced by each day.`}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(o.p,{children:[`In Day 2, I didn't realize that I would be using this Intcode VM for the rest of the year, so the VM still lives in the solution file. It's a single function called `,(0,i.jsx)(o.code,{children:`int run_prog(vector<int> codes, int noun, int verb)`}),`, which is just:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-cpp`,children:`for (int i = 0; i + 3 < codes.size() && codes[i] != 99; i += 4) {
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
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsx)(o.p,{children:`I originally thought I had to analyze the program to figure out what noun and verb would produce the desired output, but because the program is self-modifying, this is actually tricky. I missed the line where it says:`}),`
`,(0,i.jsxs)(o.blockquote,{children:[`
`,(0,i.jsxs)(o.p,{children:[`Each of the two input values will be between `,(0,i.jsx)(o.code,{children:`0`}),` and `,(0,i.jsx)(o.code,{children:`99`}),`, inclusive.`]}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`Once I see that, it's easy enough to just brute force all 10000 combinations of noun and verb.`}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};