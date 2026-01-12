import{u as c,j as s}from"./index-DEJgW3cN.js";import{F as t,a as m}from"./_components-C_Mh6GSJ.js";import{C as o}from"./index-BvT_Nn_v.js";const r={description:"Advent of Code 2023 - Day 18: Lavaduct Lagoon. Written in R.",tags:["Coordinate compression","Geometry"],year:2023,day:18,title:"AoC 2023 D18: Lavaduct Lagoon"};function i(l){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...c(),...l.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.h1,{children:"AoC 2023 D18: Lavaduct Lagoon"}),`
`,`
`,s.jsx(t,{frontMatter:r}),`
`,`
`,`
`,s.jsxs(e.p,{children:["This is just a reprise of ",s.jsx(e.a,{href:"/notes/aoc/2023/10",children:"day 10"}),", but with a much larger grid. Again we want to find the number of grid cells in the polygon, but this time ",s.jsx(e.em,{children:"including"})," edge cells."]}),`
`,s.jsxs(e.p,{children:["The most naïve way to do this is to physically do the grid walking, mark each cell as a boundary, and then do a flood fill on the outside. This works for part 1, but for part 2, the coordinates are too big to physically represent the grid. What ",s.jsx(e.em,{children:"didn't"})," change, though, is the number of coordinates, so we can still do the same thing but with coordinate compression. This preserves the relative positions of the coordinates, just that now the distance between them is not the same as their index difference."]}),`
`,s.jsx(e.p,{children:"However, there's a pitfall: we can't just compress the coordinates to the unique values, because then we lose information about adjacency. Consider the following shape:"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-plain",children:`# # # # # # #
#           #
#   # # #   #
# # #   # # #
`})}),`
`,s.jsx(e.p,{children:"If we do a naïve coordinate compression, we get:"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-plain",children:`# # # #
# # # #
# # # #
`})}),`
`,s.jsxs(e.p,{children:[`There's no internal cell left! To fix this, we have to add "buffer" coordinates between each pair of coordinates. This means if we have coordinates `,s.jsx(e.code,{children:"x1"})," and ",s.jsx(e.code,{children:"x2"})," and no other coordinates between them, then they are compressed to ",s.jsx(e.code,{children:"x1'"})," and ",s.jsx(e.code,{children:"x1' + 2"})," (not ",s.jsx(e.code,{children:"x1' + 1"}),"). ",s.jsx(e.code,{children:"x1' + 1"})," is the buffer coordinate, which is mapped from ",s.jsx(e.code,{children:"x1 + 1"}),"."]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-R",children:`r_compressor <- setNames(seq_len(num_r) * 2, as.character(all_r))
c_compressor <- setNames(seq_len(num_c) * 2, as.character(all_c))
r_decompressor <- rep(1, num_r * 2 + 1)
c_decompressor <- rep(1, num_c * 2 + 1)
r_decompressor[1] <- min_r - 1
r_decompressor[seq_len(num_r) * 2] <- all_r
r_decompressor[seq_len(num_r) * 2 + 1] <- all_r + 1
c_decompressor[1] <- min_c - 1
c_decompressor[seq_len(num_c) * 2] <- all_c
c_decompressor[seq_len(num_c) * 2 + 1] <- all_c + 1
`})}),`
`,s.jsxs(e.p,{children:["Now we can build the grid as ",s.jsx(e.code,{children:"matrix(FALSE, nrow = num_r * 2 + 1, ncol = num_c * 2 + 1)"}),". Each cell represents its top-left corner's coordinate, so for example column 1 represents the x coordinate ",s.jsx(e.code,{children:"min_c - 1"}),", column 2 represents the x coordinate ",s.jsx(e.code,{children:"all_c[1]"})," (",s.jsx(e.code,{children:"min_c"}),"), column 3 represents the x coordinate ",s.jsx(e.code,{children:"all_c[1] + 1"}),", column 4 represents the x coordinate ",s.jsx(e.code,{children:"all_c[2]"}),", and so on."]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-R",children:`cur_r <- 1
cur_c <- 1
for (i in seq_along(dirs)) {
  dir <- dirs[i]
  dist <- dists[i]
  dr <- dir_to_diff[[dir]][1] * dist
  dc <- dir_to_diff[[dir]][2] * dist
  mat_r <- r_compressor[as.character(cur_r)]
  mat_c <- c_compressor[as.character(cur_c)]
  mat_r_2 <- r_compressor[as.character(cur_r + dr)]
  mat_c_2 <- c_compressor[as.character(cur_c + dc)]
  mat[mat_r:mat_r_2, mat_c:mat_c_2] <- TRUE
  cur_r <- cur_r + dr
  cur_c <- cur_c + dc
}
`})}),`
`,s.jsxs(e.p,{children:["Now we can do a flood fill from the outside. Note that there may be certain cells in this matrix that have physical area 0 because the buffer coordinate coincides with the next coordinate, but that's okay. It just means we have to keep a separate ",s.jsx(e.code,{children:"visited"})," matrix instead of relying on whether ",s.jsx(e.code,{children:"outside"})," is positive. The area of a single cell ",s.jsx(e.code,{children:"(r, c)"})," is ",s.jsx(e.code,{children:"(r_decompressor[r + 1] - r_decompressor[r]) * (c_decompressor[c + 1] - c_decompressor[c])"}),"."]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-R",children:`outside <- matrix(0, nrow = nrow(mat), ncol = ncol(mat))
q <- queue()
q$push(c(1, 1))
visited <- matrix(FALSE, nrow = nrow(mat), ncol = ncol(mat))
while (q$size() > 0) {
  pos <- q$pop()
  for (dir in c("R", "L", "U", "D")) {
    next_pos <- pos + dir_to_diff[[dir]]
    r <- next_pos[1]
    c <- next_pos[2]
    if (
      r >= 1 &&
        r <= nrow(mat) &&
        c >= 1 &&
        c <= ncol(mat) &&
        !mat[r, c] &&
        !visited[r, c]
    ) {
      r_decompressed <- r_decompressor[[r]]
      c_decompressed <- c_decompressor[[c]]
      next_r <- if (r == nrow(mat)) max_r + 2 else r_decompressor[[r + 1]]
      next_c <- if (c == ncol(mat)) max_c + 2 else c_decompressor[[c + 1]]
      area <- (next_r - r_decompressed) * (next_c - c_decompressed)
      outside[r, c] <- area
      visited[r, c] <- TRUE
      q$push(next_pos)
    }
  }
}
`})}),`
`,s.jsxs(e.p,{children:["Finally we can sum up these outside cells and subtract from the total area. The total area is ",s.jsx(e.code,{children:"(max_r - min_r + 3) * (max_c - min_c + 3)"})," because we added a buffer of 1 on all sides."]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-R",children:`total <- as.bigz(max_r - min_r + 3) * as.bigz(max_c - min_c + 3)
outside <- as.bigz(outside)
cat(as.character(total - sum(outside)), "\\n")
`})}),`
`,s.jsxs(e.p,{children:["So much for the algorithmic solution. The smart solution is, again, to use the ",s.jsx(e.a,{href:"https://en.wikipedia.org/wiki/Shoelace_formula",children:"Shoelace formula"})," to compute the area of the polygon directly from the coordinates. This is much faster and doesn't build a physical grid at all. But again, like day 10, we need to adjust edge cells. This time, we wish to ",s.jsx(e.em,{children:"include"})," them."]}),`
`,s.jsx(o,{code:(a,d,h,p,j)=>{a.fillStyle="#39CAC480",a.beginPath(),a.moveTo(1*40,1*40),a.lineTo(8*40,1*40),a.lineTo(8*40,7*40),a.lineTo(5*40,7*40),a.lineTo(5*40,5*40),a.lineTo(7*40,5*40),a.lineTo(7*40,2*40),a.lineTo(2*40,2*40),a.lineTo(2*40,5*40),a.lineTo(4*40,5*40),a.lineTo(4*40,7*40),a.lineTo(1*40,7*40),a.closePath(),a.stroke(),a.fill(),a.strokeStyle="#80808060",a.beginPath();for(let n=.5;n<9.5;n++)a.moveTo(n*40,0),a.lineTo(n*40,8*40);for(let n=.5;n<8.5;n++)a.moveTo(0,n*40),a.lineTo(9*40,n*40);a.stroke(),a.fillStyle="#CA7D3980",a.beginPath(),a.moveTo(.5*40,.5*40),a.lineTo(8.5*40,.5*40),a.lineTo(8.5*40,7.5*40),a.lineTo(5*40,7.5*40),a.lineTo(5*40,7*40),a.lineTo(8*40,7*40),a.lineTo(8*40,1*40),a.lineTo(1*40,1*40),a.lineTo(1*40,7*40),a.lineTo(4*40,7*40),a.lineTo(4*40,7.5*40),a.lineTo(.5*40,7.5*40),a.fill(),a.beginPath(),a.moveTo(2*40,2*40),a.lineTo(7*40,2*40),a.lineTo(7*40,5*40),a.lineTo(5*40,5*40),a.lineTo(5*40,4.5*40),a.lineTo(6.5*40,4.5*40),a.lineTo(6.5*40,2.5*40),a.lineTo(2.5*40,2.5*40),a.lineTo(2.5*40,4.5*40),a.lineTo(4*40,4.5*40),a.lineTo(4*40,5*40),a.lineTo(2*40,5*40),a.fill(),a.fillRect(4*40,4.5*40,40,120)},width:360,height:320}),`
`,s.jsx(e.p,{children:"Again, most edges add an extra half cell. This time, the 8 convex corners add an extra 3/4 cell, while the 4 reflex corners add an extra 1/4 cell. So the area is:"}),`
`,s.jsx(e.span,{className:"katex-display",children:s.jsxs(e.span,{className:"katex",children:[s.jsx(e.span,{className:"katex-mathml",children:s.jsx(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:s.jsxs(e.semantics,{children:[s.jsxs(e.mrow,{children:[s.jsx(e.mi,{children:"N"}),s.jsx(e.mo,{children:"="}),s.jsx(e.mi,{children:"A"}),s.jsx(e.mo,{children:"+"}),s.jsxs(e.mfrac,{children:[s.jsx(e.mn,{children:"1"}),s.jsx(e.mn,{children:"2"})]}),s.jsx(e.mi,{children:"E"}),s.jsx(e.mo,{children:"+"}),s.jsx(e.mn,{children:"8"}),s.jsx(e.mo,{children:"⋅"}),s.jsxs(e.mfrac,{children:[s.jsx(e.mn,{children:"1"}),s.jsx(e.mn,{children:"4"})]}),s.jsx(e.mo,{children:"−"}),s.jsx(e.mn,{children:"4"}),s.jsx(e.mo,{children:"⋅"}),s.jsxs(e.mfrac,{children:[s.jsx(e.mn,{children:"1"}),s.jsx(e.mn,{children:"4"})]}),s.jsx(e.mo,{children:"="}),s.jsx(e.mi,{children:"A"}),s.jsx(e.mo,{children:"+"}),s.jsxs(e.mfrac,{children:[s.jsx(e.mn,{children:"1"}),s.jsx(e.mn,{children:"2"})]}),s.jsx(e.mi,{children:"E"}),s.jsx(e.mo,{children:"+"}),s.jsx(e.mn,{children:"1"})]}),s.jsx(e.annotation,{encoding:"application/x-tex",children:"N = A + \\frac{1}{2} E + 8\\cdot \\frac{1}{4} - 4 \\cdot \\frac{1}{4} = A + \\frac{1}{2} E + 1"})]})})}),s.jsxs(e.span,{className:"katex-html","aria-hidden":"true",children:[s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"0.6833em"}}),s.jsx(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),s.jsx(e.span,{className:"mrel",children:"="}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),s.jsx(e.span,{className:"mord mathnormal",children:"A"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),s.jsx(e.span,{className:"mbin",children:"+"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"2.0074em",verticalAlign:"-0.686em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mopen nulldelimiter"}),s.jsx(e.span,{className:"mfrac",children:s.jsxs(e.span,{className:"vlist-t vlist-t2",children:[s.jsxs(e.span,{className:"vlist-r",children:[s.jsxs(e.span,{className:"vlist",style:{height:"1.3214em"},children:[s.jsxs(e.span,{style:{top:"-2.314em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"3em"}}),s.jsx(e.span,{className:"mord",children:s.jsx(e.span,{className:"mord",children:"2"})})]}),s.jsxs(e.span,{style:{top:"-3.23em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"3em"}}),s.jsx(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),s.jsxs(e.span,{style:{top:"-3.677em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"3em"}}),s.jsx(e.span,{className:"mord",children:s.jsx(e.span,{className:"mord",children:"1"})})]})]}),s.jsx(e.span,{className:"vlist-s",children:"​"})]}),s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.686em"},children:s.jsx(e.span,{})})})]})}),s.jsx(e.span,{className:"mclose nulldelimiter"})]}),s.jsx(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),s.jsx(e.span,{className:"mbin",children:"+"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"0.6444em"}}),s.jsx(e.span,{className:"mord",children:"8"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),s.jsx(e.span,{className:"mbin",children:"⋅"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"2.0074em",verticalAlign:"-0.686em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mopen nulldelimiter"}),s.jsx(e.span,{className:"mfrac",children:s.jsxs(e.span,{className:"vlist-t vlist-t2",children:[s.jsxs(e.span,{className:"vlist-r",children:[s.jsxs(e.span,{className:"vlist",style:{height:"1.3214em"},children:[s.jsxs(e.span,{style:{top:"-2.314em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"3em"}}),s.jsx(e.span,{className:"mord",children:s.jsx(e.span,{className:"mord",children:"4"})})]}),s.jsxs(e.span,{style:{top:"-3.23em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"3em"}}),s.jsx(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),s.jsxs(e.span,{style:{top:"-3.677em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"3em"}}),s.jsx(e.span,{className:"mord",children:s.jsx(e.span,{className:"mord",children:"1"})})]})]}),s.jsx(e.span,{className:"vlist-s",children:"​"})]}),s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.686em"},children:s.jsx(e.span,{})})})]})}),s.jsx(e.span,{className:"mclose nulldelimiter"})]}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),s.jsx(e.span,{className:"mbin",children:"−"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"0.6444em"}}),s.jsx(e.span,{className:"mord",children:"4"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),s.jsx(e.span,{className:"mbin",children:"⋅"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"2.0074em",verticalAlign:"-0.686em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mopen nulldelimiter"}),s.jsx(e.span,{className:"mfrac",children:s.jsxs(e.span,{className:"vlist-t vlist-t2",children:[s.jsxs(e.span,{className:"vlist-r",children:[s.jsxs(e.span,{className:"vlist",style:{height:"1.3214em"},children:[s.jsxs(e.span,{style:{top:"-2.314em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"3em"}}),s.jsx(e.span,{className:"mord",children:s.jsx(e.span,{className:"mord",children:"4"})})]}),s.jsxs(e.span,{style:{top:"-3.23em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"3em"}}),s.jsx(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),s.jsxs(e.span,{style:{top:"-3.677em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"3em"}}),s.jsx(e.span,{className:"mord",children:s.jsx(e.span,{className:"mord",children:"1"})})]})]}),s.jsx(e.span,{className:"vlist-s",children:"​"})]}),s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.686em"},children:s.jsx(e.span,{})})})]})}),s.jsx(e.span,{className:"mclose nulldelimiter"})]}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),s.jsx(e.span,{className:"mrel",children:"="}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),s.jsx(e.span,{className:"mord mathnormal",children:"A"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),s.jsx(e.span,{className:"mbin",children:"+"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"2.0074em",verticalAlign:"-0.686em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mopen nulldelimiter"}),s.jsx(e.span,{className:"mfrac",children:s.jsxs(e.span,{className:"vlist-t vlist-t2",children:[s.jsxs(e.span,{className:"vlist-r",children:[s.jsxs(e.span,{className:"vlist",style:{height:"1.3214em"},children:[s.jsxs(e.span,{style:{top:"-2.314em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"3em"}}),s.jsx(e.span,{className:"mord",children:s.jsx(e.span,{className:"mord",children:"2"})})]}),s.jsxs(e.span,{style:{top:"-3.23em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"3em"}}),s.jsx(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),s.jsxs(e.span,{style:{top:"-3.677em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"3em"}}),s.jsx(e.span,{className:"mord",children:s.jsx(e.span,{className:"mord",children:"1"})})]})]}),s.jsx(e.span,{className:"vlist-s",children:"​"})]}),s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.686em"},children:s.jsx(e.span,{})})})]})}),s.jsx(e.span,{className:"mclose nulldelimiter"})]}),s.jsx(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),s.jsx(e.span,{className:"mbin",children:"+"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"0.6444em"}}),s.jsx(e.span,{className:"mord",children:"1"})]})]})]})}),`
`,s.jsx(m,{frontMatter:r})]})}function u(l={}){const{wrapper:e}={...c(),...l.components};return e?s.jsx(e,{...l,children:s.jsx(i,{...l})}):i(l)}export{u as default,r as frontMatter};
