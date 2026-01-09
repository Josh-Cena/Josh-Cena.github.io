import{u as r,j as n}from"./index-K2wRAUCr.js";import{F as s,a}from"./_components-D8vnU3Mx.js";const i={description:"Advent of Code 2019 - Day 15: Oxygen System. Written in C++.",tags:["Intcode","BFS/DFS","Maze"],year:2019,day:15,title:"AoC 2019 D15: Oxygen System"};function o(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{children:"AoC 2019 D15: Oxygen System"}),`
`,`
`,n.jsx(s,{frontMatter:i}),`
`,n.jsx(t.p,{children:`This problem really shows what Intcode has to offer, and is what I'd say the first problem that's not just "run this Intcode program". This kind of problem is impossible to create with an Intcode VM, since it's basically a CTF-style interactive puzzle.`}),`
`,n.jsx(t.h2,{children:"Part 1"}),`
`,n.jsxs(t.p,{children:["Originally, I listened to Reddit wisdom to just explore the maze with ",n.jsx(t.code,{children:"rand()"}),", but I found that the droid often just oscillates in a small region. In the end I still went for an actual DFS. I keep track of the directions I've taken; every time, I pick an unexplored direction if possible; otherwise, I backtrack by reverting the last move."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-cpp",children:`while (!prog.halted) {
    prog.run_until_input();
    int direction = -1;
    // Try to find an unexplored direction
    for (int dir = 1; dir <= 4; dir++) {
        std::pair<int, int> npos = move_in_dir(pos, dir);
        if (map.find(npos) == map.end()) {
            direction = dir;
            break;
        }
    }
    // If all directions explored, backtrack
    if (direction == -1) {
        if (directions.empty()) {
            break; // Explored entire area
        }
        int last_dir = directions.back();
        directions.pop_back();
        direction = opposite_dir(last_dir);
        prog.send_input(direction);
        prog.run_until_output();
        prog.pop_output(); // Already know what it is
        pos = move_in_dir(pos, direction);
    } else {
        prog.send_input(direction);
        prog.run_until_output();
        long long status = prog.pop_output();
        std::pair<int, int> npos = move_in_dir(pos, direction);
        if (status == 2) {
            pos = npos;
            map[npos] = 2;
            oxygen_pos = npos;
            directions.push_back(direction);
        } else if (status == 1) {
            pos = npos;
            map[npos] = 1;
            directions.push_back(direction);
        } else if (status == 0) {
            map[npos] = 0;
        }
    }
}
`})}),`
`,n.jsx(t.p,{children:"For part 1, I could have stopped when I found the oxygen system, but since part 2 requires the full map, I just explored the entire map. After we do this, it's just a normal AoC-style maze BFS problem."}),`
`,n.jsx(t.h2,{children:"Part 2"}),`
`,n.jsx(t.p,{children:"Part 1 already built the full map, so part 2 is just a BFS from the oxygen system to find the maximum distance to any reachable cell."}),`
`,n.jsx(a,{frontMatter:i})]})}function c(e={}){const{wrapper:t}={...r(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o(e)}export{c as default,i as frontMatter};
