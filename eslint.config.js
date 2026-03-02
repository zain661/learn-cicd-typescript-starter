import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import pluginSecurity from "eslint-plugin-security";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js, security: pluginSecurity },
    extends: ["js/recommended"],
    rules: {
      ...pluginSecurity.configs.recommended.rules,  // ← add this
    },
    languageOptions: {
      globals: { ...globals.node, ...globals.es2021 }
    }
  },
  tseslint.configs.recommended,
]);