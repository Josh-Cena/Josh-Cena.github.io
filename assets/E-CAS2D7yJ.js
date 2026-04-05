import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-BHnTV9cU.js";import"./Link-CEJsqf-b.js";import"./chroma-js-CGevHmQZ.js";import{i as n,r}from"./_components-Bnwig05j.js";var i=e(),a=`/assets/E-5lF1Hr2j.png`;function o(e){let o={annotation:`annotation`,code:`code`,em:`em`,h1:`h1`,img:`img`,li:`li`,math:`math`,mi:`mi`,mo:`mo`,mrow:`mrow`,mtext:`mtext`,p:`p`,pre:`pre`,semantics:`semantics`,span:`span`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`NACLO 2023 - Problem E`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Bengalese Finch Song`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,`
`,(0,i.jsxs)(o.p,{children:[`Nothing to say about E1: just count the letters. `,(0,i.jsxs)(o.span,{className:`katex`,children:[(0,i.jsx)(o.span,{className:`katex-mathml`,children:(0,i.jsx)(o.math,{xmlns:`http://www.w3.org/1998/Math/MathML`,children:(0,i.jsxs)(o.semantics,{children:[(0,i.jsxs)(o.mrow,{children:[(0,i.jsx)(o.mi,{children:`P`}),(0,i.jsx)(o.mo,{stretchy:`false`,children:`(`}),(0,i.jsx)(o.mtext,{children:`L1`}),(0,i.jsx)(o.mo,{children:`→`}),(0,i.jsx)(o.mtext,{children:`L2`}),(0,i.jsx)(o.mo,{stretchy:`false`,children:`)`})]}),(0,i.jsx)(o.annotation,{encoding:`application/x-tex`,children:`P(\\text{L1}\\to\\text{L2})`})]})})}),(0,i.jsxs)(o.span,{className:`katex-html`,"aria-hidden":`true`,children:[(0,i.jsxs)(o.span,{className:`base`,children:[(0,i.jsx)(o.span,{className:`strut`,style:{height:`1em`,verticalAlign:`-0.25em`}}),(0,i.jsx)(o.span,{className:`mord mathnormal`,style:{marginRight:`0.13889em`},children:`P`}),(0,i.jsx)(o.span,{className:`mopen`,children:`(`}),(0,i.jsx)(o.span,{className:`mord text`,children:(0,i.jsx)(o.span,{className:`mord`,children:`L1`})}),(0,i.jsx)(o.span,{className:`mspace`,style:{marginRight:`0.2778em`}}),(0,i.jsx)(o.span,{className:`mrel`,children:`→`}),(0,i.jsx)(o.span,{className:`mspace`,style:{marginRight:`0.2778em`}})]}),(0,i.jsxs)(o.span,{className:`base`,children:[(0,i.jsx)(o.span,{className:`strut`,style:{height:`1em`,verticalAlign:`-0.25em`}}),(0,i.jsx)(o.span,{className:`mord text`,children:(0,i.jsx)(o.span,{className:`mord`,children:`L2`})}),(0,i.jsx)(o.span,{className:`mclose`,children:`)`})]})]})]}),` is the ratio of the previous two columns.`]}),`
`,(0,i.jsxs)(o.p,{children:[`In E2, just find the letter with the highest probability that it follows `,(0,i.jsx)(o.em,{children:`k`}),`. The probabilities are 1/6, 1/6, 1/12, and 7/12, so the answer is `,(0,i.jsx)(o.em,{children:`a`}),` with 7/12.`]}),`
`,(0,i.jsx)(o.p,{children:`In E3, the problem says that Bengalese finch song is more predictable than human speech, so we want to find two strings where one letter transitions more deterministically to another. The real way to do it is of course to count all transitions. Since we are doing this in posterity anyway, I actually wrote a program to do this.`}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-python`,children:`from collections import Counter
import seaborn as sns
import matplotlib.pyplot as plt

def count_transitions(s):
    transitions = Counter()
    for a, b in zip(s, s[1:]):
        transitions[(a, b)] += 1
    return transitions

strings = [
    "abcbdaefbdgdabhijigdbcbhgdabkieidgdahbjaficblbfefkbcf",
    "abacdefghahbhicdefghahbhgicdefgbjklcdefgammlcdefgajkl",
    "abcdefbfcdefbfcdeaghijkbcdefafcdebcdeaghiffcdefafcdef",
    "abcdedfgfdfgbahibjdkbghcbfcbffjdcbgbidgdldbgfdibjdgba",
]

plt.figure(figsize=(10, 8))

for i, s in enumerate(strings):
    transitions = count_transitions(s)
    ax = plt.subplot(2, 2, i + 1)
    sns.heatmap(
        [[transitions[(a, b)] for b in "abcdefghijk"] for a in "abcdefghijk"],
        xticklabels="abcdefghijk",
        yticklabels="abcdefghijk",
        ax=ax
    )

plt.savefig(f"E.png", bbox_inches="tight")
`})}),`
`,(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{src:a,alt:`E`,width:811,height:665})}),`
`,(0,i.jsx)(o.p,{children:`It's obvious that sequences B and C feature fewer transitions, with most concentrated along a diagonal, while A and D have the transitions spread out more evenly across all combinations.`}),`
`,(0,i.jsx)(o.p,{children:`In the real test, it's probably impossible to enumerate all 121 transitions for 4 sequences. The next best thing is to count the number of letters each letter can be followed by. For example, for sequence A:`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`a`}),` → `,(0,i.jsx)(o.em,{children:`b`}),`, `,(0,i.jsx)(o.em,{children:`e`}),`, `,(0,i.jsx)(o.em,{children:`f`}),`, `,(0,i.jsx)(o.em,{children:`h`})]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`b`}),` → `,(0,i.jsx)(o.em,{children:`c`}),`, `,(0,i.jsx)(o.em,{children:`d`}),`, `,(0,i.jsx)(o.em,{children:`f`}),`, `,(0,i.jsx)(o.em,{children:`h`}),`, `,(0,i.jsx)(o.em,{children:`j`}),`, `,(0,i.jsx)(o.em,{children:`k`}),`, `,(0,i.jsx)(o.em,{children:`l`})]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`c`}),` → `,(0,i.jsx)(o.em,{children:`b`}),`, `,(0,i.jsx)(o.em,{children:`f`})]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`d`}),` → `,(0,i.jsx)(o.em,{children:`a`}),`, `,(0,i.jsx)(o.em,{children:`b`}),`, `,(0,i.jsx)(o.em,{children:`g`})]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`e`}),` → `,(0,i.jsx)(o.em,{children:`f`}),`, `,(0,i.jsx)(o.em,{children:`i`})]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`f`}),` → `,(0,i.jsx)(o.em,{children:`b`}),`, `,(0,i.jsx)(o.em,{children:`e`}),`, `,(0,i.jsx)(o.em,{children:`i`}),`, `,(0,i.jsx)(o.em,{children:`k`})]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`g`}),` → `,(0,i.jsx)(o.em,{children:`d`})]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`h`}),` → `,(0,i.jsx)(o.em,{children:`b`}),`, `,(0,i.jsx)(o.em,{children:`g`}),`, `,(0,i.jsx)(o.em,{children:`i`})]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`i`}),` → `,(0,i.jsx)(o.em,{children:`c`}),`, `,(0,i.jsx)(o.em,{children:`d`}),`, `,(0,i.jsx)(o.em,{children:`e`}),`, `,(0,i.jsx)(o.em,{children:`g`}),`, `,(0,i.jsx)(o.em,{children:`j`})]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`j`}),` → `,(0,i.jsx)(o.em,{children:`a`}),`, `,(0,i.jsx)(o.em,{children:`i`})]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`k`}),` → `,(0,i.jsx)(o.em,{children:`b`}),`, `,(0,i.jsx)(o.em,{children:`i`})]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`l`}),` → `,(0,i.jsx)(o.em,{children:`b`})]}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`For sequence B:`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`a`}),` → `,(0,i.jsx)(o.em,{children:`b`}),`, `,(0,i.jsx)(o.em,{children:`c`}),`, `,(0,i.jsx)(o.em,{children:`h`}),`, `,(0,i.jsx)(o.em,{children:`j`}),`, `,(0,i.jsx)(o.em,{children:`m`})]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`b`}),` → `,(0,i.jsx)(o.em,{children:`a`}),`, `,(0,i.jsx)(o.em,{children:`h`}),`, `,(0,i.jsx)(o.em,{children:`j`})]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`c`}),` → `,(0,i.jsx)(o.em,{children:`d`})]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`d`}),` → `,(0,i.jsx)(o.em,{children:`e`})]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`e`}),` → `,(0,i.jsx)(o.em,{children:`f`})]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`f`}),` → `,(0,i.jsx)(o.em,{children:`g`})]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`g`}),` → `,(0,i.jsx)(o.em,{children:`a`}),`, `,(0,i.jsx)(o.em,{children:`b`}),`, `,(0,i.jsx)(o.em,{children:`h`}),`, `,(0,i.jsx)(o.em,{children:`i`})]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`h`}),` → `,(0,i.jsx)(o.em,{children:`a`}),`, `,(0,i.jsx)(o.em,{children:`b`}),`, `,(0,i.jsx)(o.em,{children:`g`}),`, `,(0,i.jsx)(o.em,{children:`i`})]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`i`}),` → `,(0,i.jsx)(o.em,{children:`c`})]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`j`}),` → `,(0,i.jsx)(o.em,{children:`k`})]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`k`}),` → `,(0,i.jsx)(o.em,{children:`l`})]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`l`}),` → `,(0,i.jsx)(o.em,{children:`c`})]}),`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.em,{children:`m`}),` → `,(0,i.jsx)(o.em,{children:`l`}),`, `,(0,i.jsx)(o.em,{children:`m`})]}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`It's still a really painful process (52 transitions to check for each sequence), but much easier to manage by hand, and the results are easy to visualize.`}),`
`,(0,i.jsx)(o.p,{children:`In E4, we just need to find a sequence with the matching probabilities.`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:`.40`}),` must be RE.`]}),`
`,(0,i.jsxs)(o.li,{children:[`After E, a `,(0,i.jsx)(o.code,{children:`.15`}),` transition can be either R or S. However, the next one is `,(0,i.jsx)(o.code,{children:`.20`}),` and R has no `,(0,i.jsx)(o.code,{children:`.20`}),` transition, so it must be S.`]}),`
`,(0,i.jsxs)(o.li,{children:[`After S, the `,(0,i.jsx)(o.code,{children:`.20`}),` transition must be T.`]}),`
`,(0,i.jsxs)(o.li,{children:[`After T, the `,(0,i.jsx)(o.code,{children:`.05`}),` transition can be either L or S, but S has no `,(0,i.jsx)(o.code,{children:`.35`}),` transition, so it must be L.`]}),`
`,(0,i.jsx)(o.li,{children:`...`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`Again, very tedious to do by hand, but not a lot of thinking involved—just reuse the same way of reasoning as above.`}),(0,i.jsx)(r,{frontMatter:e})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}s.meta={tags:[`Computational`,`Puzzle`],title:`NACLO 2023 - Problem E: Bengalese Finch Song`,description:`NACLO 2023 - Problem E: Bengalese Finch Song, a problem that involves Computational and Puzzle. Detailed solution and walkthrough.`,year:2023,prob:`E`};export{s as default};