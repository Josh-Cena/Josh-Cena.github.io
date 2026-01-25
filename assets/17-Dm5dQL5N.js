import{u as r,j as e}from"./index-CYq-bCfF.js";import{P as a,a as o}from"./_components-DytvGw39.js";import"./_commonjsHelpers-Cpj98o6Y.js";const s={tags:["Grid walking","Dijkstra"],title:"Advent of Code 2023 - Day 17: Clumsy Crucible",description:"Advent of Code 2023 - Day 17: Clumsy Crucible, a problem that involves Grid walking and Dijkstra. Solution written in R, with detailed walkthrough and proof.",year:2023,day:17};function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2023 - Day 17",e.jsx(n.span,{className:"subtitle",children:"Clumsy Crucible"})]}),`
`,`
`,e.jsx(a,{frontMatter:s}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:["This is very obviously a Dijkstra problem, where we want to walk the grid and minimize the total cost. However, it's not the case that we can always go to all our neighbors, because we can walk at most 3 steps in a given direction, and we can only turn 90 degrees. Therefore, we have to also keep track of the current direction and how many steps we've taken in that direction. This means that our state is a tuple of ",e.jsx(n.code,{children:"(i, j, dir, steps)"}),". The transition is defined by (unfortunately named access in R is much slower than index access, and lists are much slower than vectors, so this is less readable than I'd like):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`neighbors <- function(w, h, node) {
  res <- list()
  for (ndir in 1:4) {
    if (node[3] == ndir && node[4] == 3) {
      next
    }
    if (
      node[3] == 1 &&
        ndir == 3 ||
        node[3] == 3 && ndir == 1 ||
        node[3] == 2 && ndir == 4 ||
        node[3] == 4 && ndir == 2
    ) {
      # Can't turn 180 degrees
      next
    }
    diff <- dir_to_diff[[ndir]]
    ni <- node[1] + diff[1]
    nj <- node[2] + diff[2]
    if (ni >= 1 && ni <= h && nj >= 1 && nj <= w) {
      nsteps <- if (node[3] == ndir) node[4] + 1 else 1
      res <- push(res, c(ni, nj, ndir, nsteps))
    }
  }
  res
}
`})}),`
`,e.jsxs(n.p,{children:["Now we can run standard Dijkstra's. Because the ",e.jsx(n.code,{children:"collections"})," package's ",e.jsx(n.code,{children:"priority_queue"})," is a max-heap, we have to negate the costs to get the minimum cost. We can stop as soon as we reach the bottom-right corner."]}),`
`,e.jsxs(n.p,{children:["Note that I don't start at ",e.jsx(n.code,{children:"(1, 1)"}),", but at ",e.jsx(n.code,{children:"(1, 2)"})," and ",e.jsx(n.code,{children:"(2, 1)"}),", because all states need to have a defined direction and a positive step count, so I have to manually take the first step to kick off the algorithm."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`dijkstra <- function(mat) {
  width <- ncol(mat)
  height <- nrow(mat)
  # 1 = right, 2 = down, 3 = left, 4 = up
  dist <- array(Inf, dim = c(height, width, 4, 3))
  dist[1, 2, 1, 1] <- mat[[1, 2]]
  dist[2, 1, 2, 1] <- mat[[2, 1]]
  pq <- priority_queue()
  pq$push(c(1, 2, 1, 1, mat[[1, 2]]), priority = -mat[[1, 2]])
  pq$push(c(2, 1, 2, 1, mat[[2, 1]]), priority = -mat[[2, 1]])
  while (pq$size() > 0) {
    u <- pq$pop()
    if (u[1] == height && u[2] == width) {
      return(u[5])
    }
    for (v in neighbors(width, height, u)) {
      new_cost <- u[5] + mat[v[1], v[2]]
      if (new_cost < dist[v[1], v[2], v[3], v[4]]) {
        dist[v[1], v[2], v[3], v[4]] <- new_cost
        pq$push(c(v[1], v[2], v[3], v[4], new_cost), priority = -new_cost)
      }
    }
  }
  stop("No path found")
}
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsx(n.p,{children:"The new rule just requires a different transition function. We need to take at least 4 steps before we can turn, and at most 10 steps."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`neighbors_ultra <- function(w, h, node) {
  res <- list()
  dirs <- if (node[4] < 4) node[3] else 1:4
  for (ndir in dirs) {
    if (node[3] == ndir && node[4] == 10) {
      next
    }
    # Everything else the same
  }
  res
}
`})}),`
`,e.jsxs(n.p,{children:["Because the maximum number of steps is bigger, the graph is also bigger because we have more states. I pass ",e.jsx(n.code,{children:"neighbors"})," and ",e.jsx(n.code,{children:"max_steps"})," as arguments to ",e.jsx(n.code,{children:"dijkstra"})," so that I can reuse the same function. It runs for 5 seconds."]}),`
`,e.jsx(o,{frontMatter:s})]})}function l(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{l as default,s as frontMatter};
