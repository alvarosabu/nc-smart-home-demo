module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: ['plugin:vue/recommended', '@vue/prettier'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/html-no-self-closing': 0,
    'prettier/prettier': [
      'error',
      {
        htmlWhitespaceSensitivity: 'ignore',
        singleQuote: true,
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
