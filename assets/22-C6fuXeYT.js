import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import{n,t as r}from"./_components-Bk2TMGF4.js";var i=e(),a={tags:[`Bitwise operations`,`Data structures`],title:`Advent of Code 2024 - Day 22: Monkey Market`,description:`Advent of Code 2024 - Day 22: Monkey Market, a problem that involves Bitwise operations and Data structures. Solution written in OCaml, with detailed walkthrough and proof.`,year:2024,day:22};function o(e){let o={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2024 - Day 22`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Monkey Market`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsxs)(o.p,{children:[`This problem pays tribute to `,(0,i.jsx)(o.a,{href:`/notes/aoc/2022/11/`,children:`2022 day 11`}),`.`]}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(o.p,{children:[`The process of finding the next secret is all about bitwise operations: `,(0,i.jsx)(o.code,{children:`* 64`}),` is equivalent to `,(0,i.jsx)(o.code,{children:`<< 6`}),`, `,(0,i.jsx)(o.code,{children:`/ 32`}),` is equivalent to `,(0,i.jsx)(o.code,{children:`>> 5`}),`, and `,(0,i.jsx)(o.code,{children:`% 16777216`}),` is equivalent to `,(0,i.jsx)(o.code,{children:`& 0xFFFFFF`}),` (because `,(0,i.jsx)(o.code,{children:`16777216`}),` is `,(0,i.jsx)(o.code,{children:`2^24`}),`).`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let next_secret num =
  let num' = (num lsl 6) lxor num land 0xFFFFFF in
  let num'' = (num' lsr 5) lxor num' in
  let num''' = (num'' lsl 11) lxor num'' land 0xFFFFFF in
  num'''
`})}),`
`,(0,i.jsx)(o.p,{children:`Just apply this function 2000 times to the initial secret.`}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsx)(o.p,{children:`Now we have a list of diffs, where each 4-window corresponds to a gain. Naturally, we want a mapping from these 4-windows to their gains, and then we can combine the mappings from different diff lists to find the maximum.`}),`
`,(0,i.jsxs)(o.p,{children:[`There are some low-hanging optimizations we can do. For example, because OCaml is eager, precomputing the whole diff list is a waste when we only need 4-windows. Instead, we can compute the diff list on the fly as we call `,(0,i.jsx)(o.code,{children:`next_secret`}),`. Also, instead of using tuples as keys, we can pack the 4 numbers (which only range from -9 to 9) into a single integer using base 19. Then, when moving from one number to the next, we can update the 4-window by removing the leftmost number and adding the new number on the right.`]}),`
`,(0,i.jsx)(o.p,{children:`The following spaghetti first computes the initial mapping from the first 4-window, and then iteratively updates the 4-window for the next 1996 numbers, updating the mapping if it's new.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let gains init_num =
  let map = Array.make 130321 0 in
  let n1 = init_num mod 10 in
  let num2 = next_secret init_num in
  let n2 = num2 mod 10 in
  let d1 = n2 - n1 in
  let num3 = next_secret num2 in
  let n3 = num3 mod 10 in
  let d2 = n3 - n2 in
  let num4 = next_secret num3 in
  let n4 = num4 mod 10 in
  let d3 = n4 - n3 in
  let num5 = next_secret num4 in
  let n5 = num5 mod 10 in
  let d4 = n5 - n4 in
  let key = ((d1 + 9) * 6859) + ((d2 + 9) * 361) + ((d3 + 9) * 19) + (d4 + 9) in
  map.(key) <- n5;
  let rec loop num n key times =
    if times = 0 then map
    else
      let num' = next_secret num in
      let n' = num' mod 10 in
      let key' = ((key * 19) + (n' - n + 9)) mod 130321 in
      if map.(key') = 0 then map.(key') <- n';
      loop num' n' key' (times - 1)
  in
  loop num5 n5 key 1996
`})}),`
`,(0,i.jsx)(o.p,{children:`Now I just need to combine the mappings from all initial secrets, and find the maximum gain.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-ocaml`,children:`let nums = List.map int_of_string data in
let gains_sum =
  List.fold_left
    (fun acc num -> sum_arrays acc (gains num))
    (Array.make 130321 0) nums
in
let max_gain = Array.fold_left max 0 gains_sum
`})}),`
`,(0,i.jsxs)(o.p,{children:[`This runs in slightly less than 1 second, which is okay considering we have 1500 initial secrets and 2000 iterations each. I suspect that all this `,(0,i.jsx)(o.code,{children:`mod 19`}),` stuff is slower than bitwise operations, but if I'm to use base-32 numbers as keys instead, it requires a much larger array and worse cache performance.`]}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};