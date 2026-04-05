import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-BHnTV9cU.js";import"./Link-CEJsqf-b.js";import"./chroma-js-CGevHmQZ.js";import{i as n,r}from"./_components-Bnwig05j.js";var i=e();function a(e){let a={h1:`h1`,li:`li`,p:`p`,span:`span`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.h1,{children:[`NACLO 2023 - Problem I`,(0,i.jsx)(a.span,{className:`subtitle`,children:`Show That One for the People`})]}),(0,i.jsx)(n,{frontMatter:e}),`
`,`
`,(0,i.jsx)(a.p,{children:`We want to understand the rewrite rules for turning Latin into Umbrian. Let's maintain the list of Latin words and apply a set of rewrite rules to approach the Umbrian words. (Theoretically, we have to worry about the order in which we apply these rules, because an earlier rule may collapse certain differentiating contexts and cause later rules to be impossible to write out, but we start by being sloppy.)`}),`
`,(0,i.jsx)(a.p,{children:`We find out what rewrite rules we need by comparing the Latin and Umbrian words and seeing how they differ systematically. For example, if we see that Umbrian words never have the letter "o", and all "o"s in Latin correspond to "u"s in Umbrian, then we can write a rewrite rule that says "o → u". However, sometimes a Latin letter corresponds to a different Umbrian letter in some cases but the same Umbrian letter in others; in this case we need a selective rewrite rule, such as "s → f at the end of the word", so we target "tres → tref" but not "Sanktam" or "ustentu".`}),`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[`Beginning:`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`sisto, pro Petronia, tibi, Sanctam, tris, rubra, catulum, iuvencam, ovis, auctor, canito, ostento, istum, pro populo, ferto`}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`pro → -per`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[`sisto, `,(0,i.jsx)(a.strong,{children:`Petroniaper`}),`, tibi, Sanctam, tris, rubra, catulum, iuvencam, ovis, auctor, canito, ostento, istum, `,(0,i.jsx)(a.strong,{children:`populoper`}),`, ferto`]}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`o → u`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:`sistu`}),`, `,(0,i.jsx)(a.strong,{children:`Petruniaper`}),`, tibi, Sanctam, tris, rubra, catulum, iuvencam, `,(0,i.jsx)(a.strong,{children:`uvis`}),`, `,(0,i.jsx)(a.strong,{children:`auctur`}),`, `,(0,i.jsx)(a.strong,{children:`canitu`}),`, `,(0,i.jsx)(a.strong,{children:`ustentu`}),`, istum, `,(0,i.jsx)(a.strong,{children:`pupuluper`}),`, `,(0,i.jsx)(a.strong,{children:`fertu`})]}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`i → e, except in diphthongs`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:`sestu`}),`, Petruniaper, `,(0,i.jsx)(a.strong,{children:`tebe`}),`, Sanctam, `,(0,i.jsx)(a.strong,{children:`tres`}),`, rubra, catulum, iuvencam, `,(0,i.jsx)(a.strong,{children:`uves`}),`, auctur, `,(0,i.jsx)(a.strong,{children:`canetu`}),`, ustentu, `,(0,i.jsx)(a.strong,{children:`estum`}),`, pupuluper, fertu`]}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`b → f`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[`sestu, Petruniaper, `,(0,i.jsx)(a.strong,{children:`tefe`}),`, Sanctam, tres, `,(0,i.jsx)(a.strong,{children:`rufra`}),`, catulum, iuvencam, uves, auctur, canetu, ustentu, estum, pupuluper, fertu`]}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`c → k`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[`sestu, Petruniaper, tefe, `,(0,i.jsx)(a.strong,{children:`Sanktam`}),`, tres, rufra, `,(0,i.jsx)(a.strong,{children:`katulum`}),`, `,(0,i.jsx)(a.strong,{children:`iuvenkam`}),`, uves, `,(0,i.jsx)(a.strong,{children:`auktur`}),`, `,(0,i.jsx)(a.strong,{children:`kanetu`}),`, ustentu, estum, pupuluper, fertu`]}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`s → f at the end of the word`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[`sestu, Petruniaper, tefe, Sanktam, `,(0,i.jsx)(a.strong,{children:`tref`}),`, rufra, katulum, iuvenkam, `,(0,i.jsx)(a.strong,{children:`uvef`}),`, auktur, kanetu, ustentu, estum, pupuluper, fertu`]}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`Delete m at the end of the word`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[`sestu, Petruniaper, tefe, `,(0,i.jsx)(a.strong,{children:`Sankta`}),`, tref, rufra, `,(0,i.jsx)(a.strong,{children:`katulu`}),`, `,(0,i.jsx)(a.strong,{children:`iuvenka`}),`, uvef, auktur, kanetu, ustentu, `,(0,i.jsx)(a.strong,{children:`estu`}),`, pupuluper, fertu`]}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`Delete u before l`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[`sestu, Petruniaper, tefe, Sankta, tref, rufra, `,(0,i.jsx)(a.strong,{children:`katlu`}),`, iuvenka, uvef, auktur, kanetu, ustentu, estu, `,(0,i.jsx)(a.strong,{children:`pupluper`}),`, fertu`]}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`Delete n before a consonant`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[`sestu, Petruniaper, tefe, `,(0,i.jsx)(a.strong,{children:`Sakta`}),`, tref, rufra, katlu, `,(0,i.jsx)(a.strong,{children:`iuveka`}),`, uvef, auktur, kanetu, `,(0,i.jsx)(a.strong,{children:`ustetu`}),`, estu, pupluper, fertu`]}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`k → h before t`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[`sestu, Petruniaper, tefe, `,(0,i.jsx)(a.strong,{children:`Sahta`}),`, tref, rufra, katlu, iuveka, uvef, `,(0,i.jsx)(a.strong,{children:`auhtur`}),`, kanetu, ustetu, estu, pupluper, fertu`]}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`Finally just some random rewrites to close off the gaps: iu → i, au → u`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[`sestu, Petruniaper, tefe, Sahta, tref, rufra, katlu, `,(0,i.jsx)(a.strong,{children:`iveka`}),`, uvef, `,(0,i.jsx)(a.strong,{children:`uhtur`}),`, kanetu, ustetu, estu, pupluper, fertu`]}),`
`]}),`
`]}),`
`]}),`
`,(0,i.jsx)(a.p,{children:`And we've arrived at the list of Umbrian words. Using these rules to rewrite the given words:`}),`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[`Beginning:`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`ito, frictum, pro re, tauros, forum, inito`}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`pro → -per`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[`ito, frictum, `,(0,i.jsx)(a.strong,{children:`reper`}),`, tauros, forum, inito`]}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`o → u`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:`itu`}),`, frictum, reper, `,(0,i.jsx)(a.strong,{children:`taurus`}),`, `,(0,i.jsx)(a.strong,{children:`furum`}),`, `,(0,i.jsx)(a.strong,{children:`initu`})]}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`i → e, except in diphthongs`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:`etu`}),`, `,(0,i.jsx)(a.strong,{children:`frectum`}),`, reper, taurus, furum, `,(0,i.jsx)(a.strong,{children:`enetu`})]}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`b → f`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`etu, frectum, reper, taurus, furum, enetu`}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`c → k`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[`etu, `,(0,i.jsx)(a.strong,{children:`frektum`}),`, reper, taurus, furum, enetu`]}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`s → f at the end of the word`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[`etu, frektum, reper, `,(0,i.jsx)(a.strong,{children:`tauruf`}),`, furum, enetu`]}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`Delete m at the end of the word`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[`etu, `,(0,i.jsx)(a.strong,{children:`frektu`}),`, reper, tauruf, `,(0,i.jsx)(a.strong,{children:`furu`}),`, enetu`]}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`Delete u before l`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`etu, frektu, reper, tauruf, furu, enetu`}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`Delete n before a consonant`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsx)(a.li,{children:`etu, frektu, reper, tauruf, furu, enetu`}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`k → h before t`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[`etu, `,(0,i.jsx)(a.strong,{children:`frehtu`}),`, reper, tauruf, furu, enetu`]}),`
`]}),`
`]}),`
`,(0,i.jsxs)(a.li,{children:[`iu → i, au → u`,`
`,(0,i.jsxs)(a.ul,{children:[`
`,(0,i.jsxs)(a.li,{children:[`etu, frehtu, reper, `,(0,i.jsx)(a.strong,{children:`turuf`}),`, furu, enetu`]}),`
`]}),`
`]}),`
`]}),(0,i.jsx)(r,{frontMatter:e})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}o.meta={tags:[`Historical`],title:`NACLO 2023 - Problem I: Show That One for the People`,description:`NACLO 2023 - Problem I: Show That One for the People, a problem that involves Historical. Detailed solution and walkthrough.`,year:2023,prob:`I`};export{o as default};