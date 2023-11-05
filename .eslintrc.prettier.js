const { defineConfig } = require("eslint-define-config");
module.exports = defineConfig({
  extends: ["plugin:prettier/recommended"],
  plugins: ["prettier"],
  // rules: {
  //   "prettier/prettier": "error",
  // },
});
