const {jsExtensions, tsExtensions} = require('./extensions');

const allExtensions = [...jsExtensions, ...tsExtensions];

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  settings: {
    'import/extensions': allExtensions,
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': tsExtensions,
    },
    'import/resolver': {
      node: {extensions: allExtensions},
      typescript: {}, // loads tsconfig.json to import plugin for path alias resolution
    },
  },
  globals: {
    __dirname: 'readonly',
    module: 'readonly',
    process: 'readonly',
    require: 'readonly',
  },
  rules: {
    // JavaScript
    'curly': ['warn', 'multi-line', 'consistent'],
    'eqeqeq': 'warn',
    'no-floating-decimal': 'warn',
    'no-multiple-empty-lines': ['warn', {max: 1, maxEOF: 1, maxBOF: 1}],
    'yoda': ['warn', 'never'],

    'max-len': 'off',

    'comma-dangle': ['warn', 'always-multiline'],
    'comma-spacing': ['warn', {before: false, after: true}],
    'computed-property-spacing': ['warn', 'never'],
    'eol-last': ['warn', 'always'],
    'func-style': ['warn', 'declaration', {allowArrowFunctions: false}],
    'linebreak-style': ['warn', 'unix'],
    'no-trailing-spaces': 'warn',

    'no-var': 'warn',
    'no-const-assign': 'warn',
    'prefer-const': 'warn',
    'prefer-template': 'warn',

    'jsx-quotes': ['warn', 'prefer-single'],

    'arrow-body-style': 'warn',
    'arrow-parens': ['warn', 'as-needed'],
    'dot-notation': 'warn',
    'no-array-constructor': 'warn',
    'no-else-return': 'warn',
    'no-param-reassign': 'warn',
    'no-unneeded-ternary': 'warn',
    'object-shorthand': 'warn',
    'one-var': ['warn', 'never'],
    'padded-blocks': ['warn', 'never'],
    'prefer-arrow-callback': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-object-spread': 'warn', // TypeScript

    '@typescript-eslint/array-type': [
      'warn',
      {
        default: 'generic',
        readonly: 'generic',
      },
    ],
    '@typescript-eslint/await-thenable': ['warn'],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    '@typescript-eslint/consistent-type-imports': ['warn', {prefer: 'type-imports'}],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['warn'],
    'brace-style': 'off',
    '@typescript-eslint/brace-style': 'off',
    'indent': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/member-ordering': 'warn',

    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['PascalCase'],
      },
    ],

    '@typescript-eslint/no-array-constructor': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': 'off',
    '@typescript-eslint/no-for-in-array': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-misused-new': 'warn',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-this-alias': 'warn',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/no-unsafe-argument': ['warn'],
    '@typescript-eslint/no-unsafe-assignment': ['warn'],
    '@typescript-eslint/no-unsafe-call': ['warn'],
    '@typescript-eslint/no-unsafe-member-access': ['warn'],
    '@typescript-eslint/no-unsafe-return': ['warn'],
    '@typescript-eslint/no-useless-constructor': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    'quotes': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/restrict-plus-operands': 'warn',
    'semi': 'off',
    '@typescript-eslint/semi': ['warn', 'always'],
    '@typescript-eslint/typedef': [
      'warn',
      {
        arrayDestructuring: false,
        arrowParameter: false,
        memberVariableDeclaration: false,
        objectDestructuring: false,
        parameter: false,
        propertyDeclaration: false,
        variableDeclaration: false,
      },
    ], // TypeScript compilation already ensures correctness of all imports

    'import/named': 'off',
    'import/default': 'off',
  },
};
