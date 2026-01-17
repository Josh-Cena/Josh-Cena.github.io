import{u as i,j as n}from"./index-L6ckUcGi.js";import{F as a,a as r}from"./_components-DB3Df8DK.js";const s={tags:["Intcode"],description:"Advent of Code 2019 - Day 5: Sunny with a Chance of Asteroids, a problem that involves Intcode. Solution written in C++, with detailed walkthrough and proof.",year:2019,day:5,title:"Advent of Code 2019 - Day 5: Sunny with a Chance of Asteroids"};function o(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.h1,{children:["Advent of Code 2019 - Day 5",n.jsx(e.span,{className:"subtitle",children:"Sunny with a Chance of Asteroids"})]}),`
`,`
`,n.jsx(a,{frontMatter:s}),`
`,n.jsx(e.p,{children:"The Intcode itself is relatively straightforward, but I spent some time ironing out the infrastructure for code sharing, especially since it's a bit tricky in C++."}),`
`,n.jsxs(e.p,{children:["At this point, my code is still functional. My ",n.jsx(e.code,{children:"intcode.hpp"})," file contains two functions:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-cpp",children:`std::vector<int> parse_prog(const std::string &line);
std::vector<int> run_prog(std::vector<int> &codes, std::vector<int> inputs);
`})}),`
`,n.jsxs(e.p,{children:["It modifies the ",n.jsx(e.code,{children:"codes"})," vector in place, and returns a vector of outputs. The inputs are provided as a vector as well, and consumed in order."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Input and output instructions are straightforward to implement. One reads from the input vector, and the other appends to the output vector."}),`
`,n.jsxs(e.li,{children:["Parameter modes require changing ",n.jsx(e.code,{children:"codes[op1]"})," to ",n.jsx(e.code,{children:"eval_param(codes, inst.params[0])"})," (ah yes, I also have a ",n.jsx(e.code,{children:"struct Inst"})," that holds the opcode and parameters, each with mode/value, and a function to extract this information). ",n.jsx(e.code,{children:"eval_param"})," just checks the mode and either returns the value at that position or the immediate value."]}),`
`,n.jsxs(e.li,{children:["The main ",n.jsx(e.code,{children:"for"})," loop doesn't increment by a fixed amount anymore; instead, each instruction in the ",n.jsx(e.code,{children:"switch"})," statement specifies the new ",n.jsx(e.code,{children:"i"})," value at the end."]}),`
`,n.jsxs(e.li,{children:["The jump instructions just set ",n.jsx(e.code,{children:"i"})," instead of incrementing it."]}),`
`]}),`
`,n.jsx(e.p,{children:"The new main loop looks like this:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-cpp",children:`int input_idx = 0;
std::vector<int> outputs;
for (int ip = 0; codes[ip] != 99;) {
    Inst inst = parse_inst(codes, ip);
    switch (inst.opcode) {
        case 1:
        case 2:
        case 7:
        case 8: {
            int val1 = eval_param(codes, inst.params[0]);
            int val2 = eval_param(codes, inst.params[1]);
            // int res = ...;
            write_to(codes, inst.params[2], res);
            ip += num_params_for_opcode(inst.opcode) + 1;
            break;
        }
        case 3: {
            write_to(codes, inst.params[0], inputs[input_idx]);
            input_idx++;
            ip += num_params_for_opcode(inst.opcode) + 1;
            break;
        }
        case 4: {
            int val = eval_param(codes, inst.params[0]);
            outputs.push_back(val);
            ip += num_params_for_opcode(inst.opcode) + 1;
            break;
        }
        case 5:
        case 6: {
            int val = eval_param(codes, inst.params[0]);
            bool should_jump = inst.opcode == 5 ? (val != 0) : (val == 0);
            if (should_jump) {
                ip = eval_param(codes, inst.params[1]);
            } else {
                ip += num_params_for_opcode(inst.opcode) + 1;
            }
            break;
        }
        default:
            throw std::invalid_argument("Unknown opcode");
    }
}
`})}),`
`,n.jsx(r,{frontMatter:s})]})}function p(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{p as default,s as frontMatter};
