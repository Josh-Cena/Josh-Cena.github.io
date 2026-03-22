import{t as e}from"./jsx-runtime-D57Vegw5.js";import{n as t}from"./lib-rxHYdfSX.js";var n=e(),r={description:`A JavaScript snippet to make a function/class that can be applied infinitely.`,title:`Infinite calls`};function i(e){let r={code:`code`,h1:`h1`,pre:`pre`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Infinite calls`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-js`,children:`function f() {
  return f;
}

f()()()()()()()()()()()();
`})}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-js`,children:`class A {
  constructor() {
    return A;
  }
}

// prettier-ignore
new new new new new new new new new new new new new new new new A;
`})})]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as frontMatter};