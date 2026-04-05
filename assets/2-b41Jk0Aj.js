import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-BHnTV9cU.js";import"./Link-CEJsqf-b.js";import{n,t as r}from"./_components-CjKNIGmQ.js";var i=e();function a(e){let a={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2020 - Day 2`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Password Philosophy`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.h2,{children:`Part 1`}),`
`,(0,i.jsx)(a.p,{children:`Nothing to say here. Just parse the input and check the counts.`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-python`,children:`if count[0] <= password.count(char) <= count[1]:
    total += 1
`})}),`
`,(0,i.jsx)(a.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(a.p,{children:[`The left position check is `,(0,i.jsx)(a.code,{children:`password[ind_range[0] - 1] == char`}),` and the right position check is `,(0,i.jsx)(a.code,{children:`password[ind_range[1] - 1] == char`}),`. We want exactly one of them to be true, so we can use `,(0,i.jsx)(a.code,{children:`!=`}),`.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-python`,children:`if (password[ind_range[0] - 1] == char) != (password[ind_range[1] - 1] == char):
    total += 1
`})}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Brute force`],title:`Advent of Code 2020 - Day 2: Password Philosophy`,description:`Advent of Code 2020 - Day 2: Password Philosophy, a problem that involves Brute force. Solution written in Python, with detailed walkthrough and proof.`,year:2020,day:2};export{o as default};