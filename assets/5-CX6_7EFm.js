import{u as r,j as e}from"./index-DH0P7Lag.js";import{P as o,a as i}from"./_components-BmaiIPu9.js";import"./_commonjsHelpers-Cpj98o6Y.js";const a={tags:["Geometry"],title:"Advent of Code 2025 - Day 5: Cafeteria",description:"Advent of Code 2025 - Day 5: Cafeteria, a problem that involves Geometry. Solution written in Rust, with detailed walkthrough and proof.",year:2025,day:5};function s(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.h1,{children:["Advent of Code 2025 - Day 5",e.jsx(t.span,{className:"subtitle",children:"Cafeteria"})]}),`
`,`
`,e.jsx(o,{frontMatter:a}),`
`,e.jsx(t.h2,{children:"Part 1"}),`
`,e.jsx(t.p,{children:"I didn't do anything fancy: for each number, I iterate through all ranges to see if it falls in any of them. Technically, I can optimize this by sorting the ranges and using binary search, but the input size is small enough that it doesn't matter."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-rust",children:`for line in parts[1].lines() {
    let num: u64 = line.parse().unwrap();
    if ranges.iter().any(|&(s, e)| num >= s && num <= e) {
        total += 1;
    }
}
`})}),`
`,e.jsx(t.h2,{children:"Part 2"}),`
`,e.jsxs(t.p,{children:["Now we wish to merge the ranges into a single list of disjoint intervals, and then count their total length. I sort the ranges by their start point, which puts mergeable intervals next to each other. For each additional interval, if it does not overlap with the previous one (",e.jsx(t.code,{children:"start > last_end"}),"), then this segment is added completely to the total length. Otherwise, if it overlaps but extends the previous one (",e.jsx(t.code,{children:"end > last_end"}),"), then only the non-overlapping part is added to the total length. Otherwise, the interval is completely contained in the previous one and does not contribute to the total length."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-rust",children:`ranges.sort_by_key(|k| k.0);
let mut last_end = ranges[0].1;
let mut total = last_end - ranges[0].0 + 1;
for (start, end) in ranges.iter().skip(1) {
    if *start > last_end {
        total += end - start + 1;
        last_end = *end;
    } else if *end > last_end {
        total += end - last_end;
        last_end = *end;
    }
}
`})}),`
`,e.jsx(i,{frontMatter:a})]})}function c(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{c as default,a as frontMatter};
