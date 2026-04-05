import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import{n,t as r}from"./_components-DcdEf7Vf.js";var i=e();function a(e){let a={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`Advent of Code 2022 - Day 10`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Cathode-Ray Tube`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,(0,i.jsx)(a.h2,{children:`Part 1`}),`
`,(0,i.jsxs)(a.p,{children:[`I simulate the process of executing the instructions, keeping track of the current cycle and the value of the register `,(0,i.jsx)(a.code,{children:`X`}),`, putting all values of `,(0,i.jsx)(a.code,{children:`X`}),` at each cycle in a list. Then I can just sum the values at the specified cycles.`]}),`
`,(0,i.jsxs)(a.p,{children:[`When parsing the instructions, I represent each instruction as `,(0,i.jsx)(a.code,{children:`(Int, Int)`}),`, containing the execution time and the value to add to `,(0,i.jsx)(a.code,{children:`X`}),` (0 for `,(0,i.jsx)(a.code,{children:`noop`}),`).`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-hs`,children:`parseCycles :: [Text] -> [(Int, Int)]
parseCycles [] = []
parseCycles (line : xs)
  | line == T.pack "noop" = (1, 0) : parseCycles xs
  | otherwise = (2, readT $ T.words line !! 1) : parseCycles xs
`})}),`
`,(0,i.jsxs)(a.p,{children:[`Then I fold over the list of the instructions. The state tracks three things: current cycle, value of `,(0,i.jsx)(a.code,{children:`X`}),` before the instruction, and the list of `,(0,i.jsx)(a.code,{children:`X`}),` values.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-hs`,children:`updateRegister :: ((Int, Int), [Int]) -> (Int, Int) -> ((Int, Int), [Int])
updateRegister ((time, val), history) (dur, delta) = ((time', val'), history')
  where
    time' = time + dur
    val' = val + delta
    history' = replicate dur val ++ history
`})}),`
`,(0,i.jsxs)(a.p,{children:[`With the list of `,(0,i.jsx)(a.code,{children:`X`}),` values, finding the sum of the specified cycles is straightforward.`]}),`
`,(0,i.jsx)(a.h2,{children:`Part 2`}),`
`,(0,i.jsxs)(a.p,{children:[`With the full list of `,(0,i.jsx)(a.code,{children:`X`}),` values, I can just iterate through them and print the appropriate character for each cycle (turns out that rendering a CRT is the same as printing to the console). For each `,(0,i.jsx)(a.code,{children:`X`}),` value, I check if the pixel corresponding to the cycle is within the sprite.`]}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-hs`,children:`draw :: Int -> Int -> Char
draw time spritePos = if isDrawn then '#' else ' '
  where
    pixel = time \`mod\` 40 - 1
    isDrawn = pixel >= spritePos - 1 && pixel <= spritePos + 1
`})}),`
`,(0,i.jsx)(a.p,{children:`Once again, I appreciate the ASCII art produced:`}),`
`,(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-plain`,children:`###  #### #  # ####  ##    ##  ##  ###
#  #    # #  # #    #  #    # #  # #  #
#  #   #  #### ###  #       # #    ###
###   #   #  # #    # ##    # #    #  ##
# #  #    #  # #    #  # #  # #  # #  ##
#  # #### #  # #     ###  ##   ##  ###
`})}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`VM`,`Manual inspection`],title:`Advent of Code 2022 - Day 10: Cathode-Ray Tube`,description:`Advent of Code 2022 - Day 10: Cathode-Ray Tube, a problem that involves VM and Manual inspection. Solution written in Haskell, with detailed walkthrough and proof.`,year:2022,day:10};export{o as default};