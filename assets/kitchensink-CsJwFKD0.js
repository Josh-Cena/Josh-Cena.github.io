import{u as a,j as s,C as i}from"./index-DbwhWtYf.js";const t=`---
description: A collection of all Markdown syntaxes — for testing
---

# Kitchensink

import text from "./kitchensink.mdx?raw";
import CodeBlock from "@/components/CodeBlock";

<details>
  <summary>Markdown source</summary>
  <CodeBlock language="md">{text}</CodeBlock>
</details>

## Basic Markdown

### H3

#### H4

##### H5

###### H6

- _Italic_
- **Bold**
- **_Bold and italic_**
- ~~Strikethrough~~
- \`Inline code\`
- [Link](https://www.example.com)
- [Link with title](https://www.example.com "Example")

A normal paragraph:

> Blockquote
>
> > Nested blockquote
>
> Yes

Another normal paragraph:

1. \`ol\`
   - \`ol > ul\`
     - \`ol > ul > ul\`
     - ...
   - ...
2. ...
   1. \`ol > ol\`
   2. ...

- [x] Task list
- [ ] Task
- [ ] Task
  - [ ] Nested
  - [ ] Nested

![Local image](assets/yale-logo.png)

This is a rule:

---

Footnote[^1]

Named footnote[^named]

[^named]: This is a named footnote.
[^1]: This is a footnote.

## Math

Inline: $x^2 + y^2 = z^2$

Block:

$$
\\begin{aligned}
  x^2 + y^2 &= z^2 \\\\
  x^2 &= z^2 - y^2 \\\\
  x &= \\sqrt{z^2 - y^2}
\\end{aligned}
$$

## Code snippets

\`\`\`plain
  ___________________________
< I'm an expert in my field. >
  ---------------------------
         \\   ^__^
          \\  (oo)\\_______
             (__)\\       )\\/\\
                 ||----w |
                 ||     ||
\`\`\`

\`\`\`html
<pre></pre>
\`\`\`

\`\`\`js
const f = () => {
  return Math.random();
};
\`\`\`

\`\`\`css
:root {
  --first-color: #488cff;
  --second-color: #ffff8c;
}

#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}
\`\`\`

\`\`\`rust
#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
\`\`\`

\`\`\`python
from wordcloud import WordCloud
import pandas as pd
import numpy as np

color1 = np.array([69, 61, 59])
color2 = np.array([38, 90, 77])

name = 'song'
df = pd.read_csv(f'{name}_count.csv', names=['name', 'count'])
freq = dict(zip(df['name'], df['count']))

def color_func(word, font_size, position, orientation, random_state=None, **kwargs):
    randcolor = color1 + np.floor((color2 - color1) * np.random.random())
    return("rgb(%d, %d, %d)" % tuple(randcolor))
\`\`\`

## Tables

### Markdown table

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \\$1600 |
| col 2 is      |   centered    |   \\$12 |
| zebra stripes |   are neat    |    \\$1 |

## HTML

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>_Works_! **HTML** <em>works</em> too.</dd>
</dl>
`,c={description:"A collection of all Markdown syntaxes — for testing",title:"Kitchensink"};function l(n){const e={a:"a",annotation:"annotation",blockquote:"blockquote",code:"code",del:"del",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",hr:"hr",img:"img",input:"input",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msqrt:"msqrt",mstyle:"mstyle",msup:"msup",mtable:"mtable",mtd:"mtd",mtr:"mtr",ol:"ol",p:"p",path:"path",pre:"pre",section:"section",semantics:"semantics",span:"span",strong:"strong",sup:"sup",svg:"svg",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.h1,{children:"Kitchensink"}),`
`,`
`,s.jsxs("details",{children:[s.jsx("summary",{children:"Markdown source"}),s.jsx(i,{language:"md",children:t})]}),`
`,s.jsx(e.h2,{children:"Basic Markdown"}),`
`,s.jsx(e.h3,{children:"H3"}),`
`,s.jsx(e.h4,{children:"H4"}),`
`,s.jsx(e.h5,{children:"H5"}),`
`,s.jsx(e.h6,{children:"H6"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:s.jsx(e.em,{children:"Italic"})}),`
`,s.jsx(e.li,{children:s.jsx(e.strong,{children:"Bold"})}),`
`,s.jsx(e.li,{children:s.jsx(e.strong,{children:s.jsx(e.em,{children:"Bold and italic"})})}),`
`,s.jsx(e.li,{children:s.jsx(e.del,{children:"Strikethrough"})}),`
`,s.jsx(e.li,{children:s.jsx(e.code,{children:"Inline code"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"https://www.example.com",children:"Link"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"https://www.example.com",title:"Example",children:"Link with title"})}),`
`]}),`
`,s.jsx(e.p,{children:"A normal paragraph:"}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.p,{children:"Blockquote"}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.p,{children:"Nested blockquote"}),`
`]}),`
`,s.jsx(e.p,{children:"Yes"}),`
`]}),`
`,s.jsx(e.p,{children:"Another normal paragraph:"}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"ol"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"ol > ul"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:s.jsx(e.code,{children:"ol > ul > ul"})}),`
`,s.jsx(e.li,{children:"..."}),`
`]}),`
`]}),`
`,s.jsx(e.li,{children:"..."}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:["...",`
`,s.jsxs(e.ol,{children:[`
`,s.jsx(e.li,{children:s.jsx(e.code,{children:"ol > ol"})}),`
`,s.jsx(e.li,{children:"..."}),`
`]}),`
`]}),`
`]}),`
`,s.jsxs(e.ul,{className:"contains-task-list",children:[`
`,s.jsxs(e.li,{className:"task-list-item",children:[s.jsx(e.input,{type:"checkbox",checked:!0,disabled:!0})," ","Task list"]}),`
`,s.jsxs(e.li,{className:"task-list-item",children:[s.jsx(e.input,{type:"checkbox",disabled:!0})," ","Task"]}),`
`,s.jsxs(e.li,{className:"task-list-item",children:[s.jsx(e.input,{type:"checkbox",disabled:!0})," ","Task",`
`,s.jsxs(e.ul,{className:"contains-task-list",children:[`
`,s.jsxs(e.li,{className:"task-list-item",children:[s.jsx(e.input,{type:"checkbox",disabled:!0})," ","Nested"]}),`
`,s.jsxs(e.li,{className:"task-list-item",children:[s.jsx(e.input,{type:"checkbox",disabled:!0})," ","Nested"]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.p,{children:s.jsx(e.img,{src:"assets/yale-logo.png",alt:"Local image"})}),`
`,s.jsx(e.p,{children:"This is a rule:"}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.p,{children:["Footnote",s.jsx(e.sup,{children:s.jsx(e.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),`
`,s.jsxs(e.p,{children:["Named footnote",s.jsx(e.sup,{children:s.jsx(e.a,{href:"#user-content-fn-named",id:"user-content-fnref-named","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})]}),`
`,s.jsx(e.h2,{children:"Math"}),`
`,s.jsxs(e.p,{children:["Inline: ",s.jsxs(e.span,{className:"katex",children:[s.jsx(e.span,{className:"katex-mathml",children:s.jsx(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s.jsxs(e.semantics,{children:[s.jsxs(e.mrow,{children:[s.jsxs(e.msup,{children:[s.jsx(e.mi,{children:"x"}),s.jsx(e.mn,{children:"2"})]}),s.jsx(e.mo,{children:"+"}),s.jsxs(e.msup,{children:[s.jsx(e.mi,{children:"y"}),s.jsx(e.mn,{children:"2"})]}),s.jsx(e.mo,{children:"="}),s.jsxs(e.msup,{children:[s.jsx(e.mi,{children:"z"}),s.jsx(e.mn,{children:"2"})]})]}),s.jsx(e.annotation,{encoding:"application/x-tex",children:"x^2 + y^2 = z^2"})]})})}),s.jsxs(e.span,{className:"katex-html","aria-hidden":"true",children:[s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord mathnormal",children:"x"}),s.jsx(e.span,{className:"msupsub",children:s.jsx(e.span,{className:"vlist-t",children:s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.8141em"},children:s.jsxs(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"2.7em"}}),s.jsx(e.span,{className:"sizing reset-size6 size3 mtight",children:s.jsx(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),s.jsx(e.span,{className:"mbin",children:"+"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"1.0085em",verticalAlign:"-0.1944em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),s.jsx(e.span,{className:"msupsub",children:s.jsx(e.span,{className:"vlist-t",children:s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.8141em"},children:s.jsxs(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"2.7em"}}),s.jsx(e.span,{className:"sizing reset-size6 size3 mtight",children:s.jsx(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),s.jsx(e.span,{className:"mrel",children:"="}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"0.8141em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),s.jsx(e.span,{className:"msupsub",children:s.jsx(e.span,{className:"vlist-t",children:s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.8141em"},children:s.jsxs(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"2.7em"}}),s.jsx(e.span,{className:"sizing reset-size6 size3 mtight",children:s.jsx(e.span,{className:"mord mtight",children:"2"})})]})})})})})]})]})]})]})]}),`
`,s.jsx(e.p,{children:"Block:"}),`
`,s.jsx(e.span,{className:"katex-display",children:s.jsxs(e.span,{className:"katex",children:[s.jsx(e.span,{className:"katex-mathml",children:s.jsx(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:s.jsxs(e.semantics,{children:[s.jsxs(e.mtable,{rowspacing:"0.25em",columnalign:"right left",columnspacing:"0em",children:[s.jsxs(e.mtr,{children:[s.jsx(e.mtd,{children:s.jsx(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:s.jsxs(e.mrow,{children:[s.jsxs(e.msup,{children:[s.jsx(e.mi,{children:"x"}),s.jsx(e.mn,{children:"2"})]}),s.jsx(e.mo,{children:"+"}),s.jsxs(e.msup,{children:[s.jsx(e.mi,{children:"y"}),s.jsx(e.mn,{children:"2"})]})]})})}),s.jsx(e.mtd,{children:s.jsx(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:s.jsxs(e.mrow,{children:[s.jsx(e.mrow,{}),s.jsx(e.mo,{children:"="}),s.jsxs(e.msup,{children:[s.jsx(e.mi,{children:"z"}),s.jsx(e.mn,{children:"2"})]})]})})})]}),s.jsxs(e.mtr,{children:[s.jsx(e.mtd,{children:s.jsx(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:s.jsxs(e.msup,{children:[s.jsx(e.mi,{children:"x"}),s.jsx(e.mn,{children:"2"})]})})}),s.jsx(e.mtd,{children:s.jsx(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:s.jsxs(e.mrow,{children:[s.jsx(e.mrow,{}),s.jsx(e.mo,{children:"="}),s.jsxs(e.msup,{children:[s.jsx(e.mi,{children:"z"}),s.jsx(e.mn,{children:"2"})]}),s.jsx(e.mo,{children:"−"}),s.jsxs(e.msup,{children:[s.jsx(e.mi,{children:"y"}),s.jsx(e.mn,{children:"2"})]})]})})})]}),s.jsxs(e.mtr,{children:[s.jsx(e.mtd,{children:s.jsx(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:s.jsx(e.mi,{children:"x"})})}),s.jsx(e.mtd,{children:s.jsx(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:s.jsxs(e.mrow,{children:[s.jsx(e.mrow,{}),s.jsx(e.mo,{children:"="}),s.jsx(e.msqrt,{children:s.jsxs(e.mrow,{children:[s.jsxs(e.msup,{children:[s.jsx(e.mi,{children:"z"}),s.jsx(e.mn,{children:"2"})]}),s.jsx(e.mo,{children:"−"}),s.jsxs(e.msup,{children:[s.jsx(e.mi,{children:"y"}),s.jsx(e.mn,{children:"2"})]})]})})]})})})]})]}),s.jsx(e.annotation,{encoding:"application/x-tex",children:`\\begin{aligned}
  x^2 + y^2 &= z^2 \\\\
  x^2 &= z^2 - y^2 \\\\
  x &= \\sqrt{z^2 - y^2}
\\end{aligned}`})]})})}),s.jsx(e.span,{className:"katex-html","aria-hidden":"true",children:s.jsxs(e.span,{className:"base",children:[s.jsx(e.span,{className:"strut",style:{height:"4.7149em",verticalAlign:"-2.1075em"}}),s.jsx(e.span,{className:"mord",children:s.jsxs(e.span,{className:"mtable",children:[s.jsx(e.span,{className:"col-align-r",children:s.jsxs(e.span,{className:"vlist-t vlist-t2",children:[s.jsxs(e.span,{className:"vlist-r",children:[s.jsxs(e.span,{className:"vlist",style:{height:"2.6075em"},children:[s.jsxs(e.span,{style:{top:"-4.7501em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"3.0067em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord mathnormal",children:"x"}),s.jsx(e.span,{className:"msupsub",children:s.jsx(e.span,{className:"vlist-t",children:s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.8641em"},children:s.jsxs(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"2.7em"}}),s.jsx(e.span,{className:"sizing reset-size6 size3 mtight",children:s.jsx(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),s.jsx(e.span,{className:"mbin",children:"+"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),s.jsx(e.span,{className:"msupsub",children:s.jsx(e.span,{className:"vlist-t",children:s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.8641em"},children:s.jsxs(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"2.7em"}}),s.jsx(e.span,{className:"sizing reset-size6 size3 mtight",children:s.jsx(e.span,{className:"mord mtight",children:"2"})})]})})})})})]})]})]}),s.jsxs(e.span,{style:{top:"-3.226em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"3.0067em"}}),s.jsx(e.span,{className:"mord",children:s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord mathnormal",children:"x"}),s.jsx(e.span,{className:"msupsub",children:s.jsx(e.span,{className:"vlist-t",children:s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.8641em"},children:s.jsxs(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"2.7em"}}),s.jsx(e.span,{className:"sizing reset-size6 size3 mtight",children:s.jsx(e.span,{className:"mord mtight",children:"2"})})]})})})})})]})})]}),s.jsxs(e.span,{style:{top:"-1.5592em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"3.0067em"}}),s.jsx(e.span,{className:"mord",children:s.jsx(e.span,{className:"mord mathnormal",children:"x"})})]})]}),s.jsx(e.span,{className:"vlist-s",children:"​"})]}),s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"2.1075em"},children:s.jsx(e.span,{})})})]})}),s.jsx(e.span,{className:"col-align-l",children:s.jsxs(e.span,{className:"vlist-t vlist-t2",children:[s.jsxs(e.span,{className:"vlist-r",children:[s.jsxs(e.span,{className:"vlist",style:{height:"2.6075em"},children:[s.jsxs(e.span,{style:{top:"-4.7501em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"3.0067em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),s.jsx(e.span,{className:"mrel",children:"="}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),s.jsx(e.span,{className:"msupsub",children:s.jsx(e.span,{className:"vlist-t",children:s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.8641em"},children:s.jsxs(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"2.7em"}}),s.jsx(e.span,{className:"sizing reset-size6 size3 mtight",children:s.jsx(e.span,{className:"mord mtight",children:"2"})})]})})})})})]})]})]}),s.jsxs(e.span,{style:{top:"-3.226em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"3.0067em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),s.jsx(e.span,{className:"mrel",children:"="}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),s.jsx(e.span,{className:"msupsub",children:s.jsx(e.span,{className:"vlist-t",children:s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.8641em"},children:s.jsxs(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"2.7em"}}),s.jsx(e.span,{className:"sizing reset-size6 size3 mtight",children:s.jsx(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),s.jsx(e.span,{className:"mbin",children:"−"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),s.jsx(e.span,{className:"msupsub",children:s.jsx(e.span,{className:"vlist-t",children:s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.8641em"},children:s.jsxs(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"2.7em"}}),s.jsx(e.span,{className:"sizing reset-size6 size3 mtight",children:s.jsx(e.span,{className:"mord mtight",children:"2"})})]})})})})})]})]})]}),s.jsxs(e.span,{style:{top:"-1.5592em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"3.0067em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),s.jsx(e.span,{className:"mrel",children:"="}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),s.jsx(e.span,{className:"mord sqrt",children:s.jsxs(e.span,{className:"vlist-t vlist-t2",children:[s.jsxs(e.span,{className:"vlist-r",children:[s.jsxs(e.span,{className:"vlist",style:{height:"1.0067em"},children:[s.jsxs(e.span,{className:"svg-align",style:{top:"-3.2em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"3.2em"}}),s.jsxs(e.span,{className:"mord",style:{paddingLeft:"1em"},children:[s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),s.jsx(e.span,{className:"msupsub",children:s.jsx(e.span,{className:"vlist-t",children:s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.7401em"},children:s.jsxs(e.span,{style:{top:"-2.989em",marginRight:"0.05em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"2.7em"}}),s.jsx(e.span,{className:"sizing reset-size6 size3 mtight",children:s.jsx(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),s.jsx(e.span,{className:"mbin",children:"−"}),s.jsx(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),s.jsxs(e.span,{className:"mord",children:[s.jsx(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),s.jsx(e.span,{className:"msupsub",children:s.jsx(e.span,{className:"vlist-t",children:s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.7401em"},children:s.jsxs(e.span,{style:{top:"-2.989em",marginRight:"0.05em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"2.7em"}}),s.jsx(e.span,{className:"sizing reset-size6 size3 mtight",children:s.jsx(e.span,{className:"mord mtight",children:"2"})})]})})})})})]})]})]}),s.jsxs(e.span,{style:{top:"-2.9667em"},children:[s.jsx(e.span,{className:"pstrut",style:{height:"3.2em"}}),s.jsx(e.span,{className:"hide-tail",style:{minWidth:"1.02em",height:"1.28em"},children:s.jsx(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.28em",viewBox:"0 0 400000 1296",preserveAspectRatio:"xMinYMin slice",children:s.jsx(e.path,{d:`M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z`})})})]})]}),s.jsx(e.span,{className:"vlist-s",children:"​"})]}),s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"0.2333em"},children:s.jsx(e.span,{})})})]})})]})]})]}),s.jsx(e.span,{className:"vlist-s",children:"​"})]}),s.jsx(e.span,{className:"vlist-r",children:s.jsx(e.span,{className:"vlist",style:{height:"2.1075em"},children:s.jsx(e.span,{})})})]})})]})})]})})]})}),`
`,s.jsx(e.h2,{children:"Code snippets"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-plain",children:`  ___________________________
< I'm an expert in my field. >
  ---------------------------
         \\   ^__^
          \\  (oo)\\_______
             (__)\\       )\\/\\
                 ||----w |
                 ||     ||
`})}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-html",children:`<pre></pre>
`})}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-js",children:`const f = () => {
  return Math.random();
};
`})}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-css",children:`:root {
  --first-color: #488cff;
  --second-color: #ffff8c;
}

#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}
`})}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-rust",children:`#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
`})}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-python",children:`from wordcloud import WordCloud
import pandas as pd
import numpy as np

color1 = np.array([69, 61, 59])
color2 = np.array([38, 90, 77])

name = 'song'
df = pd.read_csv(f'{name}_count.csv', names=['name', 'count'])
freq = dict(zip(df['name'], df['count']))

def color_func(word, font_size, position, orientation, random_state=None, **kwargs):
    randcolor = color1 + np.floor((color2 - color1) * np.random.random())
    return("rgb(%d, %d, %d)" % tuple(randcolor))
`})}),`
`,s.jsx(e.h2,{children:"Tables"}),`
`,s.jsx(e.h3,{children:"Markdown table"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Tables"}),s.jsx(e.th,{style:{textAlign:"center"},children:"Are"}),s.jsx(e.th,{style:{textAlign:"right"},children:"Cool"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"col 3 is"}),s.jsx(e.td,{style:{textAlign:"center"},children:"right-aligned"}),s.jsx(e.td,{style:{textAlign:"right"},children:"$1600"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"col 2 is"}),s.jsx(e.td,{style:{textAlign:"center"},children:"centered"}),s.jsx(e.td,{style:{textAlign:"right"},children:"$12"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"zebra stripes"}),s.jsx(e.td,{style:{textAlign:"center"},children:"are neat"}),s.jsx(e.td,{style:{textAlign:"right"},children:"$1"})]})]})]}),`
`,s.jsx(e.h2,{children:"HTML"}),`
`,s.jsxs("dl",{children:[s.jsx("dt",{children:"Definition list"}),s.jsx("dd",{children:"Is something people use sometimes."}),s.jsx("dt",{children:"Markdown in HTML"}),s.jsxs("dd",{children:[s.jsx(e.em,{children:"Works"}),"! ",s.jsx(e.strong,{children:"HTML"})," ",s.jsx("em",{children:"works"})," too."]})]}),`
`,s.jsxs(e.section,{"data-footnotes":!0,className:"footnotes",children:[s.jsx(e.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{id:"user-content-fn-1",children:[`
`,s.jsxs(e.p,{children:["This is a footnote. ",s.jsx(e.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,s.jsxs(e.li,{id:"user-content-fn-named",children:[`
`,s.jsxs(e.p,{children:["This is a named footnote. ",s.jsx(e.a,{href:"#user-content-fnref-named","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`]}),`
`]})]})}function m(n={}){const{wrapper:e}={...a(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(l,{...n})}):l(n)}export{m as default,c as frontMatter};
