import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import"./chroma-js-rK3xRofm.js";import{i as n,r}from"./_components-Q6m5hMHs.js";var i=e(),a={tags:[`Writing system`],title:`NACLO 2025 - Problem E: Around the World in Armenian`,description:`NACLO 2025 - Problem E: Around the World in Armenian, a problem that involves Writing system. Detailed solution and walkthrough.`,year:2025,prob:`E`};function o(e){let o={h1:`h1`,li:`li`,ol:`ol`,p:`p`,span:`span`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{children:[`NACLO 2025 - Problem E`,(0,i.jsx)(o.span,{className:`subtitle`,children:`Around the World in Armenian`})]}),(0,i.jsx)(n,{frontMatter:a}),`
`,`
`,(0,i.jsx)(o.p,{children:`The Armenian font used on this site is slightly different from the problem statement, so let me restate the problem:`}),`
`,(0,i.jsxs)(o.ol,{children:[`
`,(0,i.jsx)(o.li,{children:`Ֆրանսիա`}),`
`,(0,i.jsx)(o.li,{children:`Գերմանիա`}),`
`,(0,i.jsx)(o.li,{children:`Կանադա`}),`
`,(0,i.jsx)(o.li,{children:`Իտալիա`}),`
`,(0,i.jsx)(o.li,{children:`Իսրայել`}),`
`,(0,i.jsx)(o.li,{children:`Բուլղարիա`}),`
`,(0,i.jsx)(o.li,{children:`Արգենտինա`}),`
`,(0,i.jsx)(o.li,{children:`Ավստրալիա`}),`
`,(0,i.jsx)(o.li,{children:`Ֆինլանդիա`}),`
`,(0,i.jsx)(o.li,{children:`Ռուսաստան`}),`
`,(0,i.jsx)(o.li,{children:`Անգլիա`}),`
`,(0,i.jsx)(o.li,{children:`Պերու`}),`
`,(0,i.jsx)(o.li,{children:`Ամերիկա`}),`
`,(0,i.jsx)(o.li,{children:`Լիբիա`}),`
`,(0,i.jsx)(o.li,{children:`Ռումինիա`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`Like all writing system problems, the first step is to understand the writing direction and whether it's alphabetic, syllabic, or abjad.`}),`
`,(0,i.jsx)(o.p,{children:`To understand whether it's alphabetic, just count the number of characters and see if they more or less match the number of letters in the English translations. A rough counting shows that most of the words are 7–9 characters long, and the English ones are also 7–9 letters long, suggesting that this is alphabetic, which greatly simplifies our matching process (indeed, the problem already states that the Armenian script descended from the Greek alphabet).`}),`
`,(0,i.jsxs)(o.p,{children:[`As for writing direction, we look at boundary glyphs and count their frequencies. Here, notice that word-final -ա occurs extremely frequently: 12 out of 15 times! Even if Armenian names are different from their English names, we should expect the leading consonant to be the same, and obviously there's no such common leading consonant in English, so the only conclusion is that Armenian is written left-to-right, and `,(0,i.jsx)(o.strong,{children:`ա = [a]`}),` ([-a] occurs 8 times in English, so the remaining 4 occurrences are where the Armenian pronunciation differs from the English one). Looking one more character: -իա occurs 9 times, -դա, -նա, and -կա each 1 time. In the English names, we have one case of [-da], one [-ka], and one [-na], while all remaining ones are [-ia], so -իա must be [-ia], with `,(0,i.jsx)(o.strong,{children:`ի = [i]`}),`.`]}),`
`,(0,i.jsx)(o.p,{children:`The other three words that don't end in -ա have -ել, -ան, and -ու. We already identified ն as a consonant, so -ան is [-an], [-ad], or [-ak]. Unfortunately, we don't have an occurrence of any of these three endings in the English names, so this lead stops here.`}),`
`,(0,i.jsxs)(o.p,{children:[`Now we turn to the first character. We still see some repetitions: 2 Ֆ, 2 Ի, 4 Ա, 2 Ռ. In the English names, the only initial segment that occurs more than twice is [A-] (it only occurs 3 times, but one can hypothesize that the remaining one is "England", which, if translated from "land of the Anglos", should begin with [A-], as in French "Angleterre"), so `,(0,i.jsx)(o.strong,{children:`Ա = [A]`}),` (the difference from ա is probably capitalization). Other than that, we have 2 [I-], 2 [F-], and 2 [R-]:`]}),`
`,(0,i.jsxs)(o.ul,{children:[`
`,(0,i.jsx)(o.li,{children:`Same Armenian initial segment: (Ֆրանսիա, Ֆինլանդիա), (Իտալիա, Իսրայել), (Ռուսաստան, Ռումինիա)`}),`
`,(0,i.jsx)(o.li,{children:`Same English initial segment: (Israel, Italy), (Russia, Romania), (France, Finland)`}),`
`]}),`
`,(0,i.jsxs)(o.p,{children:[`Notice the Ֆի- prefix. ի is [i], and among the six English names, only Finland has [i] in the second position, so `,(0,i.jsx)(o.strong,{children:`Ֆ = [F]`}),`. Therefore, the other one is France. We can assume that in Armenian, Finland and France still start with [Fin-] and [Fran-] ("land of the Finns" and "land of the Franks"), giving `,(0,i.jsx)(o.strong,{children:`ր = [r]`}),`, `,(0,i.jsx)(o.strong,{children:`ն = [n]`}),`.`]}),`
`,(0,i.jsxs)(o.p,{children:[`Once we have ր = [r], notice that it also occurs in Իսրայել in the third place, so this is Israel, telling us that `,(0,i.jsx)(o.strong,{children:`Ի = [I]`}),`, `,(0,i.jsx)(o.strong,{children:`ս = [s]`}),`. The other one is Italy, so `,(0,i.jsx)(o.strong,{children:`տ = [t]`}),`, `,(0,i.jsx)(o.strong,{children:`լ = [l]`}),` (this is also verified by the "l" in Finland).`]}),`
`,(0,i.jsxs)(o.p,{children:[`The remaining pair must therefore be Russia and Romania, so `,(0,i.jsx)(o.strong,{children:`Ռ = [R]`}),`.`]}),`
`,(0,i.jsx)(o.p,{children:`Let's replace the identified letters:`}),`
`,`
`,(0,i.jsxs)(o.ol,{children:[`
`,(0,i.jsx)(o.li,{children:`Fransia`}),`
`,(0,i.jsx)(o.li,{children:`Գեrմania`}),`
`,(0,i.jsx)(o.li,{children:`Կanaդa`}),`
`,(0,i.jsx)(o.li,{children:`Italia`}),`
`,(0,i.jsx)(o.li,{children:`Israյեl`}),`
`,(0,i.jsx)(o.li,{children:`Բուlղaria`}),`
`,(0,i.jsx)(o.li,{children:`Arգեntina`}),`
`,(0,i.jsx)(o.li,{children:`Aվstralia`}),`
`,(0,i.jsx)(o.li,{children:`Finlanդia`}),`
`,(0,i.jsx)(o.li,{children:`Rուsastan`}),`
`,(0,i.jsx)(o.li,{children:`Anգlia`}),`
`,(0,i.jsx)(o.li,{children:`Պեrու`}),`
`,(0,i.jsx)(o.li,{children:`Aմեriկa`}),`
`,(0,i.jsx)(o.li,{children:`Լiբia`}),`
`,(0,i.jsx)(o.li,{children:`Rումinia`}),`
`]}),`
`,`
`,(0,i.jsxs)(o.p,{children:[`Filling in the remaining letters should be straightforward, because we can already make out a lot of the names. From 9, `,(0,i.jsx)(o.strong,{children:`դ = [d]`}),` (giving "Finlandia"). From 3, `,(0,i.jsx)(o.strong,{children:`Կ = [K]`}),` (giving "Kanada"). From 11, `,(0,i.jsx)(o.strong,{children:`գ = [g]`}),` (giving "Anglia"). From 14, `,(0,i.jsx)(o.strong,{children:`Լ = [L]`}),`, `,(0,i.jsx)(o.strong,{children:`բ = [b]`}),` (giving "Libia"). From 7, `,(0,i.jsx)(o.strong,{children:`ե = [e]`}),` (giving "Argentina"). From 12, `,(0,i.jsx)(o.strong,{children:`Պ = [P]`}),`, `,(0,i.jsx)(o.strong,{children:`ու = [u]`}),` (giving "Peru"). From 6, `,(0,i.jsx)(o.strong,{children:`Բ = [B]`}),`, `,(0,i.jsx)(o.strong,{children:`ղ = [g]`}),` (giving "Bulgaria"). From 13, `,(0,i.jsx)(o.strong,{children:`մ = [m]`}),`, `,(0,i.jsx)(o.strong,{children:`կ = [k]`}),` (giving "Amerika"). Finally, from 2, `,(0,i.jsx)(o.strong,{children:`Գ = [G]`}),` (giving "Germania").`]}),`
`,(0,i.jsx)(o.p,{children:`I'm not sure what յ (as in Israյel) and վ (as in Aվstralia, since [u] is already taken) are, but they don't occur in any other words, so they don't affect the solution. Anyway, the final transcriptions are:`}),`
`,(0,i.jsxs)(o.ol,{children:[`
`,(0,i.jsx)(o.li,{children:`Fransia = France`}),`
`,(0,i.jsx)(o.li,{children:`Germania = Germany`}),`
`,(0,i.jsx)(o.li,{children:`Kanada = Canada`}),`
`,(0,i.jsx)(o.li,{children:`Italia = Italy`}),`
`,(0,i.jsx)(o.li,{children:`Israյel = Israel`}),`
`,(0,i.jsx)(o.li,{children:`Bulgaria = Bulgaria`}),`
`,(0,i.jsx)(o.li,{children:`Argentina = Argentina`}),`
`,(0,i.jsx)(o.li,{children:`Aվstralia = Australia`}),`
`,(0,i.jsx)(o.li,{children:`Finlandia = Finland`}),`
`,(0,i.jsx)(o.li,{children:`Rusastan = Russia`}),`
`,(0,i.jsx)(o.li,{children:`Anglia = England`}),`
`,(0,i.jsx)(o.li,{children:`Peru = Peru`}),`
`,(0,i.jsx)(o.li,{children:`Amerika = America`}),`
`,(0,i.jsx)(o.li,{children:`Libia = Libya`}),`
`,(0,i.jsx)(o.li,{children:`Ruminia = Romania`}),`
`]}),`
`,(0,i.jsx)(o.p,{children:`For E3, just replace the letters one-by-one. "Cameroon" should be transcribed as "Kamerun".`}),(0,i.jsx)(r,{frontMatter:a})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}export{s as default,a as frontMatter};