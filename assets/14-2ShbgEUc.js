import{u as s,j as e}from"./index-tdPHbA8R.js";import{F as o,a}from"./_components-CqTbvCTQ.js";const i={description:"Advent of Code 2021 - Day 14: Extended Polymerization. Written in TypeScript.",tags:["Dynamic programming"],year:2021,day:14,title:"AoC 2021 D14: Extended Polymerization"};function r(t){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"AoC 2021 D14: Extended Polymerization"}),`
`,`
`,e.jsx(o,{frontMatter:i}),`
`,e.jsxs(n.p,{children:["This is the exact same spirit as ",e.jsx(n.a,{href:"/notes/aoc/2021/6",children:"day 6"}),", where we have exponential growth but can group identical entities together."]}),`
`,e.jsx(n.p,{children:"The naïve solution is to simulate each element individually:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`seq = seq.flatMap((elem, i) => {
  if (i === seq.length - 1) return [elem];
  const pair = elem + seq[i + 1];
  const insert = rules.get(pair);
  return insert ? [elem, insert] : [elem];
});
`})}),`
`,e.jsxs(n.p,{children:["However, the sequence grows exponentially, so this doesn't work for part 2. We observe that all pairs of the same type behave identically. No matter what surrounds this pair, each occurrence of ",e.jsx(n.code,{children:"AB"})," always contribute one ",e.jsx(n.code,{children:"AC"})," and one ",e.jsx(n.code,{children:"CB"})," to the next iteration, where ",e.jsx(n.code,{children:"C"})," is the inserted element, and removes itself. Therefore, we can put pairs into bins based on their type."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const newPairCounts: Record<string, number> = { ...pairCounts };
for (const pair in pairCounts) {
  const count = pairCounts[pair];
  if (count > 0 && pair in rules) {
    const insert = rules[pair];
    newPairCounts[pair] -= count;
    newPairCounts[pair[0] + insert] += count;
    newPairCounts[insert + pair[1]] += count;
  }
}
`})}),`
`,`
`,e.jsxs(n.p,{children:["This gives us the counts of each pair after all iterations. To get the counts of each individual element, we note that each element is counted twice in pairs, except for the first and last element of the entire sequence, which never change anyway since the initial input. For example, the sequence ",e.jsx(n.code,{children:"ABCB"})," has pairs ",e.jsx(n.code,{children:"AB"}),", ",e.jsx(n.code,{children:"BC"}),", and ",e.jsx(n.code,{children:"CB"}),", which counts ",e.jsx(n.code,{children:"A"})," once, ",e.jsx(n.code,{children:"B"})," 3 times, and ",e.jsx(n.code,{children:"C"})," twice. Because ",e.jsx(n.code,{children:"A"})," and ",e.jsx(n.code,{children:"B"})," are the first and last elements, we add 1 to their counts. Finally, we divide all counts by 2 to get the actual counts."]}),`
`,e.jsx(a,{frontMatter:i})]})}function l(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{l as default,i as frontMatter};
