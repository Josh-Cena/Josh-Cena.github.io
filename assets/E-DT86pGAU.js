import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import"./ColorMode-Bu3f-yWT.js";import{n as t}from"./lib-BHnTV9cU.js";import"./Link-CEJsqf-b.js";import{t as n}from"./Canvas-C-RE4VSN.js";import"./chroma-js-DuFX2F1K.js";import{i as r,r as i}from"./_components-DtU0Oezi.js";var a=e(),o={};function s(e){let s={code:`code`,h1:`h1`,li:`li`,p:`p`,span:`span`,ul:`ul`,...t(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.h1,{children:[`NACLO 2026 - Problem E`,(0,a.jsx)(s.span,{className:`subtitle`,children:`A Typical Problem`})]}),(0,a.jsx)(r,{frontMatter:e}),`
`,(0,a.jsx)(s.p,{children:`E1:`}),`
`,(0,a.jsxs)(s.ul,{children:[`
`,(0,a.jsx)(s.li,{children:`(a) gives "no" to snake, snail, clam, and eel; all 4 don't have legs, so (a) = has legs.`}),`
`,(0,a.jsx)(s.li,{children:`(b) gives "no" to snail, but snail has a shell, so (b) = underwater.`}),`
`,(0,a.jsx)(s.li,{children:`That leaves (c) = has a shell.`}),`
`]}),`
`,(0,a.jsx)(s.p,{children:`E2:`}),`
`,(0,a.jsxs)(s.ul,{children:[`
`,(0,a.jsx)(s.li,{children:`clam has a shell, so (1) = Y`}),`
`,(0,a.jsx)(s.li,{children:`eel is underwater and has no shell, so (2) = Y, (3) = N`}),`
`,(0,a.jsx)(s.li,{children:`lizard is not underwater and has no shell, so (4) = N, (5) = N`}),`
`,(0,a.jsx)(s.li,{children:`axolotl is underwater, so (6) = Y`}),`
`]}),`
`,(0,a.jsx)(s.p,{children:`In E3, we have an animal underwater with legs and shell, so it's believed to be a hermit crab.`}),`
`,(0,a.jsx)(s.p,{children:`The second half of the problem is IMO not very clear about the procedure and would make background knowledge about OCR very helpful. When it says "nine regions of this grid", it actually means dividing the 6x6 grid into 9 2x2 subgrids. All we need to figure out is how to turn each 2x2 subgrid into a Y/N answer that matches the given result.`}),`
`,(0,a.jsx)(s.p,{children:`We need to understand the algorithm of each feature, one by one. Start with the first one.`}),`
`,`
`,(0,a.jsx)(n,{code:(e,t,n,r,i)=>{o.grids={R:`
#####.
#....#
#####.
#..#..
#...#.
#....#`,A:`
..##..
.#..#.
.#..#.
.####.
#....#
#....#`,F:`
######
#.....
#####.
#.....
#.....
#.....`,Z:`
######
....#.
...#..
..#...
.#....
######`,M:`
#....#
##..##
#.##.#
#....#
#....#
#....#`,Q:`
.####.
#....#
#....#
#..#.#
#...#.
.###.#`},o.plotGrid=function(e,t,n,i,a){let o=this.grids[i].trim().split(`
`).map(e=>e.split(``));e.fillStyle=`#39cac480`;for(let r=0;r<o.length;r++)for(let i=0;i<o[r].length;i++)o[r][i]===`#`&&e.fillRect(i*20+t,r*20+n,20,20);e.strokeStyle=`#80808060`,e.lineWidth=1,e.beginPath();for(let r=0;r<=o.length;r++)e.moveTo(t,r*20+n),e.lineTo(o[0].length*20+t,r*20+n),e.moveTo(r*20+t,n),e.lineTo(r*20+t,o.length*20+n);e.stroke(),e.strokeStyle=r,e.lineWidth=2,e.strokeRect(t,n,o[0].length*20,o.length*20),e.beginPath();for(let r=2;r<=4;r+=2)e.moveTo(t,r*20+n),e.lineTo(o[0].length*20+t,r*20+n),e.moveTo(r*20+t,n),e.lineTo(r*20+t,o.length*20+n);if(e.stroke(),!a)return;let s=a.split(`/`).map(e=>e.split(``));e.fillStyle=r,e.font=`24px monospace`,e.textAlign=`center`,e.textBaseline=`middle`;for(let r=0;r<s.length;r++)for(let i=0;i<s[r].length;i++)e.fillText(s[r][i],i*40+t+20,r*40+n+20)},o.plotGrid(e,10,10,`R`,`YNN/YYN/NNN`),o.plotGrid(e,150,10,`A`,`NNN/NNN/NNN`),o.plotGrid(e,290,10,`Z`),o.plotGrid(e,430,10,`M`)},width:570,height:140}),`
`,(0,a.jsxs)(s.p,{children:[`One algorithm compatible with what we see with "R" and "A" is that "Y" is returned if there are 3 or more filled squares in the 2x2 subgrid (we don't know what happens with 4 filled squares, but it doesn't matter since we don't have any of those in the input). Therefore for "Z", we get (8) = `,(0,a.jsx)(s.code,{children:`NNY/NNN/YNN`}),`, and for "M", we get (9) = `,(0,a.jsx)(s.code,{children:`YNY/NNN/NNN`}),`.`]}),`
`,(0,a.jsx)(s.p,{children:`Next for feature 2:`}),`
`,(0,a.jsx)(n,{code:(e,t,n,r,i)=>{o.plotGrid(e,10,10,`R`,`YYY/YYY/YNY`),o.plotGrid(e,150,10,`F`,`YYY/YYY/YNN`),o.plotGrid(e,290,10,`Z`,`YYY/NYN/YYY`),o.plotGrid(e,430,10,`M`)},width:570,height:140}),`
`,(0,a.jsxs)(s.p,{children:[`"Y" is returned whenever the subgrid is not empty. Therefore for "M", we get (10) = `,(0,a.jsx)(s.code,{children:`YNY/YYY/YNY`}),`.`]}),`
`,(0,a.jsx)(s.p,{children:`For feature 3:`}),`
`,(0,a.jsx)(n,{code:(e,t,n,r,i)=>{o.plotGrid(e,10,10,`R`,`NYN/NNN/YNN`),o.plotGrid(e,150,10,`A`,`NYN/YYY/YNY`),o.plotGrid(e,290,10,`F`),o.plotGrid(e,430,10,`Q`)},width:570,height:140}),`
`,(0,a.jsxs)(s.p,{children:[`"Y" is returned when the subgrid has only 2 filled squares in the same row or column. Therefore "F": (7) = `,(0,a.jsx)(s.code,{children:`NYY/NYN/YNN`}),`; "Q": (11) = `,(0,a.jsx)(s.code,{children:`NYN/YNY/NYN`}),`.`]}),`
`,(0,a.jsx)(s.p,{children:`Finally, for feature 4:`}),`
`,(0,a.jsx)(n,{code:(e,t,n,r,i)=>{o.plotGrid(e,10,10,`R`,`NNY/NNN/NNY`),o.plotGrid(e,150,10,`Z`,`NNN/NYN/NNN`),o.plotGrid(e,290,10,`Q`)},width:570,height:140}),`
`,(0,a.jsxs)(s.p,{children:[`"Y" is returned when the subgrid has only 2 filled squares in the same diagonal. Therefore for "Q", we get (12) = `,(0,a.jsx)(s.code,{children:`YNY/NNN/YNY`}),`.`]}),`
`,(0,a.jsx)(s.p,{children:`Now we can apply this algorithm to the 2 given grids.`}),`
`,(0,a.jsx)(n,{code:(e,t,n,r,i)=>{o.grids.P=`
#####.
#...#.
#####.
#.....
#.....
#.....`,o.plotGrid(e,10,10,`P`,`YNN/YNN/NNN`),o.plotGrid(e,150,10,`P`,`YYY/YYY/YNN`),o.plotGrid(e,290,10,`P`,`NYY/NYN/YNN`),o.plotGrid(e,430,10,`P`,`NNN/NNN/NNN`)},width:570,height:140}),`
`,(0,a.jsx)(s.p,{children:`Features 2 and 3 exactly match those of "F", so this returns "F".`}),`
`,(0,a.jsx)(n,{code:(e,t,n,r,i)=>{o.grids.X=`
.#..#.
##..#.
##.###
..#...
....#.
##..##`,o.plotGrid(e,10,10,`X`,`YNN/NNN/NNY`),o.plotGrid(e,150,10,`X`,`YNY/YYY/YNY`),o.plotGrid(e,290,10,`X`,`NNY/YNY/YNN`),o.plotGrid(e,430,10,`X`,`NNN/NYN/NNN`)},width:570,height:140}),`
`,(0,a.jsx)(s.p,{children:`I'm not sure how exactly one is supposed to see this, but these 4 features all match those of "N" (a diagonal in the middle; straight lines in bottom left and top right; top and bottom two subgrids empty).`}),`
`,(0,a.jsx)(n,{code:(e,t,n,r,i)=>{o.grids.GQ=`
#...#.
.###.#
...##.
##..#.
.##.#.
#.#..#`,o.plotGrid(e,10,10,`GQ`,`NNN/NNN/NNN`),o.plotGrid(e,150,10,`GQ`,`YYY/YYY/YYY`),o.plotGrid(e,290,10,`GQ`,`NYN/YNY/NYN`),o.plotGrid(e,430,10,`GQ`,`YNY/NNN/YNY`)},width:570,height:140}),`
`,(0,a.jsx)(s.p,{children:`If one bites the bullet and at least calculate the feature responses for all 7 input grids given, then these 4 features all match both those of "G" and "Q" (their only differences are in the right and bottom right subgrids, but one always contains a straight edge and the other always contains a diagonal, so they have the same feature responses).`}),(0,a.jsx)(i,{frontMatter:e})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}c.meta={tags:[`Computational`],title:`NACLO 2026 - Problem E: A Typical Problem`,description:`NACLO 2026 - Problem E: A Typical Problem, a problem that involves Computational. Detailed solution and walkthrough.`,year:2026,prob:`E`};export{o as canvasResources,c as default};