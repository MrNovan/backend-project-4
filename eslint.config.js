// eslint.config.js

import stylistic from '@stylistic/eslint-plugin';
import vitest from '@vitest/eslint-plugin';

export default [
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: {
      '@stylistic': stylistic,
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
