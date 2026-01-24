import type { RootContent } from "mdast";
import * as Acorn from "acorn";
import type { Program } from "estree";

export function createImportDeclaration(
  localName: string,
  sourceValue: string,
): RootContent {
  const code = `import ${localName} from "${sourceValue}";`;
  return {
    type: "mdxjsEsm",
    value: `import ${localName} from "${sourceValue}";`,
    data: {
      estree: Acorn.parse(code, {
        ecmaVersion: "latest",
        sourceType: "module",
      }) as unknown as Program,
    },
  };
}

export function createJSXElement(
  name: string,
  attributes: { name: string; value: string }[],
): RootContent {
  return {
    type: "mdxJsxFlowElement",
    name,
    attributes: attributes.map((attr) => ({
      type: "mdxJsxAttribute",
      name: attr.name,
      value: {
        type: "mdxJsxAttributeValueExpression",
        value: attr.value,
        data: {
          estree: Acorn.parse(attr.value, {
            ecmaVersion: "latest",
            sourceType: "module",
          }) as unknown as Program,
        },
      },
    })),
    children: [],
  };
}
