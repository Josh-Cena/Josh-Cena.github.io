import{u as r,j as e}from"./index-VHEsq7sr.js";import{P as o,a as i}from"./_components-rH1xXMsL.js";import"./_commonjsHelpers-Cpj98o6Y.js";const s={tags:["Image processing"],title:"Advent of Code 2023 - Day 3: Gear Ratios",description:"Advent of Code 2023 - Day 3: Gear Ratios, a problem that involves Image processing. Solution written in R, with detailed walkthrough and proof.",year:2023,day:3};function a(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2023 - Day 3",e.jsx(n.span,{className:"subtitle",children:"Gear Ratios"})]}),`
`,`
`,e.jsx(o,{frontMatter:s}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:"I feel like the coding involved in this problem is more than I'd expect for a day 3 problem."}),`
`,e.jsxs(n.p,{children:["Since numbers must be laid out horizontally, I can discover all numbers in each row. Each number region is identified by ",e.jsx(n.code,{children:"starts[j]"})," and ",e.jsx(n.code,{children:"lengths[j]"}),", which are the starting index and length of the number."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`match_res <- gregexpr("[0-9]+", data[i])
matches <- match_res[[1]]
if (matches[1] == -1) {
  next
}
starts <- as.integer(matches)
values <- regmatches(data[i], match_res)[[1]]
lengths <- nchar(values)
`})}),`
`,e.jsx(n.p,{children:"Then, I need to check if the number is next to a symbol, by checking the whole neighborhood around it:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plain",children:`A A A A A
C 0 0 0 D
B B B B B
`})}),`
`,e.jsxs(n.p,{children:["Because it's so intractable to extract a single character in R, my approach is to slice the substrings I marked ",e.jsx(n.code,{children:"A"}),", ",e.jsx(n.code,{children:"B"}),", ",e.jsx(n.code,{children:"C"}),", and ",e.jsx(n.code,{children:"D"}),", concatenate them, and then look for a symbol in this string. Out-of-bounds ",e.jsx(n.code,{children:"substr"})," just returns the empty string, so I don't need to worry about that."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`for (j in seq_along(starts)) {
  l <- starts[j] - 1
  r <- starts[j] + lengths[j]
  neighbors <- paste0(
    substr(data[i], l, l),
    substr(data[i], r, r),
    if (i > 1) substr(data[i - 1], l, r) else "",
    if (i < length(data)) substr(data[i + 1], l, r) else ""
  )
  if (grepl("[^0-9.]", neighbors)) {
    sum <- sum + as.integer(values[j])
  }
}
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["I find the method of finding numbers and ",e.jsx(n.em,{children:"then"})," finding symbols to be simpler, because if I do it the other way, then I need to extract the full range of the number given a starting index that might be in the ",e.jsx(n.em,{children:"middle"})," of the number. For part 2 though, I need two numbers next to a single symbol, so searching for symbols anchored by numbers is harder than searching for numbers anchored by symbols."]}),`
`,e.jsxs(n.p,{children:["Nevertheless I think it's doable. All I need is to keep a mapping from symbol location to the numbers that are next to it. Then I can iterate over the symbols and check if they have two numbers next to them. Then R gave me another bummer (one of many these days): not only does it not have tuple hashing (that's okay, JavaScript doesn't have it either, yet), but it doesn't have hashmaps whatsoever?? You can only imagine my disappointment. In the end I just used a list whose keys are serializations of symbol locations, and values are lists of numbers next to that symbol. Inside the loop for each number, not only do I check the ",e.jsx(n.em,{children:"existence"})," of symbol neighbors, but I also need their ",e.jsx(n.em,{children:"values"})," and ",e.jsx(n.em,{children:"locations"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`l <- starts[j] - 1
r <- starts[j] + lengths[j]
if (substr(data[i], l, l) == "*") {
  neighbors <-
    add_neighbor(neighbors, key(i, l), as.integer(values[j]))
}
if (substr(data[i], r, r) == "*") {
  neighbors <-
    add_neighbor(neighbors, key(i, r), as.integer(values[j]))
}
rows <- integer(0)
if (i > 1) {
  rows <- c(rows, i - 1)
}
if (i < length(data)) {
  rows <- c(rows, i + 1)
}
for (row in rows) {
  above <- substr(data[row], l, r)
  matches <- gregexpr("\\\\*", above)[[1]]
  if (matches[1] != -1) {
    for (k in matches) {
      # If l == 0, then we need to add 1 to k to compensate for the
      # leftmost lost character in the above string
      gear_pos <- key(row, l + k - min(l, 1))
      neighbors <-
        add_neighbor(neighbors, gear_pos, as.integer(values[j]))
    }
  }
}
`})}),`
`,e.jsx(n.p,{children:"The other tricky part about location calculation is that if the number is at the leftmost edge of the string, then the left neighbor is out of bounds and thus doesn't exist. In this case, I need to add 1 to the index of the symbol neighbor to compensate for the lost character."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plain",children:`A * A A
0 0 0 D
B B B B

k = 2, l = 0 => gear_pos = key(row, 2)

A A * A A
C 0 0 0 D
B B B B B

k = 3, l = 1 => gear_pos = key(row, 3)
`})}),`
`,e.jsxs(n.p,{children:["This problem wouldn't have been a problem in a 0-based language because then ",e.jsx(n.code,{children:"l"})," would just be an offset."]}),`
`,e.jsxs(n.p,{children:["Now I have a list of ",e.jsx(n.code,{children:"*"})," locations and the numbers next to them. I just need to sum the products for the pairs of numbers."]}),`
`,e.jsx(i,{frontMatter:s})]})}function c(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{c as default,s as frontMatter};
