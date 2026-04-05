import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{n,t as r}from"./_components-DcdEf7Vf.js";var i=e();function a(e){let a={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2021 - Day 11`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Dumbo Octopus`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.h2,{children:`Part 1`}),`
`,(0,i.jsx)(a.p,{children:`We just need to take care to not double-count flashes in a single step. For each new flash, it should affect its neighbors, which may cause more flashes. This is still a flood fill kind of problem, so I still use DFS. I have a stack of flashers to process. Each time a new octopus flashes, we add it to the stack. When processing a flasher, we increase the energy level of its neighbors, and new flashers are added to the stack. Continue until there are no more flashers to process.`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ts`,children:`function step(grid: number[][]): number[][] {
  const newGrid: number[][] = grid.map((row) => row.slice());
  const flashers: [number, number][] = [];
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      newGrid[x][y] = (newGrid[x][y] + 1) % 10;
      if (newGrid[x][y] === 0) {
        flashers.push([x, y]);
      }
    }
  }
  while (flashers.length > 0) {
    const [fx, fy] = flashers.pop()!;
    for (const [nx, ny] of neighbors(fx, fy, grid.length, grid[0].length)) {
      if (newGrid[nx][ny] !== 0) {
        newGrid[nx][ny] = (newGrid[nx][ny] + 1) % 10;
        if (newGrid[nx][ny] === 0) {
          flashers.push([nx, ny]);
        }
      }
    }
  }
  return newGrid;
}
`})}),`
`,(0,i.jsx)(a.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(a.p,{children:[`Given the `,(0,i.jsx)(a.code,{children:`step`}),` function from part 1, we can just keep stepping until all octopuses flash simultaneously, which is when all energy levels are `,(0,i.jsx)(a.code,{children:`0`}),`.`]}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`BFS/DFS`],title:`Advent of Code 2021 - Day 11: Dumbo Octopus`,description:`Advent of Code 2021 - Day 11: Dumbo Octopus, a problem that involves BFS/DFS. Solution written in TypeScript, with detailed walkthrough and proof.`,year:2021,day:11};export{o as default};