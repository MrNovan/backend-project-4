// eslint.config.js

import vitest from '@vitest/eslint-plugin';
import vitestGlobals from 'eslint-plugin-vitest-globals';
import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: {
      '@stylistic': stylistic,
      vitest,
      'vitest-globals': vitestGlobals,
    },
    rules: {
      // Stylistic
      '@stylistic/indent': ['error', 2],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],

      // Best Practices
      'no-debugger': 'error',
      'no-underscore-dangle': ['error', { allow: ['__filename', '__dirname'] }],
    },
  },
];
