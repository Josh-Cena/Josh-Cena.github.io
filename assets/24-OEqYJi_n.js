import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{n,t as r}from"./_components-DcdEf7Vf.js";var i=e();function a(e){let a={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2019 - Day 24`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Planet of Discord`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(a.p,{children:[`The rule number 1 of cellular automata (like mazes): always represent the grid as a `,(0,i.jsx)(a.code,{children:`map<Coordinate, CellType>`}),`, and never as a physical 2D array, because there will always be infinite grids, irregular grids, etc.`]}),`
`,(0,i.jsx)(a.p,{children:`My typical approach is to go through each alive cell and only evolve its neighbors and itself, since farther cells cannot change state. It looks like this:`}),`
`,`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-cpp`,children:`template<typename T>
std::set<T> evolve(
    const std::set<T> &bugs,
    std::vector<T> (*get_neighbors)(T)
) {
    std::set<T> new_bugs;
    std::set<T> to_check;
    for (auto &bug : bugs) {
        to_check.insert(bug);
        for (auto &neighbor : get_neighbors(bug))
            to_check.insert(neighbor);
    }
    for (auto &cell : to_check) {
        int alive_nbrs = 0;
        for (auto &neighbor : get_neighbors(cell)) {
            if (bugs.count(neighbor)) alive_nbrs++;
        }
        if (!bugs.count(cell) && alive_nbrs == 2 || alive_nbrs == 1) {
            new_bugs.insert(cell);
        }
    }
    return new_bugs;
}
`})}),`
`,(0,i.jsxs)(a.p,{children:[`This is really, really boilerplate code for cellular automata problems. The only thing that changes is the `,(0,i.jsx)(a.code,{children:`get_neighbors`}),` function and the rules for evolution. In this case, I'm making the function generic, and the two parts would use different `,(0,i.jsx)(a.code,{children:`get_neighbors`}),` functions. For part 1, it's just the 4 orthogonal neighbors in the same grid.`]}),`
`,(0,i.jsx)(a.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(a.p,{children:[`For part 2, the `,(0,i.jsx)(a.code,{children:`get_neighbors`}),` function is more complicated, since we have to deal with multiple levels of grids. The cell is now 3D, with an additional `,(0,i.jsx)(a.code,{children:`level`}),` coordinate. But there isn't much to say about the `,(0,i.jsx)(a.code,{children:`get_neighbors`}),` function; it's just a lot of casework. The evolution rules are the same as part 1.`]}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Cellular automata`],title:`Advent of Code 2019 - Day 24: Planet of Discord`,description:`Advent of Code 2019 - Day 24: Planet of Discord, a problem that involves Cellular automata. Solution written in C++, with detailed walkthrough and proof.`,year:2019,day:24};export{o as default};