import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{n,t as r}from"./_components-DcdEf7Vf.js";var i=e();function a(e){let a={code:`code`,h1:`h1`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2021 - Day 25`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Sea Cucumber`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.p,{children:`I thought this requires something clever, but simulating it straightforwardly is fast enough. For example, this is the code for moving the east-facing cucumbers:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ts`,children:`function moveEast(mat: string[][]) {
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
`,(0,i.jsxs)(a.p,{children:[`Checking for stabilization is done with a tiny trick: `,(0,i.jsx)(a.code,{children:`JSON.stringify(mat) === JSON.stringify(newMat2)`}),`.`]}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Cellular automata`],title:`Advent of Code 2021 - Day 25: Sea Cucumber`,description:`Advent of Code 2021 - Day 25: Sea Cucumber, a problem that involves Cellular automata. Solution written in TypeScript, with detailed walkthrough and proof.`,year:2021,day:25};export{o as default};