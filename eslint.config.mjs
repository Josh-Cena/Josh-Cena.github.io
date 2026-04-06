// @ts-check

import jcRules from "eslint-config-jc";
import { defineConfig } from "eslint/config";

export default defineConfig(
  ...jcRules({ node: true, react: true, typescriptTypeCheck: true }),
  { ignores: ["node_modules", "dist", "build"] },
  {
    languageOptions: { parserOptions: { project: true } },
    rules: {
      "import-x/no-extraneous-dependencies": "off",
      "react/forbid-elements": [
        "error",
        { forbid: ["h2", "h3", "h4", "h5", "h6"] },
      ],
    },
  },
);
