/* eslint import/no-extraneous-dependencies: "off" */
import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['dist', 'coverage'] }, // Этот должно быть здесь в отдельном объекте, чтобы применяться глобально
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    settings: {
      react: {
        version: 'detect',
      },
      // https://github.com/import-js/eslint-import-resolver-typescript#configuration
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      //'react-hooks': pluginHooks,
    },
    rules: {
     // 'react/react-in-jsx-scope': 'off',
     // ...pluginHooks.configs.recommended.rules,
    },
  },
];