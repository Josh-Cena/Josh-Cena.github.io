import{u as a,j as n}from"./index-DMPu5IjH.js";import{P as s,a as o}from"./_components-Cf-Fn7vF.js";const t={tags:["Grid walking","BFS/DFS"],description:"Advent of Code 2023 - Day 16: The Floor Will Be Lava, a problem that involves Grid walking and BFS/DFS. Solution written in R, with detailed walkthrough and proof.",year:2023,day:16,title:"Advent of Code 2023 - Day 16: The Floor Will Be Lava"};function r(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...a(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.h1,{children:["Advent of Code 2023 - Day 16",n.jsx(e.span,{className:"subtitle",children:"The Floor Will Be Lava"})]}),`
`,`
`,n.jsx(s,{frontMatter:t}),`
`,n.jsx(e.h2,{children:"Part 1"}),`
`,n.jsx(e.p,{children:"I represent each direction as a number: left = 1, right = 2, up = 3, down = 4. Then I know how to turn the direction given each kind of cell and the current light direction:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-R",children:`deflect_to <- list(
  "." = list(1, 2, 3, 4),
  "/" = list(4, 3, 2, 1),
  "\\\\" = list(3, 4, 1, 2),
  "-" = list(1, 2, c(1, 2), c(1, 2)),
  "|" = list(c(3, 4), c(3, 4), 3, 4)
)

dir_to_diff <- list(c(0, -1), c(0, 1), c(-1, 0), c(1, 0))
`})}),`
`,n.jsx(e.p,{children:"Now I can just do a DFS from the starting position. Whenever a light in a certain direction hits a cell, I mark that cell as visited in that direction, and schedule to visit its neighbors. The answer is the number of cells that have been visited in at least one direction."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-R",children:`energize <- function(mat, r_init, c_init, dir_init) {
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
`,n.jsxs(e.p,{children:["Part 1's answer is just ",n.jsx(e.code,{children:"energize(mat, 1, 1, 2)"}),"."]}),`
`,n.jsx(e.h2,{children:"Part 2"}),`
`,n.jsx(e.p,{children:"I brute-forced all edge positions."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-R",children:`for (r in seq_len(nrow(mat))) {
  max_energized <- max(max_energized, energize(mat, r, 1, 2))
  max_energized <- max(max_energized, energize(mat, r, ncol(mat), 1))
}
for (c in seq_len(ncol(mat))) {
  max_energized <- max(max_energized, energize(mat, 1, c, 4))
  max_energized <- max(max_energized, energize(mat, nrow(mat), c, 3))
}
`})}),`
`,n.jsx(e.p,{children:"This takes about 8 seconds to run, which IMO is acceptable for R. I could probably optimize it by memoizing the remaining path from each cell and direction, but I don't think it's worth the effort, especially since I have to think about deduplication of the energized cells, and memoization itself is a pain in R without hashmaps."}),`
`,n.jsx(o,{frontMatter:t})]})}function d(i={}){const{wrapper:e}={...a(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{d as default,t as frontMatter};
