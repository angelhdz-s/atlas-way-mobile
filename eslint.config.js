const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const jsEslint = require('@eslint/js');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const typescriptEslint = require('typescript-eslint');

module.exports = defineConfig([
  {
    files: ['**/*.{js,ts,tsx,jsx}'],
    extends: [
      expoConfig,
      eslintPluginPrettierRecommended,
      jsEslint.configs.recommended,
      typescriptEslint.configs.recommended,
    ],
    ignores: ['dist/*'],
    rules: {
      'prettier/prettier': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': 'error',
      'no-restricted-imports': 'off',
      '@typescript-eslint/no-restricted-imports': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
    },
  },
]);
