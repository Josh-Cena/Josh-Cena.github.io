import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import"./Link-p8Ht0V-s.js";import"./chroma-js-C4qMxh81.js";import{i as n,r}from"./_components-BMUVh2lY.js";import{t as i}from"./F.module-INdvnXD2.js";var a=e(),o={tags:[`Phrase translation`],title:`NACLO 2022 - Problem F: Splash to Save`,description:`NACLO 2022 - Problem F: Splash to Save, a problem that involves Phrase translation. Detailed solution and walkthrough.`,year:2022,prob:`F`};function s(e){let s={br:`br`,em:`em`,h1:`h1`,li:`li`,ol:`ol`,p:`p`,span:`span`,ul:`ul`,...t(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.h1,{children:[`NACLO 2022 - Problem F`,(0,a.jsx)(s.span,{className:`subtitle`,children:`Splash to Save`})]}),(0,a.jsx)(n,{frontMatter:o}),`
`,`
`,`
`,(0,a.jsx)(s.p,{children:`There's no syntactic pattern here, so we just have to find a few keywords. I found: "ankom" = "Ant" (appearing in (1) and (2)); "tärko" = "Small Fish" (appearing in (1) and (3)).`}),`
`,(0,a.jsx)(s.p,{children:`Looking at F1:`}),`
`,(0,a.jsxs)(s.ul,{children:[`
`,(0,a.jsx)(s.li,{children:`(12) and (B) are remarkably longer than the others, and they start with "Small Fish" and "tärko" respectively, so they match.`}),`
`,(0,a.jsx)(s.li,{children:`The other sentence containing "tärko", (F), must be (9).`}),`
`,(0,a.jsx)(s.li,{children:`The sentence containing "ankom", (C), must be (8).`}),`
`]}),`
`,(0,a.jsx)(s.p,{children:`Here are the remaining sentences:`}),`
`,(0,a.jsxs)(s.p,{children:[`(7) It blew down and broke the tree.`,(0,a.jsx)(s.br,{}),`
`,`(10) But some big fish were trying to kill him.`,(0,a.jsx)(s.br,{}),`
`,`(11) A catfish was about to swallow him.`]}),`
`,(0,a.jsxs)(s.p,{children:[`(A) Bunkuttang a mäse ngänygäny e dängkamän.`,(0,a.jsx)(s.br,{}),`
`,`(D) Be ddob kollba ulleulle da gäz e de ada däganeyo.`,(0,a.jsx)(s.br,{}),`
`,`(E) Llo de duduaibnegnän a dattkaemnegnän.`]}),`
`,(0,a.jsx)(s.p,{children:`We need to look for more keywords to match them, preferably concrete nouns and verbs. Here's another with "tree":`}),`
`,(0,a.jsxs)(s.p,{children:[`(2) Ankom obo ma me daeya llo toko me. `,(0,a.jsx)(s.em,{children:`Ant was in his house on top of a tree.`})]}),`
`,(0,a.jsx)(s.p,{children:`Compare with the three sentences above; the only word that repeats is "llo" in (E), so (7) = (E), and "llo" = "tree".`}),`
`,(0,a.jsx)(s.p,{children:`Here's one containing "fish":`}),`
`,(0,a.jsxs)(s.p,{children:[`(3) Tärko walle me daeya ddob kollba nagnag oba peyang. `,(0,a.jsx)(s.em,{children:`Small Fish was in the river with some fish friends.`})]}),`
`,(0,a.jsx)(s.p,{children:`Compare with the remaining two; "ddob kollba" appears in (D), so (10) = (D), and one of "ddob" and "kollba" is "fish". That leaves (11) = (A).`}),`
`,(0,a.jsx)(s.p,{children:`Now we have all the correspondences, we need to look more closely at word-level matching. We don't have to translate each word because the question only asks for a selected few, but it would be nice to get a few more to get a sense of sentence structure.`}),`
`,(0,a.jsxs)(s.ul,{children:[`
`,(0,a.jsx)(s.li,{children:`6 and 7 both mention "wind". They share the word "wel".`}),`
`,(0,a.jsx)(s.li,{children:`3 and 8 both mention "river". They share the word "walle".`}),`
`,(0,a.jsx)(s.li,{children:`8 and 12 both mention "threw". They share the word "daspunän".`}),`
`,(0,a.jsx)(s.li,{children:`The word after "wind" in 6, "ulle", should mean "big". Indeed, it also appears in 10 as "ulleulle". The reduplication may stand for plural. Therefore, the words before "ulleulle", "ddob kollba", mean "some fish". These two words also appear in 3, which are followed by "nagnag", which should be "friends". Indeed, "nag" is also mentioned in 1, which also mentions "friends".`}),`
`,(0,a.jsx)(s.li,{children:`In 6, "wel ulle da gongkamän" must be "a big wind began", leaving only "gongkamän" as "began". Combining with "daspunän", it's reasonable to guess that all words ending in "-än" are verbs. So in 5, "dakonewän" = "covered"; in 7, "duduaibnegnän a dattkaemnegnän" = "blew down and broke"; in 8, "dapisamän" = "tore"; in 9, "dägagän" = "saw", "guinggolän" = "moved closer"; in 11, "dängkamän" = "swallow"; in 12, "gokätaemän" = "splashed", "gogän" = "was saved".`}),`
`]}),`
`,(0,a.jsxs)(s.p,{children:[`Here are all sentences. The colors represent different parts of speech: `,(0,a.jsx)(`span`,{className:i.red,children:`red`}),` for subjects, `,(0,a.jsx)(`span`,{className:i.green,children:`green`}),` for objects, `,(0,a.jsx)(`span`,{className:i.blue,children:`blue`}),` for verbs, and `,(0,a.jsx)(`span`,{className:i.violet,children:`violet`}),` for other parts of speech.`]}),`
`,(0,a.jsxs)(s.ol,{children:[`
`,(0,a.jsxs)(s.li,{children:[(0,a.jsx)(`span`,{className:i.red,children:`Ankom a tärko`}),` ubi eragwaeya ddobae ai
abal `,(0,a.jsx)(`span`,{className:i.green,children:`nag`}),` dagwaeya.
`,(0,a.jsx)(`span`,{className:i.red,children:`Ant and Small Fish`}),`, they were really very
good `,(0,a.jsx)(`span`,{className:i.green,children:`friends`}),`.`]}),`
`,(0,a.jsxs)(s.li,{children:[(0,a.jsx)(`span`,{className:i.red,children:`Ankom`}),` obo ma me daeya
`,(0,a.jsx)(`span`,{className:i.violet,children:`llo`}),` toko me.
`,(0,a.jsx)(`span`,{className:i.red,children:`Ant`}),` was in his house on top of
`,(0,a.jsx)(`span`,{className:i.violet,children:`a tree`}),`.`]}),`
`,(0,a.jsxs)(s.li,{children:[(0,a.jsx)(`span`,{className:i.red,children:`Tärko`}),`
`,(0,a.jsx)(`span`,{className:i.violet,children:`walle`}),` me daeya
`,(0,a.jsx)(`span`,{className:i.green,children:`ddob kollba nagnag`}),` oba peyang.
`,(0,a.jsx)(`span`,{className:i.red,children:`Small Fish`}),` was in the
`,(0,a.jsx)(`span`,{className:i.violet,children:`river`}),` with
`,(0,a.jsx)(`span`,{className:i.green,children:`some fish friends`}),`.`]}),`
`,(0,a.jsxs)(s.li,{children:[`Ttongo ag me däbe ttängäm a säresäremang gogon.`,(0,a.jsx)(s.br,{}),`
`,`One morning that place was about to rain.`]}),`
`,(0,a.jsxs)(s.li,{children:[`Yäbäd de ddapall käkan da `,(0,a.jsx)(`span`,{className:i.blue,children:`dakonewän`}),`.`,(0,a.jsx)(s.br,{}),`
`,`Clouds `,(0,a.jsx)(`span`,{className:i.blue,children:`covered`}),` the sun.`]}),`
`,(0,a.jsxs)(s.li,{children:[`Malla wätali gogon, `,(0,a.jsx)(`span`,{className:i.red,children:`wel ulle`}),` da `,(0,a.jsx)(`span`,{className:i.blue,children:`gongkamän`}),`.`,(0,a.jsx)(s.br,{}),`
`,`It wasn’t long before a `,(0,a.jsx)(`span`,{className:i.red,children:`big wind`}),` `,(0,a.jsx)(`span`,{className:i.blue,children:`began`}),`.`]}),`
`,(0,a.jsxs)(s.li,{children:[(0,a.jsx)(`span`,{className:i.green,children:`Llo`}),` de
`,(0,a.jsx)(`span`,{className:i.blue,children:`duduaibnegnän a dattkaemnegnän`}),`. (E) It
`,(0,a.jsx)(`span`,{className:i.blue,children:`blew down and broke`}),`
`,(0,a.jsx)(`span`,{className:i.green,children:`the tree`}),`.`]}),`
`,(0,a.jsxs)(s.li,{children:[(0,a.jsx)(`span`,{className:i.green,children:`Ankom`}),` bo ma de
`,(0,a.jsx)(`span`,{className:i.red,children:`wel`}),` a
`,(0,a.jsx)(`span`,{className:i.blue,children:`dapisamän`}),` a
`,(0,a.jsx)(`span`,{className:i.green,children:`ankom`}),` bom
`,(0,a.jsx)(`span`,{className:i.blue,children:`daspunän`}),`
`,(0,a.jsx)(`span`,{className:i.violet,children:`walle`}),` we. (C) The
`,(0,a.jsx)(`span`,{className:i.red,children:`wind`}),`
`,(0,a.jsx)(`span`,{className:i.blue,children:`tore`}),`
`,(0,a.jsx)(`span`,{className:i.green,children:`Ant`}),`'s house and
`,(0,a.jsx)(`span`,{className:i.blue,children:`threw`}),`
`,(0,a.jsx)(`span`,{className:i.green,children:`Ant`}),` into the
`,(0,a.jsx)(`span`,{className:i.violet,children:`river`}),`.`]}),`
`,(0,a.jsxs)(s.li,{children:[(0,a.jsx)(`span`,{className:i.red,children:`Tärko`}),` da angde ikop dägagän, obo dowae e
`,(0,a.jsx)(`span`,{className:i.blue,children:`guinggolän`}),`. (F) When
`,(0,a.jsx)(`span`,{className:i.red,children:`Small Fish`}),` saw, he
`,(0,a.jsx)(`span`,{className:i.blue,children:`moved closer`}),` to him.`]}),`
`,(0,a.jsxs)(s.li,{children:[`Be `,(0,a.jsx)(`span`,{className:i.red,children:`ddob kollba ulleulle`}),` da gäz e de ada däganeyo. (D)`,(0,a.jsx)(s.br,{}),`
`,`But `,(0,a.jsx)(`span`,{className:i.red,children:`some big fish`}),` were trying to kill him.`]}),`
`,(0,a.jsxs)(s.li,{children:[`Bunkuttang a mäse ngänygäny e `,(0,a.jsx)(`span`,{className:i.blue,children:`dängkamän`}),`. (A)`,(0,a.jsx)(s.br,{}),`
`,`A catfish was about to `,(0,a.jsx)(`span`,{className:i.blue,children:`swallow`}),` him.`]}),`
`,(0,a.jsxs)(s.li,{children:[(0,a.jsx)(`span`,{className:i.red,children:`Tärko`}),` da mängalae källa
`,(0,a.jsx)(`span`,{className:i.blue,children:`gokätaemän`}),` a ine peyang
`,(0,a.jsx)(`span`,{className:i.green,children:`ankom`}),` bom towall toko we
`,(0,a.jsx)(`span`,{className:i.blue,children:`daspunän`}),` a ttam
`,(0,a.jsx)(`span`,{className:i.blue,children:`gogän`}),`. (B)
`,(0,a.jsx)(`span`,{className:i.red,children:`Small Fish`}),` quickly
`,(0,a.jsx)(`span`,{className:i.blue,children:`splashed`}),` with his tail, and with water
`,(0,a.jsx)(`span`,{className:i.blue,children:`threw`}),`
`,(0,a.jsx)(`span`,{className:i.green,children:`Ant`}),` on top of the grass, and he
`,(0,a.jsx)(`span`,{className:i.blue,children:`was saved`}),`.`]}),`
`]}),`
`,(0,a.jsx)(s.p,{children:`In F2 and F3, we only have 2 left to translate: "yäbäd" and "catfish" (I didn't explicitly say it, but "and" is obviously "a" from "ant and small fish" and "blew down and broke"). "Yäbäd" only appears in 5; "catfish" only appears in 11.`}),`
`,(0,a.jsxs)(s.p,{children:[`To understand whether "yäbäd" is "clouds" or "sun", we must understand the word order. Unfortunately, there's no fixed word order: in most cases we have the subject first, but in a few cases we have the `,(0,a.jsx)(s.em,{children:`object`}),` first. But here's a critical observation: in "wel ulle da gongkamän" = "a big wind began", we have the particle "da" unaccounted for. Looking around: in sentences 6–12, whenever we have a red phrase, it's always followed by "da" or "a". So this particle is the subject marker. Inspired by this, when we look at all green phrases, they are all followed by "de" or "bom" (in 8, the whole object is "Ant's house" = "Ankom bo ma"). Therefore, because "yäbäd" is followed by "de", it must be the object "clouds". This also means that "sun" is "ddapall käkan". Similarly, in 11, "bunkuttang" is followed by "a", so it must be the subject "catfish".`]}),`
`,(0,a.jsxs)(s.p,{children:[`Finally, I think F4 is pretty difficult. We already know that "tärko" = "small fish", "kollba" = "fish", "llo" = "tree", "ulleulle" = "big", "wel" = "wind", so none of these words can be in the translation for "Ant got on top of his house.". We also know that "ankom" = "ant" and `,(0,a.jsx)(s.em,{children:`sort of`}),` that "obo ma" = "his house" (based on 2 and 8). That leaves two of "toko", "towall", "me", "we" as "on top of". We have only a few sentences containing these words:`]}),`
`,(0,a.jsxs)(s.ul,{children:[`
`,(0,a.jsxs)(s.li,{children:[`"me"`,`
`,(0,a.jsxs)(`ol`,{children:[(0,a.jsxs)(`li`,{value:2,children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(`span`,{className:i.red,children:`Ankom`}),` obo ma me daeya`,` `,`
`,(0,a.jsx)(`span`,{className:i.violet,children:`llo`}),` toko me.`]}),(0,a.jsx)(`br`,{}),(0,a.jsxs)(s.p,{children:[(0,a.jsx)(`span`,{className:i.red,children:`Ant`}),` was in his house on top of`,` `,`
`,(0,a.jsx)(`span`,{className:i.violet,children:`a tree`}),`.`]})]}),(0,a.jsxs)(`li`,{value:3,children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(`span`,{className:i.red,children:`Tärko`}),` `,`
`,(0,a.jsx)(`span`,{className:i.violet,children:`walle`}),` me daeya`,` `,`
`,(0,a.jsx)(`span`,{className:i.green,children:`ddob kollba nagnag`}),` oba peyang.`]}),(0,a.jsx)(`br`,{}),(0,a.jsxs)(s.p,{children:[(0,a.jsx)(`span`,{className:i.red,children:`Small Fish`}),` was in the`,` `,`
`,(0,a.jsx)(`span`,{className:i.violet,children:`river`}),` with`,` `,`
`,(0,a.jsx)(`span`,{className:i.green,children:`some fish friends`}),`.`]})]}),(0,a.jsxs)(`li`,{value:4,children:[(0,a.jsx)(s.p,{children:`Ttongo ag me däbe ttängäm a säresäremang gogon.`}),(0,a.jsx)(`br`,{}),(0,a.jsx)(s.p,{children:`One morning that place was about to rain.`})]})]}),`
`]}),`
`,(0,a.jsxs)(s.li,{children:[`"we"`,`
`,(0,a.jsxs)(`ol`,{children:[(0,a.jsxs)(`li`,{value:8,children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(`span`,{className:i.green,children:`Ankom`}),` bo ma de`,` `,`
`,(0,a.jsx)(`span`,{className:i.red,children:`wel`}),` a`,` `,`
`,(0,a.jsx)(`span`,{className:i.blue,children:`dapisamän`}),` a`,` `,`
`,(0,a.jsx)(`span`,{className:i.green,children:`ankom`}),` bom`,` `,`
`,(0,a.jsx)(`span`,{className:i.blue,children:`daspunän`}),` `,`
`,(0,a.jsx)(`span`,{className:i.violet,children:`walle`}),` we.`]}),(0,a.jsx)(`br`,{}),(0,a.jsxs)(s.p,{children:[`The `,(0,a.jsx)(`span`,{className:i.red,children:`wind`}),` `,`
`,(0,a.jsx)(`span`,{className:i.blue,children:`tore`}),` `,`
`,(0,a.jsx)(`span`,{className:i.green,children:`Ant`}),`'s house and`,` `,`
`,(0,a.jsx)(`span`,{className:i.blue,children:`threw`}),` `,`
`,(0,a.jsx)(`span`,{className:i.green,children:`Ant`}),` into the`,` `,`
`,(0,a.jsx)(`span`,{className:i.violet,children:`river`}),`.`]})]}),(0,a.jsx)(`li`,{value:12,children:(0,a.jsxs)(s.p,{children:[(0,a.jsx)(`span`,{className:i.red,children:`Tärko`}),` da mängalae källa`,` `,`
`,(0,a.jsx)(`span`,{className:i.blue,children:`gokätaemän`}),` a ine peyang`,` `,`
`,(0,a.jsx)(`span`,{className:i.green,children:`ankom`}),` bom towall toko we`,` `,`
`,(0,a.jsx)(`span`,{className:i.blue,children:`daspunän`}),` a ttam`,` `,`
`,(0,a.jsx)(`span`,{className:i.blue,children:`gogän`}),`. `,(0,a.jsx)(`br`,{}),`
`,(0,a.jsx)(`span`,{className:i.red,children:`Small Fish`}),` quickly`,` `,`
`,(0,a.jsx)(`span`,{className:i.blue,children:`splashed`}),` with his tail, and with
water `,(0,a.jsx)(`span`,{className:i.blue,children:`threw`}),` `,`
`,(0,a.jsx)(`span`,{className:i.green,children:`Ant`}),` on top of the grass, and he`,` `,`
`,(0,a.jsx)(`span`,{className:i.blue,children:`was saved`}),`.`]})})]}),`
`]}),`
`,(0,a.jsxs)(s.li,{children:[`"toko"`,`
`,(0,a.jsxs)(`ol`,{children:[(0,a.jsxs)(`li`,{value:2,children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(`span`,{className:i.red,children:`Ankom`}),` obo ma me daeya`,` `,`
`,(0,a.jsx)(`span`,{className:i.violet,children:`llo`}),` toko me.`]}),(0,a.jsx)(`br`,{}),(0,a.jsxs)(s.p,{children:[(0,a.jsx)(`span`,{className:i.red,children:`Ant`}),` was in his house on top of`,` `,`
`,(0,a.jsx)(`span`,{className:i.violet,children:`a tree`}),`.`]})]}),(0,a.jsx)(`li`,{value:12,children:(0,a.jsxs)(s.p,{children:[(0,a.jsx)(`span`,{className:i.red,children:`Tärko`}),` da mängalae källa`,` `,`
`,(0,a.jsx)(`span`,{className:i.blue,children:`gokätaemän`}),` a ine peyang`,` `,`
`,(0,a.jsx)(`span`,{className:i.green,children:`ankom`}),` bom towall toko we`,` `,`
`,(0,a.jsx)(`span`,{className:i.blue,children:`daspunän`}),` a ttam`,` `,`
`,(0,a.jsx)(`span`,{className:i.blue,children:`gogän`}),`.`,(0,a.jsx)(`br`,{}),`
`,(0,a.jsx)(`span`,{className:i.red,children:`Small Fish`}),` quickly`,` `,`
`,(0,a.jsx)(`span`,{className:i.blue,children:`splashed`}),` with his tail, and with
water `,(0,a.jsx)(`span`,{className:i.blue,children:`threw`}),` `,`
`,(0,a.jsx)(`span`,{className:i.green,children:`Ant`}),` on top of the grass, and he`,` `,`
`,(0,a.jsx)(`span`,{className:i.blue,children:`was saved`}),`.`]})})]}),`
`]}),`
`,(0,a.jsxs)(s.li,{children:[`"towall"`,`
`,(0,a.jsx)(`ol`,{children:(0,a.jsx)(`li`,{value:12,children:(0,a.jsxs)(s.p,{children:[(0,a.jsx)(`span`,{className:i.red,children:`Tärko`}),` da mängalae källa`,` `,`
`,(0,a.jsx)(`span`,{className:i.blue,children:`gokätaemän`}),` a ine peyang`,` `,`
`,(0,a.jsx)(`span`,{className:i.green,children:`ankom`}),` bom towall toko we`,` `,`
`,(0,a.jsx)(`span`,{className:i.blue,children:`daspunän`}),` a ttam`,` `,`
`,(0,a.jsx)(`span`,{className:i.blue,children:`gogän`}),`.`,(0,a.jsx)(`br`,{}),`
`,(0,a.jsx)(`span`,{className:i.red,children:`Small Fish`}),` quickly`,` `,`
`,(0,a.jsx)(`span`,{className:i.blue,children:`splashed`}),` with his tail, and with
water `,(0,a.jsx)(`span`,{className:i.blue,children:`threw`}),` `,`
`,(0,a.jsx)(`span`,{className:i.green,children:`Ant`}),` on top of the grass, and he`,` `,`
`,(0,a.jsx)(`span`,{className:i.blue,children:`was saved`}),`.`]})})}),`
`]}),`
`]}),`
`,(0,a.jsx)(s.p,{children:`The two occurrences of "on top of" both use "toko", so "toko" should be in the translation. "me" and "we" seem to be prepositions. I wouldn't have got this, but both cases of "we" are combined with "threw", so it expresses a dynamic change of location, while "me" is used in a static location. Here "got on" is a dynamic change, so we should use "toko we". If "toko we" is "onto top of", then that leaves "towall" in 12 as "grass".`}),(0,a.jsx)(r,{frontMatter:o})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}export{c as default,o as frontMatter};