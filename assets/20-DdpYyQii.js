import{u as i,j as e}from"./index-K2wRAUCr.js";import{F as l,a as s}from"./_components-D8vnU3Mx.js";const a={description:"Advent of Code 2021 - Day 20: Trench Map. Written in TypeScript.",tags:["Cellular automata"],year:2021,day:20,title:"AoC 2021 D20: Trench Map"};function o(t){const n={code:"code",h1:"h1",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"AoC 2021 D20: Trench Map"}),`
`,`
`,e.jsx(l,{frontMatter:a}),`
`,e.jsxs(n.p,{children:["Perhaps the single most important observation is that ",e.jsx(n.code,{children:"algorithm[0]"})," is ",e.jsx(n.code,{children:"#"})," and ",e.jsx(n.code,{children:"algorithm[511]"})," is ",e.jsx(n.code,{children:"."})," in the real input, which means that the infinite empty space outside the image alternates between ",e.jsx(n.code,{children:"."})," and ",e.jsx(n.code,{children:"#"})," each step. Other than that, this is still a cellular automaton problem, since each pixel's next state depends only on its current 3x3 neighborhood."]}),`
`,e.jsxs(n.p,{children:['This time, I decided to represent the image as an actual 2D array, because I need to quickly tell which cells are "out of bounds" and therefore alternates between ',e.jsx(n.code,{children:"."})," and ",e.jsx(n.code,{children:"#"}),". Other than that, the implementation is the same as previous ones. For each pixel in the new image, find its 3x3 neighborhood in the old image, compute the corresponding index, and look up the new value from the algorithm string. If the neighbor is out of bounds, use the default pixel value for that step."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function enhanceImage(
  image: boolean[][],
  algo: string,
  defaultPixel: boolean,
): boolean[][] {
  const newImage: boolean[][] = [];
  const height = image.length;
  const width = image[0].length;

  for (let y = -1; y <= height; y++) {
    const newRow: boolean[] = [];
    for (let x = -1; x <= width; x++) {
      let index = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          index <<= 1;
          const ny = y + dy;
          const nx = x + dx;
          index |= Number(image[ny]?.[nx] ?? defaultPixel);
        }
      }
      newRow.push(algo[index] === "#");
    }
    newImage.push(newRow);
  }

  return newImage;
}
`})}),`
`,e.jsxs(n.p,{children:["The main loop just loops ",e.jsx(n.code,{children:"n"})," times, each time alternating the default pixel."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`let enhancedImage = image;
let defaultPixel = false;
for (let i = 0; i < n; i++) {
  enhancedImage = enhanceImage(enhancedImage, algo, defaultPixel);
  if (algo[0] === "#" && algo.at(-1) === ".") {
    defaultPixel = !defaultPixel;
  } else if (algo[0] === "#") {
    defaultPixel = true;
  }
}
`})}),`
`,e.jsx(s,{frontMatter:a})]})}function d(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{d as default,a as frontMatter};
