import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import{n,t as r}from"./_components-BiUCgGl-.js";var i=e(),a={tags:[`Dynamic programming`],title:`Advent of Code 2025 - Day 7: Laboratories`,description:`Advent of Code 2025 - Day 7: Laboratories, a problem that involves Dynamic programming. Solution written in Rust, with detailed walkthrough and proof.`,year:2025,day:7};function o(e){let o={a:`a`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2025 - Day 7`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Laboratories`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsxs)(o.p,{children:[`This is yet another `,(0,i.jsx)(o.a,{href:`/notes/aoc/2021/6/`,children:`lanternfish problem`}),`. As a beam moves down level by level, it either moves into the same column or splits into the column to the left and right. We can keep track of how many beams are in each column at each level. If a splitter is encountered, the beam is added to the left and right columns; otherwise, it is added to the same column.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-rust`,children:`let mut num_beams = vec![0; data[0].len()];
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
`,(0,i.jsx)(o.p,{children:`For part 1, I just count how many columns have non-zero beams.`}),`
`,(0,i.jsx)(o.p,{children:`For part 2, I count the total number of beams by summing the counts in each column.`}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};