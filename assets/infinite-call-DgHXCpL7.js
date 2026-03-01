import{u as s,j as n}from"./index-BbGgi_W7.js";import"./_commonjsHelpers-Cpj98o6Y.js";const i={description:"A JavaScript snippet to make a function/class that can be applied infinitely.",title:"Infinite calls"};function r(t){const e={code:"code",h1:"h1",pre:"pre",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Infinite calls"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function f() {
  return f;
}

f()()()()()()()()()()()();
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`class A {
  constructor() {
    return A;
  }
}

// prettier-ignore
new new new new new new new new new new new new new new new new A;
`})})]})}function a(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{a as default,i as frontMatter};
