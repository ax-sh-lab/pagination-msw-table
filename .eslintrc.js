const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  plugins: ["@tanstack/query"],
  extends: [
    "next/core-web-vitals",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
});
