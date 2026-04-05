import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{n,t as r}from"./_components-DcdEf7Vf.js";var i=e();function a(e){let a={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,span:`span`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2019 - Day 5`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Sunny with a Chance of Asteroids`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.p,{children:`The Intcode itself is relatively straightforward, but I spent some time ironing out the infrastructure for code sharing, especially since it's a bit tricky in C++.`}),`
`,(0,i.jsxs)(a.p,{children:[`At this point, my code is still functional. My `,(0,i.jsx)(a.code,{children:`intcode.hpp`}),` file contains two functions:`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-cpp`,children:`std::vector<int> parse_prog(const std::string &line);
std::vector<int> run_prog(std::vector<int> &codes, std::vector<int> inputs);
`})}),`
`,(0,i.jsxs)(a.p,{children:[`It modifies the `,(0,i.jsx)(a.code,{children:`codes`}),` vector in place, and returns a vector of outputs. The inputs are provided as a vector as well, and consumed in order.`]}),`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`Input and output instructions are straightforward to implement. One reads from the input vector, and the other appends to the output vector.`}),`
`,(0,i.jsxs)(a.li,{children:[`Parameter modes require changing `,(0,i.jsx)(a.code,{children:`codes[op1]`}),` to `,(0,i.jsx)(a.code,{children:`eval_param(codes, inst.params[0])`}),` (ah yes, I also have a `,(0,i.jsx)(a.code,{children:`struct Inst`}),` that holds the opcode and parameters, each with mode/value, and a function to extract this information). `,(0,i.jsx)(a.code,{children:`eval_param`}),` just checks the mode and either returns the value at that position or the immediate value.`]}),`
`,(0,i.jsxs)(a.li,{children:[`The main `,(0,i.jsx)(a.code,{children:`for`}),` loop doesn't increment by a fixed amount anymore; instead, each instruction in the `,(0,i.jsx)(a.code,{children:`switch`}),` statement specifies the new `,(0,i.jsx)(a.code,{children:`i`}),` value at the end.`]}),`
`,(0,i.jsxs)(a.li,{children:[`The jump instructions just set `,(0,i.jsx)(a.code,{children:`i`}),` instead of incrementing it.`]}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`The new main loop looks like this:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-cpp`,children:`int input_idx = 0;
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
`})}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Intcode`],title:`Advent of Code 2019 - Day 5: Sunny with a Chance of Asteroids`,description:`Advent of Code 2019 - Day 5: Sunny with a Chance of Asteroids, a problem that involves Intcode. Solution written in C++, with detailed walkthrough and proof.`,year:2019,day:5};export{o as default};