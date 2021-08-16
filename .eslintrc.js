module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'unicorn'],
  extends: ['plugin:@web-bee-ru/base'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './src/']],
        extensions: ['.ts', '.js'],
      },
    },
  },
  rules: {
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
      },
    ],
  },
  overrides: [],
};
