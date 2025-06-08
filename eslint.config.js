import globals from 'globals';
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import * as espree from 'espree';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        // Указываем парсер явно:
        parser: espree,
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...importPlugin.configs.recommended.rules,

      'no-underscore-dangle': ['error', { allow: ['__filename', '__dirname'] }],
      'import/extensions': ['error', 'always', { js: 'always' }],
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'no-console': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },

  js.configs.recommended,
];
