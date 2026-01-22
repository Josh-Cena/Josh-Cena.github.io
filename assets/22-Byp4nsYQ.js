import{u as a,j as e}from"./index-CkPAr150.js";import{P as l,a as i}from"./_components-CwXKVufl.js";const t={tags:["BFS/DFS"],description:"Advent of Code 2023 - Day 22: Sand Slabs, a problem that involves BFS/DFS. Solution written in R, with detailed walkthrough and proof.",year:2023,day:22,title:"Advent of Code 2023 - Day 22: Sand Slabs"};function o(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2023 - Day 22",e.jsx(n.span,{className:"subtitle",children:"Sand Slabs"})]}),`
`,`
`,e.jsx(l,{frontMatter:t}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:"This problem just requires some insight about the way the sand slabs depend on each other. Each slab is supported by some slabs directly below it, and supports slabs directly above it. If we can build this dependency graph, then we can easily answer the question of which slabs can be disintegrated: they are the ones that have no slabs above them, or the slabs above them are supported by other slabs."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`blocks <- create_static_stack(data)
total <- sum(sapply(blocks, function(x) {
  all(sapply(blocks[x$supports], function(x) length(x$supported_by) > 1))
}))
`})}),`
`,e.jsx(n.p,{children:"The question is how to construct this dependency graph. My approach is to stack them bottom-up. Each time, I drop the one with the lowest bottom face, and find the highest top face that intersects with it. This will be the one that supports it."}),`
`,e.jsx(n.p,{children:"So the first step is to sort the slabs by their bottom faces, and the already-stacked slabs by their top faces:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`blocks <- blocks[order(sapply(blocks, function(x) x$start[3]))]
order_by_top <- order(
  sapply(blocks[1], function(x) x$end[3]),
  decreasing = TRUE
)
`})}),`
`,e.jsxs(n.p,{children:["I assume that ",e.jsx(n.code,{children:"blocks[1]"})," is already touching the ground, so I start with dropping ",e.jsx(n.code,{children:"blocks[2]"}),". ",e.jsx(n.code,{children:"eventual_z"})," records the top face of the first supporting slab. However, I can't immediately stop when I find the first supporting slab, because there may be other slabs that are also supporting it. Therefore I only stop the search when I find a slab whose top face is ",e.jsx(n.em,{children:"below"})," ",e.jsx(n.code,{children:"eventual_z"}),". I start ",e.jsx(n.code,{children:"eventual_z"})," at ",e.jsx(n.code,{children:"-1"}),", so that by default the loop runs to the end. Then, when I find the first supporting slab, I update ",e.jsx(n.code,{children:"eventual_z"})," to its top face, and drop the current slab down to just above it."]}),`
`,e.jsxs(n.p,{children:["Ideally, ",e.jsx(n.code,{children:"order_by_top"}),' should be updated by "sinking" ',e.jsx(n.code,{children:"blocks[[i]]"})," down into the existing ",e.jsx(n.code,{children:"order_by_top"})," list, but I just re-sort the whole list for simplicity. There are only 1233 slabs, so an extra log(n) won't hurt."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`for (i in 2:length(blocks)) {
  eventual_z <- -1
  for (j in order_by_top) {
    bi <- blocks[[i]]
    bj <- blocks[[j]]
    if (bj$end[3] < eventual_z) {
      break
    }
    if (bi$start[3] <= bj$end[3] || !x_y_intersect(bi, bj)) {
      next
    }
    if (eventual_z == -1) {
      eventual_z <- bj$end[3]
      diff <- bi$start[3] - eventual_z - 1
      blocks[[i]]$start[3] <- bi$start[3] - diff
      blocks[[i]]$end[3] <- bi$end[3] - diff
      order_by_top <- order(
        sapply(blocks[1:i], function(x) x$end[3]),
        decreasing = TRUE
      )
    }
    blocks[[i]]$supported_by <- c(bi$supported_by, j)
    blocks[[j]]$supports <- c(bj$supports, i)
  }
}
`})}),`
`,e.jsxs(n.p,{children:["(By the way, in R, objects are copy-on-write, so we can't save ",e.jsx(n.code,{children:"bi"})," once and reuse it for all ",e.jsx(n.code,{children:"j"}),", because we are going to update ",e.jsx(n.code,{children:"blocks[[i]]"})," in the loop. We have to re-assign ",e.jsx(n.code,{children:"bi"})," every time. Also we have to assign to ",e.jsx(n.code,{children:"blocks[[i]]"})," instead of ",e.jsx(n.code,{children:"bi"}),", because otherwise the changes won't be reflected in the original list.)"]}),`
`,e.jsxs(n.p,{children:["Finally, if no slab is below the current slab, then it is supported by the ground, so we set ",e.jsx(n.code,{children:"eventual_z"})," to 0."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`if (eventual_z == -1) {
  eventual_z <- 0
  diff <- blocks[[i]]$start[3] - eventual_z - 1
  blocks[[i]]$start[3] <- blocks[[i]]$start[3] - diff
  blocks[[i]]$end[3] <- blocks[[i]]$end[3] - diff
  order_by_top <- order(
    sapply(blocks[1:i], function(x) x$end[3]),
    decreasing = TRUE
  )
}
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsx(n.p,{children:"Given the dependency graph, if we have a list of slabs disintegrated/falling, we can know what slabs will fall next by checking which slabs are only supported by the ones that are disintegrated/falling. I do this with a simple BFS."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`num_fall <- function(blocks, gone) {
  q <- queue()
  q$push(gone)
  fall <- rep(FALSE, length(blocks))
  fall[gone] <- TRUE
  while (q$size() > 0) {
    i <- q$pop()
    for (j in blocks[[i]]$supports) {
      if (all(fall[blocks[[j]]$supported_by])) {
        fall[j] <- TRUE
        q$push(j)
      }
    }
  }
  sum(fall) - 1
}
`})}),`
`,e.jsx(n.p,{children:"I just sum this up for all slabs."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`total <- sum(sapply(seq_along(blocks), function(i) num_fall(blocks, i)))
`})}),`
`,e.jsx(i,{frontMatter:t})]})}function d(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{d as default,t as frontMatter};
