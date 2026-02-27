import{u as i,j as s}from"./index-DH3w8YvN.js";import{P as l,a as r}from"./_components-X9vtOlXN.js";import"./_commonjsHelpers-Cpj98o6Y.js";const a={tags:["Data structures"],title:"Advent of Code 2023 - Day 15: Lens Library",description:"Advent of Code 2023 - Day 15: Lens Library, a problem that involves Data structures. Solution written in R, with detailed walkthrough and proof.",year:2023,day:15};function t(n){const e={annotation:"annotation",code:"code",h1:"h1",h2:"h2",math:"math",mn:"mn",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",...i(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsxs(e.h1,{children:["Advent of Code 2023 - Day 15",s.jsx(e.span,{className:"subtitle",children:"Lens Library"})]}),`
`,`
`,s.jsx(l,{frontMatter:a}),`
`,s.jsx(e.h2,{children:"Part 1"}),`
`,s.jsxs(e.p,{children:["This is like Java string hashing, except that the base is 17 instead of 31, and the modulus is ",s.jsxs(e.span,{className:"katex",children:[s.jsx(e.span,{className:"katex-mathml",children:s.jsx(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s.jsxs(e.semantics,{children:[s.jsx(e.mrow,{children:s.jsxs(e.msup,{children:[s.jsx(e.mn,{children:"2"}),s.jsx(e.mn,{children:"8"})]})}),s.jsx(e.annotation,{encoding:"application/x-tex",children:"2^8"})]})})}),s.jsx(e.span,{className:"katex-html","aria-hidden":"true",children:s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"0.8141em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord",children:"2"}),s.jsx(e.span,{className:"msupsub",children:s.jsx(e.span,{className:"vlist-t",children:s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.8141em"},children:s.jsxs(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"2.7em"}}),s.jsx(e.span,{className:"sizing reset-size6 size3 mtight",children:s.jsx(e.span,{className:"mord mtight",children:"8"})})]})})})})})]})]})})]})," instead of ",s.jsxs(e.span,{className:"katex",children:[s.jsx(e.span,{className:"katex-mathml",children:s.jsx(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s.jsxs(e.semantics,{children:[s.jsx(e.mrow,{children:s.jsxs(e.msup,{children:[s.jsx(e.mn,{children:"2"}),s.jsx(e.mn,{children:"32"})]})}),s.jsx(e.annotation,{encoding:"application/x-tex",children:"2^{32}"})]})})}),s.jsx(e.span,{className:"katex-html","aria-hidden":"true",children:s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"0.8141em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord",children:"2"}),s.jsx(e.span,{className:"msupsub",children:s.jsx(e.span,{className:"vlist-t",children:s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.8141em"},children:s.jsxs(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"2.7em"}}),s.jsx(e.span,{className:"sizing reset-size6 size3 mtight",children:s.jsx(e.span,{className:"mord mtight",children:s.jsx(e.span,{className:"mord mtight",children:"32"})})})]})})})})})]})]})})]})," (since in part 2 we only have 256 bins). It's kind of fun because I didn't know how to get the ASCII code for a character; turned out you have to use ",s.jsx(e.code,{children:"charToRaw"})," and then ",s.jsx(e.code,{children:"as.integer"}),"."]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-R",children:`string_hash <- function(s) {
  codes <- as.integer(charToRaw(s))
  res <- 0
  for (ch in codes) {
    res <- ((res + ch) * 17) %% 256
  }
  res
}
`})}),`
`,s.jsx(e.h2,{children:"Part 2"}),`
`,s.jsx(e.p,{children:"It's just a really standard hashmap; absolutely nothing to see here. In fact it's simpler than real hashmaps because there's no rehashing. I faithfully implemented the spec, using a list of 256 lists."}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-R",children:`boxes <- replicate(256, list(), simplify = FALSE)
for (part in parts) {
  label <- gsub("[-=].*", "", part)
  label_hash <- string_hash(label)
  ind <- label_hash + 1
  op <- gsub("[^-=]", "", part)
  if (op == "=") {
    focal_length <- as.numeric(gsub(".*=", "", part))
    boxes[[ind]][[label]] <- focal_length
  } else {
    boxes[[ind]][[label]] <- NULL
  }
}
`})}),`
`,s.jsx(e.p,{children:"Now I can get the powers:"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-R",children:`powers <- sapply(seq_along(boxes), function(i) {
  box <- boxes[[i]]
  i * sum(unlist(box) * seq_along(box))
})
`})}),`
`,s.jsx(r,{frontMatter:a})]})}function m(n={}){const{wrapper:e}={...i(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(t,{...n})}):t(n)}export{m as default,a as frontMatter};
