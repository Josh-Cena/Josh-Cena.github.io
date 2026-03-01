import{u as r,j as e}from"./index-U-3-Orkv.js";import{P as o,a as i}from"./_components-DNOqqG7-.js";import"./_commonjsHelpers-Cpj98o6Y.js";const a={tags:["String manipulation"],title:"Advent of Code 2023 - Day 1: Trebuchet?!",description:"Advent of Code 2023 - Day 1: Trebuchet?!, a problem that involves String manipulation. Solution written in R, with detailed walkthrough and proof.",year:2023,day:1};function s(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.h1,{children:["Advent of Code 2023 - Day 1",e.jsx(t.span,{className:"subtitle",children:"Trebuchet?!"})]}),`
`,`
`,e.jsx(o,{frontMatter:a}),`
`,e.jsx(t.h2,{children:"Part 1"}),`
`,e.jsxs(t.p,{children:["At the beginning, the language choice of R really created more problems than it solved. I know I'm supposed to use vectorized operations etc. etc., but figuring out the data types for each step was a nightmare. Everything might be a list or a vector; I don't know how to index them and I don't know when to use ",e.jsx(t.code,{children:"sapply"})," or ",e.jsx(t.code,{children:"lapply"}),"."]}),`
`,e.jsxs(t.p,{children:["For the first part, to extract number digits, I just remove all non-digits from the string. Then, I can take the first and last digit of each number, concatenate them, and sum them up. It turns out that getting one character from a string is quite intractable in R because you need ",e.jsx(t.code,{children:"substr"}),", but vectorized functions made it at least intuitive to read."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-R",children:`solve1 <- function(data) {
  nums <- gsub("[^0-9]", "", data)
  nums <- paste0(substr(nums, 1, 1), substr(nums, nchar(nums), nchar(nums)))
  cat(sum(as.numeric(nums)), "\\n")
}
`})}),`
`,e.jsx(t.h2,{children:"Part 2"}),`
`,e.jsx(t.p,{children:"At first, I had a string-to-number mapping, and I just replace each string with its corresponding number, but there's a major pitfall: replacements need to be done left-to-right, not in the order of digit magnitude. For example, the example input:"}),`
`,`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-plain",children:`twone
`})}),`
`,e.jsxs(t.p,{children:['The approach of first replacing "one" and then "two" would turn this into "tw1", which is incorrect; instead it should be "2ne". Therefore I need to do a single ',e.jsx(t.code,{children:"gsub"}),", passing in a disjunction of all strings to be replaced. Then for each match, I can look up the corresponding digit and replace it. However it turns out that R does not have a built-in equivalent of JavaScript's ",e.jsx(t.code,{children:"String.replaceAll"})," that can take a function as the replacement argument. I found the ",e.jsx(t.a,{href:"https://cran.r-project.org/web/packages/gsubfn/index.html",children:e.jsx(t.code,{children:"gsubfn"})})," package to do this for me."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-R",children:`pattern <- paste(names(substitutions), collapse = "|")
data <- gsubfn(pattern, function(w) substitutions[[w]], data)
nums <- gsub("[^0-9]", "", data)
nums <- paste0(substr(nums, 1, 1), substr(nums, nchar(nums), nchar(nums)))
cat(sum(as.numeric(nums)), "\\n")
`})}),`
`,e.jsx(i,{frontMatter:a})]})}function h(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{h as default,a as frontMatter};
