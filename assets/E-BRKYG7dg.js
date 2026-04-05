import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import"./chroma-js-BVS6aaM2.js";import{i as n,r}from"./_components-DEaGFsln.js";var i=e();function a(e){let a={h1:`h1`,li:`li`,ol:`ol`,p:`p`,span:`span`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`NACLO 2025 - Problem E`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Around the World in Armenian`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,`
`,(0,i.jsx)(a.p,{children:`The Armenian font used on this site is slightly different from the problem statement, so let me restate the problem:`}),`
`,(0,i.jsxs)(a.ol,{children:[`
`,(0,i.jsx)(a.li,{children:`Ֆրանսիա`}),`
`,(0,i.jsx)(a.li,{children:`Գերմանիա`}),`
`,(0,i.jsx)(a.li,{children:`Կանադա`}),`
`,(0,i.jsx)(a.li,{children:`Իտալիա`}),`
`,(0,i.jsx)(a.li,{children:`Իսրայել`}),`
`,(0,i.jsx)(a.li,{children:`Բուլղարիա`}),`
`,(0,i.jsx)(a.li,{children:`Արգենտինա`}),`
`,(0,i.jsx)(a.li,{children:`Ավստրալիա`}),`
`,(0,i.jsx)(a.li,{children:`Ֆինլանդիա`}),`
`,(0,i.jsx)(a.li,{children:`Ռուսաստան`}),`
`,(0,i.jsx)(a.li,{children:`Անգլիա`}),`
`,(0,i.jsx)(a.li,{children:`Պերու`}),`
`,(0,i.jsx)(a.li,{children:`Ամերիկա`}),`
`,(0,i.jsx)(a.li,{children:`Լիբիա`}),`
`,(0,i.jsx)(a.li,{children:`Ռումինիա`}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`Like all writing system problems, the first step is to understand the writing direction and whether it's alphabetic, syllabic, or abjad.`}),`
`,(0,i.jsx)(a.p,{children:`To understand whether it's alphabetic, just count the number of characters and see if they more or less match the number of letters in the English translations. A rough counting shows that most of the words are 7–9 characters long, and the English ones are also 7–9 letters long, suggesting that this is alphabetic, which greatly simplifies our matching process (indeed, the problem already states that the Armenian script descended from the Greek alphabet).`}),`
`,(0,i.jsxs)(a.p,{children:[`As for writing direction, we look at boundary glyphs and count their frequencies. Here, notice that word-final -ա occurs extremely frequently: 12 out of 15 times! Even if Armenian names are different from their English names, we should expect the leading consonant to be the same, and obviously there's no such common leading consonant in English, so the only conclusion is that Armenian is written left-to-right, and `,(0,i.jsx)(a.strong,{children:`ա = [a]`}),` ([-a] occurs 8 times in English, so the remaining 4 occurrences are where the Armenian pronunciation differs from the English one). Looking one more character: -իա occurs 9 times, -դա, -նա, and -կա each 1 time. In the English names, we have one case of [-da], one [-ka], and one [-na], while all remaining ones are [-ia], so -իա must be [-ia], with `,(0,i.jsx)(a.strong,{children:`ի = [i]`}),`.`]}),`
`,(0,i.jsx)(a.p,{children:`The other three words that don't end in -ա have -ել, -ան, and -ու. We already identified ն as a consonant, so -ան is [-an], [-ad], or [-ak]. Unfortunately, we don't have an occurrence of any of these three endings in the English names, so this lead stops here.`}),`
`,(0,i.jsxs)(a.p,{children:[`Now we turn to the first character. We still see some repetitions: 2 Ֆ, 2 Ի, 4 Ա, 2 Ռ. In the English names, the only initial segment that occurs more than twice is [A-] (it only occurs 3 times, but one can hypothesize that the remaining one is "England", which, if translated from "land of the Anglos", should begin with [A-], as in French "Angleterre"), so `,(0,i.jsx)(a.strong,{children:`Ա = [A]`}),` (the difference from ա is probably capitalization). Other than that, we have 2 [I-], 2 [F-], and 2 [R-]:`]}),`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`Same Armenian initial segment: (Ֆրանսիա, Ֆինլանդիա), (Իտալիա, Իսրայել), (Ռուսաստան, Ռումինիա)`}),`
`,(0,i.jsx)(a.li,{children:`Same English initial segment: (Israel, Italy), (Russia, Romania), (France, Finland)`}),`
`]}),`
`,(0,i.jsxs)(a.p,{children:[`Notice the Ֆի- prefix. ի is [i], and among the six English names, only Finland has [i] in the second position, so `,(0,i.jsx)(a.strong,{children:`Ֆ = [F]`}),`. Therefore, the other one is France. We can assume that in Armenian, Finland and France still start with [Fin-] and [Fran-] ("land of the Finns" and "land of the Franks"), giving `,(0,i.jsx)(a.strong,{children:`ր = [r]`}),`, `,(0,i.jsx)(a.strong,{children:`ն = [n]`}),`.`]}),`
`,(0,i.jsxs)(a.p,{children:[`Once we have ր = [r], notice that it also occurs in Իսրայել in the third place, so this is Israel, telling us that `,(0,i.jsx)(a.strong,{children:`Ի = [I]`}),`, `,(0,i.jsx)(a.strong,{children:`ս = [s]`}),`. The other one is Italy, so `,(0,i.jsx)(a.strong,{children:`տ = [t]`}),`, `,(0,i.jsx)(a.strong,{children:`լ = [l]`}),` (this is also verified by the "l" in Finland).`]}),`
`,(0,i.jsxs)(a.p,{children:[`The remaining pair must therefore be Russia and Romania, so `,(0,i.jsx)(a.strong,{children:`Ռ = [R]`}),`.`]}),`
`,(0,i.jsx)(a.p,{children:`Let's replace the identified letters:`}),`
`,`
`,(0,i.jsxs)(a.ol,{children:[`
`,(0,i.jsx)(a.li,{children:`Fransia`}),`
`,(0,i.jsx)(a.li,{children:`Գեrմania`}),`
`,(0,i.jsx)(a.li,{children:`Կanaդa`}),`
`,(0,i.jsx)(a.li,{children:`Italia`}),`
`,(0,i.jsx)(a.li,{children:`Israյեl`}),`
`,(0,i.jsx)(a.li,{children:`Բուlղaria`}),`
`,(0,i.jsx)(a.li,{children:`Arգեntina`}),`
`,(0,i.jsx)(a.li,{children:`Aվstralia`}),`
`,(0,i.jsx)(a.li,{children:`Finlanդia`}),`
`,(0,i.jsx)(a.li,{children:`Rուsastan`}),`
`,(0,i.jsx)(a.li,{children:`Anգlia`}),`
`,(0,i.jsx)(a.li,{children:`Պեrու`}),`
`,(0,i.jsx)(a.li,{children:`Aմեriկa`}),`
`,(0,i.jsx)(a.li,{children:`Լiբia`}),`
`,(0,i.jsx)(a.li,{children:`Rումinia`}),`
`]}),`
`,`
`,(0,i.jsxs)(a.p,{children:[`Filling in the remaining letters should be straightforward, because we can already make out a lot of the names. From 9, `,(0,i.jsx)(a.strong,{children:`դ = [d]`}),` (giving "Finlandia"). From 3, `,(0,i.jsx)(a.strong,{children:`Կ = [K]`}),` (giving "Kanada"). From 11, `,(0,i.jsx)(a.strong,{children:`գ = [g]`}),` (giving "Anglia"). From 14, `,(0,i.jsx)(a.strong,{children:`Լ = [L]`}),`, `,(0,i.jsx)(a.strong,{children:`բ = [b]`}),` (giving "Libia"). From 7, `,(0,i.jsx)(a.strong,{children:`ե = [e]`}),` (giving "Argentina"). From 12, `,(0,i.jsx)(a.strong,{children:`Պ = [P]`}),`, `,(0,i.jsx)(a.strong,{children:`ու = [u]`}),` (giving "Peru"). From 6, `,(0,i.jsx)(a.strong,{children:`Բ = [B]`}),`, `,(0,i.jsx)(a.strong,{children:`ղ = [g]`}),` (giving "Bulgaria"). From 13, `,(0,i.jsx)(a.strong,{children:`մ = [m]`}),`, `,(0,i.jsx)(a.strong,{children:`կ = [k]`}),` (giving "Amerika"). Finally, from 2, `,(0,i.jsx)(a.strong,{children:`Գ = [G]`}),` (giving "Germania").`]}),`
`,(0,i.jsx)(a.p,{children:`I'm not sure what յ (as in Israյel) and վ (as in Aվstralia, since [u] is already taken) are, but they don't occur in any other words, so they don't affect the solution. Anyway, the final transcriptions are:`}),`
`,(0,i.jsxs)(a.ol,{children:[`
`,(0,i.jsx)(a.li,{children:`Fransia = France`}),`
`,(0,i.jsx)(a.li,{children:`Germania = Germany`}),`
`,(0,i.jsx)(a.li,{children:`Kanada = Canada`}),`
`,(0,i.jsx)(a.li,{children:`Italia = Italy`}),`
`,(0,i.jsx)(a.li,{children:`Israյel = Israel`}),`
`,(0,i.jsx)(a.li,{children:`Bulgaria = Bulgaria`}),`
`,(0,i.jsx)(a.li,{children:`Argentina = Argentina`}),`
`,(0,i.jsx)(a.li,{children:`Aվstralia = Australia`}),`
`,(0,i.jsx)(a.li,{children:`Finlandia = Finland`}),`
`,(0,i.jsx)(a.li,{children:`Rusastan = Russia`}),`
`,(0,i.jsx)(a.li,{children:`Anglia = England`}),`
`,(0,i.jsx)(a.li,{children:`Peru = Peru`}),`
`,(0,i.jsx)(a.li,{children:`Amerika = America`}),`
`,(0,i.jsx)(a.li,{children:`Libia = Libya`}),`
`,(0,i.jsx)(a.li,{children:`Ruminia = Romania`}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`For E3, just replace the letters one-by-one. "Cameroon" should be transcribed as "Kamerun".`}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Writing system`],title:`NACLO 2025 - Problem E: Around the World in Armenian`,description:`NACLO 2025 - Problem E: Around the World in Armenian, a problem that involves Writing system. Detailed solution and walkthrough.`,year:2025,prob:`E`};export{o as default};