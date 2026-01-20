import{u as o,j as n}from"./index-BGRydkNA.js";import{F as s,a as i}from"./_components-CaosYk2-.js";const r={tags:["Grid walking"],description:"Advent of Code 2021 - Day 5: Hydrothermal Venture, a problem that involves Grid walking. Solution written in TypeScript, with detailed walkthrough and proof.",year:2021,day:5,title:"Advent of Code 2021 - Day 5: Hydrothermal Venture"};function a(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.h1,{children:["Advent of Code 2021 - Day 5",n.jsx(e.span,{className:"subtitle",children:"Hydrothermal Venture"})]}),`
`,`
`,n.jsx(s,{frontMatter:r}),`
`,n.jsx(e.h2,{children:"Part 1"}),`
`,n.jsxs(e.p,{children:["It happens that the coordinates are less than ",n.jsx(e.code,{children:"1000"}),", so this is doable with a fixed-size 2D array of size 1000x1000 without any kind of coordinate compression (coordinate compression won't work for part 2 with diagonal lines anyway). Each cell in the grid represents how many lines pass through that point."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`if (x1 === x2) {
  for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
    grid[y][x1]++;
  }
} else if (y1 === y2) {
  for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
    grid[y1][x]++;
  }
}
`})}),`
`,n.jsx(e.h2,{children:"Part 2"}),`
`,n.jsx(e.p,{children:"We just need to add another case for diagonal lines. This can be done by calculating the step for x and y separately, then iterating from the start point to the end point using those steps."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const dirX = x2 > x1 ? 1 : -1;
const dirY = y2 > y1 ? 1 : -1;
for (let x = x1, y = y1; x !== x2 + dirX; x += dirX, y += dirY) {
  grid[y][x]++;
}
`})}),`
`,n.jsx(i,{frontMatter:r})]})}function l(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{l as default,r as frontMatter};
