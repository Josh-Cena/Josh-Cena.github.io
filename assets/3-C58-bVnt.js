import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-BHnTV9cU.js";import"./Link-CEJsqf-b.js";import{n,t as r}from"./_components-CjKNIGmQ.js";var i=e();function a(e){let a={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2019 - Day 3`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Crossed Wires`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.h2,{children:`Part 1`}),`
`,(0,i.jsx)(a.p,{children:`The whole area covered is 12804 × 14957, which is impossible to represent as a 2D array, where each cell's (row, column) corresponds to a point (x, y). The key observation is that most of the stuff between two endpoints doesn't matter: all we care is where a wire starts and ends, and what values come between them. Therefore we can compress the points using a hashmap idea, where there's a bidirectional (but not identity) mapping between (row, column) and (x, y). The row and column still respect the order of (x, y), so any intersection relationships still hold.`}),`
`,(0,i.jsx)(a.p,{children:`For example, this example map:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-plain`,children:`...........
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
`,(0,i.jsx)(a.p,{children:`is isomorphic to the following grid:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-plain`,children:`.....
..++.
..||.
.o-+.
.....
`})}),`
`,(0,i.jsx)(a.p,{children:`(Note: if we want to find the enclosed area, we may need to allow some more spacing between each point so we can capture the space between lines.)`}),`
`,(0,i.jsx)(a.p,{children:`In code, this corresponds to a bidirectional map between (x, y) and (row, column):`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-cpp`,children:`std::map<int, int> &x_compressor;
std::vector<int> &x_decompressor;
`})}),`
`,(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.code,{children:`x_compressor[x]`}),` gives the row for a physical x-coordinate, and `,(0,i.jsx)(a.code,{children:`x_decompressor[row]`}),` gives the physical x-coordinate for a given row. The same applies for y-coordinates and columns. They are built by collecting all x and y coordinates, sorting them, and pairing each unique coordinate with its index in the sorted list.`]}),`
`,(0,i.jsxs)(a.p,{children:[`Now, we just need to iterate through each wire's path. The grid is represented as a 2D array of integers, where each integer is a bitmask representing which wires have passed through that cell. So `,(0,i.jsx)(a.code,{children:`0`}),` means no wires, `,(0,i.jsx)(a.code,{children:`1`}),` means wire 1, `,(0,i.jsx)(a.code,{children:`2`}),` means wire 2, and `,(0,i.jsx)(a.code,{children:`3`}),` means both wires (an intersection). We just find all intersections and compute their Manhattan distances to the origin.`]}),`
`,(0,i.jsx)(a.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(a.p,{children:[`Once we have the compressed grid, we just need to walk the wire again, this time counting steps. For each wire, I keep a `,(0,i.jsx)(a.code,{children:`map<pair<int, int>, int>`}),` that maps each (row, column) to the number of steps taken to reach that cell. We sum the two maps by key and find the minimum.`]}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Grid walking`,`Coordinate compression`],title:`Advent of Code 2019 - Day 3: Crossed Wires`,description:`Advent of Code 2019 - Day 3: Crossed Wires, a problem that involves Grid walking and Coordinate compression. Solution written in C++, with detailed walkthrough and proof.`,year:2019,day:3};export{o as default};