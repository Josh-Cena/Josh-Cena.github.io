import{u as o,j as e}from"./index-K2wRAUCr.js";import{F as i,a}from"./_components-D8vnU3Mx.js";const s={description:"Advent of Code 2019 - Day 3: Crossed Wires. Written in C++.",tags:["Grid walking","Coordinate compression"],year:2019,day:3,title:"AoC 2019 D3: Crossed Wires"};function r(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"AoC 2019 D3: Crossed Wires"}),`
`,`
`,e.jsx(i,{frontMatter:s}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:"The whole area covered is 12804 × 14957, which is impossible to represent as a 2D array, where each cell's (row, column) corresponds to a point (x, y). The key observation is that most of the stuff between two endpoints doesn't matter: all we care is where a wire starts and ends, and what values come between them. Therefore we can compress the points using a hashmap idea, where there's a bidirectional (but not identity) mapping between (row, column) and (x, y). The row and column still respect the order of (x, y), so any intersection relationships still hold."}),`
`,e.jsx(n.p,{children:"For example, this example map:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plain",children:`...........
...........
...........
....+----+.
....|....|.
....|....|.
....|....|.
.........|.
.o-------+.
...........
`})}),`
`,e.jsx(n.p,{children:"is isomorphic to the following grid:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plain",children:`.....
..++.
..||.
.o-+.
.....
`})}),`
`,e.jsx(n.p,{children:"(Note: if we want to find the enclosed area, we may need to allow some more spacing between each point so we can capture the space between lines.)"}),`
`,e.jsx(n.p,{children:"In code, this corresponds to a bidirectional map between (x, y) and (row, column):"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-cpp",children:`std::map<int, int> &x_compressor;
std::vector<int> &x_decompressor;
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"x_compressor[x]"})," gives the row for a physical x-coordinate, and ",e.jsx(n.code,{children:"x_decompressor[row]"})," gives the physical x-coordinate for a given row. The same applies for y-coordinates and columns. They are built by collecting all x and y coordinates, sorting them, and pairing each unique coordinate with its index in the sorted list."]}),`
`,e.jsxs(n.p,{children:["Now, we just need to iterate through each wire's path. The grid is represented as a 2D array of integers, where each integer is a bitmask representing which wires have passed through that cell. So ",e.jsx(n.code,{children:"0"})," means no wires, ",e.jsx(n.code,{children:"1"})," means wire 1, ",e.jsx(n.code,{children:"2"})," means wire 2, and ",e.jsx(n.code,{children:"3"})," means both wires (an intersection). We just find all intersections and compute their Manhattan distances to the origin."]}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["Once we have the compressed grid, we just need to walk the wire again, this time counting steps. For each wire, I keep a ",e.jsx(n.code,{children:"map<pair<int, int>, int>"})," that maps each (row, column) to the number of steps taken to reach that cell. We sum the two maps by key and find the minimum."]}),`
`,e.jsx(a,{frontMatter:s})]})}function d(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{d as default,s as frontMatter};
