import{t as e}from"./jsx-runtime-DAs1UGHr.js";import{n as t}from"./lib-T-nEWGuF.js";import{n,t as r}from"./_components-DgNpooeQ.js";var i=e(),a={tags:[`Data structures`],title:`Advent of Code 2021 - Day 18: Snailfish`,description:`Advent of Code 2021 - Day 18: Snailfish, a problem that involves Data structures. Solution written in TypeScript, with detailed walkthrough and proof.`,year:2021,day:18};function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2021 - Day 18`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Snailfish`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(o.p,{children:[`The first barrier was how to parse the input. Lucky for me, this is valid JSON, so I could just use `,(0,i.jsx)(o.code,{children:`JSON.parse`}),`. I wonder what happens if I use C++.`]}),`
`,(0,i.jsx)(o.p,{children:`The next challenge was how to represent snailfish numbers. I went with the most straightforward approach: a binary tree where each node is either a pair (with left and right children) or a regular number (a leaf node). Since we later need upward traversal during explosion, I also stored a parent pointer.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`type SnailNumPair = {
  type: "pair";
  left: SnailNum;
  right: SnailNum;
  parent: SnailNumPair | null;
};
type SnailNumNum = { type: "num"; value: number; parent: SnailNumPair | null };
type SnailNum = SnailNumPair | SnailNumNum;
`})}),`
`,(0,i.jsx)(o.p,{children:`Building the tree from the parsed JSON is just a matter of "inflating" each level of arrays into objects.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`function buildSnailNum(obj: InputNum): SnailNum {
  if (typeof obj === "number") {
    return { type: "num", value: obj, parent: null };
  }
  const pair: SnailNumPair = {
    type: "pair",
    left: buildSnailNum(obj[0]),
    right: buildSnailNum(obj[1]),
    parent: null,
  };
  pair.left.parent = pair;
  pair.right.parent = pair;
  return pair;
}
`})}),`
`,(0,i.jsxs)(o.p,{children:[`My code for `,(0,i.jsx)(o.code,{children:`explode`}),` is just a huge spaghetti. The signature is `,(0,i.jsx)(o.code,{children:`function explode(a: SnailNum, depth: number): boolean`}),`, which returns whether an explosion happened.`]}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsxs)(o.li,{children:[`
`,(0,i.jsxs)(o.p,{children:[`If `,(0,i.jsx)(o.code,{children:`a`}),` is a number, it can't explode, so return false.`]}),`
`]}),`
`,(0,i.jsxs)(o.li,{children:[`
`,(0,i.jsxs)(o.p,{children:[`If `,(0,i.jsx)(o.code,{children:`depth`}),` is less than 4, or it's not a pair of numbers, we can't explode here, so recursively call `,(0,i.jsx)(o.code,{children:`explode`}),` on the left and right children. `,(0,i.jsx)(o.code,{children:`explode(a.left, depth + 1) || explode(a.right, depth + 1)`}),` ensures we only explode one pair.`]}),`
`]}),`
`,(0,i.jsxs)(o.li,{children:[`
`,(0,i.jsx)(o.p,{children:`Otherwise, we've found a pair to explode. We need to find the nearest regular number to the left and right. To do this, we first move up until we find a parent where we are the right child (for left) or left child (for right). Then we move down the opposite subtree along the opposite children (left for left, right for right) until we reach a number. Finally, we add the exploding pair's values to these numbers (if they exist) and replace the exploding pair with a 0. For example, here's the left part:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`let left: SnailNum | null = null;
let cur: SnailNum | null = a;
while (cur.parent) {
  if (cur.parent.left !== cur) {
    left = cur.parent.left;
    break;
  }
  cur = cur.parent;
}
if (left !== null) {
  while (left.type === "pair") {
    left = left.right;
  }
  left.value += a.left.value;
}
`})}),`
`]}),`
`]}),`
`,(0,i.jsxs)(o.p,{children:[`As for `,(0,i.jsx)(o.code,{children:`split`}),`, the idea is similar.`]}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsxs)(o.li,{children:[`If `,(0,i.jsx)(o.code,{children:`a`}),` is not a number, recursively call `,(0,i.jsx)(o.code,{children:`split`}),` on the left and right children.`]}),`
`,(0,i.jsxs)(o.li,{children:[`If `,(0,i.jsx)(o.code,{children:`a`}),` is a number and less than 10, return false.`]}),`
`,(0,i.jsxs)(o.li,{children:[`Otherwise, split `,(0,i.jsx)(o.code,{children:`a`}),` into a pair of two numbers and return true.`]}),`
`]}),`
`,(0,i.jsxs)(o.p,{children:[`Once we have `,(0,i.jsx)(o.code,{children:`explode`}),` and `,(0,i.jsx)(o.code,{children:`split`}),`, `,(0,i.jsx)(o.code,{children:`add`}),` is straightforward.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`function add(a: SnailNum, b: SnailNum): SnailNum {
  const p: SnailNumPair = { type: "pair", left: a, right: b, parent: null };
  a.parent = p;
  b.parent = p;
  while (true) {
    if (explode(p, 0)) continue;
    if (split(p)) continue;
    break;
  }
  return p;
}
`})}),`
`,(0,i.jsx)(o.p,{children:`In part 1, we just need to add them up:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`const res = nums.slice(1).reduce((acc, curr) => {
  const currNum = buildSnailNum(curr);
  return add(acc, currNum);
}, buildSnailNum(nums[0]));
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsx)(o.p,{children:`In part 2, we just pairwise add all snailfish numbers and compute the maximum magnitude.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`let maxMag = 0;
for (const a of nums) {
  for (const b of nums) {
    if (a === b) continue;
    const sum = add(buildSnailNum(a), buildSnailNum(b));
    const mag = magnitude(sum);
    if (mag > maxMag) {
      maxMag = mag;
    }
  }
}
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};