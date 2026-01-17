import{u as r,j as t}from"./index-BVdbyz0p.js";import{F as s,a as i}from"./_components-ozm2G8yB.js";const o={tags:["Cellular automata"],description:"Advent of Code 2021 - Day 25: Sea Cucumber, a problem that involves Cellular automata. Solution written in TypeScript, with detailed walkthrough and proof.",year:2021,day:25,title:"Advent of Code 2021 - Day 25: Sea Cucumber"};function a(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",span:"span",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsxs(n.h1,{children:["Advent of Code 2021 - Day 25",t.jsx(n.span,{className:"subtitle",children:"Sea Cucumber"})]}),`
`,`
`,t.jsx(s,{frontMatter:o}),`
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
`,t.jsx(i,{frontMatter:o})]})}function m(e={}){const{wrapper:n}={...r(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(a,{...e})}):a(e)}export{m as default,o as frontMatter};
