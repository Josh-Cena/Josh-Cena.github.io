import{u as s,j as n}from"./index-Dbnp75iT.js";import{F as o,a}from"./_components-CrZycPda.js";const r={tags:["Dijkstra"],description:"Advent of Code 2021 - Day 15: Chiton, a problem that involves Dijkstra. Solution written in TypeScript, with detailed walkthrough and proof.",year:2021,day:15,title:"Advent of Code 2021 - Day 15: Chiton"};function i(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",span:"span",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.h1,{children:["Advent of Code 2021 - Day 15",n.jsx(e.span,{className:"subtitle",children:"Chiton"})]}),`
`,`
`,n.jsx(o,{frontMatter:r}),`
`,n.jsx(e.p,{children:"This is a classic shortest path problem, where the edge weights are the risk levels of the destination cells. I just run Dijkstra's. I never remember how to write one, and Wikipedia's first version is the non-ideal one, so here's a better template:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function dijkstra(grid: number[][]): number {
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
`,n.jsx(a,{frontMatter:r})]})}function c(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{c as default,r as frontMatter};
