import{u as o,j as n}from"./index-DsugHUjk.js";import"./_commonjsHelpers-Cpj98o6Y.js";const a={description:"A JavaScript snippet to make a function that can only be called once, without using any mutable variables.",title:"Functions that can only be called once — for immutable lovers"};function c(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Functions that can only be called once — for immutable lovers"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function createOnceFunction(f) {
  return new (class extends class {} {
    constructor() {
      return (...args) => {
        super();
        return f(...args);
      };
    }
  })();
}
`})}),`
`,n.jsx(e.p,{children:"Usage:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const f = createOnceFunction(() => console.log("Hello"));
f(); // Hello
f();
`})})]})}function l(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(c,{...t})}):c(t)}export{l as default,a as frontMatter};
