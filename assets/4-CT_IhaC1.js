import{u as s,j as e}from"./index-BnEAZLVO.js";import{P as o,a as r}from"./_components-CRYqM7VG.js";import"./_commonjsHelpers-Cpj98o6Y.js";const i={tags:["Cellular automata"],title:"Advent of Code 2025 - Day 4: Printing Department",description:"Advent of Code 2025 - Day 4: Printing Department, a problem that involves Cellular automata. Solution written in Rust, with detailed walkthrough and proof.",year:2025,day:4};function a(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2025 - Day 4",e.jsx(n.span,{className:"subtitle",children:"Printing Department"})]}),`
`,`
`,e.jsx(o,{frontMatter:i}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:["There are 8 neighbor positions to test, which can be iterated by enumerating the relative coordinates for row and column. For each position, check if it's in bounds and contains a ",e.jsx(n.code,{children:"@"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-rust",children:`fn neighbors(data: &Vec<Vec<char>>, i: isize, j: isize, w: isize, h: isize) -> usize {
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
`,e.jsxs(n.p,{children:["Part 1 just counts the cells that contain ",e.jsx(n.code,{children:"@"})," and have fewer than 4 ",e.jsx(n.code,{children:"@"})," neighbors."]}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsx(n.p,{children:"I guess, the only pitfall here is to make sure to update the grid simultaneously because earlier updates can affect tests for later cells. I save a list of cells to update, and then apply the updates after iterating through the whole grid. I stop when there are no more updates to apply."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-rust",children:`loop {
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
`,e.jsx(r,{frontMatter:i})]})}function h(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{h as default,i as frontMatter};
