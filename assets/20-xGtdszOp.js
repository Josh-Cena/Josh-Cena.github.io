import{u as r,j as e}from"./index-viUjO3pU.js";import{P as s,a as i}from"./_components-CnEwx4LA.js";import"./_commonjsHelpers-Cpj98o6Y.js";const n={tags:["BFS/DFS","Maze"],description:"Advent of Code 2019 - Day 20: Donut Maze, a problem that involves BFS/DFS and Maze. Solution written in C++, with detailed walkthrough and proof.",year:2019,day:20,title:"Advent of Code 2019 - Day 20: Donut Maze"};function a(o){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.h1,{children:["Advent of Code 2019 - Day 20",e.jsx(t.span,{className:"subtitle",children:"Donut Maze"})]}),`
`,`
`,e.jsx(s,{frontMatter:n}),`
`,e.jsx(t.h2,{children:"Part 1"}),`
`,e.jsx(t.p,{children:"This is a surprisingly simple problem compared to the amount of trouble of parsing the input. The first step is to find the positions of the portals. I first find the inner and outer edges of the donut, by iterating over the middle row until I go into empty space. Then I iterate over each inner/outer edge and check for uppercase letters adjacent to open spaces. Finally I build a bidirectional map of portals and their grid positions."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-cpp",children:`std::map<std::pair<int, int>, int> pos_to_portal;
std::map<int, std::vector<std::pair<int, int>>> portal_to_poss;
for (auto &[r, c, lvl, ch1, ch2] : donut_edges(data, width, height, donut_width)) {
    if (ch1 >= 'A' && ch1 <= 'Z' && ch2 >= 'A' && ch2 <= 'Z') {
        int code = portal_code(ch1, ch2);
        pos_to_portal[{r, c}] = code;
        portal_to_poss[code].emplace_back(r, c);
    }
}

std::pair<int, int> start_pos = portal_to_poss[portal_code('A', 'A')][0];
std::pair<int, int> end_pos = portal_to_poss[portal_code('Z', 'Z')][0];
// AA and ZZ aren't real portals
portal_to_poss.erase(portal_code('A', 'A'));
portal_to_poss.erase(portal_code('Z', 'Z'));
pos_to_portal.erase(start_pos);
pos_to_portal.erase(end_pos);
`})}),`
`,e.jsx(t.p,{children:"The rest is standard BFS: for each position, we can move in 4 directions, plus going through a portal if we are on one."}),`
`,e.jsx(t.h2,{children:"Part 2"}),`
`,e.jsxs(t.p,{children:["The same idea as part 1, except now the position is (row, column, level). The ",e.jsx(t.code,{children:"portal_to_poss"})," map now maps to ",e.jsx(t.code,{children:"(row, column, delta_level)"}),", where ",e.jsx(t.code,{children:"delta_level"})," is ",e.jsx(t.code,{children:"+1"})," for inner portals and ",e.jsx(t.code,{children:"-1"})," for outer portals. When we go through a portal, we also update the level accordingly, and keep the level non-negative. The start and end positions are at level 0. Nothing else changes."]}),`
`,e.jsxs(t.p,{children:["To share code, I made part 1 be based on this 3D state as well, just with ",e.jsx(t.code,{children:"delta_level"})," always being 0."]}),`
`,e.jsx(i,{frontMatter:n})]})}function c(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(a,{...o})}):a(o)}export{c as default,n as frontMatter};
