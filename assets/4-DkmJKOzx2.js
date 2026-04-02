import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import{n,t as r}from"./_components-BiUCgGl-.js";var i=e(),a={tags:[`Cellular automata`],title:`Advent of Code 2025 - Day 4: Printing Department`,description:`Advent of Code 2025 - Day 4: Printing Department, a problem that involves Cellular automata. Solution written in Rust, with detailed walkthrough and proof.`,year:2025,day:4};function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2025 - Day 4`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Printing Department`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(o.p,{children:[`There are 8 neighbor positions to test, which can be iterated by enumerating the relative coordinates for row and column. For each position, check if it's in bounds and contains a `,(0,i.jsx)(o.code,{children:`@`}),`.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-rust`,children:`fn neighbors(data: &Vec<Vec<char>>, i: isize, j: isize, w: isize, h: isize) -> usize {
    let mut count = 0;
    for di in -1..=1 {
        for dj in -1..=1 {
            if di == 0 && dj == 0 {
                continue;
            }
            let ni = i + di;
            let nj = j + dj;
            if ni >= 0 && ni < h && nj >= 0 && nj < w && data[ni as usize][nj as usize] == '@' {
                count += 1;
            }
        }
    }
    count
}
`})}),`
`,(0,i.jsxs)(o.p,{children:[`Part 1 just counts the cells that contain `,(0,i.jsx)(o.code,{children:`@`}),` and have fewer than 4 `,(0,i.jsx)(o.code,{children:`@`}),` neighbors.`]}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsx)(o.p,{children:`I guess, the only pitfall here is to make sure to update the grid simultaneously because earlier updates can affect tests for later cells. I save a list of cells to update, and then apply the updates after iterating through the whole grid. I stop when there are no more updates to apply.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-rust`,children:`loop {
    let mut positions: Vec<(usize, usize)> = vec![];
    for (i, line) in data.iter().enumerate() {
        for (j, c) in line.iter().enumerate() {
            if *c != '@' {
                continue;
            }
            if neighbors(&data, i as isize, j as isize, w, h) < 4 {
                positions.push((i, j));
            }
        }
    }
    if positions.is_empty() {
        break;
    }
    for (i, j) in positions.iter() {
        data[*i][*j] = '.';
    }
    total += positions.len();
}
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};