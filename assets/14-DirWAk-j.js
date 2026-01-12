import{u as i,j as e}from"./index-Cpgx5Zsn.js";import{F as o,a as r}from"./_components-AhTRSQH8.js";const s={description:"Advent of Code 2020 - Day 14: Docking Data. Written in Python.",tags:["Bitwise operations"],year:2020,day:14,title:"AoC 2020 D14: Docking Data"};function a(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"AoC 2020 D14: Docking Data"}),`
`,`
`,e.jsx(o,{frontMatter:s}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:['The mask can do one of three things to a bit: set to 0, set to 1, or leave unchanged. We know that "set to 0" is done with ',e.jsx(n.code,{children:"& 0"})," (whereas ",e.jsx(n.code,{children:"& 1"}),' leaves unchanged), and "set to 1" is done with ',e.jsx(n.code,{children:"| 1"})," (whereas ",e.jsx(n.code,{children:"| 0"})," leaves unchanged). So we can maintain two bitmasks, one for setting to 0 and one for setting to 1; bits that are set by neither remain unchanged. I construct the masks by first reversing the mask string, so that the character index corresponds with the shift amount. ",e.jsx(n.code,{children:"^ 1"})," is used to toggle bits in the masks."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`mask = reversed(line[len("mask = ") :])
mask_1 = 0
mask_0 = -1 & 0xFFFFFFFFF
for i, ch in enumerate(mask):
    if ch == "0":
        mask_0 = mask_0 ^ (1 << i)
    elif ch == "1":
        mask_1 = mask_1 ^ (1 << i)
`})}),`
`,e.jsx(n.p,{children:"Memory update is straightforward:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`mem[int(match.group(1))] = int(match.group(2)) & mask_0 | mask_1
`})}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsx(n.p,{children:"In part 2, we still have three possible actions on each bit: set to 0, unchanged, or floating. Floating is nothing more than enumerating all possible combinations of 0 and 1 for those bits. I made a little generator function to enumerate these combinations:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`def generate_binaries(x_indices: list[int]):
    for comb in itertools.product((0, 1), repeat=len(x_indices)):
        mask_1 = 0
        mask_0 = -1 & 0xFFFFFFFFF
        for i, bit in zip(x_indices, comb):
            if bit == 0:
                mask_0 = mask_0 ^ (1 << i)
            elif bit == 1:
                mask_1 = mask_1 ^ (1 << i)
        yield (mask_0, mask_1)
`})}),`
`,e.jsxs(n.p,{children:["Once we have concrete ",e.jsx(n.code,{children:"mask_0"})," and ",e.jsx(n.code,{children:"mask_1"}),", the masking is done exactly like part 1, this time to memory addresses."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`base_index = int(match.group(1)) | mask_1
val = int(match.group(2))
for x_mask_0, x_mask_1 in x_masks:
    mem[base_index & x_mask_0 | x_mask_1] = val
`})}),`
`,e.jsx(r,{frontMatter:s})]})}function d(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{d as default,s as frontMatter};
