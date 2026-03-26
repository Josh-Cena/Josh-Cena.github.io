import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import{n,t as r}from"./_components-Bk2TMGF4.js";var i=e(),a={tags:[`Data structures`,`Puzzle`],title:`Advent of Code 2023 - Day 7: Camel Cards`,description:`Advent of Code 2023 - Day 7: Camel Cards, a problem that involves Data structures and Puzzle. Solution written in R, with detailed walkthrough and proof.`,year:2023,day:7};function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2023 - Day 7`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Camel Cards`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsx)(o.p,{children:`I have to complain: every day, my struggle starts with parsing the input 😅`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`data <- data.frame(matrix(
  unlist(strsplit(data, " ")),
  ncol = 2,
  byrow = TRUE
))
data <- setNames(data, c("hand", "bid"))
data$bid <- as.numeric(data$bid)
`})}),`
`,(0,i.jsxs)(o.p,{children:[`Then, we can calculate the type of each hand. R's `,(0,i.jsx)(o.code,{children:`table()`}),` function is very handy: it generates a frequency table of the values. Then we just need to check the number of unique values and the maximum count. I define each type as an integer, so I can easily compare them later.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`types <- list(
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
`,(0,i.jsxs)(o.p,{children:[`Then we can sort the hands by the type. Unfortunately, the ordering is relative and not absolute, so we need a comparator function. R's `,(0,i.jsx)(o.code,{children:`order()`}),` function can only sort by columns, so I wrote a `,(0,i.jsx)(o.code,{children:`quicksort()`}),` function that takes a custom comparator. Then we can sort the dataframe by row.`]}),`
`,`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`data_sorted <- quicksort(
  split(data, seq_len(nrow(data))),
  compare_rows(unlist(strsplit("23456789TJQKA", "")))
)
data <- do.call(rbind, data_sorted)
`})}),`
`,(0,i.jsxs)(o.p,{children:[`Finally calculating the total score is just a matter of multiplying the bid by the rank. `,(0,i.jsx)(o.code,{children:`sum(seq_len(nrow(data)) * data$bid)`})]}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`A useful observation is that there's a single choice for what jokers can become: the most frequent card. Because the `,(0,i.jsx)(o.code,{children:`max_count`}),` is the determining factor for the hand type (the more `,(0,i.jsx)(o.code,{children:`max_count`}),` is, the better the hand), we want to bump it up as much as possible. So we can just replace the jokers with the most frequent card in the hand.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-R`,children:`data$type <- sapply(data$hand, function(hand) {
  card_counts <- table(unlist(strsplit(hand, "")))
  j_count <- if ("J" %in% names(card_counts)) card_counts["J"] else 0
  card_counts <- card_counts[names(card_counts) != "J"]
  max_count <- (if (length(card_counts) > 0) max(card_counts) else 0) +
    j_count
  hand_type(max_count, length(card_counts))
})
`})}),`
`,(0,i.jsxs)(o.p,{children:[`(Note that `,(0,i.jsx)(o.code,{children:`length(card_counts)`}),` may be `,(0,i.jsx)(o.code,{children:`0`}),` if the hand is all jokers, but that's fine because the `,(0,i.jsx)(o.code,{children:`hand_type()`}),` function will just check `,(0,i.jsx)(o.code,{children:`max_count`}),` and return `,(0,i.jsx)(o.code,{children:`five of a kind`}),` in that case.)`]}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};