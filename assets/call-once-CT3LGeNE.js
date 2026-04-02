import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-8Y9jQ4sF.js";var n=e(),r={description:`A JavaScript snippet to make a function that can only be called once, without using any mutable variables.`,title:`Functions that can only be called once — for immutable lovers`};function i(e){let r={code:`code`,h1:`h1`,p:`p`,pre:`pre`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Functions that can only be called once — for immutable lovers`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-js`,children:`function createOnceFunction(f) {
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
`,(0,n.jsx)(r.p,{children:`Usage:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-js`,children:`const f = createOnceFunction(() => console.log("Hello"));
f(); // Hello
f();
`})})]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as frontMatter};