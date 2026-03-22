import{t as e}from"./jsx-runtime-D57Vegw5.js";import{n as t}from"./lib-rxHYdfSX.js";import{n,t as r}from"./_components-BHKTFOi1.js";var i=e(),a={tags:[`BFS/DFS`],title:`Advent of Code 2021 - Day 9: Smoke Basin`,description:`Advent of Code 2021 - Day 9: Smoke Basin, a problem that involves BFS/DFS. Solution written in TypeScript, with detailed walkthrough and proof.`,year:2021,day:9};function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2021 - Day 9`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Smoke Basin`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsx)(o.p,{children:`The low points are those that are lower than all of their adjacent points (up, down, left, right). Just iterate through all points and check their neighbors.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`for (let x = 0; x < board.length; x++) {
  for (let y = 0; y < board[0].length; y++) {
    const height = board[x][y];
    if (neighbors(board, x, y).every(([nx, ny]) => board[nx][ny] > height)) {
      total += height + 1;
    }
  }
}
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsx)(o.p,{children:`A canonical flood fill problem. I use DFS here. For each low point, I start a DFS that visits all neighbors with height less than 9. The size of the basin is the number of points visited in this DFS.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`let size = 1;
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
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};