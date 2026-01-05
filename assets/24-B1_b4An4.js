import{u as s,j as e}from"./index-BkHp0GFc.js";import{F as a,a as i}from"./_components-Bb0yU4yQ.js";const o={description:"Advent of Code 2019 - Day 24: Planet of Discord. Written in C++.",tags:["Cellular automata"],year:2019,day:24,title:"AoC 2019 D24: Planet of Discord"};function r(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"AoC 2019 D24: Planet of Discord"}),`
`,`
`,e.jsx(a,{frontMatter:o}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:["The rule number 1 of cellular automata (like mazes): always represent the grid as a ",e.jsx(n.code,{children:"map<Coordinate, CellType>"}),", and never as a physical 2D array, because there will always be infinite grids, irregular grids, etc."]}),`
`,e.jsx(n.p,{children:"My typical approach is to go through each alive cell and only evolve its neighbors and itself, since farther cells cannot change state. It looks like this:"}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-cpp",children:`template<typename T>
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
`,e.jsxs(n.p,{children:["This is really, really boilerplate code for cellular automata problems. The only thing that changes is the ",e.jsx(n.code,{children:"get_neighbors"})," function and the rules for evolution. In this case, I'm making the function generic, and the two parts would use different ",e.jsx(n.code,{children:"get_neighbors"})," functions. For part 1, it's just the 4 orthogonal neighbors in the same grid."]}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["For part 2, the ",e.jsx(n.code,{children:"get_neighbors"})," function is more complicated, since we have to deal with multiple levels of grids. The cell is now 3D, with an additional ",e.jsx(n.code,{children:"level"})," coordinate. But there isn't much to say about the ",e.jsx(n.code,{children:"get_neighbors"})," function; it's just a lot of casework. The evolution rules are the same as part 1."]}),`
`,e.jsx(i,{frontMatter:o})]})}function h(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{h as default,o as frontMatter};
