import{u as s,j as e}from"./index-TXYOrs-s.js";import{P as i,a as o}from"./_components-D-appPx2.js";import"./_commonjsHelpers-Cpj98o6Y.js";const a={tags:["Greedy"],title:"Advent of Code 2025 - Day 3: Lobby",description:"Advent of Code 2025 - Day 3: Lobby, a problem that involves Greedy. Solution written in Rust, with detailed walkthrough and proof.",year:2025,day:3};function r(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2025 - Day 3",e.jsx(n.span,{className:"subtitle",children:"Lobby"})]}),`
`,`
`,e.jsx(i,{frontMatter:a}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:["To maximize the 2-digit number, we must maximize the first digit, because the second digit can never compensate for a smaller first digit. So I choose the largest digit from ",e.jsx(n.code,{children:"0"})," to ",e.jsx(n.code,{children:"length - 2"})," (leaving at least one digit for the second digit) as the first digit, and then choose the largest digit from the remaining substring. If there are multiple occurrences of the largest digit, I choose the ",e.jsx(n.em,{children:"first"})," appearance, because that leaves more digits for the second one."]}),`
`,e.jsxs(n.p,{children:["Unfortunately, Rust's ",e.jsx(n.code,{children:"max_by_key"})," returns the ",e.jsx(n.em,{children:"last"})," occurrence of the maximum element. To break ties in favor of the earlier element, I also use ",e.jsx(n.code,{children:"-index"})," as a secondary comparison key."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-rust",children:`let chars: Vec<char> = line.chars().collect();
let (max_ind, max1) = chars[..chars.len() - 1]
    .iter()
    .enumerate()
    .max_by_key(|&(i, c)| (*c, -(i as isize)))
    .unwrap();
let max2 = chars[max_ind + 1..].iter().max().unwrap();
total += (*max1 as u64 - '0' as u64) * 10 + (*max2 as u64 - '0' as u64);
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["Similarly, we want to maximize the digits one-by-one, but be sure to leave enough digits for the remaining ones. If there are ",e.jsx(n.code,{children:"n"})," digits left to fill, then we can only find the maximum from ",e.jsx(n.code,{children:"last_index + 1"})," to ",e.jsx(n.code,{children:"length - n"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-rust",children:`let chars: Vec<char> = line.chars().collect();
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
`})}),`
`,e.jsx(o,{frontMatter:a})]})}function h(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{h as default,a as frontMatter};
