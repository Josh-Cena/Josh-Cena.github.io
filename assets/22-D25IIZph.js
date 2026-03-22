import{t as e}from"./jsx-runtime-xty2or4m.js";import{n as t}from"./lib-zKnO7aGa.js";import{n,t as r}from"./_components-vrS0ov66.js";var i=e(),a={tags:[`BFS/DFS`],title:`Advent of Code 2023 - Day 22: Sand Slabs`,description:`Advent of Code 2023 - Day 22: Sand Slabs, a problem that involves BFS/DFS. Solution written in R, with detailed walkthrough and proof.`,year:2023,day:22};function o(e){let o={code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2023 - Day 22`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Sand Slabs`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsx)(o.p,{children:`This problem just requires some insight about the way the sand slabs depend on each other. Each slab is supported by some slabs directly below it, and supports slabs directly above it. If we can build this dependency graph, then we can easily answer the question of which slabs can be disintegrated: they are the ones that have no slabs above them, or the slabs above them are supported by other slabs.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`blocks <- create_static_stack(data)
total <- sum(sapply(blocks, function(x) {
  all(sapply(blocks[x$supports], function(x) length(x$supported_by) > 1))
}))
`})}),`
`,(0,i.jsx)(o.p,{children:`The question is how to construct this dependency graph. My approach is to stack them bottom-up. Each time, I drop the one with the lowest bottom face, and find the highest top face that intersects with it. This will be the one that supports it.`}),`
`,(0,i.jsx)(o.p,{children:`So the first step is to sort the slabs by their bottom faces, and the already-stacked slabs by their top faces:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`blocks <- blocks[order(sapply(blocks, function(x) x$start[3]))]
order_by_top <- order(
  sapply(blocks[1], function(x) x$end[3]),
  decreasing = TRUE
)
`})}),`
`,(0,i.jsxs)(o.p,{children:[`I assume that `,(0,i.jsx)(o.code,{children:`blocks[1]`}),` is already touching the ground, so I start with dropping `,(0,i.jsx)(o.code,{children:`blocks[2]`}),`. `,(0,i.jsx)(o.code,{children:`eventual_z`}),` records the top face of the first supporting slab. However, I can't immediately stop when I find the first supporting slab, because there may be other slabs that are also supporting it. Therefore I only stop the search when I find a slab whose top face is `,(0,i.jsx)(o.em,{children:`below`}),` `,(0,i.jsx)(o.code,{children:`eventual_z`}),`. I start `,(0,i.jsx)(o.code,{children:`eventual_z`}),` at `,(0,i.jsx)(o.code,{children:`-1`}),`, so that by default the loop runs to the end. Then, when I find the first supporting slab, I update `,(0,i.jsx)(o.code,{children:`eventual_z`}),` to its top face, and drop the current slab down to just above it.`]}),`
`,(0,i.jsxs)(o.p,{children:[`Ideally, `,(0,i.jsx)(o.code,{children:`order_by_top`}),` should be updated by "sinking" `,(0,i.jsx)(o.code,{children:`blocks[[i]]`}),` down into the existing `,(0,i.jsx)(o.code,{children:`order_by_top`}),` list, but I just re-sort the whole list for simplicity. There are only 1233 slabs, so an extra log(n) won't hurt.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`for (i in 2:length(blocks)) {
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
`,(0,i.jsxs)(o.p,{children:[`(By the way, in R, objects are copy-on-write, so we can't save `,(0,i.jsx)(o.code,{children:`bi`}),` once and reuse it for all `,(0,i.jsx)(o.code,{children:`j`}),`, because we are going to update `,(0,i.jsx)(o.code,{children:`blocks[[i]]`}),` in the loop. We have to re-assign `,(0,i.jsx)(o.code,{children:`bi`}),` every time. Also we have to assign to `,(0,i.jsx)(o.code,{children:`blocks[[i]]`}),` instead of `,(0,i.jsx)(o.code,{children:`bi`}),`, because otherwise the changes won't be reflected in the original list.)`]}),`
`,(0,i.jsxs)(o.p,{children:[`Finally, if no slab is below the current slab, then it is supported by the ground, so we set `,(0,i.jsx)(o.code,{children:`eventual_z`}),` to 0.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`if (eventual_z == -1) {
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
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsx)(o.p,{children:`Given the dependency graph, if we have a list of slabs disintegrated/falling, we can know what slabs will fall next by checking which slabs are only supported by the ones that are disintegrated/falling. I do this with a simple BFS.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`num_fall <- function(blocks, gone) {
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
`,(0,i.jsx)(o.p,{children:`I just sum this up for all slabs.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`total <- sum(sapply(seq_along(blocks), function(i) num_fall(blocks, i)))
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};