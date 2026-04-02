import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import{n,t as r}from"./_components-BiUCgGl-.js";var i=`/assets/day12-chat-B7UQH992.png`,a=e(),o={tags:[`Puzzle`],title:`Advent of Code 2025 - Day 12: Christmas Tree Farm`,description:`Advent of Code 2025 - Day 12: Christmas Tree Farm, a problem that involves Puzzle. Solution written in Rust, with detailed walkthrough and proof.`,year:2025,day:12};function s(e){let s={code:`code`,h1:`h1`,img:`img`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.h1,{children:[`Advent of Code 2025 - Day 12`,(0,a.jsx)(s.span,{className:`subtitle`,children:`Christmas Tree Farm`})]}),(0,a.jsx)(n,{frontMatter:o}),`
`,(0,a.jsx)(s.p,{children:`An all-time classic:`}),`
`,`
`,(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:i,alt:`Josh-Cena in Discord: "Grrr, it's tetris all over again"; half an hour later: "YOU CAN'T BE SERIOUS" "OK this year I successfully wasted... checks notes... 3 hours of my life doing pointless things in AoC"`,width:1530,height:310})}),`
`,(0,a.jsx)(s.p,{children:`Let's see what the pointless thing is.`}),`
`,(0,a.jsxs)(s.p,{children:[`First, regarding parsing the input. The regions are fairly straightforwardly `,(0,a.jsx)(s.code,{children:`Vec<(usize, usize, Vec<usize>)>`}),`. For the shapes, since they can be freely rotated and flipped, I decided to precompute all rotations and flips of each shape, as a struct:`]}),`
`,(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:`language-rust`,children:`struct Shape {
    cells: Vec<(usize, usize)>,
    block_id: usize,
}
`})}),`
`,(0,a.jsx)(s.p,{children:`Now we need to test if we can pack said shapes into the regions. First, there are two obvious bounds: since each shape is is bounded by a 3x3 square, if we treat them as 3x3 blocks, and the region is still able to fit them, then we can pack them.`}),`
`,(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:`language-rust`,children:`let definitely_fits = (width / 3) * (height / 3) >= counts.iter().sum::<usize>();
`})}),`
`,(0,a.jsx)(s.p,{children:`Conversely, if the region's total area is less than the total area of the shapes, then it definitely doesn't fit, no matter how nicely we can pack them.`}),`
`,(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:`language-rust`,children:`let shape_area = counts
    .iter()
    .enumerate()
    .map(|(i, &x)| x * shapes.iter().find(|s| s.block_id == i).unwrap().cells.len())
    .sum::<usize>();
let definitely_not_fit = width * height < shape_area;
`})}),`
`,(0,a.jsx)(s.p,{children:`For the remaining cases, I implemented a backtracking search. I picture it as a game of Tetris: the shapes are dropped one by one, each time it can be dropped along any column, but it has to be dropped as far as possible. If at any point the shape cannot be dropped, we backtrack and try a different column or a different shape.`}),`
`,(0,a.jsxs)(s.p,{children:[`But... but... *gasps* It turns out that this case doesn't exist!! Every region is either `,(0,a.jsx)(s.code,{children:`definitely_fits`}),` or `,(0,a.jsx)(s.code,{children:`definitely_not_fit`}),`. So this hugely expensive `,(0,a.jsx)(s.code,{children:`search`}),` function is never called.`]}),`
`,(0,a.jsx)(s.p,{children:`Anyway, I'm extremely underwhelmed by this meme problem on the last day. I get that problems are usually easy on the last day, but it used to be Christmas day when everyone was busy, and now it's just the 12th and everyone's supposed to be having fun. I was amused but also bummed.`}),(0,a.jsx)(r,{frontMatter:o})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}export{o as n,c as t};