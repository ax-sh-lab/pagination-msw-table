const { defineConfig } = require("eslint-define-config");
const prettierConfig = require("eslint-config-prettier");

module.exports = defineConfig({
  plugins: [
    "@tanstack/query",
    // "node",
    // "prettier",
  ],
  // extends: [
  //   // "prettier",
  //   // "standard",
  //   // "plugin:prettier/recommended",
  //   "next/core-web-vitals",
  // ],
  // rules: {
  //   "prettier/prettier": [
  //     "error",
  //     {
  //       singleQuote: true,
  //       parser: "flow",
  //     },
  //   ],
  // },
});
