import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{n,t as r}from"./_components-DcdEf7Vf.js";var i=e();function a(e){let a={code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2023 - Day 3`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Gear Ratios`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.h2,{children:`Part 1`}),`
`,(0,i.jsx)(a.p,{children:`I feel like the coding involved in this problem is more than I'd expect for a day 3 problem.`}),`
`,(0,i.jsxs)(a.p,{children:[`Since numbers must be laid out horizontally, I can discover all numbers in each row. Each number region is identified by `,(0,i.jsx)(a.code,{children:`starts[j]`}),` and `,(0,i.jsx)(a.code,{children:`lengths[j]`}),`, which are the starting index and length of the number.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-R`,children:`match_res <- gregexpr("[0-9]+", data[i])
matches <- match_res[[1]]
if (matches[1] == -1) {
  next
}
starts <- as.integer(matches)
values <- regmatches(data[i], match_res)[[1]]
lengths <- nchar(values)
`})}),`
`,(0,i.jsx)(a.p,{children:`Then, I need to check if the number is next to a symbol, by checking the whole neighborhood around it:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-plain`,children:`A A A A A
C 0 0 0 D
B B B B B
`})}),`
`,(0,i.jsxs)(a.p,{children:[`Because it's so intractable to extract a single character in R, my approach is to slice the substrings I marked `,(0,i.jsx)(a.code,{children:`A`}),`, `,(0,i.jsx)(a.code,{children:`B`}),`, `,(0,i.jsx)(a.code,{children:`C`}),`, and `,(0,i.jsx)(a.code,{children:`D`}),`, concatenate them, and then look for a symbol in this string. Out-of-bounds `,(0,i.jsx)(a.code,{children:`substr`}),` just returns the empty string, so I don't need to worry about that.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-R`,children:`for (j in seq_along(starts)) {
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
`,(0,i.jsx)(a.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(a.p,{children:[`I find the method of finding numbers and `,(0,i.jsx)(a.em,{children:`then`}),` finding symbols to be simpler, because if I do it the other way, then I need to extract the full range of the number given a starting index that might be in the `,(0,i.jsx)(a.em,{children:`middle`}),` of the number. For part 2 though, I need two numbers next to a single symbol, so searching for symbols anchored by numbers is harder than searching for numbers anchored by symbols.`]}),`
`,(0,i.jsxs)(a.p,{children:[`Nevertheless I think it's doable. All I need is to keep a mapping from symbol location to the numbers that are next to it. Then I can iterate over the symbols and check if they have two numbers next to them. Then R gave me another bummer (one of many these days): not only does it not have tuple hashing (that's okay, JavaScript doesn't have it either, yet), but it doesn't have hashmaps whatsoever?? You can only imagine my disappointment. In the end I just used a list whose keys are serializations of symbol locations, and values are lists of numbers next to that symbol. Inside the loop for each number, not only do I check the `,(0,i.jsx)(a.em,{children:`existence`}),` of symbol neighbors, but I also need their `,(0,i.jsx)(a.em,{children:`values`}),` and `,(0,i.jsx)(a.em,{children:`locations`}),`.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-R`,children:`l <- starts[j] - 1
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
`,(0,i.jsx)(a.p,{children:`The other tricky part about location calculation is that if the number is at the leftmost edge of the string, then the left neighbor is out of bounds and thus doesn't exist. In this case, I need to add 1 to the index of the symbol neighbor to compensate for the lost character.`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-plain`,children:`A * A A
0 0 0 D
B B B B

k = 2, l = 0 => gear_pos = key(row, 2)

A A * A A
C 0 0 0 D
B B B B B

k = 3, l = 1 => gear_pos = key(row, 3)
`})}),`
`,(0,i.jsxs)(a.p,{children:[`This problem wouldn't have been a problem in a 0-based language because then `,(0,i.jsx)(a.code,{children:`l`}),` would just be an offset.`]}),`
`,(0,i.jsxs)(a.p,{children:[`Now I have a list of `,(0,i.jsx)(a.code,{children:`*`}),` locations and the numbers next to them. I just need to sum the products for the pairs of numbers.`]}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Image processing`],title:`Advent of Code 2023 - Day 3: Gear Ratios`,description:`Advent of Code 2023 - Day 3: Gear Ratios, a problem that involves Image processing. Solution written in R, with detailed walkthrough and proof.`,year:2023,day:3};export{o as default};