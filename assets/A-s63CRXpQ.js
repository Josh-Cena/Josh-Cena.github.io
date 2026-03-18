import{u as i,j as n}from"./index-BykeWMol.js";import{P as o,a}from"./_components-B6wE-VEc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ciqn2WuZ.js";const r={tags:["Writing system"],title:"NACLO 2024 - Problem A: Holy Roman Shorthand",description:"NACLO 2024 - Problem A: Holy Roman Shorthand, a problem that involves Writing system. Detailed solution and walkthrough.",year:2024,prob:"A"};function s(t){const e={br:"br",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.h1,{children:["NACLO 2024 - Problem A",n.jsx(e.span,{className:"subtitle",children:"Holy Roman Shorthand"})]}),`
`,`
`,n.jsx(o,{frontMatter:r}),`
`,`
`,n.jsx(e.p,{children:"A1 can be done just by looking at the shorthands and finding the ones with the matching Latin letters. Once this is done, let's line up the shorthands with their full text:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-plain",children:`re u⁹  ti ²
re ver ti tur

𝓹   cul
pro cul

su⁹
suus

ī  p⁹  p7uu
im per petuum

illo 4
illo rum

9   u⁹  saᴼ
con ver satio

fᴼ  tis
for tis

9   p ˣ   io
com p lex io

mᵃ  tis
mar tis

ca u⁹  7
ca ver et

ī  tᴼ  duct ū
in tro duct um
`})}),`
`,n.jsx(e.p,{children:"Thus we have:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"u⁹ = ver; -⁹ = -us (suffix); ⁹ = per"}),`
`,n.jsx(e.li,{children:"² = tur"}),`
`,n.jsx(e.li,{children:"𝓹 = pro"}),`
`,n.jsx(e.li,{children:"p7uu = petuum; 7 = et"}),`
`,n.jsx(e.li,{children:"ī = im/in"}),`
`,n.jsx(e.li,{children:"4 = rum"}),`
`,n.jsx(e.li,{children:"9 = com/con"}),`
`,n.jsx(e.li,{children:"-ᴼ = -tio (suffix); fᴼ = for; tᴼ = tro"}),`
`,n.jsx(e.li,{children:"ˣ = lex"}),`
`,n.jsx(e.li,{children:"mᵃ = mar"}),`
`,n.jsx(e.li,{children:"ū = um"}),`
`]}),`
`,n.jsx(e.p,{children:'9, ī, and presumably ū, can stand for different ending nasals, which depends on the next consonant. The nasal assimilates in place, so for example 9p is "comp" but 9t is "cont".'}),`
`,n.jsx(e.p,{children:"Now in A2:"}),`
`,n.jsxs(e.p,{children:["a. 9probatum = comprobatum",n.jsx(e.br,{}),`
`,"b. cōprobatū = comprobatum",n.jsx(e.br,{}),`
`,"c. compᴼbatum = comprobatum",n.jsx(e.br,{}),`
`,"d. 9probat⁹ = comprobatus e. 9probatū = comprobatum"]}),`
`,n.jsx(e.p,{children:"In A3, looking up our cipher, we see that 7 = et."}),`
`,n.jsx(e.p,{children:"In A4:"}),`
`,n.jsxs(e.p,{children:["a. procatis = 𝓹catis = 17 2 1 14 6 13",n.jsx(e.br,{}),`
`,"b. notarum = nota4 = 9 10 14 1 18",n.jsx(e.br,{}),`
`,"c. decernimus = dec⁹nī⁹ = 3 4 2 22 9 7 22",n.jsx(e.br,{}),`
`,"d. congnitio = 9gniᴼ = 21 5 9 6 11",n.jsx(e.br,{}),`
`,"e. crux = cᵘx = 2 15 16 (where did we ever see ᵘ?) f. petitur = p7i² = 12 20 6 19"]}),`
`,n.jsx(e.p,{children:'The remaining letters are: a, c, d, e, l, n. They assemble to "candle". "Thank you," says the Medieval monk.'}),`
`,n.jsx(a,{frontMatter:r})]})}function d(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{d as default,r as frontMatter};
