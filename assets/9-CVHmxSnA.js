import{u as a,j as e}from"./index-DsugHUjk.js";import{P as o,a as i}from"./_components-GobSWsVa.js";import"./_commonjsHelpers-Cpj98o6Y.js";const t={tags:["Geometry","Coordinate compression"],title:"Advent of Code 2025 - Day 9: Movie Theater",description:"Advent of Code 2025 - Day 9: Movie Theater, a problem that involves Geometry and Coordinate compression. Solution written in Rust, with detailed walkthrough and proof.",year:2025,day:9};function r(s){const n={annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",math:"math",mn:"mn",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2025 - Day 9",e.jsx(n.span,{className:"subtitle",children:"Movie Theater"})]}),`
`,`
`,e.jsx(o,{frontMatter:t}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsx(n.p,{children:"Just enumerate all pairs of points and find the largest rectangle area."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-rust",children:`let max_area = coords
    .iter()
    .combinations(2)
    .map(|pair| {
        let (x1, y1) = pair[0];
        let (x2, y2) = pair[1];
        ((x1 - x2).abs() + 1) * ((y1 - y2).abs() + 1)
    })
    .max()
    .unwrap();
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["Now we want the rectangle that's ",e.jsx(n.em,{children:"inscribed"})," in the polygon. The polygon looks like this:"]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"https://github.com/Josh-Cena/aoc2025/blob/master/src/day9.png?raw=true",alt:"Polygon"})}),`
`,e.jsx(n.p,{children:"In case this gives any more intuition 😉"}),`
`,e.jsxs(n.p,{children:["I'd like to keep the same approach of enumerating pairs of points, but now with an additional check to see if the rectangle ever intersects with the polygon. The most straightforward way is to paint the polygon on a grid and check if any point in the rectangle is not painted; however, since the coordinates span about ",e.jsxs(n.span,{className:"katex",children:[e.jsx(n.span,{className:"katex-mathml",children:e.jsx(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:e.jsxs(n.semantics,{children:[e.jsx(n.mrow,{children:e.jsxs(n.msup,{children:[e.jsx(n.mn,{children:"10"}),e.jsx(n.mn,{children:"6"})]})}),e.jsx(n.annotation,{encoding:"application/x-tex",children:"10^6"})]})})}),e.jsx(n.span,{className:"katex-html","aria-hidden":"true",children:e.jsxs(n.span,{className:"base",children:[e.jsx(n.span,{className:"strut",style:{height:"0.8141em"}}),e.jsx(n.span,{className:"mord",children:"1"}),e.jsxs(n.span,{className:"mord",children:[e.jsx(n.span,{className:"mord",children:"0"}),e.jsx(n.span,{className:"msupsub",children:e.jsx(n.span,{className:"vlist-t",children:e.jsx(n.span,{className:"vlist-r",children:e.jsx(n.span,{className:"vlist",style:{height:"0.8141em"},children:e.jsxs(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[e.jsx(n.span,{className:"pstrut",style:{height:"2.7em"}}),e.jsx(n.span,{className:"sizing reset-size6 size3 mtight",children:e.jsx(n.span,{className:"mord mtight",children:"6"})})]})})})})})]})]})})]})," units, we can't map the coordinates directly to grid indices. Instead, we can use coordinate compression to map the coordinates to a smaller grid, noticing that most grid indices are unnecessary since only the corner coordinates of the polygon are relevant."]}),`
`,e.jsxs(n.p,{children:["I've done this many times. First I create two lookup tables, one decompressor and one compressor. I map coordinates to the range ",e.jsx(n.code,{children:"1..=n"}),", because I want to reserve a rim of padding around the grid for flood-filling the outside."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-rust",children:`let x_decompressor = coords
    .iter()
    .map(|&(x, _)| x)
    .sorted()
    .dedup()
    .enumerate()
    .map(|(i, v)| (i + 1, v))
    .collect::<BTreeMap<_, _>>();
let y_decompressor = coords
    .iter()
    .map(|&(_, y)| y)
    .sorted()
    .dedup()
    .enumerate()
    .map(|(i, v)| (i + 1, v))
    .collect::<BTreeMap<_, _>>();
let x_compressor = x_decompressor
    .iter()
    .map(|(&new, &old)| (old, new))
    .collect::<BTreeMap<_, _>>();
let y_compressor = y_decompressor
    .iter()
    .map(|(&new, &old)| (old, new))
    .collect::<BTreeMap<_, _>>();
let x_max = x_decompressor.len();
let y_max = y_decompressor.len();
let mut grid = vec![vec![0; y_max + 2]; x_max + 2];
for (&(x1, y1), &(x2, y2)) in coords
    .iter()
    .chain(std::iter::once(&coords[0]))
    .tuple_windows()
{
    let cx1 = *x_compressor.get(&x1).unwrap();
    let cy1 = *y_compressor.get(&y1).unwrap();
    let cx2 = *x_compressor.get(&x2).unwrap();
    let cy2 = *y_compressor.get(&y2).unwrap();
    if cx1 == cx2 {
        for y in cy1.min(cy2)..=cy1.max(cy2) {
            grid[cx1][y] = 1;
        }
    } else {
        for x in cx1.min(cx2)..=cx1.max(cx2) {
            grid[x][cy1] = 1;
        }
    }
}
`})}),`
`,e.jsx(n.p,{children:"This is the new shape:"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"https://github.com/Josh-Cena/aoc2025/blob/master/src/day9_compressed.png?raw=true",alt:"Compressed polygon"})}),`
`,e.jsx(n.p,{children:"Now ideally I can start from an interior point and flood-fill the inside of the polygon. However, finding an interior point is a bit tricky, so instead I flood-fill the outside of the polygon. I've also done this many times."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-rust",children:`let mut visited = vec![vec![false; y_max + 2]; x_max + 2];
let mut st = vec![(0, 0)];
visited[0][0] = true;
while let Some((x, y)) = st.pop() {
    grid[x][y] = 2;
    for (nx, ny) in neighbors(x, y, grid.len(), grid[0].len()) {
        if !visited[nx][ny] && grid[nx][ny] != 1 {
            visited[nx][ny] = true;
            st.push((nx, ny));
        }
    }
}
`})}),`
`,e.jsxs(n.p,{children:['Because the polygon has no "holes", any rectangle that intersects with the outside must also intersect with the polygon. So we can just check if any point on the rectangle border is marked as ',e.jsx(n.code,{children:"2"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-rust",children:`let (x1, y1) = pair[0];
let (x2, y2) = pair[1];
let cx1 = *x_compressor.get(&x1).unwrap();
let cy1 = *y_compressor.get(&y1).unwrap();
let cx2 = *x_compressor.get(&x2).unwrap();
let cy2 = *y_compressor.get(&y2).unwrap();
for x in cx1.min(cx2)..=cx1.max(cx2) {
    if grid[x][cy1] == 2 || grid[x][cy2] == 2 {
        return false;
    }
}
for y in cy1.min(cy2)..=cy1.max(cy2) {
    if grid[cx1][y] == 2 || grid[cx2][y] == 2 {
        return false;
    }
}
true
`})}),`
`,e.jsx(i,{frontMatter:t})]})}function m(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{m as default,t as frontMatter};
