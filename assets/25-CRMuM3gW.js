import{u as a,j as e}from"./index-RGQIYrCD.js";import{P as r,a as i}from"./_components-QBhgxPvn.js";import{M as c}from"./index-xX327aW7.js";const s={tags:["Intcode","Puzzle","Manual inspection"],description:"Advent of Code 2019 - Day 25: Cryostasis, a problem that involves Intcode, Puzzle, and Manual inspection. Solution written in C++, with detailed walkthrough and proof.",year:2019,day:25,title:"Advent of Code 2019 - Day 25: Cryostasis"};function o(n){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",span:"span",...a(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsxs(t.h1,{children:["Advent of Code 2019 - Day 25",e.jsx(t.span,{className:"subtitle",children:"Cryostasis"})]}),`
`,`
`,e.jsx(r,{frontMatter:s}),`
`,`
`,e.jsxs(t.p,{children:['This is a problem I really enjoyed, especially the gaming part. I bet there are more elegant ways to do it, but C++ makes parsing strings a huge pain, so I just manually played the game and drew the map. This is the first truly "interactive" Intcode program, since ',e.jsx(t.a,{href:"/notes/aoc/2019/13/",children:"day 13"})," was solved by an intelligence. The game loop looks like:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-cpp",children:`std::cout << "\\x1b[2J\\x1b[1;1H" << start_prog(prog);
while (!prog.halted) {
    std::string command;
    std::getline(std::cin, command);
    std::cout << "\\x1b[2J\\x1b[1;1H" << exchange_msg(prog, command);
}
`})}),`
`,e.jsxs(t.p,{children:["I need to step over all input instructions and then all output instructions, so ",e.jsx(t.code,{children:"exchange_msg"})," looks like:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-cpp",children:`std::string exchange_msg(Program &prog, const std::string &msg) {
    prog.send_input(msg);
    prog.send_input('\\n');
    prog.run_until_output(); // Step over input instructions
    prog.run_until_input(); // Step over output instructions
    return prog.pop_str_output();
}
`})}),`
`,e.jsx(t.p,{children:"The map I drew is as follows:"}),`
`,e.jsx(c,{code:`flowchart LR
    HB[Hull Breach]
    HB -->|east| St[Stables]
    St -->|south| Sto["Storage
    giant electromagnet"]
    Sto -->|south| Ar["Arcade
    hologram"]
    HB -->|west| SL[Science Lab]
    SL -->|north| HCF["Hot Chocolate Fountain
    molten lava"]
    HCF -->|north| GWC["Gift Wrapping Center
    infinite loop"]
    GWC -->|west| Ha["Hallway
    semiconductor"]
    HCF -->|west| Pa[Passages]
    Pa -->|north| Co[Corridor]
    Pa -->|south| CQ["Crew Quarters
    hypercube"]
    SL -->|west| Ho["Holodeck
    antenna"]
    Ho -->|south| Ki["Kitchen
    spool of cat6"]
    Ho -->|west| WDM["Warp Drive Maintenance
    photons"]
    WDM -->|south| Na["Navigation
    escape pod"]
    Na -->|south| SC["Security Checkpoint"]
    HB -->|south| Ob["Observatory
    mouse"]
    Ob -->|east| En["Engineering
    shell"]
    Ob -->|west| SB["Sick Bay
    whirled peas"]`}),`
`,e.jsx(t.p,{children:"I also experimented with which items are takeable. The final commands are:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-cpp",children:`std::vector<std::string> take_everything = {
    "east", "south", "south", "take hologram",
    "north", "north", "west", "south", "take mouse",
    "east", "take shell",
    "west", "west", "take whirled peas",
    "east", "north", "west", "north", "north", "west", "take semiconductor",
    "east", "south", "west", "south", "take hypercube",
    "north", "east", "south", "west", "take antenna",
    "south", "take spool of cat6",
    "north", "west", "south", "south"
};
`})}),`
`,e.jsxs(t.p,{children:["Once I execute these commands, I am at the security checkpoint with all items. The final step is to try all combinations of items to pass the checkpoint. There are 8 items, so I can just enumerate all combinations of ",e.jsx(t.code,{children:"drop x"})," and ",e.jsx(t.code,{children:"take x"})," commands. If the program halts after going south, I know I passed the checkpoint."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-cpp",children:`int n = items.size();
for (int mask = 0; mask < (1 << n); mask++) {
    std::vector<std::string> to_drop;
    std::vector<std::string> to_take;
    for (int i = 0; i < n; i++) {
        if (mask & (1 << i)) {
            exchange_msg(prog, "drop " + items[i]);
        } else {
            exchange_msg(prog, "take " + items[i]);
        }
    }
    auto output = exchange_msg(prog, "south");
    if (prog.halted) {
        std::cout << output;
        break;
    }
}
`})}),`
`,e.jsx(i,{frontMatter:s})]})}function d(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{d as default,s as frontMatter};
