import{u as i,j as e}from"./index-Dbnp75iT.js";import{F as o,a as l}from"./_components-CrZycPda.js";const s={tags:["Data structures"],description:"Advent of Code 2023 - Day 2: Cube Conundrum, a problem that involves Data structures. Solution written in R, with detailed walkthrough and proof.",year:2023,day:2,title:"Advent of Code 2023 - Day 2: Cube Conundrum"};function r(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2023 - Day 2",e.jsx(n.span,{className:"subtitle",children:"Cube Conundrum"})]}),`
`,`
`,e.jsx(o,{frontMatter:s}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:"I parse each line as a list of lists, each list representing the count of R, G, and B cubes."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`parse_line <- function(line) {
  line <- strsplit(line, ": ")[[1]][2]
  line <- strsplit(line, "; ")[[1]]
  line <- sapply(line, function(x) {
    x <- strsplit(x, ", ")[[1]]
    counts <- list("red" = 0, "blue" = 0, "green" = 0)
    for (item in x) {
      parts <- strsplit(item, " ")[[1]]
      count <- as.numeric(parts[1])
      color <- parts[2]
      counts[[color]] <- counts[[color]] + count
    }
    counts
  })
  line
}
`})}),`
`,e.jsxs(n.p,{children:["Figuring out how to index a structure like this is very, very difficult for me. It seems that ",e.jsx(n.code,{children:"lines[[1]][, 1]"})," would return the R/G/B counts for the first round of the first game, etc., while ",e.jsx(n.code,{children:'lines[[1]]["red", ]'})," would return the counts of red cubes for all rounds of the first game. Now I just need to check, for each line, if the count of each color and each round is in the expected range. The ",e.jsx(n.code,{children:"which"})," function is very useful for this—especially since in R indices start from 1."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`solve1 <- function(data) {
  lines <- sapply(data, parse_line)
  valid <- sapply(lines, function(line) {
    all(line["red", ] <= 12 & line["green", ] <= 13 & line["blue", ] <= 14)
  })
  cat(sum(which(valid)), "\\n")
}
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["For a game to be playable, the number of cubes must at least be the largest number drawn in a single round, which can be found by using ",e.jsx(n.code,{children:"max"})," on ",e.jsx(n.code,{children:'line["red", ]'}),", ",e.jsx(n.code,{children:'line["green", ]'}),", and ",e.jsx(n.code,{children:'line["blue", ]'}),". However because ",e.jsx(n.code,{children:'line["red", ]'})," etc. are lists, I first need ",e.jsx(n.code,{children:"unlist"})," to turn them into vectors."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`solve2 <- function(data) {
  lines <- sapply(data, parse_line)
  powers <- sapply(lines, function(line) {
    max(unlist(line["red", ])) *
      max(unlist(line["green", ])) *
      max(unlist(line["blue", ]))
  })
  cat(sum(powers), "\\n")
}
`})}),`
`,e.jsx(l,{frontMatter:s})]})}function d(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{d as default,s as frontMatter};
