import{t as e}from"./jsx-runtime-xty2or4m.js";import{n as t}from"./lib-zKnO7aGa.js";import{n,t as r}from"./_components-vrS0ov66.js";var i=e(),a={tags:[`BFS/DFS`,`Maze`],title:`Advent of Code 2019 - Day 20: Donut Maze`,description:`Advent of Code 2019 - Day 20: Donut Maze, a problem that involves BFS/DFS and Maze. Solution written in C++, with detailed walkthrough and proof.`,year:2019,day:20};function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2019 - Day 20`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Donut Maze`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsx)(o.p,{children:`This is a surprisingly simple problem compared to the amount of trouble of parsing the input. The first step is to find the positions of the portals. I first find the inner and outer edges of the donut, by iterating over the middle row until I go into empty space. Then I iterate over each inner/outer edge and check for uppercase letters adjacent to open spaces. Finally I build a bidirectional map of portals and their grid positions.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-cpp`,children:`std::map<std::pair<int, int>, int> pos_to_portal;
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
`,(0,i.jsx)(o.p,{children:`The rest is standard BFS: for each position, we can move in 4 directions, plus going through a portal if we are on one.`}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`The same idea as part 1, except now the position is (row, column, level). The `,(0,i.jsx)(o.code,{children:`portal_to_poss`}),` map now maps to `,(0,i.jsx)(o.code,{children:`(row, column, delta_level)`}),`, where `,(0,i.jsx)(o.code,{children:`delta_level`}),` is `,(0,i.jsx)(o.code,{children:`+1`}),` for inner portals and `,(0,i.jsx)(o.code,{children:`-1`}),` for outer portals. When we go through a portal, we also update the level accordingly, and keep the level non-negative. The start and end positions are at level 0. Nothing else changes.`]}),`
`,(0,i.jsxs)(o.p,{children:[`To share code, I made part 1 be based on this 3D state as well, just with `,(0,i.jsx)(o.code,{children:`delta_level`}),` always being 0.`]}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};