import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{n,t as r}from"./_components-DcdEf7Vf.js";var i=e();function a(e){let a={a:`a`,annotation:`annotation`,code:`code`,h1:`h1`,h2:`h2`,img:`img`,li:`li`,math:`math`,mi:`mi`,mn:`mn`,mo:`mo`,mrow:`mrow`,p:`p`,pre:`pre`,semantics:`semantics`,span:`span`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2023 - Day 20`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Pulse Propagation`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(a.p,{children:[`I'm using `,(0,i.jsx)(a.a,{href:`https://r.igraph.org/index.html`,children:(0,i.jsx)(a.code,{children:`igraph`})}),` to represent the circuit graph. Each node contains:`]}),`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:`type`}),`: `,(0,i.jsx)(a.code,{children:`%`}),`, `,(0,i.jsx)(a.code,{children:`&`}),`, `,(0,i.jsx)(a.code,{children:`broadcaster`}),`, or nothing (pure output)`]}),`
`,(0,i.jsx)(a.li,{children:(0,i.jsx)(a.code,{children:`label`})}),`
`,(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:`state`}),`: for `,(0,i.jsx)(a.code,{children:`%`}),`, a boolean that's `,(0,i.jsx)(a.code,{children:`FALSE`}),` for `,(0,i.jsx)(a.code,{children:`off`}),` and `,(0,i.jsx)(a.code,{children:`TRUE`}),` for `,(0,i.jsx)(a.code,{children:`on`}),`. For `,(0,i.jsx)(a.code,{children:`&`}),`, a bitset of the remembered inputs; starting as `,(0,i.jsx)(a.code,{children:`0`}),` for all inputs low.`]}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`Now I need to implement pushing the button. I basically use a BFS approach, keeping a queue of pulses. Each pulse is the source and target nodes and its level. Each time I pop a pulse, I deliver it to the target node and update its state and generate new pulses as needed. I keep track of the number of low and high pulses generated.`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-R`,children:`push_btn <- function(graph, broadcaster) {
  nbrs <- igraph::neighbors(graph, broadcaster, "out")
  q <-
    queue(items = lapply(nbrs, function(x) make_pulse(x, FALSE, broadcaster)))
  # Include 1 from the button to the broadcaster
  low_pulses <- length(nbrs) + 1
  high_pulses <- 0
  while (q$size() > 0) {
    pulse <- q$pop()
    node_type <- igraph::vertex_attr(graph, "type", pulse$node)
    out_level <- NULL
    # ...
    if (!is.null(out_level)) {
      nbrs <- igraph::neighbors(graph, pulse$node, "out")
      for (nbr in nbrs) {
        new_pulse <- make_pulse(nbr, out_level, pulse$node)
        q$push(new_pulse)
      }
      if (out_level) {
        high_pulses <- high_pulses + length(nbrs)
      } else {
        low_pulses <- low_pulses + length(nbrs)
      }
    }
  }
  list(graph = graph, pulses = c(low_pulses, high_pulses))
}
`})}),`
`,(0,i.jsx)(a.p,{children:`Flip-flops flip their state on low pulse:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-R`,children:`if (node_type == "%") {
  if (pulse$level == TRUE) {
    next
  }
  cur_st <- igraph::vertex_attr(graph, "state", pulse$node)
  cur_st <- !cur_st
  graph <- igraph::set_vertex_attr(graph, "state", pulse$node, cur_st)
  out_level <- cur_st
}
`})}),`
`,(0,i.jsxs)(a.p,{children:[`Conjunctions update their memory and output low only if all memory is high (i.e., `,(0,i.jsx)(a.code,{children:`1 << n - 1`}),`):`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-R`,children:`if (node_type == "&") {
  cur_st <- igraph::vertex_attr(graph, "state", pulse$node)
  node_inputs <- igraph::neighbors(graph, pulse$node, "in")
  from_ind <- match(pulse$from, node_inputs)
  if (pulse$level == TRUE) {
    cur_st <- bitwOr(cur_st, bitwShiftL(1L, from_ind - 1))
  } else {
    cur_st <- bitwAnd(cur_st, bitwNot(bitwShiftL(1L, from_ind - 1)))
  }
  graph <- igraph::set_vertex_attr(graph, "state", pulse$node, cur_st)
  out_level <- cur_st != bitwShiftL(1L, length(node_inputs)) - 1
}
`})}),`
`,(0,i.jsx)(a.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(a.p,{children:[`Another period finding problem, like `,(0,i.jsx)(a.a,{href:`/notes/aoc/2023/8/`,children:`day 8`}),`. However, unlike day 8, it's not immediately clear how the cycle can be decomposed into several independent subcycles, and just simulating the whole thing turned out to never finish. However, plotting the graph reveals important structural information:`]}),`
`,(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{src:`https://github.com/Josh-Cena/aoc2023/blob/master/src/day20.png?raw=true`,alt:`Graph visualization`})}),`
`,(0,i.jsxs)(a.p,{children:[`The graph starts at the broadcaster, going to four different clusters of flip-flops. Each cluster is eventually connected to a single conjunction (`,(0,i.jsx)(a.code,{children:`zp`}),`, `,(0,i.jsx)(a.code,{children:`nx`}),`, `,(0,i.jsx)(a.code,{children:`dj`}),`, `,(0,i.jsx)(a.code,{children:`bz`}),`), which then go into four other conjunctions (`,(0,i.jsx)(a.code,{children:`bh`}),`, `,(0,i.jsx)(a.code,{children:`vd`}),`, `,(0,i.jsx)(a.code,{children:`ns`}),`, `,(0,i.jsx)(a.code,{children:`dl`}),`), which then go into a final conjunction (`,(0,i.jsx)(a.code,{children:`zh`}),`) before sending to `,(0,i.jsx)(a.code,{children:`rx`}),`. Therefore, if `,(0,i.jsx)(a.code,{children:`rx`}),` receives a single low pulse, that means `,(0,i.jsx)(a.code,{children:`zh`}),` received a high pulse from every input. Therefore, I just need to repeatedly push buttons and check when each input to `,(0,i.jsx)(a.code,{children:`zh`}),` sent a high pulse.`]}),`
`,(0,i.jsxs)(a.p,{children:[`My `,(0,i.jsx)(a.code,{children:`push_btn`}),` now takes an optional `,(0,i.jsx)(a.code,{children:`track_inputs`}),` that takes a node to track for its input pulses. Each time I send a pulse to `,(0,i.jsx)(a.code,{children:`track_inputs`}),`, I record the source node and the level of the pulse.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-R`,children:`push_btn <- function(graph, broadcaster, track_inputs = NULL) {
  # ...
  inputs <- list()
  while (q$size() > 0) {
    # ...
    if (!is.null(out_level)) {
      nbrs <- igraph::neighbors(graph, pulse$node, "out")
      for (nbr in nbrs) {
        new_pulse <- make_pulse(nbr, out_level, pulse$node)
        q$push(new_pulse)
        if (!is.null(track_inputs) && track_inputs == nbr) {
          key <- igraph::vertex_attr(graph, "label", pulse$node)
          if (!(key %in% names(inputs))) {
            inputs[[key]] <- c()
          }
          inputs[[key]] <- c(inputs[[key]], out_level)
        }
      }
      if (out_level) {
        high_pulses <- high_pulses + length(nbrs)
      } else {
        low_pulses <- low_pulses + length(nbrs)
      }
    }
  }
  list(graph = graph, pulses = c(low_pulses, high_pulses), inputs = inputs)
}
`})}),`
`,(0,i.jsxs)(a.p,{children:[`Then I record the cycle length for each input to `,(0,i.jsx)(a.code,{children:`zh`}),`.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-R`,children:`first_time_single_high <- list()
i <- 1
repeat {
  result <- push_btn(graph, broadcaster, rx_parent)
  graph <- result$graph
  inputs <- result$inputs
  for (p in rx_grandparents) {
    key <- igraph::vertex_attr(graph, "label", p)
    if (sum(inputs[[key]]) == 1) {
      if (!(key %in% names(first_time_single_high))) {
        first_time_single_high[[key]] <- as.bigz(i)
      }
    }
  }
  if (length(first_time_single_high) == length(rx_grandparents)) {
    break
  }
  i <- i + 1
}
`})}),`
`,(0,i.jsx)(a.p,{children:`Finally I just need to find the LCM of these cycle lengths.`}),`
`,(0,i.jsxs)(a.p,{children:[`Is this completely safe? Probably not. If I see a single high pulse from an input to `,(0,i.jsx)(a.code,{children:`zh`}),` to `,(0,i.jsxs)(a.span,{className:`katex`,children:[(0,i.jsx)(a.span,{className:`katex-mathml`,children:(0,i.jsx)(a.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,i.jsxs)(a.semantics,{children:[(0,i.jsx)(a.mrow,{children:(0,i.jsx)(a.mi,{children:`t`})}),(0,i.jsx)(a.annotation,{encoding:`application/x-tex`,children:`t`})]})})}),(0,i.jsx)(a.span,{className:`katex-html`,"aria-hidden":`true`,children:(0,i.jsxs)(a.span,{className:`base`,children:[(0,i.jsx)(a.span,{className:`strut`,style:{height:`0.6151em`}}),(0,i.jsx)(a.span,{className:`mord mathnormal`,children:`t`})]})})]}),`, that does not guarantee that a high pulse comes in every `,(0,i.jsxs)(a.span,{className:`katex`,children:[(0,i.jsx)(a.span,{className:`katex-mathml`,children:(0,i.jsx)(a.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,i.jsxs)(a.semantics,{children:[(0,i.jsxs)(a.mrow,{children:[(0,i.jsx)(a.mi,{children:`k`}),(0,i.jsx)(a.mi,{children:`t`})]}),(0,i.jsx)(a.annotation,{encoding:`application/x-tex`,children:`kt`})]})})}),(0,i.jsx)(a.span,{className:`katex-html`,"aria-hidden":`true`,children:(0,i.jsxs)(a.span,{className:`base`,children:[(0,i.jsx)(a.span,{className:`strut`,style:{height:`0.6944em`}}),(0,i.jsx)(a.span,{className:`mord mathnormal`,style:{marginRight:`0.03148em`},children:`k`}),(0,i.jsx)(a.span,{className:`mord mathnormal`,children:`t`})]})})]}),`, which requires the subcircuit to be completely reset to the default state at time `,(0,i.jsxs)(a.span,{className:`katex`,children:[(0,i.jsx)(a.span,{className:`katex-mathml`,children:(0,i.jsx)(a.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,i.jsxs)(a.semantics,{children:[(0,i.jsxs)(a.mrow,{children:[(0,i.jsx)(a.mi,{children:`t`}),(0,i.jsx)(a.mo,{children:`+`}),(0,i.jsx)(a.mn,{children:`1`})]}),(0,i.jsx)(a.annotation,{encoding:`application/x-tex`,children:`t+1`})]})})}),(0,i.jsxs)(a.span,{className:`katex-html`,"aria-hidden":`true`,children:[(0,i.jsxs)(a.span,{className:`base`,children:[(0,i.jsx)(a.span,{className:`strut`,style:{height:`0.6984em`,verticalAlign:`-0.0833em`}}),(0,i.jsx)(a.span,{className:`mord mathnormal`,children:`t`}),(0,i.jsx)(a.span,{className:`mspace`,style:{marginRight:`0.2222em`}}),(0,i.jsx)(a.span,{className:`mbin`,children:`+`}),(0,i.jsx)(a.span,{className:`mspace`,style:{marginRight:`0.2222em`}})]}),(0,i.jsxs)(a.span,{className:`base`,children:[(0,i.jsx)(a.span,{className:`strut`,style:{height:`0.6444em`}}),(0,i.jsx)(a.span,{className:`mord`,children:`1`})]})]})]}),`. This probably has something to do with the structure of each subcircuit—probably it's a modular counter, and a high input is sent when all flip-flops are `,(0,i.jsx)(a.code,{children:`on`}),`? I didn't investigate this further, because the approach above already works.`]}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`BFS/DFS`,`Puzzle`,`Manual inspection`,`Period finding`],title:`Advent of Code 2023 - Day 20: Pulse Propagation`,description:`Advent of Code 2023 - Day 20: Pulse Propagation, a problem that involves BFS/DFS, Puzzle, Manual inspection, and Period finding. Solution written in R, with detailed walkthrough and proof.`,year:2023,day:20};export{o as default};