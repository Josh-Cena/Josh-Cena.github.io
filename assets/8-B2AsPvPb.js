import{u as r,j as e}from"./index-BfdjqJwq.js";import{P as i,a as o}from"./_components-DIXLoOhb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const a={tags:["Period finding"],title:"Advent of Code 2023 - Day 8: Haunted Wasteland",description:"Advent of Code 2023 - Day 8: Haunted Wasteland, a problem that involves Period finding. Solution written in R, with detailed walkthrough and proof.",year:2023,day:8};function s(n){const t={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.h1,{children:["Advent of Code 2023 - Day 8",e.jsx(t.span,{className:"subtitle",children:"Haunted Wasteland"})]}),`
`,`
`,e.jsx(i,{frontMatter:a}),`
`,e.jsx(t.h2,{children:"Part 1"}),`
`,e.jsxs(t.p,{children:["I parse the input into a list of ",e.jsx(t.code,{children:"source"})," and ",e.jsx(t.code,{children:"targets"})," pairs, and then because each source can have exactly two targets, into a dataframe where each source is a row:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-R",children:`map <- lapply(data[3:length(data)], function(l) {
  parts <- strsplit(l, " = ")[[1]]
  targets <- strsplit(substr(parts[2], 2, nchar(parts[2]) - 1), ", ")[[1]]
  list(source = parts[1], targets = targets)
})
map <- setNames(lapply(map, \`[[\`, "targets"), lapply(map, \`[[\`, "source"))
map <- t(data.frame(map))
`})}),`
`,e.jsx(t.p,{children:"Then it's just a straightforward simulation of going left/right. I use the counter to determine which instruction to follow."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-R",children:`count <- 0
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
`,e.jsx(t.h2,{children:"Part 2"}),`
`,e.jsxs(t.p,{children:["I upgrade ",e.jsx(t.code,{children:"cur"})," from a single string to a vector of strings that start with ",e.jsx(t.code,{children:"A"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-R",children:`cur <- row.names(map)[grepl("A$", row.names(map))]
`})}),`
`,e.jsxs(t.p,{children:["Theoretically, I can run the same loop, until all the strings start with ",e.jsx(t.code,{children:"Z"}),". This turned out to never finish though. The next observation is that the ghosts are all independent, so I can find the period of each ghost and then find the least common multiple of all the periods, similar to ",e.jsx(t.a,{href:"/notes/aoc/2019/12/",children:"2019 day 12"}),"."]}),`
`,e.jsxs(t.p,{children:["But period finding is a bit complicated here. I can know when the ghost first gets to an end point, but: (a) it may be in the middle of the instruction list, so the state does not perfectly repeat afterwards (b) it may not take the same steps back to the starting point (c) it may reach multiple end points in one circle, yada yada, so I was very afraid with any solution. But it turned out that the most naïve version works: just record the first time ",e.jsxs(t.span,{className:"katex",children:[e.jsx(t.span,{className:"katex-mathml",children:e.jsx(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:e.jsxs(t.semantics,{children:[e.jsx(t.mrow,{children:e.jsx(t.mi,{children:"t"})}),e.jsx(t.annotation,{encoding:"application/x-tex",children:"t"})]})})}),e.jsx(t.span,{className:"katex-html","aria-hidden":"true",children:e.jsxs(t.span,{className:"base",children:[e.jsx(t.span,{className:"strut",style:{height:"0.6151em"}}),e.jsx(t.span,{className:"mord mathnormal",children:"t"})]})})]})," each ghost reaches an end point, and then assume it always reaches that end point at ",e.jsxs(t.span,{className:"katex",children:[e.jsx(t.span,{className:"katex-mathml",children:e.jsx(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:e.jsxs(t.semantics,{children:[e.jsxs(t.mrow,{children:[e.jsx(t.mi,{children:"k"}),e.jsx(t.mi,{children:"t"})]}),e.jsx(t.annotation,{encoding:"application/x-tex",children:"kt"})]})})}),e.jsx(t.span,{className:"katex-html","aria-hidden":"true",children:e.jsxs(t.span,{className:"base",children:[e.jsx(t.span,{className:"strut",style:{height:"0.6944em"}}),e.jsx(t.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),e.jsx(t.span,{className:"mord mathnormal",children:"t"})]})})]}),", and no other end points:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-R",children:`loop_count <- rep(0, length(cur))
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
`,e.jsxs(t.p,{children:["(By the way, another disappointment: R does not have built-in 64 bit integers, so I had to use ",e.jsx(t.code,{children:"gmp"}),". This year had so many problems with more than 32 bit integers, so it's quite inconvenient.)"]}),`
`,e.jsx(t.p,{children:"The bigger question is why does this work?? I printed the periods:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-plain",children:`14893 20513 22199 19951 17141 12083
`})}),`
`,e.jsx(t.p,{children:"It turns out that the instruction list is 281 steps long, and all these periods are odd multiples of 281. So doubt (a) is cleared because by the time the ghost reaches the end point, the instruction list is always fully cycled through. As for doubts (b) and (c), I printed the state every time a ghost reaches an end point, and it turns out that, indeed, the ghost always reaches the same end point at the same time, and never reaches any other end points. So I guess this solution is just by mercy of the input shape. But I don't want to devote any more time to a day 8 problem."}),`
`,e.jsx(o,{frontMatter:a})]})}function d(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{d as default,a as frontMatter};
