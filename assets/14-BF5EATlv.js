import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{n,t as r}from"./_components-DcdEf7Vf.js";var i=e();function a(e){let a={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2020 - Day 14`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Docking Data`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(a.p,{children:[`The mask can do one of three things to a bit: set to 0, set to 1, or leave unchanged. We know that "set to 0" is done with `,(0,i.jsx)(a.code,{children:`& 0`}),` (whereas `,(0,i.jsx)(a.code,{children:`& 1`}),` leaves unchanged), and "set to 1" is done with `,(0,i.jsx)(a.code,{children:`| 1`}),` (whereas `,(0,i.jsx)(a.code,{children:`| 0`}),` leaves unchanged). So we can maintain two bitmasks, one for setting to 0 and one for setting to 1; bits that are set by neither remain unchanged. I construct the masks by first reversing the mask string, so that the character index corresponds with the shift amount. `,(0,i.jsx)(a.code,{children:`^ 1`}),` is used to toggle bits in the masks.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-python`,children:`mask = reversed(line[len("mask = ") :])
mask_1 = 0
mask_0 = -1 & 0xFFFFFFFFF
for i, ch in enumerate(mask):
    if ch == "0":
        mask_0 = mask_0 ^ (1 << i)
    elif ch == "1":
        mask_1 = mask_1 ^ (1 << i)
`})}),`
`,(0,i.jsx)(a.p,{children:`Memory update is straightforward:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-python`,children:`mem[int(match.group(1))] = int(match.group(2)) & mask_0 | mask_1
`})}),`
`,(0,i.jsx)(a.h2,{children:`Part 2`}),`
`,(0,i.jsx)(a.p,{children:`In part 2, we still have three possible actions on each bit: set to 0, unchanged, or floating. Floating is nothing more than enumerating all possible combinations of 0 and 1 for those bits. I made a little generator function to enumerate these combinations:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-python`,children:`def generate_binaries(x_indices: list[int]):
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
`,(0,i.jsxs)(a.p,{children:[`Once we have concrete `,(0,i.jsx)(a.code,{children:`mask_0`}),` and `,(0,i.jsx)(a.code,{children:`mask_1`}),`, the masking is done exactly like part 1, this time to memory addresses.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-python`,children:`base_index = int(match.group(1)) | mask_1
val = int(match.group(2))
for x_mask_0, x_mask_1 in x_masks:
    mem[base_index & x_mask_0 | x_mask_1] = val
`})}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Bitwise operations`],title:`Advent of Code 2020 - Day 14: Docking Data`,description:`Advent of Code 2020 - Day 14: Docking Data, a problem that involves Bitwise operations. Solution written in Python, with detailed walkthrough and proof.`,year:2020,day:14};export{o as default};