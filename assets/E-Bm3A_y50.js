import{u as t,j as n}from"./index-iZtX16Nl.js";import{P as a,a as l}from"./_components-7amCHrfb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ciqn2WuZ.js";const r={tags:["Writing system"],title:"NACLO 2025 - Problem E: Around the World in Armenian",description:"NACLO 2025 - Problem E: Around the World in Armenian, a problem that involves Writing system. Detailed solution and walkthrough.",year:2025,prob:"E"};function s(i){const e={h1:"h1",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.h1,{children:["NACLO 2025 - Problem E",n.jsx(e.span,{className:"subtitle",children:"Around the World in Armenian"})]}),`
`,`
`,n.jsx(a,{frontMatter:r}),`
`,`
`,n.jsx(e.p,{children:"The Armenian font used on this site is slightly different from the problem statement, so let me restate the problem:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Ֆրանսիա"}),`
`,n.jsx(e.li,{children:"Գերմանիա"}),`
`,n.jsx(e.li,{children:"Կանադա"}),`
`,n.jsx(e.li,{children:"Իտալիա"}),`
`,n.jsx(e.li,{children:"Իսրայել"}),`
`,n.jsx(e.li,{children:"Բուլղարիա"}),`
`,n.jsx(e.li,{children:"Արգենտինա"}),`
`,n.jsx(e.li,{children:"Ավստրալիա"}),`
`,n.jsx(e.li,{children:"Ֆինլանդիա"}),`
`,n.jsx(e.li,{children:"Ռուսաստան"}),`
`,n.jsx(e.li,{children:"Անգլիա"}),`
`,n.jsx(e.li,{children:"Պերու"}),`
`,n.jsx(e.li,{children:"Ամերիկա"}),`
`,n.jsx(e.li,{children:"Լիբիա"}),`
`,n.jsx(e.li,{children:"Ռումինիա"}),`
`]}),`
`,n.jsx(e.p,{children:"Like all writing system problems, the first step is to understand the writing direction and whether it's alphabetic, syllabic, or abjad."}),`
`,n.jsx(e.p,{children:"To understand whether it's alphabetic, just count the number of characters and see if they more or less match the number of letters in the English translations. A rough counting shows that most of the words are 7–9 characters long, and the English ones are also 7–9 letters long, suggesting that this is alphabetic, which greatly simplifies our matching process (indeed, the problem already states that the Armenian script descended from the Greek alphabet)."}),`
`,n.jsxs(e.p,{children:["As for writing direction, we look at boundary glyphs and count their frequencies. Here, notice that word-final -ա occurs extremely frequently: 12 out of 15 times! Even if Armenian names are different from their English names, we should expect the leading consonant to be the same, and obviously there's no such common leading consonant in English, so the only conclusion is that Armenian is written left-to-right, and ",n.jsx(e.strong,{children:"ա = [a]"})," ([-a] occurs 8 times in English, so the remaining 4 occurrences are where the Armenian pronunciation differs from the English one). Looking one more character: -իա occurs 9 times, -դա, -նա, and -կա each 1 time. In the English names, we have one case of [-da], one [-ka], and one [-na], while all remaining ones are [-ia], so -իա must be [-ia], with ",n.jsx(e.strong,{children:"ի = [i]"}),"."]}),`
`,n.jsx(e.p,{children:"The other three words that don't end in -ա have -ել, -ան, and -ու. We already identified ն as a consonant, so -ան is [-an], [-ad], or [-ak]. Unfortunately, we don't have an occurrence of any of these three endings in the English names, so this lead stops here."}),`
`,n.jsxs(e.p,{children:['Now we turn to the first character. We still see some repetitions: 2 Ֆ, 2 Ի, 4 Ա, 2 Ռ. In the English names, the only initial segment that occurs more than twice is [A-] (it only occurs 3 times, but one can hypothesize that the remaining one is "England", which, if translated from "land of the Anglos", should begin with [A-], as in French "Angleterre"), so ',n.jsx(e.strong,{children:"Ա = [A]"})," (the difference from ա is probably capitalization). Other than that, we have 2 [I-], 2 [F-], and 2 [R-]:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Same Armenian initial segment: (Ֆրանսիա, Ֆինլանդիա), (Իտալիա, Իսրայել), (Ռուսաստան, Ռումինիա)"}),`
`,n.jsx(e.li,{children:"Same English initial segment: (Israel, Italy), (Russia, Romania), (France, Finland)"}),`
`]}),`
`,n.jsxs(e.p,{children:["Notice the Ֆի- prefix. ի is [i], and among the six English names, only Finland has [i] in the second position, so ",n.jsx(e.strong,{children:"Ֆ = [F]"}),'. Therefore, the other one is France. We can assume that in Armenian, Finland and France still start with [Fin-] and [Fran-] ("land of the Finns" and "land of the Franks"), giving ',n.jsx(e.strong,{children:"ր = [r]"}),", ",n.jsx(e.strong,{children:"ն = [n]"}),"."]}),`
`,n.jsxs(e.p,{children:["Once we have ր = [r], notice that it also occurs in Իսրայել in the third place, so this is Israel, telling us that ",n.jsx(e.strong,{children:"Ի = [I]"}),", ",n.jsx(e.strong,{children:"ս = [s]"}),". The other one is Italy, so ",n.jsx(e.strong,{children:"տ = [t]"}),", ",n.jsx(e.strong,{children:"լ = [l]"}),' (this is also verified by the "l" in Finland).']}),`
`,n.jsxs(e.p,{children:["The remaining pair must therefore be Russia and Romania, so ",n.jsx(e.strong,{children:"Ռ = [R]"}),"."]}),`
`,n.jsx(e.p,{children:"Let's replace the identified letters:"}),`
`,`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Fransia"}),`
`,n.jsx(e.li,{children:"Գեrմania"}),`
`,n.jsx(e.li,{children:"Կanaդa"}),`
`,n.jsx(e.li,{children:"Italia"}),`
`,n.jsx(e.li,{children:"Israյեl"}),`
`,n.jsx(e.li,{children:"Բուlղaria"}),`
`,n.jsx(e.li,{children:"Arգեntina"}),`
`,n.jsx(e.li,{children:"Aվstralia"}),`
`,n.jsx(e.li,{children:"Finlanդia"}),`
`,n.jsx(e.li,{children:"Rուsastan"}),`
`,n.jsx(e.li,{children:"Anգlia"}),`
`,n.jsx(e.li,{children:"Պեrու"}),`
`,n.jsx(e.li,{children:"Aմեriկa"}),`
`,n.jsx(e.li,{children:"Լiբia"}),`
`,n.jsx(e.li,{children:"Rումinia"}),`
`]}),`
`,`
`,n.jsxs(e.p,{children:["Filling in the remaining letters should be straightforward, because we can already make out a lot of the names. From 9, ",n.jsx(e.strong,{children:"դ = [d]"}),' (giving "Finlandia"). From 3, ',n.jsx(e.strong,{children:"Կ = [K]"}),' (giving "Kanada"). From 11, ',n.jsx(e.strong,{children:"գ = [g]"}),' (giving "Anglia"). From 14, ',n.jsx(e.strong,{children:"Լ = [L]"}),", ",n.jsx(e.strong,{children:"բ = [b]"}),' (giving "Libia"). From 7, ',n.jsx(e.strong,{children:"ե = [e]"}),' (giving "Argentina"). From 12, ',n.jsx(e.strong,{children:"Պ = [P]"}),", ",n.jsx(e.strong,{children:"ու = [u]"}),' (giving "Peru"). From 6, ',n.jsx(e.strong,{children:"Բ = [B]"}),", ",n.jsx(e.strong,{children:"ղ = [g]"}),' (giving "Bulgaria"). From 13, ',n.jsx(e.strong,{children:"մ = [m]"}),", ",n.jsx(e.strong,{children:"կ = [k]"}),' (giving "Amerika"). Finally, from 2, ',n.jsx(e.strong,{children:"Գ = [G]"}),' (giving "Germania").']}),`
`,n.jsx(e.p,{children:"I'm not sure what յ (as in Israյel) and վ (as in Aվstralia, since [u] is already taken) are, but they don't occur in any other words, so they don't affect the solution. Anyway, the final transcriptions are:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Fransia = France"}),`
`,n.jsx(e.li,{children:"Germania = Germany"}),`
`,n.jsx(e.li,{children:"Kanada = Canada"}),`
`,n.jsx(e.li,{children:"Italia = Italy"}),`
`,n.jsx(e.li,{children:"Israյel = Israel"}),`
`,n.jsx(e.li,{children:"Bulgaria = Bulgaria"}),`
`,n.jsx(e.li,{children:"Argentina = Argentina"}),`
`,n.jsx(e.li,{children:"Aվstralia = Australia"}),`
`,n.jsx(e.li,{children:"Finlandia = Finland"}),`
`,n.jsx(e.li,{children:"Rusastan = Russia"}),`
`,n.jsx(e.li,{children:"Anglia = England"}),`
`,n.jsx(e.li,{children:"Peru = Peru"}),`
`,n.jsx(e.li,{children:"Amerika = America"}),`
`,n.jsx(e.li,{children:"Libia = Libya"}),`
`,n.jsx(e.li,{children:"Ruminia = Romania"}),`
`]}),`
`,n.jsx(e.p,{children:'For E3, just replace the letters one-by-one. "Cameroon" should be transcribed as "Kamerun".'}),`
`,n.jsx(l,{frontMatter:r})]})}function g(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{g as default,r as frontMatter};
