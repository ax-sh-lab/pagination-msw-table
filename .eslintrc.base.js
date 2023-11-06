const { defineConfig } = require('eslint-define-config');
// const prettierConfig = require("eslint-config-prettier");

module.exports = defineConfig({
  extends: [
    'plugin:@typescript-eslint/recommended',
    './.eslintrc.prettier.js',
    'plugin:import/recommended',
    // alternatively, 'recommended' is the combination of these two rule sets:
    // "plugin:import/errors",
    // "plugin:import/warnings",
  ],

  plugins: [
    '@typescript-eslint',
    '@tanstack/query',
    'simple-import-sort',
    'testing-library',
    // "node"
  ],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/named': 'warn',

    '@typescript-eslint/no-explicit-any': [
      'warn',
      {
        fixToUnknown: true,
      },
    ],

    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      extends: ['plugin:testing-library/react'],
    },
  ],
});
