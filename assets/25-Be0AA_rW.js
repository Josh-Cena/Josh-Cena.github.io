import{u as a,j as t}from"./index-BkHp0GFc.js";import{F as i,a as s}from"./_components-Bb0yU4yQ.js";const o={description:"Advent of Code 2021 - Day 25: Sea Cucumber. Written in TypeScript.",tags:["Cellular automata"],year:2021,day:25,title:"AoC 2021 D25: Sea Cucumber"};function r(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...a(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n.h1,{children:"AoC 2021 D25: Sea Cucumber"}),`
`,`
`,t.jsx(i,{frontMatter:o}),`
`,t.jsx(n.p,{children:"I thought this requires something clever, but simulating it straightforwardly is fast enough. For example, this is the code for moving the east-facing cucumbers:"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-ts",children:`function moveEast(mat: string[][]) {
  const newMat = mat.map((line) => line.slice());
  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[0].length; col++) {
      if (
        mat[row][col] === ">" &&
        mat[row][(col + 1) % mat[0].length] === "."
      ) {
        newMat[row][(col + 1) % mat[0].length] = ">";
        newMat[row][col] = ".";
      }
    }
  }
  return newMat;
}
`})}),`
`,t.jsxs(n.p,{children:["Checking for stabilization is done with a tiny trick: ",t.jsx(n.code,{children:"JSON.stringify(mat) === JSON.stringify(newMat2)"}),"."]}),`
`,t.jsx(s,{frontMatter:o})]})}function m(e={}){const{wrapper:n}={...a(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(r,{...e})}):r(e)}export{m as default,o as frontMatter};
