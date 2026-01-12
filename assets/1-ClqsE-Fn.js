import{u as o,j as e}from"./index-Cpgx5Zsn.js";import{F as i,a as c}from"./_components-AhTRSQH8.js";const r={description:"Advent of Code 2021 - Day 1: Sonar Sweep. Written in TypeScript.",tags:["Brute force","Mathematics"],year:2021,day:1,title:"AoC 2021 D1: Sonar Sweep"};function s(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"AoC 2021 D1: Sonar Sweep"}),`
`,`
`,e.jsx(i,{frontMatter:r}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:["Just iterate through the list and count the number of times the current number is larger than the previous one: ",e.jsx(n.code,{children:"nums[i-1] < nums[i]"}),". Because there needs to be a previous number to compare to, we start from the second number."]}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["No need to actually build the sliding windows. If ",e.jsx(n.code,{children:"nums[i] + nums[i-1] + nums[i-2] < nums[i+1] + nums[i] + nums[i-1]"}),", then ",e.jsx(n.code,{children:"nums[i-2] < nums[i+1]"}),". Therefore we can use the same logic as part 1, but compare ",e.jsx(n.code,{children:"nums[i]"})," with ",e.jsx(n.code,{children:"nums[i-3]"}),", so ",e.jsx(n.code,{children:"i"})," starts from 3."]}),`
`,e.jsx(c,{frontMatter:r})]})}function h(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{h as default,r as frontMatter};
