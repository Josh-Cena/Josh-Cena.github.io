import{u as i,j as e}from"./index-8NkGY__L.js";import{P as o}from"./index-zRgmsVCP.js";const a={description:"An overview of what comes, what stays, and what goes.",date:"2023-11-05",title:"Welcome to my new website!"};function n(s){const t={a:"a",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{children:"Welcome to my new website!"}),`
`,`
`,e.jsx(o,{frontMatter:a}),`
`,e.jsx(t.p,{children:"Welcome!"}),`
`,e.jsxs(t.p,{children:["You may have seen my old website, which is now archived at ",e.jsx(t.a,{href:"https://joshcena.com/old-website/",children:"https://joshcena.com/old-website/"}),". That website was developed when I was a high school junior, not knowing what I was doing. I just used the static site generator I was most familiar with, ",e.jsx(t.a,{href:"https://docusaurus.io/",children:"Docusaurus"}),". (A few months after the website's inception, I joined the Docusaurus team.)"]}),`
`,e.jsx(t.p,{children:"The old website had a multitude of problems:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Vendor lock-in"})," was the biggest of them. Docusaurus is quite opinionated, and while the default options are great, I have no choice but to fight with Webpack, MDX, etc., etc., and the layers of abstraction means I often have to use hacks to implement what I want."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Design lock-in"}),". Again, the design had nothing bad in it, but because Docusaurus's classic theme already ships with a design language, everything I add has to agree with that—border shadows, border radii, font sizes, etc."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Hacks"}),". This was mostly my fault. I was young and naïve and didn't know much about React or Remark. I just Googled and used whatever that seemed to work. In the end the website contained lots of glitches."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Bundle size"}),". This is again my fault. I used way too many libraries, including moment, material UI, etc., because I didn't know how to implement things myself. Problems ensue, such as increased bundle size, no progressive enhancement (because material UI is client-side), and an overall increase in complexity."]}),`
`]}),`
`,e.jsxs(t.p,{children:["So, most importantly, it's so bad that ",e.jsx(t.strong,{children:"I don't want to update it"})," anymore. The front page's carousel is outdated, but I don't want to add new slides because it doesn't even work on mobile. The profile page could theoretically be updated, but just the sight of it makes me sad. Eventually, it's time for a new website."]}),`
`,e.jsx(t.h2,{children:"What comes?"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"New design"}),". Every element has been re-implemented from scratch and entrenched with my own design philosophy. Minimal round corners, minimal shadows, mostly flat and minimalistic design."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Vite"}),". The site is now built with Vite, which is a lot faster than Webpack."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"A new font"}),". ",e.jsx(t.a,{href:"https://software.sil.org/charis/",children:"Charis SIL"}),", developed by SIL Language Technology, is both beautiful and linguistics-friendly by default. It supports IPA and many scripts."]}),`
`]}),`
`,e.jsx(t.h2,{children:"What stays?"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"MDX"}),". The new website still supports MDX because I'm fluent writing plugins for it. This also means I can theoretically port over my old writings, although I hesitate to do so."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"React"}),". Still React 18 and react-router 6, but now I control everything—from routing to root providers to a layout that ",e.jsx(t.em,{children:"never unmounts"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"TypeScript"}),". The website is now ",e.jsx(t.em,{children:"100% TypeScript-covered"})," and by that I mean it. The development server, the config files—everything is TypeScript!"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"CSS modules"}),". I don't know much about CSS and I prefer something simple and closer to the metal. I have no desire for CSS-in-JS, Tailwind, or SCSS, etc."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Attention to accessibility"}),". The website remains accessible by default and I continue to apply new accessibility techniques I learn. Because I now control everything, I can also implement some good practices such as underlined links."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Progressive enhancement"}),". The website is still server-rendered. I also make sure most functionality is available without JavaScript."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"The old structure"}),". The ",e.jsx(t.a,{href:"/about",children:"about page"}),", ",e.jsx(t.a,{href:"/blog",children:"blog"}),", and ",e.jsx(t.a,{href:"/tools",children:"tools"}),` are still here, although I don't play to keep maintaining a "docs" section.`]}),`
`]}),`
`,e.jsx(t.h2,{children:"What goes?"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Everything else"}),"! From the poorly designed ",e.jsx(t.a,{href:"https://joshcena.com/old-website/todo/",children:"todo list"})," to the never-finished old ",e.jsx(t.a,{href:"https://joshcena.com/old-website/colorconvert/",children:"color converter"}),", to my old home page and profile—everything has been rebuilt."]}),`
`]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.p,{children:`I hesitated about creating a "blog" because I know very well that I won't write more than three posts here, but I have to write this particular one anyway, so, here we are. I hope you enjoy the new website!`})]})}function l(s={}){const{wrapper:t}={...i(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}export{l as default,a as frontMatter};
