import{u as a,j as e}from"./index-BnEAZLVO.js";import{P as i,a as c}from"./_components-CRYqM7VG.js";import"./_commonjsHelpers-Cpj98o6Y.js";const s={tags:["VM","Manual inspection"],title:"Advent of Code 2022 - Day 10: Cathode-Ray Tube",description:"Advent of Code 2022 - Day 10: Cathode-Ray Tube, a problem that involves VM and Manual inspection. Solution written in Haskell, with detailed walkthrough and proof.",year:2022,day:10};function r(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{children:["Advent of Code 2022 - Day 10",e.jsx(n.span,{className:"subtitle",children:"Cathode-Ray Tube"})]}),`
`,`
`,e.jsx(i,{frontMatter:s}),`
`,e.jsx(n.h2,{children:"Part 1"}),`
`,e.jsxs(n.p,{children:["I simulate the process of executing the instructions, keeping track of the current cycle and the value of the register ",e.jsx(n.code,{children:"X"}),", putting all values of ",e.jsx(n.code,{children:"X"})," at each cycle in a list. Then I can just sum the values at the specified cycles."]}),`
`,e.jsxs(n.p,{children:["When parsing the instructions, I represent each instruction as ",e.jsx(n.code,{children:"(Int, Int)"}),", containing the execution time and the value to add to ",e.jsx(n.code,{children:"X"})," (0 for ",e.jsx(n.code,{children:"noop"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`parseCycles :: [Text] -> [(Int, Int)]
parseCycles [] = []
parseCycles (line : xs)
  | line == T.pack "noop" = (1, 0) : parseCycles xs
  | otherwise = (2, readT $ T.words line !! 1) : parseCycles xs
`})}),`
`,e.jsxs(n.p,{children:["Then I fold over the list of the instructions. The state tracks three things: current cycle, value of ",e.jsx(n.code,{children:"X"})," before the instruction, and the list of ",e.jsx(n.code,{children:"X"})," values."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`updateRegister :: ((Int, Int), [Int]) -> (Int, Int) -> ((Int, Int), [Int])
updateRegister ((time, val), history) (dur, delta) = ((time', val'), history')
  where
    time' = time + dur
    val' = val + delta
    history' = replicate dur val ++ history
`})}),`
`,e.jsxs(n.p,{children:["With the list of ",e.jsx(n.code,{children:"X"})," values, finding the sum of the specified cycles is straightforward."]}),`
`,e.jsx(n.h2,{children:"Part 2"}),`
`,e.jsxs(n.p,{children:["With the full list of ",e.jsx(n.code,{children:"X"})," values, I can just iterate through them and print the appropriate character for each cycle (turns out that rendering a CRT is the same as printing to the console). For each ",e.jsx(n.code,{children:"X"})," value, I check if the pixel corresponding to the cycle is within the sprite."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-hs",children:`draw :: Int -> Int -> Char
draw time spritePos = if isDrawn then '#' else ' '
  where
    pixel = time \`mod\` 40 - 1
    isDrawn = pixel >= spritePos - 1 && pixel <= spritePos + 1
`})}),`
`,e.jsx(n.p,{children:"Once again, I appreciate the ASCII art produced:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plain",children:`###  #### #  # ####  ##    ##  ##  ###
#  #    # #  # #    #  #    # #  # #  #
#  #   #  #### ###  #       # #    ###
###   #   #  # #    # ##    # #    #  ##
# #  #    #  # #    #  # #  # #  # #  ##
#  # #### #  # #     ###  ##   ##  ###
`})}),`
`,e.jsx(c,{frontMatter:s})]})}function d(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{d as default,s as frontMatter};
