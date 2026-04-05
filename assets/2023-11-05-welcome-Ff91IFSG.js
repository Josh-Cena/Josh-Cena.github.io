import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";import{t as n}from"./PostData-DZSdDpEq.js";var r=e();function i(e){let i={a:`a`,em:`em`,h1:`h1`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{children:`Welcome to my new website!`}),(0,r.jsx)(n,{frontMatter:e,date:`2023-11-05`}),`
`,(0,r.jsx)(i.p,{children:`Welcome!`}),`
`,(0,r.jsxs)(i.p,{children:[`You may have seen my old website, which is now archived at `,(0,r.jsx)(i.a,{href:`https://joshcena.com/old-website/`,children:`https://joshcena.com/old-website/`}),`. That website was developed when I was a high school junior, not knowing what I was doing. I just used the static site generator I was most familiar with, `,(0,r.jsx)(i.a,{href:`https://docusaurus.io/`,children:`Docusaurus`}),`. (A few months after the website's inception, I joined the Docusaurus team.)`]}),`
`,(0,r.jsx)(i.p,{children:`The old website had a multitude of problems:`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`Vendor lock-in`}),` was the biggest of them. Docusaurus is quite opinionated, and while the default options are great, I have no choice but to fight with Webpack, MDX, etc., etc., and the layers of abstraction means I often have to use hacks to implement what I want.`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`Design lock-in`}),`. Again, the design had nothing bad in it, but because Docusaurus's classic theme already ships with a design language, everything I add has to agree with that—border shadows, border radii, font sizes, etc.`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`Hacks`}),`. This was mostly my fault. I was young and naïve and didn't know much about React or Remark. I just Googled and used whatever that seemed to work. In the end the website contained lots of glitches.`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`Bundle size`}),`. This is again my fault. I used way too many libraries, including moment, material UI, etc., because I didn't know how to implement things myself. Problems ensue, such as increased bundle size, no progressive enhancement (because material UI is client-side), and an overall increase in complexity.`]}),`
`]}),`
`,(0,r.jsxs)(i.p,{children:[`So, most importantly, it's so bad that `,(0,r.jsx)(i.strong,{children:`I don't want to update it`}),` anymore. The front page's carousel is outdated, but I don't want to add new slides because it doesn't even work on mobile. The profile page could theoretically be updated, but just the sight of it makes me sad. Eventually, it's time for a new website.`]}),`
`,(0,r.jsx)(i.h2,{children:`What comes?`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`New design`}),`. Every element has been re-implemented from scratch and entrenched with my own design philosophy. Minimal round corners, minimal shadows, mostly flat and minimalistic design.`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`Vite`}),`. The site is now built with Vite, which is a lot faster than Webpack.`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`A new font`}),`. `,(0,r.jsx)(i.a,{href:`https://software.sil.org/charis/`,children:`Charis SIL`}),`, developed by SIL Language Technology, is both beautiful and linguistics-friendly by default. It supports IPA and many scripts.`]}),`
`]}),`
`,(0,r.jsx)(i.h2,{children:`What stays?`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`MDX`}),`. The new website still supports MDX because I'm fluent writing plugins for it. This also means I can theoretically port over my old writings, although I hesitate to do so.`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`React`}),`. Still React 18 and react-router 6, but now I control everything—from routing to root providers to a layout that `,(0,r.jsx)(i.em,{children:`never unmounts`}),`.`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`TypeScript`}),`. The website is now `,(0,r.jsx)(i.em,{children:`100% TypeScript-covered`}),` and by that I mean it. The development server, the config files—everything is TypeScript!`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`CSS modules`}),`. I don't know much about CSS and I prefer something simple and closer to the metal. I have no desire for CSS-in-JS, Tailwind, or SCSS, etc.`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`Attention to accessibility`}),`. The website remains accessible by default and I continue to apply new accessibility techniques I learn. Because I now control everything, I can also implement some good practices such as underlined links.`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`Progressive enhancement`}),`. The website is still server-rendered. I also make sure most functionality is available without JavaScript.`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`The old structure`}),`. The `,(0,r.jsx)(i.a,{href:`/about`,children:`about page`}),`, `,(0,r.jsx)(i.a,{href:`/blog`,children:`blog`}),`, and `,(0,r.jsx)(i.a,{href:`/tools`,children:`tools`}),` are still here, although I don't play to keep maintaining a "docs" section.`]}),`
`]}),`
`,(0,r.jsx)(i.h2,{children:`What goes?`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`Everything else`}),`! From the poorly designed `,(0,r.jsx)(i.a,{href:`https://joshcena.com/old-website/todo/`,children:`todo list`}),` to the never-finished old `,(0,r.jsx)(i.a,{href:`https://joshcena.com/old-website/colorconvert/`,children:`color converter`}),`, to my old home page and profile—everything has been rebuilt.`]}),`
`]}),`
`,(0,r.jsx)(i.hr,{}),`
`,(0,r.jsx)(i.p,{children:`I hesitated about creating a "blog" because I know very well that I won't write more than three posts here, but I have to write this particular one anyway, so, here we are. I hope you enjoy the new website!`})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}a.meta={description:`An overview of what comes, what stays, and what goes.`,title:`Welcome to my new website!`};export{a as default};