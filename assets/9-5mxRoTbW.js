import{u as r,j as n}from"./index-DEJgW3cN.js";import{F as a,a as i}from"./_components-C_Mh6GSJ.js";const o={description:"Advent of Code 2021 - Day 9: Smoke Basin. Written in TypeScript.",tags:["BFS/DFS"],year:2021,day:9,title:"AoC 2021 D9: Smoke Basin"};function s(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"AoC 2021 D9: Smoke Basin"}),`
`,`
`,n.jsx(a,{frontMatter:o}),`
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
`,n.jsx(i,{frontMatter:o})]})}function l(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{l as default,o as frontMatter};
