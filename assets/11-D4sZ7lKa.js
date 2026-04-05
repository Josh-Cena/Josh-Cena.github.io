import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{n,t as r}from"./_components-DcdEf7Vf.js";var i=e();function a(e){let a={code:`code`,h1:`h1`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2023 - Day 11`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Cosmic Expansion`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsxs)(a.p,{children:[`There's obviously no need to physically expand the matrix (which is proven infeasible for part 2 anyway). If we consider any pair of galaxies, their base horizontal distance is the difference in their column indices; this number then needs to be bumped up by `,(0,i.jsx)(a.code,{children:`expansion - 1`}),` for each empty column between them.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-R`,children:`distance <- abs(g1y - g2y) +
  abs(g1x - g2x) +
  (crossed_empty_rows + crossed_empty_cols) * (expansion - 1)
`})}),`
`,(0,i.jsxs)(a.p,{children:[`The next question is how to compute `,(0,i.jsx)(a.code,{children:`crossed_empty_rows`}),` and `,(0,i.jsx)(a.code,{children:`crossed_empty_cols`}),`. First we can get the indices of these empty rows and columns:`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-R`,children:`empty_rows <- which(apply(mat, 1, function(x) all(x == ".")))
`})}),`
`,(0,i.jsxs)(a.p,{children:[`Then, `,(0,i.jsx)(a.code,{children:`crossed_empty_rows`}),` is the number of empty row indices that are between the two galaxies' row indices. This can be computed with `,(0,i.jsx)(a.code,{children:`sum(empty_rows > min(g1x, g2x) & empty_rows < max(g1x, g2x))`}),`. The same applies to columns. Because there are only about 10 empty rows/columns, this is efficient enough. If we have more, we can consider a prefix sum array that records how many empty rows/columns are up to each index, and then compute the number of empty rows/columns between two indices with a subtraction.`]}),`
`,(0,i.jsx)(a.p,{children:`As for enumerating pairs of galaxies, I just used a double for loop:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-R`,children:`galaxies <- which(mat == "#", arr.ind = TRUE)
for (i in 1:(nrow(galaxies) - 1)) {
  for (j in (i + 1):nrow(galaxies)) {
    g1y <- galaxies[i, 1]
    g1x <- galaxies[i, 2]
    g2y <- galaxies[j, 1]
    g2x <- galaxies[j, 2]
    # ...
  }
}
`})}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Puzzle`],title:`Advent of Code 2023 - Day 11: Cosmic Expansion`,description:`Advent of Code 2023 - Day 11: Cosmic Expansion, a problem that involves Puzzle. Solution written in R, with detailed walkthrough and proof.`,year:2023,day:11};export{o as default};