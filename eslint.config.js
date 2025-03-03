import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  {
    ignores: ["node_modules/", "dist/", "build/", ".next/", "coverage/"] 
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect" // ✅ Ensure React version is detected
      }
    }
  },
  {
    rules: {
      "@typescript-eslint/no-namespace": "off",
      "no-console": ["error", { allow: ["warn", "error"] }]
    }
  }
];