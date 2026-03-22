import{t as e}from"./jsx-runtime-xty2or4m.js";import{n as t}from"./lib-zKnO7aGa.js";import{n,t as r}from"./_components-vrS0ov66.js";var i=e(),a={tags:[`Grid walking`],title:`Advent of Code 2021 - Day 5: Hydrothermal Venture`,description:`Advent of Code 2021 - Day 5: Hydrothermal Venture, a problem that involves Grid walking. Solution written in TypeScript, with detailed walkthrough and proof.`,year:2021,day:5};function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2021 - Day 5`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Hydrothermal Venture`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(o.p,{children:[`It happens that the coordinates are less than `,(0,i.jsx)(o.code,{children:`1000`}),`, so this is doable with a fixed-size 2D array of size 1000x1000 without any kind of coordinate compression (coordinate compression won't work for part 2 with diagonal lines anyway). Each cell in the grid represents how many lines pass through that point.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`if (x1 === x2) {
  for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
    grid[y][x1]++;
  }
} else if (y1 === y2) {
  for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
    grid[y1][x]++;
  }
}
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsx)(o.p,{children:`We just need to add another case for diagonal lines. This can be done by calculating the step for x and y separately, then iterating from the start point to the end point using those steps.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`const dirX = x2 > x1 ? 1 : -1;
const dirY = y2 > y1 ? 1 : -1;
for (let x = x1, y = y1; x !== x2 + dirX; x += dirX, y += dirY) {
  grid[y][x]++;
}
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};