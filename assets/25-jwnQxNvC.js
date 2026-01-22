import{u as r,j as t}from"./index-Bb_SBPIJ.js";import{P as s,a as i}from"./_components-DLB4m9JY.js";const o={tags:["Cellular automata"],description:"Advent of Code 2021 - Day 25: Sea Cucumber, a problem that involves Cellular automata. Solution written in TypeScript, with detailed walkthrough and proof.",year:2021,day:25,title:"Advent of Code 2021 - Day 25: Sea Cucumber"};function a(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",span:"span",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.h1,{children:["Advent of Code 2021 - Day 25",t.jsx(e.span,{className:"subtitle",children:"Sea Cucumber"})]}),`
`,`
`,t.jsx(s,{frontMatter:o}),`
`,t.jsx(e.p,{children:"I thought this requires something clever, but simulating it straightforwardly is fast enough. For example, this is the code for moving the east-facing cucumbers:"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`function moveEast(mat: string[][]) {
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
`,t.jsxs(e.p,{children:["Checking for stabilization is done with a tiny trick: ",t.jsx(e.code,{children:"JSON.stringify(mat) === JSON.stringify(newMat2)"}),"."]}),`
`,t.jsx(i,{frontMatter:o})]})}function m(n={}){const{wrapper:e}={...r(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a(n)}export{m as default,o as frontMatter};
