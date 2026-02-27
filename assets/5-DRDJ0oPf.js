import{u as i,j as e}from"./index-DsugHUjk.js";import{P as a,a as r}from"./_components-GobSWsVa.js";import"./_commonjsHelpers-Cpj98o6Y.js";const s={tags:["Intcode"],title:"Advent of Code 2019 - Day 5: Sunny with a Chance of Asteroids",description:"Advent of Code 2019 - Day 5: Sunny with a Chance of Asteroids, a problem that involves Intcode. Solution written in C++, with detailed walkthrough and proof.",year:2019,day:5};function o(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2019 - Day 5",e.jsx(n.span,{className:"subtitle",children:"Sunny with a Chance of Asteroids"})]}),`
`,`
`,e.jsx(a,{frontMatter:s}),`
`,e.jsx(n.p,{children:"The Intcode itself is relatively straightforward, but I spent some time ironing out the infrastructure for code sharing, especially since it's a bit tricky in C++."}),`
`,e.jsxs(n.p,{children:["At this point, my code is still functional. My ",e.jsx(n.code,{children:"intcode.hpp"})," file contains two functions:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-cpp",children:`std::vector<int> parse_prog(const std::string &line);
std::vector<int> run_prog(std::vector<int> &codes, std::vector<int> inputs);
`})}),`
`,e.jsxs(n.p,{children:["It modifies the ",e.jsx(n.code,{children:"codes"})," vector in place, and returns a vector of outputs. The inputs are provided as a vector as well, and consumed in order."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Input and output instructions are straightforward to implement. One reads from the input vector, and the other appends to the output vector."}),`
`,e.jsxs(n.li,{children:["Parameter modes require changing ",e.jsx(n.code,{children:"codes[op1]"})," to ",e.jsx(n.code,{children:"eval_param(codes, inst.params[0])"})," (ah yes, I also have a ",e.jsx(n.code,{children:"struct Inst"})," that holds the opcode and parameters, each with mode/value, and a function to extract this information). ",e.jsx(n.code,{children:"eval_param"})," just checks the mode and either returns the value at that position or the immediate value."]}),`
`,e.jsxs(n.li,{children:["The main ",e.jsx(n.code,{children:"for"})," loop doesn't increment by a fixed amount anymore; instead, each instruction in the ",e.jsx(n.code,{children:"switch"})," statement specifies the new ",e.jsx(n.code,{children:"i"})," value at the end."]}),`
`,e.jsxs(n.li,{children:["The jump instructions just set ",e.jsx(n.code,{children:"i"})," instead of incrementing it."]}),`
`]}),`
`,e.jsx(n.p,{children:"The new main loop looks like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-cpp",children:`int input_idx = 0;
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
`,e.jsx(r,{frontMatter:s})]})}function l(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{l as default,s as frontMatter};
