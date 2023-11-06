const { defineConfig } = require('eslint-define-config');
// const prettierConfig = require("eslint-config-prettier");

module.exports = defineConfig({
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:import/recommended',
    './.eslintrc.prettier.js',
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
    'testing-library/await-async-queries': 'error',
    'testing-library/no-await-sync-queries': 'error',
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-dom-import': 'off',

    // NOTE sort imports
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
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
});
