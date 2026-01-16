import{u as l,j as s}from"./index-Dbnp75iT.js";import{F as i,a as r}from"./_components-CrZycPda.js";const n={tags:["Geometry"],description:"Advent of Code 2023 - Day 13: Point of Incidence, a problem that involves Geometry. Solution written in R, with detailed walkthrough and proof.",year:2023,day:13,title:"Advent of Code 2023 - Day 13: Point of Incidence"};function t(a){const e={annotation:"annotation",code:"code",h1:"h1",h2:"h2",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",p:"p",pre:"pre",semantics:"semantics",span:"span",...l(),...a.components};return s.jsxs(s.Fragment,{children:[s.jsxs(e.h1,{children:["Advent of Code 2023 - Day 13",s.jsx(e.span,{className:"subtitle",children:"Point of Incidence"})]}),`
`,`
`,s.jsx(i,{frontMatter:n}),`
`,s.jsx(e.h2,{children:"Part 1"}),`
`,s.jsxs(e.p,{children:["If a shape is symmetric about a line ",s.jsxs(e.span,{className:"katex",children:[s.jsx(e.span,{className:"katex-mathml",children:s.jsx(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s.jsxs(e.semantics,{children:[s.jsxs(e.mrow,{children:[s.jsx(e.mi,{children:"x"}),s.jsx(e.mo,{children:"="}),s.jsxs(e.msub,{children:[s.jsx(e.mi,{children:"x"}),s.jsx(e.mn,{children:"0"})]})]}),s.jsx(e.annotation,{encoding:"application/x-tex",children:"x=x_0"})]})})}),s.jsxs(e.span,{className:"katex-html","aria-hidden":"true",children:[s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"0.4306em"}}),s.jsx(e.span,{className:"mord mathnormal",children:"x"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),s.jsx(e.span,{className:"mrel",children:"="}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord mathnormal",children:"x"}),s.jsx(e.span,{className:"msupsub",children:s.jsxs(e.span,{className:"vlist-t vlist-t2",children:[s.jsxs(e.span,{className:"vlist-r",children:[s.jsx(e.span,{className:"vlist",style:{height:"0.3011em"},children:s.jsxs(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"2.7em"}}),s.jsx(e.span,{className:"sizing reset-size6 size3 mtight",children:s.jsx(e.span,{className:"mord mtight",children:"0"})})]})}),s.jsx(e.span,{className:"vlist-s",children:"​"})]}),s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.15em"},children:s.jsx(e.span,{})})})]})})]})]})]})]}),", it means that for each point ",s.jsxs(e.span,{className:"katex",children:[s.jsx(e.span,{className:"katex-mathml",children:s.jsx(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s.jsxs(e.semantics,{children:[s.jsxs(e.mrow,{children:[s.jsx(e.mo,{stretchy:"false",children:"("}),s.jsx(e.mi,{children:"x"}),s.jsx(e.mo,{separator:"true",children:","}),s.jsx(e.mi,{children:"y"}),s.jsx(e.mo,{stretchy:"false",children:")"})]}),s.jsx(e.annotation,{encoding:"application/x-tex",children:"(x,y)"})]})})}),s.jsx(e.span,{className:"katex-html","aria-hidden":"true",children:s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),s.jsx(e.span,{className:"mopen",children:"("}),s.jsx(e.span,{className:"mord mathnormal",children:"x"}),s.jsx(e.span,{className:"mpunct",children:","}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),s.jsx(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),s.jsx(e.span,{className:"mclose",children:")"})]})})]})," on the shape, ",s.jsxs(e.span,{className:"katex",children:[s.jsx(e.span,{className:"katex-mathml",children:s.jsx(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s.jsxs(e.semantics,{children:[s.jsxs(e.mrow,{children:[s.jsx(e.mo,{stretchy:"false",children:"("}),s.jsx(e.mn,{children:"2"}),s.jsxs(e.msub,{children:[s.jsx(e.mi,{children:"x"}),s.jsx(e.mn,{children:"0"})]}),s.jsx(e.mo,{children:"−"}),s.jsx(e.mi,{children:"x"}),s.jsx(e.mo,{separator:"true",children:","}),s.jsx(e.mi,{children:"y"}),s.jsx(e.mo,{stretchy:"false",children:")"})]}),s.jsx(e.annotation,{encoding:"application/x-tex",children:"(2x_0-x,y)"})]})})}),s.jsxs(e.span,{className:"katex-html","aria-hidden":"true",children:[s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),s.jsx(e.span,{className:"mopen",children:"("}),s.jsx(e.span,{className:"mord",children:"2"}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord mathnormal",children:"x"}),s.jsx(e.span,{className:"msupsub",children:s.jsxs(e.span,{className:"vlist-t vlist-t2",children:[s.jsxs(e.span,{className:"vlist-r",children:[s.jsx(e.span,{className:"vlist",style:{height:"0.3011em"},children:s.jsxs(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"2.7em"}}),s.jsx(e.span,{className:"sizing reset-size6 size3 mtight",children:s.jsx(e.span,{className:"mord mtight",children:"0"})})]})}),s.jsx(e.span,{className:"vlist-s",children:"​"})]}),s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.15em"},children:s.jsx(e.span,{})})})]})})]}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),s.jsx(e.span,{className:"mbin",children:"−"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),s.jsx(e.span,{className:"mord mathnormal",children:"x"}),s.jsx(e.span,{className:"mpunct",children:","}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),s.jsx(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),s.jsx(e.span,{className:"mclose",children:")"})]})]})]})," is also on the shape. I cheated slightly: to do this in R, I just need to physically get the two halves of the shape, reflect one half, and check if they are equal. One half goes from ",s.jsx(e.code,{children:"1"})," to ",s.jsx(e.code,{children:"axis"}),", and the other half goes from ",s.jsx(e.code,{children:"axis+1"})," to ",s.jsx(e.code,{children:"n"})," (the axis of reflection sits between ",s.jsx(e.code,{children:"axis"})," and ",s.jsx(e.code,{children:"axis+1"}),"). However I need to make sure their sizes are the same—for example, if the left half is smaller than the right half, then the right half actually can't go up to ",s.jsx(e.code,{children:"n"}),", but only up to ",s.jsx(e.code,{children:"2*axis"}),". Similarly, if the right half is smaller than the left half, then the left half can't go down to ",s.jsx(e.code,{children:"1"}),", but only down to ",s.jsx(e.code,{children:"2*axis+1-n"})," (the reflection of ",s.jsx(e.code,{children:"n"})," about ",s.jsx(e.code,{children:"axis"}),")."]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-R",children:`is_symmetric_about <- function(data, axis, dir) {
  n <- if (dir == "row") nrow(data) else ncol(data)
  range_half <- axis:max(1, 2 * axis + 1 - n)
  range_other <- (axis + 1):min(n, 2 * axis)
  if (dir == "row") {
    reflected_half <- data[range_half, , drop = FALSE]
    other <- data[range_other, , drop = FALSE]
  } else {
    reflected_half <- data[, range_half, drop = FALSE]
    other <- data[, range_other, drop = FALSE]
  }
  all(other == reflected_half)
}
`})}),`
`,s.jsx(e.p,{children:"Then I can just iterate through all possible axes and check if the shape is symmetric about any of them."}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-R",children:`num_axes <- function(data) {
  total <- 0
  for (i in 1:(nrow(data) - 1)) {
    if (is_symmetric_about(data, i, "row")) {
      total <- total + 100 * i
    }
  }
  for (i in 1:(ncol(data) - 1)) {
    if (is_symmetric_about(data, i, "col")) {
      total <- total + i
    }
  }
  total
}
`})}),`
`,s.jsx(e.h2,{children:"Part 2"}),`
`,s.jsxs(e.p,{children:["Given my cheating implementation of ",s.jsx(e.code,{children:"is_symmetric_about"}),", I can easily find all mismatches between the two halves. Part 2 just requires to have at most 1 mismatch."]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-R",children:`is_symmetric_about <- function(data, axis, dir, tolerance) {
  # ...
  difference <- sum(other != reflected_half)
  difference == tolerance
}
`})}),`
`,s.jsxs(e.p,{children:["Now part 1 is a special case of part 2 with ",s.jsx(e.code,{children:"tolerance = 0"}),"."]}),`
`,s.jsx(r,{frontMatter:n})]})}function m(a={}){const{wrapper:e}={...l(),...a.components};return e?s.jsx(e,{...a,children:s.jsx(t,{...a})}):t(a)}export{m as default,n as frontMatter};
