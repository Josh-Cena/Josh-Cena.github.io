import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-BHnTV9cU.js";var n=e();function r(e){let r={code:`code`,h1:`h1`,pre:`pre`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Infinite calls`}),`
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
`})})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}i.meta={description:`A JavaScript snippet to make a function/class that can be applied infinitely.`,title:`Infinite calls`};export{i as default};