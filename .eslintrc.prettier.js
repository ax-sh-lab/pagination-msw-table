const { defineConfig } = require('eslint-define-config');
module.exports = defineConfig({
  extends: ['plugin:prettier/recommended'],
  // NOTE: Turns off all rules that are unnecessary or might conflict with Prettier.
  plugins: ['prettier'],
  // rules: {
  //   "prettier/prettier": "error",
  // },
});
