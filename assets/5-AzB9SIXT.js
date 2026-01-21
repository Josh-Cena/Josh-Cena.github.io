import{u as o,j as e}from"./index-B20ZWnCO.js";import{P as s,a as i}from"./_components-DvaCmDFe.js";const r={tags:["Grid walking"],description:"Advent of Code 2021 - Day 5: Hydrothermal Venture, a problem that involves Grid walking. Solution written in TypeScript, with detailed walkthrough and proof.",year:2021,day:5,title:"Advent of Code 2021 - Day 5: Hydrothermal Venture"};function a(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2021 - Day 5",e.jsx(n.span,{className:"subtitle",children:"Hydrothermal Venture"})]}),`
`,`
`,e.jsx(s,{frontMatter:r}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:["It happens that the coordinates are less than ",e.jsx(n.code,{children:"1000"}),", so this is doable with a fixed-size 2D array of size 1000x1000 without any kind of coordinate compression (coordinate compression won't work for part 2 with diagonal lines anyway). Each cell in the grid represents how many lines pass through that point."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`if (x1 === x2) {
  for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
    grid[y][x1]++;
  }
} else if (y1 === y2) {
  for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
    grid[y1][x]++;
  }
}
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsx(n.p,{children:"We just need to add another case for diagonal lines. This can be done by calculating the step for x and y separately, then iterating from the start point to the end point using those steps."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const dirX = x2 > x1 ? 1 : -1;
const dirY = y2 > y1 ? 1 : -1;
for (let x = x1, y = y1; x !== x2 + dirX; x += dirX, y += dirY) {
  grid[y][x]++;
}
`})}),`
`,e.jsx(i,{frontMatter:r})]})}function l(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{l as default,r as frontMatter};
