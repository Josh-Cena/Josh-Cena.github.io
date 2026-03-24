import{t as e}from"./jsx-runtime-DAs1UGHr.js";import"./react-BRPyh-lz.js";import{n as t}from"./lib-T-nEWGuF.js";import"./Link-BoPxscL2.js";import"./chroma-js-gUsXfuXB.js";import{i as n,r}from"./_components-DIee1U0p.js";var i=e(),a={tags:[`Writing system`],title:`NACLO 2023 - Problem G: Feathers of the Roseate Spoonbill`,description:`NACLO 2023 - Problem G: Feathers of the Roseate Spoonbill, a problem that involves Writing system. Detailed solution and walkthrough.`,year:2023,prob:`G`};function o(e){let o={br:`br`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,span:`span`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`NACLO 2023 - Problem G`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Feathers of the Roseate Spoonbill`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,`
`,(0,i.jsxs)(o.p,{children:[`First note that the 16`,(0,i.jsx)(`sup`,{children:`th`}),` century and 20`,(0,i.jsx)(`sup`,{children:`th`}),` century writing systems are identical, except the latter adds some diacritics, so the latter contains more information than the former. This is useful for G3.`]}),`
`,(0,i.jsxs)(o.p,{children:[`Since the 20`,(0,i.jsx)(`sup`,{children:`th`}),` century system contains strictly more information, we should try to match it with IPA (instead of 16`,(0,i.jsx)(`sup`,{children:`th`}),`), since the IPA is also rich in information. Below, I align them by consonants/vowels. "tl", "ch", and "tz" are well-known to be complex consonants, so I've grouped them. In case where the vowels don't match exactly (there are two vowels in the 20`,(0,i.jsx)(`sup`,{children:`th`}),` century system but only one in IPA), I'm including the previous or next consonant as well, because the missing vowel may have been absorbed into either of the neighboring sounds. For example, "hui" becomes /wi/, which may either because h → /w/, ui → /i/, or because hu → /w/, i → /i/. "#" indicates word boundary.`]}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:`language-plain`,children:`n i c tl āuh que ch ō  l i hui m o l o hua
n i k tɬ aːw ke  tʃ oː l i wi  m o l o wa

n i c t e ō  cui tl a ì  cui y a
n i k t e oː kʷi tɬ a iʔ kʷi j a

n i c que tz a l hui x t oi l p ī  z  #  i n  #  i c n īuh y ō  tl
n i k ke  ts a l wi  ʃ t oi l p iː s  #  i n  #  i k n iːw j oː tɬ

i n  #  t ēuc  p a n  #  n i c quī x t ī  z
i n  #  t eːkʷ p a n  #  n i k kiː ʃ t iː s

ō  t i y à  quê  #  y e  #  m i c tl ā  n
oː t i j aʔ keʔ  #  j e  #  m i k tɬ aː n
`})}),`
`,(0,i.jsx)(o.p,{children:`Here are all unique correspondences:`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`a → /a/`}),`
`,(0,i.jsx)(o.li,{children:`ā → /aː/`}),`
`,(0,i.jsx)(o.li,{children:`à → /aʔ/`}),`
`,(0,i.jsx)(o.li,{children:`āuh → /aːw/`}),`
`,(0,i.jsx)(o.li,{children:`c → /k/`}),`
`,(0,i.jsx)(o.li,{children:`ch → /tʃ/`}),`
`,(0,i.jsx)(o.li,{children:`cui → /kʷi/`}),`
`,(0,i.jsx)(o.li,{children:`e → /e/`}),`
`,(0,i.jsx)(o.li,{children:`ēuc → /eːkʷ/`}),`
`,(0,i.jsx)(o.li,{children:`hua → /wa/`}),`
`,(0,i.jsx)(o.li,{children:`hui → /wi/`}),`
`,(0,i.jsx)(o.li,{children:`i → /i/`}),`
`,(0,i.jsx)(o.li,{children:`ī → /iː/`}),`
`,(0,i.jsx)(o.li,{children:`ì → /iʔ/`}),`
`,(0,i.jsx)(o.li,{children:`īuh → /iːw/`}),`
`,(0,i.jsx)(o.li,{children:`l → /l/`}),`
`,(0,i.jsx)(o.li,{children:`m → /m/`}),`
`,(0,i.jsx)(o.li,{children:`n → /n/`}),`
`,(0,i.jsx)(o.li,{children:`o → /o/`}),`
`,(0,i.jsx)(o.li,{children:`ō → /oː/`}),`
`,(0,i.jsx)(o.li,{children:`p → /p/`}),`
`,(0,i.jsx)(o.li,{children:`que → /ke/`}),`
`,(0,i.jsx)(o.li,{children:`quê → /keʔ/`}),`
`,(0,i.jsx)(o.li,{children:`quī → /kiː/`}),`
`,(0,i.jsx)(o.li,{children:`t → /t/`}),`
`,(0,i.jsx)(o.li,{children:`tl → /tɬ/`}),`
`,(0,i.jsx)(o.li,{children:`tz → /ts/`}),`
`,(0,i.jsx)(o.li,{children:`x → /ʃ/`}),`
`,(0,i.jsx)(o.li,{children:`y → /j/`}),`
`,(0,i.jsx)(o.li,{children:`z → /s/`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`Notice a few patterns for the diacritics: horizontal bars like ā and ē indicate lengthening; grave accents like ì and à and circumflex like ê indicate glottalization. We have a few complex segments left to dissect:`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`āuh → /aːw/`}),`
`,(0,i.jsx)(o.li,{children:`cui → /kʷi/`}),`
`,(0,i.jsx)(o.li,{children:`ēuc → /eːkʷ/`}),`
`,(0,i.jsx)(o.li,{children:`hua → /wa/`}),`
`,(0,i.jsx)(o.li,{children:`hui → /wi/`}),`
`,(0,i.jsx)(o.li,{children:`īuh → /iːw/`}),`
`,(0,i.jsx)(o.li,{children:`que → /ke/`}),`
`,(0,i.jsx)(o.li,{children:`quê → /keʔ/`}),`
`,(0,i.jsx)(o.li,{children:`quī → /kiː/`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`Note three things:`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`the vowel rewrite is consistent with the standalone rules: ā → /aː/, i → /i/, etc.`}),`
`,(0,i.jsx)(o.li,{children:`the disappearing vowel is always "u", and we have no standalone "u" ever.`}),`
`,(0,i.jsx)(o.li,{children:`we have no standalone "h", "c", "q" either (we do have "h" in "ch", but that's a different thing).`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`This strongly suggests that "uh", "hu", "qu", "uc", "cu" are all complex segments that rewrite to a single consonant:`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`uh → /w/`}),`
`,(0,i.jsx)(o.li,{children:`hu → /w/`}),`
`,(0,i.jsx)(o.li,{children:`qu → /k/`}),`
`,(0,i.jsx)(o.li,{children:`uc → /kʷ/`}),`
`,(0,i.jsx)(o.li,{children:`cu → /kʷ/`}),`
`]}),`
`,(0,i.jsxs)(o.p,{children:[`This is already sufficient for G1, because we have a 1-to-1 mapping from 20`,(0,i.jsx)(`sup`,{children:`th`}),` century to IPA. For G1, we first need to look up each 16`,(0,i.jsx)(`sup`,{children:`th`}),` century word in the 20`,(0,i.jsx)(`sup`,{children:`th`}),` century system, because the latter contains more information such as length and glottalization.`]}),`
`,(0,i.jsxs)(o.p,{children:[`a. y e # n i hu ā l l â → /j e # n i w aː l l aʔ/`,(0,i.jsx)(o.br,{}),`
`,`b. a n t o c n ī hu ā n i n → /a n t o k n i w aː n i n/`,(0,i.jsx)(o.br,{}),`
`,`c. qu i n # ì cu ā c → /k i n # iʔ kʷ aː k/`]}),`
`,(0,i.jsxs)(o.p,{children:[`In G2, we need to do the reverse, which is a bit more involved because currently we can have the same IPA sound rewrite to multiple 20`,(0,i.jsx)(`sup`,{children:`th`}),` century segments:`]}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`Glottalization /ʔ/ can be either circumflex â or grave accent à.`}),`
`,(0,i.jsx)(o.li,{children:`/w/ can be either "uh" or "hu".`}),`
`,(0,i.jsx)(o.li,{children:`/k/ can be either "c" or "qu".`}),`
`,(0,i.jsx)(o.li,{children:`/kʷ/ can be either "cu" or "uc".`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`For each one, it means there must exist some context that allows us to deterministically pick one of the alternatives, so we just need to list out all the contexts.`}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsxs)(o.li,{children:[`Glottalization /ʔ/:`,`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`Grave: "a ì cu", "y à qu", "# ì cu"`}),`
`,(0,i.jsx)(o.li,{children:`Circumflex: "qu ê #", "l â #"`}),`
`]}),`
`]}),`
`,(0,i.jsxs)(o.li,{children:[`/w/:`,`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`"uh": "ā uh q", "ī uh y"`}),`
`,(0,i.jsx)(o.li,{children:`"hu": "i hu i", "o hu a", "l hu i", "i hu ā", "ī hu ā"`}),`
`]}),`
`]}),`
`,(0,i.jsxs)(o.li,{children:[`/k/:`,`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`"c": "i c tl", "i c t", "i c qu", "i c n", "i c tl", "o c n", "ā c #"`}),`
`,(0,i.jsx)(o.li,{children:`"qu": "h qu e", "c qu e", "c qu ī", "à qu ê", "# qu i"`}),`
`]}),`
`]}),`
`,(0,i.jsxs)(o.li,{children:[`/kʷ/:`,`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`"cu": "ō cu i", "ì cu i", "ì cu ā"`}),`
`,(0,i.jsx)(o.li,{children:`"uc": "ē uc p"`}),`
`]}),`
`]}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`For glottalization, the pattern is that the circumflex only appears at the word end, while the grave accent only appears within a word or at the start. For /w/, /k/, and /kʷ/, it has to do with whether a vowel comes after: whenever there's a vowel after (including both before and after), "hu", "qu", and "cu" are used; otherwise, "uh", "c", and "uc" are used.`}),`
`,(0,i.jsx)(o.p,{children:`Therefore:`}),`
`,(0,i.jsxs)(o.p,{children:[`a. /w eː w eʔ/ → "hu ē hu ê"`,(0,i.jsx)(o.br,{}),`
`,`b. /tʃ o k o l aː tɬ/ → "ch o c o l ā t l"`,(0,i.jsx)(o.br,{}),`
`,`c. /m i k tɬ aː n t eː kʷ tɬ i/ → "m i c tl ā n t ē uc t l i"`]}),`
`,(0,i.jsxs)(o.p,{children:[`Finally for G3, we've been doing this all along: it's possible to rewrite back and forth between the 20`,(0,i.jsx)(`sup`,{children:`th`}),` century system and IPA, so they are bijective. 16`,(0,i.jsx)(`sup`,{children:`th`}),` century system is a lossy translation and cannot be deterministically rewritten back.`]}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{s as default,a as frontMatter};