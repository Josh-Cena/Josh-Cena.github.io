import{u as o,j as e}from"./index-BnEAZLVO.js";import{P as s,a}from"./_components-CRYqM7VG.js";import"./_commonjsHelpers-Cpj98o6Y.js";const r={tags:["Dijkstra"],title:"Advent of Code 2021 - Day 15: Chiton",description:"Advent of Code 2021 - Day 15: Chiton, a problem that involves Dijkstra. Solution written in TypeScript, with detailed walkthrough and proof.",year:2021,day:15};function i(t){const n={code:"code",h1:"h1",p:"p",pre:"pre",span:"span",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2021 - Day 15",e.jsx(n.span,{className:"subtitle",children:"Chiton"})]}),`
`,`
`,e.jsx(s,{frontMatter:r}),`
`,e.jsx(n.p,{children:"This is a classic shortest path problem, where the edge weights are the risk levels of the destination cells. I just run Dijkstra's. I never remember how to write one, and Wikipedia's first version is the non-ideal one, so here's a better template:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function dijkstra(grid: number[][]): number {
  const width = grid[0].length;
  const height = grid.length;
  const dist = Array.from({ length: height }, () =>
    Array.from({ length: width }, () => Infinity),
  );
  dist[0][0] = 0;
  const pq = new MinPriorityQueue<[number, number]>();
  pq.enqueue([0, 0], 0);
  while (!pq.isEmpty()) {
    const { priority, element } = pq.dequeue() as PriorityQueueItem<
      [number, number]
    >;
    for (const [nx, ny] of neighbors(element[0], element[1], width, height)) {
      const newCost = priority + grid[ny][nx];
      if (newCost < dist[ny][nx]) {
        dist[ny][nx] = newCost;
        pq.enqueue([nx, ny], newCost);
      }
    }
  }
  return dist[height - 1][width - 1];
}
`})}),`
`,e.jsx(a,{frontMatter:r})]})}function c(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{c as default,r as frontMatter};
