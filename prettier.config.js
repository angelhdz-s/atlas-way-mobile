// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  singleQuote: true,
  semi: true,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',
  trailingComma: 'es5',
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '<TYPES>',
    '<TYPES>^@/shared/(.*)$',
    '<TYPES>^@/presentation/(.*)$',
    '<TYPES>^@/modules/(.*)$',
    '<TYPES>^[.]',
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '^@/shared/(.*)$',
    '^@/presentation/(.*)$',
    '^@/modules/(.*)$',
    '^[./]',
  ],
};

module.exports = config;
