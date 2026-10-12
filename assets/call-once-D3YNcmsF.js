import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-BHnTV9cU.js";var n=e();function r(e){let r={code:`code`,h1:`h1`,p:`p`,pre:`pre`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Functions that can only be called once — for immutable lovers`}),`
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
`})})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}i.meta={description:`A JavaScript snippet to make a function that can only be called once, without using any mutable variables.`,title:`Functions that can only be called once — for immutable lovers`};export{i as default};