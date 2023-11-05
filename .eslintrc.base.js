const { defineConfig } = require("eslint-define-config");
// const prettierConfig = require("eslint-config-prettier");

module.exports = defineConfig({
  extends: [
    "./.eslintrc.prettier.js",

    "plugin:import/recommended",
    // alternatively, 'recommended' is the combination of these two rule sets:
    // "plugin:import/errors",
    // "plugin:import/warnings",
  ],

  plugins: [
    "@tanstack/query",
    "simple-import-sort",
    // "node"
  ],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
});
