import{u as a,j as n}from"./index-BVdbyz0p.js";import{F as r,a as i}from"./_components-ozm2G8yB.js";const o={tags:["BFS/DFS"],description:"Advent of Code 2021 - Day 9: Smoke Basin, a problem that involves BFS/DFS. Solution written in TypeScript, with detailed walkthrough and proof.",year:2021,day:9,title:"Advent of Code 2021 - Day 9: Smoke Basin"};function s(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.h1,{children:["Advent of Code 2021 - Day 9",n.jsx(e.span,{className:"subtitle",children:"Smoke Basin"})]}),`
`,`
`,n.jsx(r,{frontMatter:o}),`
`,n.jsx(e.h2,{children:"Part 1"}),`
`,n.jsx(e.p,{children:"The low points are those that are lower than all of their adjacent points (up, down, left, right). Just iterate through all points and check their neighbors."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`for (let x = 0; x < board.length; x++) {
  for (let y = 0; y < board[0].length; y++) {
    const height = board[x][y];
    if (neighbors(board, x, y).every(([nx, ny]) => board[nx][ny] > height)) {
      total += height + 1;
    }
  }
}
`})}),`
`,n.jsx(e.h2,{children:"Part 2"}),`
`,n.jsx(e.p,{children:"A canonical flood fill problem. I use DFS here. For each low point, I start a DFS that visits all neighbors with height less than 9. The size of the basin is the number of points visited in this DFS."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`let size = 1;
const stack: [number, number][] = [[x, y]];
while (stack.length > 0) {
  const [cx, cy] = stack.pop()!;
  for (const [nx, ny] of neighbors(board, cx, cy))
    if (
      !visited[nx][ny] &&
      board[nx][ny] !== 9 &&
      board[nx][ny] >= board[cx][cy]
    ) {
      visited[nx][ny] = true;
      size++;
      stack.push([nx, ny]);
    }
  }
}
basins.push(size);
`})}),`
`,n.jsx(i,{frontMatter:o})]})}function l(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{l as default,o as frontMatter};
