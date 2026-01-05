import{u as r,j as e}from"./index-BkHp0GFc.js";import{F as s,a as c}from"./_components-Bb0yU4yQ.js";const a={description:"Advent of Code 2019 - Day 8: Space Image Format. Written in C++.",tags:["Image processing","Manual inspection"],year:2019,day:8,title:"AoC 2019 D8: Space Image Format"};function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"AoC 2019 D8: Space Image Format"}),`
`,`
`,e.jsx(s,{frontMatter:a}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:["I don't even need to build an actual 3D array representing the image. I know that ",e.jsx(n.code,{children:"width = 25"})," and ",e.jsx(n.code,{children:"height = 6"}),", so I have ",e.jsx(n.code,{children:"layer_size = width * height"})," and ",e.jsx(n.code,{children:"num_layers = input.size() / layer_size"}),". Then I can iterate over ",e.jsx(n.code,{children:"layer"})," and ",e.jsx(n.code,{children:"i"})," and index into ",e.jsx(n.code,{children:"input[layer * layer_size + i]"}),"."]}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["I built the image as a ",e.jsx(n.code,{children:"vector<int>"}),", where each element is ",e.jsx(n.code,{children:"2"})," (transparent) initially. Then I iterate over each layer and update the pixel in the image if it is still transparent. Finally I print it out by iterating over ",e.jsx(n.code,{children:"0..height"})," and ",e.jsx(n.code,{children:"0..width"}),". Originally I printed them backwards (",e.jsx(n.code,{children:"0"})," as ",e.jsx(n.code,{children:"#"}),` since it's "black"), but then I realized it's easier to read with `,e.jsx(n.code,{children:"1"})," as ",e.jsx(n.code,{children:"#"})," since the console background is black."]}),`
`,e.jsx(n.p,{children:"I take a second to admire the ASCII art:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plain",children:`#     ##  #   ##  # ###
#    #  # #   ##  # #  #
#    #     # # #### ###
#    # ##   #  #  # #  #
#    #  #   #  #  # #  #
####  ###   #  #  # ###
`})}),`
`,e.jsx(c,{frontMatter:a})]})}function h(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{h as default,a as frontMatter};
