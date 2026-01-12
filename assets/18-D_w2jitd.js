import{u as i,j as e}from"./index-DEJgW3cN.js";import{F as l,a as s}from"./_components-C_Mh6GSJ.js";const t={description:"Advent of Code 2021 - Day 18: Snailfish. Written in TypeScript.",tags:["Data structures"],year:2021,day:18,title:"AoC 2021 D18: Snailfish"};function a(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"AoC 2021 D18: Snailfish"}),`
`,`
`,e.jsx(l,{frontMatter:t}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:["The first barrier was how to parse the input. Lucky for me, this is valid JSON, so I could just use ",e.jsx(n.code,{children:"JSON.parse"}),". I wonder what happens if I use C++."]}),`
`,e.jsx(n.p,{children:"The next challenge was how to represent snailfish numbers. I went with the most straightforward approach: a binary tree where each node is either a pair (with left and right children) or a regular number (a leaf node). Since we later need upward traversal during explosion, I also stored a parent pointer."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type SnailNumPair = {
  type: "pair";
  left: SnailNum;
  right: SnailNum;
  parent: SnailNumPair | null;
};
type SnailNumNum = { type: "num"; value: number; parent: SnailNumPair | null };
type SnailNum = SnailNumPair | SnailNumNum;
`})}),`
`,e.jsx(n.p,{children:'Building the tree from the parsed JSON is just a matter of "inflating" each level of arrays into objects.'}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function buildSnailNum(obj: InputNum): SnailNum {
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
`,e.jsxs(n.p,{children:["My code for ",e.jsx(n.code,{children:"explode"})," is just a huge spaghetti. The signature is ",e.jsx(n.code,{children:"function explode(a: SnailNum, depth: number): boolean"}),", which returns whether an explosion happened."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["If ",e.jsx(n.code,{children:"a"})," is a number, it can't explode, so return false."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["If ",e.jsx(n.code,{children:"depth"})," is less than 4, or it's not a pair of numbers, we can't explode here, so recursively call ",e.jsx(n.code,{children:"explode"})," on the left and right children. ",e.jsx(n.code,{children:"explode(a.left, depth + 1) || explode(a.right, depth + 1)"})," ensures we only explode one pair."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Otherwise, we've found a pair to explode. We need to find the nearest regular number to the left and right. To do this, we first move up until we find a parent where we are the right child (for left) or left child (for right). Then we move down the opposite subtree along the opposite children (left for left, right for right) until we reach a number. Finally, we add the exploding pair's values to these numbers (if they exist) and replace the exploding pair with a 0. For example, here's the left part:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`let left: SnailNum | null = null;
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
`,e.jsxs(n.p,{children:["As for ",e.jsx(n.code,{children:"split"}),", the idea is similar."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If ",e.jsx(n.code,{children:"a"})," is not a number, recursively call ",e.jsx(n.code,{children:"split"})," on the left and right children."]}),`
`,e.jsxs(n.li,{children:["If ",e.jsx(n.code,{children:"a"})," is a number and less than 10, return false."]}),`
`,e.jsxs(n.li,{children:["Otherwise, split ",e.jsx(n.code,{children:"a"})," into a pair of two numbers and return true."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Once we have ",e.jsx(n.code,{children:"explode"})," and ",e.jsx(n.code,{children:"split"}),", ",e.jsx(n.code,{children:"add"})," is straightforward."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function add(a: SnailNum, b: SnailNum): SnailNum {
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
`,e.jsx(n.p,{children:"In part 1, we just need to add them up:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const res = nums.slice(1).reduce((acc, curr) => {
  const currNum = buildSnailNum(curr);
  return add(acc, currNum);
}, buildSnailNum(nums[0]));
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsx(n.p,{children:"In part 2, we just pairwise add all snailfish numbers and compute the maximum magnitude."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`let maxMag = 0;
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
`})}),`
`,e.jsx(s,{frontMatter:t})]})}function u(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{u as default,t as frontMatter};
