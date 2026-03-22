import{t as e}from"./jsx-runtime-xty2or4m.js";import{n as t}from"./lib-zKnO7aGa.js";import{n,t as r}from"./_components-vrS0ov66.js";var i=e(),a={tags:[`Grid walking`,`BFS/DFS`],title:`Advent of Code 2023 - Day 16: The Floor Will Be Lava`,description:`Advent of Code 2023 - Day 16: The Floor Will Be Lava, a problem that involves Grid walking and BFS/DFS. Solution written in R, with detailed walkthrough and proof.`,year:2023,day:16};function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2023 - Day 16`,(0,i.jsx)(o.span,{className:`subtitle`,children:`The Floor Will Be Lava`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsx)(o.p,{children:`I represent each direction as a number: left = 1, right = 2, up = 3, down = 4. Then I know how to turn the direction given each kind of cell and the current light direction:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`deflect_to <- list(
  "." = list(1, 2, 3, 4),
  "/" = list(4, 3, 2, 1),
  "\\\\" = list(3, 4, 1, 2),
  "-" = list(1, 2, c(1, 2), c(1, 2)),
  "|" = list(c(3, 4), c(3, 4), 3, 4)
)

dir_to_diff <- list(c(0, -1), c(0, 1), c(-1, 0), c(1, 0))
`})}),`
`,(0,i.jsx)(o.p,{children:`Now I can just do a DFS from the starting position. Whenever a light in a certain direction hits a cell, I mark that cell as visited in that direction, and schedule to visit its neighbors. The answer is the number of cells that have been visited in at least one direction.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`energize <- function(mat, r_init, c_init, dir_init) {
  # Do we have a light in this cell going in this direction?
  has_light <- lapply(1:4, function(.) matrix(FALSE, nrow(mat), ncol(mat)))
  has_light[[dir_init]][[r_init, c_init]] <- TRUE
  stk <- stack()
  stk$push(list(r = r_init, c = c_init, dir = dir_init))
  while (stk$size() > 0) {
    cur <- stk$pop()
    new_dirs <- deflect_to[[mat[[cur$r, cur$c]]]][[cur$dir]]
    for (dir in new_dirs) {
      d <- dir_to_diff[[dir]]
      new_r <- cur$r + d[1]
      new_c <- cur$c + d[2]
      if (new_r < 1 || new_r > nrow(mat) || new_c < 1 || new_c > ncol(mat)) {
        next
      }
      if (!has_light[[dir]][[new_r, new_c]]) {
        has_light[[dir]][[new_r, new_c]] <- TRUE
        stk$push(list(r = new_r, c = new_c, dir = dir))
      }
    }
  }
  sum(has_light[[1]] | has_light[[2]] | has_light[[3]] | has_light[[4]])
}
`})}),`
`,(0,i.jsxs)(o.p,{children:[`Part 1's answer is just `,(0,i.jsx)(o.code,{children:`energize(mat, 1, 1, 2)`}),`.`]}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsx)(o.p,{children:`I brute-forced all edge positions.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`for (r in seq_len(nrow(mat))) {
  max_energized <- max(max_energized, energize(mat, r, 1, 2))
  max_energized <- max(max_energized, energize(mat, r, ncol(mat), 1))
}
for (c in seq_len(ncol(mat))) {
  max_energized <- max(max_energized, energize(mat, 1, c, 4))
  max_energized <- max(max_energized, energize(mat, nrow(mat), c, 3))
}
`})}),`
`,(0,i.jsx)(o.p,{children:`This takes about 8 seconds to run, which IMO is acceptable for R. I could probably optimize it by memoizing the remaining path from each cell and direction, but I don't think it's worth the effort, especially since I have to think about deduplication of the energized cells, and memoization itself is a pain in R without hashmaps.`}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};