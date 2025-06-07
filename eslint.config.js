console.log('Importing plugins...');

import stylistic from '@stylistic/eslint-plugin';
import vitest from '@vitest/eslint-plugin';
import vitestGlobals from 'eslint-plugin-vitest-globals';

console.log('Plugins imported:', {
  stylistic: !!stylistic,
  vitest: !!vitest,
  vitestGlobals: !!vitestGlobals,
});

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
      '@stylistic/indent': ['error', 2],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
      'no-debugger': 'error',
      'no-underscore-dangle': ['error', { allow: ['__filename', '__dirname'] }],
    },
  },
];
