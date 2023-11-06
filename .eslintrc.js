const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: [
    'next/core-web-vitals',
    // NOTE: Turns off all rules that are unnecessary or might conflict with Prettier.
    './.eslintrc.base.js',
    'prettier',
  ],
});
