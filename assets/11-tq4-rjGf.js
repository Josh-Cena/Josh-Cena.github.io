import{u as o,j as e}from"./index-BkHp0GFc.js";import{F as i,a}from"./_components-Bb0yU4yQ.js";const t={description:"Advent of Code 2021 - Day 11: Dumbo Octopus. Written in TypeScript.",tags:["BFS/DFS"],year:2021,day:11,title:"AoC 2021 D11: Dumbo Octopus"};function r(s){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"AoC 2021 D11: Dumbo Octopus"}),`
`,`
`,e.jsx(i,{frontMatter:t}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:"We just need to take care to not double-count flashes in a single step. For each new flash, it should affect its neighbors, which may cause more flashes. This is still a flood fill kind of problem, so I still use DFS. I have a stack of flashers to process. Each time a new octopus flashes, we add it to the stack. When processing a flasher, we increase the energy level of its neighbors, and new flashers are added to the stack. Continue until there are no more flashers to process."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function step(grid: number[][]): number[][] {
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
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["Given the ",e.jsx(n.code,{children:"step"})," function from part 1, we can just keep stepping until all octopuses flash simultaneously, which is when all energy levels are ",e.jsx(n.code,{children:"0"}),"."]}),`
`,e.jsx(a,{frontMatter:t})]})}function c(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{c as default,t as frontMatter};
