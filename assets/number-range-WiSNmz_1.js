import{u as s,j as n}from"./index-DH0P7Lag.js";import"./_commonjsHelpers-Cpj98o6Y.js";const a={description:"A JavaScript snippet to use index access for number ranges.",title:"Number range syntax"};function r(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Number range syntax"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`class RangeIterator extends Iterator {
  #cur;
  #end;
  #dir;
  static {
    Object.defineProperties(RangeIterator.prototype, {
      [Symbol.toStringTag]: {
        value: "Range Iterator",
        writable: false,
        enumerable: false,
        configurable: true,
      },
    });
  }
  constructor(start, end) {
    super();
    this.#cur = typeof start === "bigint" ? start : Number(start);
    this.#end = typeof end === "bigint" ? end : Number(end);
    this.#dir =
      typeof start === "bigint"
        ? start > end
          ? -1n
          : 1n
        : start > end
          ? -1
          : 1;
  }
  next() {
    if (
      (this.#dir > 0 && this.#cur >= this.#end) ||
      (this.#dir < 0 && this.#cur <= this.#end)
    ) {
      return { done: true, value: undefined };
    }
    const value = this.#cur;
    this.#cur += this.#dir;
    return { done: false, value };
  }
}

Object.setPrototypeOf(
  Number.prototype,
  new Proxy(Object.prototype, {
    get(t, p, r) {
      if (typeof p === "string") {
        const np = Number(p);
        if (!Number.isNaN(np)) {
          const n = Number(r);
          if (Number.isFinite(n)) {
            return new RangeIterator(n, np);
          }
        }
      }
      return Reflect.get(t, p, r);
    },
  }),
);
Object.setPrototypeOf(
  BigInt.prototype,
  new Proxy(Object.prototype, {
    get(t, p, r) {
      if (typeof p === "string") {
        try {
          const np = BigInt(p);
          const n = BigInt(r);
          return new RangeIterator(n, np);
        } catch {}
      }
      return Reflect.get(t, p, r);
    },
  }),
);
`})}),`
`,n.jsx(e.p,{children:"Usage:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`console.log([...(10)[-3]]);
console.log([...1n[5n]]);
`})})]})}function c(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{c as default,a as frontMatter};
