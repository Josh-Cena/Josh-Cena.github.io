import{u as t,j as n}from"./index-JVg7E-KF.js";const l={description:"A JavaScript snippet to implement overloaded functions using type predicates.",title:"Overloaded functions"};function r(o){const e={code:"code",h1:"h1",p:"p",pre:"pre",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Overloaded functions"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`declare class OverloadedFunction extends Function {
  constructor(overloads: Iterable<OverloadSignature>);
  [Symbol.iterator](): IterableIterator<Function>;
  [Symbol.toStringTag]: "OverloadedFunction";
  overloads(): IterableIterator<Function>;
  toString(): string;
}

type Func = (...args: never) => unknown;
type Type =
  | "string"
  | "number"
  | "bigint"
  | "boolean"
  | "symbol"
  | "undefined"
  | "object"
  | "function";

type OverloadSignature =
  | Func
  | [func: Func, numArgs: number]
  | [func: Func, minArgs: number, maxArgs: number]
  | [func: Func, argTypes: Type[]]
  | [func: Func, tester: (args: unknown[]) => boolean];

type OverloadType =
  | { type: "numArgs"; func: Func; numArgs: number }
  | { type: "minMaxArgs"; func: Func; minArgs: number; maxArgs: number }
  | { type: "argTypes"; func: Func; argTypes: Type[] }
  | { type: "tester"; func: Func; tester: (args: unknown[]) => boolean };

const overloadRegistry = new WeakMap<OverloadedFunction, OverloadType[]>();

function OverloadedFunction(overloads: Iterable<OverloadSignature>) {
  const f = function () {
    const overloads = overloadRegistry.get(f)!;
    const overload = overloads.find((overload) => {
      switch (overload.type) {
        case "tester":
          return overload.tester([...arguments]);
        case "numArgs":
          return overload.numArgs === arguments.length;
        case "minMaxArgs":
          return (
            overload.minArgs <= arguments.length &&
            overload.maxArgs >= arguments.length
          );
        case "argTypes":
          return (
            overload.argTypes.length === arguments.length &&
            overload.argTypes.every((type, i) => typeof arguments[i] === type)
          );
      }
    });
    if (!overload)
      throw new TypeError(
        \`No overload found for arguments \${Array.from(
          arguments,
        )} among overloads \${JSON.stringify(overloads)}\`,
      );
    if (new.target === undefined)
      return Reflect.apply(overload.func, this, arguments);
    return Reflect.construct(overload.func, arguments, new.target);
  } as unknown as OverloadedFunction;
  Object.setPrototypeOf(f, OverloadedFunction.prototype);
  const o: OverloadType[] = [];
  for (const overload of overloads) {
    if (typeof overload === "function") {
      o.push({ type: "numArgs", func: overload, numArgs: overload.length });
    } else {
      const func = overload[0];
      if (typeof func !== "function") {
        throw new TypeError("Overload must be a function");
      }
      if ("2" in overload) {
        o.push({
          type: "minMaxArgs",
          func,
          minArgs: +overload[1],
          maxArgs: +overload[2]!,
        });
      } else {
        const argTypes = overload[1];
        if (typeof argTypes === "function") {
          o.push({ type: "tester", func, tester: argTypes });
        } else if (Array.isArray(argTypes)) {
          o.push({ type: "argTypes", func, argTypes });
        } else {
          o.push({ type: "numArgs", func, numArgs: +argTypes });
        }
      }
    }
  }
  overloadRegistry.set(f, o);
  return f;
}

function* createOverloadIterator(f: OverloadedFunction) {
  if (!overloadRegistry.has(f)) {
    throw new TypeError(
      "Method OverloadedFunction.prototype.overloads called on incompatible receiver",
    );
  }
  const o = overloadRegistry.get(f)!;
  for (let i = 0; i < o.length; i++) {
    yield o[i].func;
  }
}

function overloads() {
  const iterator = createOverloadIterator(this);
  return iterator;
}

Object.setPrototypeOf(
  Object.getPrototypeOf(createOverloadIterator.prototype),
  Object.getPrototypeOf(Object.getPrototypeOf([].keys())),
);
Object.defineProperties(createOverloadIterator.prototype, {
  [Symbol.toStringTag]: {
    value: "Overload Iterator",
    writable: false,
    enumerable: false,
    configurable: true,
  },
});
Object.defineProperties(createOverloadIterator, {
  name: { value: "OverloadIterator" },
});

Object.setPrototypeOf(OverloadedFunction, Function);
Object.setPrototypeOf(OverloadedFunction.prototype, Function.prototype);
Object.defineProperties(OverloadedFunction.prototype, {
  [Symbol.toStringTag]: {
    value: "OverloadedFunction",
    writable: false,
    enumerable: false,
    configurable: true,
  },
  [Symbol.iterator]: {
    value: overloads,
    writable: true,
    enumerable: false,
    configurable: true,
  },
  toString: {
    value: function () {
      return overloadRegistry
        .get(this)!
        .map((o) => o.func.toString())
        .join("\\n");
    },
    writable: true,
    enumerable: false,
    configurable: true,
  },
  overloads: {
    value: overloads,
    writable: true,
    enumerable: false,
    configurable: true,
  },
});
`})}),`
`,n.jsx(e.p,{children:"Usage:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const f = new OverloadedFunction([
  (a) => a + 100,
  (a, b) => a * b,
  (a, b, c) => a + b + c,
]);

console.log([...f].map((f) => f.toString()));
console.log(f.toString());
console.log(f(1));
console.log(f(2, 3));
console.log(f(4, 5, 6));
console.log(f.bind(null, 2)());
console.log(f.bind(null, 2)(6, 7));

const c = new OverloadedFunction([
  function (a) {
    return { a };
  },
  function (a, b) {
    return { a, b };
  },
  function (a, b, c) {
    return { a, b, c };
  },
]);

console.log(new c(1));
console.log(new c(1, 2, 3));

const g = new OverloadedFunction([
  [(a) => a + 100, ["number"]],
  [(a) => "Hello" + a, ["string"]],
  [(a) => !a, ["boolean"]],
]);

console.log(g(1));
console.log(g(" world"));
console.log(g(true));

const h = new OverloadedFunction([
  [(a) => a + 100, (args) => typeof args[0] !== "bigint"],
  [(a) => a + 100n, (args) => typeof args[0] === "bigint"],
]);

console.log(h(1));
console.log(h(1n));
`})})]})}function s(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{s as default,l as frontMatter};
