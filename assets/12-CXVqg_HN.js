import{u as i,j as e}from"./index-DKP0lJ-S.js";import{P as r,a as o}from"./_components-DSPmqsHQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";const h="/assets/day12-chat-B7UQH992.png",n={tags:["Puzzle"],title:"Advent of Code 2025 - Day 12: Christmas Tree Farm",description:"Advent of Code 2025 - Day 12: Christmas Tree Farm, a problem that involves Puzzle. Solution written in Rust, with detailed walkthrough and proof.",year:2025,day:12};function a(s){const t={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",span:"span",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.h1,{children:["Advent of Code 2025 - Day 12",e.jsx(t.span,{className:"subtitle",children:"Christmas Tree Farm"})]}),`
`,`
`,e.jsx(r,{frontMatter:n}),`
`,e.jsx(t.p,{children:"An all-time classic:"}),`
`,`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:h,alt:`Josh-Cena in Discord: "Grrr, it's tetris all over again"; half an hour later: "YOU CAN'T BE SERIOUS" "OK this year I successfully wasted... checks notes... 3 hours of my life doing pointless things in AoC"`,width:1530,height:310})}),`
`,e.jsx(t.p,{children:"Let's see what the pointless thing is."}),`
`,e.jsxs(t.p,{children:["First, regarding parsing the input. The regions are fairly straightforwardly ",e.jsx(t.code,{children:"Vec<(usize, usize, Vec<usize>)>"}),". For the shapes, since they can be freely rotated and flipped, I decided to precompute all rotations and flips of each shape, as a struct:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-rust",children:`struct Shape {
    cells: Vec<(usize, usize)>,
    block_id: usize,
}
`})}),`
`,e.jsx(t.p,{children:"Now we need to test if we can pack said shapes into the regions. First, there are two obvious bounds: since each shape is is bounded by a 3x3 square, if we treat them as 3x3 blocks, and the region is still able to fit them, then we can pack them."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-rust",children:`let definitely_fits = (width / 3) * (height / 3) >= counts.iter().sum::<usize>();
`})}),`
`,e.jsx(t.p,{children:"Conversely, if the region's total area is less than the total area of the shapes, then it definitely doesn't fit, no matter how nicely we can pack them."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-rust",children:`let shape_area = counts
    .iter()
    .enumerate()
    .map(|(i, &x)| x * shapes.iter().find(|s| s.block_id == i).unwrap().cells.len())
    .sum::<usize>();
let definitely_not_fit = width * height < shape_area;
`})}),`
`,e.jsx(t.p,{children:"For the remaining cases, I implemented a backtracking search. I picture it as a game of Tetris: the shapes are dropped one by one, each time it can be dropped along any column, but it has to be dropped as far as possible. If at any point the shape cannot be dropped, we backtrack and try a different column or a different shape."}),`
`,e.jsxs(t.p,{children:["But... but... *gasps* It turns out that this case doesn't exist!! Every region is either ",e.jsx(t.code,{children:"definitely_fits"})," or ",e.jsx(t.code,{children:"definitely_not_fit"}),". So this hugely expensive ",e.jsx(t.code,{children:"search"})," function is never called."]}),`
`,e.jsx(t.p,{children:"Anyway, I'm extremely underwhelmed by this meme problem on the last day. I get that problems are usually easy on the last day, but it used to be Christmas day when everyone was busy, and now it's just the 12th and everyone's supposed to be having fun. I was amused but also bummed."}),`
`,e.jsx(o,{frontMatter:n})]})}function p(s={}){const{wrapper:t}={...i(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(a,{...s})}):a(s)}export{p as default,n as frontMatter};
