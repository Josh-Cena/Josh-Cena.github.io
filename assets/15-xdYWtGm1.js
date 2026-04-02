import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import{n,t as r}from"./_components-BiUCgGl-.js";var i=e(),a={tags:[`Dijkstra`],title:`Advent of Code 2021 - Day 15: Chiton`,description:`Advent of Code 2021 - Day 15: Chiton, a problem that involves Dijkstra. Solution written in TypeScript, with detailed walkthrough and proof.`,year:2021,day:15};function o(e){let o={code:`code`,h1:`h1`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2021 - Day 15`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Chiton`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.p,{children:`This is a classic shortest path problem, where the edge weights are the risk levels of the destination cells. I just run Dijkstra's. I never remember how to write one, and Wikipedia's first version is the non-ideal one, so here's a better template:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`function dijkstra(grid: number[][]): number {
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
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};