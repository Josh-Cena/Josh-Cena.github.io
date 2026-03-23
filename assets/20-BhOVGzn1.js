import{t as e}from"./jsx-runtime-DAs1UGHr.js";import{n as t}from"./lib-T-nEWGuF.js";import{n,t as r}from"./_components-DgNpooeQ.js";var i=e(),a={tags:[`Cellular automata`],title:`Advent of Code 2021 - Day 20: Trench Map`,description:`Advent of Code 2021 - Day 20: Trench Map, a problem that involves Cellular automata. Solution written in TypeScript, with detailed walkthrough and proof.`,year:2021,day:20};function o(e){let o={code:`code`,h1:`h1`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2021 - Day 20`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Trench Map`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsxs)(o.p,{children:[`Perhaps the single most important observation is that `,(0,i.jsx)(o.code,{children:`algorithm[0]`}),` is `,(0,i.jsx)(o.code,{children:`#`}),` and `,(0,i.jsx)(o.code,{children:`algorithm[511]`}),` is `,(0,i.jsx)(o.code,{children:`.`}),` in the real input, which means that the infinite empty space outside the image alternates between `,(0,i.jsx)(o.code,{children:`.`}),` and `,(0,i.jsx)(o.code,{children:`#`}),` each step. Other than that, this is still a cellular automaton problem, since each pixel's next state depends only on its current 3x3 neighborhood.`]}),`
`,(0,i.jsxs)(o.p,{children:[`This time, I decided to represent the image as an actual 2D array, because I need to quickly tell which cells are "out of bounds" and therefore alternates between `,(0,i.jsx)(o.code,{children:`.`}),` and `,(0,i.jsx)(o.code,{children:`#`}),`. Other than that, the implementation is the same as previous ones. For each pixel in the new image, find its 3x3 neighborhood in the old image, compute the corresponding index, and look up the new value from the algorithm string. If the neighbor is out of bounds, use the default pixel value for that step.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`function enhanceImage(
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
`,(0,i.jsxs)(o.p,{children:[`The main loop just loops `,(0,i.jsx)(o.code,{children:`n`}),` times, each time alternating the default pixel.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ts`,children:`let enhancedImage = image;
let defaultPixel = false;
for (let i = 0; i < n; i++) {
  enhancedImage = enhanceImage(enhancedImage, algo, defaultPixel);
  if (algo[0] === "#" && algo.at(-1) === ".") {
    defaultPixel = !defaultPixel;
  } else if (algo[0] === "#") {
    defaultPixel = true;
  }
}
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};