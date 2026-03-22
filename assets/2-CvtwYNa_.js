import{t as e}from"./jsx-runtime-D57Vegw5.js";import{n as t}from"./lib-rxHYdfSX.js";import{n,t as r}from"./_components-BHKTFOi1.js";var i=e(),a={tags:[`Data structures`],title:`Advent of Code 2023 - Day 2: Cube Conundrum`,description:`Advent of Code 2023 - Day 2: Cube Conundrum, a problem that involves Data structures. Solution written in R, with detailed walkthrough and proof.`,year:2023,day:2};function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2023 - Day 2`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Cube Conundrum`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsx)(o.p,{children:`I parse each line as a list of lists, each list representing the count of R, G, and B cubes.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`parse_line <- function(line) {
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
`,(0,i.jsxs)(o.p,{children:[`Figuring out how to index a structure like this is very, very difficult for me. It seems that `,(0,i.jsx)(o.code,{children:`lines[[1]][, 1]`}),` would return the R/G/B counts for the first round of the first game, etc., while `,(0,i.jsx)(o.code,{children:`lines[[1]]["red", ]`}),` would return the counts of red cubes for all rounds of the first game. Now I just need to check, for each line, if the count of each color and each round is in the expected range. The `,(0,i.jsx)(o.code,{children:`which`}),` function is very useful for this—especially since in R indices start from 1.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`solve1 <- function(data) {
  lines <- sapply(data, parse_line)
  valid <- sapply(lines, function(line) {
    all(line["red", ] <= 12 & line["green", ] <= 13 & line["blue", ] <= 14)
  })
  cat(sum(which(valid)), "\\n")
}
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`For a game to be playable, the number of cubes must at least be the largest number drawn in a single round, which can be found by using `,(0,i.jsx)(o.code,{children:`max`}),` on `,(0,i.jsx)(o.code,{children:`line["red", ]`}),`, `,(0,i.jsx)(o.code,{children:`line["green", ]`}),`, and `,(0,i.jsx)(o.code,{children:`line["blue", ]`}),`. However because `,(0,i.jsx)(o.code,{children:`line["red", ]`}),` etc. are lists, I first need `,(0,i.jsx)(o.code,{children:`unlist`}),` to turn them into vectors.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`solve2 <- function(data) {
  lines <- sapply(data, parse_line)
  powers <- sapply(lines, function(line) {
    max(unlist(line["red", ])) *
      max(unlist(line["green", ])) *
      max(unlist(line["blue", ]))
  })
  cat(sum(powers), "\\n")
}
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};