import{t as e}from"./jsx-runtime-DAs1UGHr.js";import{n as t}from"./lib-T-nEWGuF.js";import{t as n}from"./Canvas-tygBmXPP.js";import{n as r,t as i}from"./_components-DgNpooeQ.js";var a=`/assets/23-intermediate-vDXHvd8a.png`,o=e(),s={tags:[`Maze`,`Graph theory`,`BFS/DFS`,`Manual inspection`],title:`Advent of Code 2023 - Day 23: A Long Walk`,description:`Advent of Code 2023 - Day 23: A Long Walk, a problem that involves Maze, Graph theory, BFS/DFS, and Manual inspection. Solution written in R, with detailed walkthrough and proof.`,year:2023,day:23};function c(e){let c={a:`a`,annotation:`annotation`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,img:`img`,li:`li`,math:`math`,mfrac:`mfrac`,mi:`mi`,mn:`mn`,mo:`mo`,mrow:`mrow`,mtext:`mtext`,munder:`munder`,ol:`ol`,p:`p`,path:`path`,pre:`pre`,semantics:`semantics`,span:`span`,svg:`svg`,...t(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(c.h1,{children:[`Advent of Code 2023 - Day 23`,(0,o.jsx)(c.span,{className:`subtitle`,children:`A Long Walk`})]}),(0,o.jsx)(r,{frontMatter:s}),`
`,(0,o.jsx)(c.h2,{children:`Part 1`}),`
`,(0,o.jsx)(c.p,{children:`The first realization is that most positions in the maze don't matter: since we can only visit each position once, if we are in a one-directional corridor, we have no choice but to go through it. So we can simplify the maze by collapsing these corridors into single edges. The only positions that matter are:`}),`
`,(0,o.jsxs)(c.ol,{children:[`
`,(0,o.jsx)(c.li,{children:`The start and end positions.`}),`
`,(0,o.jsx)(c.li,{children:`Positions with multiple enter/exit paths, which have wall neighbor number not equal to 2.`}),`
`,(0,o.jsx)(c.li,{children:`Slopes, because they can only be traversed in one direction, so from the other direction they are effectively walls.`}),`
`]}),`
`,(0,o.jsxs)(c.p,{children:[`This reminds of `,(0,o.jsx)(c.a,{href:`/notes/aoc/2019/18/`,children:`2019 day 18`}),`, where we also simplified the maze by collapsing corridors.`]}),`
`,(0,o.jsx)(c.p,{children:`Anyway, this is an entirely unremarkable (by the standards of day 23) algorithm. I first extract all such junction points (which just requires looking at the cell and its neighbors' values; no traversal required). Then I walk from each exit direction of each junction point until I hit another junction point (the path is unique along the way), and record the distance between them. This gives me a graph of junction points and their distances.`}),`
`,(0,o.jsx)(c.p,{children:(0,o.jsx)(c.img,{src:a,alt:`Intermediate junction graph`,width:2419,height:3258})}),`
`,(0,o.jsxs)(c.p,{children:[`(By the way, there was a minor hiccup with producing these graphs: turned out that `,(0,o.jsx)(c.code,{children:`DiagrammeR`}),` doesn't work well with graphs containing `,(0,o.jsx)(c.code,{children:`name`}),`, so I have to delete the names before converting to `,(0,o.jsx)(c.code,{children:`DiagrammeR`}),`.)`]}),`
`,(0,o.jsxs)(c.p,{children:[`There's already something we can see from this graph, but it's still a bit too bloated. If we look at the path from one junction point to another, it looks like `,(0,o.jsx)(c.code,{children:`A -> B -> C <-> D`}),`. `,(0,o.jsx)(c.code,{children:`B`}),` is obviously useless because there's a single way to go from `,(0,o.jsx)(c.code,{children:`A`}),` to `,(0,o.jsx)(c.code,{children:`C`}),`; `,(0,o.jsx)(c.code,{children:`C`}),` is also useless because it can only be exited in one direction, so it must be entered from the other direction. So we can prune these nodes and get the following graph:`]}),`
`,(0,o.jsx)(c.p,{children:(0,o.jsx)(c.img,{src:`https://github.com/Josh-Cena/aoc2023/blob/master/src/day23_1.png?raw=true`,alt:`Final junction graph`})}),`
`,(0,o.jsxs)(c.p,{children:[`This is a grid graph where each edge points to the target node. (There are two triangles in the corners, but if you add an extra node in the middle of those edges, you get a regular grid graph.) Because it's a DAG, we can do a topological sort and then do a DFS (see `,(0,o.jsx)(c.a,{href:`https://en.wikipedia.org/wiki/Longest_path_problem#Acyclic_graphs`,children:`longest path`}),`).`]}),`
`,(0,o.jsx)(c.pre,{children:(0,o.jsx)(c.code,{className:`language-R`,children:`longest_path_dag <- function(graph, start_id, end_id) {
  topo <- igraph::topo_sort(graph, mode = "out")
  dist <- rep(-Inf, igraph::vcount(graph))
  dist[start_id] <- 0
  for (u in topo) {
    if (!is.finite(dist[u])) {
      next
    }
    out_edges <- igraph::incident(graph, igraph::V(graph)[u], mode = "out")
    if (length(out_edges) == 0) {
      next
    }
    targets <- igraph::ends(graph, out_edges, names = FALSE)[, 2]
    dist[targets] <-
      pmax(dist[targets], dist[u] + igraph::E(graph)[out_edges]$length)
  }

  dist[end_id]
}
`})}),`
`,(0,o.jsx)(c.h2,{children:`Part 2`}),`
`,(0,o.jsx)(c.p,{children:`After removing the slopes, now all edges are bidirectional, so essentially the graph is the same but undirected:`}),`
`,(0,o.jsx)(c.p,{children:(0,o.jsx)(c.img,{src:`https://github.com/Josh-Cena/aoc2023/blob/master/src/day23_2.png?raw=true`,alt:`Final junction graph, undirected`})}),`
`,(0,o.jsxs)(c.p,{children:[`However! Longest paths in undirected graphs are `,(0,o.jsx)(c.a,{href:`https://en.wikipedia.org/wiki/Longest_path_problem#NP-hardness`,children:`NP-hard`}),`, including in grid graphs. So a naïve DFS solution would be very slow. Let's start with the ill-performing version as a baseline. It enumerates every single path from the start to the end, `,(0,o.jsx)(c.a,{href:`https://oeis.org/A007764`,children:`of which there are 1,262,816`}),`, by adding one edge to the path at a time, and keeping track of the longest path length found so far. It uses a visited set to avoid cycles, which is reset when backtracking.`]}),`
`,(0,o.jsx)(c.pre,{children:(0,o.jsx)(c.code,{className:`language-R`,children:`longest_path <- function(graph, start_id, end_id) {
  # Get adjacency list for DFS
  el <- igraph::as_edgelist(graph, names = FALSE)
  e_len <- igraph::edge_attr(graph, "length")
  n <- igraph::vcount(graph)

  neighbors <- vector("list", n)
  edge_lens <- vector("list", n)
  for (i in seq_len(n)) {
    neighbors[[i]] <- integer(0)
    edge_lens[[i]] <- numeric(0)
  }

  for (k in seq_len(m)) {
    u <- el[k, 1]
    v <- el[k, 2]
    w <- e_len[k]
    neighbors[[u]] <- c(neighbors[[u]], v)
    edge_lens[[u]] <- c(edge_lens[[u]], w)
    neighbors[[v]] <- c(neighbors[[v]], u)
    edge_lens[[v]] <- c(edge_lens[[v]], w)
  }

  visited <- rep(FALSE, n)
  visited[start_id] <- TRUE
  st <- stack()
  st$push(list(vertex = start_id, neighbor = 1, len = 0))
  max_len <- 0
  while (st$size() > 0) {
    fr <- st$pop()
    u <- fr$vertex
    i <- fr$neighbor

    # Done with this vertex, backtrack
    if (i > length(neighbors[[u]])) {
      if (u != start_id) {
        visited[u] <- FALSE
      }
      next
    }

    st$push(list(vertex = u, neighbor = i + 1, len = fr$len))
    v <- neighbors[[u]][i]
    if (visited[v]) {
      next
    }

    new_len <- fr$len + edge_lens[[u]][i]
    if (v == end_id) {
      max_len <- max(max_len, new_len)
      next
    }
    visited[v] <- TRUE
    st$push(list(vertex = v, neighbor = 1, len = new_len))
  }

  max_len
}
`})}),`
`,(0,o.jsx)(c.p,{children:`The above function ran in 3 minutes. I understand that R itself is slow and the above is not optimized, but any language-level optimizations won't help much.`}),`
`,(0,o.jsxs)(c.p,{children:[`Let's think about how we can prune branches. Although the number of paths from one corner to the other is few (1 million, as aforementioned), a lot of the times the algorithm made a decision that traps it in a dead end, but it doesn't know that until it has exhausted all paths within that dead end. So one optimization is to check if a vertex is a dead end before going into it. However, if we do a BFS for every branch, this just blows up the time by another factor of 36, and it's not immediately clear how deeply we can prune the search space. Instead, I implemented a heuristic: if we are at the edge of the grid, we can only go `,(0,o.jsx)(c.em,{children:`towards`}),` the end and never `,(0,o.jsx)(c.em,{children:`away`}),` from it, because otherwise we trap ourselves:`]}),`
`,(0,o.jsx)(n,{code:(e,t,n,r,i)=>{e.strokeStyle=`#80808060`;for(let t=0;t<5;t++)e.beginPath(),e.moveTo(20+t*50,20),e.lineTo(20+t*50,100),e.stroke();for(let t=0;t<2;t++)e.beginPath(),e.moveTo(0,20+t*50),e.lineTo(200,20+t*50),e.stroke();e.strokeStyle=r,e.lineWidth=2,e.beginPath(),e.moveTo(0,20),e.lineTo(70,20),e.lineTo(70,70),e.lineTo(170,70),e.lineTo(170,20),e.lineTo(120,20),e.stroke(),e.beginPath(),e.moveTo(120,20),e.lineTo(130,25),e.lineTo(130,15),e.fill(),e.beginPath(),e.moveTo(110,10),e.lineTo(130,30),e.moveTo(110,30),e.lineTo(130,10),e.stroke()},width:200,height:100}),`
`,(0,o.jsx)(c.p,{children:`This also includes another case, which is if we are at the vertex right outside the end ("138,132" in the diagram), we have to go into the end, because if we leave it, we won't be able to come back again.`}),`
`,(0,o.jsx)(c.p,{children:`An edge node can be detected by counting its number of neighbors. I start from the end node, and trace the edge nodes back to the start node. Then in the DFS, if we are at an edge node, we don't consider the neighbor that is farther from the end node.`}),`
`,(0,o.jsx)(c.pre,{children:(0,o.jsx)(c.code,{className:`language-R`,children:`longest_path <- function(graph, start_id, end_id) {
  # ...
  # Precompute the distance from each edge node to the end node
  edge_node_dist_to_end <- rep(Inf, n)
  visited <- rep(FALSE, n)
  q <- queue()
  q$push(end_id)
  edge_node_dist_to_end[end_id] <- 0
  visited[end_id] <- TRUE
  while (q$size() > 0) {
    u <- q$pop()
    for (i in seq_along(neighbors[[u]])) {
      v <- neighbors[[u]][i]
      if (length(neighbors[[v]]) == 4 || visited[v]) {
        # Not an edge node
        next
      }
      visited[v] <- TRUE
      edge_node_dist_to_end[v] <- edge_node_dist_to_end[u] + 1
      q$push(v)
    }
  }
  # ...
  while (st$size() > 0) {
    # ...
    if (visited[v]) {
      next
    }
    # We are traveling away from the end, which would trap ourselves
    if (
      is.finite(edge_node_dist_to_end[v]) &&
        is.finite(edge_node_dist_to_end[u]) &&
        edge_node_dist_to_end[v] >= edge_node_dist_to_end[u]
    ) {
      next
    }

    # ...
  }

  max_len
}
`})}),`
`,(0,o.jsx)(c.p,{children:`This reduced the runtime to 40s, a 4.5x improvement. It's still not great though; for one thing, it can't detect dead ends that are not on the edge:`}),`
`,(0,o.jsx)(n,{code:(e,t,n,r,i)=>{e.strokeStyle=`#80808060`;for(let t=0;t<5;t++)e.beginPath(),e.moveTo(20+t*50,0),e.lineTo(20+t*50,200),e.stroke();for(let t=0;t<5;t++)e.beginPath(),e.moveTo(0,20+t*50),e.lineTo(200,20+t*50),e.stroke();e.strokeStyle=r,e.lineWidth=2,e.beginPath(),e.moveTo(0,170),e.lineTo(170,170),e.lineTo(170,20),e.lineTo(20,20),e.lineTo(20,120),e.lineTo(70,120),e.stroke(),e.beginPath(),e.moveTo(70,120),e.lineTo(60,115),e.lineTo(60,125),e.fill(),e.beginPath(),e.moveTo(60,110),e.lineTo(80,130),e.moveTo(80,110),e.lineTo(60,130),e.stroke()},width:200,height:200}),`
`,(0,o.jsxs)(c.p,{children:[`There's a second optimization, which is an upper-bound heuristic (similar to `,(0,o.jsx)(c.a,{href:`/notes/aoc/2022/19/`,children:`2022 day 19`}),`). Since each node can contribute at most 1 in-edge and 1 out-edge to the path, the maximum remaining path length from `,(0,o.jsxs)(c.span,{className:`katex`,children:[(0,o.jsx)(c.span,{className:`katex-mathml`,children:(0,o.jsx)(c.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,o.jsxs)(c.semantics,{children:[(0,o.jsx)(c.mrow,{children:(0,o.jsx)(c.mi,{children:`u`})}),(0,o.jsx)(c.annotation,{encoding:`application/x-tex`,children:`u`})]})})}),(0,o.jsx)(c.span,{className:`katex-html`,"aria-hidden":`true`,children:(0,o.jsxs)(c.span,{className:`base`,children:[(0,o.jsx)(c.span,{className:`strut`,style:{height:`0.4306em`}}),(0,o.jsx)(c.span,{className:`mord mathnormal`,children:`u`})]})})]}),` to `,(0,o.jsxs)(c.span,{className:`katex`,children:[(0,o.jsx)(c.span,{className:`katex-mathml`,children:(0,o.jsx)(c.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,o.jsxs)(c.semantics,{children:[(0,o.jsx)(c.mrow,{children:(0,o.jsx)(c.mi,{children:`e`})}),(0,o.jsx)(c.annotation,{encoding:`application/x-tex`,children:`e`})]})})}),(0,o.jsx)(c.span,{className:`katex-html`,"aria-hidden":`true`,children:(0,o.jsxs)(c.span,{className:`base`,children:[(0,o.jsx)(c.span,{className:`strut`,style:{height:`0.4306em`}}),(0,o.jsx)(c.span,{className:`mord mathnormal`,children:`e`})]})})]}),` is given by`]}),`
`,(0,o.jsx)(c.span,{className:`katex-display`,children:(0,o.jsxs)(c.span,{className:`katex`,children:[(0,o.jsx)(c.span,{className:`katex-mathml`,children:(0,o.jsx)(c.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,display:`block`,children:(0,o.jsxs)(c.semantics,{children:[(0,o.jsxs)(c.mrow,{children:[(0,o.jsx)(c.mi,{children:`d`}),(0,o.jsx)(c.mo,{children:`≤`}),(0,o.jsxs)(c.mfrac,{children:[(0,o.jsx)(c.mn,{children:`1`}),(0,o.jsx)(c.mn,{children:`2`})]}),(0,o.jsxs)(c.mrow,{children:[(0,o.jsx)(c.mo,{fence:`true`,children:`(`}),(0,o.jsx)(c.mtext,{children:`best1`}),(0,o.jsx)(c.mo,{stretchy:`false`,children:`[`}),(0,o.jsx)(c.mi,{children:`u`}),(0,o.jsx)(c.mo,{stretchy:`false`,children:`]`}),(0,o.jsx)(c.mo,{children:`+`}),(0,o.jsx)(c.mtext,{children:`best1`}),(0,o.jsx)(c.mo,{stretchy:`false`,children:`[`}),(0,o.jsx)(c.mi,{children:`e`}),(0,o.jsx)(c.mo,{stretchy:`false`,children:`]`}),(0,o.jsx)(c.mo,{children:`+`}),(0,o.jsxs)(c.munder,{children:[(0,o.jsx)(c.mo,{children:`∑`}),(0,o.jsxs)(c.mrow,{children:[(0,o.jsx)(c.mi,{children:`v`}),(0,o.jsx)(c.mo,{children:`∉`}),(0,o.jsx)(c.mtext,{children:`visited`}),(0,o.jsx)(c.mo,{separator:`true`,children:`,`}),(0,o.jsx)(c.mi,{children:`v`}),(0,o.jsx)(c.mo,{mathvariant:`normal`,children:`≠`}),(0,o.jsx)(c.mi,{children:`u`}),(0,o.jsx)(c.mo,{separator:`true`,children:`,`}),(0,o.jsx)(c.mi,{children:`v`}),(0,o.jsx)(c.mo,{mathvariant:`normal`,children:`≠`}),(0,o.jsx)(c.mi,{children:`e`})]})]}),(0,o.jsx)(c.mtext,{children:`best2`}),(0,o.jsx)(c.mo,{stretchy:`false`,children:`[`}),(0,o.jsx)(c.mi,{children:`v`}),(0,o.jsx)(c.mo,{stretchy:`false`,children:`]`}),(0,o.jsx)(c.mo,{fence:`true`,children:`)`})]})]}),(0,o.jsx)(c.annotation,{encoding:`application/x-tex`,children:`d\\le \\frac{1}{2}\\left(\\text{best1}[u] + \\text{best1}[e] + \\sum_{v\\not\\in\\text{visited}, v\\neq u, v\\neq e} \\text{best2}[v]\\right)`})]})})}),(0,o.jsxs)(c.span,{className:`katex-html`,"aria-hidden":`true`,children:[(0,o.jsxs)(c.span,{className:`base`,children:[(0,o.jsx)(c.span,{className:`strut`,style:{height:`0.8304em`,verticalAlign:`-0.136em`}}),(0,o.jsx)(c.span,{className:`mord mathnormal`,children:`d`}),(0,o.jsx)(c.span,{className:`mspace`,style:{marginRight:`0.2778em`}}),(0,o.jsx)(c.span,{className:`mrel`,children:`≤`}),(0,o.jsx)(c.span,{className:`mspace`,style:{marginRight:`0.2778em`}})]}),(0,o.jsxs)(c.span,{className:`base`,children:[(0,o.jsx)(c.span,{className:`strut`,style:{height:`3.6em`,verticalAlign:`-1.55em`}}),(0,o.jsxs)(c.span,{className:`mord`,children:[(0,o.jsx)(c.span,{className:`mopen nulldelimiter`}),(0,o.jsx)(c.span,{className:`mfrac`,children:(0,o.jsxs)(c.span,{className:`vlist-t vlist-t2`,children:[(0,o.jsxs)(c.span,{className:`vlist-r`,children:[(0,o.jsxs)(c.span,{className:`vlist`,style:{height:`1.3214em`},children:[(0,o.jsxs)(c.span,{style:{top:`-2.314em`},children:[(0,o.jsx)(c.span,{className:`pstrut`,style:{height:`3em`}}),(0,o.jsx)(c.span,{className:`mord`,children:(0,o.jsx)(c.span,{className:`mord`,children:`2`})})]}),(0,o.jsxs)(c.span,{style:{top:`-3.23em`},children:[(0,o.jsx)(c.span,{className:`pstrut`,style:{height:`3em`}}),(0,o.jsx)(c.span,{className:`frac-line`,style:{borderBottomWidth:`0.04em`}})]}),(0,o.jsxs)(c.span,{style:{top:`-3.677em`},children:[(0,o.jsx)(c.span,{className:`pstrut`,style:{height:`3em`}}),(0,o.jsx)(c.span,{className:`mord`,children:(0,o.jsx)(c.span,{className:`mord`,children:`1`})})]})]}),(0,o.jsx)(c.span,{className:`vlist-s`,children:`​`})]}),(0,o.jsx)(c.span,{className:`vlist-r`,children:(0,o.jsx)(c.span,{className:`vlist`,style:{height:`0.686em`},children:(0,o.jsx)(c.span,{})})})]})}),(0,o.jsx)(c.span,{className:`mclose nulldelimiter`})]}),(0,o.jsx)(c.span,{className:`mspace`,style:{marginRight:`0.1667em`}}),(0,o.jsxs)(c.span,{className:`minner`,children:[(0,o.jsx)(c.span,{className:`mopen`,children:(0,o.jsx)(c.span,{className:`delimsizing mult`,children:(0,o.jsxs)(c.span,{className:`vlist-t vlist-t2`,children:[(0,o.jsxs)(c.span,{className:`vlist-r`,children:[(0,o.jsx)(c.span,{className:`vlist`,style:{height:`2.05em`},children:(0,o.jsxs)(c.span,{style:{top:`-4.05em`},children:[(0,o.jsx)(c.span,{className:`pstrut`,style:{height:`5.6em`}}),(0,o.jsx)(c.span,{style:{width:`0.875em`,height:`3.600em`},children:(0,o.jsx)(c.svg,{xmlns:`http://www.w3.org/2000/svg`,width:`0.875em`,height:`3.600em`,viewBox:`0 0 875 3600`,children:(0,o.jsx)(c.path,{d:`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,84c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-92c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`})})})]})}),(0,o.jsx)(c.span,{className:`vlist-s`,children:`​`})]}),(0,o.jsx)(c.span,{className:`vlist-r`,children:(0,o.jsx)(c.span,{className:`vlist`,style:{height:`1.55em`},children:(0,o.jsx)(c.span,{})})})]})})}),(0,o.jsx)(c.span,{className:`mord text`,children:(0,o.jsx)(c.span,{className:`mord`,children:`best1`})}),(0,o.jsx)(c.span,{className:`mopen`,children:`[`}),(0,o.jsx)(c.span,{className:`mord mathnormal`,children:`u`}),(0,o.jsx)(c.span,{className:`mclose`,children:`]`}),(0,o.jsx)(c.span,{className:`mspace`,style:{marginRight:`0.2222em`}}),(0,o.jsx)(c.span,{className:`mbin`,children:`+`}),(0,o.jsx)(c.span,{className:`mspace`,style:{marginRight:`0.2222em`}}),(0,o.jsx)(c.span,{className:`mord text`,children:(0,o.jsx)(c.span,{className:`mord`,children:`best1`})}),(0,o.jsx)(c.span,{className:`mopen`,children:`[`}),(0,o.jsx)(c.span,{className:`mord mathnormal`,children:`e`}),(0,o.jsx)(c.span,{className:`mclose`,children:`]`}),(0,o.jsx)(c.span,{className:`mspace`,style:{marginRight:`0.2222em`}}),(0,o.jsx)(c.span,{className:`mbin`,children:`+`}),(0,o.jsx)(c.span,{className:`mspace`,style:{marginRight:`0.2222em`}}),(0,o.jsx)(c.span,{className:`mop op-limits`,children:(0,o.jsxs)(c.span,{className:`vlist-t vlist-t2`,children:[(0,o.jsxs)(c.span,{className:`vlist-r`,children:[(0,o.jsxs)(c.span,{className:`vlist`,style:{height:`1.05em`},children:[(0,o.jsxs)(c.span,{style:{top:`-1.8479em`,marginLeft:`0em`},children:[(0,o.jsx)(c.span,{className:`pstrut`,style:{height:`3.05em`}}),(0,o.jsx)(c.span,{className:`sizing reset-size6 size3 mtight`,children:(0,o.jsxs)(c.span,{className:`mord mtight`,children:[(0,o.jsx)(c.span,{className:`mord mathnormal mtight`,style:{marginRight:`0.03588em`},children:`v`}),(0,o.jsx)(c.span,{className:`mrel mtight`,children:(0,o.jsx)(c.span,{className:`mord vbox mtight`,children:(0,o.jsx)(c.span,{className:`thinbox mtight`,children:(0,o.jsxs)(c.span,{className:`rlap mtight`,children:[(0,o.jsx)(c.span,{className:`strut`,style:{height:`0.8889em`,verticalAlign:`-0.1944em`}}),(0,o.jsx)(c.span,{className:`inner`,children:(0,o.jsx)(c.span,{className:`mord mtight`,children:(0,o.jsx)(c.span,{className:`mrel mtight`,children:``})})}),(0,o.jsx)(c.span,{className:`fix`})]})})})}),(0,o.jsx)(c.span,{className:`mrel mtight`,children:`∈`}),(0,o.jsx)(c.span,{className:`mord text mtight`,children:(0,o.jsx)(c.span,{className:`mord mtight`,children:`visited`})}),(0,o.jsx)(c.span,{className:`mpunct mtight`,children:`,`}),(0,o.jsx)(c.span,{className:`mord mathnormal mtight`,style:{marginRight:`0.03588em`},children:`v`}),(0,o.jsxs)(c.span,{className:`mrel mtight`,children:[(0,o.jsx)(c.span,{className:`mrel mtight`,children:(0,o.jsx)(c.span,{className:`mord vbox mtight`,children:(0,o.jsx)(c.span,{className:`thinbox mtight`,children:(0,o.jsxs)(c.span,{className:`rlap mtight`,children:[(0,o.jsx)(c.span,{className:`strut`,style:{height:`0.8889em`,verticalAlign:`-0.1944em`}}),(0,o.jsx)(c.span,{className:`inner`,children:(0,o.jsx)(c.span,{className:`mord mtight`,children:(0,o.jsx)(c.span,{className:`mrel mtight`,children:``})})}),(0,o.jsx)(c.span,{className:`fix`})]})})})}),(0,o.jsx)(c.span,{className:`mrel mtight`,children:`=`})]}),(0,o.jsx)(c.span,{className:`mord mathnormal mtight`,children:`u`}),(0,o.jsx)(c.span,{className:`mpunct mtight`,children:`,`}),(0,o.jsx)(c.span,{className:`mord mathnormal mtight`,style:{marginRight:`0.03588em`},children:`v`}),(0,o.jsxs)(c.span,{className:`mrel mtight`,children:[(0,o.jsx)(c.span,{className:`mrel mtight`,children:(0,o.jsx)(c.span,{className:`mord vbox mtight`,children:(0,o.jsx)(c.span,{className:`thinbox mtight`,children:(0,o.jsxs)(c.span,{className:`rlap mtight`,children:[(0,o.jsx)(c.span,{className:`strut`,style:{height:`0.8889em`,verticalAlign:`-0.1944em`}}),(0,o.jsx)(c.span,{className:`inner`,children:(0,o.jsx)(c.span,{className:`mord mtight`,children:(0,o.jsx)(c.span,{className:`mrel mtight`,children:``})})}),(0,o.jsx)(c.span,{className:`fix`})]})})})}),(0,o.jsx)(c.span,{className:`mrel mtight`,children:`=`})]}),(0,o.jsx)(c.span,{className:`mord mathnormal mtight`,children:`e`})]})})]}),(0,o.jsxs)(c.span,{style:{top:`-3.05em`},children:[(0,o.jsx)(c.span,{className:`pstrut`,style:{height:`3.05em`}}),(0,o.jsx)(c.span,{children:(0,o.jsx)(c.span,{className:`mop op-symbol large-op`,children:`∑`})})]})]}),(0,o.jsx)(c.span,{className:`vlist-s`,children:`​`})]}),(0,o.jsx)(c.span,{className:`vlist-r`,children:(0,o.jsx)(c.span,{className:`vlist`,style:{height:`1.4382em`},children:(0,o.jsx)(c.span,{})})})]})}),(0,o.jsx)(c.span,{className:`mspace`,style:{marginRight:`0.1667em`}}),(0,o.jsx)(c.span,{className:`mord text`,children:(0,o.jsx)(c.span,{className:`mord`,children:`best2`})}),(0,o.jsx)(c.span,{className:`mopen`,children:`[`}),(0,o.jsx)(c.span,{className:`mord mathnormal`,style:{marginRight:`0.03588em`},children:`v`}),(0,o.jsx)(c.span,{className:`mclose`,children:`]`}),(0,o.jsx)(c.span,{className:`mclose`,children:(0,o.jsx)(c.span,{className:`delimsizing mult`,children:(0,o.jsxs)(c.span,{className:`vlist-t vlist-t2`,children:[(0,o.jsxs)(c.span,{className:`vlist-r`,children:[(0,o.jsx)(c.span,{className:`vlist`,style:{height:`2.05em`},children:(0,o.jsxs)(c.span,{style:{top:`-4.05em`},children:[(0,o.jsx)(c.span,{className:`pstrut`,style:{height:`5.6em`}}),(0,o.jsx)(c.span,{style:{width:`0.875em`,height:`3.600em`},children:(0,o.jsx)(c.svg,{xmlns:`http://www.w3.org/2000/svg`,width:`0.875em`,height:`3.600em`,viewBox:`0 0 875 3600`,children:(0,o.jsx)(c.path,{d:`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,9
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-144c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`})})})]})}),(0,o.jsx)(c.span,{className:`vlist-s`,children:`​`})]}),(0,o.jsx)(c.span,{className:`vlist-r`,children:(0,o.jsx)(c.span,{className:`vlist`,style:{height:`1.55em`},children:(0,o.jsx)(c.span,{})})})]})})})]})]})]})]})}),`
`,(0,o.jsxs)(c.p,{children:[`Where `,(0,o.jsxs)(c.span,{className:`katex`,children:[(0,o.jsx)(c.span,{className:`katex-mathml`,children:(0,o.jsx)(c.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,o.jsxs)(c.semantics,{children:[(0,o.jsxs)(c.mrow,{children:[(0,o.jsx)(c.mtext,{children:`best1`}),(0,o.jsx)(c.mo,{stretchy:`false`,children:`[`}),(0,o.jsx)(c.mi,{children:`v`}),(0,o.jsx)(c.mo,{stretchy:`false`,children:`]`})]}),(0,o.jsx)(c.annotation,{encoding:`application/x-tex`,children:`\\text{best1}[v]`})]})})}),(0,o.jsx)(c.span,{className:`katex-html`,"aria-hidden":`true`,children:(0,o.jsxs)(c.span,{className:`base`,children:[(0,o.jsx)(c.span,{className:`strut`,style:{height:`1em`,verticalAlign:`-0.25em`}}),(0,o.jsx)(c.span,{className:`mord text`,children:(0,o.jsx)(c.span,{className:`mord`,children:`best1`})}),(0,o.jsx)(c.span,{className:`mopen`,children:`[`}),(0,o.jsx)(c.span,{className:`mord mathnormal`,style:{marginRight:`0.03588em`},children:`v`}),(0,o.jsx)(c.span,{className:`mclose`,children:`]`})]})})]}),` is the length of the longest edge from `,(0,o.jsxs)(c.span,{className:`katex`,children:[(0,o.jsx)(c.span,{className:`katex-mathml`,children:(0,o.jsx)(c.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,o.jsxs)(c.semantics,{children:[(0,o.jsx)(c.mrow,{children:(0,o.jsx)(c.mi,{children:`u`})}),(0,o.jsx)(c.annotation,{encoding:`application/x-tex`,children:`u`})]})})}),(0,o.jsx)(c.span,{className:`katex-html`,"aria-hidden":`true`,children:(0,o.jsxs)(c.span,{className:`base`,children:[(0,o.jsx)(c.span,{className:`strut`,style:{height:`0.4306em`}}),(0,o.jsx)(c.span,{className:`mord mathnormal`,children:`u`})]})})]}),`, and `,(0,o.jsxs)(c.span,{className:`katex`,children:[(0,o.jsx)(c.span,{className:`katex-mathml`,children:(0,o.jsx)(c.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,o.jsxs)(c.semantics,{children:[(0,o.jsxs)(c.mrow,{children:[(0,o.jsx)(c.mtext,{children:`best2`}),(0,o.jsx)(c.mo,{stretchy:`false`,children:`[`}),(0,o.jsx)(c.mi,{children:`v`}),(0,o.jsx)(c.mo,{stretchy:`false`,children:`]`})]}),(0,o.jsx)(c.annotation,{encoding:`application/x-tex`,children:`\\text{best2}[v]`})]})})}),(0,o.jsx)(c.span,{className:`katex-html`,"aria-hidden":`true`,children:(0,o.jsxs)(c.span,{className:`base`,children:[(0,o.jsx)(c.span,{className:`strut`,style:{height:`1em`,verticalAlign:`-0.25em`}}),(0,o.jsx)(c.span,{className:`mord text`,children:(0,o.jsx)(c.span,{className:`mord`,children:`best2`})}),(0,o.jsx)(c.span,{className:`mopen`,children:`[`}),(0,o.jsx)(c.span,{className:`mord mathnormal`,style:{marginRight:`0.03588em`},children:`v`}),(0,o.jsx)(c.span,{className:`mclose`,children:`]`})]})})]}),` is the length of the two longest edges from `,(0,o.jsxs)(c.span,{className:`katex`,children:[(0,o.jsx)(c.span,{className:`katex-mathml`,children:(0,o.jsx)(c.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,o.jsxs)(c.semantics,{children:[(0,o.jsx)(c.mrow,{children:(0,o.jsx)(c.mi,{children:`v`})}),(0,o.jsx)(c.annotation,{encoding:`application/x-tex`,children:`v`})]})})}),(0,o.jsx)(c.span,{className:`katex-html`,"aria-hidden":`true`,children:(0,o.jsxs)(c.span,{className:`base`,children:[(0,o.jsx)(c.span,{className:`strut`,style:{height:`0.4306em`}}),(0,o.jsx)(c.span,{className:`mord mathnormal`,style:{marginRight:`0.03588em`},children:`v`})]})})]}),`. The extra factor of 1/2 is because we have double-counted each edge, once for each of its endpoints. If `,(0,o.jsxs)(c.span,{className:`katex`,children:[(0,o.jsx)(c.span,{className:`katex-mathml`,children:(0,o.jsx)(c.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,o.jsxs)(c.semantics,{children:[(0,o.jsxs)(c.mrow,{children:[(0,o.jsxs)(c.mrow,{children:[(0,o.jsx)(c.mi,{children:`c`}),(0,o.jsx)(c.mi,{children:`u`}),(0,o.jsx)(c.mi,{children:`r`}),(0,o.jsx)(c.mi,{children:`B`}),(0,o.jsx)(c.mi,{children:`e`}),(0,o.jsx)(c.mi,{children:`s`}),(0,o.jsx)(c.mi,{children:`t`})]}),(0,o.jsx)(c.mo,{children:`−`}),(0,o.jsxs)(c.mrow,{children:[(0,o.jsx)(c.mi,{children:`c`}),(0,o.jsx)(c.mi,{children:`u`}),(0,o.jsx)(c.mi,{children:`r`}),(0,o.jsx)(c.mi,{children:`L`}),(0,o.jsx)(c.mi,{children:`e`}),(0,o.jsx)(c.mi,{children:`n`})]})]}),(0,o.jsx)(c.annotation,{encoding:`application/x-tex`,children:`\\mathit{curBest} - \\mathit{curLen}`})]})})}),(0,o.jsxs)(c.span,{className:`katex-html`,"aria-hidden":`true`,children:[(0,o.jsxs)(c.span,{className:`base`,children:[(0,o.jsx)(c.span,{className:`strut`,style:{height:`0.7667em`,verticalAlign:`-0.0833em`}}),(0,o.jsx)(c.span,{className:`mord`,children:(0,o.jsx)(c.span,{className:`mord mathit`,children:`curBest`})}),(0,o.jsx)(c.span,{className:`mspace`,style:{marginRight:`0.2222em`}}),(0,o.jsx)(c.span,{className:`mbin`,children:`−`}),(0,o.jsx)(c.span,{className:`mspace`,style:{marginRight:`0.2222em`}})]}),(0,o.jsxs)(c.span,{className:`base`,children:[(0,o.jsx)(c.span,{className:`strut`,style:{height:`0.6833em`}}),(0,o.jsx)(c.span,{className:`mord`,children:(0,o.jsx)(c.span,{className:`mord mathit`,children:`curLen`})})]})]})]}),` is larger than this upper bound, then we can never beat the current best, so we can prune this branch. This is paired with another trick: sort the neighbors by descending edge length, so that we are more likely to find a good path early on.`]}),`
`,(0,o.jsx)(c.pre,{children:(0,o.jsx)(c.code,{className:`language-R`,children:`for (k in order(e_len, decreasing = TRUE)) {
  u <- el[k, 1]
  v <- el[k, 2]
  w <- e_len[k]
  neighbors[[u]] <- c(neighbors[[u]], v)
  edge_lens[[u]] <- c(edge_lens[[u]], w)
  neighbors[[v]] <- c(neighbors[[v]], u)
  edge_lens[[v]] <- c(edge_lens[[v]], w)
}

# ...

best1 <- rep(-Inf, n)
best2 <- rep(-Inf, n)
for (u in seq_len(n)) {
  best1[u] <- edge_lens[[u]][1]
  best2[u] <- if (length(edge_lens[[u]]) > 1) sum(edge_lens[[u]][1:2]) else 0
}

# ...
while (st$size() > 0) {
  # ...
  remaining_upper_bound <- best1[v] +
    best1[end_id] +
    sum(best2[!visited & seq_along(best2) != v & seq_along(best2) != end_id])
  if (new_len + remaining_upper_bound <= max_len) {
    next
  }
  visited[v] <- TRUE
  st$push(list(vertex = v, neighbor = 1, len = new_len))
}
`})}),`
`,(0,o.jsx)(c.p,{children:`How many paths did this prune? From 1,262,816 to 40,806, a 97% reduction! It reduces the runtime to 3s, another 13x improvement.`}),`
`,(0,o.jsxs)(c.p,{children:[`There's another optimization I `,(0,o.jsx)(c.em,{children:`could`}),` consider, which is memoization of the longest path from the start node to each node with a given visited set; then, if I encounter the same node and visited set again but with a shorter path (for example, because I already tried `,(0,o.jsx)(c.code,{children:`A,B,C,D`}),` and now trying `,(0,o.jsx)(c.code,{children:`A,C,B,D`}),`), I can immediately prune. However, because again, R is extremely bad with hash tables, I really didn't bother.`]}),(0,o.jsx)(i,{frontMatter:s})]})}function l(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}export{s as n,l as t};