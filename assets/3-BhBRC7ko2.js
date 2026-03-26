import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import{n,t as r}from"./_components-Bk2TMGF4.js";var i=e(),a={tags:[`Greedy`],title:`Advent of Code 2025 - Day 3: Lobby`,description:`Advent of Code 2025 - Day 3: Lobby, a problem that involves Greedy. Solution written in Rust, with detailed walkthrough and proof.`,year:2025,day:3};function o(e){let o={code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2025 - Day 3`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Lobby`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(o.p,{children:[`To maximize the 2-digit number, we must maximize the first digit, because the second digit can never compensate for a smaller first digit. So I choose the largest digit from `,(0,i.jsx)(o.code,{children:`0`}),` to `,(0,i.jsx)(o.code,{children:`length - 2`}),` (leaving at least one digit for the second digit) as the first digit, and then choose the largest digit from the remaining substring. If there are multiple occurrences of the largest digit, I choose the `,(0,i.jsx)(o.em,{children:`first`}),` appearance, because that leaves more digits for the second one.`]}),`
`,(0,i.jsxs)(o.p,{children:[`Unfortunately, Rust's `,(0,i.jsx)(o.code,{children:`max_by_key`}),` returns the `,(0,i.jsx)(o.em,{children:`last`}),` occurrence of the maximum element. To break ties in favor of the earlier element, I also use `,(0,i.jsx)(o.code,{children:`-index`}),` as a secondary comparison key.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-rust`,children:`let chars: Vec<char> = line.chars().collect();
let (max_ind, max1) = chars[..chars.len() - 1]
    .iter()
    .enumerate()
    .max_by_key(|&(i, c)| (*c, -(i as isize)))
    .unwrap();
let max2 = chars[max_ind + 1..].iter().max().unwrap();
total += (*max1 as u64 - '0' as u64) * 10 + (*max2 as u64 - '0' as u64);
`})}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`Similarly, we want to maximize the digits one-by-one, but be sure to leave enough digits for the remaining ones. If there are `,(0,i.jsx)(o.code,{children:`n`}),` digits left to fill, then we can only find the maximum from `,(0,i.jsx)(o.code,{children:`last_index + 1`}),` to `,(0,i.jsx)(o.code,{children:`length - n`}),`.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-rust`,children:`let chars: Vec<char> = line.chars().collect();
let mut num = 0;
let mut bound = 0;
for i in 0..12 {
    let (max_ind, max_char) = chars[bound..chars.len() - 11 + i]
        .iter()
        .enumerate()
        .max_by_key(|&(i, c)| (*c, -(i as isize)))
        .unwrap();
    num = num * 10 + (*max_char as u64 - '0' as u64);
    bound += max_ind + 1;
}
total += num;
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};