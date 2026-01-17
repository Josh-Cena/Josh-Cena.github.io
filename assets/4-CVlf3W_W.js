import{u as s,j as n}from"./index-BVdbyz0p.js";import{F as o,a as r}from"./_components-ozm2G8yB.js";const i={tags:["Cellular automata"],description:"Advent of Code 2025 - Day 4: Printing Department, a problem that involves Cellular automata. Solution written in Rust, with detailed walkthrough and proof.",year:2025,day:4,title:"Advent of Code 2025 - Day 4: Printing Department"};function a(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.h1,{children:["Advent of Code 2025 - Day 4",n.jsx(e.span,{className:"subtitle",children:"Printing Department"})]}),`
`,`
`,n.jsx(o,{frontMatter:i}),`
`,n.jsx(e.h2,{children:"Part 1"}),`
`,n.jsxs(e.p,{children:["There are 8 neighbor positions to test, which can be iterated by enumerating the relative coordinates for row and column. For each position, check if it's in bounds and contains a ",n.jsx(e.code,{children:"@"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-rust",children:`fn neighbors(data: &Vec<Vec<char>>, i: isize, j: isize, w: isize, h: isize) -> usize {
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
`,n.jsxs(e.p,{children:["Part 1 just counts the cells that contain ",n.jsx(e.code,{children:"@"})," and have fewer than 4 ",n.jsx(e.code,{children:"@"})," neighbors."]}),`
`,n.jsx(e.h2,{children:"Part 2"}),`
`,n.jsx(e.p,{children:"I guess, the only pitfall here is to make sure to update the grid simultaneously because earlier updates can affect tests for later cells. I save a list of cells to update, and then apply the updates after iterating through the whole grid. I stop when there are no more updates to apply."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-rust",children:`loop {
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
`})}),`
`,n.jsx(r,{frontMatter:i})]})}function d(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{d as default,i as frontMatter};
