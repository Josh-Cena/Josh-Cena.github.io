import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-BHnTV9cU.js";import"./Link-CEJsqf-b.js";import{n,t as r}from"./_components-CjKNIGmQ.js";var i=e();function a(e){let a={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2025 - Day 5`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Cafeteria`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.h2,{children:`Part 1`}),`
`,(0,i.jsx)(a.p,{children:`I didn't do anything fancy: for each number, I iterate through all ranges to see if it falls in any of them. Technically, I can optimize this by sorting the ranges and using binary search, but the input size is small enough that it doesn't matter.`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-rust`,children:`for line in parts[1].lines() {
    let num: u64 = line.parse().unwrap();
    if ranges.iter().any(|&(s, e)| num >= s && num <= e) {
        total += 1;
    }
}
`})}),`
`,(0,i.jsx)(a.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(a.p,{children:[`Now we wish to merge the ranges into a single list of disjoint intervals, and then count their total length. I sort the ranges by their start point, which puts mergeable intervals next to each other. For each additional interval, if it does not overlap with the previous one (`,(0,i.jsx)(a.code,{children:`start > last_end`}),`), then this segment is added completely to the total length. Otherwise, if it overlaps but extends the previous one (`,(0,i.jsx)(a.code,{children:`end > last_end`}),`), then only the non-overlapping part is added to the total length. Otherwise, the interval is completely contained in the previous one and does not contribute to the total length.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-rust`,children:`ranges.sort_by_key(|k| k.0);
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
`})}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Geometry`],title:`Advent of Code 2025 - Day 5: Cafeteria`,description:`Advent of Code 2025 - Day 5: Cafeteria, a problem that involves Geometry. Solution written in Rust, with detailed walkthrough and proof.`,year:2025,day:5};export{o as default};