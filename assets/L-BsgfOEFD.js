import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import"./chroma-js-rK3xRofm.js";import{i as n,r}from"./_components-Q6m5hMHs.js";var i=e(),a={tags:[`Computational`],title:`NACLO 2022 - Problem L: Stopping for a Spell`,description:`NACLO 2022 - Problem L: Stopping for a Spell, a problem that involves Computational. Detailed solution and walkthrough.`,year:2022,prob:`L`};function o(e){let o={a:`a`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,section:`section`,span:`span`,sup:`sup`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`NACLO 2022 - Problem L`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Stopping for a Spell`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,`
`,(0,i.jsx)(o.p,{children:`For L1, just walk the state transition diagram.`}),`
`,(0,i.jsxs)(o.ol,{children:[`
`,(0,i.jsxs)(o.li,{children:[`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`At the start`}),`
`,(0,i.jsx)(o.li,{children:`Read "t", take "t" transition to start, output "T"`}),`
`,(0,i.jsx)(o.li,{children:`Read "i", take "i" transition to start, output "AY"`}),`
`,(0,i.jsx)(o.li,{children:`Read "m", take "m" transition to the top node, output "M"`}),`
`,(0,i.jsx)(o.li,{children:`Read "e", take "e" transition to the right node, output "∅"`}),`
`,(0,i.jsx)(o.li,{children:`Result: "TAYM"`}),`
`]}),`
`]}),`
`,(0,i.jsxs)(o.li,{children:[`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`At the start`}),`
`,(0,i.jsx)(o.li,{children:`Read "t", take "t" transition to start, output "T"`}),`
`,(0,i.jsx)(o.li,{children:`Read "r", take "r" transition to start, output "R"`}),`
`,(0,i.jsx)(o.li,{children:`Read "a", take "a" transition to start, output "EY"`}),`
`,(0,i.jsx)(o.li,{children:`Read "d", take "d" transition to the bottom node, output "D"`}),`
`,(0,i.jsx)(o.li,{children:`Read "ed", take "ed" transition to the right node, output "UHD"`}),`
`,(0,i.jsx)(o.li,{children:`Result: "TREYDUHD"`}),`
`]}),`
`]}),`
`,(0,i.jsxs)(o.li,{children:[`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`At the start`}),`
`,(0,i.jsx)(o.li,{children:`Read "s", "t", "r", "i", all looping back to the start, output "S", "T", "R", "AY"`}),`
`,(0,i.jsx)(o.li,{children:`Read "d", take "d" transition to the bottom node, output "D"`}),`
`,(0,i.jsx)(o.li,{children:`Read "ing", take "ing" transition to the right node, output "IHNG"`}),`
`,(0,i.jsx)(o.li,{children:`Result: "STRAYDIHNG"`}),`
`]}),`
`]}),`
`,(0,i.jsxs)(o.li,{children:[`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`At the start`}),`
`,(0,i.jsx)(o.li,{children:`Read "f", "r", "a", all looping back to the start, output "F", "R", "EY"`}),`
`,(0,i.jsx)(o.li,{children:`Read "m", take "m" transition to the top node, output "M"`}),`
`,(0,i.jsx)(o.li,{children:`Read "ing", take "ing" transition to the right node, output "IHNG"`}),`
`,(0,i.jsx)(o.li,{children:`Result: "FREYMIHNG"`}),`
`]}),`
`]}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`In L2, observe that "g" can cause the machine to either stay at start or go to the top node. Only "stage" contains "g", so it's the answer.`}),`
`,(0,i.jsx)(o.p,{children:`In L3, we are now exploring this "g" ambiguity.`}),`
`,(0,i.jsxs)(o.ol,{children:[`
`,(0,i.jsxs)(o.li,{children:[`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`At the start`}),`
`,(0,i.jsx)(o.li,{children:`Read "s", "t", "a", "g", all looping back to the start, output "S", "T", "EY", "G"`}),`
`,(0,i.jsx)(o.li,{children:`Read "e", but there's no transition from the start on "e"; invalid.`}),`
`,(0,i.jsx)(o.li,{children:`Backtrack to "g", transition to the top node and output "DJ"`}),`
`,(0,i.jsx)(o.li,{children:`Read "ing", take "ing" transition to the right node, output "IHNG"`}),`
`,(0,i.jsx)(o.li,{children:`Result: "STEYDJIHNG"`}),`
`]}),`
`]}),`
`,(0,i.jsxs)(o.li,{children:[`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`At the start`}),`
`,(0,i.jsx)(o.li,{children:`Read "g", take "g" transition to the top node, output "DJ"`}),`
`,(0,i.jsx)(o.li,{children:`Read "a", but there's no transition from the top node on "a"; invalid.`}),`
`,(0,i.jsx)(o.li,{children:`Backtrack to "g", stay at the start and output "G"`}),`
`,(0,i.jsx)(o.li,{children:`Read "a", take "a" transition to the start, output "EY"`}),`
`,(0,i.jsx)(o.li,{children:`Read "m", take "m" transition to the top node, output "M"`}),`
`,(0,i.jsx)(o.li,{children:`Read "ing", take "ing" transition to the right node, output "IHNG"`}),`
`,(0,i.jsx)(o.li,{children:`Result: "GAMIHNG"`}),`
`]}),`
`]}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`In L4, we want to construct an FST that produces the desired output. Start with the known transition. "people", "phase", "built" all take this transition to the next node. The next transition must accept "o", "a", and "ui" as continuations of these three phrases respectively. So (4) matches (A).`}),`
`,(0,i.jsx)(o.p,{children:`Next, these three phrases continue with "p", "se", and "l", split across two transitions. We have (D) and (E) that exactly cover them. Because finally we want "people" to use the "le:UHL" transition, (5) should match to (E), while (2) matches to (D).`}),`
`,(0,i.jsx)(o.p,{children:`After returning, "built" still has a "t" left. The other two phrases: "colonel", "he" also start here. So (1) or (3) must at least recognize "t", "c", and "h". This can use nothing other than (C). Because (C) looks like it needs to be looped multiple times by "he" and "colonel", it should be the self-loop transition (1). Finally, upon seeing "n" for "colonel", we have to take (3), which matches to (B). Finally (6) will match (F) and takes the "el".`}),`
`,(0,i.jsx)(o.p,{children:`For L5, start at "start", read the output and find the transition that would produce said output, and apply the transition.`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`R: lo (stay at start)`}),`
`,(0,i.jsx)(o.li,{children:`UH: o (stay at start)`}),`
`,(0,i.jsx)(o.li,{children:`F: ph (go to next state)`}),`
`,(0,i.jsx)(o.li,{children:`∅: o (go to next state; must use this because (4) = (A) has no other output that matches "L")`}),`
`,(0,i.jsx)(o.li,{children:`L: l (go to start)`}),`
`,(0,i.jsx)(o.li,{children:`EA: e (go to start)`}),`
`]}),`
`,(0,i.jsxs)(o.p,{children:[`So the result is "loophole".`,(0,i.jsx)(o.sup,{children:(0,i.jsx)(o.a,{href:`#user-content-fn-1`,id:`user-content-fnref-1`,"data-footnote-ref":!0,"aria-describedby":`footnote-label`,children:`1`})})]}),`
`,(0,i.jsxs)(o.section,{"data-footnotes":!0,className:`footnotes`,children:[(0,i.jsx)(o.h2,{className:`sr-only`,id:`footnote-label`,children:`Footnotes`}),`
`,(0,i.jsxs)(o.ol,{children:[`
`,(0,i.jsxs)(o.li,{id:`user-content-fn-1`,children:[`
`,(0,i.jsxs)(o.p,{children:[`This is a really brilliant problem. How did someone even come up with this? `,(0,i.jsx)(o.a,{href:`#user-content-fnref-1`,"data-footnote-backref":``,"aria-label":`Back to reference 1`,className:`data-footnote-backref`,children:`↩`})]}),`
`]}),`
`]}),`
`]}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{s as default,a as frontMatter};