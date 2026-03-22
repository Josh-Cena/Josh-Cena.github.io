import{u as j,j as e}from"./index-DtspggIi.js";import{C as N}from"./index-VpBqmHal.js";import{P as G,a as v}from"./_components-B3shFePq.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ciqn2WuZ.js";const f={tags:["Computational"],title:"NACLO 2026 - Problem E: A Typical Problem",description:"NACLO 2026 - Problem E: A Typical Problem, a problem that involves Computational. Detailed solution and walkthrough.",year:2026,prob:"E"},i={};function w(Y){const t={code:"code",h1:"h1",li:"li",p:"p",span:"span",ul:"ul",...j(),...Y.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.h1,{children:["NACLO 2026 - Problem E",e.jsx(t.span,{className:"subtitle",children:"A Typical Problem"})]}),`
`,`
`,e.jsx(G,{frontMatter:f}),`
`,e.jsx(t.p,{children:"E1:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:`(a) gives "no" to snake, snail, clam, and eel; all 4 don't have legs, so (a) = has legs.`}),`
`,e.jsx(t.li,{children:'(b) gives "no" to snail, but snail has a shell, so (b) = underwater.'}),`
`,e.jsx(t.li,{children:"That leaves (c) = has a shell."}),`
`]}),`
`,e.jsx(t.p,{children:"E2:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"clam has a shell, so (1) = Y"}),`
`,e.jsx(t.li,{children:"eel is underwater and has no shell, so (2) = Y, (3) = N"}),`
`,e.jsx(t.li,{children:"lizard is not underwater and has no shell, so (4) = N, (5) = N"}),`
`,e.jsx(t.li,{children:"axolotl is underwater, so (6) = Y"}),`
`]}),`
`,e.jsx(t.p,{children:"In E3, we have an animal underwater with legs and shell, so it's believed to be a hermit crab."}),`
`,e.jsx(t.p,{children:'The second half of the problem is IMO not very clear about the procedure and would make background knowledge about OCR very helpful. When it says "nine regions of this grid", it actually means dividing the 6x6 grid into 9 2x2 subgrids. All we need to figure out is how to turn each 2x2 subgrid into a Y/N answer that matches the given result.'}),`
`,e.jsx(t.p,{children:"We need to understand the algorithm of each feature, one by one. Start with the first one."}),`
`,`
`,e.jsx(N,{code:(o,p,g,a,u)=>{i.grids={R:`
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
.###.#`},i.plotGrid=function(r,l,s,b,m){const h=this.grids[b].trim().split(`
`).map(n=>n.split(""));r.fillStyle="#39cac480";for(let n=0;n<h.length;n++)for(let d=0;d<h[n].length;d++)h[n][d]==="#"&&r.fillRect(d*20+l,n*20+s,20,20);r.strokeStyle="#80808060",r.lineWidth=1,r.beginPath();for(let n=0;n<=h.length;n++)r.moveTo(l,n*20+s),r.lineTo(h[0].length*20+l,n*20+s),r.moveTo(n*20+l,s),r.lineTo(n*20+l,h.length*20+s);r.stroke(),r.strokeStyle=a,r.lineWidth=2,r.strokeRect(l,s,h[0].length*20,h.length*20),r.beginPath();for(let n=2;n<=4;n+=2)r.moveTo(l,n*20+s),r.lineTo(h[0].length*20+l,n*20+s),r.moveTo(n*20+l,s),r.lineTo(n*20+l,h.length*20+s);if(r.stroke(),!m)return;const c=m.split("/").map(n=>n.split(""));r.fillStyle=a,r.font="24px monospace",r.textAlign="center",r.textBaseline="middle";for(let n=0;n<c.length;n++)for(let d=0;d<c[n].length;d++)r.fillText(c[n][d],d*40+l+20,n*40+s+20)},i.plotGrid(o,10,10,"R","YNN/YYN/NNN"),i.plotGrid(o,150,10,"A","NNN/NNN/NNN"),i.plotGrid(o,290,10,"Z"),i.plotGrid(o,430,10,"M")},width:570,height:140}),`
`,e.jsxs(t.p,{children:[`One algorithm compatible with what we see with "R" and "A" is that "Y" is returned if there are 3 or more filled squares in the 2x2 subgrid (we don't know what happens with 4 filled squares, but it doesn't matter since we don't have any of those in the input). Therefore for "Z", we get (8) = `,e.jsx(t.code,{children:"NNY/NNN/YNN"}),', and for "M", we get (9) = ',e.jsx(t.code,{children:"YNY/NNN/NNN"}),"."]}),`
`,e.jsx(t.p,{children:"Next for feature 2:"}),`
`,e.jsx(N,{code:(o,p,g,a,u)=>{i.plotGrid(o,10,10,"R","YYY/YYY/YNY"),i.plotGrid(o,150,10,"F","YYY/YYY/YNN"),i.plotGrid(o,290,10,"Z","YYY/NYN/YYY"),i.plotGrid(o,430,10,"M")},width:570,height:140}),`
`,e.jsxs(t.p,{children:['"Y" is returned whenever the subgrid is not empty. Therefore for "M", we get (10) = ',e.jsx(t.code,{children:"YNY/YYY/YNY"}),"."]}),`
`,e.jsx(t.p,{children:"For feature 3:"}),`
`,e.jsx(N,{code:(o,p,g,a,u)=>{i.plotGrid(o,10,10,"R","NYN/NNN/YNN"),i.plotGrid(o,150,10,"A","NYN/YYY/YNY"),i.plotGrid(o,290,10,"F"),i.plotGrid(o,430,10,"Q")},width:570,height:140}),`
`,e.jsxs(t.p,{children:['"Y" is returned when the subgrid has only 2 filled squares in the same row or column. Therefore "F": (7) = ',e.jsx(t.code,{children:"NYY/NYN/YNN"}),'; "Q": (11) = ',e.jsx(t.code,{children:"NYN/YNY/NYN"}),"."]}),`
`,e.jsx(t.p,{children:"Finally, for feature 4:"}),`
`,e.jsx(N,{code:(o,p,g,a,u)=>{i.plotGrid(o,10,10,"R","NNY/NNN/NNY"),i.plotGrid(o,150,10,"Z","NNN/NYN/NNN"),i.plotGrid(o,290,10,"Q")},width:570,height:140}),`
`,e.jsxs(t.p,{children:['"Y" is returned when the subgrid has only 2 filled squares in the same diagonal. Therefore for "Q", we get (12) = ',e.jsx(t.code,{children:"YNY/NNN/YNY"}),"."]}),`
`,e.jsx(t.p,{children:"Now we can apply this algorithm to the 2 given grids."}),`
`,e.jsx(N,{code:(o,p,g,a,u)=>{i.grids.P=`
#####.
#...#.
#####.
#.....
#.....
#.....`,i.plotGrid(o,10,10,"P","YNN/YNN/NNN"),i.plotGrid(o,150,10,"P","YYY/YYY/YNN"),i.plotGrid(o,290,10,"P","NYY/NYN/YNN"),i.plotGrid(o,430,10,"P","NNN/NNN/NNN")},width:570,height:140}),`
`,e.jsx(t.p,{children:'Features 2 and 3 exactly match those of "F", so this returns "F".'}),`
`,e.jsx(N,{code:(o,p,g,a,u)=>{i.grids.X=`
.#..#.
##..#.
##.###
..#...
....#.
##..##`,i.plotGrid(o,10,10,"X","YNN/NNN/NNY"),i.plotGrid(o,150,10,"X","YNY/YYY/YNY"),i.plotGrid(o,290,10,"X","NNY/YNY/YNN"),i.plotGrid(o,430,10,"X","NNN/NYN/NNN")},width:570,height:140}),`
`,e.jsx(t.p,{children:`I'm not sure how exactly one is supposed to see this, but these 4 features all match those of "N" (a diagonal in the middle; straight lines in bottom left and top right; top and bottom two subgrids empty).`}),`
`,e.jsx(N,{code:(o,p,g,a,u)=>{i.grids.GQ=`
#...#.
.###.#
...##.
##..#.
.##.#.
#.#..#`,i.plotGrid(o,10,10,"GQ","NNN/NNN/NNN"),i.plotGrid(o,150,10,"GQ","YYY/YYY/YYY"),i.plotGrid(o,290,10,"GQ","NYN/YNY/NYN"),i.plotGrid(o,430,10,"GQ","YNY/NNN/YNY")},width:570,height:140}),`
`,e.jsx(t.p,{children:'If one bites the bullet and at least calculate the feature responses for all 7 input grids given, then these 4 features all match both those of "G" and "Q" (their only differences are in the right and bottom right subgrids, but one always contains a straight edge and the other always contains a diagonal, so they have the same feature responses).'}),`
`,e.jsx(v,{frontMatter:f})]})}function x(Y={}){const{wrapper:t}={...j(),...Y.components};return t?e.jsx(t,{...Y,children:e.jsx(w,{...Y})}):w(Y)}export{i as canvasResources,x as default,f as frontMatter};
