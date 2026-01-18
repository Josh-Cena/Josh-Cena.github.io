import{u as r,j as e}from"./index-CuM7bDfp.js";import{F as i,a as o}from"./_components-1-OWSA-J.js";const s={tags:["Puzzle"],description:"Advent of Code 2020 - Day 5: Binary Boarding, a problem that involves Puzzle. Solution written in Python, with detailed walkthrough and proof.",year:2020,day:5,title:"Advent of Code 2020 - Day 5: Binary Boarding"};function a(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2020 - Day 5",e.jsx(n.span,{className:"subtitle",children:"Binary Boarding"})]}),`
`,`
`,e.jsx(i,{frontMatter:s}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:['This problem is a "pseudo binary search", because actually ',e.jsx(n.em,{children:"we"})," aren't doing the search; the input tells us how to do it."]}),`
`,e.jsxs(n.p,{children:["Of course you can actually do the binary search, keeping track of the min and max of the range, and shrinking it based on the next character, but there's one neat trick: you can treat the input as a binary number, where ",e.jsx(n.code,{children:"F"})," and ",e.jsx(n.code,{children:"L"})," are ",e.jsx(n.code,{children:"0"}),", and ",e.jsx(n.code,{children:"B"})," and ",e.jsx(n.code,{children:"R"})," are ",e.jsx(n.code,{children:"1"}),". It works like this: for the row number, it's a 7-bit binary number from ",e.jsx(n.code,{children:"0000000"})," to ",e.jsx(n.code,{children:"1111111"})," (0 to 127). If the first character is ",e.jsx(n.code,{children:"F"}),", that means the row is in the first half, which is ",e.jsx(n.code,{children:"0000000"})," to ",e.jsx(n.code,{children:"0111111"})," (0 to 63), and therefore the first bit is ",e.jsx(n.code,{children:"0"}),". If the second character is ",e.jsx(n.code,{children:"B"}),", that means the row is in the second half, which is ",e.jsx(n.code,{children:"0100000"})," to ",e.jsx(n.code,{children:"0111111"})," (32 to 63), and therefore the second bit is ",e.jsx(n.code,{children:"1"}),". And so on."]}),`
`,e.jsxs(n.p,{children:["It so happens that ",e.jsx(n.code,{children:"row * 8 + column"})," is equivalent to the concatenation of the row bits and the column bits. This means we can map each boarding pass to the seat ID in just two lines:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`def find_seat(boarding_pass: str):
    pass_num = (
        boarding_pass.replace("F", "0")
        .replace("B", "1")
        .replace("L", "0")
        .replace("R", "1")
    )
    return int(pass_num, 2)
`})}),`
`,e.jsxs(n.p,{children:["And then we can find the maximum seat ID just with a ",e.jsx(n.code,{children:"max"}),"."]}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsx(n.p,{children:"We can use the same function to find all the seat IDs, and then find the missing one by checking which ID is not in the set but both its neighbors are—that is, a gap of 2 in the sorted list of seat IDs."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`seats = sorted([find_seat(line) for line in data])
for i in range(1, len(seats)):
    if seats[i] - seats[i - 1] == 2:
        print(seats[i] - 1)
        break
`})}),`
`,e.jsx(o,{frontMatter:s})]})}function d(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{d as default,s as frontMatter};
