const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: [
    "./.eslintrc.base.js",
    "next/core-web-vitals",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
});
