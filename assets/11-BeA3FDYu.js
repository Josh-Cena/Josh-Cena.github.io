import{u as a,j as e}from"./index-CYq-bCfF.js";import{P as i,a as r}from"./_components-DytvGw39.js";import"./_commonjsHelpers-Cpj98o6Y.js";const o={tags:["Puzzle"],title:"Advent of Code 2023 - Day 11: Cosmic Expansion",description:"Advent of Code 2023 - Day 11: Cosmic Expansion, a problem that involves Puzzle. Solution written in R, with detailed walkthrough and proof.",year:2023,day:11};function t(s){const n={code:"code",h1:"h1",p:"p",pre:"pre",span:"span",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2023 - Day 11",e.jsx(n.span,{className:"subtitle",children:"Cosmic Expansion"})]}),`
`,`
`,e.jsx(i,{frontMatter:o}),`
`,e.jsxs(n.p,{children:["There's obviously no need to physically expand the matrix (which is proven infeasible for part 2 anyway). If we consider any pair of galaxies, their base horizontal distance is the difference in their column indices; this number then needs to be bumped up by ",e.jsx(n.code,{children:"expansion - 1"})," for each empty column between them."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`distance <- abs(g1y - g2y) +
  abs(g1x - g2x) +
  (crossed_empty_rows + crossed_empty_cols) * (expansion - 1)
`})}),`
`,e.jsxs(n.p,{children:["The next question is how to compute ",e.jsx(n.code,{children:"crossed_empty_rows"})," and ",e.jsx(n.code,{children:"crossed_empty_cols"}),". First we can get the indices of these empty rows and columns:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`empty_rows <- which(apply(mat, 1, function(x) all(x == ".")))
`})}),`
`,e.jsxs(n.p,{children:["Then, ",e.jsx(n.code,{children:"crossed_empty_rows"})," is the number of empty row indices that are between the two galaxies' row indices. This can be computed with ",e.jsx(n.code,{children:"sum(empty_rows > min(g1x, g2x) & empty_rows < max(g1x, g2x))"}),". The same applies to columns. Because there are only about 10 empty rows/columns, this is efficient enough. If we have more, we can consider a prefix sum array that records how many empty rows/columns are up to each index, and then compute the number of empty rows/columns between two indices with a subtraction."]}),`
`,e.jsx(n.p,{children:"As for enumerating pairs of galaxies, I just used a double for loop:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`galaxies <- which(mat == "#", arr.ind = TRUE)
for (i in 1:(nrow(galaxies) - 1)) {
  for (j in (i + 1):nrow(galaxies)) {
    g1y <- galaxies[i, 1]
    g1x <- galaxies[i, 2]
    g2y <- galaxies[j, 1]
    g2x <- galaxies[j, 2]
    # ...
  }
}
`})}),`
`,e.jsx(r,{frontMatter:o})]})}function h(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{h as default,o as frontMatter};
