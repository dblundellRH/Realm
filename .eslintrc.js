const fs = require('fs');
const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  extends: ['plugin:jsx-control-statements/recommended'],
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'jsx-control-statements'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {

  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './internals/webpack/webpack.prod.babel.js',
      },
    },
  },
};
