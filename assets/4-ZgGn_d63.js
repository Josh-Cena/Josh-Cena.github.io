import{u as a,j as n}from"./index-BEXjlMni.js";import{P as s,a as i}from"./_components-Rjxg5wzU.js";import"./_commonjsHelpers-Cpj98o6Y.js";const r={tags:["Data structures"],title:"Advent of Code 2021 - Day 4: Giant Squid",description:"Advent of Code 2021 - Day 4: Giant Squid, a problem that involves Data structures. Solution written in TypeScript, with detailed walkthrough and proof.",year:2021,day:4};function o(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.h1,{children:["Advent of Code 2021 - Day 4",n.jsx(e.span,{className:"subtitle",children:"Giant Squid"})]}),`
`,`
`,n.jsx(s,{frontMatter:r}),`
`,n.jsx(e.h2,{children:"Part 1"}),`
`,n.jsxs(e.p,{children:["The main problems to solve are: (1) where is the number on the board? (2) how to check for a win? (3) how to count the total score? A nice observation is that we don't need a physical 2D array for any of these tasks. For task 1, we can use a ",n.jsx(e.code,{children:"Map<number, [row: number, col: number]>"})," to look up the position of a number; a 2D array would take 25 lookups. For task 2, we can track the number of marked numbers in each row and column. For each marked number, we increment the corresponding row and column counters; if any of them reaches 5, we have a win. For task 3, we can maintain a running total of unmarked numbers, which starts as the sum of the board; when we mark a number, we subtract it from the total."]}),`
`,n.jsx(e.p,{children:"This is the part for parsing the input and setting up the data structures:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const seq = data[0].split(",").map((n) => parseInt(n, 10));
const boards = data
  .slice(2)
  .join("\\n")
  .split("\\n\\n")
  .map((s) => {
    const board = s.split("\\n").map((line) =>
      line
        .trim()
        .split(/\\s+/)
        .map((n) => parseInt(n, 10)),
    );
    const mapping = new Map<number, [number, number]>();
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        mapping.set(board[r][c], [r, c]);
      }
    }
    return {
      mapping,
      rowCount: Array(board.length).fill(0),
      colCount: Array(board[0].length).fill(0),
      boardSum: board.flat().reduce((a, b) => a + b, 0),
    };
  });
`})}),`
`,n.jsx(e.p,{children:"This is the part for playing the game:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const scores: number[] = [];
const won = new Set<number>();
for (const n of seq) {
  for (const [i, data] of boards.entries()) {
    const { mapping, rowCount, colCount } = data;
    if (!mapping.has(n) || won.has(i)) continue;
    const [r, c] = mapping.get(n)!;
    rowCount[r]++;
    colCount[c]++;
    data.boardSum -= n;
    const isWon = rowCount[r] === 5 || colCount[c] === 5;
    if (isWon) {
      scores.push(data.boardSum * n);
      won.add(i);
    }
  }
}
`})}),`
`,n.jsxs(e.p,{children:["The answer to part 1 is ",n.jsx(e.code,{children:"scores[0]"}),", score for the first winning board."]}),`
`,n.jsx(e.h2,{children:"Part 2"}),`
`,n.jsxs(e.p,{children:["The answer to part 2 is ",n.jsx(e.code,{children:"scores[scores.length - 1]"}),", score for the last winning board."]}),`
`,n.jsx(i,{frontMatter:r})]})}function l(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{l as default,r as frontMatter};
