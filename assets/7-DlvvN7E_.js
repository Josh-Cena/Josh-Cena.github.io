import{u as o,j as e}from"./index-Bb_SBPIJ.js";import{P as c,a as r}from"./_components-DLB4m9JY.js";const a={tags:["Data structures","Puzzle"],description:"Advent of Code 2023 - Day 7: Camel Cards, a problem that involves Data structures and Puzzle. Solution written in R, with detailed walkthrough and proof.",year:2023,day:7,title:"Advent of Code 2023 - Day 7: Camel Cards"};function s(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2023 - Day 7",e.jsx(n.span,{className:"subtitle",children:"Camel Cards"})]}),`
`,`
`,e.jsx(c,{frontMatter:a}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:"I have to complain: every day, my struggle starts with parsing the input 😅"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`data <- data.frame(matrix(
  unlist(strsplit(data, " ")),
  ncol = 2,
  byrow = TRUE
))
data <- setNames(data, c("hand", "bid"))
data$bid <- as.numeric(data$bid)
`})}),`
`,e.jsxs(n.p,{children:["Then, we can calculate the type of each hand. R's ",e.jsx(n.code,{children:"table()"})," function is very handy: it generates a frequency table of the values. Then we just need to check the number of unique values and the maximum count. I define each type as an integer, so I can easily compare them later."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`types <- list(
  "five of a kind" = 6,
  "four of a kind" = 5,
  "full house" = 4,
  "three of a kind" = 3,
  "two pair" = 2,
  "one pair" = 1,
  "high card" = 0
)

hand_type <- function(max_count, card_counts) {
  if (max_count == 5) {
    types[["five of a kind"]]
  } else if (max_count == 4) {
    types[["four of a kind"]]
  } else if (max_count == 3 && length(card_counts) == 2) {
    types[["full house"]]
  } else if (max_count == 3) {
    types[["three of a kind"]]
  } else if (max_count == 2 && length(card_counts) == 3) {
    types[["two pair"]]
  } else if (max_count == 2) {
    types[["one pair"]]
  } else {
    types[["high card"]]
  }
}

data$type <- sapply(data$hand, function(hand) {
  card_counts <- table(unlist(strsplit(hand, "")))
  max_count <- max(card_counts)
  hand_type(max_count, card_counts)
})
`})}),`
`,e.jsxs(n.p,{children:["Then we can sort the hands by the type. Unfortunately, the ordering is relative and not absolute, so we need a comparator function. R's ",e.jsx(n.code,{children:"order()"})," function can only sort by columns, so I wrote a ",e.jsx(n.code,{children:"quicksort()"})," function that takes a custom comparator. Then we can sort the dataframe by row."]}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`data_sorted <- quicksort(
  split(data, seq_len(nrow(data))),
  compare_rows(unlist(strsplit("23456789TJQKA", "")))
)
data <- do.call(rbind, data_sorted)
`})}),`
`,e.jsxs(n.p,{children:["Finally calculating the total score is just a matter of multiplying the bid by the rank. ",e.jsx(n.code,{children:"sum(seq_len(nrow(data)) * data$bid)"})]}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["A useful observation is that there's a single choice for what jokers can become: the most frequent card. Because the ",e.jsx(n.code,{children:"max_count"})," is the determining factor for the hand type (the more ",e.jsx(n.code,{children:"max_count"})," is, the better the hand), we want to bump it up as much as possible. So we can just replace the jokers with the most frequent card in the hand."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-R",children:`data$type <- sapply(data$hand, function(hand) {
  card_counts <- table(unlist(strsplit(hand, "")))
  j_count <- if ("J" %in% names(card_counts)) card_counts["J"] else 0
  card_counts <- card_counts[names(card_counts) != "J"]
  max_count <- (if (length(card_counts) > 0) max(card_counts) else 0) +
    j_count
  hand_type(max_count, length(card_counts))
})
`})}),`
`,e.jsxs(n.p,{children:["(Note that ",e.jsx(n.code,{children:"length(card_counts)"})," may be ",e.jsx(n.code,{children:"0"})," if the hand is all jokers, but that's fine because the ",e.jsx(n.code,{children:"hand_type()"})," function will just check ",e.jsx(n.code,{children:"max_count"})," and return ",e.jsx(n.code,{children:"five of a kind"})," in that case.)"]}),`
`,e.jsx(r,{frontMatter:a})]})}function l(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{l as default,a as frontMatter};
