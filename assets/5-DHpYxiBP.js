import{t as e}from"./jsx-runtime-D57Vegw5.js";import{n as t}from"./lib-rxHYdfSX.js";import{n,t as r}from"./_components-BHKTFOi1.js";var i=e(),a={tags:[`Puzzle`],title:`Advent of Code 2020 - Day 5: Binary Boarding`,description:`Advent of Code 2020 - Day 5: Binary Boarding, a problem that involves Puzzle. Solution written in Python, with detailed walkthrough and proof.`,year:2020,day:5};function o(e){let o={code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`Advent of Code 2020 - Day 5`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Binary Boarding`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,(0,i.jsx)(o.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(o.p,{children:[`This problem is a "pseudo binary search", because actually `,(0,i.jsx)(o.em,{children:`we`}),` aren't doing the search; the input tells us how to do it.`]}),`
`,(0,i.jsxs)(o.p,{children:[`Of course you can actually do the binary search, keeping track of the min and max of the range, and shrinking it based on the next character, but there's one neat trick: you can treat the input as a binary number, where `,(0,i.jsx)(o.code,{children:`F`}),` and `,(0,i.jsx)(o.code,{children:`L`}),` are `,(0,i.jsx)(o.code,{children:`0`}),`, and `,(0,i.jsx)(o.code,{children:`B`}),` and `,(0,i.jsx)(o.code,{children:`R`}),` are `,(0,i.jsx)(o.code,{children:`1`}),`. It works like this: for the row number, it's a 7-bit binary number from `,(0,i.jsx)(o.code,{children:`0000000`}),` to `,(0,i.jsx)(o.code,{children:`1111111`}),` (0 to 127). If the first character is `,(0,i.jsx)(o.code,{children:`F`}),`, that means the row is in the first half, which is `,(0,i.jsx)(o.code,{children:`0000000`}),` to `,(0,i.jsx)(o.code,{children:`0111111`}),` (0 to 63), and therefore the first bit is `,(0,i.jsx)(o.code,{children:`0`}),`. If the second character is `,(0,i.jsx)(o.code,{children:`B`}),`, that means the row is in the second half, which is `,(0,i.jsx)(o.code,{children:`0100000`}),` to `,(0,i.jsx)(o.code,{children:`0111111`}),` (32 to 63), and therefore the second bit is `,(0,i.jsx)(o.code,{children:`1`}),`. And so on.`]}),`
`,(0,i.jsxs)(o.p,{children:[`It so happens that `,(0,i.jsx)(o.code,{children:`row * 8 + column`}),` is equivalent to the concatenation of the row bits and the column bits. This means we can map each boarding pass to the seat ID in just two lines:`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-python`,children:`def find_seat(boarding_pass: str):
    pass_num = (
        boarding_pass.replace("F", "0")
        .replace("B", "1")
        .replace("L", "0")
        .replace("R", "1")
    )
    return int(pass_num, 2)
`})}),`
`,(0,i.jsxs)(o.p,{children:[`And then we can find the maximum seat ID just with a `,(0,i.jsx)(o.code,{children:`max`}),`.`]}),`
`,(0,i.jsx)(o.h2,{children:`Part 2`}),`
`,(0,i.jsx)(o.p,{children:`We can use the same function to find all the seat IDs, and then find the missing one by checking which ID is not in the set but both its neighbors are—that is, a gap of 2 in the sorted list of seat IDs.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-python`,children:`seats = sorted([find_seat(line) for line in data])
for i in range(1, len(seats)):
    if seats[i] - seats[i - 1] == 2:
        print(seats[i] - 1)
        break
`})}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{a as n,s as t};