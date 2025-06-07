// .eslintrc.js

module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
    'vitest-globals/env': true,
  },
  extends: [
    'plugin:@stylistic/recommended',
    'plugin:vitest-globals/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
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
};