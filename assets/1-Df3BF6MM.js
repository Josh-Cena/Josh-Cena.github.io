import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-BHnTV9cU.js";import"./Link-CEJsqf-b.js";import{n,t as r}from"./_components-CjKNIGmQ.js";var i=e();function a(e){let a={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2023 - Day 1`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Trebuchet?!`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(a.p,{children:[`At the beginning, the language choice of R really created more problems than it solved. I know I'm supposed to use vectorized operations etc. etc., but figuring out the data types for each step was a nightmare. Everything might be a list or a vector; I don't know how to index them and I don't know when to use `,(0,i.jsx)(a.code,{children:`sapply`}),` or `,(0,i.jsx)(a.code,{children:`lapply`}),`.`]}),`
`,(0,i.jsxs)(a.p,{children:[`For the first part, to extract number digits, I just remove all non-digits from the string. Then, I can take the first and last digit of each number, concatenate them, and sum them up. It turns out that getting one character from a string is quite intractable in R because you need `,(0,i.jsx)(a.code,{children:`substr`}),`, but vectorized functions made it at least intuitive to read.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-R`,children:`solve1 <- function(data) {
  nums <- gsub("[^0-9]", "", data)
  nums <- paste0(substr(nums, 1, 1), substr(nums, nchar(nums), nchar(nums)))
  cat(sum(as.numeric(nums)), "\\n")
}
`})}),`
`,(0,i.jsx)(a.h2,{children:`Part 2`}),`
`,(0,i.jsx)(a.p,{children:`At first, I had a string-to-number mapping, and I just replace each string with its corresponding number, but there's a major pitfall: replacements need to be done left-to-right, not in the order of digit magnitude. For example, the example input:`}),`
`,`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-plain`,children:`twone
`})}),`
`,(0,i.jsxs)(a.p,{children:[`The approach of first replacing "one" and then "two" would turn this into "tw1", which is incorrect; instead it should be "2ne". Therefore I need to do a single `,(0,i.jsx)(a.code,{children:`gsub`}),`, passing in a disjunction of all strings to be replaced. Then for each match, I can look up the corresponding digit and replace it. However it turns out that R does not have a built-in equivalent of JavaScript's `,(0,i.jsx)(a.code,{children:`String.replaceAll`}),` that can take a function as the replacement argument. I found the `,(0,i.jsx)(a.a,{href:`https://cran.r-project.org/web/packages/gsubfn/index.html`,children:(0,i.jsx)(a.code,{children:`gsubfn`})}),` package to do this for me.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-R`,children:`pattern <- paste(names(substitutions), collapse = "|")
data <- gsubfn(pattern, function(w) substitutions[[w]], data)
nums <- gsub("[^0-9]", "", data)
nums <- paste0(substr(nums, 1, 1), substr(nums, nchar(nums), nchar(nums)))
cat(sum(as.numeric(nums)), "\\n")
`})}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`String manipulation`],title:`Advent of Code 2023 - Day 1: Trebuchet?!`,description:`Advent of Code 2023 - Day 1: Trebuchet?!, a problem that involves String manipulation. Solution written in R, with detailed walkthrough and proof.`,year:2023,day:1};export{o as default};