import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import{n,t as r}from"./_components-BiUCgGl-.js";var i=e(),a={tags:[`Period finding`],title:`Advent of Code 2023 - Day 8: Haunted Wasteland`,description:`Advent of Code 2023 - Day 8: Haunted Wasteland, a problem that involves Period finding. Solution written in R, with detailed walkthrough and proof.`,year:2023,day:8};function o(e){let o={a:`a`,annotation:`annotation`,code:`code`,h1:`h1`,h2:`h2`,math:`math`,mi:`mi`,mrow:`mrow`,p:`p`,pre:`pre`,semantics:`semantics`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2023 - Day 8`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Haunted Wasteland`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(o.p,{children:[`I parse the input into a list of `,(0,i.jsx)(o.code,{children:`source`}),` and `,(0,i.jsx)(o.code,{children:`targets`}),` pairs, and then because each source can have exactly two targets, into a dataframe where each source is a row:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`map <- lapply(data[3:length(data)], function(l) {
  parts <- strsplit(l, " = ")[[1]]
  targets <- strsplit(substr(parts[2], 2, nchar(parts[2]) - 1), ", ")[[1]]
  list(source = parts[1], targets = targets)
})
map <- setNames(lapply(map, \`[[\`, "targets"), lapply(map, \`[[\`, "source"))
map <- t(data.frame(map))
`})}),`
`,(0,i.jsx)(o.p,{children:`Then it's just a straightforward simulation of going left/right. I use the counter to determine which instruction to follow.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`count <- 0
cur <- "AAA"
while (cur != "ZZZ") {
  if (instructions[count %% length(instructions) + 1] == "L") {
    cur <- map[cur, 1]
  } else {
    cur <- map[cur, 2]
  }
  count <- count + 1
}
cat(count, "\\n")
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`I upgrade `,(0,i.jsx)(o.code,{children:`cur`}),` from a single string to a vector of strings that start with `,(0,i.jsx)(o.code,{children:`A`}),`:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`cur <- row.names(map)[grepl("A$", row.names(map))]
`})}),`
`,(0,i.jsxs)(o.p,{children:[`Theoretically, I can run the same loop, until all the strings start with `,(0,i.jsx)(o.code,{children:`Z`}),`. This turned out to never finish though. The next observation is that the ghosts are all independent, so I can find the period of each ghost and then find the least common multiple of all the periods, similar to `,(0,i.jsx)(o.a,{href:`/notes/aoc/2019/12/`,children:`2019 day 12`}),`.`]}),`
`,(0,i.jsxs)(o.p,{children:[`But period finding is a bit complicated here. I can know when the ghost first gets to an end point, but: (a) it may be in the middle of the instruction list, so the state does not perfectly repeat afterwards (b) it may not take the same steps back to the starting point (c) it may reach multiple end points in one circle, yada yada, so I was very afraid with any solution. But it turned out that the most naïve version works: just record the first time `,(0,i.jsxs)(o.span,{className:`katex`,children:[(0,i.jsx)(o.span,{className:`katex-mathml`,children:(0,i.jsx)(o.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,i.jsxs)(o.semantics,{children:[(0,i.jsx)(o.mrow,{children:(0,i.jsx)(o.mi,{children:`t`})}),(0,i.jsx)(o.annotation,{encoding:`application/x-tex`,children:`t`})]})})}),(0,i.jsx)(o.span,{className:`katex-html`,"aria-hidden":`true`,children:(0,i.jsxs)(o.span,{className:`base`,children:[(0,i.jsx)(o.span,{className:`strut`,style:{height:`0.6151em`}}),(0,i.jsx)(o.span,{className:`mord mathnormal`,children:`t`})]})})]}),` each ghost reaches an end point, and then assume it always reaches that end point at `,(0,i.jsxs)(o.span,{className:`katex`,children:[(0,i.jsx)(o.span,{className:`katex-mathml`,children:(0,i.jsx)(o.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,i.jsxs)(o.semantics,{children:[(0,i.jsxs)(o.mrow,{children:[(0,i.jsx)(o.mi,{children:`k`}),(0,i.jsx)(o.mi,{children:`t`})]}),(0,i.jsx)(o.annotation,{encoding:`application/x-tex`,children:`kt`})]})})}),(0,i.jsx)(o.span,{className:`katex-html`,"aria-hidden":`true`,children:(0,i.jsxs)(o.span,{className:`base`,children:[(0,i.jsx)(o.span,{className:`strut`,style:{height:`0.6944em`}}),(0,i.jsx)(o.span,{className:`mord mathnormal`,style:{marginRight:`0.03148em`},children:`k`}),(0,i.jsx)(o.span,{className:`mord mathnormal`,children:`t`})]})})]}),`, and no other end points:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`loop_count <- rep(0, length(cur))
while (!all(loop_count > 0)) {
  if (instructions[count %% length(instructions) + 1] == "L") {
    cur <- map[cur, 1]
  } else {
    cur <- map[cur, 2]
  }
  count <- count + 1
  reached_end <- grepl("Z$", cur)
  loop_count[reached_end & loop_count[reached_end] == 0] <- count
}
print(loop_count)
cat(as.character(Reduce(lcm.bigz, loop_count)), "\\n")
`})}),`
`,(0,i.jsxs)(o.p,{children:[`(By the way, another disappointment: R does not have built-in 64 bit integers, so I had to use `,(0,i.jsx)(o.code,{children:`gmp`}),`. This year had so many problems with more than 32 bit integers, so it's quite inconvenient.)`]}),`
`,(0,i.jsx)(o.p,{children:`The bigger question is why does this work?? I printed the periods:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`14893 20513 22199 19951 17141 12083
`})}),`
`,(0,i.jsx)(o.p,{children:`It turns out that the instruction list is 281 steps long, and all these periods are odd multiples of 281. So doubt (a) is cleared because by the time the ghost reaches the end point, the instruction list is always fully cycled through. As for doubts (b) and (c), I printed the state every time a ghost reaches an end point, and it turns out that, indeed, the ghost always reaches the same end point at the same time, and never reaches any other end points. So I guess this solution is just by mercy of the input shape. But I don't want to devote any more time to a day 8 problem.`}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};