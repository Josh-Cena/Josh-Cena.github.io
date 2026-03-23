import{t as e}from"./jsx-runtime-DAs1UGHr.js";import{n as t}from"./lib-T-nEWGuF.js";import{n,t as r}from"./_components-DgNpooeQ.js";var i=e(),a={tags:[`Geometry`,`Coordinate compression`],title:`Advent of Code 2025 - Day 9: Movie Theater`,description:`Advent of Code 2025 - Day 9: Movie Theater, a problem that involves Geometry and Coordinate compression. Solution written in Rust, with detailed walkthrough and proof.`,year:2025,day:9};function o(e){let o={annotation:`annotation`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,img:`img`,math:`math`,mn:`mn`,mrow:`mrow`,msup:`msup`,p:`p`,pre:`pre`,semantics:`semantics`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2025 - Day 9`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Movie Theater`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsx)(o.p,{children:`Just enumerate all pairs of points and find the largest rectangle area.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-rust`,children:`let max_area = coords
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
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(o.p,{children:[`Now we want the rectangle that's `,(0,i.jsx)(o.em,{children:`inscribed`}),` in the polygon. The polygon looks like this:`]}),`
`,(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{src:`https://github.com/Josh-Cena/aoc2025/blob/master/src/day9.png?raw=true`,alt:`Polygon`})}),`
`,(0,i.jsx)(o.p,{children:`In case this gives any more intuition 😉`}),`
`,(0,i.jsxs)(o.p,{children:[`I'd like to keep the same approach of enumerating pairs of points, but now with an additional check to see if the rectangle ever intersects with the polygon. The most straightforward way is to paint the polygon on a grid and check if any point in the rectangle is not painted; however, since the coordinates span about `,(0,i.jsxs)(o.span,{className:`katex`,children:[(0,i.jsx)(o.span,{className:`katex-mathml`,children:(0,i.jsx)(o.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,i.jsxs)(o.semantics,{children:[(0,i.jsx)(o.mrow,{children:(0,i.jsxs)(o.msup,{children:[(0,i.jsx)(o.mn,{children:`10`}),(0,i.jsx)(o.mn,{children:`6`})]})}),(0,i.jsx)(o.annotation,{encoding:`application/x-tex`,children:`10^6`})]})})}),(0,i.jsx)(o.span,{className:`katex-html`,"aria-hidden":`true`,children:(0,i.jsxs)(o.span,{className:`base`,children:[(0,i.jsx)(o.span,{className:`strut`,style:{height:`0.8141em`}}),(0,i.jsx)(o.span,{className:`mord`,children:`1`}),(0,i.jsxs)(o.span,{className:`mord`,children:[(0,i.jsx)(o.span,{className:`mord`,children:`0`}),(0,i.jsx)(o.span,{className:`msupsub`,children:(0,i.jsx)(o.span,{className:`vlist-t`,children:(0,i.jsx)(o.span,{className:`vlist-r`,children:(0,i.jsx)(o.span,{className:`vlist`,style:{height:`0.8141em`},children:(0,i.jsxs)(o.span,{style:{top:`-3.063em`,marginRight:`0.05em`},children:[(0,i.jsx)(o.span,{className:`pstrut`,style:{height:`2.7em`}}),(0,i.jsx)(o.span,{className:`sizing reset-size6 size3 mtight`,children:(0,i.jsx)(o.span,{className:`mord mtight`,children:`6`})})]})})})})})]})]})})]}),` units, we can't map the coordinates directly to grid indices. Instead, we can use coordinate compression to map the coordinates to a smaller grid, noticing that most grid indices are unnecessary since only the corner coordinates of the polygon are relevant.`]}),`
`,(0,i.jsxs)(o.p,{children:[`I've done this many times. First I create two lookup tables, one decompressor and one compressor. I map coordinates to the range `,(0,i.jsx)(o.code,{children:`1..=n`}),`, because I want to reserve a rim of padding around the grid for flood-filling the outside.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-rust`,children:`let x_decompressor = coords
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
`,(0,i.jsx)(o.p,{children:`This is the new shape:`}),`
`,(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{src:`https://github.com/Josh-Cena/aoc2025/blob/master/src/day9_compressed.png?raw=true`,alt:`Compressed polygon`})}),`
`,(0,i.jsx)(o.p,{children:`Now ideally I can start from an interior point and flood-fill the inside of the polygon. However, finding an interior point is a bit tricky, so instead I flood-fill the outside of the polygon. I've also done this many times.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-rust`,children:`let mut visited = vec![vec![false; y_max + 2]; x_max + 2];
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
`,(0,i.jsxs)(o.p,{children:[`Because the polygon has no "holes", any rectangle that intersects with the outside must also intersect with the polygon. So we can just check if any point on the rectangle border is marked as `,(0,i.jsx)(o.code,{children:`2`}),`.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-rust`,children:`let (x1, y1) = pair[0];
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
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};