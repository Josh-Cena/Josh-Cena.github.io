import{u as s,j as e}from"./index-BQ4aqFrv.js";import{P as r,a as i}from"./_components-Byf801p9.js";import"./_commonjsHelpers-Cpj98o6Y.js";const a={tags:["Dynamic programming"],title:"Advent of Code 2025 - Day 7: Laboratories",description:"Advent of Code 2025 - Day 7: Laboratories, a problem that involves Dynamic programming. Solution written in Rust, with detailed walkthrough and proof.",year:2025,day:7};function o(t){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",span:"span",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2025 - Day 7",e.jsx(n.span,{className:"subtitle",children:"Laboratories"})]}),`
`,`
`,e.jsx(r,{frontMatter:a}),`
`,e.jsxs(n.p,{children:["This is yet another ",e.jsx(n.a,{href:"/notes/aoc/2021/6/",children:"lanternfish problem"}),". As a beam moves down level by level, it either moves into the same column or splits into the column to the left and right. We can keep track of how many beams are in each column at each level. If a splitter is encountered, the beam is added to the left and right columns; otherwise, it is added to the same column."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-rust",children:`let mut num_beams = vec![0; data[0].len()];
num_beams[data[0].iter().position(|&c| c == 'S').unwrap()] = 1;
for line in data.iter().skip(1) {
    let mut new_num_beams = vec![0; line.len()];
    for (i, &c) in line.iter().enumerate() {
        if c == '^' {
            if i > 0 {
                new_num_beams[i - 1] += num_beams[i];
            }
            if i + 1 < new_num_beams.len() {
                new_num_beams[i + 1] += num_beams[i];
            }
        } else {
            new_num_beams[i] += num_beams[i];
        }
    }
    num_beams = new_num_beams;
}
`})}),`
`,e.jsx(n.p,{children:"For part 1, I just count how many columns have non-zero beams."}),`
`,e.jsx(n.p,{children:"For part 2, I count the total number of beams by summing the counts in each column."}),`
`,e.jsx(i,{frontMatter:a})]})}function u(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{u as default,a as frontMatter};
