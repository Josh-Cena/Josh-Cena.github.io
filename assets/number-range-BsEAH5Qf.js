import{t as e}from"./jsx-runtime-BnxRlLMJ.js";import{n as t}from"./lib-BHnTV9cU.js";var n=e();function r(e){let r={code:`code`,h1:`h1`,p:`p`,pre:`pre`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Number range syntax`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-js`,children:`class RangeIterator extends Iterator {
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
`,(0,n.jsx)(r.p,{children:`Usage:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-js`,children:`console.log([...(10)[-3]]);
console.log([...1n[5n]]);
`})})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}i.meta={description:`A JavaScript snippet to use index access for number ranges.`,title:`Number range syntax`};export{i as default};