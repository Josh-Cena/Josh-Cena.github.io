import{u as s,j as e}from"./index-qevQNCpR.js";import{F as i,a}from"./_components-DKxNAZHD.js";const o={tags:["Intcode"],description:"Advent of Code 2019 - Day 23: Category Six, a problem that involves Intcode. Solution written in C++, with detailed walkthrough and proof.",year:2019,day:23,title:"Advent of Code 2019 - Day 23: Category Six"};function r(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.h1,{children:["Advent of Code 2019 - Day 23",e.jsx(t.span,{className:"subtitle",children:"Category Six"})]}),`
`,`
`,e.jsx(i,{frontMatter:o}),`
`,e.jsx(t.h2,{children:"Part 1"}),`
`,e.jsx(t.p,{children:`Again, I'm a bit annoyed by the vague wording. How do we deal with races with non-blocking I/O? In what order do we step the programs? The problem doesn't say, so I picked the most conservative approach: step each program one instruction at a time in a round-robin fashion (so they are run at the same "speed"). If a program produces output, we immediately deliver it to the destination program's input queue.`}),`
`,e.jsxs(t.p,{children:["I have to make some modifications to my ",e.jsx(t.code,{children:"Program"})," class (which I haven't changed since ",e.jsx(t.a,{href:"/notes/aoc/2019/17/",children:"day 17"}),"'s addition of string I/O). I added a field called ",e.jsx(t.code,{children:"default_input"}),", which is returned when the input queue is empty (previously it threw an error). To keep throwing errors by default, I default it to ",e.jsx(t.code,{children:"0xDEAD"}),", a sentinel value. Now the code for day 23 can set it to ",e.jsx(t.code,{children:"-1"})," when initializing each program."]}),`
`,e.jsx(t.p,{children:"The main loop looks like this:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-cpp",children:`while (true) {
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
`,e.jsx(t.h2,{children:"Part 2"}),`
`,e.jsxs(t.p,{children:['The problem statement is again vague about what it means by "continuously trying to receive packets". I added a field called ',e.jsx(t.code,{children:"starved_cycles"}),", which counts how many times the input instruction was executed while the input queue was empty, and is reset on ",e.jsx(t.code,{children:"send_input()"})," (not during the next input instruction, so that a program is immediately considered non-starved when it receives input). If all 50 programs have ",e.jsx(t.code,{children:"starved_cycles > 1"}),", we consider the network idle. (For reasons unclear to me, ",e.jsx(t.code,{children:"starved_cycles > 1"})," works but ",e.jsx(t.code,{children:"starved_cycles > 0"}),` doesn't; I assume that's the implication of "continuously".) This check happens once after each round-robin cycle.`]}),`
`,e.jsxs(t.p,{children:["When the network is idle, and the NAT has a packet stored, I send the stored packet to program 0 (which resets its ",e.jsx(t.code,{children:"starved_cycles"}),"). I also keep track of the last Y value sent by the NAT, and print it and exit if the same Y value is sent twice in a row."]}),`
`,e.jsx(a,{frontMatter:o})]})}function h(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{h as default,o as frontMatter};
