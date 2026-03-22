import{t as e}from"./jsx-runtime-xty2or4m.js";import{n as t}from"./lib-zKnO7aGa.js";import{n,t as r}from"./_components-vrS0ov66.js";var i=e(),a={tags:[`Data structures`],title:`Advent of Code 2023 - Day 15: Lens Library`,description:`Advent of Code 2023 - Day 15: Lens Library, a problem that involves Data structures. Solution written in R, with detailed walkthrough and proof.`,year:2023,day:15};function o(e){let o={annotation:`annotation`,code:`code`,h1:`h1`,h2:`h2`,math:`math`,mn:`mn`,mrow:`mrow`,msup:`msup`,p:`p`,pre:`pre`,semantics:`semantics`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2023 - Day 15`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Lens Library`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(o.p,{children:[`This is like Java string hashing, except that the base is 17 instead of 31, and the modulus is `,(0,i.jsxs)(o.span,{className:`katex`,children:[(0,i.jsx)(o.span,{className:`katex-mathml`,children:(0,i.jsx)(o.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,i.jsxs)(o.semantics,{children:[(0,i.jsx)(o.mrow,{children:(0,i.jsxs)(o.msup,{children:[(0,i.jsx)(o.mn,{children:`2`}),(0,i.jsx)(o.mn,{children:`8`})]})}),(0,i.jsx)(o.annotation,{encoding:`application/x-tex`,children:`2^8`})]})})}),(0,i.jsx)(o.span,{className:`katex-html`,"aria-hidden":`true`,children:(0,i.jsxs)(o.span,{className:`base`,children:[(0,i.jsx)(o.span,{className:`strut`,style:{height:`0.8141em`}}),(0,i.jsxs)(o.span,{className:`mord`,children:[(0,i.jsx)(o.span,{className:`mord`,children:`2`}),(0,i.jsx)(o.span,{className:`msupsub`,children:(0,i.jsx)(o.span,{className:`vlist-t`,children:(0,i.jsx)(o.span,{className:`vlist-r`,children:(0,i.jsx)(o.span,{className:`vlist`,style:{height:`0.8141em`},children:(0,i.jsxs)(o.span,{style:{top:`-3.063em`,marginRight:`0.05em`},children:[(0,i.jsx)(o.span,{className:`pstrut`,style:{height:`2.7em`}}),(0,i.jsx)(o.span,{className:`sizing reset-size6 size3 mtight`,children:(0,i.jsx)(o.span,{className:`mord mtight`,children:`8`})})]})})})})})]})]})})]}),` instead of `,(0,i.jsxs)(o.span,{className:`katex`,children:[(0,i.jsx)(o.span,{className:`katex-mathml`,children:(0,i.jsx)(o.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,i.jsxs)(o.semantics,{children:[(0,i.jsx)(o.mrow,{children:(0,i.jsxs)(o.msup,{children:[(0,i.jsx)(o.mn,{children:`2`}),(0,i.jsx)(o.mn,{children:`32`})]})}),(0,i.jsx)(o.annotation,{encoding:`application/x-tex`,children:`2^{32}`})]})})}),(0,i.jsx)(o.span,{className:`katex-html`,"aria-hidden":`true`,children:(0,i.jsxs)(o.span,{className:`base`,children:[(0,i.jsx)(o.span,{className:`strut`,style:{height:`0.8141em`}}),(0,i.jsxs)(o.span,{className:`mord`,children:[(0,i.jsx)(o.span,{className:`mord`,children:`2`}),(0,i.jsx)(o.span,{className:`msupsub`,children:(0,i.jsx)(o.span,{className:`vlist-t`,children:(0,i.jsx)(o.span,{className:`vlist-r`,children:(0,i.jsx)(o.span,{className:`vlist`,style:{height:`0.8141em`},children:(0,i.jsxs)(o.span,{style:{top:`-3.063em`,marginRight:`0.05em`},children:[(0,i.jsx)(o.span,{className:`pstrut`,style:{height:`2.7em`}}),(0,i.jsx)(o.span,{className:`sizing reset-size6 size3 mtight`,children:(0,i.jsx)(o.span,{className:`mord mtight`,children:(0,i.jsx)(o.span,{className:`mord mtight`,children:`32`})})})]})})})})})]})]})})]}),` (since in part 2 we only have 256 bins). It's kind of fun because I didn't know how to get the ASCII code for a character; turned out you have to use `,(0,i.jsx)(o.code,{children:`charToRaw`}),` and then `,(0,i.jsx)(o.code,{children:`as.integer`}),`.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`string_hash <- function(s) {
  codes <- as.integer(charToRaw(s))
  res <- 0
  for (ch in codes) {
    res <- ((res + ch) * 17) %% 256
  }
  res
}
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsx)(o.p,{children:`It's just a really standard hashmap; absolutely nothing to see here. In fact it's simpler than real hashmaps because there's no rehashing. I faithfully implemented the spec, using a list of 256 lists.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`boxes <- replicate(256, list(), simplify = FALSE)
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
`,(0,i.jsx)(o.p,{children:`Now I can get the powers:`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`powers <- sapply(seq_along(boxes), function(i) {
  box <- boxes[[i]]
  i * sum(unlist(box) * seq_along(box))
})
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};