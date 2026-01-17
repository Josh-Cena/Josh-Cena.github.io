import{u as o,j as n}from"./index-BVdbyz0p.js";import{F as c,a as r}from"./_components-ozm2G8yB.js";const a={tags:["Data structures","Puzzle"],description:"Advent of Code 2023 - Day 7: Camel Cards, a problem that involves Data structures and Puzzle. Solution written in R, with detailed walkthrough and proof.",year:2023,day:7,title:"Advent of Code 2023 - Day 7: Camel Cards"};function s(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.h1,{children:["Advent of Code 2023 - Day 7",n.jsx(e.span,{className:"subtitle",children:"Camel Cards"})]}),`
`,`
`,n.jsx(c,{frontMatter:a}),`
`,n.jsx(e.h2,{children:"Part 1"}),`
`,n.jsx(e.p,{children:"I have to complain: every day, my struggle starts with parsing the input 😅"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-R",children:`data <- data.frame(matrix(
  unlist(strsplit(data, " ")),
  ncol = 2,
  byrow = TRUE
))
data <- setNames(data, c("hand", "bid"))
data$bid <- as.numeric(data$bid)
`})}),`
`,n.jsxs(e.p,{children:["Then, we can calculate the type of each hand. R's ",n.jsx(e.code,{children:"table()"})," function is very handy: it generates a frequency table of the values. Then we just need to check the number of unique values and the maximum count. I define each type as an integer, so I can easily compare them later."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-R",children:`types <- list(
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
`,n.jsxs(e.p,{children:["Then we can sort the hands by the type. Unfortunately, the ordering is relative and not absolute, so we need a comparator function. R's ",n.jsx(e.code,{children:"order()"})," function can only sort by columns, so I wrote a ",n.jsx(e.code,{children:"quicksort()"})," function that takes a custom comparator. Then we can sort the dataframe by row."]}),`
`,`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-R",children:`data_sorted <- quicksort(
  split(data, seq_len(nrow(data))),
  compare_rows(unlist(strsplit("23456789TJQKA", "")))
)
data <- do.call(rbind, data_sorted)
`})}),`
`,n.jsxs(e.p,{children:["Finally calculating the total score is just a matter of multiplying the bid by the rank. ",n.jsx(e.code,{children:"sum(seq_len(nrow(data)) * data$bid)"})]}),`
`,n.jsx(e.h2,{children:"Part 2"}),`
`,n.jsxs(e.p,{children:["A useful observation is that there's a single choice for what jokers can become: the most frequent card. Because the ",n.jsx(e.code,{children:"max_count"})," is the determining factor for the hand type (the more ",n.jsx(e.code,{children:"max_count"})," is, the better the hand), we want to bump it up as much as possible. So we can just replace the jokers with the most frequent card in the hand."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-R",children:`data$type <- sapply(data$hand, function(hand) {
  card_counts <- table(unlist(strsplit(hand, "")))
  j_count <- if ("J" %in% names(card_counts)) card_counts["J"] else 0
  card_counts <- card_counts[names(card_counts) != "J"]
  max_count <- (if (length(card_counts) > 0) max(card_counts) else 0) +
    j_count
  hand_type(max_count, length(card_counts))
})
`})}),`
`,n.jsxs(e.p,{children:["(Note that ",n.jsx(e.code,{children:"length(card_counts)"})," may be ",n.jsx(e.code,{children:"0"})," if the hand is all jokers, but that's fine because the ",n.jsx(e.code,{children:"hand_type()"})," function will just check ",n.jsx(e.code,{children:"max_count"})," and return ",n.jsx(e.code,{children:"five of a kind"})," in that case.)"]}),`
`,n.jsx(r,{frontMatter:a})]})}function l(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{l as default,a as frontMatter};
