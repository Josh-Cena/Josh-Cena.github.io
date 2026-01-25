// @ts-check

import jcRules from "eslint-config-jc";
import tseslint from "typescript-eslint";

export default tseslint.config(
  ...jcRules({
    node: true,
    react: true,
    typescriptTypeCheck: true,
  }),
  {
    ignores: ["node_modules", "dist", "build"],
  },
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    rules: {
      "import/no-extraneous-dependencies": "off",
      "react/forbid-elements": [
        "error",
        { forbid: ["h2", "h3", "h4", "h5", "h6"] },
      ],
    },
  },
);
