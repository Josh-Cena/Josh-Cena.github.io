import{u as r,j as e}from"./index-Cpgx5Zsn.js";import{F as i,a as l}from"./_components-AhTRSQH8.js";const t={description:"Advent of Code 2023 - Day 20: Pulse Propagation. Written in R.",tags:["BFS/DFS","Puzzle","Manual inspection","Period finding"],year:2023,day:20,title:"AoC 2023 D20: Pulse Propagation"};function a(s){const n={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"AoC 2023 D20: Pulse Propagation"}),`
`,`
`,e.jsx(i,{frontMatter:t}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:["I'm using ",e.jsx(n.a,{href:"https://r.igraph.org/index.html",children:e.jsx(n.code,{children:"igraph"})})," to represent the circuit graph. Each node contains:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type"}),": ",e.jsx(n.code,{children:"%"}),", ",e.jsx(n.code,{children:"&"}),", ",e.jsx(n.code,{children:"broadcaster"}),", or nothing (pure output)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"label"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"state"}),": for ",e.jsx(n.code,{children:"%"}),", a boolean that's ",e.jsx(n.code,{children:"FALSE"})," for ",e.jsx(n.code,{children:"off"})," and ",e.jsx(n.code,{children:"TRUE"})," for ",e.jsx(n.code,{children:"on"}),". For ",e.jsx(n.code,{children:"&"}),", a bitset of the remembered inputs; starting as ",e.jsx(n.code,{children:"0"})," for all inputs low."]}),`
`]}),`
`,e.jsx(n.p,{children:"Now I need to implement pushing the button. I basically use a BFS approach, keeping a queue of pulses. Each pulse is the source and target nodes and its level. Each time I pop a pulse, I deliver it to the target node and update its state and generate new pulses as needed. I keep track of the number of low and high pulses generated."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`push_btn <- function(graph, broadcaster) {
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
`,e.jsx(n.p,{children:"Flip-flops flip their state on low pulse:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`if (node_type == "%") {
  if (pulse$level == TRUE) {
    next
  }
  cur_st <- igraph::vertex_attr(graph, "state", pulse$node)
  cur_st <- !cur_st
  graph <- igraph::set_vertex_attr(graph, "state", pulse$node, cur_st)
  out_level <- cur_st
}
`})}),`
`,e.jsxs(n.p,{children:["Conjunctions update their memory and output low only if all memory is high (i.e., ",e.jsx(n.code,{children:"1 << n - 1"}),"):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`if (node_type == "&") {
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
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["Another period finding problem, like ",e.jsx(n.a,{href:"/notes/aoc/2023/8",children:"day 8"}),". However, unlike day 8, it's not immediately clear how the cycle can be decomposed into several independent subcycles, and just simulating the whole thing turned out to never finish. However, plotting the graph reveals important structural information:"]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"https://github.com/Josh-Cena/aoc2023/blob/master/src/day20.png?raw=true",alt:"Graph visualization"})}),`
`,e.jsxs(n.p,{children:["The graph starts at the broadcaster, going to four different clusters of flip-flops. Each cluster is eventually connected to a single conjunction (",e.jsx(n.code,{children:"zp"}),", ",e.jsx(n.code,{children:"nx"}),", ",e.jsx(n.code,{children:"dj"}),", ",e.jsx(n.code,{children:"bz"}),"), which then go into four other conjunctions (",e.jsx(n.code,{children:"bh"}),", ",e.jsx(n.code,{children:"vd"}),", ",e.jsx(n.code,{children:"ns"}),", ",e.jsx(n.code,{children:"dl"}),"), which then go into a final conjunction (",e.jsx(n.code,{children:"zh"}),") before sending to ",e.jsx(n.code,{children:"rx"}),". Therefore, if ",e.jsx(n.code,{children:"rx"})," receives a single low pulse, that means ",e.jsx(n.code,{children:"zh"})," received a high pulse from every input. Therefore, I just need to repeatedly push buttons and check when each input to ",e.jsx(n.code,{children:"zh"})," sent a high pulse."]}),`
`,e.jsxs(n.p,{children:["My ",e.jsx(n.code,{children:"push_btn"})," now takes an optional ",e.jsx(n.code,{children:"track_inputs"})," that takes a node to track for its input pulses. Each time I send a pulse to ",e.jsx(n.code,{children:"track_inputs"}),", I record the source node and the level of the pulse."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`push_btn <- function(graph, broadcaster, track_inputs = NULL) {
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
`,e.jsxs(n.p,{children:["Then I record the cycle length for each input to ",e.jsx(n.code,{children:"zh"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`first_time_single_high <- list()
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
`,e.jsx(n.p,{children:"Finally I just need to find the LCM of these cycle lengths."}),`
`,e.jsxs(n.p,{children:["Is this completely safe? Probably not. If I see a single high pulse from an input to ",e.jsx(n.code,{children:"zh"})," to ",e.jsxs(n.span,{className:"katex",children:[e.jsx(n.span,{className:"katex-mathml",children:e.jsx(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:e.jsxs(n.semantics,{children:[e.jsx(n.mrow,{children:e.jsx(n.mi,{children:"t"})}),e.jsx(n.annotation,{encoding:"application/x-tex",children:"t"})]})})}),e.jsx(n.span,{className:"katex-html","aria-hidden":"true",children:e.jsxs(n.span,{className:"base",children:[e.jsx(n.span,{className:"strut",style:{height:"0.6151em"}}),e.jsx(n.span,{className:"mord mathnormal",children:"t"})]})})]}),", that does not guarantee that a high pulse comes in every ",e.jsxs(n.span,{className:"katex",children:[e.jsx(n.span,{className:"katex-mathml",children:e.jsx(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:e.jsxs(n.semantics,{children:[e.jsxs(n.mrow,{children:[e.jsx(n.mi,{children:"k"}),e.jsx(n.mi,{children:"t"})]}),e.jsx(n.annotation,{encoding:"application/x-tex",children:"kt"})]})})}),e.jsx(n.span,{className:"katex-html","aria-hidden":"true",children:e.jsxs(n.span,{className:"base",children:[e.jsx(n.span,{className:"strut",style:{height:"0.6944em"}}),e.jsx(n.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),e.jsx(n.span,{className:"mord mathnormal",children:"t"})]})})]}),", which requires the subcircuit to be completely reset to the default state at time ",e.jsxs(n.span,{className:"katex",children:[e.jsx(n.span,{className:"katex-mathml",children:e.jsx(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:e.jsxs(n.semantics,{children:[e.jsxs(n.mrow,{children:[e.jsx(n.mi,{children:"t"}),e.jsx(n.mo,{children:"+"}),e.jsx(n.mn,{children:"1"})]}),e.jsx(n.annotation,{encoding:"application/x-tex",children:"t+1"})]})})}),e.jsxs(n.span,{className:"katex-html","aria-hidden":"true",children:[e.jsxs(n.span,{className:"base",children:[e.jsx(n.span,{className:"strut",style:{height:"0.6984em",verticalAlign:"-0.0833em"}}),e.jsx(n.span,{className:"mord mathnormal",children:"t"}),e.jsx(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),e.jsx(n.span,{className:"mbin",children:"+"}),e.jsx(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),e.jsxs(n.span,{className:"base",children:[e.jsx(n.span,{className:"strut",style:{height:"0.6444em"}}),e.jsx(n.span,{className:"mord",children:"1"})]})]})]}),". This probably has something to do with the structure of each subcircuit—probably it's a modular counter, and a high input is sent when all flip-flops are ",e.jsx(n.code,{children:"on"}),"? I didn't investigate this further, because the approach above already works."]}),`
`,e.jsx(l,{frontMatter:t})]})}function c(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{c as default,t as frontMatter};
